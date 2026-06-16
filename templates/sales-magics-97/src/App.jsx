import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const primary = '#644C98';

      const settingsView = document.getElementById('settingsView');
      const testListView = document.getElementById('testListView');

      const btnSetupTestList = document.getElementById('btnSetupTestList');
      const btnConfigureSocial = document.getElementById('btnConfigureSocial');

      const btnBack = document.getElementById('btnBack');
      const btnSave = document.getElementById('btnSave');

      const emailsTextarea = document.getElementById('emailsTextarea');
      const emailCount = document.getElementById('emailCount');

      const modal = document.getElementById('socialModal');
      const btnCloseModal = document.getElementById('btnCloseModal');
      const btnDoneModal = document.getElementById('btnDoneModal');

      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toastMessage');
      const toastClose = document.getElementById('toastClose');

      // Navigation
      function showSettings() {
        settingsView.classList.remove('hidden');
        testListView.classList.add('hidden');
        history.replaceState(null, '', '#settings');
      }

      function showTestList() {
        settingsView.classList.add('hidden');
        testListView.classList.remove('hidden');
        history.replaceState(null, '', '#test-list');
        loadEmails();
        updateCount();
      }

      // Modal helpers
      function openModal() {
        modal.classList.remove('invisible', 'opacity-0');
        modal.setAttribute('aria-hidden', 'false');
      }

      function closeModal() {
        modal.classList.add('opacity-0');
        // Delay to hide after transition
        setTimeout(() => {
          modal.classList.add('invisible');
          modal.setAttribute('aria-hidden', 'true');
        }, 150);
      }

      // Toast
      let toastTimer = null;
      function showToast(message = 'Saved') {
        toastMessage.textContent = message;
        toast.classList.remove('hidden');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.add('hidden');
        }, 2500);
      }

      // Email storage
      const STORAGE_KEY = 'salesmagics:testlist:emails';
      function loadEmails() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) emailsTextarea.value = saved;
      }
      function saveEmails() {
        localStorage.setItem(STORAGE_KEY, emailsTextarea.value.trim());
      }
      function countEmails(value) {
        const lines = value.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        return lines.length;
      }
      function updateCount() {
        const c = countEmails(emailsTextarea.value);
        emailCount.textContent = c === 1 ? '1 recipient' : c + ' recipients';
      }

      // Events
      btnSetupTestList.addEventListener('click', showTestList);
      btnConfigureSocial.addEventListener('click', openModal);

      btnBack.addEventListener('click', showSettings);
      btnSave.addEventListener('click', () => {
        saveEmails();
        updateCount();
        showToast('Test list saved');
      });

      emailsTextarea.addEventListener('input', updateCount);

      btnCloseModal.addEventListener('click', closeModal);
      btnDoneModal.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      toastClose.addEventListener('click', () => toast.classList.add('hidden'));

      // Keyboard handlers
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      });

      // Initial route
      if (location.hash === '#test-list') {
        showTestList();
      } else {
        showSettings();
      }

      // Prefill count on load
      loadEmails();
      updateCount();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen bg-gray-50 text-gray-900">

