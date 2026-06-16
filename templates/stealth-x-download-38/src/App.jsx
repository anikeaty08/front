import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Global icon defaults (Solar Linear, 1.5 stroke)
    (function () {
      const apply = () => {
        document.querySelectorAll('iconify-icon').forEach(ic => {
          if (!ic.hasAttribute('stroke-width')) ic.setAttribute('stroke-width', '1.5');
        });
      };
      apply();
      const mo = new MutationObserver(apply);
      mo.observe(document.documentElement, { childList: true, subtree: true });
    })();

    const $ = (id) => document.getElementById(id);

    const storageKeys = {
      pass: "sx_owner_pass",
      settings: "sx_settings"
    };

    const defaultSettings = {
      downloadUrl: "https://example.com/StealthX-Setup.exe",
      discordUrl: "https://discord.gg/your-invite",
      version: "v1.0.0",
      updated: "Today",
      build: "Stable"
    };

    function maskUrl(url) {
      try {
        const u = new URL(url);
        const file = u.pathname.split("/").filter(Boolean).slice(-1)[0] || u.hostname;
        return `${u.hostname}/${file}`;
      } catch {
        return "Not set";
      }
    }

    function getSettings() {
      const raw = localStorage.getItem(storageKeys.settings);
      if (!raw) return { ...defaultSettings };
      try {
        return { ...defaultSettings, ...JSON.parse(raw) };
      } catch {
        return { ...defaultSettings };
      }
    }

    function setSettings(next) {
      localStorage.setItem(storageKeys.settings, JSON.stringify(next));
    }

    function applySettingsToUI() {
      const s = getSettings();

      const dl = $("downloadBtn");
      dl.href = s.downloadUrl || "#";
      dl.setAttribute("download", "");

      const d2 = $("discordBtn");
      d2.href = s.discordUrl || "#";

      const d3 = $("discordBtnFooter");
      d3.href = s.discordUrl || "#";

      $("versionText").textContent = s.version || defaultSettings.version;
      $("updatedText").textContent = s.updated || defaultSettings.updated;
      $("buildText").textContent = s.build || defaultSettings.build;

      $("dlLabel").textContent = s.downloadUrl ? maskUrl(s.downloadUrl) : "Not set";
    }

    function openAdmin() {
      $("adminModal").classList.remove("hidden");
      $("adminModal").classList.add("flex");
      document.body.classList.add("overflow-hidden");
      $("authError").classList.add("hidden");
      $("passInput").value = "";
      refreshAdminView();
      setTimeout(() => $("passInput").focus(), 50);
    }

    function closeAdmin() {
      $("adminModal").classList.add("hidden");
      $("adminModal").classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }

    function hasPass() {
      return !!localStorage.getItem(storageKeys.pass);
    }

    function isUnlocked() {
      return sessionStorage.getItem("sx_unlocked") === "true";
    }

    function setUnlocked(val) {
      sessionStorage.setItem("sx_unlocked", val ? "true" : "false");
    }

    function refreshAdminView() {
      const unlocked = isUnlocked();
      $("authBlock").classList.toggle("hidden", unlocked);
      $("settingsBlock").classList.toggle("hidden", !unlocked);
      $("lockBtn").classList.toggle("hidden", !unlocked);

      if (unlocked) {
        const s = getSettings();
        $("downloadUrlInput").value = s.downloadUrl || "";
        $("discordUrlInput").value = s.discordUrl || "";
        $("versionInput").value = s.version || "";
        $("updatedInput").value = s.updated || "";
        $("buildInput").value = s.build || "";
      } else {
        $("authHint").textContent = hasPass()
          ? "Enter your passphrase to unlock."
          : "No passphrase set yet. Enter one now to set it on this device.";
      }
    }

    // Mobile menu
    $("mobileMenuBtn").addEventListener("click", () => {
      $("mobileMenu").classList.toggle("hidden");
    });

    // Open admin buttons
    ["openAdminBtn", "openAdminBtnMobile", "openAdminBtn2"].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener("click", openAdmin);
    });

    $("closeAdminBtn").addEventListener("click", closeAdmin);
    $("adminModal").addEventListener("click", (e) => {
      if (e.target === $("adminModal").firstElementChild) closeAdmin();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("adminModal").classList.contains("hidden")) closeAdmin();
    });

    // Unlock
    $("unlockBtn").addEventListener("click", () => {
      const pass = $("passInput").value || "";
      if (pass.trim().length < 4) {
        $("authError").textContent = "Use at least 4 characters.";
        $("authError").classList.remove("hidden");
        return;
      }

      const existing = localStorage.getItem(storageKeys.pass);
      if (!existing) {
        localStorage.setItem(storageKeys.pass, pass);
        setUnlocked(true);
        $("authError").classList.add("hidden");
        refreshAdminView();
        return;
      }

      if (pass === existing) {
        setUnlocked(true);
        $("authError").classList.add("hidden");
        refreshAdminView();
      } else {
        $("authError").textContent = "Wrong passphrase.";
        $("authError").classList.remove("hidden");
      }
    });

    $("passInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("unlockBtn").click();
    });

    // Save
    $("saveBtn").addEventListener("click", () => {
      const next = {
        downloadUrl: $("downloadUrlInput").value.trim(),
        discordUrl: $("discordUrlInput").value.trim(),
        version: $("versionInput").value.trim() || defaultSettings.version,
        updated: $("updatedInput").value.trim() || defaultSettings.updated,
        build: $("buildInput").value.trim() || defaultSettings.build
      };

      setSettings(next);
      applySettingsToUI();

      $("saveToast").classList.remove("hidden");
      setTimeout(() => $("saveToast").classList.add("hidden"), 1400);
    });

    // Reset settings (not passphrase)
    $("resetBtn").addEventListener("click", () => {
      setSettings({ ...defaultSettings });
      applySettingsToUI();
      refreshAdminView();
      $("saveToast").textContent = "Reset to defaults.";
      $("saveToast").classList.remove("hidden");
      setTimeout(() => {
        $("saveToast").textContent = "Saved.";
        $("saveToast").classList.add("hidden");
      }, 1400);
    });

    // Lock
    $("lockBtn").addEventListener("click", () => {
      setUnlocked(false);
      refreshAdminView();
    });

    // Copy download link
    $("copyLinkBtn").addEventListener("click", async () => {
      const s = getSettings();
      if (!s.downloadUrl) return;

      try {
        await navigator.clipboard.writeText(s.downloadUrl);
        $("copyToast").classList.remove("hidden");
        setTimeout(() => $("copyToast").classList.add("hidden"), 1200);
      } catch {
        $("copyToast").textContent = "Copy failed.";
        $("copyToast").classList.remove("hidden");
        setTimeout(() => {
          $("copyToast").textContent = "Copied.";
          $("copyToast").classList.add("hidden");
        }, 1200);
      }
    });

    // Initial
    $("year").textContent = new Date().getFullYear();
    applySettingsToUI();
    refreshAdminView();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0">
