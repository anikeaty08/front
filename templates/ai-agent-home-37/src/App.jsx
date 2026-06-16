import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
              const form = document.getElementById('agent-form');
              const containers = document.querySelectorAll('.fields-container');
              const btnAddFields = document.querySelectorAll('.btn-add-field');
              const tabs = document.querySelectorAll('.tab-btn');

              // JSON elements
              const jsonDisplay = document.getElementById('json-display');
              const jsonEditor = document.getElementById('json-editor');

              // View transition elements
              const viewConfig = document.getElementById('view-config');
              const viewChat = document.getElementById('view-chat');
              const btnSave = document.getElementById('btn-save');
              const btnBack = document.getElementById('btn-back');

              // Chat header elements
              const chatName = document.getElementById('chat-agent-name');
              const chatRole = document.getElementById('chat-agent-role');

              let activeTab = 'agent';
              let isUpdatingJSON = false;
              let draggedElement = null;
              
              const configData = {
                  agent: {},
                  tasks: {},
                  guardrails: {}
              };

              // --- Drag & Drop functionality ---
              containers.forEach(container => {
                  container.addEventListener('mousedown', (e) => {
                      if (e.target.closest('.drag-handle')) {
                          const group = e.target.closest('.field-group');
                          if (group) group.setAttribute('draggable', 'true');
                      }
                  });

                  container.addEventListener('mouseup', (e) => {
                      const group = e.target.closest('.field-group');
                      if (group) group.setAttribute('draggable', 'false');
                  });

                  container.addEventListener('dragstart', (e) => {
                      const group = e.target.closest('.field-group');
                      if (!group) return;
                      draggedElement = group;
                      e.dataTransfer.effectAllowed = 'move';
                      setTimeout(() => {
                          group.classList.add('opacity-40', 'scale-[0.98]');
                      }, 0);
                  });

                  container.addEventListener('dragover', (e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = 'move';
                      const afterElement = getDragAfterElement(container, e.clientY);
                      if (afterElement == null) {
                          container.appendChild(draggedElement);
                      } else {
                          container.insertBefore(draggedElement, afterElement);
                      }
                  });

                  container.addEventListener('dragend', (e) => {
                      if (draggedElement) {
                          draggedElement.classList.remove('opacity-40', 'scale-[0.98]');
                          draggedElement.setAttribute('draggable', 'false');
                          draggedElement = null;
                          updateJSON();
                      }
                  });
              });

              function getDragAfterElement(container, y) {
                  const draggableElements = [...container.querySelectorAll('.field-group:not(.opacity-40)')];
                  return draggableElements.reduce((closest, child) => {
                      const box = child.getBoundingClientRect();
                      const offset = y - box.top - box.height / 2;
                      if (offset < 0 && offset > closest.offset) {
                          return { offset: offset, element: child };
                      } else {
                          return closest;
                      }
                  }, { offset: Number.NEGATIVE_INFINITY }).element;
              }

              // --- Utilities ---
              const escapeHtml = (unsafe) => {
                  return String(unsafe)
                       .replace(/&/g, "&amp;")
                       .replace(/</g, "&lt;")
                       .replace(/>/g, "&gt;")
                       .replace(/"/g, "&quot;")
                       .replace(/'/g, "&#039;");
              };

              const highlightJSON = (str) => {
                  return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                      let cls = 'text-stone-300';
                      if (/^"/.test(match)) {
                          if (/:$/.test(match)) {
                              cls = 'text-amber-200/90'; // keys
                          } else {
                              cls = 'text-green-300/80'; // strings
                          }
                      } else if (/true|false/.test(match)) {
                          cls = 'text-rose-300';
                      } else if (/null/.test(match)) {
                          cls = 'text-stone-500';
                      } else {
                          cls = 'text-blue-300/90'; // numbers
                      }
                      return '<span class="' + cls + '">' + match + '</span>';
                  });
              };

              // --- Sync functionality ---
              const updateJSON = () => {
                  if (isUpdatingJSON) return;

                  ['agent', 'tasks', 'guardrails'].forEach(section => {
                      configData[section] = {};
                      document.querySelectorAll(`#fields-${section} .field-group`).forEach(group => {
                          const keyInput = group.querySelector('.field-key');
                          const valInput = group.querySelector('.field-value');

                          if (keyInput && valInput) {
                              const key = keyInput.value.trim() || 'unnamed_field';
                              let val = valInput.value;

                              if (['skills', 'tools', 'tasks', 'integrations', 'guardrails'].includes(key.toLowerCase())) {
                                  val = val.split(',').map(s => s.trim()).filter(Boolean);
                              }

                              configData[section][key] = val;
                          }
                      });
                  });

                  const jsonString = JSON.stringify(configData[activeTab], null, 2);
                  jsonDisplay.innerHTML = highlightJSON(jsonString);
                  jsonEditor.value = jsonString;
              };

              const rebuildSection = (section, config) => {
                  isUpdatingJSON = true;
                  const container = document.getElementById(`fields-${section}`);
                  const seenKeys = new Set();

                  container.querySelectorAll('.field-group').forEach(group => {
                      const keyInput = group.querySelector('.field-key');
                      const valInput = group.querySelector('.field-value');
                      const key = keyInput.value.trim();

                      const matchedKey = Object.keys(config).find(k => k.toLowerCase() === key.toLowerCase());

                      if (matchedKey) {
                          let val = config[matchedKey];
                          valInput.value = Array.isArray(val) ? val.join(', ') : val;
                          keyInput.value = matchedKey;
                          seenKeys.add(matchedKey);
                      } else {
                          group.remove();
                      }
                  });

                  for (const [key, value] of Object.entries(config)) {
                      if (!seenKeys.has(key)) {
                          let displayValue = Array.isArray(value) ? value.join(', ') : value;
                          const fieldHtml = `
                              <div class="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
                                  <div class="flex items-center justify-between mb-1.5 px-1">
                                      <div class="flex gap-1.5 items-center">
                                          <div class="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
                                              <iconify-icon icon="solar:reorder-linear" class="text-xs"></iconify-icon>
                                          </div>
                                          <iconify-icon icon="solar:pen-2-linear" class="text-[10px] text-stone-400"></iconify-icon>
                                          <input type="text" class="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" value="${escapeHtml(key)}">
                                      </div>
                                      <button type="button" class="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400">
                                          <iconify-icon icon="solar:trash-bin-trash-linear" class="text-sm"></iconify-icon>
                                      </button>
                                  </div>
                                  <textarea class="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="2">${escapeHtml(String(displayValue))}</textarea>
                              </div>
                          `;
                          container.insertAdjacentHTML('beforeend', fieldHtml);
                      }
                  }

                  isUpdatingJSON = false;
                  updateJSON();
              };

              // --- Event Listeners ---
              tabs.forEach(tab => {
                  tab.addEventListener('click', () => {
                      tabs.forEach(t => {
                          t.classList.remove('border-yellow-500', 'text-stone-800');
                          t.classList.add('border-transparent', 'text-stone-400');
                      });
                      tab.classList.remove('border-transparent', 'text-stone-400');
                      tab.classList.add('border-yellow-500', 'text-stone-800');
                      
                      activeTab = tab.getAttribute('data-target');
                      updateJSON();
                  });
              });

              jsonDisplay.addEventListener('click', () => {
                  jsonDisplay.classList.add('hidden');
                  jsonEditor.classList.remove('hidden');
                  jsonEditor.focus();
              });

              jsonEditor.addEventListener('blur', () => {
                  jsonEditor.classList.add('hidden');
                  jsonDisplay.classList.remove('hidden');

                  try {
                      const parsed = JSON.parse(jsonEditor.value);
                      rebuildSection(activeTab, parsed);
                  } catch (err) {
                      jsonDisplay.innerHTML = highlightJSON(jsonEditor.value);
                  }
              });

              form.addEventListener('input', updateJSON);

              btnAddFields.forEach(btn => {
                btn.addEventListener('click', () => {
                    const targetId = btn.getAttribute('data-target');
                    const container = document.getElementById(targetId);
                    const fieldHtml = `
                        <div class="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60 animate-fade-in-up" draggable="false">
                            <div class="flex items-center justify-between mb-1.5 px-1">
                                <div class="flex gap-1.5 items-center">
                                    <div class="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
                                        <iconify-icon icon="solar:reorder-linear" class="text-xs"></iconify-icon>
                                    </div>
                                    <iconify-icon icon="solar:pen-2-linear" class="text-[10px] text-stone-400"></iconify-icon>
                                    <input type="text" class="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" value="custom_key">
                                </div>
                                <button type="button" class="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400">
                                    <iconify-icon icon="solar:trash-bin-trash-linear" class="text-sm"></iconify-icon>
                                </button>
                            </div>
                            <textarea class="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1" placeholder="Enter value..."></textarea>
                        </div>
                    `;
                    container.insertAdjacentHTML('beforeend', fieldHtml);
                    updateJSON();
                });
              });

              form.addEventListener('click', (e) => {
                  const removeBtn = e.target.closest('.btn-remove');
                  if (removeBtn) {
                      removeBtn.closest('.field-group').remove();
                      updateJSON();
                  }
              });

              updateJSON();

              btnSave.addEventListener('click', () => {
                  let currentName = 'Agent';
                  let currentRole = 'Assistant';

                  document.querySelectorAll('#fields-agent .field-group').forEach(group => {
                      const key = group.querySelector('.field-key').value.toLowerCase();
                      const val = group.querySelector('.field-value').value;
                      if (key === 'name') currentName = val || currentName;
                      if (key === 'job_title' || key === 'role') currentRole = val || currentRole;
                  });

                  chatName.textContent = currentName;
                  chatRole.textContent = currentRole;

                  viewConfig.classList.add('-translate-x-full');
                  viewConfig.classList.remove('translate-x-0');
                  viewChat.classList.remove('translate-x-full');
                  viewChat.classList.add('translate-x-0');
              });

              btnBack.addEventListener('click', () => {
                  viewConfig.classList.remove('-translate-x-full');
                  viewConfig.classList.add('translate-x-0');
                  viewChat.classList.add('translate-x-full');
                  viewChat.classList.remove('translate-x-0');
              });
          });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full mix-blend-multiply filter blur-[100px] bg-amber-200/40"></div>
