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



    const $ = (s) => document.querySelector(s);
    const $$ = (s) => Array.from(document.querySelectorAll(s));

    const state = {
      license: localStorage.getItem("lx_license") || "B2 (ô tô)",
      weeklyGoal: Number(localStorage.getItem("lx_weeklyGoal") || 12),
      weeklyDone: Number(localStorage.getItem("lx_weeklyDone") || 0),
      examsDone: Number(localStorage.getItem("lx_examsDone") || 0),
      wrongCount: Number(localStorage.getItem("lx_wrongCount") || 0),
      streak: Number(localStorage.getItem("lx_streak") || 0),
      lastStudyDate: localStorage.getItem("lx_lastStudyDate") || "",
      examDate: localStorage.getItem("lx_examDate") || ""
    };

    const todayISO = () => new Date().toISOString().slice(0,10);

    function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

    function save() {
      localStorage.setItem("lx_license", state.license);
      localStorage.setItem("lx_weeklyGoal", String(state.weeklyGoal));
      localStorage.setItem("lx_weeklyDone", String(state.weeklyDone));
      localStorage.setItem("lx_examsDone", String(state.examsDone));
      localStorage.setItem("lx_wrongCount", String(state.wrongCount));
      localStorage.setItem("lx_streak", String(state.streak));
      localStorage.setItem("lx_lastStudyDate", state.lastStudyDate);
      localStorage.setItem("lx_examDate", state.examDate);
    }

    function render() {
      $("#licenseValue").textContent = state.license;
      $("#weeklyGoal").textContent = state.weeklyGoal;
      $("#weeklyDone").textContent = state.weeklyDone;
      $("#examsDone").textContent = state.examsDone;
      $("#wrongCount").textContent = state.wrongCount;
      $("#streakText").textContent = `${state.streak} ngày`;

      const pct = state.weeklyGoal ? (state.weeklyDone / state.weeklyGoal) * 100 : 0;
      $("#weeklyBar").style.width = `${clamp(pct, 0, 100).toFixed(0)}%`;

      const year = new Date().getFullYear();
      $("#year").textContent = year;

      // Dropdown selected indicator
      $$(".licenseItem").forEach(btn => {
        const pick = btn.querySelector(".pick");
        if (btn.dataset.license === state.license) pick.classList.remove("hidden");
        else pick.classList.add("hidden");
      });
    }

    // Dropdown behavior
    const licenseBtn = $("#licenseBtn");
    const licenseMenu = $("#licenseMenu");

    function closeMenu() { licenseMenu.classList.add("hidden"); }
    function toggleMenu() { licenseMenu.classList.toggle("hidden"); }

    licenseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    $$(".licenseItem").forEach(btn => {
      btn.addEventListener("click", () => {
        state.license = btn.dataset.license;
        save();
        render();
        closeMenu();
        toast(`Đã chọn ${state.license}`);
      });
    });

    document.addEventListener("click", () => closeMenu());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
      if (e.key === "/") {
        e.preventDefault();
        $("#search").focus();
        $("#searchHint").classList.remove("hidden");
      }
    });

    // Search
    const search = $("#search");
    const clearSearch = $("#clearSearch");
    search.addEventListener("input", () => {
      const has = search.value.trim().length > 0;
      clearSearch.classList.toggle("hidden", !has);
      $("#searchHint").classList.toggle("hidden", has);
    });
    clearSearch.addEventListener("click", () => {
      search.value = "";
      clearSearch.classList.add("hidden");
      $("#searchHint").classList.remove("hidden");
      search.focus();
    });

    // Plan randomizer
    const plans = [
      "1) 10 câu điểm liệt • 2) 12 biển báo • 3) Đề nhanh 20 câu",
      "1) 15 câu hay sai • 2) Tốc độ & khoảng cách • 3) 1 đề bấm giờ",
      "1) Biển cấm & hiệu lệnh • 2) Nồng độ cồn • 3) 20 câu ngẫu nhiên",
      "1) Sa hình: mẹo vào bài • 2) 10 câu luật • 3) Ôn 10 câu điểm liệt"
    ];
    $("#shufflePlan").addEventListener("click", () => {
      const next = plans[Math.floor(Math.random() * plans.length)];
      $("#todayPlan").textContent = next;
      toast("Đã đổi nhiệm vụ hôm nay");
    });

    // Progress actions
    function ensureStreakOnStudy() {
      const t = todayISO();
      if (!state.lastStudyDate) {
        state.streak = Math.max(1, state.streak);
        state.lastStudyDate = t;
        return;
      }
      if (state.lastStudyDate === t) return;

      const last = new Date(state.lastStudyDate + "T00:00:00");
      const now = new Date(t + "T00:00:00");
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) state.streak += 1;
      else state.streak = 1;

      state.lastStudyDate = t;
    }

    $("#markSession").addEventListener("click", () => {
      ensureStreakOnStudy();
      state.weeklyDone = clamp(state.weeklyDone + 1, 0, 99);
      // small dynamic adjustments
      state.wrongCount = clamp(state.wrongCount + (Math.random() < 0.35 ? 1 : 0), 0, 999);
      save();
      render();
      toast("Đã ghi nhận: hoàn thành 1 buổi");
    });

    $("#quickExam").addEventListener("click", () => {
      ensureStreakOnStudy();
      state.examsDone = clamp(state.examsDone + 1, 0, 999);
      state.weeklyDone = clamp(state.weeklyDone + 1, 0, 99);
      state.wrongCount = clamp(state.wrongCount + (Math.random() < 0.55 ? 2 : 1), 0, 999);
      save();
      render();
      openModal({
        title: "Đề nhanh 20 câu",
        desc: "Mô phỏng nhanh để vào nhịp. Bạn có thể thêm bấm giờ và chấm điểm ở màn sau.",
        body: [
          card("Gợi ý", "Tập trung câu điểm liệt trước, sau đó làm nhanh phần biển báo."),
          card("Chỉ số", `Đã làm: <span class="text-slate-100 font-semibold">${state.examsDone}</span> đề • Chuỗi học: <span class="text-slate-100 font-semibold">${state.streak}</span> ngày`)
        ],
        primary: { text: "Bắt đầu", action: () => { closeModal(); toast("Mở màn thi thử (demo)"); } },
        secondary: { text: "Để sau", action: () => closeModal() }
      });
    });

    $("#reviewWrong").addEventListener("click", () => {
      const n = state.wrongCount;
      openModal({
        title: "Ôn câu hay sai",
        desc: "Hệ thống sẽ ưu tiên những câu bạn sai gần đây và câu dễ nhầm.",
        body: [
          card("Hiện tại", `Bạn đang có <span class="text-slate-100 font-semibold">${n}</span> câu cần ôn.`),
          card("Mẹo", "Ôn theo cụm chủ đề (đường ưu tiên, vượt xe, tốc độ) để nhớ lâu hơn.")
        ],
        primary: { text: "Ôn ngay", action: () => { ensureStreakOnStudy(); save(); render(); closeModal(); toast("Mở danh sách câu hay sai (demo)"); } },
        secondary: { text: "Đóng", action: () => closeModal() }
      });
    });

    $("#startPlan").addEventListener("click", () => {
      ensureStreakOnStudy();
      save();
      render();
      openModal({
        title: "Lộ trình hôm nay",
        desc: "Chọn tốc độ học phù hợp. Bạn có thể chỉnh lại bất cứ lúc nào.",
        body: [
          optionRow("Nhẹ", "15–20 phút • Ôn biển báo + 10 câu trọng tâm", "lx_plan_light"),
          optionRow("Chuẩn", "25–35 phút • 1 đề nhanh + ôn câu sai", "lx_plan_std"),
          optionRow("Tăng tốc", "40–55 phút • 1 đề bấm giờ + điểm liệt", "lx_plan_fast")
        ],
        primary: { text: "Xác nhận", action: () => { closeModal(); toast("Đã tạo lộ trình (demo)"); } },
        secondary: { text: "Hủy", action: () => closeModal() }
      });
    });

    $("#resetProgress").addEventListener("click", () => {
      openModal({
        title: "Đặt lại tiến độ?",
        desc: "Thao tác này sẽ đặt về 0 các chỉ số học trên trang Home.",
        body: [
          card("Sẽ đặt lại", "Mục tiêu tuần, số đề đã làm, câu hay sai, chuỗi học.")
        ],
        primary: { text: "Đặt lại", action: () => {
          state.weeklyDone = 0;
          state.examsDone = 0;
          state.wrongCount = 0;
          state.streak = 0;
          state.lastStudyDate = "";
          save();
          render();
          closeModal();
          toast("Đã đặt lại tiến độ");
        }},
        secondary: { text: "Không", action: () => closeModal() }
      });
    });

    // Categories
    $$(".categoryBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const c = btn.dataset.category;
        openModal({
          title: c,
          desc: "Màn chuyên mục (demo). Bạn có thể nối sang danh sách bài học / câu hỏi.",
          body: [
            card("Hành động", "Gợi ý: thêm bộ lọc theo chủ đề và mức độ khó."),
            card("Tiếp theo", "Thêm dữ liệu câu hỏi thật để hiển thị nội dung.")
          ],
          primary: { text: "Đi tới", action: () => { closeModal(); toast(`Mở chuyên mục: ${c} (demo)`); } },
          secondary: { text: "Đóng", action: () => closeModal() }
        });
      });
    });

    // Exam date
    $("#setExamDate").addEventListener("click", () => {
      openModal({
        title: "Chọn ngày thi",
        desc: "Nhập ngày thi dự kiến để gợi ý lịch học sát hơn.",
        body: [
          inputRow("Ngày thi (YYYY-MM-DD)", state.examDate || "", "examDateInput"),
          card("Gợi ý", "Nếu còn ít hơn 7 ngày, ưu tiên điểm liệt và thi thử bấm giờ mỗi ngày.")
        ],
        primary: { text: "Lưu", action: () => {
          const v = ($("#examDateInput")?.value || "").trim();
          state.examDate = v;
          save();
          closeModal();
          toast(v ? `Đã lưu ngày thi: ${v}` : "Đã xóa ngày thi");
        }},
        secondary: { text: "Hủy", action: () => closeModal() }
      });
    });

    // Export/share
    $("#exportProgress").addEventListener("click", async () => {
      const text =
`Tiến độ ôn thi bằng lái (${state.license})
- Mục tiêu tuần: ${state.weeklyDone}/${state.weeklyGoal} buổi
- Đề thi thử: ${state.examsDone}
- Câu hay sai: ${state.wrongCount}
- Chuỗi học: ${state.streak} ngày
${state.examDate ? `- Ngày thi: ${state.examDate}` : ""}`.trim();

      try {
        await navigator.clipboard.writeText(text);
        toast("Đã copy tiến độ vào clipboard");
      } catch (e) {
        openModal({
          title: "Chia sẻ tiến độ",
          desc: "Copy nội dung bên dưới để gửi bạn bè / giáo viên.",
          body: [textareaRow("Nội dung", text, "shareText")],
          primary: { text: "Đóng", action: () => closeModal() }
        });
      }
    });

    // Tips quick
    $("#openTips")?.addEventListener("click", () => {
      openModal({
        title: "Mẹo nhanh",
        desc: "Một vài mẹo để tránh mất điểm (demo).",
        body: [
          card("Điểm liệt", "Luôn đọc kỹ từ khóa: “không được”, “bắt buộc”, “được phép”."),
          card("Biển báo", "Nhóm biển cấm thường viền đỏ; hiệu lệnh nền xanh; nguy hiểm tam giác."),
          card("Ưu tiên", "Gặp “đường ưu tiên” và “đường chính” thì ưu tiên theo biển, sau đó theo hướng.")
        ],
        primary: { text: "Đã hiểu", action: () => closeModal() }
      });
    });

    // Modal helpers
    const modal = $("#modal");
    const modalBackdrop = $("#modalBackdrop");
    const modalClose = $("#modalClose");
    const modalTitle = $("#modalTitle");
    const modalDesc = $("#modalDesc");
    const modalBody = $("#modalBody");
    const modalPrimary = $("#modalPrimary");
    const modalSecondary = $("#modalSecondary");

    function card(title, desc) {
      return `
        <div class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
          <div class="text-xs font-semibold text-white tracking-tight">${title}</div>
          <div class="mt-1 text-xs text-slate-300">${desc}</div>
        </div>
      `;
    }

    function optionRow(title, desc, key) {
      const selected = localStorage.getItem("lx_plan") === key;
      return `
        <button data-plan="${key}" class="planPick flex w-full items-start gap-3 rounded-xl bg-white/5 p-4 text-left ring-1 ring-white/10 hover:bg-white/10">
          <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg ${selected ? "bg-indigo-500/20 ring-indigo-400/30" : "bg-white/5 ring-white/10"} ring-1">
            <span class="iconify ${selected ? "text-indigo-100" : "text-slate-200"}" data-icon="lucide:check-circle-2" data-width="18" data-height="18" style="stroke-width:1.5;"></span>
          </span>
          <span class="flex-1">
            <span class="block text-sm font-semibold text-white tracking-tight">${title}</span>
            <span class="mt-1 block text-xs text-slate-300">${desc}</span>
          </span>
          <span class="text-xs ${selected ? "text-indigo-200" : "text-slate-400"}">${selected ? "Đang chọn" : "Chọn"}</span>
        </button>
      `;
    }

    function inputRow(label, value, id) {
      return `
        <label class="grid gap-2">
          <span class="text-xs font-medium text-slate-200">${label}</span>
          <input id="${id}" value="${escapeHtml(value)}" placeholder="2025-12-31"
            class="w-full rounded-xl bg-slate-950/40 px-3 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 outline-none focus:ring-white/20" />
          <span class="text-xs text-slate-500">Để trống nếu chưa xác định.</span>
        </label>
      `;
    }

    function textareaRow(label, value, id) {
      return `
        <label class="grid gap-2">
          <span class="text-xs font-medium text-slate-200">${label}</span>
          <textarea id="${id}" rows="6"
            class="w-full resize-none rounded-xl bg-slate-950/40 px-3 py-3 text-xs text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 outline-none focus:ring-white/20">${escapeHtml(value)}</textarea>
        </label>
      `;
    }

    function escapeHtml(str) {
      return String(str || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function openModal({ title, desc, body = [], primary, secondary }) {
      modalTitle.textContent = title || "Thông báo";
      modalDesc.textContent = desc || "";
      modalBody.innerHTML = body.join("");

      // Bind plan pick if present
      setTimeout(() => {
        $$(".planPick").forEach(b => {
          b.addEventListener("click", () => {
            localStorage.setItem("lx_plan", b.dataset.plan);
            toast("Đã chọn tốc độ học");
            // Re-render within modal
            modalBody.innerHTML = [
              optionRow("Nhẹ", "15–20 phút • Ôn biển báo + 10 câu trọng tâm", "lx_plan_light"),
              optionRow("Chuẩn", "25–35 phút • 1 đề nhanh + ôn câu sai", "lx_plan_std"),
              optionRow("Tăng tốc", "40–55 phút • 1 đề bấm giờ + điểm liệt", "lx_plan_fast")
            ].join("");
          });
        });
      }, 0);

      modalPrimary.textContent = primary?.text || "Đồng ý";
      modalPrimary.onclick = primary?.action || closeModal;

      if (secondary?.text) {
        modalSecondary.classList.remove("hidden");
        modalSecondary.classList.add("inline-flex");
        modalSecondary.textContent = secondary.text;
        modalSecondary.onclick = secondary.action || closeModal;
      } else {
        modalSecondary.classList.add("hidden");
        modalSecondary.classList.remove("inline-flex");
      }

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }

    modalBackdrop.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
    });

    // Toast (simple)
    let toastTimer = null;
    function toast(message) {
      let el = $("#toast");
      if (!el) {
        el = document.createElement("div");
        el.id = "toast";
        el.className = "fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-xl bg-slate-950/90 px-4 py-3 text-xs text-slate-100 ring-1 ring-white/10 backdrop-blur";
        document.body.appendChild(el);
      }
      el.textContent = message;
      el.style.opacity = "1";
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        el.style.opacity = "0";
      }, 1800);
    }

    // Initialize streak display relative to last day (optional reset)
    (function normalizeStreak() {
      if (!state.lastStudyDate) return;
      const t = todayISO();
      if (state.lastStudyDate === t) return;
      const last = new Date(state.lastStudyDate + "T00:00:00");
      const now = new Date(t + "T00:00:00");
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) state.streak = 0;
      save();
    })();

    render();
  
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
      

