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
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- MOCK STATE ---
      let currentUser = null;
      let currentStep = 1;
      let mockTributes = [];

      // --- UTILS ---
      function showToast(msg, type = 'info') {
          const toast = document.getElementById('toast');
          document.getElementById('toast-msg').textContent = msg;

          const icon = document.getElementById('toast-icon');
          if (type === 'success') icon.setAttribute('icon', 'lucide:check-circle');
          else if (type === 'error') icon.setAttribute('icon', 'lucide:alert-circle');
          else icon.setAttribute('icon', 'lucide:info');

          toast.classList.remove('-translate-y-[150%]', 'opacity-0');
          toast.classList.add('translate-y-0', 'opacity-100');

          setTimeout(() => {
              toast.classList.remove('translate-y-0', 'opacity-100');
              toast.classList.add('-translate-y-[150%]', 'opacity-0');
          }, 3000);
      }

      function toggleLoading(show) {
          document.getElementById('loading-overlay').style.display = show ? 'flex' : 'none';
      }

      // --- NAVIGATION ---
      const protectedRoutes = ['dashboard', 'settings'];

      function nav(viewId) {
          if (protectedRoutes.includes(viewId) && !currentUser) {
              showToast('Please sign in first', 'error');
              viewId = 'auth';
          }

          document.querySelectorAll('.view-section').forEach(el => {
              el.classList.remove('active');
          });

          const target = document.getElementById('view-' + viewId);
          if (target) {
              target.classList.add('active');
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          if (viewId === 'dashboard') renderDashboard();
      }

      function requireAuth(viewId) {
          if (viewId === 'create') resetWizard();
          if (currentUser || viewId === 'create') {
              nav(viewId);
          } else {
              nav('auth');
          }
      }

      function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          menu.classList.toggle('hidden');
      }

      function updateNavUI() {
          const actions = document.getElementById('nav-actions');
          const mobileActions = document.getElementById('mobile-auth-actions');

          if (currentUser) {
              actions.innerHTML = `
                  <button onclick="nav('dashboard')" class="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Dashboard</button>
                  <button onclick="logout()" class="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Sign out</button>
                  <button onclick="requireAuth('create')" class="h-10 px-5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm ml-2">Create Tribute</button>
              `;
              mobileActions.innerHTML = `
                  <button onclick="nav('dashboard');toggleMobileMenu()" class="block w-full text-left text-sm font-medium text-stone-900">Dashboard</button>
                  <button onclick="logout();toggleMobileMenu()" class="block w-full text-left text-sm font-medium text-stone-500">Sign out</button>
                  <button onclick="requireAuth('create');toggleMobileMenu()" class="block w-full text-left text-sm font-medium text-stone-900">Create Tribute</button>
              `;
              const dashName = document.getElementById('dash-name');
              const dashAvatar = document.getElementById('dash-avatar');
              if (dashName) dashName.textContent = currentUser.name;
              if (dashAvatar) dashAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
          } else {
              actions.innerHTML = `
                  <button onclick="nav('auth')" class="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Sign In</button>
                  <button onclick="nav('dashboard')" class="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Dashboard</button>
                  <button onclick="requireAuth('create')" class="h-10 px-5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm ml-2">Create Tribute</button>
              `;
              mobileActions.innerHTML = `
                  <button onclick="nav('auth');toggleMobileMenu()" class="block w-full text-left text-sm font-medium text-stone-900">Sign In</button>
                  <button onclick="nav('dashboard');toggleMobileMenu()" class="block w-full text-left text-sm font-medium text-stone-900">Dashboard</button>
                  <button onclick="requireAuth('create');toggleMobileMenu()" class="block w-full text-left text-sm font-medium text-stone-900">Create Tribute</button>
              `;
          }
      }

      // --- AUTH (MOCK) ---
      function handleAuth(e, type) {
          e.preventDefault();
          toggleLoading(true);
          setTimeout(() => {
              toggleLoading(false);
              const email = document.getElementById(`${type}-email`).value;
              const name = type === 'signup' ? document.getElementById('signup-name').value : email.split('@')[0];
              currentUser = { name, email };
              updateNavUI();
              nav('dashboard');
              showToast('Successfully signed in!', 'success');
          }, 1000);
      }

      function logout() {
          currentUser = null;
          updateNavUI();
          nav('home');
          showToast('Signed out');
      }

      // --- WIZARD ---
      function resetWizard() {
          currentStep = 1;
          updateWizardUI();
          document.getElementById('t-name').value = '';
          document.getElementById('t-story').value = '';
      }

      function wizStep(dir) {
          if (currentStep === 1 && dir === 1 && !document.getElementById('t-name').value.trim()) {
              return showToast('Name is required', 'error');
          }
          if (currentStep === 2 && dir === 1 && !document.getElementById('t-story').value.trim()) {
              return showToast('Story is required', 'error');
          }

          if (currentStep === 4 && dir === 1) {
              toggleLoading(true);
              setTimeout(() => {
                  toggleLoading(false);
                  const name = document.getElementById('t-name').value;
                  mockTributes.push({ id: Date.now(), name, status: 'Completed', date: new Date().toLocaleDateString() });
                  showToast('Tribute created successfully!', 'success');

                  const resultName = document.getElementById('result-name');
                  if (resultName) resultName.textContent = name || 'Your Loved One';
                  nav('tribute-result');
              }, 2000);
              return;
          }

          currentStep += dir;
          updateWizardUI();
      }

      function updateWizardUI() {
          for (let i = 1; i <= 4; i++) {
              const stepDiv = document.getElementById(`wizard-step-${i}`);
              const indDiv = document.getElementById(`step-ind-${i}`);

              if (i === currentStep) {
                  stepDiv.classList.remove('hidden');
                  indDiv.classList.remove('opacity-50');
                  indDiv.querySelector('div').className = "w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-medium flex items-center justify-center transition-colors";
              } else {
                  stepDiv.classList.add('hidden');
                  if (i < currentStep) {
                      indDiv.classList.remove('opacity-50');
                      indDiv.querySelector('div').className = "w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-medium flex items-center justify-center transition-colors";
                  } else {
                      indDiv.classList.add('opacity-50');
                      indDiv.querySelector('div').className = "w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-xs font-medium flex items-center justify-center transition-colors";
                  }
              }
          }

          const prevBtn = document.getElementById('wiz-prev');
          const nextBtn = document.getElementById('wiz-next');

          if (currentStep === 1) prevBtn.classList.add('hidden');
          else prevBtn.classList.remove('hidden');

          if (currentStep === 4) {
              nextBtn.textContent = 'Generate Tribute';
              nextBtn.className = "h-10 px-6 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2";
          } else {
              nextBtn.textContent = 'Next Step';
              nextBtn.className = "h-10 px-6 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm";
          }
      }

      // --- DASHBOARD ---
      function renderDashboard() {
          const emptyState = document.getElementById('dash-empty');
          const table = document.getElementById('dash-table');
          const tbody = document.getElementById('dash-tbody');

          if (mockTributes.length === 0) {
              emptyState.classList.remove('hidden');
              table.classList.add('hidden');
          } else {
              emptyState.classList.add('hidden');
              table.classList.remove('hidden');

              tbody.innerHTML = mockTributes.map(t => `
                  <tr class="hover:bg-stone-50/50 transition-colors">
                      <td class="px-6 py-4">
                          <p class="font-medium text-stone-900 font-elegant text-base">${t.name}</p>
                          <p class="text-sm text-stone-500">${t.date}</p>
                      </td>
                      <td class="px-6 py-4">
                          <span class="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">${t.status}</span>
                      </td>
                      <td class="px-6 py-4 text-right">
                          <button class="text-stone-400 hover:text-stone-900 transition-colors"><iconify-icon icon="lucide:eye" width="18" stroke-width="1.5"></iconify-icon></button>
                      </td>
                  </tr>
              `).join('');
          }
      }

      // --- PLANS ---
      function selectPlan(plan) {
          if(!currentUser) {
              nav('auth');
              return showToast('Sign in to select a plan');
          }
          showToast(`Selected ${plan} plan (Mock)`, 'success');
      }

      // Initialize
      updateNavUI();
    


      function renderDashboard() {
          const emptyContainer = document.getElementById('dash-empty-container');
          const grid = document.getElementById('dash-grid');

          if (mockTributes.length === 0) {
              if(emptyContainer) emptyContainer.classList.remove('hidden');
              if(grid) grid.classList.add('hidden');
          } else {
              if(emptyContainer) emptyContainer.classList.add('hidden');
              if(grid) grid.classList.remove('hidden');

              if(grid) grid.innerHTML = mockTributes.map(t => `
                  <div class="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                      <div class="flex justify-between items-start mb-4">
                          <div class="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 overflow-hidden shrink-0 border border-stone-200">
                              <iconify-icon icon="lucide:user" width="20" class="mt-1"></iconify-icon>
                          </div>
                          <span class="px-2.5 py-1 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold tracking-wide uppercase rounded-full">${t.status}</span>
                      </div>
                      <h3 class="font-elegant text-2xl tracking-tight font-medium text-stone-900 mb-1">${t.name}</h3>
                      <p class="text-sm text-stone-500 font-medium mb-6">Created on ${t.date}</p>
                      <div class="mt-auto pt-4 border-t border-stone-100 flex items-center gap-3">
                          <button class="flex-1 h-9 rounded-lg bg-stone-50 text-stone-600 text-sm font-medium hover:bg-stone-100 hover:text-stone-900 transition-colors flex items-center justify-center gap-2 border border-stone-200 shadow-sm">
                              <iconify-icon icon="lucide:eye" width="16" stroke-width="1.5"></iconify-icon>
                              View
                          </button>
                          <button onclick="showToast('Link copied to clipboard!', 'success')" class="flex-1 h-9 rounded-lg bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 border border-stone-200 shadow-sm">
                              <iconify-icon icon="lucide:share-2" width="16" stroke-width="1.5"></iconify-icon>
                              Share
                          </button>
                      </div>
                  </div>
              `).join('');
          }
      }
    


      (function() {
        const dashIndex = protectedRoutes.indexOf('dashboard');
        if (dashIndex > -1) protectedRoutes.splice(dashIndex, 1);

        const originalUpdateNavUI = updateNavUI;
        updateNavUI = function() {
            originalUpdateNavUI();
            const actions = document.getElementById('nav-actions');
            if(actions) actions.innerHTML = actions.innerHTML.replace(/<button[^>]*nav\('dashboard'\)[^>]*>Dashboard<\/button>/g, '');
            const mobileActions = document.getElementById('mobile-auth-actions');
            if(mobileActions) mobileActions.innerHTML = mobileActions.innerHTML.replace(/<button[^>]*nav\('dashboard'\)[^>]*>Dashboard<\/button>/g, '');
        };
        updateNavUI();
      })();
    
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
      

