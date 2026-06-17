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



      // Init icons with stroke-width 1.5
      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // i18n dictionary
      const i18n = {
        zh: {
          title: "高情商回复生成器",
          subtitle: "输入对方原话，选择语气，一键生成中越双语高情商回复。",
          labelOriginal: "对方原话",
          labelTone: "语气选择",
          labelToneHint: "8 种预设",
          labelContext: "补充背景（可选）",
          labelPinyin: "中文显示拼音",
          labelExplain: "是否生成解释",
          btnGenerate: "生成",
          hintLatency: "约 1-2 秒生成",
          hintShortcut: "Ctrl/Cmd + Enter",
          emptyTitle: "准备好生成更有温度的回复",
          emptyDesc: "支持中文/越南语、高情商措辞、直译与解释。按 Ctrl/Cmd + Enter 快速生成。",
          eqCnTitle: "EQ中文",
          eqViTitle: "越南语",
          literalTitle: "直译",
          explainTitle: "解释",
          literalPinyinToggleShow: "显示拼音",
          literalPinyinToggleHide: "隐藏拼音",
          copy: "复制",
          copied: "已复制",
          copyFail: "复制失败",
          toastError: "网络错误，请稍后再试",
          footerMade: "由",
          footerWith: "构建 · 支持 i18n",
          zaloCopy: "复制",
          zaloOpen: "打开",
          langLabel: "中文",
        },
        vi: {
          title: "Trình tạo phản hồi tinh tế",
          subtitle: "Nhập lời của đối phương, chọn ngữ khí và tạo phản hồi song ngữ Trung-Việt.",
          labelOriginal: "Nguyên văn đối phương",
          labelTone: "Ngữ khí",
          labelToneHint: "8 tùy chọn",
          labelContext: "Bối cảnh bổ sung (tùy chọn)",
          labelPinyin: "Hiển thị pinyin cho tiếng Trung",
          labelExplain: "Có tạo phần giải thích",
          btnGenerate: "Tạo",
          hintLatency: "Tạo trong 1-2 giây",
          hintShortcut: "Ctrl/Cmd + Enter",
          emptyTitle: "Sẵn sàng tạo phản hồi ấm áp hơn",
          emptyDesc: "Hỗ trợ Trung/Việt, EQ, dịch trực nghĩa và giải thích. Nhấn Ctrl/Cmd + Enter.",
          eqCnTitle: "EQ Tiếng Trung",
          eqViTitle: "Tiếng Việt",
          literalTitle: "Dịch trực nghĩa",
          explainTitle: "Giải thích",
          literalPinyinToggleShow: "Hiện pinyin",
          literalPinyinToggleHide: "Ẩn pinyin",
          copy: "Sao chép",
          copied: "Đã sao chép",
          copyFail: "Sao chép thất bại",
          toastError: "Lỗi mạng, vui lòng thử lại",
          footerMade: "Bởi",
          footerWith: "xây dựng · hỗ trợ i18n",
          zaloCopy: "Sao chép",
          zaloOpen: "Mở",
          langLabel: "Tiếng Việt",
        }
      };

      let currentLang = "zh";
      const get = (id) => document.getElementById(id);

      function applyLang(lang) {
        currentLang = lang;
        const t = i18n[lang];
        get("title").textContent = t.title;
        get("subtitle").textContent = t.subtitle;
        get("labelOriginal").textContent = t.labelOriginal;
        get("labelTone").textContent = t.labelTone;
        get("labelToneHint").textContent = t.labelToneHint;
        get("labelContext").textContent = t.labelContext;
        get("labelPinyin").textContent = t.labelPinyin;
        get("labelExplain").textContent = t.labelExplain;
        get("btnText").textContent = t.btnGenerate;
        get("hintLatency").textContent = t.hintLatency;
        get("hintShortcut").textContent = t.hintShortcut;
        get("emptyTitle").textContent = t.emptyTitle;
        get("emptyDesc").textContent = t.emptyDesc;
        get("eqCnTitle").textContent = t.eqCnTitle;
        get("eqViTitle").textContent = t.eqViTitle;
        get("literalTitle").textContent = t.literalTitle;
        get("explainTitle").textContent = t.explainTitle;
        get("literalPinyinToggleLabel").textContent = t.literalPinyinToggleShow;
        get("copyText1").textContent = t.copy;
        get("copyText2").textContent = t.copy;
        get("copyText3").textContent = t.copy;
        get("copyText4").textContent = t.copy;
        get("footerMade").textContent = t.footerMade;
        get("footerWith").textContent = t.footerWith;
        get("copyZaloText").textContent = t.zaloCopy;
        get("openZaloText").textContent = t.zaloOpen;
        get("langLabel").textContent = t.langLabel;
      }

      // Language switch dropdown
      const langSwitch = get("langSwitch");
      const langMenu = get("langMenu");
      langSwitch.addEventListener("click", (e) => {
        const isMenu = e.target.closest("#langMenu");
        if (!isMenu) {
          langMenu.classList.toggle("hidden");
        }
      });
      langMenu.querySelectorAll("button[data-lang]").forEach(btn => {
        btn.addEventListener("click", () => {
          applyLang(btn.dataset.lang);
          langMenu.classList.add("hidden");
          toast(i18n[currentLang].langLabel + " · OK", "success");
        });
      });
      document.addEventListener("click", (e) => {
        if (!langSwitch.contains(e.target)) langMenu.classList.add("hidden");
      });

      // Tone selector
      const toneGroup = get("toneGroup");
      let selectedTone = "default";
      function syncToneButtons() {
        toneGroup.querySelectorAll(".tone-btn").forEach(btn => {
          const active = btn.dataset.tone === selectedTone;
          btn.setAttribute("aria-pressed", active ? "true" : "false");
          if (active) {
            btn.classList.add("bg-indigo-500/30", "outline-indigo-400/40");
          } else {
            btn.classList.remove("bg-indigo-500/30", "outline-indigo-400/40");
          }
        });
      }
      toneGroup.querySelectorAll(".tone-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          selectedTone = btn.dataset.tone;
          syncToneButtons();
        });
      });
      syncToneButtons();

      // Pinyin toggle
      const pinyinToggle = get("pinyinToggle");
      let showPinyin = false;
      pinyinToggle.addEventListener("click", () => {
        showPinyin = !showPinyin;
        pinyinToggle.dataset.on = showPinyin ? "true" : "false";
        pinyinToggle.setAttribute("aria-checked", showPinyin ? "true" : "false");
        // Reflect immediately on existing content
        get("cnPinyin").classList.toggle("hidden", !showPinyin);
      });

      // Explanation checkbox
      const explainCheck = get("explainCheck");

      // Textarea auto-resize
      const inputText = get("inputText");
      function autosize(el) {
        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, 240) + "px";
      }
      inputText.addEventListener("input", () => autosize(inputText));
      autosize(inputText);

      // Clear button
      get("clearBtn").addEventListener("click", () => {
        inputText.value = "";
        autosize(inputText);
        inputText.focus();
      });

      // Generate
      const generateBtn = get("generateBtn");
      const results = get("results");
      const emptyState = get("emptyState");
      const btnSpinner = get("btnSpinner");
      const btnText = get("btnText");
      const genIconWrap = get("genIconWrap");

      function setLoading(state) {
        generateBtn.disabled = state;
        btnSpinner.classList.toggle("hidden", !state);
        genIconWrap.classList.toggle("hidden", state);
        btnText.textContent = state ? (currentLang === "zh" ? "生成中…" : "Đang tạo…") : i18n[currentLang].btnGenerate;
      }

      function sanitize(text) {
        return text.replace(/[&<>"]/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;", '"':"&quot;" }[c]));
      }

      // Simple demo generator (mock)
      function buildResponse({ original, context, tone, lang }) {
        // Basic templates
        const toneMap = {
          default: { zh: "谢谢你分享，我理解你的想法。", vi: "Cảm ơn bạn đã chia sẻ, mình hiểu quan điểm của bạn." },
          professional: { zh: "感谢反馈，我会基于事实与目标来推进这件事。", vi: "Cảm ơn góp ý, mình sẽ xử lý dựa trên dữ kiện và mục tiêu." },
          humor: { zh: "收到～给我一点时间，我保证不是在摸鱼。", vi: "Đã rõ ~ cho mình chút thời gian nhé, hứa là không lười đâu." },
          comfort: { zh: "我能感受到你的不容易，我们一起慢慢来。", vi: "Mình hiểu điều đó không dễ dàng, chúng ta cùng tiến chậm mà chắc." },
          apology: { zh: "抱歉给你带来不便，这是我的疏忽，我马上修复。", vi: "Xin lỗi vì sự bất tiện, đó là thiếu sót của mình, mình sẽ xử lý ngay." },
          refusal: { zh: "抱歉这超出当前范围，但我可以提供可行替代方案。", vi: "Rất tiếc việc này vượt phạm vi hiện tại, nhưng mình có thể đề xuất phương án thay thế." },
          followup: { zh: "为了更准确，请补充几点具体信息。", vi: "Để chính xác hơn, bạn có thể bổ sung vài thông tin cụ thể không?" },
          boundary: { zh: "我希望我们遵守约定的节奏与边界。", vi: "Mình mong chúng ta tôn trọng nhịp độ và ranh giới đã thống nhất." }
        };
        const base = toneMap[tone] || toneMap.default;
        const zh = `${base.zh}${original ? " 关于「" + original + "」" : ""}${context ? "（背景：" + context + "）" : ""}`;
        const vi = `${base.vi}${original ? " Liên quan đến “" + original + "”" : ""}${context ? " (Bối cảnh: " + context + ")" : ""}`;
        const literal = lang === "zh" ? `直译（zh→vi）：${vi}` : `Dịch trực nghĩa (vi→zh): ${zh}`;
        const explain = {
          quote: lang === "zh" ? "用更加温和清晰的方式回应，兼顾对方感受与事实进展。" : "Phản hồi mềm mại, rõ ràng; cân bằng cảm xúc và tiến độ.",
          meaning: lang === "zh" ? "含义：表达理解 + 说明立场/行动 + 给出边界或下一步。" : "Ý nghĩa: thể hiện thấu hiểu + lập trường/hành động + ranh giới hoặc bước tiếp theo.",
          gloss: lang === "zh" ? "逐词：感谢(礼貌) + 理解(共情) + 行动(负责) + 边界(健康)" : "Từng phần: cảm ơn (lịch sự) + thấu hiểu (đồng cảm) + hành động (trách nhiệm) + ranh giới (lành mạnh)"
        };
        return { zh, vi, literal, explain };
      }

      function applyPinyinLine(text) {
        // Mock pinyin: wrap characters with placeholders if they are Chinese
        const mapChar = (ch) => {
          const pseudo = "ā á ǎ à ē ī ō ū ü".split(" ");
          const code = ch.codePointAt(0);
          if (code >= 0x4E00 && code <= 0x9FFF) {
            return ch + " (" + pseudo[(code % pseudo.length)] + ")";
          }
          return ch;
        };
        return text.split("").map(mapChar).join("");
      }

      async function generate() {
        const original = inputText.value.trim();
        const context = get("contextText").value.trim();
        if (!original) {
          toast(currentLang === "zh" ? "请输入对方原话" : "Vui lòng nhập nguyên văn", "warn");
          inputText.focus();
          return;
        }
        setLoading(true);
        try {
          await new Promise(r => setTimeout(r, 900 + Math.random() * 600));
          const data = buildResponse({ original, context, tone: selectedTone, lang: currentLang });
          emptyState.classList.add("hidden");
          results.classList.remove("hidden");

          // Fill Chinese EQ
          const cnText = get("cnText");
          cnText.textContent = data.zh;
          const cnPinyin = get("cnPinyin");
          cnPinyin.textContent = showPinyin ? applyPinyinLine(data.zh) : "";
          cnPinyin.classList.toggle("hidden", !showPinyin);

          // Vietnamese EQ
          get("viText").textContent = data.vi;

          // Literal
          const literalText = get("literalText");
          literalText.textContent = data.literal;
          const literalPinyin = get("literalPinyin");
          literalPinyin.textContent = applyPinyinLine(data.literal);
          literalPinyin.classList.add("hidden"); // collapsed by default
          get("literalPinyin").dataset.visible = "false";
          get("literalPinyin").previousVisible = false;

          // Explanation
          const showExplain = explainCheck.checked;
          get("explainCard").classList.toggle("hidden", !showExplain);
          get("explainBlock").textContent = data.explain.quote;
          get("explainMeaning").textContent = data.explain.meaning;
          get("explainGloss").textContent = data.explain.gloss;

          // Floating subtle motion on result cards
          document.querySelectorAll(".result-card").forEach((c, idx) => {
            c.style.animation = "float6 6s ease-in-out infinite";
            c.style.animationDelay = (idx * 0.3) + "s";
          });

          toast(currentLang === "zh" ? "生成完成" : "Đã tạo xong", "success");
        } catch (e) {
          toast(i18n[currentLang].toastError, "error");
        } finally {
          setLoading(false);
        }
      }

      // Copy
      function bindCopyButtons() {
        document.querySelectorAll(".copy-btn").forEach(btn => {
          btn.addEventListener("click", async () => {
            const type = btn.getAttribute("data-copy");
            let text = "";
            if (type === "cn") text = get("cnText").textContent.trim();
            if (type === "vi") text = get("viText").textContent.trim();
            if (type === "literal") text = get("literalText").textContent.trim();
            if (type === "explain") {
              text = [get("explainBlock").textContent, get("explainMeaning").textContent, get("explainGloss").textContent].filter(Boolean).join("\n");
            }
            try {
              await navigator.clipboard.writeText(text);
              toast(i18n[currentLang].copied, "success");
            } catch {
              toast(i18n[currentLang].copyFail, "error");
            }
          });
        });
      }
      bindCopyButtons();

      // Copy Zalo
      get("copyZalo").addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(get("zaloNum").textContent.trim());
          toast(i18n[currentLang].copied, "success");
        } catch {
          toast(i18n[currentLang].copyFail, "error");
        }
      });

      // Toggle literal pinyin
      get("togglePinYinLiteral").addEventListener("click", () => {
        const el = get("literalPinyin");
        const visible = el.classList.toggle("hidden");
        const nowVisible = !visible;
        get("literalPinyinToggleLabel").textContent = nowVisible ? i18n[currentLang].literalPinyinToggleHide : i18n[currentLang].literalPinyinToggleShow;
      });

      // Toast
      function toast(message, type = "info") {
        const stack = get("toastStack");
        const item = document.createElement("div");
        const color = type === "success" ? "emerald" : type === "error" ? "rose" : type === "warn" ? "amber" : "slate";
        item.className = "anim-toast rounded-lg px-3 py-2 text-sm text-white/90 bg-white/10 backdrop-blur-md outline outline-1 outline-white/10 flex items-center gap-2";
        item.style.animation = "toastFade 2.2s ease-in-out 1 forwards";
        item.innerHTML = `
          <i data-lucide="${type==='success'?'check-circle':type==='error'?'alert-triangle':type==='warn'?'circle-alert':'bell'}" class="w-4 h-4 text-white/80"></i>
          <span>${sanitize(message)}</span>
        `;
        stack.appendChild(item);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } , icons: {} , nameAttr: "data-lucide" });
        setTimeout(() => item.remove(), 2300);
      }

      // Keyboard shortcut
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "enter") {
          generate();
        }
      });

      // Generate button
      generateBtn.addEventListener("click", generate);

      // Initial language
      applyLang("zh");

      // Prevent memory leaks on unload
      window.addEventListener("beforeunload", () => {
        // no-op
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 bg-black"></div>

<div className="anim-aurora absolute -top-24 -left-20 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-[0.25]" style={{background: 'radial-gradient(45% 45% at 50% 50%, rgba(78, 124, 255, 0.45), rgba(0, 0, 0, 0))', animation: 'float6 9s ease-in-out infinite', filter: 'saturate(120%)'}}></div>
<div className="anim-aurora absolute -bottom-24 -right-32 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-[0.22]" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(107,70,193,0.45), rgba(0,0,0,0))', animation: 'float6 10s ease-in-out infinite', animationDelay: '.6s'}}></div>
<div className="anim-aurora absolute top-1/3 -left-10 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-[0.18]" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(16,185,129,0.35), rgba(0,0,0,0))', animation: 'float6 13s ease-in-out infinite', animationDelay: '1.2s'}}></div>