<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-56 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50"></div>
</div>
<div className="relative">

<header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex pt-5 pb-5 items-center justify-between">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl ring-1 bg-black/5 ring-black/10">
<span className="text-sm font-semibold tracking-tight text-black">LX</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-black">Ôn thi bằng lái</div>
<div className="text-xs text-slate-700">Luyện đề • Mẹo • Tiến độ</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group hidden sm:flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ring-1 bg-black/5 text-slate-800 ring-black/10 hover:bg-black/10" id="streakBtn">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-600/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:flame" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-left">
<span className="block text-xs font-medium text-slate-800">Chuỗi học</span>
<span className="block text-xs text-slate-600" id="streakText">0 ngày</span>
</span>
</button>
<button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ring-1 bg-black/5 text-slate-800 ring-black/10 hover:bg-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:bell" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="hidden sm:inline">Nhắc học</span>
</button>
<button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ring-1 bg-black/5 text-slate-800 ring-black/10 hover:bg-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:user" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="hidden sm:inline">Tài khoản</span>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">

<section className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
<div className="lg:col-span-7">
<div className="rounded-2xl p-5 ring-1 sm:p-6 bg-black/5 ring-black/10">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium ring-1 text-indigo-800 ring-indigo-600/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:sparkles" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                Học thông minh, thi chắc
              </span>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 bg-black/5 text-slate-800 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:shield-check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                Tập trung câu hay sai
              </span>