<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(239,68,68,0.22),transparent_60%),radial-gradient(70%_50%_at_80%_20%,rgba(239,68,68,0.14),transparent_55%),radial-gradient(60%_55%_at_50%_90%,rgba(244,63,94,0.12),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black"></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '3.5rem 3.5rem'}}></div>
</div>

<header className="relative">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] flex items-center justify-center">
<span className="text-zinc-950 font-semibold tracking-tight text-base leading-none">SX</span>
</div>
<div className="leading-tight">
<div className="text-sm font-medium tracking-tight text-zinc-100">Stealth X</div>
<div className="text-xs text-zinc-400">Official site for a legitimate tool</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-2">
<a className="px-3 py-2 text-sm text-zinc-300 hover:text-zinc-50 rounded-lg hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#download">Download</a>
<a className="px-3 py-2 text-sm text-zinc-300 hover:text-zinc-50 rounded-lg hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-zinc-300 hover:text-zinc-50 rounded-lg hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" href="#faq">FAQ</a>
<button className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-4 py-2 text-sm text-zinc-100 transition" id="openAdminBtn">
<iconify-icon className="text-zinc-200" icon="solar:shield-keyhole-linear" width="18"></iconify-icon>
            Owner
          </button>
</nav>
<button className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 transition" id="mobileMenuBtn">
<iconify-icon className="text-zinc-200" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
<div className="md:hidden hidden pb-5" id="mobileMenu">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-2">
<a className="block px-3 py-2 text-sm text-zinc-200 hover:text-zinc-50 rounded-xl hover:bg-white/5 transition" href="#download">Download</a>
<a className="block px-3 py-2 text-sm text-zinc-200 hover:text-zinc-50 rounded-xl hover:bg-white/5 transition" href="#features">Features</a>
<a className="block px-3 py-2 text-sm text-zinc-200 hover:text-zinc-50 rounded-xl hover:bg-white/5 transition" href="#faq">FAQ</a>
<button className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-3 py-2 text-sm text-zinc-100 transition" id="openAdminBtnMobile">
<iconify-icon className="text-zinc-200" icon="solar:shield-keyhole-linear" width="18"></iconify-icon>
            Owner
          </button>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-14">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5">