<header className="w-full border-b border-gray-200 bg-white">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center rounded-md bg-[#644C98] text-white font-semibold tracking-tight" style={{height: '2rem', width: '2rem'}}>
<span className="text-sm leading-none">SM</span>
</div>
<span className="text-sm text-gray-500">Sales Magics</span>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition" type="button">
<iconify-icon className="text-gray-500" icon="lucide:help-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                Help
              </button>
<button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 transition" type="button">
<iconify-icon className="text-gray-500" icon="lucide:user" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline">Account</span>
</button>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 sm:px-6">

<section className="py-8 lg:py-12" id="settingsView">
<div className="max-w-3xl">
<h1 className="text-3xl tracking-tight font-semibold">Settings</h1>
<p className="mt-2 text-base text-gray-600">
              Manage and configure essential features that enhance your Sales Magics experience.
            </p>
</div>

<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">

<div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#644C98]/10">
<iconify-icon className="text-[#644C98]" icon="lucide:users" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="flex-1">
<h2 className="text-lg tracking-tight font-semibold">Test List</h2>
<p className="mt-1 text-sm text-gray-600">
                    Set up a list of contacts to receive a test version of your campaigns before they are sent to your full contact list.
                  </p>
</div>
</div>
<div className="mt-5 flex justify-end">
<button className="inline-flex items-center gap-2 rounded-md bg-[#644C98] px-4 py-2 text-sm font-medium text-white hover:bg-[#644C98]/90 focus:outline-none focus:ring-2 focus:ring-[#644C98]/40 active:bg-[#644C98] transition" id="btnSetupTestList" type="button">
<iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Set up
                </button>
</div>
</div>

<div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#644C98]/10">
<iconify-icon className="text-[#644C98]" icon="lucide:settings" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="flex-1">
<h2 className="text-lg tracking-tight font-semibold">Social Platform</h2>
<p className="mt-1 text-sm text-gray-600">
                    Connect social platforms and manage your team.
                  </p>
</div>
</div>
<div className="mt-5 flex justify-end">
<button className="inline-flex items-center gap-2 rounded-md border border-[#644C98] bg-white px-4 py-2 text-sm font-medium text-[#644C98] hover:bg-[#644C98]/10 focus:outline-none focus:ring-2 focus:ring-[#644C98]/30 transition" id="btnConfigureSocial" type="button">
<iconify-icon icon="lucide:sliders" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Configure
                </button>
</div>
</div>
</div>
</section>

<section className="hidden py-8 lg:py-12" id="testListView">
<div className="max-w-3xl">
<div className="flex items-start justify-between">
<div>
<h1 className="text-3xl tracking-tight font-semibold">Your Test List</h1>
<p className="mt-2 text-base text-gray-600">
                  We recommend that you always send a test email to a group of test recipients before sending your campaign to all recipients.
                </p>
<div className="mt-3 space-y-1 text-sm text-gray-600">
<p>To add test recipients, enter one email per line.</p>
<p>To remove a recipient, delete the email from the list.</p>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<label className="mb-2 block text-sm font-medium text-gray-800" htmlFor="emailsTextarea">Test recipient emails</label>
<div className="relative">
<textarea className="block w-full rounded-md border border-gray-300 bg-white p-4 text-sm text-gray-800 outline-none ring-0 focus:border-[#644C98] focus:ring-2 focus:ring-[#644C98]/30 min-h-[16rem]" id="emailsTextarea" placeholder="name@example.com" style={{resize: 'vertical'}}></textarea>
<div className="pointer-events-none absolute right-3 top-3 text-xs text-gray-500" id="emailCount">0 recipients</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-gray-500">Tip: Paste a list; we’ll keep one email per line.</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" id="btnBack" type="button">
<iconify-icon icon="lucide:arrow-left" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Back
                  </button>
<button className="inline-flex items-center gap-2 rounded-md bg-[#644C98] px-4 py-2 text-sm font-medium text-white hover:bg-[#644C98]/90 focus:outline-none focus:ring-2 focus:ring-[#644C98]/40 transition" id="btnSave" type="button">
<iconify-icon icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Save
                  </button>
</div>
</div>
</div>
</div>
</section>
</main>

<div aria-hidden="true" className="invisible fixed inset-0 z-50 opacity-0 transition" id="socialModal">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-24 w-full max-w-lg px-4 sm:px-6">
<div className="rounded-xl border border-gray-200 bg-white shadow-lg">
<div className="flex items-start justify-between p-5">
<div>
<h3 className="text-xl tracking-tight font-semibold">Social Platform</h3>
<p className="mt-1 text-sm text-gray-600">Connect social platforms and manage your team.</p>
</div>
<button aria-label="Close" className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition" id="btnCloseModal">
<iconify-icon icon="lucide:x" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="px-5 pb-5">
<div className="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-600">
                This is a placeholder configuration area. Use this modal to connect, authorize, or manage your social integrations.
              </div>
<div className="mt-4 flex justify-end">
<button className="inline-flex items-center gap-2 rounded-md bg-[#644C98] px-4 py-2 text-sm font-medium text-white hover:bg-[#644C98]/90 focus:outline-none focus:ring-2 focus:ring-[#644C98]/40 transition" id="btnDoneModal">
<iconify-icon icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Done
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] mx-auto hidden w-full max-w-md px-4" id="toast">
<div className="flex items-center gap-3 rounded-md border border-gray-200 bg-white p-3 shadow-lg">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#644C98]/10">
<iconify-icon className="text-[#644C98]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 text-sm text-gray-800" id="toastMessage">Saved</div>
<button aria-label="Dismiss" className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition" id="toastClose">
<iconify-icon icon="lucide:x" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>


    </>
  );
}
