import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const stateEmpty = document.getElementById('state-empty');
    const stateSaved = document.getElementById('state-saved');
    const btnStartDesigning = document.getElementById('btn-start-designing');
    const btnEditDesign = document.getElementById('btn-edit-design');
    const btnSaveContinue = document.getElementById('btn-save-continue');
    const editorBanner = document.getElementById('editor-banner');
    const btnEditorSave = document.getElementById('btn-editor-save');
    const btnEditorCancel = document.getElementById('btn-editor-cancel');
    const previewModal = document.getElementById('preview-modal');
    const btnPreview = document.getElementById('btn-preview');
    const btnClosePreview = document.getElementById('btn-close-preview');
    const btnPreviewCloseFooter = document.getElementById('btn-preview-close-footer');
    const savedTimestamp = document.getElementById('saved-timestamp');

    let hasDesign = false;

    function openEditor() {
      editorBanner.classList.remove('hidden');
      editorBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closeEditor() {
      editorBanner.classList.add('hidden');
    }

    function setDesignSaved() {
      hasDesign = true;
      stateEmpty.classList.add('hidden');
      stateSaved.classList.remove('hidden');
      btnSaveContinue.disabled = false;

      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: '2-digit'
      };
      const time = now.toLocaleTimeString([], options);
      savedTimestamp.textContent = `Today, ${time}`;
    }

    btnStartDesigning.addEventListener('click', () => {
      openEditor();
    });

    if (btnEditDesign) {
      btnEditDesign.addEventListener('click', () => {
        openEditor();
      });
    }

    btnEditorSave.addEventListener('click', () => {
      closeEditor();
      setDesignSaved();
    });

    btnEditorCancel.addEventListener('click', () => {
      closeEditor();
    });

    // Preview modal controls
    function openPreview() {
      if (!hasDesign) return;
      previewModal.classList.remove('hidden');
    }

    function closePreview() {
      previewModal.classList.add('hidden');
    }

    if (btnPreview) {
      btnPreview.addEventListener('click', openPreview);
    }
    btnClosePreview.addEventListener('click', closePreview);
    btnPreviewCloseFooter.addEventListener('click', closePreview);
    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) {
        closePreview();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen flex-col">

<header className="border-b border-slate-200 bg-white">
<div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100">
<i className="lucide lucide-arrow-left h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
<nav className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
<span className="cursor-pointer hover:text-slate-700">Email Campaigns</span>
<span>/</span>
<span className="cursor-pointer hover:text-slate-700">Create a campaign</span>
<span>/</span>
<span className="font-medium text-slate-900">Design your email</span>
</nav>
<div className="ml-auto flex items-center gap-3 text-xs sm:text-sm">
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 hover:bg-slate-50">
<span>Load Automation</span>
<i className="lucide lucide-external-link h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:flex-row">

<aside className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:w-1/3 xl:w-1/4">
<h2 className="mb-4 text-base font-semibold tracking-tight text-slate-900">
            Create a Campaign
          </h2>
<div className="flex gap-4">

<div className="flex flex-1 flex-col gap-4">

<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-medium text-white">
                  1
                </div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                    Campaign Setup
                  </div>
<p className="text-sm text-slate-500">
                    Configure your email campaign settings.
                  </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#644C98] text-xs font-medium text-white">
                  2
                </div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                    Design your email
                  </div>
<p className="text-sm text-slate-500">
                    Choose a template or create from scratch.
                  </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600">
                  3
                </div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                    Prospects
                  </div>
<p className="text-sm text-slate-500">
                    Choose your target audience for this campaign.
                  </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600">
                  4
                </div>
<div className="flex-1">
<div className="text-sm font-semibold text-slate-900">
                    Review &amp; send
                  </div>
<p className="text-sm text-slate-500">
                    Final review before sending your campaign.
                  </p>
</div>
</div>
</div>

<div className="relative hidden w-1 rounded-full bg-slate-200 lg:block">
<div className="absolute inset-x-0 top-0 rounded-full bg-emerald-500" style={{height: '25%'}}></div>
<div className="absolute inset-x-0 top-1/4 rounded-full bg-[#644C98]" style={{height: '25%'}}></div>
</div>
</div>
</aside>

<section className="flex w-full flex-1 flex-col rounded-xl border border-slate-200 bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-6 lg:w-2/3 xl:w-3/4">
<div className="mb-4 flex items-start justify-between gap-3 sm:mb-6">
<div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                Design Your Email
              </h1>
<p className="mt-1 text-sm text-slate-500">
                Step 2 of 4 · Create and manage the email your audience will receive.
              </p>
</div>
</div>

<div className="flex flex-1 flex-col gap-6 rounded-lg bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:gap-8 sm:p-6" id="state-empty">

<div className="flex w-full flex-1 items-center justify-center">
<div className="relative w-full max-w-md rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4 shadow-sm">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#644C98]/10 text-[#644C98]">
<i className="lucide lucide-mail h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-xs font-medium text-slate-700">
                      Email canvas
                    </span>
</div>
<div className="flex gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
</div>
</div>
<div className="space-y-2 rounded-md border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between gap-2">
<div className="h-2 w-1/3 rounded bg-slate-100"></div>
<div className="flex gap-1.5">
<span className="h-2 w-6 rounded bg-slate-100"></span>
<span className="h-2 w-6 rounded bg-slate-100"></span>
<span className="h-2 w-6 rounded bg-[#644C98]/20"></span>
</div>
</div>
<div className="h-16 rounded-md bg-slate-50"></div>
<div className="grid grid-cols-3 gap-1.5">
<div className="h-10 rounded bg-slate-50"></div>
<div className="h-10 rounded bg-slate-50"></div>
<div className="h-10 rounded bg-slate-50"></div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-16 w-16 rounded-full bg-[#644C98]/10 sm:block"></div>
</div>
</div>

<div className="w-full max-w-md space-y-4">
<p className="text-sm text-slate-600">
                Start building the email your audience will remember. Choose from curated templates or design your own with our easy-to-use editor.
              </p>
<div className="flex flex-col gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#644C98] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#543f81] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#644C98] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50" id="btn-start-designing">
<span>Start Designing</span>
<i className="lucide lucide-arrow-right h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
<p className="text-xs text-slate-500">
                  You can always change your design later before sending.
                </p>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="state-saved">
<div className="mb-4">
<h2 className="text-base font-semibold tracking-tight text-slate-900">
                Your Email Design
              </h2>
<p className="mt-1 text-sm text-slate-500">
                You have successfully created an email design for this campaign. Preview or make changes anytime.
              </p>
</div>

<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-black/5 sm:flex-row sm:items-stretch sm:p-5" style={{boxShadow: '0 2px 6px rgba(0,0,0,0.08)'}}>

<div className="w-full sm:w-1/3">
<div className="relative h-full min-h-[120px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100"></div>
<div className="relative m-3 rounded-md border border-slate-200 bg-white p-2">
<div className="mb-1 h-1.5 w-1/3 rounded bg-slate-100"></div>
<div className="mb-1 h-1.5 w-1/4 rounded bg-slate-100"></div>
<div className="mt-2 h-6 rounded bg-slate-50"></div>
<div className="mt-1 h-3 rounded bg-slate-50"></div>
<div className="mt-3 grid grid-cols-3 gap-1">
<div className="h-6 rounded bg-slate-50"></div>
<div className="h-6 rounded bg-slate-50"></div>
<div className="h-6 rounded bg-slate-50"></div>
</div>
</div>
<div className="pointer-events-none absolute -right-4 -bottom-4 h-14 w-14 rounded-full bg-[#644C98]/10"></div>
</div>
</div>

<div className="flex w-full flex-1 flex-col justify-between gap-3 sm:w-2/3 sm:pl-2">
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Saved Design
                    </h3>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-700">
<span className="mr-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Ready
                    </span>
</div>
<p className="mt-1 text-xs text-slate-500">
                    Last updated: <span id="saved-timestamp">Today, 3:42 PM</span>
</p>
<p className="mt-2 text-sm text-slate-600">
                    Click preview to view the email you created, or edit the design before sending this campaign.
                  </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-0" id="btn-preview">
<i className="lucide lucide-eye h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>Preview</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#644C98] px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#543f81] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#644C98] focus-visible:ring-offset-0" id="btn-edit-design">
<i className="lucide lucide-pencil-line h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>Edit Design</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 hidden rounded-lg border border-slate-200 bg-slate-900 text-slate-50" id="editor-banner">
<div className="flex items-center justify-between gap-3 px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#644C98]/20 text-[#644C98]">
<i className="lucide lucide-layout-template h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">
                    Email Editor (Simulation)
                  </p>
<p className="text-xs text-slate-300">
                    Imagine the full editor experience here. Make some changes, then save to return.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-600" id="btn-editor-save">
<i className="lucide lucide-save h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Save Design</span>
</button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-500 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800" id="btn-editor-cancel">
<span>Cancel</span>
</button>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Back
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-[#644C98] bg-[#644C98] px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#543f81] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#644C98] focus-visible:ring-offset-2 disabled:border-slate-200 disabled:bg-white disabled:text-slate-400 disabled:shadow-none disabled:hover:bg-white" disabled="" id="btn-save-continue">
<span>Save &amp; Continue</span>
<i className="lucide lucide-arrow-right h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</section>
</div>
</main>
</div>

<div aria-hidden="true" className="fixed inset-0 z-40 hidden items-center justify-center bg-slate-900/40 px-4 py-8 sm:px-6" id="preview-modal">
<div className="relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
            Email Preview
          </h3>
<p className="mt-0.5 text-xs text-slate-500">
            This is how your email will appear in most inboxes.
          </p>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50" id="btn-close-preview">
<i className="lucide lucide-x h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex-1 overflow-auto bg-slate-50 px-4 py-4 sm:px-6">
<div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-slate-200 bg-white">
<div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
<p className="text-xs font-medium text-slate-700">Your Brand</p>
<p className="mt-1 text-xs text-slate-500">
              Subject: Welcome to our latest campaign launch
            </p>
</div>
<div className="space-y-4 px-5 py-5">
<div className="h-8 w-32 rounded bg-slate-100"></div>
<div className="space-y-2">
<div className="h-2.5 w-11/12 rounded bg-slate-100"></div>
<div className="h-2.5 w-10/12 rounded bg-slate-100"></div>
<div className="h-2.5 w-9/12 rounded bg-slate-100"></div>
</div>
<div className="h-32 rounded bg-slate-100"></div>
<div className="space-y-2">
<div className="h-2.5 w-10/12 rounded bg-slate-100"></div>
<div className="h-2.5 w-8/12 rounded bg-slate-100"></div>
</div>
<div className="flex gap-3">
<div className="h-8 flex-1 rounded-full bg-[#644C98]/80"></div>
<div className="h-8 flex-1 rounded-full bg-slate-100"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 sm:px-5">
<p className="text-xs text-slate-500">
          Need changes? Close this preview and edit your design.
        </p>
<button className="inline-flex items-center justify-center rounded-full bg-[#644C98] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#543f81]" id="btn-preview-close-footer">
          Close
        </button>
</div>
</div>
</div>


    </>
  );
}
