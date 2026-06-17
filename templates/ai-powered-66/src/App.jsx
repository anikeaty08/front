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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    


      const openBtn = document.getElementById('openTokenExtractor');
      const modal = document.getElementById('tokenExtractorModal');
      const overlay = document.getElementById('modalOverlay'); // NEW
      const closeBtn = document.getElementById('closeTokenExtractor');
      const extractBtn = document.getElementById('extractBtn');
      const copyBtn = document.getElementById('copyBtn');
      const outputArea = document.getElementById('outputArea');
      const statusBadge = document.getElementById('statusBadge');
      const urlInput = document.getElementById('figmaFileUrl');
      const patInput = document.getElementById('figmaPAT');

      const setStatus = (text, color = 'text-zinc-500') => {
        statusBadge.textContent = text;
        statusBadge.className = 'text-xs ' + color;
      };

      const parseFileKey = (url) => {
        try {
          const u = new URL(url);
          // supports /file/{key}/... and /design/{key}/...
          const parts = u.pathname.split('/').filter(Boolean);
          const idx = parts.findIndex(p => p === 'file' || p === 'design');
          if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
          return null;
        } catch (e) {
          return null;
        }
      };

      const rgbaToHex = ({ r, g, b, a = 1 }) => {
        const to255 = (v) => Math.round(Math.min(1, Math.max(0, v)) * 255);
        const rh = to255(r).toString(16).padStart(2, '0');
        const gh = to255(g).toString(16).padStart(2, '0');
        const bh = to255(b).toString(16).padStart(2, '0');
        if (a === 1 || a === undefined) return '#' + rh + gh + bh;
        const ah = to255(a).toString(16).padStart(2, '0');
        return '#' + rh + gh + bh + ah;
        };

      const pickFirstModeValue = (variable) => {
        if (!variable || !variable.valuesByMode) return null;
        const firstModeId = Object.keys(variable.valuesByMode)[0];
        return variable.valuesByMode[firstModeId];
      };

      const normalizeVarName = (name) => {
        return name
          .trim()
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      };

      const fetchJSON = async (endpoint, token) => {
        const res = await fetch(endpoint, {
          headers: {
            'X-Figma-Token': token,
          },
        });
        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error('HTTP ' + res.status + ' — ' + text);
        }
        return res.json();
      };

      const extractTokens = async (fileKey, token) => {
        const tokens = {
          meta: { fileKey, extractedAt: new Date().toISOString() },
          colors: {},
          typography: [],
          effects: [],
          raw: {}
        };

        // Variables (including colors)
        try {
          const vars = await fetchJSON(`https://api.figma.com/v1/files/${fileKey}/variables`, token);
          tokens.raw.variables = vars;
          if (vars && vars.variables) {
            for (const v of vars.variables) {
              if (v.resolvedType === 'COLOR') {
                const val = pickFirstModeValue(v);
                if (val && val.r !== undefined) {
                  tokens.colors[normalizeVarName(v.name)] = rgbaToHex(val);
                } else if (val && val.type === 'VARIABLE_ALIAS') {
                  tokens.colors[normalizeVarName(v.name)] = `{${val.id}}`;
                }
              }
            }
          }
        } catch (e) {
          // ignore but record
          tokens.raw.variablesError = String(e.message || e);
        }

        // Styles (text/effects)
        try {
          const styles = await fetchJSON(`https://api.figma.com/v1/files/${fileKey}/styles`, token);
          tokens.raw.styles = styles;
          if (styles && styles.meta && styles.meta.styles) {
            const all = styles.meta.styles;
            for (const s of all) {
              if (s.style_type === 'TEXT') {
                tokens.typography.push({
                  name: s.name,
                  id: s.node_id || s.key || s.node_id,
                  description: s.description || ''
                });
              }
              if (s.style_type === 'EFFECT') {
                tokens.effects.push({
                  name: s.name,
                  id: s.node_id || s.key || s.node_id,
                  description: s.description || ''
                });
              }
            }
          }
        } catch (e) {
          tokens.raw.stylesError = String(e.message || e);
        }

        return tokens;
      };

      const pretty = (obj) => JSON.stringify(obj, null, 2);

      if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => {
          modal.classList.remove('hidden');
          setStatus('Idle', 'text-zinc-500');
          outputArea.value = '';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
        closeBtn.addEventListener('click', () => {
          modal.classList.add('hidden');
        });
        // FIX: allow clicking the backdrop to close
        if (overlay) {
          overlay.addEventListener('click', () => modal.classList.add('hidden'));
        }
      }

      if (extractBtn) {
        extractBtn.addEventListener('click', async () => {
          const url = urlInput.value.trim();
          const token = patInput.value.trim();
          const key = parseFileKey(url);
          if (!key) {
            setStatus('Invalid file URL', 'text-red-400');
            return;
          }
          if (!token) {
            setStatus('Token required', 'text-red-400');
            return;
          }
          setStatus('Fetching…', 'text-blue-400');
          outputArea.value = '';
          extractBtn.disabled = true;

          try {
            const data = await extractTokens(key, token);
            setStatus('Done', 'text-emerald-400');
            outputArea.value = pretty(data);
          } catch (e) {
            setStatus('Failed', 'text-red-400');
            outputArea.value = pretty({ error: String(e.message || e) });
          } finally {
            extractBtn.disabled = false;
          }
        });
      }

      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(outputArea.value || '');
            setStatus('Copied', 'text-emerald-400');
            setTimeout(() => setStatus('Idle', 'text-zinc-500'), 1200);
          } catch {
            setStatus('Copy failed', 'text-red-400');
          }
        });
      }
    
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
      