<div className="fixed top-6 left-1/2 -translate-x-1/2 -translate-y-[150%] opacity-0 z-[100] px-4 py-3 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-200 text-sm font-medium flex items-center gap-2 max-w-md pointer-events-none transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]" id="toast">
<iconify-icon className="text-stone-900" icon="lucide:info" id="toast-icon" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-stone-800" id="toast-msg"></span>
</div>

<div className="fixed inset-0 z-[90] bg-[#FCFCFC]/80 backdrop-blur-sm hidden items-center justify-center" id="loading-overlay">
<div className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
<div className="w-8 h-8 border-2 border-stone-200 border-t-stone-900 rounded-full spinner"></div>
<span className="text-xs text-stone-600 font-medium tracking-wide uppercase" id="loading-text">
          Processing...
        </span>
</div>
</div>

<nav className="sticky top-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md border-b border-stone-200/60" id="main-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="flex items-center gap-2 group" onclick="nav('home')">
<div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-white">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg tracking-tight font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
            AI Shraddhanjali
          </span>
</button>
<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="nav('home')">
            Home
          </button>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="nav('how-it-works')">
            How It Works
          </button>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="nav('pricing')">
            Pricing
          </button>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="nav('faq')">
            FAQ
          </button>
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="nav('dashboard')">
            Dashboard
          </button>