<div className="absolute inset-0 opacity-[0.35] mix-blend-screen" style={{background: 'radial-gradient(1200px 600px at 10% 10%, rgba(78,124,255,0.15), transparent), radial-gradient(1200px 600px at 90% 90%, rgba(107,70,193,0.18), transparent), radial-gradient(1000px 500px at 40% 80%, rgba(251,191,36,0.08), transparent)'}}></div>

<div className="absolute inset-0">
<svg className="absolute top-16 left-12 anim-twinkle" height="18" style={{animation: 'twinkle2 2.2s ease-in-out infinite'}} width="18">
<use href="#star"></use>
</svg>
<svg className="absolute top-1/3 right-24 anim-twinkle" height="14" style={{animation: 'twinkle2 2s ease-in-out infinite', animationDelay: '.4s'}} width="14">
<use href="#star"></use>
</svg>
<svg className="absolute bottom-24 left-1/4 anim-twinkle" height="16" style={{animation: 'twinkle2 2.4s ease-in-out infinite', animationDelay: '.8s'}} width="16">
<use href="#star"></use>
</svg>
<svg className="absolute top-1/2 right-1/3 anim-twinkle" height="12" style={{animation: 'twinkle2 2s ease-in-out infinite', animationDelay: '1.1s'}} width="12">
<use href="#star"></use>
</svg>
<svg className="absolute bottom-12 right-10 anim-twinkle" height="20" style={{animation: 'twinkle2 2.6s ease-in-out infinite', animationDelay: '.2s'}} width="20">
<use href="#star"></use>
</svg>
</div>

