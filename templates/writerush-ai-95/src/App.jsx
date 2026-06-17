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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="mb-20 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-2xl">
<div className="flex h-[40rem] w-full">

<aside className="flex w-60 flex-col border-r border-[#E5E7EB] bg-[#F9FAFB]">
<div className="flex h-12 items-center justify-between border-b border-[#E5E7EB] bg-[#26292C] px-3 text-white">
<span className="text-xs font-semibold uppercase tracking-widest">Elementor</span>
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="p-4">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-sm font-semibold text-[#1A1A1A]">Edit Text Editor</h2>
<div className="flex gap-1">
<iconify-icon className="text-[#6B7280]" icon="solar:settings-linear"></iconify-icon>
<iconify-icon className="text-[#6B7280]" icon="solar:question-square-linear"></iconify-icon>
</div>
</div>

<div className="mb-4 rounded-lg border border-[#E5E7EB] bg-white p-3 shadow-sm">
<div className="mb-3 flex items-center justify-between">
<span className="text-[0.625rem] font-medium uppercase tracking-widest text-[#6B7280]">Content</span>
<button className="flex items-center gap-1 rounded-full bg-[#7B2FBE] px-3 py-1 text-xs font-semibold text-white transition-transform hover:scale-105">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                                WriteRush
                            </button>
</div>
<div className="h-32 w-full rounded border border-[#E5E7EB] bg-[#F9FAFB] p-2 text-[0.68rem] text-[#6B7280]">
                            Start typing your content here or use WriteRush to generate...
                        </div>
</div>
</div>
</aside>

<main className="relative flex-1 bg-[#F1F3F5]">
<div className="flex h-full items-center justify-center">
<div className="h-[80%] w-[90%] bg-white p-12 shadow-sm">
<h1 className="mb-4 text-3xl font-semibold tracking-tight">Main Page Title</h1>
<p className="text-sm leading-relaxed text-[#6B7280]">Select this text block to activate WriteRush AI features in the sidebar panel.</p>
</div>
</div>

<div className="absolute left-4 top-24 w-[23.75rem] overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
<div className="flex h-10 items-center justify-between bg-[#7B2FBE] px-4 text-white">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">✦ WriteRush</span>
</div>
<iconify-icon className="cursor-pointer text-lg opacity-80 hover:opacity-100" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="p-1">

<div className="group flex h-12 cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-[#F3EBFF]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#7B2FBE]" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-sm font-medium text-[#1A1A1A]">Write</span>
</div>
<iconify-icon className="text-xs text-[#7B2FBE]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<div className="group flex h-12 cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-[#F3EBFF]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#7B2FBE]" icon="solar:restart-linear"></iconify-icon>
<span className="text-sm font-medium text-[#1A1A1A]">Rewrite</span>
</div>
<iconify-icon className="text-xs text-[#7B2FBE]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<div className="group flex h-12 cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-[#F3EBFF]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#7B2FBE]" icon="solar:play-linear"></iconify-icon>
<span className="text-sm font-medium text-[#1A1A1A]">Keep Writing</span>
</div>
<iconify-icon className="text-xs text-[#7B2FBE]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<div className="group flex h-12 cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-[#F3EBFF]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#7B2FBE]" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium text-[#1A1A1A]">Summarize</span>
</div>
<iconify-icon className="text-xs text-[#7B2FBE]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<hr className="mx-2 my-1 border-[#E5E7EB]"/>

<div className="group flex h-12 cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-[#F3EBFF]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#7B2FBE]" icon="solar:gallery-linear"></iconify-icon>
<span className="text-sm font-medium text-[#1A1A1A]">Generate Image</span>
</div>
<iconify-icon className="text-xs text-[#7B2FBE]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-end bg-[#F9FAFB] p-3">
<div className="rounded bg-[#F3EBFF] px-2 py-0.5 text-[0.625rem] font-semibold text-[#7B2FBE]">
                            💎 285 credits remaining
                        </div>
</div>
</div>
</main>
</div>
</div>

<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

<div className="w-[23.75rem] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-[#E5E7EB]">
<div className="flex h-12 items-center justify-between bg-[#7B2FBE] px-4 text-white">
<iconify-icon className="cursor-pointer text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Rewrite Content</span>
<iconify-icon className="cursor-pointer text-lg opacity-80" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="p-4">
<div className="mb-4">
<label className="mb-1.5 block text-[0.625rem] font-medium uppercase tracking-[0.08em] text-[#6B7280]">Your Text</label>
<div className="relative rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-xs leading-relaxed text-[#374151]">
<div className="max-h-20 overflow-y-auto hide-scrollbar">
                            WriteRush is an advanced AI writing assistant designed specifically for WordPress users who use the Elementor page builder...
                        </div>
<div className="absolute bottom-2 right-2 flex gap-1">
<span className="rounded-full bg-[#F3EBFF] px-2 py-0.5 text-[0.625rem] font-medium text-[#7B2FBE]">Medium Tier</span>
<span className="rounded-full bg-[#F3EBFF] px-2 py-0.5 text-[0.625rem] font-medium text-[#7B2FBE]">542 words</span>
</div>
</div>
</div>
<div className="mb-4">
<label className="mb-1.5 block text-[0.625rem] font-medium uppercase tracking-[0.08em] text-[#6B7280]">Your Prompt *</label>
<textarea className="w-full h-20 rounded-lg border border-[#E5E7EB] p-3 text-[13px] outline-none transition-all focus:border-[#7B2FBE] focus:ring-4 focus:ring-[#7B2FBE]/10" placeholder="Describe how to rewrite this content..."></textarea>
</div>
<div className="mb-4 rounded-lg border border-[#E5E7EB] p-3">
<div className="flex cursor-pointer items-center justify-between">
<span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">⚙ Settings</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<select className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1.5 text-xs outline-none focus:border-[#7B2FBE]">
<option>Conversational</option>
<option>Professional</option>
</select>
<select className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1.5 text-xs outline-none focus:border-[#7B2FBE]">
<option>English (US)</option>
</select>
<select className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1.5 text-xs outline-none focus:border-[#7B2FBE]">
<option>Medium — 10 credits</option>
<option>Long — 15 credits</option>
</select>
<select className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1.5 text-xs outline-none focus:border-[#7B2FBE]">
<option>Brand Default</option>
</select>
</div>
</div>
<div className="rounded-lg bg-[#F3EBFF] p-3">
<div className="mb-1 flex justify-between text-[0.7rem]">
<span className="text-[#374151]">This action</span>
<span className="font-semibold text-[#7B2FBE]">10 credits</span>
</div>
<div className="mb-3 flex justify-between text-[0.7rem] text-[#6B7280]">
<span>After generation</span>
<span>275 remaining</span>
</div>
<div className="h-1 w-full rounded-full bg-[#E5E7EB]">
<div className="h-1 w-3/4 rounded-full bg-[#7B2FBE]"></div>
</div>
</div>
</div>
<div className="flex gap-2 border-t border-[#E5E7EB] p-3">
<button className="flex-1 rounded-lg border border-[#E5E7EB] py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB]">Cancel</button>
<button className="flex-1 rounded-lg bg-[#7B2FBE] py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
<iconify-icon className="mr-1 inline-block align-middle" icon="solar:magic-stick-3-linear"></iconify-icon>
                    Generate
                </button>
</div>
</div>

<div className="w-[23.75rem] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-[#E5E7EB]">
<div className="flex h-12 items-center justify-between bg-[#7B2FBE] px-4 text-white">
<iconify-icon className="text-lg opacity-50" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Generating...</span>
<iconify-icon className="text-lg opacity-50" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center justify-center p-12 text-center">
<iconify-icon className="animate-spin text-3xl text-[#7B2FBE]" icon="solar:restart-linear"></iconify-icon>
<h3 className="mt-4 text-sm font-medium text-[#374151]">Generating your content...</h3>
<p className="text-xs text-[#9CA3AF]">This may take 10-15 seconds</p>
<div className="mt-8 w-full space-y-3">
<div className="shimmer h-2 w-full rounded"></div>
<div className="shimmer h-2 w-5/6 rounded"></div>
<div className="shimmer h-2 w-4/6 rounded"></div>
</div>
</div>
<div className="flex gap-2 border-t border-[#E5E7EB] p-3">
<button className="w-full cursor-not-allowed rounded-lg bg-[#7B2FBE]/50 py-2 text-sm font-medium text-white">Please wait...</button>
</div>
</div>

<div className="w-[23.75rem] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-[#E5E7EB]">
<div className="flex h-12 items-center justify-between bg-[#7B2FBE] px-4 text-white">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">✨ Generated Content</span>
<iconify-icon className="text-lg opacity-80" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="p-4">
<div className="relative mb-6 rounded-lg border border-[#E5E7EB] bg-white p-4">
<div className="max-h-48 overflow-y-auto text-sm leading-[1.6] text-[#1A1A1A]">
                        WriteRush is the definitive AI solution for WordPress creators. Built for the Elementor ecosystem, it empowers you to transform ideas into polished prose without leaving your editor. Whether you need a quick rewrite or a full article, the AI understands your context and maintains your brand's unique voice.
                    </div>
<span className="absolute right-2 top-2 rounded bg-[#F3EBFF] px-2 py-0.5 text-[0.625rem] font-medium text-[#7B2FBE]">487 words</span>
</div>
<div className="mb-4">
<span className="mb-2 block text-xs text-[#6B7280]">🔄 Not satisfied? Regenerate</span>
<input className="mb-1.5 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-xs outline-none focus:border-[#7B2FBE]" placeholder="Describe changes (optional)..." type="text"/>
<p className="mb-3 text-[0.68rem] text-[#9CA3AF]">Regenerating will use 5 credits</p>
<button className="w-full rounded-md border border-[#7B2FBE] py-2 text-xs font-medium text-[#7B2FBE] hover:bg-[#F3EBFF]">🔄 Regenerate</button>
</div>
</div>
<div className="flex gap-2 border-t border-[#E5E7EB] p-3">
<button className="flex-[0.4] rounded-lg border border-[#E5E7EB] py-2 text-sm font-medium text-[#6B7280]">Cancel</button>
<button className="flex-[0.6] rounded-lg bg-[#7B2FBE] py-2 text-sm font-medium text-white shadow-md">Insert Text ✅</button>
</div>
</div>

<div className="w-[23.75rem] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-[#E5E7EB]">
<div className="flex h-12 items-center justify-between bg-[#7B2FBE] px-4 text-white">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">🖼 Generate Image</span>
<iconify-icon className="text-lg opacity-80" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="space-y-4 p-4">
<div>
<label className="mb-1 block text-[0.625rem] font-medium uppercase tracking-widest text-[#6B7280]">Describe the Image *</label>
<div className="relative">
<textarea className="h-24 w-full rounded-lg border border-[#E5E7EB] p-3 text-xs outline-none focus:border-[#7B2FBE]" placeholder="A modern office with purple neon lighting and plants..."></textarea>
<span className="absolute bottom-2 right-2 text-[10px] text-[#9CA3AF]">0/1000</span>
</div>
</div>
<div>
<label className="mb-1 block text-[0.625rem] font-medium uppercase tracking-widest text-[#6B7280]">Image Style</label>
<select className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-xs outline-none focus:border-[#7B2FBE]">
<option>Realistic</option>
<option>3D Render</option>
<option>Cinematic</option>
</select>
</div>
<div>
<label className="mb-1 block text-[0.625rem] font-medium uppercase tracking-widest text-[#6B7280]">Image Size</label>
<div className="flex gap-2">
<button className="flex-1 rounded-md bg-[#7B2FBE] py-2 text-[0.7rem] font-medium text-white">Square</button>
<button className="flex-1 rounded-md border border-[#E5E7EB] py-2 text-[0.7rem] font-medium text-[#6B7280]">Landscape</button>
<button className="flex-1 rounded-md border border-[#E5E7EB] py-2 text-[0.7rem] font-medium text-[#6B7280]">Portrait</button>
</div>
</div>
<div className="rounded-lg bg-[#F3EBFF] p-3 text-center text-[0.7rem] font-semibold text-[#7B2FBE]">
                    This action: 10 credits
                </div>
</div>
<div className="flex gap-2 border-t border-[#E5E7EB] p-3">
<button className="flex-1 rounded-lg border border-[#E5E7EB] py-2 text-sm font-medium text-[#6B7280]">Cancel</button>
<button className="flex-1 rounded-lg bg-[#7B2FBE] py-2 text-sm font-medium text-white">Generate Image</button>
</div>
</div>

<div className="w-[23.75rem] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-[#E5E7EB]">
<div className="flex h-12 items-center justify-between bg-[#7B2FBE] px-4 text-white">
<span className="text-sm font-semibold tracking-tight">Notifications &amp; Errors</span>
</div>
<div className="space-y-3 p-4">

<div className="rounded-lg border border-[#FECACA] bg-[#FEF2F2] p-3 text-xs text-[#DC2626]">
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-base" icon="solar:danger-linear"></iconify-icon>
<div>
<p className="font-semibold">You've run out of credits.</p>
<p className="mb-2">Purchase more to continue generating content.</p>
<a className="font-bold underline" href="#">Buy Credits →</a>
</div>
</div>
</div>

<div className="rounded-lg border border-[#FDE68A] bg-[#FFFBEB] p-3 text-xs text-[#92400E]">
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-base" icon="solar:shield-warning-linear"></iconify-icon>
<div>
<p className="font-semibold">License not activated.</p>
<a className="font-bold underline" href="#">Activate License →</a>
</div>
</div>
</div>

<div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-xs text-[#6B7280]">
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-base" icon="solar:info-circle-linear"></iconify-icon>
<p>Selection is 1,243 words. Max is 1,000 words. Please reduce your selection.</p>
</div>
</div>

<div className="flex items-center gap-2 rounded-lg bg-[#10B981] p-3 text-xs font-medium text-white shadow-md">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
                    Content inserted successfully
                </div>
</div>
</div>
</div>

    </>
  );
}