</div>
<div className="hidden md:flex items-center gap-6" id="nav-actions">

</div>
<button className="md:hidden p-2 text-stone-600" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden border-t border-stone-200 bg-white px-6 py-4 space-y-4" id="mobile-menu">
<button className="block w-full text-left text-sm font-medium text-stone-600" onclick="nav('home');toggleMobileMenu()">
          Home
        </button>
<button className="block w-full text-left text-sm font-medium text-stone-600" onclick="nav('how-it-works');toggleMobileMenu()">
          How It Works
        </button>
<button className="block w-full text-left text-sm font-medium text-stone-600" onclick="nav('pricing');toggleMobileMenu()">
          Pricing
        </button>
<button className="block w-full text-left text-sm font-medium text-stone-600" onclick="nav('faq');toggleMobileMenu()">
          FAQ
        </button>
<button className="block w-full text-left text-sm font-medium text-stone-600" onclick="nav('dashboard');toggleMobileMenu()">
          Dashboard
        </button>
<div className="pt-4 border-t border-stone-100 space-y-4" id="mobile-auth-actions"></div>
</div>
</nav>
<main className="flex-grow flex flex-col relative w-full overflow-hidden">

<section className="view-section w-full flex-grow active" id="view-home">

<div className="relative pt-24 md:pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center px-6 text-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-stone-100/50 rounded-full blur-3xl -z-10"></div>
<span className="px-5 py-2 text-sm font-medium text-stone-500 bg-stone-100 rounded-full mb-8 shadow-sm">
            Honoring memories through respectful digital storytelling
          </span>
