import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const app = {
      state: {
      role: null, // 'writer', 'manager'
      currentView: null,
      sidebarCollapsed: false,
      aiPanelOpen: false,
      mascotState: 'working', // 'working', 'think', 'ready'
      },
      elements: {
      login: document.getElementById('view-login'),
      appShell: document.getElementById('app-shell'),
      sidebar: document.getElementById('sidebar'),
      sidebarNav: document.getElementById('sidebar-nav'),
      sidebarTexts: document.getElementsByClassName('sidebar-text'),
      sidebarLogo: document.getElementById('sidebar-logo'),
      mascotImg: document.getElementById('mascot-img'),
      mascotBadge: document.getElementById('mascot-badge'),
      shadowDraftPanel: document.getElementById('shadow-draft-panel'),
      editorCanvas: document.getElementById('editor-canvas'),
      userName: document.getElementById('user-name-display'),
      userRole: document.getElementById('user-role-display'),
      suggestModal: document.getElementById('suggest-modal'),
      templateModal: document.getElementById('template-modal')
      },
      urls: {
      working: 'https://mobest.vn/wp-content/uploads/2026/05/Working.png',
      think: 'https://mobest.vn/wp-content/uploads/2026/05/Think.png',
      ready: 'https://mobest.vn/wp-content/uploads/2026/05/Think.png'
      },
      navConfig: {
      writer: [
      { id: 'writer-home', icon: 'solar:document-add-linear', label: 'New Article' },
      { id: 'writer-editor', icon: 'solar:pen-new-square-linear', label: 'Writer Editor' },
      { id: 'writer-drafts', icon: 'solar:folder-linear', label: 'Drafts' },
      { id: 'writer-published', icon: 'solar:check-circle-linear', label: 'Published' }
      ],
      manager: [
      { id: 'manager-analytics', icon: 'solar:chart-square-linear', label: 'Intelligence' },
      { id: 'planning', icon: 'solar:calendar-linear', label: 'Planning' },
      { id: 'brand-voice', icon: 'solar:tuning-square-2-linear', label: 'Brand Voice' },
      { id: 'manager-sessions', icon: 'solar:magic-stick-3-linear', label: 'AI Sessions' }
      ]
      },
      login(role) {
      this.state.role = role;
      this.elements.login.classList.add('opacity-0');
      setTimeout(() => {
      this.elements.login.style.display = 'none';
      this.elements.appShell.classList.remove('hidden');
      this.elements.appShell.classList.add('animate-fade-up');
      this.renderSidebar();
      if (role === 'writer') {
      this.elements.userName.textContent = 'Jane Doe';
      this.elements.userRole.textContent = 'Content Writer';
      this.switchView('writer-home');
      } else {
      this.elements.userName.textContent = 'Alex Chen';
      this.elements.userRole.textContent = 'Strategist';
      this.switchView('manager-analytics');
      }
      }, 400);
      },
      renderSidebar() {
      const items = this.navConfig[this.state.role];
      let html = '';
      items.forEach(item => {
      html += `
      <button onclick="app.switchView('${item.id}')" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors group" data-nav-id="${item.id}">
      <iconify-icon icon="${item.icon}" style="font-size: 20px;"></iconify-icon>
      <span class="sidebar-text font-medium group-hover:translate-x-0.5 transition-transform duration-200">${item.label}</span>
      </button>
      `;
      });
      this.elements.sidebarNav.innerHTML = html;
      },
      switchView(viewId) {
      const views = document.querySelectorAll('main > div[id^="view-"]');
      views.forEach(v => v.classList.add('hidden'));
      const targetView = document.getElementById(`view-${viewId}`);
      if (targetView) {
      targetView.classList.remove('hidden');
      } else if (viewId === 'writer-home' || viewId === 'writer-drafts' || viewId === 'writer-published' || viewId === 'writer-editor') {
      document.getElementById('view-writer-home').classList.remove('hidden');
      }
      document.querySelectorAll('#sidebar-nav button').forEach(btn => {
      btn.classList.remove('bg-white/10', 'text-white');
      btn.classList.add('text-white/60');
      if (btn.getAttribute('data-nav-id') === viewId || (viewId === 'writer-editor' && btn.getAttribute('data-nav-id') === 'writer-home')) {
      btn.classList.add('bg-white/10', 'text-white');
      btn.classList.remove('text-white/60');
      }
      });
      if (viewId === 'writer-editor') {
      this.simulateAIObservation();
      } else {
      this.state.aiPanelOpen = false;
      this.updateAIPanelUI();
      }
      },
      toggleSidebar() {
      this.state.sidebarCollapsed = !this.state.sidebarCollapsed;
      if (this.state.sidebarCollapsed) {
      this.elements.sidebar.classList.remove('w-64');
      this.elements.sidebar.classList.add('w-20');
      this.elements.sidebarLogo.classList.add('opacity-0', 'hidden');
      Array.from(this.elements.sidebarTexts).forEach(el => el.classList.add('hidden'));
      } else {
      this.elements.sidebar.classList.remove('w-20');
      this.elements.sidebar.classList.add('w-64');
      setTimeout(() => {
      this.elements.sidebarLogo.classList.remove('hidden');
      this.elements.sidebarLogo.classList.remove('opacity-0');
      Array.from(this.elements.sidebarTexts).forEach(el => el.classList.remove('hidden'));
      }, 150);
      }
      },
      toggleAIPanel() {
      this.state.aiPanelOpen = !this.state.aiPanelOpen;
      this.updateAIPanelUI();
      },
      updateAIPanelUI() {
      if (this.state.aiPanelOpen) {
      this.elements.shadowDraftPanel.classList.remove('hidden');
      this.elements.shadowDraftPanel.classList.add('flex');
      this.elements.editorCanvas.style.marginRight = '400px';
      this.elements.mascotBadge.classList.add('hidden');
      this.setMascotState('working');
      } else {
      this.elements.shadowDraftPanel.classList.add('hidden');
      this.elements.shadowDraftPanel.classList.remove('flex');
      this.elements.editorCanvas.style.marginRight = '0';
      }
      },
      setMascotState(state) {
      this.state.mascotState = state;
      this.elements.mascotImg.style.opacity = 0;
      setTimeout(() => {
      this.elements.mascotImg.src = this.urls[state];
      this.elements.mascotImg.style.opacity = 1;
      }, 200);
      if(state === 'think') {
      this.elements.mascotImg.style.animationDuration = '3s';
      } else {
      this.elements.mascotImg.style.animationDuration = '5s';
      }
      },
      simulateAIObservation() {
      this.setMascotState('working');
      this.elements.mascotBadge.classList.add('hidden');
      setTimeout(() => {
      if(!this.state.aiPanelOpen) this.setMascotState('think');
      }, 4000);
      setTimeout(() => {
      if(!this.state.aiPanelOpen) {
      this.setMascotState('ready');
      this.elements.mascotBadge.classList.remove('hidden');
      }
      }, 7000);
      },
      openSuggestModal() {
      if (!this.elements.suggestModal) this.elements.suggestModal = document.getElementById('suggest-modal');
      if (!this.elements.suggestModal) return;
      this.elements.suggestModal.classList.remove('hidden');
      this.elements.suggestModal.classList.add('flex');
      const topic = document.getElementById('suggest-topic');
      if (topic) setTimeout(() => topic.focus(), 50);
      },
      closeSuggestModal() {
      if (!this.elements.suggestModal) this.elements.suggestModal = document.getElementById('suggest-modal');
      if (!this.elements.suggestModal) return;
      this.elements.suggestModal.classList.add('hidden');
      this.elements.suggestModal.classList.remove('flex');
      },
      openTemplateModal() {
      if (!this.elements.templateModal) this.elements.templateModal = document.getElementById('template-modal');
      if (!this.elements.templateModal) return;
      this.elements.templateModal.classList.remove('hidden');
      this.elements.templateModal.classList.add('flex');
      },
      closeTemplateModal() {
      if (!this.elements.templateModal) this.elements.templateModal = document.getElementById('template-modal');
      if (!this.elements.templateModal) return;
      this.elements.templateModal.classList.add('hidden');
      this.elements.templateModal.classList.remove('flex');
      },
      startNewBlank() {
      this.switchView('writer-editor');
      this.clearEditorToPlaceholder();
      },
      clearEditorToPlaceholder() {
      const titleInput = document.querySelector('#view-writer-editor input[type="text"]');
      if (titleInput) titleInput.value = '';
      const editor = document.querySelector('#view-writer-editor [contenteditable="true"]');
      if (editor) editor.innerHTML = '';
      this.state.aiPanelOpen = false;
      this.updateAIPanelUI();
      },
      applyTemplate(templateId) {
      this.closeTemplateModal();
      this.switchView('writer-editor');
      const titleInput = document.querySelector('#view-writer-editor input[type="text"]');
      const editor = document.querySelector('#view-writer-editor [contenteditable="true"]');
      if (titleInput) titleInput.value = '';
      if (!editor) return;
      const templates = {
      'blog': '<p class="mb-6"><strong>Working title:</strong> </p><p class="mb-6"><strong>Audience:</strong> </p><p class="mb-6"><strong>Problem:</strong> </p><p class="mb-6"><strong>Key insight:</strong> </p><p class="mb-6"><strong>Framework:</strong> </p><p class="mb-6"><strong>CTA:</strong> </p>',
      'case-study': '<p class="mb-6"><strong>Client / Context:</strong> </p><p class="mb-6"><strong>Challenge:</strong> </p><p class="mb-6"><strong>Solution:</strong> </p><p class="mb-6"><strong>Implementation:</strong> </p><p class="mb-6"><strong>Outcomes (metrics):</strong> </p><p class="mb-6"><strong>Quote:</strong> </p>',
      'how-to': '<p class="mb-6"><strong>Goal:</strong> </p><p class="mb-6"><strong>Prerequisites:</strong> </p><p class="mb-6"><strong>Steps:</strong> </p><p class="mb-6"><strong>Pitfalls:</strong> </p><p class="mb-6"><strong>Checklist:</strong> </p><p class="mb-6"><strong>FAQ:</strong> </p>',
      'brief': '<p class="mb-6"><strong>Objective:</strong> </p><p class="mb-6"><strong>Target audience:</strong> </p><p class="mb-6"><strong>Positioning / Angle:</strong> </p><p class="mb-6"><strong>Key points:</strong> </p><p class="mb-6"><strong>Distribution:</strong> </p><p class="mb-6"><strong>Success metrics:</strong> </p>'
      };
      editor.innerHTML = templates[templateId] || '';
      this.state.aiPanelOpen = false;
      this.updateAIPanelUI();
      },
      generateSuggestStructure() {
      const topic = (document.getElementById('suggest-topic')?.value || '').trim();
      const tone = document.getElementById('suggest-tone')?.value || 'Expert & Calm';
      const style = document.getElementById('suggest-style')?.value || 'Strategic brief';
      const length = document.getElementById('suggest-length')?.value || 'Medium';
      const audience = (document.getElementById('suggest-audience')?.value || '').trim();
      this.closeSuggestModal();
      this.switchView('writer-editor');
      this.simulateSuggestFlow();
      const titleInput = document.querySelector('#view-writer-editor input[type="text"]');
      if (titleInput && (!titleInput.value || titleInput.value.trim() === '')) {
      titleInput.value = topic || 'Untitled Document';
      }
      const badge = this.elements.mascotBadge;
      if (badge) {
      badge.textContent = 'Structure ready';
      badge.classList.remove('hidden');
      setTimeout(() => {
      badge.textContent = '2 alignment notes';
      }, 2500);
      }
      },
      simulateAIQuery(queryText) {
      const input = document.getElementById('ai-query-input');
      const searchArea = document.getElementById('analytics-search-area');
      const resultArea = document.getElementById('analytics-result-area');
      input.value = queryText;
      setTimeout(() => {
      searchArea.classList.remove('min-h-[50vh]', 'mt-16');
      searchArea.classList.add('mt-8');
      searchArea.style.transform = 'scale(0.95)';
      searchArea.style.opacity = '0.7';
      setTimeout(() => {
      resultArea.classList.remove('hidden');
      }, 300);
      }, 500);
      },
      simulateSuggestFlow() {
      setTimeout(() => {
      this.toggleAIPanel();
      }, 800);
      }
      };
      window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
      app.closeSuggestModal();
      app.closeTemplateModal();
      }
      });
      document.addEventListener('click', (e) => {
      const modal = document.getElementById('suggest-modal');
      if (modal && !modal.classList.contains('hidden')) {
      if (e.target === modal.firstElementChild) app.closeSuggestModal();
      }
      const tModal = document.getElementById('template-modal');
      if (tModal && !tModal.classList.contains('hidden')) {
      if (e.target === tModal.firstElementChild) app.closeTemplateModal();
      }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex w-full h-full z-50 bg-[#F6F2EE] absolute inset-0 overflow-hidden" id="view-login">
<img alt="Abstract Pastel Waves" className="absolute top-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px] pointer-events-none z-0 mix-blend-multiply opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35a3a13c-d2a9-4f8c-9cd3-87421eee13c0_1600w.png"/>
<div className="hidden lg:flex w-1/2 py-8 pl-8">
<div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl">
<img alt="Scribe AI Workspace" className="w-full h-full object-cover" src="https://mobest.vn/wp-content/uploads/2026/05/AI-work.png"/>
</div>
</div>
<div className="lg:w-1/2 flex sm:p-24 w-full pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="max-w-sm w-full animate-fade-up">
<div className="mb-12">
<div className="flex items-center gap-2">
<img alt="Scribe AI Logo" className="w-8 h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d92eb89-2be7-4d10-b4f9-733c1837af30_320w.png"/>
<span className="font-['Lustria',_serif] text-2xl font-semibold tracking-tight text-[#090909]">
                SCRIBE
                <span className="text-[#A12138] text-[90%]">AI</span>
</span>
</div>
<div className="mt-8">
<h2 className="text-xl text-[#090909] tracking-tight font-['Lustria',_serif] mb-2">
                Write with quiet confidence.
              </h2>
<p className="text-[#090909]/60 text-base font-light">
                Your silent co-pilot for strategic content creation.
              </p>
</div>
</div>
<h1 className="font-['Lustria',_serif] text-3xl tracking-tight mb-8">
            Sign in to workspace
          </h1>
<div className="space-y-5">
<div className="relative">
<input className="w-full bg-transparent border-0 border-b border-[#090909]/20 px-0 py-3 text-base focus:outline-none focus:border-[#090909] focus:ring-0 transition-colors text-[#090909] placeholder-[#090909]/40" placeholder="Employee ID" type="text" value="editor@scribe.ai"/>
</div>
<div className="relative mt-2">
<input className="w-full bg-transparent border-0 border-b border-[#090909]/20 px-0 py-3 text-base focus:outline-none focus:border-[#090909] focus:ring-0 transition-colors text-[#090909] placeholder-[#090909]/40" placeholder="Password" type="password" value="••••••••"/>
</div>
<div className="pt-8 flex flex-col gap-3">
<button className="w-full bg-[#090909] text-white rounded-full py-3.5 text-sm font-medium hover:bg-[#090909]/80 transition-colors flex items-center justify-center gap-2" onclick="app.login('writer')">
                Sign in as Writer
              </button>
<button className="w-full bg-transparent text-[#090909] rounded-full py-3.5 text-sm font-medium hover:bg-[#090909]/5 transition-colors flex items-center justify-center gap-2" onclick="app.login('manager')">
                Sign in as Strategist
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden w-full h-full flex" id="app-shell">

<nav className="bg-[#090909] text-white w-64 h-full flex flex-col transition-all duration-300 border-r border-white/5 z-40" id="sidebar">
<div className="p-6 flex items-center justify-between">
<span className="transition-opacity duration-200 flex items-center gap-2" id="sidebar-logo">
<img alt="Scribe AI Logo" className="w-7 h-7 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d92eb89-2be7-4d10-b4f9-733c1837af30_320w.png"/>
<span className="font-['Lustria',_serif] text-xl font-semibold tracking-tight text-white">
              SCRIBE
              <span className="text-[#A12138] text-[90%]">AI</span>
</span>
</span>
<button className="text-white/50 hover:text-white transition-colors" onclick="app.toggleSidebar()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '20px'}}></iconify-icon>
</button>
</div>

<div className="flex-1 px-4 py-2 space-y-1 overflow-y-auto" id="sidebar-nav">

</div>

<div className="p-4 border-t border-white/10 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors group">
<iconify-icon icon="solar:settings-linear" style={{fontSize: '20px'}}></iconify-icon>
<span className="sidebar-text group-hover:translate-x-0.5 transition-transform duration-200">
              Settings
            </span>
</button>
<div className="mt-4 flex items-center gap-3 px-3 py-2 cursor-pointer" onclick="location.reload()">
<div className="w-8 h-8 rounded-full bg-[#A12138] flex items-center justify-center text-white text-xs font-medium tracking-tight">
              JD
            </div>
<div className="sidebar-text flex-1 overflow-hidden">
<div className="text-sm font-medium truncate text-white/90" id="user-name-display">
                Jane Doe
              </div>
<div className="text-xs text-white/40 truncate" id="user-role-display">
                Content Writer
              </div>
</div>
</div>
</div>
</nav>

<main className="flex-1 h-full relative overflow-hidden flex flex-col bg-[#F6F2EE]">
<img alt="Abstract Pastel Waves" className="absolute top-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px] pointer-events-none z-0 mix-blend-multiply opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35a3a13c-d2a9-4f8c-9cd3-87421eee13c0_1600w.png"/>

<div className="hidden w-full h-full overflow-y-auto p-8 lg:p-16" id="view-writer-home">
<div className="max-w-5xl mx-auto animate-fade-up">
<h1 className="font-['Lustria',_serif] text-4xl tracking-tight mb-2">
              Good morning, Jane.
            </h1>
<p className="text-[#090909]/60 text-base mb-12">
              What are we creating today?
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<button className="bg-white p-6 rounded-2xl border border-[#EFEAE4] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-left group flex flex-col gap-5" onclick="app.startNewBlank();">
<div className="w-12 h-12 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:document-add-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<h3 className="font-['Lustria',_serif] text-xl tracking-tight mb-2">
                    Blank Document
                  </h3>
<p className="text-sm text-[#090909]/60 leading-relaxed">
                    Start with a clean slate. AI stands by silently.
                  </p>
</div>
</button>

<button className="bg-white p-6 rounded-2xl border border-[#EFEAE4] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-left group flex flex-col gap-5" onclick="app.openTemplateModal();">
<div className="w-12 h-12 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:folder-with-files-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<h3 className="font-['Lustria',_serif] text-xl tracking-tight mb-2">
                    Templates
                  </h3>
<p className="text-sm text-[#090909]/60 leading-relaxed">
                    Use pre-approved structures for case studies or blogs.
                  </p>
</div>
</button>

<button className="bg-gradient-to-br from-[#090909] to-[#1a1a1a] p-6 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 text-left group flex flex-col gap-5 relative overflow-hidden" onclick="app.openSuggestModal();">
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '120px'}}></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-105 transition-transform z-10">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div className="z-10">
<h3 className="font-['Lustria',_serif] text-xl tracking-tight text-white mb-2">
                    Suggest for Me
                  </h3>
<p className="text-sm text-white/60 leading-relaxed">
                    Let AI frame an outline based on current strategy goals.
                  </p>
</div>
</button>
</div>
<div className="mt-16">
<h3 className="font-medium text-sm text-[#090909]/50 mb-6 uppercase tracking-widest">
                Recent Drafts
              </h3>
<div className="bg-white rounded-2xl border border-[#EFEAE4] overflow-hidden shadow-sm">
<div className="p-4 px-6 border-b border-[#EFEAE4] hover:bg-[#F6F2EE]/50 transition-colors cursor-pointer flex justify-between items-center group">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#090909]/40" icon="solar:document-text-linear"></iconify-icon>
<span className="text-base font-medium">
                      Q3 Enterprise Security Trends
                    </span>
</div>
<span className="text-xs text-[#090909]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edited 2 hrs ago
                  </span>
</div>
<div className="p-4 px-6 border-b border-[#EFEAE4] hover:bg-[#F6F2EE]/50 transition-colors cursor-pointer flex justify-between items-center group">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#090909]/40" icon="solar:document-text-linear"></iconify-icon>
<span className="text-base font-medium">
                      Customer Story: Acme Corp
                    </span>
</div>
<span className="text-xs text-[#090909]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edited yesterday
                  </span>
</div>
</div>
</div>
</div>
<div className="fixed bottom-8 right-8 z-40 flex items-end gap-4">
<div className="hidden bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#EFEAE4] text-xs font-medium text-[#090909]/60 mb-2 animate-fade-up" id="writer-home-mascot-badge">
              AI ready
            </div>
<button className="w-16 h-16 rounded-2xl bg-white border border-[#EFEAE4] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-center justify-center group overflow-hidden relative" onclick="app.openSuggestModal();" type="button">
<div className="absolute inset-0 bg-gradient-to-tr from-[#A12138]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="AI Assistant" className="w-10 h-10 object-contain animate-breathe animate-blink transition-all duration-500" src="https://mobest.vn/wp-content/uploads/2026/05/Working.png"/>
</button>
</div>
</div>

<div className="hidden w-full h-full flex relative" id="view-writer-editor">

<div className="flex-1 h-full overflow-y-auto transition-all duration-500 flex justify-center pb-32" id="editor-canvas">
<div className="w-full max-w-3xl px-8 py-16 lg:py-24 animate-fade-up">

<div className="flex items-center justify-between mb-16 opacity-30 hover:opacity-100 transition-opacity">
<button className="text-sm font-medium flex items-center gap-2 hover:text-[#A12138] transition-colors" onclick="app.switchView('writer-home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                  Back
                </button>
<div className="text-xs font-medium text-[#090909]/50 tracking-wide uppercase">
                  Drafting
                </div>
</div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-xl text-[#A12138]" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="font-['Lustria',_serif] text-xl tracking-tight text-[#090909]">
                  WriterEditor
                </span>
</div>
<input className="w-full font-['Lustria',_serif] text-4xl lg:text-5xl tracking-tight bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#090909]/20 text-[#090909] mb-8" placeholder="Untitled Document" type="text" value="The Future of Contextual AI in B2B"/>
<div className="w-full text-lg leading-relaxed text-[#090909]/80 font-['Lato',_sans-serif] outline-none min-h-[50vh]" contenteditable="true" data-placeholder="Start writing, or press '/' for commands...">
<p className="mb-6">
                  As organizations scale their operations, the demand for
                  precision in internal tooling has never been higher. Yet, a
                  paradox remains: the more intelligent our tools become, the
                  more intrusive they feel to the creative process.
                </p>
<p className="mb-6">
                  This friction is evident in modern writing environments. We
                  are constantly interrupted by red squiggles, popups, and
                  aggressive autocomplete suggestions that pull us out of flow.
                  The mental cost of evaluating a suggestion often outweighs the
                  time saved by it.
                </p>
<p className="mb-6">
                  What if intelligence could exist quietly? A silent co-pilot
                  that observes alignment with brand voice, flags structural
                  deviations, but waits for permission to speak.
                </p>
</div>
</div>
</div>

<div className="w-[400px] h-full bg-white border-l border-[#EFEAE4] shadow-[-4px_0_24px_rgba(0,0,0,0.02)] hidden flex-col absolute right-0 top-0 z-30 animate-slide-in" id="shadow-draft-panel">
<div className="p-6 border-b border-[#EFEAE4] flex items-center justify-between bg-white sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#F6F2EE] flex items-center justify-center text-[#A12138]">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="font-['Lustria',_serif] text-lg tracking-tight">
                  AI Insights
                </span>
</div>
<button className="text-[#090909]/40 hover:text-[#090909] transition-colors p-2 rounded-md hover:bg-[#F6F2EE]" onclick="app.toggleAIPanel()">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '20px'}}></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="bg-[#F6F2EE]/50 rounded-xl p-5 border border-[#EFEAE4] group">
<div className="flex items-start justify-between mb-3">
<span className="text-xs font-medium uppercase tracking-wider text-[#A12138]">
                    Tone Alignment
                  </span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-xs font-medium text-[#090909]/60 hover:text-[#090909]">
                      Edit
                    </button>
<button className="text-xs font-medium text-[#A12138] hover:text-[#A12138]/70">
                      Apply
                    </button>
</div>
</div>
<p className="text-sm mb-4 line-through text-[#090909]/40">
                  We are constantly interrupted by red squiggles...
                </p>
<p className="text-sm mb-4 font-medium text-[#090909]">
                  Current writing environments introduce friction through
                  intrusive corrections and assertive autocomplete, disrupting
                  deep work.
                </p>
<div className="bg-white p-3 rounded-lg text-xs text-[#090909]/60 border border-[#EFEAE4]/50 leading-relaxed">
<span className="font-medium text-[#090909]">AI Reasoning:</span>
                  The original phrasing is slightly colloquial. Aligning with
                  our established "Expert &amp; Calm" brand voice, this revision
                  elevates the professional tone while retaining the core
                  message.
                </div>
</div>

<div className="bg-[#F6F2EE]/50 rounded-xl p-5 border border-[#EFEAE4] group">
<div className="flex items-start justify-between mb-3">
<span className="text-xs font-medium uppercase tracking-wider text-[#4EB09B]">
                    Structural Suggestion
                  </span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-xs font-medium text-[#090909]/60 hover:text-[#090909]">
                      Edit
                    </button>
<button className="text-xs font-medium text-[#A12138] hover:text-[#A12138]/70">
                      Apply
                    </button>
</div>
</div>
<p className="text-sm mb-4 font-medium text-[#090909]">
                  Consider adding a real-world example here comparing standard
                  IDEs versus editorial tools to ground the abstract concept.
                </p>
<div className="bg-white p-3 rounded-lg text-xs text-[#090909]/60 border border-[#EFEAE4]/50 leading-relaxed">
<span className="font-medium text-[#090909]">
                    Strategic Insight:
                  </span>
                  Analytics show our audience engagement drops by 15% in
                  abstract sections without concrete examples.
                </div>
</div>

<div className="h-24"></div>
</div>
</div>

<div className="absolute bottom-8 right-8 z-40 flex items-end gap-4">

<div className="hidden bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#EFEAE4] text-xs font-medium text-[#090909]/60 mb-2 animate-fade-up" id="mascot-badge">
              2 alignment notes
            </div>
<button className="w-16 h-16 rounded-2xl bg-white border border-[#EFEAE4] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-center justify-center group overflow-hidden relative" onclick="app.toggleAIPanel()">
<div className="absolute inset-0 bg-gradient-to-tr from-[#A12138]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="AI Assistant" className="w-10 h-10 object-contain animate-breathe animate-blink transition-all duration-500" id="mascot-img" src="https://mobest.vn/wp-content/uploads/2026/05/Working.png"/>
</button>
</div>
</div>

<div className="hidden w-full h-full overflow-y-auto relative" id="view-manager-analytics">

<div className="m-8 rounded-2xl border border-[#EFEAE4] shadow-sm p-6 relative overflow-hidden animate-fade-up bg-white/30" id="brand-voice-banner">
<button className="absolute top-4 right-4 text-[#090909]/40 hover:text-[#090909] transition-colors" onclick="document.getElementById('brand-voice-banner').style.display='none'">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '20px'}}></iconify-icon>
</button>
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] shrink-0">
<iconify-icon icon="solar:tuning-square-2-linear" style={{fontSize: '32px'}}></iconify-icon>
</div>
<div>
<h3 className="font-['Lustria',_serif] text-xl tracking-tight mb-2">
                  Define your brand voice
                </h3>