<div className="absolute top-[30%] right-[15%] w-[35rem] h-[35rem] rounded-full mix-blend-multiply filter blur-[120px] bg-yellow-200/30"></div>
<div className="absolute bottom-[10%] left-[30%] w-[40rem] h-[40rem] rounded-full mix-blend-multiply filter blur-[120px] bg-stone-300/40"></div>
</div>

<div className="flex flex-col shrink-0 overflow-hidden bg-[#faf9f8] w-[1048px] h-[900px] rounded-[16px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 relative shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),0_30px_60px_-30px_rgba(0,0,0,0.2),inset_0_-2px_6px_0_rgba(10,37,64,0.1)] ring-1 ring-stone-900/5">

<div className="overflow-hidden bg-white/70 w-full h-full border-white/80 border rounded-xl relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.02)] backdrop-blur-2xl">

<div className="absolute inset-0 flex transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-x-0 bg-stone-50/30 z-10" id="view-config">

<div className="w-[55%] h-full flex flex-col border-r border-stone-200/80 bg-white/50">
<header className="shrink-0 bg-white/60 border-stone-200/80 border-b pt-6 pr-8 pb-5 pl-8 backdrop-blur-md">
<h1 className="flex items-center gap-2 text-xl font-medium text-stone-800 tracking-tight">
<iconify-icon className="text-yellow-600" height="24" icon="solar:settings-linear" strokeWidth="1.5" style={{color: 'rgb(202, 138, 4)'}} width="24"></iconify-icon>
                Configure Agent
              </h1>