<h1 className="text-5xl md:text-6xl tracking-tight font-semibold text-stone-900 mb-6 leading-[1.05]">
            Preserve memories
            <br className="hidden md:block"/>
            with dignity
          </h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-2xl font-normal leading-relaxed">
            Turn scattered photos, voice notes, and written memories into a
            respectful tribute video and digital memorial page in minutes.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#1A1A1A] text-white text-base font-medium hover:bg-black transition-all shadow-md flex items-center justify-center gap-2" onclick="requireAuth('create')">
              Create Tribute
              <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-stone-900 text-base font-medium hover:bg-stone-50 border border-stone-200 transition-all flex items-center justify-center gap-2 shadow-sm" onclick="nav('demo')">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="20"></iconify-icon>
              Watch Demo
            </button>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-20 md:mt-28 h-[450px] md:h-[500px] flex justify-center items-start perspective-1000">

<div className="absolute left-0 md:left-[2%] top-16 md:top-24 w-64 md:w-72 bg-white rounded-3xl border border-stone-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-4 transform -rotate-[5deg] z-0 transition-all hover:z-20 hover:-rotate-2 hover:scale-105 duration-500 hidden md:block">
<div className="relative w-full h-40 rounded-2xl overflow-hidden mb-5">
<img alt="Memorial" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-stone-800 shadow-sm">
                  Shri Rajesh Sharma
                </div>
</div>
<div className="text-center px-2 pb-2">
<h3 className="text-lg tracking-tight font-semibold text-stone-900 mb-1.5">
                  Digital Memorial
                </h3>
<p className="text-sm text-stone-500 leading-relaxed">
                  A permanent, elegant space for family and friends to gather.
                </p>
</div>
</div>

<div className="absolute right-0 md:right-[2%] top-16 md:top-24 w-64 md:w-72 bg-white rounded-3xl border border-stone-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-7 transform rotate-[5deg] z-0 flex flex-col h-[300px] transition-all hover:z-20 hover:rotate-2 hover:scale-105 duration-500 hidden md:flex">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-stone-400" icon="lucide:mic" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-semibold text-stone-400 tracking-wider uppercase">
                  Voice Narration
                </span>
</div>
<p className="text-base font-medium text-stone-800 leading-relaxed flex-grow">
                "He was a guiding light in our lives, always putting family
                first. His wisdom and quiet strength inspired everyone around
                him..."
              </p>
<div className="mt-4 flex items-center w-full">
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-stone-300 w-1/3 rounded-full"></div>
</div>
</div>
</div>

<div className="relative z-10 w-[300px] md:w-[350px] h-[400px] md:h-[460px] bg-[#0A1118] rounded-[32px] border-[10px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-end p-8 transition-transform hover:scale-105 duration-500">
<img alt="Tribute Video" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all shadow-2xl group">
<iconify-icon className="text-white fill-white ml-1 group-hover:scale-110 transition-transform" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="relative z-10 text-center mt-auto pb-2">
<h2 className="font-elegant text-3xl tracking-tight text-white font-medium mb-1.5">
                  A Life Remembered
                </h2>
<p className="text-sm font-semibold text-white/70">
                  AI Generated Tribute Video
                </p>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-100">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-6">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                Digital Memorial
              </h3>
<p className="text-base text-stone-500 leading-relaxed">
                A permanent, elegant web page for family and friends to gather,
                read the life story, and view photos.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-6">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                Tribute Video
              </h3>
<p className="text-base text-stone-500 leading-relaxed">
                Automatically generated videos combining your uploaded photos
                with a respectfully crafted voice narration.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-6">
<iconify-icon icon="lucide:pen-square" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                Guided Writing
              </h3>
<p className="text-base text-stone-500 leading-relaxed">
                Share simple notes or voice memos, and our system helps draft a
                cohesive, beautifully written biography.
              </p>
</div>
</div>
</div>
</section>
<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-demo">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-6 inline-flex items-center gap-2 transition-colors" onclick="nav('home')">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5"></iconify-icon>
              Back to Home
            </button>
<h1 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">
              Demo Tribute Video
            </h1>
<p className="text-lg text-stone-500">
              Experience how we preserve memories with dignity and respect.
            </p>
</div>
<div className="bg-[#0A1118] rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-video relative flex items-center justify-center">
<video autoplay="" className="w-full h-full object-cover" controls="" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=1200&amp;q=80">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
</div>
</div>
</section>
<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-how-it-works">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">
              How it works
            </h1>
<p className="text-lg text-stone-500 max-w-xl mx-auto">
              A simple, dignified process to preserve memories forever. We guide
              you through every step.
            </p>