<header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4">
<div className="h-[73px] flex items-center justify-between">

<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center">
<i className="w-6 h-6 text-blue-500" data-lucide="shapes"></i>
</span>
<span className="text-zinc-200 text-[20px] font-semibold -tracking-[0.015em]">Borderlane</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Features</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors" href="#">About Us</a>
</nav>

<div className="flex items-center gap-3">
<button aria-label="Notifications" className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5 ring-1 ring-inset ring-white/5 transition-all">
<i className="w-[18px] h-[18px] text-zinc-400" data-lucide="bell"></i>
</button>
<button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-full px-3 ring-1 ring-inset ring-white/10 hover:bg-white/5 transition-colors" id="openTokenExtractor">
<i className="w-[18px] h-[18px] text-zinc-300" data-lucide="flask-conical"></i>
<span className="text-sm font-medium text-zinc-300">Tokens</span>
</button>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-200 ring-1 ring-inset ring-white/10 transition-all" href="#">
              Sign up
            </a>
</div>
</div>
</div>
</header>
<main>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 pt-20 pb-12 sm:pt-24">
<div className="max-w-4xl mx-auto text-center space-y-6">

<h1 className="text-[44px] leading-[1.05] sm:text-[64px] lg:text-[72px] font-extrabold -tracking-[0.04em]">
              Simplify Your Immigration. Get AI-Powered Guidance.
            </h1>
<p className="text-[17px] sm:text-[18px] leading-7 text-zinc-400">
              Chat with Ben, our AI assistant, to discover your visa eligibility and start building your case with confidence.
            </p>
<div className="mt-4 flex items-center justify-center gap-4">
<a className="inline-flex h-12 px-6 items-center justify-center rounded-full bg-white text-zinc-900 text-[16px] font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-zinc-200 transition-colors" href="#">
                Check Eligibility Now
              </a>
<a className="inline-flex items-center h-12 px-3 text-[16px] font-medium text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
                Learn more
                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">

<div className="rounded-xl border border-white/10 p-5">
<h3 className="text-[16px] font-semibold text-zinc-100">Am I eligible for an EB-1A visa?</h3>
<p className="mt-2 text-[14px] leading-5 text-zinc-400">based on my resume and publications</p>
</div>

<div className="rounded-xl border border-white/10 p-5">
<h3 className="text-[16px] font-semibold text-zinc-100">Draft a recommendation letter</h3>
<p className="mt-2 text-[14px] leading-5 text-zinc-400">from my former professor for my application</p>
</div>

<div className="rounded-xl border border-white/10 p-5">
<h3 className="text-[16px] font-semibold text-zinc-100">Explain the RFE process</h3>
<p className="mt-2 text-[14px] leading-5 text-zinc-400">in simple terms and suggest next steps</p>
</div>