<p className="leading-relaxed text-xs text-stone-500 mt-1.5">Define the identity, capabilities, and constraints for your AI assistant</p>
</header>
<form className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-8" id="agent-form">

<div className="mb-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-yellow-600" height="22" icon="solar:user-id-linear" strokeWidth="1.5" style={{color: 'rgb(202, 138, 4)'}} width="22"></iconify-icon>
<h2 className="text-xs font-semibold text-stone-800 uppercase tracking-widest">Agent Identity</h2>
<div className="h-px bg-stone-200 flex-1 ml-2"></div>
</div>
<div className="space-y-4 fields-container" data-section="agent" id="fields-agent">

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b px-0 py-0" type="text" value="name"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Vanessa Insights</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b px-0 py-0" type="text" value="job_title"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Insights Analyst</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b px-0 py-0" type="text" value="role"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="2">Analyze organizational data structures and present actionable business intelligence metrics.</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b px-0 py-0" type="text" value="backstory"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="2">Vanessa has a decade of experience scaling tech startups through rigorous empirical modeling.</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b px-0 py-0" type="text" value="personality"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Direct, empirical, professional yet approachable.</textarea>
</div>
<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60 animate-fade-in-up" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b px-0 py-0" type="text" value="custom_key"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" placeholder="Enter value..." rows="1"></textarea>
</div>
</div>
<button className="btn-add-field transition-colors flex gap-1 hover:text-stone-900 text-[11px] text-base font-medium text-stone-500 w-max mt-3 ml-2 gap-x-1 gap-y-1 items-center justify-start" data-target="fields-agent" type="button">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon> Add Field
                </button>