</div>
<div className="max-w-3xl mx-auto space-y-8 relative">
<div className="absolute top-7 bottom-7 left-[27px] w-0.5 bg-stone-200 z-0"></div>
<div className="relative flex gap-6 md:gap-8 z-10">
<div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#FCFCFC] bg-white text-stone-900 shadow-sm shrink-0">
<span className="text-lg font-semibold">1</span>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm flex-grow transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-4">
<iconify-icon icon="lucide:clipboard-list" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                  Share Details
                </h3>
<p className="text-base text-stone-500 leading-relaxed">
                  Provide basic information like their name, important dates,
                  and your relationship to help personalize the tribute.
                </p>
</div>
</div>
<div className="relative flex gap-6 md:gap-8 z-10">
<div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#FCFCFC] bg-white text-stone-900 shadow-sm shrink-0">
<span className="text-lg font-semibold">2</span>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm flex-grow transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-4">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                  Tell Their Story
                </h3>
<p className="text-base text-stone-500 leading-relaxed">
                  Write a short note or record a voice memo sharing their life
                  journey, personality, and cherished memories.
                </p>
</div>
</div>
<div className="relative flex gap-6 md:gap-8 z-10">
<div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#FCFCFC] bg-white text-stone-900 shadow-sm shrink-0">
<span className="text-lg font-semibold">3</span>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm flex-grow transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
<div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-800 mb-4">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                  Upload Photos
                </h3>
<p className="text-base text-stone-500 leading-relaxed">
                  Select and upload meaningful photographs that capture their
                  spirit and important moments.
                </p>
</div>
</div>
<div className="relative flex gap-6 md:gap-8 z-10">
<div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#FCFCFC] bg-stone-900 text-white shadow-sm shrink-0">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="bg-stone-900 p-6 md:p-8 rounded-2xl border border-stone-800 shadow-md flex-grow transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
<div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-2">
                  AI Generation
                </h3>
<p className="text-base text-stone-400 leading-relaxed">
                  Our AI thoughtfully weaves everything together into a
                  beautifully crafted tribute video and an elegant digital
                  memorial page.
                </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="h-12 px-8 rounded-full bg-[#1A1A1A] text-white text-base font-medium hover:bg-black transition-all shadow-md inline-flex items-center justify-center gap-2" onclick="requireAuth('create')">
              Create Tribute
              <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">
              Simple, transparent pricing
            </h1>
<p className="text-lg text-stone-500 max-w-xl mx-auto">
              Honor your loved ones with a permanent digital memorial. Choose
              what is best for your family.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-stone-900 mb-2">
                Basic Memory
              </h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl tracking-tight font-semibold text-stone-900">
                  ₹0
                </span>
</div>
<p className="text-base text-stone-500 mb-8 border-b border-stone-100 pb-8">
                Essential features to create a respectful digital memorial.
              </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Basic digital memorial page
                </li>
<li className="flex items-start gap-3 text-base text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Up to 10 photos
                </li>
<li className="flex items-start gap-3 text-base text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Standard AI biography
                </li>
</ul>
<button className="w-full h-10 rounded-lg bg-white border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm" onclick="requireAuth('create')">
                Get Started
              </button>
</div>

<div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-lg flex flex-col relative md:-translate-y-4">
<div className="absolute top-0 right-0 px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-bl-lg rounded-tr-xl">
                POPULAR
              </div>
<h3 className="text-lg font-medium text-white mb-2">
                Premium Tribute
              </h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl tracking-tight font-semibold text-white">
                  ₹2500
                </span>
<span className="text-sm text-stone-400">/ one-time</span>
</div>
<p className="text-base text-stone-400 mb-8 border-b border-stone-700 pb-8">
                A complete legacy with high-quality video and audio.
              </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base text-stone-300">
<iconify-icon className="text-white mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Everything in Basic
                </li>
<li className="flex items-start gap-3 text-base text-stone-300">
<iconify-icon className="text-white mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  HD AI Tribute Video
                </li>
<li className="flex items-start gap-3 text-base text-stone-300">
<iconify-icon className="text-white mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Lifelike AI voice narration
                </li>
<li className="flex items-start gap-3 text-base text-stone-300">
<iconify-icon className="text-white mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Unlimited photos
                </li>
</ul>
<button className="w-full h-10 rounded-lg bg-white text-stone-900 text-sm font-medium hover:bg-stone-100 transition-colors" onclick="requireAuth('create')">
                Choose Premium
              </button>
</div>

<div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-stone-900 mb-2">
                Family Pack
              </h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl tracking-tight font-semibold text-stone-900">
                  ₹8299
                </span>
<span className="text-sm text-stone-500">/ one-time</span>
</div>
<p className="text-base text-stone-500 mb-8 border-b border-stone-100 pb-8">
                Comprehensive legacy preservation for multiple family members.
              </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-base text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Everything in Premium
                </li>