<svg className="absolute" height="0" width="0">
<symbol fill="none" id="star" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
</symbol>
</svg>
</div>

<div className="relative z-10">

<header className="max-w-[920px] mx-auto px-5 pt-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="text-white/90 text-lg font-semibold tracking-tight leading-none px-2 py-1 rounded-md bg-white/5 backdrop-blur" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.06)', letterSpacing: '-0.02em'}}>HG</div>
<div className="text-white/70 text-sm md:text-base">高情商回复生成器</div>
</div>
<div className="flex items-center gap-2">

<div className="group relative flex items-center gap-1 rounded-md px-2.5 py-1.5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer" id="langSwitch" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.08)'}}>
<i className="w-4 h-4 text-white/70" data-lucide="globe"></i>
<span className="text-white/80 text-sm" id="langLabel">中文</span>
<i className="w-3.5 h-3.5 text-white/60" data-lucide="chevron-down"></i>
<div className="absolute right-0 top-9 hidden min-w-[120px] rounded-lg p-1 bg-white/10 backdrop-blur-md" id="langMenu" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, .08), 0 10px 40px rgba(0,0,0,.35)'}}>
<button className="w-full text-left px-3 py-2 rounded-md text-white/85 hover:bg-white/10 text-sm" data-lang="zh">中文</button>
<button className="w-full text-left px-3 py-2 rounded-md text-white/85 hover:bg-white/10 text-sm" data-lang="vi">Tiếng Việt</button>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-[920px] mx-auto px-5 pb-20 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">