</div>
<div className="mt-4">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
        Ôn thi bằng lái xe Việt Nam, rõ lộ trình, bám sát đề
      </h1>
<p className="mt-2 text-sm text-slate-700">
        Chọn hạng bằng, làm đề nhanh, học biển báo và mẹo. Theo dõi tiến độ theo ngày để vào phòng thi tự tin hơn.
      </p>
</div>

<div className="mt-5 grid gap-3 sm:grid-cols-12">
<div className="sm:col-span-7">
<label className="sr-only" htmlFor="search">Tìm câu hỏi / biển báo</label>
<div className="flex items-center gap-2 rounded-xl px-3 py-3 ring-1 focus-within:ring-white/20 bg-slate-50/40 ring-black/10">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-height="18" data-icon="lucide:search" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m21 21l-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</g>
</svg>
<input className="w-full bg-transparent text-sm placeholder:text-slate-400 outline-none text-slate-900" id="search" placeholder="Tìm: “tốc độ”, “vượt xe”, “biển cấm”…" type="text"/>
<button aria-label="Xóa" className="hidden rounded-lg p-1 text-slate-700 hover:bg-black/5 hover:text-black" id="clearSearch">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="mt-2 hidden text-xs text-slate-600" id="searchHint">
          Gợi ý: “điểm liệt”, “nồng độ cồn”, “đường ưu tiên”.
        </div>