<li className="flex items-start gap-3 text-base text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  Up to 5 interconnected memorials
                </li>
<li className="flex items-start gap-3 text-base text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
                  4K video rendering
                </li>
</ul>
<button className="w-full h-10 rounded-lg bg-white border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm" onclick="requireAuth('create')">
                Choose Family
              </button>
</div>
</div>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">
              Frequently Asked Questions
            </h1>
<p className="text-lg text-stone-500">
              Everything you need to know about our service.
            </p>
</div>
<div className="space-y-4">
<div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
<h3 className="text-base font-medium text-stone-900 mb-2">
                How long does it take to create a tribute?
              </h3>
<p className="text-base text-stone-600">
                Once you upload your photos and share a few details, our AI
                generates a beautifully crafted tribute page and video within 5
                minutes.
              </p>
</div>
<div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
<h3 className="text-base font-medium text-stone-900 mb-2">
                Can I edit the AI-generated script?
              </h3>
<p className="text-base text-stone-600">
                Yes, absolutely. We provide a draft that you have full control
                over. You can edit the text before finalizing.
              </p>
</div>
<div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
<h3 className="text-base font-medium text-stone-900 mb-2">
                Is the memorial page permanent?
              </h3>
<p className="text-base text-stone-600">
                With our Premium plan, your memorial page is hosted permanently
                without any ads.
              </p>
</div>
</div>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-auth">
<div className="w-full max-w-[400px] bg-white rounded-2xl border border-stone-200 shadow-sm p-8 mx-auto">
<div className="text-center mb-8">
<h2 className="text-2xl tracking-tight font-semibold text-stone-900">
              Welcome back
            </h2>
<p className="text-sm text-stone-500 mt-2">
              Sign in to manage your tributes.
            </p>
</div>
<form className="space-y-4" onsubmit="handleAuth(event, 'signin')">
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                Email address
              </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="signin-email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="block text-sm font-medium text-stone-600">
                  Password
                </label>
</div>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="signin-password" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full h-10 mt-2 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm" type="submit">
              Sign In
            </button>
</form>
<p className="text-center text-sm text-stone-500 mt-6">
            Don't have an account?
            <button className="font-medium text-stone-900 hover:underline" onclick="nav('signup')">
              Create one
            </button>
</p>
</div>
</section>
<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-signup">
<div className="w-full max-w-[400px] bg-white rounded-2xl border border-stone-200 shadow-sm p-8 mx-auto">
<div className="text-center mb-8">
<h2 className="text-2xl tracking-tight font-semibold text-stone-900">
              Create account
            </h2>
<p className="text-sm text-stone-500 mt-2">
              Start preserving your family's memories.
            </p>
</div>
<form className="space-y-4" onsubmit="handleAuth(event, 'signup')">
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                Full name
              </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="signup-name" placeholder="Rajesh Sharma" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                Email address
              </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="signup-email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                Password
              </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="signup-password" minlength="6" placeholder="Min 6 characters" required="" type="password"/>
</div>
<button className="w-full h-10 mt-2 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm" type="submit">
              Create Account
            </button>
</form>
<p className="text-center text-sm text-stone-500 mt-6">
            Already have an account?
            <button className="font-medium text-stone-900 hover:underline" onclick="nav('auth')">
              Sign in
            </button>
</p>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-16" id="view-create">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-10">
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-4 flex items-center gap-1 transition-colors" onclick="nav('dashboard')">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5"></iconify-icon>
              Back
            </button>
<h1 className="text-3xl tracking-tight font-semibold text-stone-900">
              Create a tribute
            </h1>
</div>

<div className="flex items-center gap-2 mb-8 select-none">
<div className="flex items-center gap-2 transition-opacity" id="step-ind-1">
<div className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-medium flex items-center justify-center">
                1
              </div>
<span className="text-sm font-medium text-stone-900">Details</span>
</div>
<div className="w-8 h-px bg-stone-200"></div>
<div className="flex items-center gap-2 opacity-50 transition-opacity" id="step-ind-2">
<div className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-xs font-medium flex items-center justify-center">
                2
              </div>
<span className="text-sm font-medium text-stone-500 hidden sm:inline">
                Story
              </span>
</div>
<div className="w-8 h-px bg-stone-200"></div>
<div className="flex items-center gap-2 opacity-50 transition-opacity" id="step-ind-3">
<div className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-xs font-medium flex items-center justify-center">
                3
              </div>
<span className="text-sm font-medium text-stone-500 hidden sm:inline">
                Photos
              </span>