<span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.15)]"></span>
<span className="text-xs text-zinc-200">Clean red UI • Fast updates • Secure distribution</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-50 leading-[1.05]">
            Stealth X
            <span className="block mt-2 text-zinc-300 font-medium">Official download for a legitimate desktop tool.</span>
</h1>
<p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
            This template includes a working download button, a Discord button, and an owner-only admin panel to update links and version info.
            I can’t help with cheats or executors, but this structure works great for a real app.
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3" id="download">
<a className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-zinc-950 font-medium px-5 py-3 ring-1 ring-red-400/30 shadow-[0_10px_30px_-12px_rgba(244,63,94,0.55)] transition" download="" href="#" id="downloadBtn">
<iconify-icon className="text-zinc-950" icon="solar:download-linear" width="20"></iconify-icon>
<span className="text-sm sm:text-base">Download</span>
<span className="text-xs text-zinc-900/70 font-medium">(Windows)</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 text-zinc-100 font-medium px-5 py-3 transition" href="#" id="discordBtn" rel="noreferrer" target="_blank">
<iconify-icon className="text-zinc-200" icon="solar:chat-round-linear" width="20"></iconify-icon>
<span className="text-sm sm:text-base">Join Discord</span>
</a>
</div>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Version</div>
<div className="mt-1 text-sm font-medium tracking-tight" id="versionText">v1.0.0</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Last update</div>
<div className="mt-1 text-sm font-medium tracking-tight" id="updatedText">Today</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Status</div>
<div className="mt-1 text-sm font-medium tracking-tight text-red-200">Online</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Build</div>
<div className="mt-1 text-sm font-medium tracking-tight" id="buildText">Stable</div>
</div>
</div>
<div className="mt-6 text-xs text-zinc-500">
            Tip: host your installer on a trusted file host (or your own server) and paste the direct URL in the owner panel.
          </div>
</div>

<div className="lg:pt-2">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_30px_90px_-60px_rgba(244,63,94,0.6)] overflow-hidden">
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-sm text-zinc-300">Release notes</div>
<div className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">What’s new</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 text-red-200 ring-1 ring-red-500/20 px-3 py-1.5">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
<span className="text-xs font-medium">Fast</span>
</div>
</div>
<ul className="mt-6 space-y-4">
<li className="flex gap-3">
<div className="mt-0.5 h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-200" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Signed download flow</div>
<div className="mt-0.5 text-xs sm:text-sm text-zinc-400">Single source of truth for your download URL and version text.</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-200" icon="solar:settings-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Owner-only admin panel</div>
<div className="mt-0.5 text-xs sm:text-sm text-zinc-400">Update links, version, status, and notes without editing code.</div>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-200" icon="solar:cloud-download-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Working download button</div>
<div className="mt-0.5 text-xs sm:text-sm text-zinc-400">Uses a direct file URL and the browser’s native download behavior.</div>
</div>
</li>
</ul>
<div className="mt-7 rounded-2xl bg-gradient-to-b from-white/6 to-white/4 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Current download</div>
<div className="mt-1 text-sm font-medium tracking-tight text-zinc-100" id="dlLabel">Not set</div>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-200 transition" id="copyLinkBtn">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
                    Copy link
                  </button>
