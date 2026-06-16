import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize lucide icons with consistent stroke width
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Utils
    const $ = (s, el = document) => el.querySelector(s);
    const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

    // Profile field interactions
    const fieldsRoot = $('#profileFields');

    function enterEdit(fieldEl) {
      const display = $('[data-role="display"]', fieldEl);
      const editor = $('[data-role="editor"]', fieldEl);
      const actions = $('[data-role="actions"]', fieldEl);
      const editActions = $('[data-role="editActions"]', fieldEl);
      if (display) display.classList.add('hidden');
      if (editor) editor.classList.remove('hidden');
      if (actions) actions.classList.add('hidden');
      if (editActions) editActions.classList.remove('hidden');

      const focusable = editor && editor.querySelector('input, textarea, button');
      if (focusable) focusable.focus({ preventScroll: true });
    }

    function exitEdit(fieldEl) {
      const display = $('[data-role="display"]', fieldEl);
      const editor = $('[data-role="editor"]', fieldEl);
      const actions = $('[data-role="actions"]', fieldEl);
      const editActions = $('[data-role="editActions"]', fieldEl);
      if (editor) editor.classList.add('hidden');
      if (display) display.classList.remove('hidden');
      if (editActions) editActions.classList.add('hidden');
      if (actions) actions.classList.remove('hidden');
      const err = $('[data-role="error"]', fieldEl);
      if (err) err.classList.add('hidden');
    }

    function validate(fieldEl, value) {
      const name = fieldEl.dataset.field;
      if (!value || value.trim() === '') return false;
      if (name === 'email') {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      }
      return true;
    }

    function saveField(fieldEl) {
      const name = fieldEl.dataset.field;
      let newValue = '';
      if (name === 'address') {
        newValue = $('textarea', fieldEl)?.value || '';
      } else if (name === 'gender') {
        newValue = $('input[type="hidden"]', fieldEl)?.value || '';
      } else {
        newValue = $('input', fieldEl)?.value || '';
      }

      const errorEl = $('[data-role="error"]', fieldEl);
      if (!validate(fieldEl, newValue)) {
        if (errorEl) errorEl.classList.remove('hidden');
        return;
      }
      if (errorEl) errorEl.classList.add('hidden');

      const display = $('[data-role="display"]', fieldEl);
      if (display) display.textContent = newValue.trim();
      exitEdit(fieldEl);
    }

    if (fieldsRoot) {
      fieldsRoot.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const fieldEl = e.target.closest('[data-field]');
        if (!fieldEl) return;

        const action = btn.dataset.action;

        if (action === 'edit') {
          enterEdit(fieldEl);
        } else if (action === 'cancel') {
          exitEdit(fieldEl);
        } else if (action === 'save') {
          saveField(fieldEl);
        } else if (btn.hasAttribute('data-option')) {
          // gender selection
          const value = btn.getAttribute('data-option');
          const editor = $('[data-role="editor"]', fieldEl);
          const hidden = $('input[type="hidden"]', editor);
          if (hidden) hidden.value = value || '';

          // highlight active
          $$('button[data-option]', editor).forEach(b => {
            b.classList.remove('ring-indigo-500/40', 'bg-indigo-500/10', 'text-indigo-700');
            b.classList.add('bg-slate-50', 'text-slate-700', 'ring-slate-200');
          });
          btn.classList.remove('bg-slate-50', 'text-slate-700', 'ring-slate-200');
          btn.classList.add('ring-indigo-500/40', 'bg-indigo-500/10', 'text-indigo-700');
        }
      });

      // Enter/Escape keyboard handling inside editors
      fieldsRoot.addEventListener('keydown', (e) => {
        const fieldEl = e.target.closest('[data-field]');
        if (!fieldEl) return;

        if (e.key === 'Enter' && !e.shiftKey) {
          const isTextarea = e.target.tagName.toLowerCase() === 'textarea';
          if (!isTextarea) {
            e.preventDefault();
            saveField(fieldEl);
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          exitEdit(fieldEl);
        }
      });
    }

    // Avatar upload handlers
    const avatarInput = $('#avatarInput');
    const avatarImage = $('#avatarImage');
    const avatarUploadBtn = $('#avatarUploadBtn');
    const avatarRemoveBtn = $('#avatarRemoveBtn');
    const avatarOverlayBtn = $('#avatarOverlayBtn');
    const avatarZone = $('#avatarZone .relative');

    const defaultAvatar = avatarImage ? avatarImage.src : '';

    function openFilePicker() {
      if (avatarInput) avatarInput.click();
    }

    function setAvatarFromFile(file) {
      if (!file || !file.type.startsWith('image/')) return;
      const maxBytes = 5 * 1024 * 1024;
      if (file.size > maxBytes) {
        alert('Please choose an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (avatarImage) avatarImage.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }

    if (avatarInput) {
      avatarInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        setAvatarFromFile(file);
        avatarInput.value = '';
      });
    }

    if (avatarUploadBtn) avatarUploadBtn.addEventListener('click', openFilePicker);
    if (avatarOverlayBtn) avatarOverlayBtn.addEventListener('click', openFilePicker);

    if (avatarRemoveBtn) {
      avatarRemoveBtn.addEventListener('click', () => {
        if (avatarImage) avatarImage.src = defaultAvatar;
      });
    }

    // Drag & drop interactions
    if (avatarZone) {
      ['dragenter', 'dragover'].forEach(evt =>
        avatarZone.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          avatarZone.classList.add('ring-2', 'ring-indigo-500/60');
        })
      );
      ['dragleave', 'drop'].forEach(evt =>
        avatarZone.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          avatarZone.classList.remove('ring-2', 'ring-indigo-500/60');
        })
      );
      avatarZone.addEventListener('drop', (e) => {
        const file = e.dataTransfer?.files?.[0];
        setAvatarFromFile(file);
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
<header className="mb-8">
<div className="flex items-center justify-between">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Profile</h1>
<p className="text-sm text-slate-600 mt-1">Manage your personal information.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
<div className="h-2 w-2 rounded-full bg-emerald-500/80 ring-2 ring-emerald-500/20"></div>
<span>All changes are local until saved</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 gap-6">

<section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-slate-900/90">Profile picture</h2>
<span className="text-[11px] text-slate-500">PNG or JPG, up to 5MB</span>
</div>
<div className="mt-4" id="avatarZone">
<div aria-label="Profile image dropzone" className="relative mx-auto w-40 h-40 rounded-full overflow-hidden ring-1 ring-slate-200 bg-slate-100 shadow-inner select-none group">
<img alt="Profile photo" className="w-full h-full object-cover" id="avatarImage" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=640&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3"/>
<input accept="image/*" aria-hidden="true" className="hidden" id="avatarInput" type="file"/>
<button aria-label="Change photo" className="absolute inset-0 flex flex-col items-center justify-center text-center bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" id="avatarOverlayBtn" type="button">
<div className="flex items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 ring-1 ring-slate-200 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="image-plus"></i>
<span>Change</span>
</div>
<span className="mt-2 text-[11px] text-slate-600">Click or drop an image</span>
</button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-slate-50 hover:bg-slate-100 text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 transition-colors" id="avatarUploadBtn" type="button">
<i className="w-4 h-4" data-lucide="upload"></i>
<span>Upload</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-transparent hover:bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:ring-rose-300 hover:text-rose-600 transition-colors" id="avatarRemoveBtn" type="button">
<i className="w-4 h-4" data-lucide="trash-2"></i>
<span>Remove</span>
</button>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm" id="profileFields">
<h2 className="sr-only">Profile details</h2>

<div className="py-4 border-b border-slate-200 last:border-0" data-field="firstName">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
<label className="sm:col-span-3 text-sm text-slate-600 mt-1">First name</label>
<div className="sm:col-span-7">
<div className="text-slate-900" data-role="display">Alex</div>
<div className="hidden" data-role="editor">
<input autocomplete="given-name" className="w-full rounded-md bg-white border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500/70 text-slate-900 placeholder-slate-400 px-3 py-2 text-sm" inputmode="text" placeholder="Enter first name" type="text" value="Alex"/>
<p className="mt-1 text-xs text-rose-500 hidden" data-role="error">Please enter a first name.</p>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<div className="flex items-center gap-2" data-role="actions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="edit" type="button">
<i className="w-4 h-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
<div className="hidden items-center gap-2" data-role="editActions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" data-action="save" type="button">
<i className="w-4 h-4" data-lucide="check"></i>
                  Save
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="cancel" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Cancel
                </button>
</div>
</div>
</div>
</div>

<div className="py-4 border-b border-slate-200 last:border-0" data-field="lastName">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
<label className="sm:col-span-3 text-sm text-slate-600 mt-1">Last name</label>
<div className="sm:col-span-7">
<div className="text-slate-900" data-role="display">Morgan</div>
<div className="hidden" data-role="editor">
<input autocomplete="family-name" className="w-full rounded-md bg-white border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500/70 text-slate-900 placeholder-slate-400 px-3 py-2 text-sm" inputmode="text" placeholder="Enter last name" type="text" value="Morgan"/>
<p className="mt-1 text-xs text-rose-500 hidden" data-role="error">Please enter a last name.</p>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<div className="flex items-center gap-2" data-role="actions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="edit" type="button">
<i className="w-4 h-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
<div className="hidden items-center gap-2" data-role="editActions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" data-action="save" type="button">
<i className="w-4 h-4" data-lucide="check"></i>
                  Save
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="cancel" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Cancel
                </button>
</div>
</div>
</div>
</div>

<div className="py-4 border-b border-slate-200 last:border-0" data-field="email">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
<label className="sm:col-span-3 text-sm text-slate-600 mt-1">Email address</label>
<div className="sm:col-span-7">
<div className="text-slate-900" data-role="display">alex.morgan@example.com</div>
<div className="hidden" data-role="editor">
<input autocomplete="email" className="w-full rounded-md bg-white border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500/70 text-slate-900 placeholder-slate-400 px-3 py-2 text-sm" placeholder="you@domain.com" type="email" value="alex.morgan@example.com"/>
<p className="mt-1 text-xs text-rose-500 hidden" data-role="error">Enter a valid email address.</p>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<div className="flex items-center gap-2" data-role="actions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="edit" type="button">
<i className="w-4 h-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
<div className="hidden items-center gap-2" data-role="editActions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" data-action="save" type="button">
<i className="w-4 h-4" data-lucide="check"></i>
                  Save
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="cancel" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Cancel
                </button>
</div>
</div>
</div>
</div>

<div className="py-4 border-b border-slate-200 last:border-0" data-field="phone">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
<label className="sm:col-span-3 text-sm text-slate-600 mt-1">Phone number</label>
<div className="sm:col-span-7">
<div className="text-slate-900" data-role="display">+1 (415) 555‑0132</div>
<div className="hidden" data-role="editor">
<input autocomplete="tel" className="w-full rounded-md bg-white border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500/70 text-slate-900 placeholder-slate-400 px-3 py-2 text-sm" inputmode="tel" placeholder="+1 415 555 0132" type="tel" value="+1 (415) 555‑0132"/>
<p className="mt-1 text-xs text-rose-500 hidden" data-role="error">Enter a valid phone number.</p>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<div className="flex items-center gap-2" data-role="actions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="edit" type="button">
<i className="w-4 h-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
<div className="hidden items-center gap-2" data-role="editActions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" data-action="save" type="button">
<i className="w-4 h-4" data-lucide="check"></i>
                  Save
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="cancel" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Cancel
                </button>
</div>
</div>
</div>
</div>

<div className="py-4 border-b border-slate-200 last:border-0" data-field="gender">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
<label className="sm:col-span-3 text-sm text-slate-600 mt-1">Gender</label>
<div className="sm:col-span-7">
<div className="text-slate-900" data-role="display">Female</div>
<div className="hidden" data-role="editor">
<input type="hidden" value="Female"/>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 text-sm rounded-md bg-indigo-500/10 text-indigo-700 ring-1 ring-indigo-500/40 hover:ring-indigo-500/60" data-option="Female" type="button">Female</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900" data-option="Male" type="button">Male</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900" data-option="Non-binary" type="button">Non-binary</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-900" data-option="Prefer not to say" type="button">Prefer not to say</button>
</div>
<p className="mt-1 text-xs text-rose-500 hidden" data-role="error">Please select an option.</p>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<div className="flex items-center gap-2" data-role="actions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="edit" type="button">
<i className="w-4 h-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
<div className="hidden items-center gap-2" data-role="editActions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" data-action="save" type="button">
<i className="w-4 h-4" data-lucide="check"></i>
                  Save
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="cancel" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Cancel
                </button>
</div>
</div>
</div>
</div>

<div className="py-4 border-b border-slate-200 last:border-0" data-field="address">
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
<label className="sm:col-span-3 text-sm text-slate-600 mt-1">Address</label>
<div className="sm:col-span-7">
<div className="text-slate-900" data-role="display">221B Baker Street, London NW1 6XE, United Kingdom</div>
<div className="hidden" data-role="editor">
<textarea className="w-full resize-y rounded-md bg-white border-0 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-500/70 text-slate-900 placeholder-slate-400 px-3 py-2 text-sm" placeholder="Enter address" rows="3">221B Baker Street, London NW1 6XE, United Kingdom</textarea>
<p className="mt-1 text-xs text-rose-500 hidden" data-role="error">Please enter an address.</p>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<div className="flex items-center gap-2" data-role="actions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="edit" type="button">
<i className="w-4 h-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
<div className="hidden items-center gap-2" data-role="editActions">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 hover:bg-emerald-500/15" data-action="save" type="button">
<i className="w-4 h-4" data-lucide="check"></i>
                  Save
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" data-action="cancel" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Cancel
                </button>
</div>
</div>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