</div>
<div className="w-8 h-px bg-stone-200"></div>
<div className="flex items-center gap-2 opacity-50 transition-opacity" id="step-ind-4">
<div className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-xs font-medium flex items-center justify-center">
                4
              </div>
<span className="text-sm font-medium text-stone-500 hidden sm:inline">
                Finish
              </span>
</div>
</div>
<div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8">

<div className="space-y-6" id="wizard-step-1">
<h2 className="text-xl tracking-tight font-medium text-stone-900 border-b border-stone-100 pb-4">
                Loved One Details
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                    Full Name *
                  </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="t-name" placeholder="Enter full name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                    Relationship
                  </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" id="t-rel" placeholder="e.g. Father" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                    Date of Birth
                  </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors text-stone-900" id="t-dob" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                    Date of Passing
                  </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors text-stone-900" id="t-dod" type="date"/>
</div>
</div>
</div>

<div className="space-y-6 hidden" id="wizard-step-2">
<h2 className="text-xl tracking-tight font-medium text-stone-900 border-b border-stone-100 pb-4">
                Their Story
              </h2>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                  Life story and memories *
                </label>
<textarea className="w-full p-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors resize-y" id="t-story" placeholder="Tell us about their life, personality, favorite memories..." rows="6"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                  Voice Note (Optional)
                </label>
<label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-stone-200 rounded-xl hover:bg-stone-50 hover:border-stone-300 transition-colors cursor-pointer group">
<iconify-icon className="text-stone-400 group-hover:text-stone-600 mb-2 transition-colors" icon="lucide:mic" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-600">
                    Click to upload audio
                  </span>
<input accept="audio/*" className="hidden" onchange="showToast('Audio uploaded (mock)', 'success')" type="file"/>
</label>
</div>
</div>

<div className="space-y-6 hidden" id="wizard-step-3">
<div className="flex items-center justify-between border-b border-stone-100 pb-4">
<h2 className="text-xl tracking-tight font-medium text-stone-900">
                  Photos
                </h2>
<span className="text-sm font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded">
                  Max 10 photos
                </span>
</div>
<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-stone-200 rounded-xl hover:bg-stone-50 hover:border-stone-300 transition-colors cursor-pointer group">
<iconify-icon className="text-stone-400 group-hover:text-stone-600 mb-2 transition-colors" icon="lucide:image-plus" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-medium text-stone-600">
                  Click to upload photos
                </span>
<span className="text-sm text-stone-400 mt-1">
                  JPEG, PNG up to 10MB
                </span>
<input accept="image/*" className="hidden" multiple="" onchange="showToast('Photos added (mock)', 'success')" type="file"/>
</label>
</div>

<div className="space-y-6 hidden" id="wizard-step-4">
<h2 className="text-xl tracking-tight font-medium text-stone-900 border-b border-stone-100 pb-4">
                Preferences
              </h2>
<div>
<label className="block text-sm font-medium text-stone-600 mb-3">
                  Tone
                </label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="tone" type="radio" value="warm"/>
<div className="p-3 border border-stone-200 rounded-xl text-center peer-checked:border-stone-900 peer-checked:bg-stone-50 transition-all text-stone-600 peer-checked:text-stone-900">
<p className="text-sm font-medium">Warm</p>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="tone" type="radio" value="celebratory"/>
<div className="p-3 border border-stone-200 rounded-xl text-center peer-checked:border-stone-900 peer-checked:bg-stone-50 transition-all text-stone-600 peer-checked:text-stone-900">
<p className="text-sm font-medium">Celebratory</p>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="tone" type="radio" value="reflective"/>
<div className="p-3 border border-stone-200 rounded-xl text-center peer-checked:border-stone-900 peer-checked:bg-stone-50 transition-all text-stone-600 peer-checked:text-stone-900">
<p className="text-sm font-medium">Reflective</p>
</div>
</label>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
<button className="hidden h-10 px-4 rounded-lg bg-white border border-stone-200 text-stone-600 text-sm font-medium hover:bg-stone-50 transition-colors" id="wiz-prev" onclick="wizStep(-1)">
                Previous
              </button>
<div className="flex-grow"></div>
<button className="h-10 px-6 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm" id="wiz-next" onclick="wizStep(1)">
                Next Step
              </button>
</div>
</div>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-24" id="view-tribute-result">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 shadow-sm">
<iconify-icon className="text-green-600" icon="lucide:check-circle" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h1 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">
            Tribute Created
          </h1>
<p className="text-lg text-stone-500 mb-8">
            The digital memorial and tribute video have been successfully
            generated.
          </p>
<div className="bg-white border border-stone-200 rounded-2xl p-8 mb-8 text-left shadow-sm max-w-2xl mx-auto">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
<div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 overflow-hidden">
<iconify-icon className="mt-2" icon="lucide:user" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-elegant tracking-tight font-medium text-stone-900 mb-1" id="result-name">
                  Name
                </h3>