<section className="anim-float rounded-[14px] bg-white/8 backdrop-blur-2xl border border-white/10 p-5 lg:sticky lg:top-6" id="inputCard" style={{animation: 'float6 6s ease-in-out infinite', boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(78, 124, 255, 0.25), 0 20px 60px rgba(78, 124, 255, 0.08), 0 2px 0 rgba(255,255,255,0.04) inset'}}>
<div className="flex items-start justify-between gap-3">
<div>
<h1 className="text-[22px] md:text-[24px] font-semibold tracking-tight text-white" id="title">高情商回复生成器</h1>
<p className="text-white/60 text-sm mt-1" id="subtitle">输入对方原话，选择语气，一键生成中越双语高情商回复。</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-white/50">
<i className="w-4 h-4" data-lucide="keyboard"></i>
<span id="hintShortcut">Ctrl/Cmd + Enter</span>
</div>
</div>

<div className="mt-4">
<label className="text-white/70 text-sm" htmlFor="inputText" id="labelOriginal">对方原话</label>
<div className="relative mt-2">
<textarea className="w-full resize-none rounded-xl bg-white/5 outline-none focus:outline focus:outline-2 focus:outline-indigo-500/50 placeholder:text-white/30 text-white/90 p-4 pr-12 leading-relaxed backdrop-blur-md" id="inputText" placeholder="请输入对方原话..." rows="3" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)'}}></textarea>
<div className="absolute right-3 bottom-3 flex items-center gap-2">
<button className="rounded-md p-1.5 bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10" id="clearBtn" title="清空">
<i className="w-4 h-4 text-white/70" data-lucide="eraser"></i>
</button>
</div>
</div>
</div>

<div className="mt-4">
<div className="flex items-center justify-between">
<label className="text-white/70 text-sm" id="labelTone">语气选择</label>
<span className="text-[11px] text-white/40" id="labelToneHint">8 种预设</span>
</div>
<div className="mt-2 flex flex-wrap gap-2" id="toneGroup">

<button aria-pressed="true" className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="default">默认</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="professional">专业</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="humor">幽默</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="comfort">安抚</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="apology">道歉</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="refusal">拒绝</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="followup">追问</button>
<button className="tone-btn px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 text-white/85 outline outline-1 outline-white/10" data-tone="boundary">边界</button>
</div>
</div>

<div className="mt-4">
<label className="text-white/70 text-sm" htmlFor="contextText" id="labelContext">补充背景（可选）</label>
<input className="mt-2 w-full rounded-xl bg-white/5 outline-none focus:outline focus:outline-2 focus:outline-indigo-500/50 placeholder:text-white/30 text-white/90 p-3 backdrop-blur-md" id="contextText" placeholder="提供更多背景信息，获得更贴合的表述…" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)'}} type="text"/>
</div>