</div>
<div className="sm:col-span-5">
<label className="sr-only" htmlFor="license">Chọn hạng bằng</label>
<div className="relative">
<button className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left ring-1 bg-slate-50/40 ring-black/10 hover:bg-black/5" id="licenseBtn">
<span className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-600/20">
<svg aria-hidden="true" className="iconify text-indigo-800 iconify--lucide" data-height="18" data-icon="lucide:car" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</span>
<span>
<span className="block text-xs text-slate-600">Hạng bằng</span>
<span className="block text-sm font-medium text-slate-900" id="licenseValue">B2 (ô tô)</span>
</span>
</span>
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-height="18" data-icon="lucide:chevron-down" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="absolute z-20 mt-2 hidden w-full overflow-hidden rounded-xl ring-1 backdrop-blur bg-slate-50/90 ring-black/10" id="licenseMenu">
<div className="p-2">
<button className="licenseItem flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-black/5" data-icon="lucide:bike" data-license="A1 (xe máy)">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:bike" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3l4-3l2 3h2"></path></g></svg>
</span>
<span className="flex-1">
<span className="block font-medium">A1</span>
<span className="block text-xs text-slate-600">Xe máy đến 125cc</span>
</span>
<span className="pick hidden text-xs font-medium text-indigo-800">Chọn</span>
</button>
<button className="licenseItem flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-black/5" data-icon="lucide:bike" data-license="A2 (xe máy lớn)">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:bike" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3l4-3l2 3h2"></path></g></svg>
</span>
<span className="flex-1">
<span className="block font-medium">A2</span>
<span className="block text-xs text-slate-600">Xe mô tô phân khối lớn</span>
</span>
<span className="pick hidden text-xs font-medium text-indigo-800">Chọn</span>
</button>
<button className="licenseItem flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-black/5" data-icon="lucide:car" data-license="B1 (tự động)">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:car" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</span>
<span className="flex-1">
<span className="block font-medium">B1</span>
<span className="block text-xs text-slate-600">Ô tô số tự động</span>
</span>
<span className="pick hidden text-xs font-medium text-indigo-800">Chọn</span>
</button>
<button className="licenseItem flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-black/5" data-icon="lucide:car" data-license="B2 (ô tô)">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:car" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</span>
<span className="flex-1">
<span className="block font-medium">B2</span>
<span className="block text-xs text-slate-600">Ô tô số sàn / tự động</span>
</span>
<span className="pick text-xs font-medium text-indigo-800">Chọn</span>
</button>
<button className="licenseItem flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-black/5" data-icon="lucide:truck" data-license="C (tải)">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:truck" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</span>
<span className="flex-1">
<span className="block font-medium">C</span>
<span className="block text-xs text-slate-600">Xe tải</span>
</span>
<span className="pick hidden text-xs font-medium text-indigo-800">Chọn</span>
</button>
</div>
</div>
</div>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:bookmark" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Lưu câu hay sai
                  </span>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:timer" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 2h4m-2 12l3-3"></path><circle cx="12" cy="14" r="8"></circle></g></svg>
                    Thi thử bấm giờ
                  </span>
