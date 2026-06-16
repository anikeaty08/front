import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        // Icons
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Mock data
        const mockPost = {
          id: 'NA-1024',
          title: 'Workspace 2.7 Release: Faster search, new dashboards, and SSO improvements',
          category: 'Product Updates',
          audience: 'Customers',
          status: 'Scheduled', // 'Draft' | 'Published' | 'Scheduled'
          scheduledFor: '2025-11-12T14:30:00Z',
          publishedAt: null,
          createdAt: '2025-10-15T09:12:00Z',
          content: `
            <p>We’re excited to share the highlights of our <strong>Workspace 2.7</strong> update. This release focuses on speed, visibility, and security to make your day-to-day smoother.</p>
            <h3>What’s new</h3>
            <ul>
              <li><strong>Blazing-fast search</strong>: Up to 3× faster across projects, docs, and people.</li>
              <li><strong>Dashboards</strong>: Curate KPI views with filters, segments, and sharing.</li>
              <li><strong>SSO upgrades</strong>: Improved SCIM provisioning and attribute mapping.</li>
              <li><strong>Quality-of-life</strong>: Quicker keyboard actions, refreshed icons, and better contrast.</li>
            </ul>
            <h3>Timeline</h3>
            <p>The rollout begins on <strong>Nov 12</strong>. Some customers will receive features in waves to ensure a smooth experience.</p>
            <p>Read the <a href="#">full changelog</a> for details and API notes.</p>
          `
        };

        // Helpers
        const $ = (s, r = document) => r.querySelector(s);
        const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
        const pad = (n) => String(n).padStart(2, '0');
        const toLocalInputValue = (iso) => {
          if (!iso) return '';
          const d = new Date(iso);
          return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
        };
        const formatDateTime = (iso) => {
          if (!iso) return '—';
          const d = new Date(iso);
          return d.toLocaleString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        };

        const toastStack = $('#toastStack');
        function showToast(msg, type = 'neutral') {
          const base = 'rounded-lg border px-3 py-2 text-sm flex items-center gap-2 shadow-sm';
          const theme = {
            neutral: 'bg-neutral-100 border-neutral-200 text-neutral-800',
            success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
            info: 'bg-sky-50 border-sky-200 text-sky-800',
            danger: 'bg-red-50 border-red-200 text-red-800'
          }[type] || 'bg-neutral-100 border-neutral-200 text-neutral-800';

          const el = document.createElement('div');
          el.className = `${base} ${theme}`;
          el.textContent = msg;
          toastStack.appendChild(el);
          setTimeout(() => {
            el.classList.add('opacity-0', 'transition', 'duration-300');
            setTimeout(() => el.remove(), 250);
          }, 2800);
        }

        // UI refs
        const els = {
          titleSkeleton: $('#titleSkeleton'),
          postTitle: $('#postTitle'),
          categoryPill: $('#categoryPill'),
          postCategory: $('#postCategory'),
          audiencePill: $('#audiencePill'),
          postAudience: $('#postAudience'),
          dateMeta: $('#dateMeta'),
          postDateText: $('#postDateText'),
          contentSkeleton: $('#contentSkeleton'),
          contentWrapper: $('#postContentWrapper'),
          content: $('#postContent'),
          detailCategory: $('#detailCategory'),
          detailAudience: $('#detailAudience'),
          detailStatus: $('#detailStatus'),
          detailDateLabel: $('#detailDateLabel'),
          detailDate: $('#detailDate'),
          actionHints: $('#actionHints'),
          statusBadge: $('#statusBadge'),
          actions: {
            edit: $('[data-action="edit"]'),
            publish: $('[data-action="publish"]'),
            schedule: $('[data-action="schedule"]'),
            reschedule: $('[data-action="reschedule"]'),
            delete: $('[data-action="delete"]')
          },
          drawer: $('#editDrawer'),
          closeDrawerBtn: $('#closeDrawerBtn'),
          cancelEditBtn: $('#cancelEditBtn'),
          saveEditBtn: $('#saveEditBtn'),
          saveEditBtnLabel: $('#saveEditBtnLabel'),
          formTitle: $('#formTitle'),
          formCategory: $('#formCategory'),
          formAudience: $('#formAudience'),
          formContent: $('#formContent'),
          scheduleToggle: $('#scheduleToggle'),
          scheduleFields: $('#scheduleFields'),
          formDatetime: $('#formDatetime'),
          confirmModal: $('#confirmModal'),
          cancelDeleteBtn: $('#cancelDeleteBtn'),
          confirmDeleteBtn: $('#confirmDeleteBtn')
        };

        function setHidden(node, hidden) {
          if (!node) return;
          node.classList.toggle('hidden', !!hidden);
        }

        function setActionVisibility(status) {
          const { edit, publish, schedule, reschedule, delete: del } = els.actions;
          setHidden(edit, false);
          if (status === 'Draft') {
            setHidden(publish, false);
            setHidden(schedule, false);
            setHidden(reschedule, true);
            setHidden(del, false);
          } else if (status === 'Scheduled') {
            setHidden(publish, true);
            setHidden(schedule, true);
            setHidden(reschedule, false);
            setHidden(del, false);
          } else if (status === 'Published') {
            setHidden(publish, true);
            setHidden(schedule, true);
            setHidden(reschedule, true);
            setHidden(del, false);
          }
        }

        function renderHints(post) {
          els.actionHints.innerHTML = '';
          const add = (t) => {
            const li = document.createElement('li');
            li.textContent = t;
            els.actionHints.appendChild(li);
          };
          if (post.status === 'Draft') {
            add('Publish now to make it visible to the selected audience.');
            add('Schedule to automatically publish at a future time.');
            add('Edit to change the title, content, or metadata.');
          } else if (post.status === 'Scheduled') {
            add(`Will auto-publish at ${formatDateTime(post.scheduledFor)}.`);
            add('Reschedule if you need to adjust the timing.');
            add('Edit content; changes update the scheduled post.');
          } else {
            add(`Visible to ${post.audience || 'all users'} right now.`);
            add('Edit to update; changes are applied immediately.');
            add('Delete to remove this post.');
          }
        }

        function updateStatusBadge(post) {
          setHidden(els.statusBadge, false);
          els.statusBadge.textContent = post.status;
        }

        function updateUI(post) {
          // Header
          setHidden(els.titleSkeleton, true);
          els.postTitle.textContent = post.title;
          setHidden(els.postTitle, false);

          els.postCategory.textContent = post.category || '—';
          setHidden(els.categoryPill, !post.category);

          els.postAudience.textContent = post.audience || 'All';
          setHidden(els.audiencePill, false);

          let dateLabel = 'Date';
          let dateValue = '—';
          let metaText = '';
          if (post.status === 'Draft') {
            dateLabel = 'Created on';
            dateValue = formatDateTime(post.createdAt);
            metaText = `Draft • ${dateValue}`;
          } else if (post.status === 'Scheduled') {
            dateLabel = 'Scheduled for';
            dateValue = formatDateTime(post.scheduledFor);
            metaText = `Scheduled for ${dateValue}`;
          } else if (post.status === 'Published') {
            dateLabel = 'Published on';
            dateValue = formatDateTime(post.publishedAt);
            metaText = `Published on ${dateValue}`;
          }
          els.postDateText.textContent = metaText;
          setHidden(els.dateMeta, false);

          // Content
          els.content.innerHTML = post.content;
          setHidden(els.contentSkeleton, true);
          setHidden(els.contentWrapper, false);

          // Details
          els.detailCategory.textContent = post.category || '—';
          els.detailAudience.textContent = post.audience || 'All';
          els.detailStatus.textContent = post.status;
          els.detailDateLabel.textContent = dateLabel;
          els.detailDate.textContent = dateValue;

          // Status + actions
          updateStatusBadge(post);
          setActionVisibility(post.status);
          renderHints(post);

          // Refresh icons after DOM updates
          if (window.lucide) {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        }

        function openDrawer(withSchedule = false) {
          els.drawer.classList.remove('translate-x-full');
          els.drawer.setAttribute('aria-hidden', 'false');
          // Prefill
          els.formTitle.value = mockPost.title || '';
          els.formCategory.value = mockPost.category || '';
          els.formAudience.value = mockPost.audience || '';
          els.formContent.value = (mockPost.content || '').replace(/<[^>]+>/g, '');
          const shouldSchedule = withSchedule || mockPost.status === 'Scheduled';
          setScheduleToggle(shouldSchedule);
          if (shouldSchedule) {
            els.formDatetime.value = toLocalInputValue(mockPost.scheduledFor) || '';
          } else {
            els.formDatetime.value = '';
          }
          // Focus first field
          setTimeout(() => els.formTitle.focus(), 50);
          if (window.lucide) {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        }
        function closeDrawer() {
          els.drawer.classList.add('translate-x-full');
          els.drawer.setAttribute('aria-hidden', 'true');
        }

        function setScheduleToggle(on) {
          const btn = els.scheduleToggle;
          const knob = els.scheduleToggle.querySelector('span');
          btn.setAttribute('aria-checked', on ? 'true' : 'false');
          if (on) {
            btn.classList.remove('bg-neutral-800');
            btn.classList.add('bg-sky-500/30', 'border-sky-500/30');
            knob.classList.remove('translate-x-0.5');
            knob.classList.add('translate-x-5');
            setHidden(els.scheduleFields, false);
          } else {
            btn.classList.add('bg-neutral-800');
            btn.classList.remove('bg-sky-500/30', 'border-sky-500/30');
            knob.classList.add('translate-x-0.5');
            knob.classList.remove('translate-x-5');
            setHidden(els.scheduleFields, true);
          }
        }

        // Actions
        els.actions.edit.addEventListener('click', () => openDrawer(false));
        els.actions.publish.addEventListener('click', () => {
          mockPost.status = 'Published';
          mockPost.publishedAt = new Date().toISOString();
          mockPost.scheduledFor = null;
          updateUI(mockPost);
          showToast('Post published', 'success');
        });
        els.actions.schedule.addEventListener('click', () => {
          openDrawer(true);
          setTimeout(() => els.formDatetime.focus(), 150);
        });
        els.actions.reschedule.addEventListener('click', () => {
          openDrawer(true);
          setTimeout(() => els.formDatetime.focus(), 150);
        });
        els.actions.delete.addEventListener('click', () => {
          setHidden(els.confirmModal, false);
        });

        // Drawer controls
        els.closeDrawerBtn.addEventListener('click', closeDrawer);
        els.cancelEditBtn.addEventListener('click', closeDrawer);
        els.scheduleToggle.addEventListener('click', () => {
          const on = els.scheduleToggle.getAttribute('aria-checked') !== 'true';
          setScheduleToggle(on);
        });
        els.saveEditBtn.addEventListener('click', () => {
          // Save fields
          mockPost.title = els.formTitle.value.trim() || mockPost.title;
          mockPost.category = els.formCategory.value || '';
          mockPost.audience = els.formAudience.value || '';
          const raw = els.formContent.value.trim();
          if (raw) {
            mockPost.content = `<p>${raw.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br/>')}</p>`;
          }
          const scheduleOn = els.scheduleToggle.getAttribute('aria-checked') === 'true';
          if (mockPost.status !== 'Published') {
            if (scheduleOn && els.formDatetime.value) {
              const dt = new Date(els.formDatetime.value);
              mockPost.status = 'Scheduled';
              mockPost.scheduledFor = dt.toISOString();
            } else {
              mockPost.status = 'Draft';
              mockPost.scheduledFor = null;
            }
          }
          updateUI(mockPost);
          closeDrawer();
          showToast('Changes saved', 'success');
        });

        // Delete confirm
        els.cancelDeleteBtn.addEventListener('click', () => setHidden(els.confirmModal, true));
        els.confirmDeleteBtn.addEventListener('click', () => {
          setHidden(els.confirmModal, true);
          showToast('Post deleted', 'danger');
        });

        // Initial render
        updateUI(mockPost);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{backgroundImage: 'radial-gradient(1000px 600px at 100% -10%, rgba(120,119,198,0.08), rgba(0,0,0,0)), radial-gradient(800px 500px at 0% 100%, rgba(56,189,248,0.08), rgba(0,0,0,0))'}}></div>
<div className="lg:px-8 z-10 max-w-7xl mr-auto ml-auto pt-6 pr-5 pb-6 pl-5 relative">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors group" href="/admin/news">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span className="text-sm">Back to list</span>
</a>
</div>
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 text-xs font-medium rounded-full border border-white/10 bg-neutral-900/60 text-neutral-200" id="statusBadge">Scheduled</div>
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-white/10 flex items-center justify-center tracking-tight text-[11px] font-semibold text-neutral-200">
            NA
          </div>
</div>
</div>

<div className="mt-6 rounded-xl border border-white/10 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
<div className="p-5 md:p-6 md:bg-neutral-50 md:text-zinc-950">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 gap-x-4 gap-y-4">
<div className="max-w-3xl">
<div className="h-8 w-64 bg-neutral-800/60 rounded-md animate-pulse hidden" id="titleSkeleton"></div>
<h1 className="text-[28px] leading-tight tracking-tight font-semibold text-neutral-50 lg:text-neutral-900" id="postTitle">Workspace 2.7 Release: Faster search, new dashboards, and SSO improvements</h1>
<div className="flex flex-wrap text-sm mt-2 gap-x-3 gap-y-2 items-center">
<div className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-900/60 px-2.5 py-1 text-neutral-300" id="categoryPill">
<svg className="lucide lucide-tag w-3.5 h-3.5" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="" id="postCategory">Product Updates</span>
</div>
<div className="inline-flex text-neutral-300 bg-neutral-900/60 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center" id="audiencePill">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="" id="postAudience">Customers</span>
</div>
<div className="inline-flex items-center gap-1.5 text-neutral-400" id="dateMeta">
<svg className="lucide lucide-clock w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(163, 163, 163)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="inline-flex text-neutral-300 bg-neutral-900/60 border-white/10 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center" id="postDateText">Scheduled for Wed, 12 Nov 2025, 14:30</span>
</div>
</div>
</div>
<div className="flex items-center gap-2" id="actionsContainer">

<button className="inline-flex hover:text-white hover:bg-neutral-900 hover:border-white/20 transition-colors lg:text-neutral-50 lg:bg-neutral-950/60 text-sm text-neutral-200 bg-neutral-900/60 border-white/10 border rounded-lg px-3 py-2 gap-x-2 gap-y-2 items-center" data-action="edit">
<svg className="lucide lucide-pencil w-4 h-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                Edit
              </button>
<button className="hidden inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-colors" data-action="publish">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Publish
              </button>
<button className="hidden inline-flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/10 px-3 py-2 text-sm text-sky-300 hover:bg-sky-500/15 hover:border-sky-500/30 transition-colors" data-action="schedule">
<svg className="lucide lucide-calendar-clock w-4 h-4" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
                Schedule
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/10 px-3 py-2 text-sm text-sky-300 hover:bg-sky-500/15 hover:border-sky-500/30 transition-colors" data-action="reschedule">
<svg className="lucide lucide-calendar-clock w-4 h-4" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
                Reschedule
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-300 hover:bg-red-500/15 hover:border-red-500/30 transition-colors" data-action="delete">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                Delete
              </button>
</div>
</div>
</div>
<div className="border-t border-white/10"></div>
<div className="pt-5 pr-5 pb-5 pl-5 md:p-6 md:bg-neutral-50">
<div className="space-y-3 hidden" id="contentSkeleton">
<div className="h-4 w-[90%] bg-neutral-800/60 rounded-md animate-pulse"></div>
<div className="h-4 w-[85%] bg-neutral-800/60 rounded-md animate-pulse"></div>
<div className="h-4 w-[70%] bg-neutral-800/60 rounded-md animate-pulse"></div>
<div className="h-4 w-[40%] bg-neutral-800/60 rounded-md animate-pulse"></div>
</div>
<div className="" id="postContentWrapper">
<article className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:tracking-tight prose-headings:font-semibold prose-strong:font-semibold prose-a:text-sky-300" id="postContent">
<p className="">We’re excited to share the highlights of our  update. This release focuses on speed, visibility, and security to make your day-to-day smoother.</p>
<h3 className="">What’s new</h3>
<ul className="">
<li className="">: Up to 3× faster across projects, docs, and people.</li>
<li className="">: Curate KPI views with filters, segments, and sharing.</li>
<li>: Improved SCIM provisioning and attribute mapping.</li>
<li className="">: Quicker keyboard actions, refreshed icons, and better contrast.</li>
</ul>
<h3 className="">Timeline</h3>
<p className="">The rollout begins on . Some customers will receive features in waves to ensure a smooth experience.</p>
<p className="">Read the <a className="" href="#">full changelog</a> for details and API notes.</p>
</article>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 gap-x-6 gap-y-6">
<div className="lg:col-span-2">
<div className="rounded-xl border border-white/10 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="fixed inset-y-0 right-0 w-full sm:max-w-md md:max-w-lg transition-transform duration-300 ease-out bg-neutral-950/95 backdrop-blur z-30 border-l border-white/10" id="editDrawer">
<div className="h-full flex flex-col">
<div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
<div className="">
<h3 className="text-xl tracking-tight font-semibold text-neutral-50" id="editDrawerTitle">Edit Post</h3>
<p className="mt-1 text-sm text-neutral-400" id="editDrawerSubtitle">Make changes and save.</p>
</div>
<button aria-label="Close" className="inline-flex items-center justify-center rounded-lg h-9 w-9 border border-white/10 bg-neutral-900/60 text-neutral-300 hover:text-white hover:bg-neutral-900 hover:border-white/20 transition-colors" id="closeDrawerBtn">
<svg className="lucide lucide-x w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path className="" d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-5">

<div className="">
<label className="text-sm text-neutral-300">Title</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/40 transition" id="formTitle" placeholder="Enter post title" type="text"/>
</div>

<div className="">
<label className="text-sm text-neutral-300">Category</label>
<div className="mt-2 relative">
<select className="appearance-none w-full rounded-lg border border-white/10 bg-neutral-900/60 text-neutral-100 px-3 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/40 transition" id="formCategory">
<option value="">Select a category</option>
<option>General</option>
<option>Product Updates</option>
<option>Maintenance</option>
<option>Events</option>
<option>HR</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="">
<label className="text-sm text-neutral-300">Audience</label>
<div className="mt-2 relative">
<select className="appearance-none w-full rounded-lg border border-white/10 bg-neutral-900/60 text-neutral-100 px-3 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/40 transition" id="formAudience">
<option value="">All</option>
<option>Employees</option>
<option>Managers</option>
<option>Partners</option>
<option>Customers</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="">
<label className="text-sm text-neutral-300">Content</label>
<textarea className="mt-2 w-full rounded-lg border border-white/10 bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/40 transition" id="formContent" placeholder="Write the announcement..." rows="8"></textarea>
</div>

<div className="rounded-lg border border-white/10 p-4 bg-neutral-900/40">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-300">Schedule this post</div>
<div className="text-xs text-neutral-400 mt-0.5">
                  Toggle on to set a future date/time.
                </div>
</div>
<button aria-checked="true" className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40" id="scheduleToggle" role="switch" type="button">
<span className="inline-block h-5 w-5 transform rounded-full bg-neutral-300 transition"></span>
</button>
</div>
<div className="mt-4" id="scheduleFields">
<label className="text-sm text-neutral-300">Date &amp; Time</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/40 transition" id="formDatetime" type="datetime-local"/>
<div className="mt-2 text-xs text-neutral-400">
                Times shown in your local timezone.
              </div>
</div>
</div>
</div>
<div className="p-5 md:p-6 border-t border-white/10 flex items-center justify-between gap-3">
<button className="inline-flex hover:text-white hover:bg-neutral-900 hover:border-white/20 transition-colors text-sm text-neutral-200 bg-neutral-900/60 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" id="cancelEditBtn">
            Cancel
          </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/10 px-3.5 py-2.5 text-sm text-sky-300 hover:bg-sky-500/15 hover:border-sky-500/30 transition-colors" id="saveEditBtn">
<svg className="lucide lucide-save w-4 h-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
<span id="saveEditBtnLabel">Save Changes</span>
</button>
</div>
</div>
</div>
</div>

<div aria-labelledby="confirmTitle" aria-modal="true" className="fixed inset-0 z-40 hidden" id="confirmModal" role="dialog">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-[10vh] w-full max-w-md rounded-xl border border-white/10 bg-neutral-950 p-5 md:p-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
<svg className="lucide lucide-alert-triangle w-5 h-5 text-red-300" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-lg tracking-tight font-semibold text-neutral-50" id="confirmTitle">Delete post?</h4>
<p className="mt-1 text-sm text-neutral-400">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
</div>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-neutral-900 hover:border-white/20 transition-colors" id="cancelDeleteBtn">
            Cancel
          </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-300 hover:bg-red-500/15 hover:border-red-500/30 transition-colors" id="confirmDeleteBtn">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete
          </button>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-50 space-y-2" id="toastStack"></div>


    </>
  );
}