</div>

<div className="mb-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-yellow-600" height="22" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" style={{color: 'rgb(202, 138, 4)'}} width="22"></iconify-icon>
<h2 className="text-xs font-semibold text-stone-800 uppercase tracking-widest">Tasks &amp; Skills</h2>
<div className="h-px bg-stone-200 flex-1 ml-2"></div>
</div>
<div className="space-y-4 fields-container" data-section="tasks" id="fields-tasks">

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" type="text" value="skills"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Data collection, trend forecasting, statistical modeling</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" type="text" value="tools"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Python Execution, CSV Parser, Chart Generator</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" type="text" value="tasks"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Parse weekly logs, Generate summary reports</textarea>
</div>

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" type="text" value="integrations"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="1">Google Drive, Slack API</textarea>
</div>
</div>
<button className="btn-add-field mt-3 transition-colors flex gap-1 hover:text-stone-900 text-[11px] font-medium text-stone-500 w-max items-center justify-start ml-2" data-target="fields-tasks" type="button">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon> Add Field
                </button>
</div>

<div className="mb-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-yellow-600" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-xs font-semibold text-stone-800 uppercase tracking-widest">Constraints</h2>
<div className="h-px bg-stone-200 flex-1 ml-2"></div>
</div>
<div className="space-y-4 fields-container" data-section="guardrails" id="fields-guardrails">

<div className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60" draggable="false">
<div className="flex items-center justify-between mb-1.5 px-1">
<div className="flex gap-1.5 items-center">
<div className="drag-handle cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
<iconify-icon className="text-xs" icon="solar:reorder-linear"></iconify-icon>
</div>
<iconify-icon className="text-[10px] text-stone-400" icon="solar:pen-2-linear"></iconify-icon>
<input className="field-key block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-xs font-medium text-stone-600 bg-transparent w-24 border-stone-300 border-b p-0" type="text" value="guardrails"/>
</div>
<button className="btn-remove opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400" type="button">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<textarea className="field-value placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" rows="2">Do not hallucinate data points. Always cite sources, Avoid sharing Personally Identifiable Information (PII).</textarea>
</div>
</div>
<button className="btn-add-field mt-3 transition-colors flex gap-1 hover:text-stone-900 text-[11px] font-medium text-stone-500 w-max items-center justify-start ml-2" data-target="fields-guardrails" type="button">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon> Add Field
                </button>
</div>
</form>
<div className="p-5 border-t backdrop-blur-md shrink-0 flex justify-end gap-3 border-stone-200/80 bg-white/60">
<button className="px-5 py-2.5 text-sm font-medium transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg" type="button">
                Cancel
              </button>
<button className="transition-all flex hover:bg-stone-800 hover:shadow-md text-sm font-medium text-white bg-stone-900 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm gap-x-2 items-center" id="btn-save" type="button">
                Save &amp; Deploy
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="w-[45%] h-full bg-[#faf9f8] flex flex-col relative z-0">
<header className="px-5 py-4 border-b shrink-0 flex justify-between items-center backdrop-blur-md border-stone-200/80 bg-white/50">