</div>
</div>
</div>

<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-black hover:bg-indigo-600" id="startPlan">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:play" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Bắt đầu lộ trình hôm nay
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ring-1 bg-black/5 text-slate-900 ring-black/10 hover:bg-black/10" id="quickExam">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:clipboard-check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14l2 2l4-4"></path></g></svg>
                Làm đề nhanh 20 câu
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ring-1 bg-black/5 text-slate-900 ring-black/10 hover:bg-black/10" id="reviewWrong">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:alert-triangle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Ôn câu hay sai
              </button>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="grid gap-6">
<div className="rounded-2xl p-5 ring-1 sm:p-6 bg-black/5 ring-black/10">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight text-black">Tiến độ học</div>
<div className="mt-1 text-xs text-slate-700">Cập nhật theo ngày, ưu tiên phần yếu</div>
</div>
<button className="rounded-xl px-3 py-2 text-xs font-medium ring-1 bg-black/5 text-slate-800 ring-black/10 hover:bg-black/10" id="resetProgress">
                  Đặt lại
                </button>
</div>
<div className="mt-5 grid gap-4">
<div className="">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-700">Mục tiêu tuần</div>
<div className="text-xs font-medium text-slate-800"><span id="weeklyDone">0</span>/<span id="weeklyGoal">12</span> buổi</div>
</div>
<div className="mt-2 h-2.5 overflow-hidden rounded-full ring-1 bg-black/5 ring-black/10">
<div className="h-full w-[0%] rounded-full bg-indigo-500" id="weeklyBar" style={{width: '0%'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl p-4 ring-1 bg-slate-50/40 ring-black/10">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600">Đã làm đề</div>
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-height="18" data-icon="lucide:file-text" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight text-black" id="examsDone">0</div>
<div className="mt-1 text-xs text-slate-600">đề thi thử</div>
</div>
<div className="rounded-xl p-4 ring-1 bg-slate-50/40 ring-black/10">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600">Câu hay sai</div>
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-height="18" data-icon="lucide:bookmark-x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2ZM14.5 7.5l-5 5m0-5l5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight text-black" id="wrongCount">0</div>
<div className="mt-1 text-xs text-slate-600">câu cần ôn</div>
</div>
</div>
<div className="rounded-xl bg-gradient-to-r from-indigo-500/15 to-cyan-500/10 p-4 ring-1 ring-black/10">
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify text-indigo-900 iconify--lucide" data-height="18" data-icon="lucide:calendar-check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-black">Nhiệm vụ hôm nay</div>
<div className="mt-1 text-xs text-slate-800" id="todayPlan">
                        1) 10 câu điểm liệt • 2) 12 biển báo • 3) Đề nhanh 20 câu
                      </div>