<p className="text-sm text-stone-500 font-medium">
                  A beautiful life remembered.
                </p>
</div>
</div>
<div className="w-full h-64 bg-[#0A1118] rounded-xl flex items-center justify-center mb-6 relative overflow-hidden group cursor-pointer border border-stone-200 shadow-inner">
<img alt="Tribute Video Background" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all z-10 shadow-lg">
<iconify-icon className="text-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-1 h-11 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="requireAuth('dashboard')">
<iconify-icon icon="lucide:save" width="18"></iconify-icon>
                Save to Account
              </button>
<button className="flex-1 h-11 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="showToast('Link copied to clipboard!', 'success')">
<iconify-icon icon="lucide:share-2" width="18"></iconify-icon>
                Copy Link
              </button>
</div>
</div>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-12" id="view-dashboard">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 shrink-0">
<div className="bg-white rounded-3xl border border-stone-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-8 p-1">
<div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 font-semibold text-lg" id="dash-avatar">
                  U
                </div>
<div>
<p className="text-base font-semibold text-stone-900 tracking-tight truncate" id="dash-name">
                    User
                  </p>
<span className="inline-block mt-0.5 px-2 py-0.5 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider rounded">
                    Free Plan
                  </span>
</div>
</div>
<nav className="space-y-1.5">
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-stone-900 bg-stone-100 rounded-xl flex items-center gap-3 transition-colors" onclick="nav('dashboard')">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="18"></iconify-icon>
                  My Tributes
                </button>
<button className="w-full text-left px-4 py-2.5 text-sm font-medium text-stone-500 hover:bg-stone-50 hover:text-stone-900 rounded-xl flex items-center gap-3 transition-colors" onclick="nav('settings')">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon>
                  Settings
                </button>
</nav>
</div>
</aside>

<div className="flex-grow min-w-0">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<h1 className="text-3xl tracking-tight font-semibold text-stone-900">
                My Tributes
              </h1>
<button className="h-10 px-5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-black transition-all shadow-md inline-flex items-center gap-2 w-full sm:w-auto justify-center" onclick="nav('create')">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
                Create New
              </button>
</div>
<div id="dash-content-area">
<div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden" id="dash-empty-container">
<div className="p-12 md:p-16 text-center" id="dash-empty">
<div className="w-16 h-16 mx-auto bg-stone-50 rounded-2xl flex items-center justify-center mb-6 border border-stone-100 shadow-sm transform -rotate-3">
<iconify-icon className="text-stone-400" icon="lucide:folder-heart" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-2">
                    No tributes yet
                  </h3>
<p className="text-base text-stone-500 mb-8 max-w-sm mx-auto">
                    Create your first digital memorial and preserve your loved
                    one's legacy forever.
                  </p>
<button className="h-11 px-6 rounded-full bg-white text-stone-900 border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-all shadow-sm inline-flex items-center gap-2" onclick="nav('create')">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
                    Start a Draft
                  </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 hidden" id="dash-grid">

</div>
</div>
</div>
</div>
</section>

<section className="view-section w-full bg-[#FCFCFC] flex-grow py-12" id="view-settings">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-8">
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 mb-4 flex items-center gap-1 transition-colors" onclick="nav('dashboard')">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5"></iconify-icon>
              Back to Dashboard
            </button>
<h1 className="text-3xl tracking-tight font-semibold text-stone-900">
              Account Settings
            </h1>
</div>
<div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden mb-6">
<div className="px-6 py-4 border-b border-stone-100">
<h3 className="text-base font-medium text-stone-900">
                Profile Information
              </h3>
</div>
<div className="p-6">
<div className="max-w-md space-y-4">
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                    Full Name
                  </label>
<input className="w-full h-10 px-3 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400" type="text" value="Demo User"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-600 mb-1.5">
                    Email
                  </label>
<input className="w-full h-10 px-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-500 cursor-not-allowed" disabled="" type="text" value="user@example.com"/>
</div>
<button className="h-9 px-4 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
                  Save Changes
                </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-stone-200 bg-white py-8 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-stone-900 flex items-center justify-center text-white">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-base font-medium text-stone-900">
            AI Shraddhanjali
          </span>
</div>
<div className="flex gap-6 text-sm font-medium text-stone-500">
<span className="cursor-pointer hover:text-stone-900">Privacy</span>
<span className="cursor-pointer hover:text-stone-900">Terms</span>
<span className="cursor-pointer hover:text-stone-900">Contact</span>
</div>
</div>
</footer>




    </>
  );
}
