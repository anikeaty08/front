import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // App State
      const state = {
        screen: "welcome",
        selectedTemplate: null,
        project: {
          name: "Untitled Playbook",
          members: [],
          start: "",
          end: "",
          tasks: [],
        },
        templates: {
          rfp: {
            name: "RFP Round",
            steps: [
              { title: "Define scope & criteria", role: "Program Lead" },
              { title: "Draft RFP guidelines", role: "Content" },
              { title: "Legal review", role: "Legal" },
              { title: "Publish RFP", role: "Comms" },
              { title: "Open submissions", role: "Program" },
              { title: "Triage & eligibility", role: "Ops" },
              { title: "Expert review", role: "Reviewers" },
              { title: "Panel deliberation", role: "Steering" },
              { title: "Notify applicants", role: "Comms" },
              { title: "Collect due diligence docs", role: "Compliance" },
              { title: "Finalize decisions", role: "Steering" },
              { title: "Public announcement", role: "Comms" },
            ],
          },
          hackathon: {
            name: "Hackathon Challenge",
            steps: [
              { title: "Set theme & goals", role: "Program Lead" },
              { title: "Publish challenge brief", role: "Comms" },
              { title: "Recruit mentors & judges", role: "Ops" },
              { title: "Open registrations", role: "Ops" },
              { title: "Kickoff & team formation", role: "Program" },
              { title: "Mentor office hours", role: "Mentors" },
              { title: "Judging & scoring", role: "Judges" },
              { title: "Winners & follow-up", role: "Comms" },
            ],
          },
          budget: {
            name: "Budget Request",
            steps: [
              { title: "Define budget window", role: "Finance" },
              { title: "Request template setup", role: "Ops" },
              { title: "Announce window", role: "Comms" },
              { title: "Collect requests", role: "Ops" },
              { title: "Initial screening", role: "Finance" },
              { title: "Adjustments & queries", role: "Finance" },
              { title: "Consolidate proposals", role: "Ops" },
              { title: "Approval meeting", role: "Steering" },
              { title: "Notify requestors", role: "Comms" },
              { title: "Publish final budget", role: "Finance" },
            ],
          },
        },
      };

      // Screen Navigation
      const screens = document.querySelectorAll("[data-screen]");
      function setScreen(name) {
        state.screen = name;
        screens.forEach((s) =>
          s.classList.toggle("hidden", s.getAttribute("data-screen") !== name)
        );
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      // Init
      setScreen("welcome");

      // Topbar New Project
      document.getElementById("topNewProject").addEventListener("click", () => {
        setScreen("newProject");
      });

      // Generic data-nav
      document.querySelectorAll("[data-nav]").forEach((el) => {
        el.addEventListener("click", () => {
          const to = el.getAttribute("data-nav");
          setScreen(to);
        });
      });

      // Start from scratch
      document.getElementById("startScratch").addEventListener("click", () => {
        state.project = {
          name: "Untitled Playbook",
          members: [],
          start: "",
          end: "",
          tasks: [],
        };
        document.getElementById("playbookTitle").textContent = state.project.name;
        setScreen("playbook");
        renderTasks();
        renderFlow();
      });

      // Open playbook from dashboard demo
      document.querySelectorAll("[data-open-playbook]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-open-playbook");
          if (state.templates[key]) {
            state.selectedTemplate = key;
            prepareCustomize(key);
            // directly open playbook prefilled for quick demo
            instantiateTemplateProject();
          }
        });
      });

      // Templates: preview and select
      const previewOverlay = document.getElementById("previewOverlay");
      const previewTitle = document.getElementById("previewTitle");
      const previewList = document.getElementById("previewList");
      const previewUse = document.getElementById("previewUse");

      document.getElementById("closePreview").addEventListener("click", () => {
        previewOverlay.classList.add("hidden");
      });

      document.querySelectorAll("[data-preview-template]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-preview-template");
          const t = state.templates[key];
          previewTitle.textContent = `${t.name} • ${t.steps.length} steps`;
          previewList.innerHTML = "";
          t.steps.forEach((s, i) => {
            const row = document.createElement("div");
            row.className = "flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 p-3";
            row.innerHTML = `
              <div class="flex items-center gap-3">
                <div class="h-6 w-6 rounded bg-neutral-900 border border-white/10 text-xs flex items-center justify-center text-neutral-400">${i + 1}</div>
                <div>
                  <div class="text-sm">${s.title}</div>
                  <div class="text-xs text-neutral-500">${s.role || "—"}</div>
                </div>
              </div>
              <i data-lucide="chevron-right" class="h-4 w-4 text-neutral-600"></i>
            `;
            previewList.appendChild(row);
          });
          previewUse.onclick = () => {
            state.selectedTemplate = key;
            prepareCustomize(key);
            previewOverlay.classList.add("hidden");
            setScreen("customize");
          };
          previewOverlay.classList.remove("hidden");
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      });

      document.querySelectorAll("[data-select-template]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-select-template");
          state.selectedTemplate = key;
          prepareCustomize(key);
          setScreen("customize");
        });
      });

      function prepareCustomize(key) {
        const t = state.templates[key];
        document.getElementById("projectName").value = `${t.name} – New`;
        document.getElementById("selectedMembers").textContent = "None";
        // Reset member selections
        state.project.members = [];
        document.querySelectorAll("#memberPool .member-chip").forEach((chip) => {
          chip.classList.remove("ring-2", "ring-[#8338EC]");
        });
      }

      // Customize: member selection
      document.querySelectorAll("#memberPool .member-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          const name = chip.getAttribute("data-member");
          const idx = state.project.members.indexOf(name);
          if (idx >= 0) {
            state.project.members.splice(idx, 1);
            chip.classList.remove("ring-2", "ring-[#8338EC]");
          } else {
            state.project.members.push(name);
            chip.classList.add("ring-2", "ring-[#8338EC]");
          }
          document.getElementById("selectedMembers").textContent =
            state.project.members.length ? state.project.members.join(", ") : "None";
        });
      });

      // Create project from template
      document.getElementById("createFromTemplate").addEventListener("click", () => {
        instantiateTemplateProject();
        setScreen("playbook");
      });

      function instantiateTemplateProject() {
        const key = state.selectedTemplate;
        if (!state.templates[key]) return;
        const t = state.templates[key];
        state.project.name = document.getElementById("projectName").value || `${t.name} – New`;
        state.project.start = document.getElementById("startDate").value || "";
        state.project.end = document.getElementById("endDate").value || "";
        state.project.tasks = t.steps.map((s, i) => ({
          id: crypto.randomUUID(),
          title: s.title,
          role: s.role || "",
          assignees: [...state.project.members],
          start: state.project.start,
          end: state.project.end,
          index: i,
        }));
        document.getElementById("playbookTitle").textContent = state.project.name;
        renderTasks();
        renderFlow();
      }

      // Task Rendering
      const taskList = document.getElementById("taskList");
      function renderTasks() {
        taskList.innerHTML = "";
        state.project.tasks.forEach((task, i) => {
          const row = document.createElement("div");
          row.className =
            "group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-neutral-950/50 p-3 hover:border-white/20 transition";
          row.innerHTML = `
            <div class="flex items-center gap-3 min-w-0">
              <div class="h-6 w-6 rounded bg-neutral-900 border border-white/10 text-xs flex items-center justify-center text-neutral-400">${i + 1}</div>
              <div class="min-w-0">
                <div class="text-sm truncate">${task.title}</div>
                <div class="text-xs text-neutral-500 truncate">${task.role || "—"}</div>
              </div>
            </div>
            <div class="hidden md:flex items-center gap-3 text-xs text-neutral-400">
              <div class="inline-flex items-center gap-1">
                <i data-lucide="users" class="h-4 w-4"></i>
                ${task.assignees.length ? task.assignees.join(", ") : "Unassigned"}
              </div>
              <div class="inline-flex items-center gap-1">
                <i data-lucide="calendar" class="h-4 w-4"></i>
                ${task.start || "—"} → ${task.end || "—"}
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button data-edit="${task.id}" class="h-8 w-8 rounded-lg border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center">
                <i data-lucide="pencil" class="h-4 w-4"></i>
              </button>
              <button data-del="${task.id}" class="h-8 w-8 rounded-lg border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center">
                <i data-lucide="trash-2" class="h-4 w-4"></i>
              </button>
            </div>
          `;
          taskList.appendChild(row);
        });
        // bind edit/delete
        taskList.querySelectorAll("[data-del]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-del");
            state.project.tasks = state.project.tasks.filter((t) => t.id !== id);
            renderTasks();
            renderFlow();
          });
        });
        taskList.querySelectorAll("[data-edit]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-edit");
            openWizardForEdit(id);
          });
        });
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      // Flowchart Rendering
      const flowChart = document.getElementById("flowChart");
      let flowAsNodes = true;
      document.getElementById("toggleView").addEventListener("click", () => {
        flowAsNodes = !flowAsNodes;
        renderFlow();
      });

      function renderFlow() {
        flowChart.innerHTML = "";
        if (!state.project.tasks.length) {
          flowChart.innerHTML =
            '<div class="text-sm text-neutral-400">No tasks yet. Add one to see the flow.</div>';
          return;
        }
        if (flowAsNodes) {
          // Horizontal nodes with arrows
          const wrap = document.createElement("div");
          wrap.className = "overflow-x-auto";
          const row = document.createElement("div");
          row.className = "inline-flex items-center gap-2 pr-2";
          state.project.tasks.forEach((t, i) => {
            const node = document.createElement("div");
            node.className =
              "min-w-[180px] rounded-xl border border-white/10 bg-neutral-950/70 p-3";
            node.innerHTML = `
              <div class="text-xs text-neutral-500">${i + 1}</div>
              <div class="text-sm font-medium truncate">${t.title}</div>
              <div class="text-xs text-neutral-500 truncate">${t.role || "—"}</div>
            `;
            row.appendChild(node);
            if (i < state.project.tasks.length - 1) {
              const arrow = document.createElement("i");
              arrow.setAttribute("data-lucide", "arrow-right");
              arrow.className = "h-4 w-4 text-neutral-600";
              row.appendChild(arrow);
            }
          });
          wrap.appendChild(row);
          flowChart.appendChild(wrap);
        } else {
          // Column lanes by role
          const roles = [...new Set(state.project.tasks.map((t) => t.role || "Unassigned"))];
          const grid = document.createElement("div");
          grid.className = "grid grid-cols-2 md:grid-cols-3 gap-3";
          roles.forEach((role) => {
            const col = document.createElement("div");
            col.className =
              "rounded-xl border border-white/10 bg-neutral-950/50 p-3";
            col.innerHTML = `
              <div class="text-xs text-neutral-400 mb-2">${role}</div>
            `;
            state.project.tasks
              .filter((t) => (t.role || "Unassigned") === role)
              .forEach((t, i) => {
                const card = document.createElement("div");
                card.className =
                  "mb-2 rounded-lg border border-white/10 bg-neutral-900/60 p-2";
                card.innerHTML = `
                  <div class="text-xs font-medium">${t.title}</div>
                  <div class="text-[11px] text-neutral-500">${t.start || "—"} → ${t.end || "—"}</div>
                `;
                col.appendChild(card);
              });
            grid.appendChild(col);
          });
          flowChart.appendChild(grid);
        }
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      // Wizard logic
      const wizardOverlay = document.getElementById("wizardOverlay");
      const wizBack = document.getElementById("wizBack");
      const wizNext = document.getElementById("wizNext");
      const wizSave = document.getElementById("wizSave");
      const closeWizard = document.getElementById("closeWizard");
      const wizTitle = document.getElementById("wizTitle");
      const wizRole = document.getElementById("wizRole");
      const wizStart = document.getElementById("wizStart");
      const wizEnd = document.getElementById("wizEnd");
      const wizAssigneesWrap = document.getElementById("wizAssignees");
      let currentStep = 1;
      let editingTaskId = null;

      function openWizard(forEdit = false) {
        currentStep = 1;
        editingTaskId = null;
        // reset fields
        wizTitle.value = "";
        wizRole.value = "";
        wizStart.value = "";
        wizEnd.value = "";
        // clone member chips
        wizAssigneesWrap.innerHTML = "";
        document.querySelectorAll("#memberPool .member-chip").forEach((chip) => {
          const c = chip.cloneNode(true);
          c.classList.remove("ring-2", "ring-[#8338EC]");
          c.addEventListener("click", () => {
            c.classList.toggle("ring-2");
            c.classList.toggle("ring-[#8338EC]");
          });
          wizAssigneesWrap.appendChild(c);
        });
        // steps visibility
        setWizardStep(1);
        wizardOverlay.classList.remove("hidden");
      }

      function openWizardForEdit(id) {
        const task = state.project.tasks.find((t) => t.id === id);
        if (!task) return;
        openWizard(true);
        editingTaskId = id;
        wizTitle.value = task.title;
        wizRole.value = task.role || "";
        wizStart.value = task.start || "";
        wizEnd.value = task.end || "";
        // select assignees
        Array.from(wizAssigneesWrap.querySelectorAll(".member-chip")).forEach((c) => {
          const name = c.getAttribute("data-member");
          if (task.assignees.includes(name)) {
            c.classList.add("ring-2", "ring-[#8338EC]");
          }
        });
      }

      function setWizardStep(n) {
        currentStep = n;
        document.querySelectorAll('#wizardOverlay [data-step]').forEach((s) => {
          s.classList.toggle('hidden', Number(s.getAttribute('data-step')) !== n);
        });
        // Update dots bg
        const dots = wizardOverlay.querySelectorAll(".step-dot");
        dots.forEach((d, i) => {
          d.classList.toggle("bg-neutral-800", i + 1 <= n);
          d.classList.toggle("bg-neutral-900", i + 1 > n);
        });
        wizBack.classList.toggle("opacity-50", n === 1);
        wizBack.disabled = n === 1;
        wizNext.classList.toggle("hidden", n === 3);
        wizSave.classList.toggle("hidden", n !== 3);
      }

      wizBack.addEventListener("click", () => {
        if (currentStep > 1) setWizardStep(currentStep - 1);
      });
      wizNext.addEventListener("click", () => {
        setWizardStep(currentStep + 1);
      });
      document.getElementById("closeWizard").addEventListener("click", () => {
        wizardOverlay.classList.add("hidden");
      });

      document.getElementById("addTask").addEventListener("click", () => openWizard());
      document.getElementById("openWizardFromToolbar").addEventListener("click", () => openWizard());

      wizSave.addEventListener("click", () => {
        const selected = Array.from(wizAssigneesWrap.querySelectorAll(".member-chip.ring-2")).map((c) =>
          c.getAttribute("data-member")
        );
        const payload = {
          title: wizTitle.value || "Untitled task",
          role: wizRole.value || "",
          assignees: selected,
          start: wizStart.value || "",
          end: wizEnd.value || "",
        };
        if (editingTaskId) {
          state.project.tasks = state.project.tasks.map((t) =>
            t.id === editingTaskId ? { ...t, ...payload } : t
          );
        } else {
          state.project.tasks.push({
            id: crypto.randomUUID(),
            index: state.project.tasks.length,
            ...payload,
          });
        }
        wizardOverlay.classList.add("hidden");
        renderTasks();
        renderFlow();
      });

      // Close previews/wizard on overlay click
      previewOverlay.addEventListener("click", (e) => {
        if (e.target === previewOverlay) previewOverlay.classList.add("hidden");
      });
      wizardOverlay.addEventListener("click", (e) => {
        if (e.target === wizardOverlay) wizardOverlay.classList.add("hidden");
      });

      // Quick nav from welcome buttons
      document.querySelectorAll("[data-nav='dashboard']").forEach((b) =>
        b.addEventListener("click", () => setScreen("dashboard"))
      );
      document.querySelectorAll("[data-nav='templates']").forEach((b) =>
        b.addEventListener("click", () => setScreen("templates"))
      );

      // Preview "Use this template" fallback if opened directly
      previewUse.addEventListener("click", () => {
        if (!state.selectedTemplate) return;
        prepareCustomize(state.selectedTemplate);
        previewOverlay.classList.add("hidden");
        setScreen("customize");
      });

      // Create project from dashboard quick open uses instantiateTemplateProject directly
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#8338EC]/15 ring-1 ring-[#8338EC]/30">

<span className="text-[#8338EC] text-sm font-semibold tracking-tighter">DF</span>
</div>
<div className="flex flex-col leading-none">
<div className="text-sm text-neutral-300">Operations Cubix</div>
<div className="text-base font-semibold tracking-tight">Playbooks</div>
</div>
<span className="ml-3 hidden md:inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-neutral-400">DeepFunding</span>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2">
<div className="relative group">
<input className="h-9 w-64 rounded-lg bg-neutral-900/70 outline-none pl-9 pr-3 text-sm placeholder:text-neutral-500 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 transition" id="search" placeholder="Search playbooks..."/>
<i className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500" data-lucide="search"></i>
</div>
<button className="h-9 px-3 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white transition inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="bell"></i>
                Alerts
              </button>
</div>
<button className="h-9 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" id="topNewProject">
<i className="h-4 w-4" data-lucide="plus"></i>
              New Project
            </button>
<button className="ml-1 h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 transition flex items-center justify-center">
<img alt="avatar" className="h-6 w-6 rounded" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="welcome-screen" data-screen="welcome">
<div className="relative">
<div className="absolute inset-0 -z-10 opacity-60">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(131,56,236,0.16),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,0,184,0.12),transparent_60%)]"></div>
</div>
<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
<i className="h-4 w-4 text-[#FF00B8]" data-lucide="sparkles"></i>
                    DeepFunding • Collaborative Playbooks
                  </div>