<div className="rounded-xl border border-white/10 p-5">
<h3 className="text-[16px] font-semibold text-zinc-100">Create a checklist for H-1B</h3>
<p className="mt-2 text-[14px] leading-5 text-zinc-400">to ensure I have all required documents</p>
</div>
</div>
</div>
</section>

<section className="relative bg-black">
<div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-[36px] sm:text-[44px] font-semibold -tracking-[0.03em]">Start your conversation with Ben</h2>
<p className="mt-4 text-[18px] text-zinc-400">
              Ask anything, upload documents, and get instant clarity on your immigration path.
            </p>
</div>

<div className="mt-10">
<div className="mx-auto max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/50">

<div className="p-6 sm:p-8">
<div className="flex items-start gap-4">
<div className="h-9 w-9 rounded-full bg-blue-500 inline-flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<div className="text-[14px] font-semibold text-zinc-300">Ben</div>
<div className="mt-2 rounded-xl bg-zinc-800 p-5">
<p className="text-[16px] text-zinc-300">
                        Hello! I'm Ben, your AI immigration assistant. I can help you determine your visa eligibility.
                      </p>
<p className="mt-1 text-[16px] text-zinc-300">
                        To get started, please tell me a bit about your professional background, or upload your resume.
                      </p>
</div>
</div>
</div>
</div>

<div className="h-px bg-zinc-800"></div>

<div className="p-4 sm:p-5">
<div className="rounded-xl bg-zinc-900 border border-zinc-800">
<div className="p-4 sm:p-5">
<div className="min-h-[96px]">
<p className="text-[16px] text-zinc-500">
                        Tell me about your achievements, or ask a question...
                      </p>
</div>
<div className="mt-3 flex items-center justify-end gap-2">
<button aria-label="Attach file" className="h-9 w-9 rounded-full hover:bg-white/5 ring-1 ring-inset ring-white/5 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="paperclip"></i>
</button>
<button aria-label="Record audio" className="h-9 w-9 rounded-full hover:bg-white/5 ring-1 ring-inset ring-white/5 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="mic"></i>
</button>
<button aria-label="Send" className="ml-1 h-10 w-10 rounded-full bg-white hover:bg-zinc-200 transition-colors flex items-center justify-center">
<i className="w-4 h-4 text-zinc-900" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="relative bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-[36px] sm:text-[44px] font-semibold -tracking-[0.03em]">Your Immigration Co-Pilot</h2>
<p className="mt-4 text-[18px] text-zinc-400">
              From eligibility checks to final submission, Borderlane streamlines every step of your application.
            </p>
</div>

<div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-[28px] sm:text-[30px] font-semibold -tracking-[0.02em]">Track Your Progress Intuitively</h3>
<p className="mt-4 text-[16px] leading-6 text-zinc-400">
                Our guided dashboard gives you a clear overview of your application status, pending tasks, and checklists.
                Never miss a deadline or a required document again.
              </p>
<a className="mt-6 inline-flex items-center text-[16px] font-medium text-blue-500 hover:text-blue-400 transition-colors" href="#">
                Learn more
                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="order-1 lg:order-2">
<div className="rounded-2xl bg-zinc-900 border border-white/10 p-2 shadow-2xl shadow-black/50">
<img alt="Application dashboard mockup" className="rounded-xl w-full h-[300px] sm:h-[360px] object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
<div className="lg:order-1">
<div className="rounded-2xl bg-zinc-900 border border-white/10 p-2 shadow-2xl shadow-black/50">
<img alt="Petition builder mockup" className="rounded-xl w-full h-[300px] sm:h-[360px] object-cover" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:order-2">
<h3 className="text-[28px] sm:text-[30px] font-semibold -tracking-[0.02em]">AI-Powered Petition Building</h3>
<p className="mt-4 text-[16px] leading-6 text-zinc-400">
                Let Ben draft your petition letters and evidence captions based on the information you provide. Edit, refine,
                and collaborate with your attorney, all in one place.
              </p>
<a className="mt-6 inline-flex items-center text-[16px] font-medium text-blue-500 hover:text-blue-400 transition-colors" href="#">
                Learn more
                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative bg-black">