<div className="mt-3 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold ring-1 bg-black/10 text-black ring-black/10 hover:bg-black/15" id="markSession">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                          Hoàn thành 1 buổi
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ring-1 bg-black/5 text-slate-900 ring-black/10 hover:bg-black/10" id="shufflePlan">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:shuffle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m18 14l4 4l-4 4m0-20l4 4l-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></g></svg>
                          Đổi nhiệm vụ
                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl p-5 ring-1 sm:p-6 bg-black/5 ring-black/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-black">Lối tắt</div>
<div className="mt-1 text-xs text-slate-700">Vào thẳng phần bạn cần</div>
</div>
<span className="text-xs text-slate-600">Phím tắt: / để tìm</span>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
<a className="group flex items-center gap-3 rounded-xl p-4 ring-1 bg-slate-50/40 ring-black/10 hover:bg-black/5" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-600/20">
<svg aria-hidden="true" className="iconify text-emerald-800 iconify--lucide" data-height="18" data-icon="lucide:route" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></g></svg>
</span>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-black">Lộ trình 7 ngày</div>
<div className="mt-1 text-xs text-slate-700">Mỗi ngày 20–30 phút, có nhắc học</div>
</div>
<svg aria-hidden="true" className="iconify group-hover:text-slate-200 text-slate-600 iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="group flex items-center gap-3 rounded-xl p-4 ring-1 bg-slate-50/40 ring-black/10 hover:bg-black/5" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-600/20">
<svg aria-hidden="true" className="iconify text-amber-800 iconify--lucide" data-height="18" data-icon="lucide:graduation-cap" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</span>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-black">Bộ câu hỏi trọng tâm</div>
<div className="mt-1 text-xs text-slate-700">Điểm liệt, sa hình, mẹo ghi nhớ</div>
</div>
<svg aria-hidden="true" className="iconify group-hover:text-slate-200 text-slate-600 iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="mt-6">
<div className="flex items-end justify-between gap-3">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-black">Học theo chuyên mục</h2>
<p className="mt-1 text-sm text-slate-700">Chọn phần để luyện nhanh hoặc học kỹ</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ring-1 bg-black/5 text-slate-900 ring-black/10 hover:bg-black/10" id="openTips">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:lightbulb" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Mẹo nhanh
          </button>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