<div className="mt-4 flex flex-wrap items-center gap-4">

<div className="flex items-center gap-3">
<span className="text-sm text-white/70" id="labelPinyin">中文显示拼音</span>
<button aria-checked="false" className="group relative w-11 h-6 rounded-full bg-white/10 outline outline-1 outline-white/10 transition-colors data-[on=true]:bg-indigo-500/60" data-on="false" id="pinyinToggle" role="switch">
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white translate-x-0 transition-transform group-data-[on=true]:translate-x-5"></span>
</button>
</div>

<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" id="explainCheck" type="checkbox"/>
<span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-white/5 outline outline-1 outline-white/10 peer-checked:bg-emerald-500/80 transition-colors" title="是否生成解释">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span className="text-sm text-white/70" id="labelExplain">是否生成解释</span>
</label>
</div>

<div className="mt-5 flex items-center gap-3">
<button className="relative inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium tracking-tight text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-60" id="generateBtn" style={{boxShadow: '0 8px 30px rgba(78, 124, 255, .25), inset 0 0 0 1px rgba(255,255,255,.15)'}}>
<span className="flex" id="genIconWrap">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</span>
<span id="btnText">生成</span>
<span className="absolute inset-0 hidden items-center justify-center" id="btnSpinner">
<svg className="animate-spin h-4 w-4 text-white/90" fill="none" viewbox="0 0 24 24">
<circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
<path className="opacity-90" d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</span>
</button>
<div className="text-xs text-white/45"><span id="hintLatency">约 1-2 秒生成</span></div>
</div>
</section>

