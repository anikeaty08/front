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
      
      // Initialize icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // State
      const screens = {
        upload: document.getElementById('screen-upload'),
        progress: document.getElementById('screen-progress'),
        dashboard: document.getElementById('screen-dashboard'),
        canvas: document.getElementById('screen-canvas'),
        finalize: document.getElementById('screen-finalize'),
      };

      const state = {
        files: [],
        total: 0,
        sessionName: '',
        groups: {
          g1: { status: 'attention', type: 'handwriting', count: 3 },
          g2: { status: 'review', type: 'logic', count: 8 },
          g3: { status: 'review', type: 'logic', count: 4 },
          g4: { status: 'ready', type: 'ready', count: 12 },
          g5: { status: 'ready', type: 'ready', count: 1 },
          g6: { status: 'ready', type: 'ready', count: 2 },
        },
        currentGroupId: null,
        canvasMode: null, // 'handwriting' | 'logic' | 'ready'
        step3Resolved: false,
        step2Edited: false,
      };

      // Elements (upload)
      const btnStartUpload = document.getElementById('btn-start-upload');
      const fileInput = document.getElementById('file-input');
      const sessionMeta = document.getElementById('session-meta');
      const fileCount = document.getElementById('file-count');
      const btnChangeFiles = document.getElementById('btn-change-files');
      const btnUploadGrade = document.getElementById('btn-upload-grade');
      const sessionNameInput = document.getElementById('session-name');

      // Progress
      const progressBar = document.getElementById('progress-bar');
      const progressCounter = document.getElementById('progress-counter');
      const progressTotal = document.getElementById('progress-total');

      // Dashboard
      const dashSession = document.getElementById('dash-session');
      const btnExportDashboard = document.getElementById('btn-export-dashboard');

      // Canvas
      const btnBackDashboard = document.getElementById('btn-back-dashboard');
      const groupBadge = document.getElementById('group-badge');
      const hotspot = document.getElementById('hotspot');
      const hotspotPopover = document.getElementById('hotspot-popover');
      const scoreTotal = document.getElementById('score-total');
      const step3Badge = document.getElementById('step3-badge');
      const step3Content = document.getElementById('step3-content');
      const step3Score = document.getElementById('step3-score');
      const magicMsg = document.getElementById('magic-msg');
      const btnMarkGroupDone = document.getElementById('btn-mark-group-done');
      const canvasHint = document.getElementById('canvas-hint');
      const studentName = document.getElementById('student-name');

      const step2Badge = document.getElementById('step2-badge');
      const step2Content = document.getElementById('step2-content');
      const step2Edit = document.getElementById('step2-edit');
      const step2Textarea = document.getElementById('step2-textarea');
      const step2Score = document.getElementById('step2-score');
      const step2Save = document.getElementById('step2-save');
      const step2Cancel = document.getElementById('step2-cancel');
      const applyPrompt = document.getElementById('apply-group');
      const applyCount = document.getElementById('apply-count');
      const btnApplyAll = document.getElementById('btn-apply-all');
      const btnApplyOne = document.getElementById('btn-apply-one');

      // Finalize
      const screenFinalize = screens.finalize;
      const btnExportFinal = document.getElementById('btn-export-final');

      // Toast
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-msg');
      function showToast(msg = 'Đã lưu', timeout = 2000) {
        toastMsg.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), timeout);
      }

      // Screen helpers
      function showScreen(name) {
        Object.values(screens).forEach((el) => el.classList.add('hidden'));
        screens[name].classList.remove('hidden');
        // Refresh icons when DOM changes
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function updateExportAvailability() {
        const allGreen = Object.values(state.groups).every((g) => g.status === 'ready');
        btnExportDashboard.disabled = !allGreen;
        if (allGreen) {
          // Optional nudge toast the first time it turns green
          showToast('Tất cả nhóm đã sẵn sàng. Bạn có thể xuất kết quả.');
        }
      }

      // Upload flow
      btnStartUpload.addEventListener('click', () => fileInput.click());
      btnChangeFiles.addEventListener('click', () => fileInput.click());

      fileInput.addEventListener('change', () => {
        state.files = Array.from(fileInput.files || []);
        state.total = state.files.length || 30; // fallback for demo
        sessionMeta.classList.remove('hidden');
        fileCount.textContent = `Đã chọn ${state.total} tệp`;
        btnUploadGrade.disabled = !state.total;
      });

      sessionNameInput.addEventListener('input', () => {
        state.sessionName = sessionNameInput.value.trim();
      });

      btnUploadGrade.addEventListener('click', () => {
        if (!state.total) return;
        showScreen('progress');
        progressTotal.textContent = state.total;
        progressCounter.textContent = 0;
        progressBar.style.width = '0%';

        let processed = 0;
        const interval = setInterval(() => {
          // Simulate variable processing chunks
          const step = Math.max(1, Math.round(Math.random() * 4));
          processed = Math.min(state.total, processed + step);
          progressCounter.textContent = processed;
          const pct = Math.round((processed / state.total) * 100);
          progressBar.style.width = pct + '%';
          if (processed >= state.total) {
            clearInterval(interval);
            setTimeout(() => {
              showScreen('dashboard');
              dashSession.textContent = state.sessionName || 'Lớp 10A - Kiểm tra 15 phút';
              updateExportAvailability();
            }, 500);
          }
        }, 300);
      });

      // Dashboard group clicks
      document.querySelectorAll('.group-card').forEach((card) => {
        card.addEventListener('click', () => {
          const gid = card.dataset.groupId;
          const type = card.dataset.type;
          state.currentGroupId = gid;
          state.canvasMode = type;
          // Populate badge
          renderGroupBadge(type, state.groups[gid].status, state.groups[gid].count);
          // Set canvas content according to type
          prepareCanvas(type, gid);
          showScreen('canvas');
        });
      });

      function renderGroupBadge(type, status, count) {
        let label = '';
        let cls = 'px-2.5 py-1 text-xs rounded-full inline-flex items-center gap-1.5 ';
        if (status === 'attention') {
          cls += 'text-orange-300 bg-orange-400/10 ring-1 ring-orange-400/30';
          label = 'Cần xác nhận chữ viết';
        } else if (status === 'review') {
          cls += 'text-amber-300 bg-amber-400/10 ring-1 ring-amber-400/30';
          label = 'Cần bạn xem lại';
        } else {
          cls += 'text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30';
          label = 'Đã sẵn sàng';
        }
        groupBadge.className = cls;
        groupBadge.innerHTML = `<i data-lucide="${status === 'ready' ? 'check-circle-2' : status === 'review' ? 'alert-triangle' : 'highlighter'}" class="w-3.5 h-3.5"></i> ${label} • ${count} bài`;
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function prepareCanvas(type, gid) {
        // Reset UI
        state.step3Resolved = false;
        state.step2Edited = false;
        hotspot.classList.add('hidden');
        hotspotPopover.classList.add('hidden');
        magicMsg.classList.add('hidden');
        applyPrompt.classList.add('hidden');
        canvasHint.textContent = '';
        studentName.textContent = 'Nguyễn Văn A • 1/' + state.groups[gid].count;

        // Reset Step 2
        step2Edit.classList.add('hidden');
        step2Content.classList.remove('hidden');
        step2Badge.className = 'inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-400/10 ring-1 ring-amber-400/30 px-2 py-0.5 rounded-full';
        step2Badge.innerHTML = '<i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Cần xem lại';
        step2Content.textContent = 'Sai khái niệm: bạn dùng công thức không phù hợp.';

        // Reset Step 3
        step3Badge.className = 'inline-flex items-center gap-1 text-xs text-orange-300 bg-orange-400/10 ring-1 ring-orange-400/30 px-2 py-0.5 rounded-full';
        step3Badge.innerHTML = '<i data-lucide="highlighter" class="w-3.5 h-3.5"></i> Xác nhận chữ viết';
        step3Content.textContent = 'Mập mờ chữ số tại phép tính trung gian. Nhấn vào vùng cam trên bài làm để trả lời 4/9.';
        step3Score.textContent = '? điểm';
        scoreTotal.textContent = '7 / 10';

        if (type === 'handwriting') {
          hotspot.classList.remove('hidden');
          canvasHint.textContent = 'Gợi ý: Nhấn vùng cam để xác nhận chữ viết';
        } else {
          hotspot.classList.add('hidden');
        }

        if (type === 'logic') {
          step2Content.classList.remove('hidden');
          canvasHint.textContent = 'Gợi ý: Nhấn “Tùy chọn” ở Bước 2 để chỉnh sửa và áp dụng cho cả nhóm';
          applyCount.textContent = state.groups[gid].count;
          // For logic groups, consider Step 3 already fine:
          step3Badge.className = 'inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full';
          step3Badge.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i> Đúng';
          step3Content.textContent = 'Tính toán chính xác.';
          step3Score.textContent = '2 điểm';
        }

        if (type === 'ready') {
          // Everything already good
          step2Badge.className = 'inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full';
          step2Badge.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i> Đúng';
          step2Content.textContent = 'Áp dụng công thức hợp lệ.';
          step3Badge.className = 'inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full';
          step3Badge.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i> Đúng';
          step3Content.textContent = 'Tính toán chính xác.';
          step3Score.textContent = '2 điểm';
          scoreTotal.textContent = '10 / 10';
        }

        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Canvas interactions
      btnBackDashboard.addEventListener('click', () => {
        showScreen('dashboard');
      });

      // Hotspot click -> popover
      hotspot.addEventListener('click', () => {
        hotspotPopover.classList.toggle('hidden');
      });

      // Digit choice
      document.querySelectorAll('.choice-digit').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const choice = e.currentTarget.dataset.choice;
          hotspotPopover.classList.add('hidden');
          hotspot.classList.add('hidden');
          state.step3Resolved = true;

          if (choice === '9') {
            // Magic moment: update comments and score
            step3Badge.className = 'inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full';
            step3Badge.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i> Đúng';
            step3Content.textContent = 'Đã xác nhận chữ số là 9. Phép tính chính xác.';
            step3Score.textContent = '2 điểm';
            scoreTotal.textContent = '9 / 10';
            magicMsg.classList.remove('hidden');
            canvasHint.textContent = 'Tiếp tục kiểm tra các bước khác hoặc đánh dấu nhóm đã xong.';
          } else {
            // If 4 -> keep as incorrect example
            step3Badge.className = 'inline-flex items-center gap-1 text-xs text-rose-300 bg-rose-400/10 ring-1 ring-rose-400/30 px-2 py-0.5 rounded-full';
            step3Badge.innerHTML = '<i data-lucide="x-circle" class="w-3.5 h-3.5"></i> Sai';
            step3Content.textContent = 'Xác nhận là số 4. Có sai lệch phép tính tại bước này.';
            step3Score.textContent = '0 điểm';
            scoreTotal.textContent = '7 / 10';
            magicMsg.classList.remove('hidden');
          }
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      });

      // Step 2 menu -> open edit panel
      document.getElementById('step2-menu').addEventListener('click', () => {
        // Progressive disclosure: show edit/delete/approve -> simplified to edit flow
        step2Edit.classList.remove('hidden');
        step2Content.classList.add('hidden');
      });

      step2Cancel.addEventListener('click', () => {
        step2Edit.classList.add('hidden');
        step2Content.classList.remove('hidden');
      });

      step2Save.addEventListener('click', () => {
        // Update comment and score
        const txt = step2Textarea.value.trim() || 'Đã điều chỉnh.';
        step2Content.textContent = txt;
        step2Badge.className = 'inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full';
        step2Badge.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i> Duyệt';
        step2Edit.classList.add('hidden');
        step2Content.classList.remove('hidden');
        state.step2Edited = true;
        // Adjust total (assume step2 max 2 points)
        const s2 = parseInt(step2Score.value || '2', 10);
        // Base: if handwriting unresolved, assume 7; else 9
        const base = state.canvasMode === 'handwriting' ? (state.step3Resolved ? 9 : 7) : 8; // rough calc
        const adjusted = Math.min(10, Math.max(0, base)); // keep it simple for demo
        scoreTotal.textContent = adjusted + ' / 10';
        // Show apply-to-group if in logic group
        if (state.canvasMode === 'logic') {
          applyPrompt.classList.remove('hidden');
        }
        showToast('Đã lưu chỉnh sửa');
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Apply to group actions
      btnApplyAll.addEventListener('click', () => {
        // Mark the whole group green
        const gid = state.currentGroupId;
        state.groups[gid].status = 'ready';
        renderGroupBadge('ready', 'ready', state.groups[gid].count);
        applyPrompt.classList.add('hidden');
        showToast('Đã áp dụng cho toàn bộ nhóm');
      });

      btnApplyOne.addEventListener('click', () => {
        applyPrompt.classList.add('hidden');
        showToast('Đã áp dụng cho bài này');
      });

      // Mark group done (for handwriting or others)
      btnMarkGroupDone.addEventListener('click', () => {
        const gid = state.currentGroupId;
        state.groups[gid].status = 'ready';
        showToast('Đã đánh dấu nhóm đã xong');
        showScreen('dashboard');
        // Update group card visuals on dashboard
        const card = document.querySelector(`.group-card[data-group-id="${gid}"]`);
        if (card) {
          const statusPill = card.querySelector('span.inline-flex');
          if (statusPill) {
            statusPill.className = 'inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2.5 py-1 rounded-full';
            statusPill.innerHTML = '<i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i> Đã sẵn sàng';
          }
        }
        updateExportAvailability();
        if (Object.values(state.groups).every((g) => g.status === 'ready')) {
          // Nudge to finalize
          setTimeout(() => showScreen('finalize'), 600);
        }
      });

      // Export actions
      btnExportDashboard.addEventListener('click', () => {
        if (Object.values(state.groups).every((g) => g.status === 'ready')) {
          showScreen('finalize');
        }
      });

      btnExportFinal.addEventListener('click', () => {
        showToast('Đang tạo file .zip (30 PDF)…');
        setTimeout(() => {
          showToast('Đã tạo xong. Lưu về máy.');
        }, 1500);
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
      

<div className="min-h-screen" id="app">

<section className="min-h-screen flex items-center justify-center px-6" id="screen-upload">
<div className="w-full max-w-2xl text-center">
<div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-7 h-7 text-blue-400" data-lucide="sparkles"></i>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100">Bắt đầu chấm bài</h1>
<p className="mt-3 text-slate-400">Tải lên tất cả ảnh bài làm của một lớp để hệ thống tự nhóm và gợi ý chấm điểm.</p>
<div className="mt-8">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white px-6 py-3 md:px-8 md:py-4 shadow-sm shadow-blue-900/30 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition" id="btn-start-upload">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
<span className="text-base md:text-lg font-medium">Bắt đầu chấm bài</span>
</button>
<input accept="image/*,application/pdf" className="hidden" id="file-input" multiple="" type="file"/>
</div>
<div className="mt-8 hidden" id="session-meta">
<div className="mx-auto max-w-xl rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5 text-left">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-5 h-5 text-slate-400" data-lucide="images"></i>
<span className="text-sm" id="file-count">Đã chọn 0 tệp</span>
</div>
<button className="text-sm text-slate-300 hover:text-slate-100 inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/5 transition" id="btn-change-files">
<i className="w-4 h-4" data-lucide="folder-open"></i>
                  Chọn lại
                </button>
</div>
<div className="mt-4">
<label className="block text-sm text-slate-300 mb-2" htmlFor="session-name">Tên Lớp học / Bài kiểm tra</label>
<input className="w-full rounded-xl bg-[#0F141C] text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none px-4 py-3" id="session-name" placeholder="Ví dụ: Lớp 10A - Kiểm tra 15 phút" type="text"/>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xs text-slate-500">Mẹo: Giữ Shift để chọn nhanh tất cả ảnh trong thư mục.</p>
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-500/90 text-white px-4 py-2.5 shadow-sm shadow-blue-900/30 ring-1 ring-white/10 disabled:opacity-40 disabled:pointer-events-none transition" id="btn-upload-grade">
<i className="w-4 h-4" data-lucide="cpu"></i>
<span>Tải lên và Chấm bài</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen flex items-center justify-center px-6" id="screen-progress">
<div className="w-full max-w-2xl text-center">
<div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-7 h-7 text-blue-400" data-lucide="scan-line"></i>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">Đang xử lý bài làm…</h2>
<p className="mt-3 text-slate-400">AI đang đọc và phân nhóm các bài ( <span id="progress-counter">0</span>/<span id="progress-total">0</span> )</p>
<div className="mt-6">
<div className="w-full h-3 bg-white/5 rounded-full ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 transition-[width] duration-500" id="progress-bar"></div>
</div>
<div className="mt-4 text-sm text-slate-400" id="progress-steps">
              • Trích xuất chữ viết • Nhận diện bước tính • Gom nhóm đáp án • Áp dụng tiêu chí chấm
            </div>
</div>
</div>
</section>

<section className="hidden min-h-screen px-6 py-8" id="screen-dashboard">
<div className="mx-auto max-w-6xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-slate-200 font-semibold tracking-tight">GV</span>
</div>
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100" id="dash-session">Phiên chấm</h3>
<p className="text-xs text-slate-500">Đã phân nhóm theo mẫu câu trả lời • 30 bài</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500/60 hover:bg-blue-500 text-white px-4 py-2.5 ring-1 ring-white/10 shadow-sm shadow-blue-900/30 disabled:opacity-40 disabled:pointer-events-none transition" id="btn-export-dashboard">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Xuất tất cả bài đã chấm</span>
</button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group-card cursor-pointer rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition p-4" data-count="3" data-group-id="g1" data-status="attention" data-type="handwriting">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-xs text-orange-300 bg-orange-400/10 ring-1 ring-orange-400/30 px-2.5 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="highlighter"></i>
                    Cần xác nhận chữ viết
                  </span>
</div>
<span className="text-slate-400 text-sm">3 bài</span>
</div>
<h4 className="mt-3 text-slate-100 font-medium tracking-tight">Mơ hồ chữ số tại bước 3</h4>
<p className="text-sm text-slate-400 mt-1">AI chưa chắc là số 4 hay 9</p>
</div>
<div className="group-card cursor-pointer rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition p-4" data-count="8" data-group-id="g2" data-status="review" data-type="logic">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-400/10 ring-1 ring-amber-400/30 px-2.5 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i>
                  Cần bạn xem lại
                </span>
<span className="text-slate-400 text-sm">8 bài</span>
</div>
<h4 className="mt-3 text-slate-100 font-medium tracking-tight">Dùng công thức thay thế</h4>
<p className="text-sm text-slate-400 mt-1">Có thể là cách làm hợp lệ</p>
</div>
<div className="group-card cursor-pointer rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition p-4" data-count="4" data-group-id="g3" data-status="review" data-type="logic">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-400/10 ring-1 ring-amber-400/30 px-2.5 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i>
                  Cần bạn xem lại
                </span>
<span className="text-slate-400 text-sm">4 bài</span>
</div>
<h4 className="mt-3 text-slate-100 font-medium tracking-tight">Làm tròn khác chuẩn</h4>
<p className="text-sm text-slate-400 mt-1">Sai khác nhỏ do quy ước</p>
</div>
<div className="group-card cursor-pointer rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition p-4" data-count="12" data-group-id="g4" data-status="ready" data-type="ready">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2.5 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                  Đã sẵn sàng
                </span>
<span className="text-slate-400 text-sm">12 bài</span>
</div>
<h4 className="mt-3 text-slate-100 font-medium tracking-tight">Đáp án đúng phổ biến</h4>
<p className="text-sm text-slate-400 mt-1">Khớp hoàn toàn tiêu chí</p>
</div>
<div className="group-card cursor-pointer rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition p-4" data-count="1" data-group-id="g5" data-status="ready" data-type="ready">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2.5 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                  Đã sẵn sàng
                </span>
<span className="text-slate-400 text-sm">1 bài</span>
</div>
<h4 className="mt-3 text-slate-100 font-medium tracking-tight">Cách giải độc đáo</h4>
<p className="text-sm text-slate-400 mt-1">Đúng, trình bày khác</p>
</div>
<div className="group-card cursor-pointer rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition p-4" data-count="2" data-group-id="g6" data-status="ready" data-type="ready">
<div className="flex items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2.5 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                  Đã sẵn sàng
                </span>
<span className="text-slate-400 text-sm">2 bài</span>
</div>
<h4 className="mt-3 text-slate-100 font-medium tracking-tight">Thiếu ký hiệu đơn vị</h4>
<p className="text-sm text-slate-400 mt-1">Đã tự động nhắc</p>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen px-6 py-6" id="screen-canvas">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100 px-3 py-2 rounded-lg hover:bg-white/5 ring-1 ring-white/10 transition" id="btn-back-dashboard">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span className="text-sm">Quay lại</span>
</button>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ring-1" id="group-badge"></div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100 px-3 py-2 rounded-lg hover:bg-white/5 ring-1 ring-white/10 transition">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span className="text-sm">Tiêu chí chấm</span>
</button>
<button className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100 px-3 py-2 rounded-lg hover:bg-white/5 ring-1 ring-white/10 transition">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="text-sm">Xem nhóm</span>
</button>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7">
<div className="relative rounded-2xl bg-black/20 ring-1 ring-white/10 overflow-hidden">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(40,120,255,0.06),transparent_50%)]"></div>
<img alt="Bài làm của học sinh" className="w-full h-[62vh] object-contain bg-[#0F141C]" id="paper-image" src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<button className="absolute hidden -translate-x-1/2 -translate-y-1/2 left-[58%] top-[42%]" id="hotspot">
<span className="absolute inset-0 -z-10 rounded-full bg-orange-500/30 animate-ping"></span>
<span className="w-8 h-8 rounded-full bg-orange-500/80 ring-4 ring-orange-300/30 shadow shadow-orange-900/40"></span>
</button>

<div className="absolute hidden left-[58%] top-[42%] translate-x-4 -translate-y-1/2" id="hotspot-popover">
<div className="w-72 rounded-xl bg-[#0F141C] ring-1 ring-white/10 shadow-xl p-4">
<div className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-orange-300" data-lucide="help-circle"></i>
                      Đây là số 4 hay số 9?
                    </div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="choice-digit inline-flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200 py-2.5 transition" data-choice="4">4</button>
<button className="choice-digit inline-flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200 py-2.5 transition" data-choice="9">9</button>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span id="student-name">Nguyễn Văn A • 3/30</span>
<span id="canvas-hint">Gợi ý: Nhấn vùng cam để xác nhận chữ viết</span>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div>
<h4 className="text-slate-100 font-medium tracking-tight">Chấm theo bước</h4>
<p className="text-xs text-slate-500">Cập nhật theo thời gian thực</p>
</div>
<div className="text-right">
<div className="text-sm text-slate-300">Điểm tạm tính</div>
<div className="text-xl font-semibold tracking-tight text-slate-100" id="score-total">7 / 10</div>
</div>
</div>
<div className="mt-4 space-y-3">

<div className="rounded-xl bg-[#0F141C] ring-1 ring-white/10 p-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
                          Đúng
                        </span>
<div className="text-sm text-slate-200">Bước 1: Thiết lập phương trình</div>
</div>
<div className="text-sm text-slate-300">2 điểm</div>
</div>
<p className="mt-2 text-xs text-slate-400">Trình bày rõ ràng, ký hiệu chuẩn.</p>
</div>

<div className="rounded-xl bg-[#0F141C] ring-1 ring-white/10 p-3" id="step2-card">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-400/10 ring-1 ring-amber-400/30 px-2 py-0.5 rounded-full" id="step2-badge">
<i className="w-3.5 h-3.5" data-lucide="alert-triangle"></i>
                          Cần xem lại
                        </span>
<div className="text-sm text-slate-200">Bước 2: Áp dụng công thức</div>
</div>
<div className="flex items-center gap-1">
<button className="text-slate-300 hover:text-slate-100 px-2 py-1 rounded-md hover:bg-white/5 ring-1 ring-white/10 transition inline-flex items-center gap-1" id="step2-menu">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
<span className="text-xs">Tùy chọn</span>
</button>
</div>
</div>
<div className="mt-2 text-xs text-slate-400" id="step2-content">
                      Sai khái niệm: bạn dùng công thức không phù hợp.
                    </div>

<div className="hidden mt-3" id="step2-edit">
<label className="block text-xs text-slate-300 mb-1">Chỉnh nhận xét</label>
<textarea className="w-full rounded-lg bg-black/30 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none p-2" id="step2-textarea" rows="3">Good! Alternative method used correctly.</textarea>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<label className="text-xs text-slate-300">Điểm bước này</label>
<input className="w-16 text-center rounded-lg bg-black/30 text-slate-100 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none p-1.5" id="step2-score" max="2" min="0" step="1" type="number" value="2"/>
<span className="text-xs text-slate-500">/ 2</span>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 transition" id="step2-cancel">Hủy</button>
<button className="text-xs px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-500/90 text-white ring-1 ring-white/10 transition" id="step2-save">Lưu</button>
</div>
</div>
</div>

<div className="hidden mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3" id="apply-group">
<div className="text-xs text-slate-300">Câu trả lời này thuộc nhóm có <span className="font-medium text-slate-100" id="apply-count">8</span> bài tương tự. Áp dụng chỉnh sửa cho tất cả?</div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-white ring-1 ring-white/10 transition" id="btn-apply-all">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                          Áp dụng cho tất cả
                        </button>
<button className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 transition" id="btn-apply-one">
<i className="w-3.5 h-3.5" data-lucide="dot"></i>
                          Chỉ bài này
                        </button>
</div>
</div>
</div>

<div className="rounded-xl bg-[#0F141C] ring-1 ring-white/10 p-3" id="step3-card">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-orange-300 bg-orange-400/10 ring-1 ring-orange-400/30 px-2 py-0.5 rounded-full" id="step3-badge">
<i className="w-3.5 h-3.5" data-lucide="highlighter"></i>
                          Xác nhận chữ viết
                        </span>
<div className="text-sm text-slate-200">Bước 3: Thế số và tính</div>
</div>
<div className="text-sm text-slate-300" id="step3-score">? điểm</div>
</div>
<div className="mt-2 text-xs text-slate-400" id="step3-content">
                      Mập mờ chữ số tại phép tính trung gian. Nhấn vào vùng cam trên bài làm để trả lời 4/9.
                    </div>
</div>

<div className="rounded-xl bg-[#0F141C] ring-1 ring-white/10 p-3">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
                          Đúng
                        </span>
<div className="text-sm text-slate-200">Bước 4: Kết luận và đơn vị</div>
</div>
<div className="text-sm text-slate-300">3 điểm</div>
</div>
<p className="mt-2 text-xs text-slate-400">Kết luận rõ ràng, ghi đủ đơn vị.</p>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
<div className="text-xs text-emerald-300 hidden inline-flex items-center gap-1" id="magic-msg">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                    Đã cập nhật tự động theo xác nhận của bạn.
                  </div>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-white px-3 py-2 text-sm ring-1 ring-white/10 transition" id="btn-mark-group-done">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                    Đánh dấu nhóm đã xong
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen flex items-center justify-center px-6" id="screen-finalize">
<div className="w-full max-w-2xl text-center">
<div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-7 h-7 text-emerald-400" data-lucide="check-circle-2"></i>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">Tất cả nhóm đã sẵn sàng</h2>
<p className="mt-3 text-slate-400">Xuất 30 file PDF với nhận xét và điểm đã duyệt.</p>
<div className="mt-6">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-500/90 text-white px-6 py-3 ring-1 ring-white/10 shadow-sm shadow-blue-900/30 transition" id="btn-export-final">
<i className="w-5 h-5" data-lucide="download"></i>
<span>Xuất tất cả bài đã chấm (.zip)</span>
</button>
<p className="mt-3 text-xs text-slate-500">Hệ thống sẽ tạo 30 file, đặt tên theo học sinh (ví dụ: Nguyen_Van_A.pdf).</p>
</div>
</div>
</section>

<div className="fixed bottom-5 right-5 hidden" id="toast">
<div className="rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/10 text-slate-100 px-4 py-3 shadow-lg flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check-circle-2"></i>
<span className="text-sm" id="toast-msg">Đã lưu</span>
</div>
</div>
</div>


    </>
  );
}