<p className="text-sm text-[#090909]/60 max-w-2xl leading-relaxed mb-4">
                  Scribe AI learns your strategic tone through example. Upload
                  successful past campaigns, or define rules manually. The AI
                  silently guides writers to stay aligned without restrictive
                  templates.
                </p>
<button className="bg-[#090909] text-white px-5 py-2.5 rounded-lg text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm">
                  Setup Guidelines
                </button>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-12 px-8 pb-24 flex flex-col gap-10 transition-all duration-500" id="analytics-search-area">
<h1 className="font-['Lustria',_serif] text-3xl md:text-4xl tracking-tight text-center mb-10 text-[#090909]">
              What would you like to know about your content this month?
            </h1>
<div className="w-full relative shadow-sm rounded-2xl group">
<div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-[#A12138]">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<input className="w-full bg-white border border-[#EFEAE4] rounded-2xl py-7 pl-16 pr-40 text-lg focus:outline-none focus:border-[#A12138]/30 focus:ring-4 focus:ring-[#A12138]/5 transition-all text-[#090909] placeholder:text-[#090909]/30" id="ai-query-input" placeholder="e.g., Which topics drove the most engagement in Q2?" type="text"/>
<div className="absolute inset-y-0 right-4 flex items-center gap-2">
<button className="bg-[#090909] text-white px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm" onclick="app.simulateAIQuery(document.getElementById('ai-query-input').value || 'Which content drove the most pipeline?')">
                  Generate
                </button>
<button className="text-xs font-medium text-[#090909]/50 hover:text-[#090909] border border-[#EFEAE4] px-3 py-2.5 rounded-xl transition-colors flex items-center gap-2 bg-white" onclick="app.simulateAIQuery(document.getElementById('ai-query-input').value || 'Which content drove the most pipeline?')">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                  Export
                </button>
</div>
</div>
<div className="flex flex-wrap justify-center gap-3 mt-8">
<button className="border border-[#EFEAE4] px-4 py-2.5 rounded-full text-xs text-[#090909]/60 hover:text-[#090909] hover:border-[#090909]/20 transition-all bg-transparent" onclick="app.simulateAIQuery('Which content drove the most pipeline?')">
                Which content drove the most pipeline?
              </button>
<button className="border border-[#EFEAE4] px-4 py-2.5 rounded-full text-xs text-[#090909]/60 hover:text-[#090909] hover:border-[#090909]/20 transition-all bg-transparent" onclick="app.simulateAIQuery('What topics are underperforming?')">
                What topics are underperforming?
              </button>
<button className="border border-[#EFEAE4] px-4 py-2.5 rounded-full text-xs text-[#090909]/60 hover:text-[#090909] hover:border-[#090909]/20 transition-all bg-transparent" onclick="app.simulateAIQuery('Which format performs best for enterprise readers?')">
                Which format performs best for enterprise readers?
              </button>
<button className="border border-[#EFEAE4] px-4 py-2.5 rounded-full text-xs text-[#090909]/60 hover:text-[#090909] hover:border-[#090909]/20 transition-all bg-transparent" onclick="app.simulateAIQuery('What should we publish next month?')">
                What should we publish next month?
              </button>
<button className="border border-[#EFEAE4] px-4 py-2.5 rounded-full text-xs text-[#090909]/60 hover:text-[#090909] hover:border-[#090909]/20 transition-all bg-transparent" onclick="app.simulateAIQuery('Where are we drifting from brand voice?')">
                Where are we drifting from brand voice?
              </button>
</div>
<section className="bg-white rounded-2xl border border-[#EFEAE4] shadow-sm p-8">
<div className="flex items-start justify-between gap-6 mb-8">
<div>
<h2 className="font-['Lustria',_serif] text-2xl tracking-tight text-[#090909]">
                    Proactive intelligence
                  </h2>
<p className="text-sm text-[#090909]/60 mt-2 max-w-2xl leading-relaxed">
                    Quiet signals the AI is seeing across recent
                    performance—actionable, export-ready, and designed to guide
                    next-month planning.
                  </p>
</div>
<div className="shrink-0 flex items-center gap-2">
<span className="text-xs font-medium uppercase tracking-wider text-[#090909]/40">
                    Last 90 days
                  </span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-[#EFEAE4] bg-[#F6F2EE]/30 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#A12138]">
                        Engagement pattern
                      </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-2">
                        Case studies perform best on Tuesdays
                      </h3>
</div>
<button className="text-xs font-medium text-[#090909]/50 hover:text-[#090909] border border-[#EFEAE4] px-3 py-2 rounded-xl transition-colors bg-white flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                      Export
                    </button>
</div>
<div className="mt-5 flex items-end justify-between gap-6">
<div>
<div className="text-3xl font-medium tracking-tight text-[#090909]">
                        2.1×
                      </div>
<div className="text-xs text-[#090909]/50 mt-1">
                        avg. engagement vs. other weekdays
                      </div>
</div>
<div className="flex items-end gap-1.5 h-12 w-36">
<div className="w-1/5 h-[35%] rounded-md bg-[#090909]/10"></div>
<div className="w-1/5 h-[45%] rounded-md bg-[#090909]/15"></div>
<div className="w-1/5 h-[90%] rounded-md bg-[#A12138] shadow-[0_0_12px_rgba(161,33,56,0.18)]"></div>
<div className="w-1/5 h-[55%] rounded-md bg-[#090909]/15"></div>
<div className="w-1/5 h-[40%] rounded-md bg-[#090909]/10"></div>
</div>
</div>
<p className="text-sm text-[#090909]/70 leading-relaxed mt-5">
                    Readers are more likely to complete and share narrative
                    proof points early in the week, especially when the story
                    includes measurable outcomes.
                  </p>
<div className="mt-5 bg-white rounded-xl border border-[#EFEAE4]/70 p-4">
<div className="text-xs font-medium uppercase tracking-widest text-[#090909]/50">
                      Suggested action
                    </div>
<div className="flex items-center justify-between gap-4 mt-2">
<p className="text-sm font-medium text-[#090909]">
                        Schedule the next 3 enterprise case studies for Tuesdays
                        and standardize the “Outcome” section format.
                      </p>
<button className="bg-[#090909] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm" onclick="app.simulateAIQuery('Create a Tuesday case-study publishing plan for next month.')">
                        Plan
                      </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-[#EFEAE4] bg-[#F6F2EE]/30 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#4EB09B]">
                        Pipeline signal
                      </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-2">
                        Technical deep-dives drive higher demo intent
                      </h3>
</div>
<button className="text-xs font-medium text-[#090909]/50 hover:text-[#090909] border border-[#EFEAE4] px-3 py-2 rounded-xl transition-colors bg-white flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                      Export
                    </button>
</div>
<div className="mt-5 flex items-end justify-between gap-6">
<div>
<div className="text-3xl font-medium tracking-tight text-[#090909]">
                        +38%
                      </div>
<div className="text-xs text-[#090909]/50 mt-1">
                        demo-request rate vs. thought leadership
                      </div>
</div>
<div className="h-12 w-36 rounded-xl border border-[#EFEAE4] bg-white p-2 flex items-center gap-2">
<div className="flex-1 h-1.5 rounded-full bg-[#090909]/10 overflow-hidden">
<div className="h-full w-[68%] bg-[#A12138]/80 rounded-full"></div>
</div>
<div className="text-xs font-medium text-[#090909]/60">
                        68
                      </div>
</div>
</div>
<p className="text-sm text-[#090909]/70 leading-relaxed mt-5">
                    Pieces with concrete implementation details (diagrams, code
                    snippets, architectural tradeoffs) correlate with stronger
                    “next step” behavior.
                  </p>
<div className="mt-5 bg-white rounded-xl border border-[#EFEAE4]/70 p-4">
<div className="text-xs font-medium uppercase tracking-widest text-[#090909]/50">
                      Suggested action
                    </div>
<div className="flex items-center justify-between gap-4 mt-2">
<p className="text-sm font-medium text-[#090909]">
                        Shift 20–30% of next month’s calendar to deep-dives, and
                        add a reusable “Reference Architecture” block.
                      </p>
<button className="bg-[#090909] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm" onclick="app.switchView('planning')">
                        Convert
                      </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-[#EFEAE4] bg-[#F6F2EE]/30 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#A12138]">
                        Focus gap
                      </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-2">
                        Enterprise readers drop in abstract sections
                      </h3>
</div>
<button className="text-xs font-medium text-[#090909]/50 hover:text-[#090909] border border-[#EFEAE4] px-3 py-2 rounded-xl transition-colors bg-white flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                      Export
                    </button>
</div>
<div className="mt-5 flex items-end justify-between gap-6">
<div>
<div className="text-3xl font-medium tracking-tight text-[#090909]">
                        −15%
                      </div>
<div className="text-xs text-[#090909]/50 mt-1">
                        avg. retention in concept-only blocks
                      </div>
</div>
<div className="flex items-center gap-2 h-12 w-36">
<div className="w-2 h-2 rounded-full bg-[#A12138]"></div>
<div className="flex-1 h-[2px] bg-[#090909]/10 rounded-full overflow-hidden">
<div className="h-full w-[55%] bg-[#090909]/25"></div>
</div>
<div className="text-xs font-medium text-[#090909]/60">
                        55
                      </div>
</div>
</div>
<p className="text-sm text-[#090909]/70 leading-relaxed mt-5">
                    When a section lacks an example or decision framework,
                    enterprise audiences disengage sooner—even when the topic is
                    relevant.
                  </p>
<div className="mt-5 bg-white rounded-xl border border-[#EFEAE4]/70 p-4">
<div className="text-xs font-medium uppercase tracking-widest text-[#090909]/50">
                      Suggested action
                    </div>
<div className="flex items-center justify-between gap-4 mt-2">
<p className="text-sm font-medium text-[#090909]">
                        Adopt a default “Example + Tradeoffs + Recommendation”
                        pattern for strategic sections.
                      </p>
<button className="bg-[#090909] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm" onclick="app.simulateAIQuery('Create a writing guideline to reduce abstraction and improve retention.')">
                        Draft
                      </button>
</div>
</div>
</div>
</div>
<div className="mt-8 rounded-2xl border border-[#EFEAE4] bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-[#F6F2EE] flex items-center justify-center text-[#A12138] shrink-0">
<iconify-icon icon="solar:lightbulb-bolt-linear" style={{fontSize: '20px'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#090909]">
                      If data is thin
                    </div>
<div className="text-sm text-[#090909]/60 leading-relaxed">
                      Patterns are beginning to emerge from your team’s content.
                      Keep publishing consistently and the AI will increase
                      confidence and specificity in these insights.
                    </div>
</div>
</div>
<button className="text-xs font-medium text-[#090909] border border-[#EFEAE4] bg-white px-4 py-2.5 rounded-xl hover:border-[#090909]/30 transition-colors shadow-sm whitespace-nowrap" onclick="app.simulateAIQuery('What should we measure to improve insight confidence?')">
                  Get coaching
                </button>
</div>
</section>
</div>

<div className="hidden max-w-5xl mx-auto mt-10 px-8 pb-24" id="analytics-result-area">
<div className="bg-white rounded-2xl border border-[#EFEAE4] shadow-sm p-8 animate-fade-up">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-6 border-b border-[#EFEAE4]/50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#F6F2EE] flex items-center justify-center text-[#A12138]">
<iconify-icon icon="solar:chart-square-linear" style={{fontSize: '20px'}}></iconify-icon>
</div>
<div>
<h2 className="font-['Lustria',_serif] text-xl tracking-tight">
                      AI-generated intelligence brief
                    </h2>
<p className="text-xs text-[#090909]/50 mt-1">
                      Synthesized from publishing data, engagement signals, and
                      CRM outcomes. Updated just now.
                    </p>
</div>
</div>
<button className="text-xs font-medium text-[#090909]/50 hover:text-[#090909] border border-[#EFEAE4] px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                  Export brief
                </button>
</div>

<div className="mb-10 rounded-2xl border border-[#EFEAE4] bg-[#F6F2EE]/25 p-8">
<div className="flex items-start justify-between gap-6 mb-6">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#090909]/50">
                      Minimal chart
                    </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-2">
                      Pipeline contribution by content type
                    </h3>
<p className="text-sm text-[#090909]/60 mt-2">
                      Editorial, high-trust view—designed for decision-making,
                      not monitoring.
                    </p>
</div>
<div className="text-xs font-medium text-[#090909]/40 uppercase tracking-wider">
                    Last 90 days
                  </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-end">
<div className="lg:col-span-3 bg-white rounded-2xl border border-[#EFEAE4] p-6">
<div className="flex items-end justify-between gap-4 h-52">
<div className="flex flex-col items-center gap-3 w-1/4">
<div className="w-full rounded-xl bg-[#090909]/10 h-[42%]"></div>
<div className="text-xs text-[#090909]/50">Blog</div>
</div>
<div className="flex flex-col items-center gap-3 w-1/4">
<div className="w-full rounded-xl bg-[#090909]/15 h-[55%]"></div>
<div className="text-xs text-[#090909]/50">Guides</div>
</div>
<div className="flex flex-col items-center gap-3 w-1/4">
<div className="w-full rounded-xl bg-[#A12138] h-[88%] shadow-[0_0_16px_rgba(161,33,56,0.18)]"></div>
<div className="text-xs font-medium">Case Studies</div>
</div>
<div className="flex flex-col items-center gap-3 w-1/4">
<div className="w-full rounded-xl bg-[#090909]/10 h-[30%]"></div>
<div className="text-xs text-[#090909]/50">Webinars</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs text-[#090909]/50">
                        Higher bars indicate stronger pipeline association.
                      </div>
<div className="text-xs font-medium text-[#090909]/60">
                        Confidence: High
                      </div>
</div>
</div>
<div className="lg:col-span-2 rounded-2xl border border-[#EFEAE4] bg-white p-6">
<div className="text-xs font-medium uppercase tracking-wider text-[#A12138]">
                      AI explanation
                    </div>
<p className="text-sm text-[#090909]/70 leading-relaxed mt-3">
                      Case studies show the strongest pipeline contribution
                      because they concentrate proof (outcomes, constraints, and
                      decisions). Guides perform well when they include
                      implementation steps, while webinars tend to convert later
                      in the cycle.
                    </p>
<div className="mt-5 rounded-xl border border-[#EFEAE4] bg-[#F6F2EE]/30 p-4">
<div className="text-xs font-medium uppercase tracking-widest text-[#090909]/50">
                        Suggested next action
                      </div>
<div className="mt-2 flex items-center justify-between gap-4">
<p className="text-sm font-medium text-[#090909]">
                          Publish 2 case studies + 1 technical guide next month,
                          then reuse diagrams across supporting blogs.
                        </p>
<button className="bg-[#090909] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm whitespace-nowrap" onclick="app.switchView('planning')">
                          Draft plan
                        </button>
</div>
</div>
<div className="mt-5">
<button className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-[#EFEAE4] text-xs font-medium text-[#090909]/60 hover:text-[#090909] hover:border-[#090909]/20 transition-colors bg-white" onclick="document.getElementById('ai-reasoning-depth').classList.toggle('hidden')">
<span>Reasoning depth</span>
<span className="text-[#090909]/40">Toggle</span>
</button>
<div className="hidden mt-3 rounded-xl border border-[#EFEAE4] bg-white p-4" id="ai-reasoning-depth">
<div className="text-xs font-medium text-[#090909]">
                          How this was derived
                        </div>
<ul className="mt-2 space-y-2 text-xs text-[#090909]/60 leading-relaxed">
<li>
                            Weighted correlation between content type and
                            downstream demo requests, normalized by publish
                            volume.
                          </li>
<li>
                            Adjusted for outliers by trimming top/bottom 5%
                            sessions and excluding anomalous campaign spikes.
                          </li>
<li>
                            Aligned to your brand voice constraints ("Expert
                            &amp; Calm") to avoid chasing click-driven formats.
                          </li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<h3 className="font-medium text-sm text-[#090909] uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-[#A12138]" icon="solar:lightbulb-bolt-linear"></iconify-icon>
                  Strategic Intelligence
                </h3>
<p className="text-base text-[#090909]/80 leading-relaxed font-light">
                  Technical deep-dives published in March correlated with a
                  <strong className="font-medium text-[#090909]">
                    45% higher conversion rate
                  </strong>
                  to demo requests compared to general thought leadership. The
                  AI noted that articles utilizing concrete code examples and
                  specific architectural diagrams held reader retention 2x
                  longer.
                </p>
<div className="bg-[#F6F2EE] p-5 rounded-xl border border-[#EFEAE4]">
<h4 className="text-xs font-medium text-[#090909]/50 uppercase tracking-widest mb-3">
                    Suggested Action
                  </h4>
<div className="flex items-center justify-between">
<p className="text-sm font-medium">
                      Shift 30% of Q2 thought leadership budget toward
                      engineering-focused case studies.
                    </p>
<button className="bg-[#090909] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#090909]/90 transition-colors shadow-sm" onclick="app.switchView('planning')">
                      Draft Q2 Briefs
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden w-full h-full overflow-y-auto p-8 lg:p-16" id="view-planning">
<div className="max-w-5xl mx-auto animate-fade-up">
<div className="flex items-center justify-between mb-12">
<div>
<h1 className="font-['Lustria',_serif] text-4xl tracking-tight mb-2">
                  Editorial Planning
                </h1>
<p className="text-[#090909]/60 text-base">
                  Aligning production with strategic intelligence.
                </p>
</div>
<button className="bg-[#090909] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#090909]/90 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:add-square-linear"></iconify-icon>
                New Brief
              </button>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-2xl border border-[#EFEAE4] shadow-sm flex items-center justify-between group cursor-pointer hover:border-[#090909]/20 transition-all">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909]/40">
<span className="text-xs font-medium uppercase">Oct 12</span>
</div>
<div>
<h3 className="text-base font-medium mb-1">
                      Integrating AI into Legacy Systems
                    </h3>
<div className="flex gap-3 text-xs text-[#090909]/50">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:user-linear"></iconify-icon>
                        Sarah J.
                      </span>
<span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
                        Drafting
                      </span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-[#F6F2EE] to-white p-5 rounded-2xl border border-[#A12138]/20 shadow-sm flex items-start lg:items-center justify-between group relative overflow-hidden flex-col lg:flex-row gap-4">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A12138]"></div>
<div className="flex items-start lg:items-center gap-6 pl-2">
<div className="w-12 h-12 rounded-xl bg-white border border-[#A12138]/20 flex items-center justify-center text-[#A12138] shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-[#A12138] uppercase tracking-widest mb-1 flex items-center gap-2">
                      Proactive Suggestion
                    </div>
<h3 className="text-base font-medium mb-1">
                      Engineering Case Study: Microservices Architecture
                    </h3>
<p className="text-xs text-[#090909]/60 max-w-xl">
                      AI identified high pipeline correlation for this topic
                      last month. Competitor volume is currently low.
                    </p>
</div>
</div>
<button className="whitespace-nowrap text-xs font-medium text-[#090909] border border-[#EFEAE4] bg-white px-4 py-2 rounded-lg hover:border-[#090909] transition-colors shadow-sm ml-2 lg:ml-0">
                  Convert to Brief
                </button>
</div>

<div className="bg-white p-12 rounded-2xl border border-[#EFEAE4] border-dashed shadow-sm flex flex-col items-center justify-center text-center mt-8">
<div className="w-16 h-16 mb-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="AI Thinking" className="w-full h-full object-contain" src="https://mobest.vn/wp-content/uploads/2026/05/Think.png"/>
</div>
<h3 className="text-base font-medium mb-2">
                  Patterns are beginning to emerge.
                </h3>
<p className="text-sm text-[#090909]/50 max-w-sm">
                  Scribe AI is learning from your recent publications.
                  Meaningful strategic gaps will appear here once more data is
                  processed.
                </p>
</div>
</div>
</div>
</div>
</main>
</div>


<div className="hidden fixed inset-0 z-[60] items-center justify-center" id="suggest-modal">
<div className="absolute inset-0 bg-[#090909]/40"></div>
<div className="relative w-[92vw] max-w-xl bg-white rounded-2xl border border-[#EFEAE4] shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6 sm:p-8 animate-fade-up">
<div className="flex items-start justify-between gap-6 mb-6">
<div>
<h2 className="font-['Lustria',_serif] text-2xl tracking-tight text-[#090909]">
              Suggest for me
            </h2>
<p className="text-sm text-[#090909]/60 mt-1">
              Provide a few inputs and Scribe will generate a clean outline.
            </p>
</div>
<button className="text-[#090909]/40 hover:text-[#090909] transition-colors p-2 rounded-md hover:bg-[#F6F2EE]" onclick="app.closeSuggestModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '20px'}}></iconify-icon>
</button>
</div>
<div className="space-y-6">
<div>
<label className="text-xs font-semibold uppercase tracking-widest text-[#090909]/60 flex items-center gap-2 mb-2" htmlFor="suggest-topic">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
              What should we write about?
            </label>
<textarea className="w-full bg-[#F6F2EE]/50 border border-[#EFEAE4] rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-[#A12138]/30 focus:ring-4 focus:ring-[#A12138]/5 transition-all text-[#090909] placeholder:text-[#090909]/30 resize-none shadow-inner" id="suggest-topic" placeholder="Describe your topic, paste a brief, or enter a few keywords..." rows="3"></textarea>
</div>
<div className="bg-[#F6F2EE]/20 border border-[#EFEAE4] rounded-2xl p-5 space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="text-xs font-medium text-[#090909]/80 mb-2 block">
                  Brand Tone
                </label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-[#EFEAE4] rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#090909]/30 focus:ring-4 focus:ring-[#090909]/5 transition-all text-[#090909] cursor-pointer shadow-sm" id="suggest-tone">
<option selected="" value="Expert &amp; Calm">
                      Expert &amp; Calm
                    </option>
<option value="Confident">Confident</option>
<option value="Direct">Direct</option>
<option value="Warm">Warm</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#090909]/40">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="text-xs font-medium text-[#090909]/80 mb-2 block">
                  Content Style
                </label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-[#EFEAE4] rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#090909]/30 focus:ring-4 focus:ring-[#090909]/5 transition-all text-[#090909] cursor-pointer shadow-sm" id="suggest-style">
<option selected="" value="Strategic brief">
                      Strategic brief
                    </option>
<option value="Thought leadership">
                      Thought leadership
                    </option>
<option value="How-to">How-to</option>
<option value="Case study">Case study</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#090909]/40">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="text-xs font-medium text-[#090909]/80 mb-2 block">
                  Length Target
                </label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-[#EFEAE4] rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#090909]/30 focus:ring-4 focus:ring-[#090909]/5 transition-all text-[#090909] cursor-pointer shadow-sm" id="suggest-length">
<option value="Short">Short (600–900)</option>
<option selected="" value="Medium">
                      Medium (1,000–1,500)
                    </option>
<option value="Long">Long (1,800–2,500)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#090909]/40">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="text-xs font-medium text-[#090909]/80 mb-2 block">
                  Target Audience
                </label>
<input className="w-full bg-white border border-[#EFEAE4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#090909]/30 focus:ring-4 focus:ring-[#090909]/5 transition-all text-[#090909] placeholder:text-[#090909]/30 shadow-sm" id="suggest-audience" placeholder="e.g., Enterprise IT Leaders" type="text"/>
</div>
</div>
</div>
<div className="pt-4 flex items-center justify-end gap-3">
<button className="text-sm font-medium text-[#090909]/60 hover:text-[#090909] px-4 py-2.5 rounded-xl transition-colors" onclick="app.closeSuggestModal()" type="button">
              Cancel
            </button>
<button className="bg-[#090909] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#090909]/90 transition-all shadow-sm flex items-center gap-2" onclick="app.generateSuggestStructure()" type="button">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
              Generate Outline
            </button>
</div>
</div>
</div>
</div>
<div className="hidden fixed inset-0 z-[70] items-center justify-center" id="template-modal">
<div className="absolute inset-0 bg-[#090909]/40" onclick="app.closeTemplateModal()"></div>
<div className="relative w-[92vw] max-w-2xl bg-white rounded-2xl border border-[#EFEAE4] shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6 sm:p-8 animate-fade-up">
<div className="flex items-start justify-between gap-6 mb-6">
<div>
<h2 className="font-['Lustria',_serif] text-2xl tracking-tight text-[#090909]">
              Choose a template
            </h2>
<p className="text-sm text-[#090909]/60 mt-1">
              Pick a starting structure. You can edit everything later.
            </p>
</div>
<button className="text-[#090909]/40 hover:text-[#090909] transition-colors p-2 rounded-md hover:bg-[#F6F2EE]" onclick="app.closeTemplateModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '20px'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<button className="bg-white p-5 rounded-2xl border border-[#EFEAE4] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-left group" onclick="app.applyTemplate('blog')" type="button">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#090909]/40">
                  Template
                </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-1">
                  Blog Post
                </h3>
<p className="text-sm text-[#090909]/60 leading-relaxed mt-2">
                  Problem → Insight → Framework → CTA
                </p>
</div>
<div className="w-10 h-10 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] shrink-0">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '22px'}}></iconify-icon>
</div>
</div>
</button>
<button className="bg-white p-5 rounded-2xl border border-[#EFEAE4] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-left group" onclick="app.applyTemplate('case-study')" type="button">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#090909]/40">
                  Template
                </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-1">
                  Case Study
                </h3>
<p className="text-sm text-[#090909]/60 leading-relaxed mt-2">
                  Context → Challenge → Solution → Outcomes
                </p>
</div>
<div className="w-10 h-10 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] shrink-0">
<iconify-icon icon="solar:case-minimalistic-linear" style={{fontSize: '22px'}}></iconify-icon>
</div>
</div>
</button>
<button className="bg-white p-5 rounded-2xl border border-[#EFEAE4] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-left group" onclick="app.applyTemplate('how-to')" type="button">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#090909]/40">
                  Template
                </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-1">
                  How-to Guide
                </h3>
<p className="text-sm text-[#090909]/60 leading-relaxed mt-2">
                  Steps → Pitfalls → Checklist → FAQ
                </p>
</div>
<div className="w-10 h-10 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] shrink-0">
<iconify-icon icon="solar:book-2-linear" style={{fontSize: '22px'}}></iconify-icon>
</div>
</div>
</button>
<button className="bg-white p-5 rounded-2xl border border-[#EFEAE4] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-left group" onclick="app.applyTemplate('brief')" type="button">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium uppercase tracking-wider text-[#090909]/40">
                  Template
                </div>
<h3 className="font-['Lustria',_serif] text-lg tracking-tight mt-1">
                  Strategic Brief
                </h3>
<p className="text-sm text-[#090909]/60 leading-relaxed mt-2">
                  Objective → Audience → Angle → Distribution
                </p>
</div>
<div className="w-10 h-10 rounded-xl bg-[#F6F2EE] flex items-center justify-center text-[#090909] shrink-0">
<iconify-icon icon="solar:clipboard-list-linear" style={{fontSize: '22px'}}></iconify-icon>
</div>
</div>
</button>
</div>
<div className="pt-6 flex items-center justify-end gap-3">
<button className="text-sm font-medium text-[#090909]/60 hover:text-[#090909] px-4 py-2.5 rounded-xl transition-colors" onclick="app.closeTemplateModal()" type="button">
            Cancel
          </button>
</div>
</div>
</div>

    </>
  );
}