<section className="space-y-4" id="outputColumn">

<div className="anim-float rounded-[14px] bg-white/6 backdrop-blur-2xl border border-white/10 p-6 text-center" id="emptyState" style={{animation: 'float6 6s ease-in-out infinite', boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(107, 70, 193, 0.2), 0 20px 60px rgba(107,70,193,0.07)'}}>
<div className="mx-auto w-11 h-11 rounded-full bg-white/5 flex items-center justify-center outline outline-1 outline-white/10">
<i className="w-5 h-5 text-white/75" data-lucide="message-square"></i>
</div>
<h2 className="text-[18px] font-medium tracking-tight mt-3 text-white" id="emptyTitle">准备好生成更有温度的回复</h2>
<p className="text-white/55 text-sm mt-1" id="emptyDesc">支持中文/越南语、高情商措辞、直译与解释。按 Ctrl/Cmd + Enter 快速生成。</p>
</div>

<div className="space-y-4 hidden" id="results">

<div className="result-card rounded-[14px] bg-white/8 backdrop-blur-2xl border border-white/10 p-5 relative" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(78, 124, 255, 0.22), 0 20px 60px rgba(78,124,255,0.07)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-[13px] px-2 py-1 rounded-md bg-white/10 outline outline-1 outline-white/10">
<i className="w-3.5 h-3.5" data-lucide="messages-square"></i>
<span id="eqCnTitle">EQ中文</span>
</span>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 outline outline-1 outline-emerald-300/20">✓ 温和</span>
</div>
<button className="copy-btn inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" data-copy="cn">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span id="copyText1">复制</span>
</button>
</div>
<div className="mt-3 space-y-2">
<p className="text-white/90 leading-relaxed" id="cnText"></p>
<p className="text-white/50 text-sm hidden" id="cnPinyin"></p>
</div>
</div>

<div className="result-card rounded-[14px] bg-white/8 backdrop-blur-2xl border border-white/10 p-5 relative" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(78, 124, 255, 0.22), 0 20px 60px rgba(78,124,255,0.07)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-[13px] px-2 py-1 rounded-md bg-white/10 outline outline-1 outline-white/10">
<i className="w-3.5 h-3.5" data-lucide="languages"></i>
<span id="eqViTitle">越南语</span>
</span>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 outline outline-1 outline-amber-300/20">VN</span>
</div>
<button className="copy-btn inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" data-copy="vi">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span id="copyText2">复制</span>
</button>
</div>
<div className="mt-3">
<p className="text-white/90 leading-relaxed" id="viText"></p>
</div>
</div>

<div className="result-card rounded-[14px] bg-white/8 backdrop-blur-2xl border border-white/10 p-5 relative" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(78, 124, 255, 0.22), 0 20px 60px rgba(78,124,255,0.07)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-[13px] px-2 py-1 rounded-md bg-white/10 outline outline-1 outline-white/10">
<i className="w-3.5 h-3.5" data-lucide="repeat-2"></i>
<span id="literalTitle">直译</span>
</span>
<button className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" id="togglePinYinLiteral">
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
<span id="literalPinyinToggleLabel">显示拼音</span>
</button>
</div>
<button className="copy-btn inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" data-copy="literal">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span id="copyText3">复制</span>
</button>
</div>
<div className="mt-3 space-y-2">
<p className="text-white/90 leading-relaxed" id="literalText"></p>
<p className="text-white/50 text-sm hidden" id="literalPinyin"></p>
</div>
</div>

<div className="result-card rounded-[14px] bg-white/8 backdrop-blur-2xl border border-white/10 p-5 relative" id="explainCard" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(78, 124, 255, 0.22), 0 20px 60px rgba(78,124,255,0.07)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-[13px] px-2 py-1 rounded-md bg-white/10 outline outline-1 outline-white/10">
<i className="w-3.5 h-3.5" data-lucide="lightbulb"></i>
<span id="explainTitle">解释</span>
</span>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 outline outline-1 outline-teal-300/20">WHY</span>
</div>
<button className="copy-btn inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" data-copy="explain">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
<span id="copyText4">复制</span>
</button>
</div>
<blockquote className="mt-3 text-white/80 border-l-2 border-white/20 pl-3 italic" id="explainBlock"></blockquote>
<div className="mt-2">
<div className="text-white/85 text-sm" id="explainMeaning"></div>
<div className="text-white/55 text-xs mt-1" id="explainGloss"></div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed top-5 right-5 z-50 space-y-2" id="toastStack"></div>

<footer className="max-w-[920px] mx-auto px-5 pb-10">
<div className="rounded-[14px] bg-white/6 backdrop-blur-2xl border border-white/10 p-4 flex items-center justify-between" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255,255,255,0.12)'}}>
<div className="text-white/60 text-sm">
<span id="footerMade">由</span> <span className="font-medium text-white/80 tracking-tight">HG</span> <span id="footerWith">构建 · 支持 i18n</span>
</div>
<div className="flex items-center gap-3">
<div className="text-white/70 text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>ZALO: <span className="font-medium text-white/90 tracking-tight" id="zaloNum">0388808717</span></span>
</div>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" id="copyZalo">
<i className="w-3.5 h-3.5" data-lucide="clipboard-copy"></i>
<span id="copyZaloText">复制</span>
</button>
<a className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 outline outline-1 outline-white/10" href="https://zalo.me/0388808717" id="openZalo" target="_blank">
<i className="w-3.5 h-3.5" data-lucide="external-link"></i>
<span id="openZaloText">打开</span>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