<button className="categoryBtn rounded-2xl p-5 text-left ring-1 bg-black/5 ring-black/10 hover:bg-black/10" data-category="Điểm liệt">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 ring-1 ring-rose-600/20">
<svg aria-hidden="true" className="iconify text-rose-800 iconify--lucide" data-height="20" data-icon="lucide:octagon-alert" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01M12 8v4m3.312-10a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="inline-flex items-center rounded-full px-2 py-1 text-xs ring-1 bg-black/5 text-slate-700 ring-black/10">Ưu tiên</span>
</div>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-black">Câu điểm liệt</div>
<div className="mt-1 text-xs text-slate-700">Học theo nhóm tình huống, tránh sai đáng tiếc</div>
</div>
</button>
<button className="categoryBtn rounded-2xl p-5 text-left ring-1 bg-black/5 ring-black/10 hover:bg-black/10" data-category="Biển báo">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-600/20">
<svg aria-hidden="true" className="iconify text-cyan-800 iconify--lucide" data-height="20" data-icon="lucide:signpost" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8m0-18v3m6 0a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="inline-flex items-center rounded-full px-2 py-1 text-xs ring-1 bg-black/5 text-slate-700 ring-black/10">Flash</span>
</div>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-black">Biển báo</div>
<div className="mt-1 text-xs text-slate-700">Ôn theo dạng: cấm • nguy hiểm • hiệu lệnh • chỉ dẫn</div>
</div>
</button>
<button className="categoryBtn rounded-2xl p-5 text-left ring-1 bg-black/5 ring-black/10 hover:bg-black/10" data-category="Sa hình">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-600/20">
<span className="iconify text-emerald-800" data-height="20" data-icon="lucide:cones" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="inline-flex items-center rounded-full px-2 py-1 text-xs ring-1 bg-black/5 text-slate-700 ring-black/10">Thực hành</span>
</div>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-black">Sa hình</div>
<div className="mt-1 text-xs text-slate-700">Mẹo vào bài thi, lỗi trừ điểm thường gặp</div>
</div>
</button>
<button className="categoryBtn rounded-2xl p-5 text-left ring-1 bg-black/5 ring-black/10 hover:bg-black/10" data-category="Tốc độ - khoảng cách">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-600/20">
<svg aria-hidden="true" className="iconify text-indigo-800 iconify--lucide" data-height="20" data-icon="lucide:gauge" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="inline-flex items-center rounded-full px-2 py-1 text-xs ring-1 bg-black/5 text-slate-700 ring-black/10">Ghi nhớ</span>
</div>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-black">Tốc độ &amp; khoảng cách</div>
<div className="mt-1 text-xs text-slate-700">Bảng tốc độ, khoảng cách an toàn, mẹo làm nhanh</div>
</div>
</button>
<button className="categoryBtn rounded-2xl p-5 text-left ring-1 bg-black/5 ring-black/10 hover:bg-black/10" data-category="Nồng độ cồn">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-600/20">
<svg aria-hidden="true" className="iconify text-amber-800 iconify--lucide" data-height="20" data-icon="lucide:ban" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.929 4.929L19.07 19.071"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<span className="inline-flex items-center rounded-full px-2 py-1 text-xs ring-1 bg-black/5 text-slate-700 ring-black/10">Pháp luật</span>
</div>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-black">Cồn &amp; quy định</div>
<div className="mt-1 text-xs text-slate-700">Tập trung câu dễ nhầm, lựa chọn đúng theo luật</div>
</div>
</button>
<button className="categoryBtn rounded-2xl p-5 text-left ring-1 bg-black/5 ring-black/10 hover:bg-black/10" data-category="Thi thử">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 ring-1 ring-fuchsia-600/20">
<svg aria-hidden="true" className="iconify text-fuchsia-800 iconify--lucide" data-height="20" data-icon="lucide:clock" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<span className="inline-flex items-center rounded-full px-2 py-1 text-xs ring-1 bg-black/5 text-slate-700 ring-black/10">Bấm giờ</span>
</div>
<div className="mt-4">
<div className="text-sm font-semibold tracking-tight text-black">Thi thử</div>
<div className="mt-1 text-xs text-slate-700">Mô phỏng phòng thi, chấm điểm và lưu lịch sử</div>
</div>
</button>
</div>
</section>