<h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                    Plan, run, and deliver operations with clarity.
                  </h1>
<p className="mt-4 text-neutral-400 max-w-xl">
                    Create projects from scratch or start with pre-built templates:
                    RFP Round, Hackathon Challenge, or Budget Request. Simple steps, clear roles, and smooth collaboration.
                  </p>
<div className="mt-8 flex items-center gap-3">
<button className="h-11 px-5 rounded-xl bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" data-nav="dashboard">
<i className="h-5 w-5" data-lucide="play"></i>
                      Enter Workspace
                    </button>
<button className="h-11 px-5 rounded-xl border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white transition inline-flex items-center gap-2" data-nav="templates">
<i className="h-5 w-5" data-lucide="rows"></i>
                      Browse Templates
                    </button>
</div>
<div className="mt-8 flex items-center gap-6 text-neutral-400 text-sm">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="clock"></i>
                      Wizard-style task creation
                    </div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="send"></i>
                      Future export to TMS
                    </div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="message-square"></i>
                      Mattermost reminders
                    </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 blur-2xl bg-[#8338EC]/10 rounded-3xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6">

<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Recent Playbooks</div>
<button className="text-xs text-[#8338EC] hover:text-[#8338EC]/80">View all</button>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-400" data-lucide="layers"></i>
<div>
<div className="text-sm font-medium">RFP Round – Q3</div>
<div className="text-xs text-neutral-500">12 steps • Updated 2d ago</div>
</div>
</div>
<span className="text-[11px] text-[#FF00B8]">In progress</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-400" data-lucide="git-branch"></i>
<div>
<div className="text-sm font-medium">Hackathon – Dev Guild</div>
<div className="text-xs text-neutral-500">8 steps • Updated 5d ago</div>
</div>
</div>
<span className="text-[11px] text-neutral-400">Draft</span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-neutral-400" data-lucide="wallet"></i>
<div>
<div className="text-sm font-medium">Budget Request – Ops</div>
<div className="text-xs text-neutral-500">10 steps • Updated 1w ago</div>
</div>
</div>
<span className="text-[11px] text-emerald-400">Completed</span>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3">
<div className="text-[11px] text-neutral-400">Tasks</div>
<div className="text-lg font-semibold tracking-tight">30</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3">
<div className="text-[11px] text-neutral-400">Members</div>
<div className="text-lg font-semibold tracking-tight">12</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3">
<div className="text-[11px] text-neutral-400">On track</div>
<div className="text-lg font-semibold tracking-tight">86%</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-14 text-center text-xs text-neutral-500">
                Tip: You can start from a template and customize steps, roles, and dates anytime.
              </div>
</div>
</div>
</section>

<section className="hidden" data-screen="dashboard">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h2>
<p className="mt-1 text-neutral-400 text-sm">Your playbooks and templates in one place.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" data-nav="newProject">
<i className="h-4 w-4" data-lucide="plus"></i>
                  New Project
                </button>
<button className="h-10 px-4 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white transition inline-flex items-center gap-2" data-nav="templates">
<i className="h-4 w-4" data-lucide="rows"></i>
                  Templates
                </button>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="layers"></i>
<div>
<div className="font-medium">RFP Round – Q3</div>
<div className="text-xs text-neutral-500">12 steps • Last update 2d</div>
</div>
</div>
<span className="text-[11px] text-[#FF00B8]">In progress</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<button className="text-sm text-[#8338EC] hover:text-[#8338EC]/80 inline-flex items-center gap-1" data-open-playbook="rfp">
                    Open <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="git-branch"></i>
<div>
<div className="font-medium">Hackathon – Dev Guild</div>
<div className="text-xs text-neutral-500">8 steps • Last update 5d</div>
</div>
</div>
<span className="text-[11px] text-neutral-400">Draft</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<button className="text-sm text-[#8338EC] hover:text-[#8338EC]/80 inline-flex items-center gap-1" data-open-playbook="hackathon">
                    Open <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="wallet"></i>
<div>
<div className="font-medium">Budget Request – Ops</div>
<div className="text-xs text-neutral-500">10 steps • Last update 1w</div>
</div>
</div>
<span className="text-[11px] text-emerald-400">Completed</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<button className="text-sm text-[#8338EC] hover:text-[#8338EC]/80 inline-flex items-center gap-1" data-open-playbook="budget">
                    Open <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="mt-10">
<div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/40 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="file-plus"></i>
<div>
<div className="font-medium">Create a new playbook</div>
<div className="text-sm text-neutral-400">Start from scratch or use a template.</div>
</div>
</div>
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" data-nav="newProject">
<i className="h-4 w-4" data-lucide="plus"></i> New Project
                </button>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="newProject">
<div className="mx-auto max-w-5xl px-6 py-10">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">New Project</h2>
<p className="mt-1 text-neutral-400 text-sm">Choose how you want to start.</p>
</div>
<button className="h-10 px-4 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2" data-nav="dashboard">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                Back
              </button>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<button className="group text-left rounded-2xl border border-white/10 hover:border-white/20 bg-neutral-900/60 p-6 transition" id="startScratch">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-center">
<i className="h-6 w-6 text-neutral-300" data-lucide="pencil"></i>
</div>
<div>
<div className="text-lg font-medium tracking-tight">Create from scratch</div>
<p className="mt-1 text-sm text-neutral-400">Define your steps, roles, and dates using the simple wizard.</p>
<div className="mt-5 inline-flex items-center gap-2 text-[#8338EC] group-hover:text-[#8338EC]/80 text-sm">
                      Start <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</button>
<button className="group text-left rounded-2xl border border-white/10 hover:border-white/20 bg-neutral-900/60 p-6 transition" data-nav="templates">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-center">
<i className="h-6 w-6 text-neutral-300" data-lucide="rows"></i>
</div>
<div>
<div className="text-lg font-medium tracking-tight">Use a template</div>
<p className="mt-1 text-sm text-neutral-400">Start with best-practice steps and customize to fit your team.</p>
<div className="mt-5 inline-flex items-center gap-2 text-[#8338EC] group-hover:text-[#8338EC]/80 text-sm">
                      Browse templates <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</button>
</div>
</div>
</section>

<section className="hidden" data-screen="templates">
<div className="mx-auto max-w-6xl px-6 py-10">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Templates Library</h2>
<p className="mt-1 text-neutral-400 text-sm">Pick a starting point and customize.</p>
</div>
<button className="h-10 px-4 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2" data-nav="newProject">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                Back
              </button>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="layers"></i>
<div>
<div className="font-medium tracking-tight">RFP Round</div>
<div className="text-xs text-neutral-500">12 steps</div>
</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Manage end-to-end proposal intake, review, selection, and communication.</p>
<div className="mt-5 flex items-center justify-between">
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" data-select-template="rfp">
<i className="h-4 w-4" data-lucide="check-circle"></i> Use template
                  </button>
<button className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-1" data-preview-template="rfp">
                    Preview <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="git-branch"></i>
<div>
<div className="font-medium tracking-tight">Hackathon Challenge</div>
<div className="text-xs text-neutral-500">8 steps</div>
</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Plan, recruit, run live sessions, judge, and announce winners.</p>
<div className="mt-5 flex items-center justify-between">
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" data-select-template="hackathon">
<i className="h-4 w-4" data-lucide="check-circle"></i> Use template
                  </button>
<button className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-1" data-preview-template="hackathon">
                    Preview <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="wallet"></i>
<div>
<div className="font-medium tracking-tight">Budget Request</div>
<div className="text-xs text-neutral-500">10 steps</div>
</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Submit, review, adjust, approve, and communicate budget allocations.</p>
<div className="mt-5 flex items-center justify-between">
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" data-select-template="budget">
<i className="h-4 w-4" data-lucide="check-circle"></i> Use template
                  </button>
<button className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-1" data-preview-template="budget">
                    Preview <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="customize">
<div className="mx-auto max-w-4xl px-6 py-10">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Customize Template</h2>
<p className="mt-1 text-neutral-400 text-sm">Name, members, and timeframe.</p>
</div>
<button className="h-10 px-4 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2" data-nav="templates">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
                Back
              </button>
</div>
<div className="mt-8 grid gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<label className="text-sm text-neutral-300">Project name</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="projectName" placeholder="e.g., RFP Round – Q4 Grants"/>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="flex items-center justify-between">
<label className="text-sm text-neutral-300">Assign members</label>
<div className="text-xs text-neutral-500">Drag to order importance</div>
</div>
<div className="mt-4 flex flex-wrap gap-3" id="memberPool">

<button className="member-chip inline-flex items-center gap-2 px-3 h-9 rounded-full bg-neutral-950 border border-white/10 hover:border-white/20 text-sm text-neutral-300" data-member="Ana">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
                    Ana
                  </button>
<button className="member-chip inline-flex items-center gap-2 px-3 h-9 rounded-full bg-neutral-950 border border-white/10 hover:border-white/20 text-sm text-neutral-300" data-member="Dev">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
                    Dev
                  </button>
<button className="member-chip inline-flex items-center gap-2 px-3 h-9 rounded-full bg-neutral-950 border border-white/10 hover:border-white/20 text-sm text-neutral-300" data-member="Liu">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
                    Liu
                  </button>
<button className="member-chip inline-flex items-center gap-2 px-3 h-9 rounded-full bg-neutral-950 border border-white/10 hover:border-white/20 text-sm text-neutral-300" data-member="Sam">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
                    Sam
                  </button>
<button className="member-chip inline-flex items-center gap-2 px-3 h-9 rounded-full bg-neutral-950 border border-white/10 hover:border-white/20 text-sm text-neutral-300" data-member="Mo">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
                    Mo
                  </button>
</div>
<div className="mt-4 text-sm text-neutral-400">
                  Selected: <span className="text-neutral-200" id="selectedMembers">None</span>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-300">Start date</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="startDate" type="date"/>
</div>
<div>
<label className="text-sm text-neutral-300">End date</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="endDate" type="date"/>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">

<button className="inline-flex items-center gap-2 text-sm text-neutral-400 cursor-not-allowed" disabled="">
<span className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/10 bg-neutral-900">
<span className="absolute left-0.5 h-4 w-4 rounded-full bg-neutral-700 border border-white/10"></span>
</span>
                    Mattermost reminders (soon)
                  </button>

<button className="inline-flex items-center gap-2 text-sm text-neutral-400 cursor-not-allowed" disabled="">
<i className="h-4 w-4" data-lucide="send"></i> Export to TMS (soon)
                  </button>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white transition" data-nav="templates">Cancel</button>
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium transition inline-flex items-center gap-2" id="createFromTemplate">
<i className="h-4 w-4" data-lucide="play"></i> Create project
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="playbook">
<div className="mx-auto max-w-7xl px-6 py-10">

<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<button className="inline-flex items-center gap-1 hover:text-white" data-nav="dashboard">
<i className="h-4 w-4" data-lucide="home"></i> Dashboard
                </button>
<i className="h-4 w-4 text-neutral-600" data-lucide="chevron-right"></i>
<span className="text-neutral-300">Playbook</span>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg border border-white/10 hover:border-white/20 text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2" id="toggleView">
<i className="h-4 w-4" data-lucide="list-tree"></i>
                  Flowchart view
                </button>
<button className="h-9 px-3 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium inline-flex items-center gap-2" id="openWizardFromToolbar">
<i className="h-4 w-4" data-lucide="plus"></i>
                  Add Task
                </button>
</div>
</div>

<div className="mt-6 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<div className="text-sm text-neutral-400">Project</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="playbookTitle">Untitled Playbook</div>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-3 rounded-lg border border-white/10 text-sm text-neutral-400 cursor-not-allowed inline-flex items-center gap-2" disabled="">
<i className="h-4 w-4" data-lucide="send"></i> Export to TMS (soon)
                  </button>
<button className="h-9 px-3 rounded-lg border border-white/10 text-sm text-neutral-400 cursor-not-allowed inline-flex items-center gap-2" disabled="">
<i className="h-4 w-4" data-lucide="message-square"></i> Mattermost (soon)
                  </button>
</div>
</div>
</div>

<div className="mt-6 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Tasks</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-xs font-medium inline-flex items-center gap-2" id="addTask">
<i className="h-4 w-4" data-lucide="plus"></i> Add
                    </button>
</div>
</div>
<div className="mt-4 space-y-2" id="taskList">

</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Flowchart</div>
<span className="text-xs text-neutral-500">Auto-generated</span>
</div>
<div className="mt-4" id="flowChart">

</div>
</div>
</div>
</div>
</section>
</main>

<div className="hidden fixed inset-0 z-50" id="wizardOverlay">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative mx-auto max-w-lg mt-16 rounded-2xl border border-white/10 bg-neutral-900/90 p-5 backdrop-blur">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-400">New Task</div>
<div className="text-lg font-semibold tracking-tight">Wizard</div>
</div>
<button className="h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center" id="closeWizard">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>

<div className="mt-4 flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="step-dot h-7 w-7 rounded-full border border-white/10 bg-neutral-800 text-xs flex items-center justify-center">1</div>
<div className="text-xs text-neutral-400">Title</div>
</div>
<i className="h-4 w-4 text-neutral-600" data-lucide="chevron-right"></i>
<div className="flex items-center gap-2">
<div className="step-dot h-7 w-7 rounded-full border border-white/10 bg-neutral-900 text-xs flex items-center justify-center">2</div>
<div className="text-xs text-neutral-400">Assignees</div>
</div>
<i className="h-4 w-4 text-neutral-600" data-lucide="chevron-right"></i>
<div className="flex items-center gap-2">
<div className="step-dot h-7 w-7 rounded-full border border-white/10 bg-neutral-900 text-xs flex items-center justify-center">3</div>
<div className="text-xs text-neutral-400">Dates</div>
</div>
</div>
<div className="mt-5 space-y-5">

<div data-step="1">
<label className="text-sm text-neutral-300">Task title</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="wizTitle" placeholder="e.g., Publish RFP guidelines"/>
<label className="mt-4 block text-sm text-neutral-300">Role (optional)</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="wizRole" placeholder="e.g., Program Lead"/>
</div>

<div className="hidden" data-step="2">
<label className="text-sm text-neutral-300">Assignees</label>
<div className="mt-2 flex flex-wrap gap-2" id="wizAssignees">

</div>
<div className="mt-2 text-xs text-neutral-500">Tip: Click to toggle selection.</div>
</div>

<div className="hidden" data-step="3">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-300">Start date</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="wizStart" type="date"/>
</div>
<div>
<label className="text-sm text-neutral-300">End date</label>
<input className="mt-2 w-full h-11 rounded-xl bg-neutral-950 border border-white/10 focus:border-[#8338EC]/50 focus:ring-2 focus:ring-[#8338EC]/30 outline-none px-3 text-sm" id="wizEnd" type="date"/>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<button className="h-10 px-4 rounded-lg border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-white/20" id="wizBack">Back</button>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium" id="wizNext">Next</button>
<button className="hidden h-10 px-4 rounded-lg bg-[#FF00B8] hover:bg-[#FF00B8]/90 text-white text-sm font-medium" id="wizSave">Save task</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50" id="previewOverlay">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative mx-auto max-w-2xl mt-16 rounded-2xl border border-white/10 bg-neutral-900/90 p-5 backdrop-blur">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-400">Template Preview</div>
<div className="text-lg font-semibold tracking-tight" id="previewTitle"></div>
</div>
<button className="h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white flex items-center justify-center" id="closePreview">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 space-y-2 max-h-[50vh] overflow-auto pr-1" id="previewList">

</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="h-10 px-4 rounded-lg bg-[#8338EC] hover:bg-[#8338EC]/90 text-white text-sm font-medium" id="previewUse">Use this template</button>
</div>
</div>
</div>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-6 py-6 text-xs text-neutral-500 flex items-center justify-between">
<div>© DeepFunding • Playbook App</div>
<div className="flex items-center gap-4">
<span>v0.1 Wireframes</span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="shield"></i> Privacy
            </span>
</div>
</div>
</footer>
</div>


    </>
  );
}