<div className="flex gap-4 items-center" id="json-tabs">
<button className="text-[11px] font-semibold uppercase tracking-widest text-stone-800 border-b-2 border-yellow-500 pb-1 px-1 tab-btn transition-colors hover:text-stone-900" data-target="agent">agent.json</button>
<button className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 border-b-2 border-transparent pb-1 px-1 tab-btn transition-colors hover:text-stone-600 hover:border-stone-300" data-target="tasks">tasks.json</button>
<button className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 border-b-2 border-transparent pb-1 px-1 tab-btn transition-colors hover:text-stone-600 hover:border-stone-300" data-target="guardrails">guardrails.json</button>
</div>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(217,119,6,0.5)] bg-amber-500/90 animate-pulse"></div>
<span className="text-[10px] text-stone-400 font-medium">Live Sync</span>
</div>
</header>
<div className="flex-1 overflow-hidden group pt-5 pr-5 pb-5 pl-5 relative bg-gradient-to-br from-transparent to-stone-50/50">
<div className="absolute inset-5 bg-[#121211] rounded-2xl border shadow-xl flex flex-col overflow-hidden border-stone-800/80 ring-1 ring-white/5">

<div className="flex shrink-0 bg-[#1a1a19] h-9 border-stone-800 border-b px-4 items-center justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 hover:bg-red-500 transition-colors cursor-pointer bg-green-500 rounded-full"></div>
<div className="w-2.5 h-2.5 hover:bg-yellow-500 transition-colors cursor-pointer bg-yellow-300 rounded-full"></div>
<div className="w-2.5 h-2.5 hover:bg-green-500 transition-colors cursor-pointer bg-stone-50 rounded-full"></div>
</div>
<span className="text-[9px] uppercase group-hover:opacity-100 transition-opacity duration-300 text-stone-400 tracking-widest font-mono opacity-0">
                    Click to Edit
                  </span>
</div>

<div className="relative flex-1 bg-[#121211] overflow-hidden">

<pre className="overflow-auto dark-scrollbar whitespace-pre-wrap break-words leading-relaxed cursor-text transition-colors duration-150 z-10 text-[11px] hover:bg-white/[0.02] text-stone-300 font-mono pt-5 pr-5 pb-5 pl-5 absolute top-0 right-0 bottom-0 left-0" id="json-display">{
  <span className="text-amber-200/90">"name":</span> <span className="text-green-300/80">"Vanessa Insights"</span>,
  <span className="text-amber-200/90">"job_title":</span> <span className="text-green-300/80">"Insights Analyst"</span>,
  <span className="text-amber-200/90">"role":</span> <span className="text-green-300/80">"Analyze organizational data structures and present actionable business intelligence metrics."</span>,
  <span className="text-amber-200/90">"backstory":</span> <span className="text-green-300/80">"Vanessa has a decade of experience scaling tech startups through rigorous empirical modeling."</span>,
  <span className="text-amber-200/90">"personality":</span> <span className="text-green-300/80">"Direct, empirical, professional yet approachable."</span>,
  <span className="text-amber-200/90">"custom_key":</span> <span className="text-green-300/80">""</span>
}</pre>