<div className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
<div className="text-center space-y-6">
<h2 className="text-[36px] sm:text-[44px] font-semibold -tracking-[0.03em]">
              Ready to take control of your immigration process?
            </h2>
<p className="text-[18px] text-zinc-400">
              Join thousands of professionals who are building their future in the U.S. with Borderlane.
            </p>
<div>
<a className="inline-flex h-[52px] px-8 items-center justify-center rounded-full bg-white text-zinc-900 text-[18px] font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-zinc-200 transition-colors" href="#">
                Start Your Application for Free
              </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-900">
<div className="max-w-7xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center">
<i className="w-6 h-6 text-blue-500" data-lucide="shapes"></i>
</span>
<span className="text-zinc-200 text-[20px] font-semibold -tracking-[0.015em]">Borderlane</span>
</div>
<p className="mt-4 text-sm text-zinc-400">The future of immigration is here.</p>
</div>

<div>
<h4 className="text-sm font-semibold text-white">Product</h4>
<ul className="mt-3 space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Security</a></li>
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">For Attorneys</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white">Visa Types</h4>
<ul className="mt-3 space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">EB-1A</a></li>
<li>
<span className="text-sm">
<span className="text-zinc-400">H-1B</span>
<span className="text-zinc-500"> Soon</span>
</span>
</li>
<li>
<span className="text-sm">
<span className="text-zinc-400">O-1</span>
<span className="text-zinc-500"> Soon</span>
</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white">Company</h4>
<ul className="mt-3 space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="tokenExtractorModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="modalOverlay"></div>
<div className="relative mx-auto max-w-2xl px-4 sm:px-6">
<div className="mt-24 rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-400" data-lucide="flask-conical"></i>
<h3 className="text-[18px] font-semibold text-zinc-100 -tracking-[0.01em]">Design Token Extractor</h3>
</div>
<button aria-label="Close" className="h-9 w-9 rounded-full hover:bg-white/5 ring-1 ring-inset ring-white/5 flex items-center justify-center" id="closeTokenExtractor">
<i className="w-4 h-4 text-zinc-400" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="figmaFileUrl">Figma file URL</label>
<input className="w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50" id="figmaFileUrl" placeholder="https://www.figma.com/file/KEY/Your-File" type="url" value="https://www.figma.com/design/reF1drLOkAT80KFLow2REA/Untitled?node-id=1-4&amp;m=dev"/>
<p className="text-xs text-zinc-500">We’ll parse the file key from this URL.</p>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="figmaPAT">Figma Personal Access Token</label>
<input className="w-full rounded-lg bg-zinc-900 border border-white/10 px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50" id="figmaPAT" placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" type="password"/>
<p className="text-xs text-zinc-500">Required to access the API. You can revoke it anytime in your Figma settings.</p>
</div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-zinc-500">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
<span>Runs client-side. Nothing is uploaded to our servers.</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors" id="extractBtn">
<i className="w-4 h-4" data-lucide="download"></i>
                  Extract
                </button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-full ring-1 ring-inset ring-white/10 hover:bg-white/5 text-sm font-medium text-zinc-200" id="copyBtn">
<i className="w-4 h-4" data-lucide="clipboard"></i>
                  Copy
                </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-950">
<div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="brackets"></i>
<span className="text-xs font-medium text-zinc-300">Output (JSON)</span>
</div>
<div className="text-xs text-zinc-500" id="statusBadge">Idle</div>
</div>
<div className="p-3">
<textarea className="w-full h-[240px] rounded-lg bg-zinc-900 border border-white/5 px-3 py-2 text-[12px] leading-5 text-zinc-200 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50" id="outputArea" placeholder="{ }"></textarea>
</div>
</div>
<div className="pt-1">
<details className="group">
<summary className="cursor-pointer list-none select-none flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-400" data-lucide="info"></i>
                  What gets extracted?
                </summary>
<div className="mt-2 text-sm text-zinc-400">
                  Attempts to pull Variables (colors) and Styles (text/effects) from the file. Some accounts or files may restrict access or block cross‑origin requests.
                </div>
</details>
</div>
</div>
</div>
</div>
</div>






    </>
  );
}