<footer className="mt-10">
<div className="flex flex-col gap-3 rounded-2xl p-5 ring-1 sm:flex-row sm:items-center sm:justify-between sm:p-6 bg-black/5 ring-black/10">
<div className="flex items-center gap-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 bg-black/5 ring-black/10">
<svg aria-hidden="true" className="iconify text-slate-800 iconify--lucide" data-height="20" data-icon="lucide:messages-square" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-black">Cần lộ trình phù hợp?</div>
<div className="mt-1 text-xs text-slate-700">Cho biết ngày thi dự kiến để gợi ý lịch học.</div>
</div>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-xs font-semibold text-black hover:bg-indigo-600" id="setExamDate">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:calendar" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
              Chọn ngày thi
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-medium ring-1 bg-black/5 text-slate-900 ring-black/10 hover:bg-black/10" id="exportProgress">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:share-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></g></svg>
              Chia sẻ tiến độ
            </button>
</div>
</div>
<div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
<div>© <span id="year">2025</span> LX • Home prototype</div>
<div className="flex items-center gap-3">
<a className="hover:text-slate-700" href="#">Điều khoản</a>
<a className="hover:text-slate-700" href="#">Bảo mật</a>
<a className="hover:text-slate-700" href="#">Hỗ trợ</a>
</div>
</div>
</footer>
</main>
</div>

<div className="fixed inset-0 z-50 hidden items-end justify-center sm:items-center" id="modal">
<div className="absolute inset-0 bg-slate-50/70" id="modalBackdrop"></div>
<div className="relative w-full max-w-xl rounded-t-2xl p-5 ring-1 backdrop-blur sm:rounded-2xl sm:p-6 bg-slate-50/90 ring-black/10">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-base font-semibold tracking-tight text-black" id="modalTitle">Thông báo</div>
<div className="mt-1 text-sm text-slate-700" id="modalDesc">Nội dung</div>
</div>
<button aria-label="Đóng" className="rounded-xl p-2 ring-1 bg-black/5 text-slate-800 ring-black/10 hover:bg-black/10" id="modalClose">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="mt-4 grid gap-3" id="modalBody"></div>
<div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
<button className="hidden items-center justify-center rounded-xl px-4 py-3 text-xs font-medium ring-1 bg-black/5 text-slate-900 ring-black/10 hover:bg-black/10" id="modalSecondary">
          Phụ
        </button>
<button className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-3 text-xs font-semibold text-black hover:bg-indigo-600" id="modalPrimary">
          Đồng ý
        </button>
</div>
</div>
</div>


    </>
  );
}