<textarea className="border-none focus:ring-0 focus:outline-none resize-none dark-scrollbar whitespace-pre-wrap break-words leading-relaxed text-[11px] text-amber-400 font-mono bg-[#121211] w-full h-full z-30 pt-5 pr-5 pb-5 pl-5 absolute top-0 right-0 bottom-0 left-0 hidden" id="json-editor" spellcheck="false"></textarea>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-x-full backdrop-blur-2xl bg-[#faf9f8]/90 z-20" id="view-chat">
<header className="flex shrink-0 bg-white/90 border-stone-200 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between backdrop-blur-md shadow-sm relative z-10">
<div className="flex gap-4 items-center">
<button className="flex transition-all hover:bg-stone-100 hover:text-stone-900 text-stone-500 w-9 h-9 rounded-lg items-center justify-center border border-transparent hover:border-stone-200" id="btn-back">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex gap-3 items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 p-[1px] shadow-sm">
<div className="flex bg-white w-full h-full rounded-[7px] items-center justify-center">
<iconify-icon className="text-xl text-yellow-600" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h2 className="leading-tight text-sm font-medium text-stone-800 tracking-tight" id="chat-agent-name">Vanessa Insights</h2>
<div className="flex items-center gap-1.5 mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]"></div>
<p className="text-[11px] text-stone-500 font-medium" id="chat-agent-role">Insights Analyst</p>
</div>
</div>
</div>
</div>
<button className="flex transition-colors hover:bg-stone-100 text-stone-400 hover:text-stone-700 w-9 h-9 rounded-lg items-center justify-center">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</header>
<div className="flex-1 overflow-y-auto bg-transparent p-6 space-y-6 relative z-0">
<div className="flex max-w-[85%] gap-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="flex shrink-0 bg-gradient-to-br from-yellow-500 to-amber-600 w-10 h-10 rounded-lg items-center justify-center shadow-sm">
<iconify-icon className="text-lg text-white" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium text-stone-500 ml-1">Agent</span>
<div className="leading-relaxed text-sm text-stone-700 bg-white border border-stone-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  Hello! I'm configured and ready to help. I specialize in parsing CSVs, generating summaries, and creating charts based on my core skills. How can I assist you today?
                </div>
</div>
</div>
<div className="flex max-w-[85%] gap-4 flex-row-reverse ml-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<img alt="User" className="shrink-0 w-10 h-10 object-cover border border-stone-200 rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/3c569156-7c44-4e1f-926c-0bfb85c32f81/320w.png"/>
<div className="flex flex-col gap-1.5 items-end">
<span className="text-xs font-medium text-stone-500 mr-1">You</span>
<div className="leading-relaxed text-sm font-medium text-white bg-stone-900 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                  Can you analyze this sales_q3.csv file and give me a breakdown of revenue by region?
                </div>
</div>
</div>
<div className="flex max-w-[85%] gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<div className="flex shrink-0 bg-gradient-to-br from-yellow-500 to-amber-600 w-10 h-10 rounded-lg items-center justify-center shadow-sm">
<iconify-icon className="text-lg text-white" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex gap-1.5 bg-white border border-stone-200 h-11 rounded-2xl rounded-tl-sm px-4 shadow-sm items-center">
<div className="w-1.5 h-1.5 animate-bounce bg-yellow-500 rounded-full" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 animate-bounce bg-yellow-500 rounded-full" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 animate-bounce bg-yellow-500 rounded-full" style={{animationDelay: '300ms'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto mt-10 w-full animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
<span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
<iconify-icon className="text-lg text-yellow-600" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                  Summarize Data
                </span>
<span className="block text-xs text-stone-500">Generate a quick overview of metrics</span>
</button>
<button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
<span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
<iconify-icon className="text-lg text-yellow-600" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                  Trend Analysis
                </span>
<span className="block text-xs text-stone-500">Identify underlying market trends</span>
</button>
<button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
<span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
<iconify-icon className="text-lg text-yellow-600" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                  Predictive Modeling
                </span>
<span className="block text-xs text-stone-500">Forecast future outcomes</span>
</button>
<button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
<span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
<iconify-icon className="text-lg text-yellow-600" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                  Consumer Behavior
                </span>
<span className="block text-xs text-stone-500">Analyze purchasing patterns</span>
</button>
</div>
</div>
<div className="shrink-0 bg-white/80 backdrop-blur-xl border-stone-200 border-t p-4 relative z-10">
<div className="max-w-4xl mx-auto">
<div className="flex gap-2 focus-within:ring-2 focus-within:ring-yellow-600/10 focus-within:border-yellow-600/40 transition-all bg-white border-stone-300 border rounded-2xl p-2 relative shadow-sm items-end">
<button className="transition-colors shrink-0 hover:bg-stone-100 text-stone-400 hover:text-stone-600 rounded-lg p-2">
<iconify-icon className="text-xl" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
</button>
<textarea className="border-none focus:ring-0 resize-y placeholder-stone-400 overflow-y-auto text-sm text-stone-800 bg-transparent w-full max-h-32 py-2.5" placeholder="Message Agent..." rows="1"></textarea>
<button className="transition-all shrink-0 hover:bg-stone-800 text-white bg-stone-900 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="text-center mt-3">
<span className="text-[10px] text-stone-400 font-medium">Agent responses are generated by AI and may be inaccurate.</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