</div>
<div className="hidden mt-3 text-xs text-zinc-400" id="copyToast">Copied.</div>
</div>
</div>
<div className="border-t border-white/10 bg-black/20 p-5 sm:p-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="text-xs sm:text-sm text-zinc-400">
                  Need help? Join Discord for support and updates.
                </div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-200 transition" href="#faq">
                    Read FAQ
                  </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500/10 hover:bg-red-500/15 text-red-200 ring-1 ring-red-500/20 px-3 py-2 text-xs font-medium transition" id="openAdminBtn2">
<iconify-icon icon="solar:shield-keyhole-linear" width="16"></iconify-icon>
                    Owner panel
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 sm:pb-14" id="features">
<div className="flex items-end justify-between gap-6">
<div>
<div className="text-xs text-zinc-400">Built-in</div>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Everything you asked for</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
<span className="inline-flex h-2 w-2 rounded-full bg-red-500"></span>
<span>Red theme</span>
<span className="text-zinc-600">•</span>
<span>Responsive</span>
<span className="text-zinc-600">•</span>
<span>Owner updates</span>
</div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="h-10 w-10 rounded-2xl bg-red-500/10 ring-1 ring-red-500/20 flex items-center justify-center">
<iconify-icon className="text-red-200" icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight">Update links instantly</div>
<div className="mt-2 text-sm text-zinc-400">Change the download URL and Discord invite from the panel (stored locally on your device).</div>
</div>
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="h-10 w-10 rounded-2xl bg-red-500/10 ring-1 ring-red-500/20 flex items-center justify-center">
<iconify-icon className="text-red-200" icon="solar:lock-keyhole-linear" width="20"></iconify-icon>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight">Owner-only access</div>
<div className="mt-2 text-sm text-zinc-400">Protected by a passphrase you set. No server required for this demo.</div>
</div>
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="h-10 w-10 rounded-2xl bg-red-500/10 ring-1 ring-red-500/20 flex items-center justify-center">
<iconify-icon className="text-red-200" icon="solar:widget-linear" width="20"></iconify-icon>
</div>
<div className="mt-4 text-lg font-semibold tracking-tight">Polished layout</div>
<div className="mt-2 text-sm text-zinc-400">Hero, CTAs, feature blocks, FAQ, and a footer that looks professional.</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16" id="faq">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-xs text-zinc-400">FAQ</div>
<h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">How do I make downloads “work”?</h3>
<p className="mt-3 text-sm text-zinc-400 max-w-2xl">
              Set a direct file URL (example: <span className="text-zinc-200">https://yourdomain.com/StealthX-Setup.exe</span>).
              The download button points to that URL and the browser downloads it.
            </p>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-2 gap-4">
<div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-200" icon="solar:cloud-download-linear" width="18"></iconify-icon>
<div className="text-sm font-medium tracking-tight">Where to host the file?</div>
</div>
<div className="mt-2 text-sm text-zinc-400">
              Use your own server, a trusted file host, or a release page that provides a direct link. Avoid “preview” pages.
            </div>
</div>
<div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-200" icon="solar:shield-warning-linear" width="18"></iconify-icon>
<div className="text-sm font-medium tracking-tight">Is the admin panel secure?</div>
</div>
<div className="mt-2 text-sm text-zinc-400">
              This demo stores settings in your browser only. For real security, use a backend with authentication.
            </div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-zinc-100">SX</span>
</div>
<div className="text-xs text-zinc-400">
<div className="text-sm font-medium tracking-tight text-zinc-200">Stealth X</div>
<div>© <span id="year"></span> All rights reserved.</div>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-200 transition" href="#download">
              Download
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500/10 hover:bg-red-500/15 text-red-200 ring-1 ring-red-500/20 px-3 py-2 text-xs font-medium transition" href="#" id="discordBtnFooter" rel="noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-linear" width="16"></iconify-icon>
              Discord
            </a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 hidden items-center justify-center p-4" id="adminModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 ring-1 ring-white/10 shadow-[0_40px_120px_-80px_rgba(244,63,94,0.7)] overflow-hidden">
<div className="p-6 sm:p-7 border-b border-white/10 bg-gradient-to-b from-white/6 to-transparent">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-xs text-zinc-400">Owner-only</div>
<div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">Admin panel</div>
<div className="mt-2 text-sm text-zinc-400">Update links and site labels. Stored locally in this browser.</div>
</div>
<button className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 transition" id="closeAdminBtn">
<iconify-icon className="text-zinc-200" icon="solar:close-circle-linear" width="22"></iconify-icon>
</button>
</div>
</div>
<div className="p-6 sm:p-7 space-y-5">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5" id="authBlock">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-200" icon="solar:shield-keyhole-linear" width="18"></iconify-icon>
<div className="text-sm font-medium tracking-tight">Sign in</div>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Set your own passphrase the first time. After that, it’s required to edit settings on this device.
            </p>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-zinc-400">Passphrase</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 ring-1 ring-white/10 focus:ring-red-500/40 focus:outline-none px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600" id="passInput" placeholder="Enter passphrase" type="password"/>
</div>
<div className="flex items-end gap-2">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-zinc-950 font-medium px-4 py-3 ring-1 ring-red-400/30 transition" id="unlockBtn">
<iconify-icon icon="solar:lock-keyhole-linear" width="18"></iconify-icon>
<span className="text-sm">Unlock</span>
</button>
</div>
</div>
<div className="mt-3 text-xs text-zinc-500" id="authHint">
              If you forget it, clear this site’s storage in your browser to reset.
            </div>
<div className="hidden mt-3 text-xs text-red-200" id="authError">Wrong passphrase.</div>
</div>

<div className="hidden space-y-4" id="settingsBlock">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-zinc-400">Download URL (direct file link)</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 ring-1 ring-white/10 focus:ring-red-500/40 focus:outline-none px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600" id="downloadUrlInput" placeholder="https://yourdomain.com/StealthX-Setup.exe" type="url"/>
<div className="mt-2 text-xs text-zinc-500">Tip: the button will download whatever this URL points to.</div>
</div>
<div>
<label className="text-xs text-zinc-400">Discord invite URL</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 ring-1 ring-white/10 focus:ring-red-500/40 focus:outline-none px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600" id="discordUrlInput" placeholder="https://discord.gg/your-invite" type="url"/>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-3">
<div>
<label className="text-xs text-zinc-400">Version text</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 ring-1 ring-white/10 focus:ring-red-500/40 focus:outline-none px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600" id="versionInput" placeholder="v1.0.0" type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400">Last update</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 ring-1 ring-white/10 focus:ring-red-500/40 focus:outline-none px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600" id="updatedInput" placeholder="Today" type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400">Build label</label>
<input className="mt-2 w-full rounded-2xl bg-black/30 ring-1 ring-white/10 focus:ring-red-500/40 focus:outline-none px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600" id="buildInput" placeholder="Stable" type="text"/>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<div className="text-xs text-zinc-500">
                Saved to this device only.
              </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-4 py-2.5 text-xs text-zinc-200 transition" id="resetBtn">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
                  Reset
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-zinc-950 font-medium px-5 py-2.5 ring-1 ring-red-400/30 transition" id="saveBtn">
<iconify-icon icon="solar:diskette-linear" width="16"></iconify-icon>
<span className="text-xs">Save changes</span>
</button>
</div>
</div>
<div className="hidden text-xs text-zinc-400" id="saveToast">Saved.</div>
</div>
</div>
<div className="border-t border-white/10 bg-black/20 p-5 sm:p-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="text-xs text-zinc-500">
              For real production security, you’ll want a backend with authentication (I can help with that for legitimate tools).
            </div>
<button className="hidden inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 hover:bg-white/8 ring-1 ring-white/10 px-4 py-2.5 text-xs text-zinc-200 transition" id="lockBtn">
<iconify-icon icon="solar:lock-linear" width="16"></iconify-icon>
              Lock
            </button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
