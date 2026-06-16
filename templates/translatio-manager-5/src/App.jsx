import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-zinc-50 border-r border-zinc-200 flex flex-col flex-shrink-0">
<div className="h-14 flex items-center px-5 border-b border-zinc-200/50">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center text-white">
<span className="font-bold text-[10px] tracking-tight">T</span>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-900">TRANSLATE</span>
</div>
</div>
<div className="p-3 space-y-6 flex-1 overflow-y-auto">

<div className="space-y-0.5">
<button className="w-full flex items-center gap-2.5 px-3 py-1.5 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-md">
<iconify-icon className="text-zinc-500" height="16" icon="lucide:languages" strokeWidth="1.5" width="16"></iconify-icon>
                    Translations
                </button>
<button className="w-full flex items-center gap-2.5 px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors">
<iconify-icon className="text-zinc-400" height="16" icon="lucide:book" strokeWidth="1.5" width="16"></iconify-icon>
                    Glossary
                </button>
<button className="w-full flex items-center gap-2.5 px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors">
<iconify-icon className="text-zinc-400" height="16" icon="lucide:git-pull-request" strokeWidth="1.5" width="16"></iconify-icon>
                    Sync Status
                </button>
</div>

<div>
<h3 className="px-3 text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">Projects</h3>
<div className="space-y-0.5">
<button className="w-full flex items-center justify-between px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            Core App
                        </span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-500">24</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Marketing
                        </span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-500">12</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Dashboard
                        </span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-500">5</span>
</button>
</div>
</div>

<div>
<h3 className="px-3 text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-2">Completion</h3>
<div className="px-3">
<div className="flex items-center justify-between text-xs mb-1.5">
<span className="text-zinc-600 font-medium">Japanese</span>
<span className="text-zinc-500">84%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[84%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-200">
<button className="flex items-center gap-3 w-full px-2 py-1.5 rounded-md hover:bg-zinc-100 transition-colors">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400"></div>
<div className="text-left">
<p className="text-xs font-medium text-zinc-900">Engineering</p>
<p className="text-[10px] text-zinc-500">admin@company.com</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-14 flex items-center justify-between px-6 border-b border-zinc-200 flex-shrink-0 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-4">
<h1 className="font-medium text-sm text-zinc-900">All Keys</h1>
<div className="h-4 w-px bg-zinc-200"></div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600">Total: 432</span>
<span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200/50 text-amber-700">Missing: 12</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-600" height="14" icon="lucide:search" width="14"></iconify-icon>
<input className="h-8 pl-8 pr-3 text-xs bg-zinc-50 border border-zinc-200 rounded-md w-64 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-200 transition-all placeholder:text-zinc-400" placeholder="Search keys or text..." type="text"/>
</div>
<button className="h-8 px-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-md shadow-sm flex items-center gap-1.5 transition-colors">
<iconify-icon height="14" icon="lucide:plus" width="14"></iconify-icon>
                    Add Key
                </button>
</div>
</header>

<div className="px-6 py-3 border-b border-zinc-100 flex items-center gap-2 flex-shrink-0">
<button className="px-3 py-1 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md border border-zinc-200/50">All</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors">Missing JA</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors">Updated Recently</button>
<div className="flex-1"></div>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<iconify-icon height="14" icon="lucide:filter" width="14"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-auto no-scrollbar relative">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead className="bg-zinc-50/90 sticky top-0 z-10 backdrop-blur-sm border-b border-zinc-200">
<tr>
<th className="py-3 pl-6 pr-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[15%]">Key</th>
<th className="py-3 px-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[15%]">Context</th>
<th className="py-3 px-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[20%]">English</th>
<th className="py-3 px-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[20%]">Japanese</th>
<th className="py-3 px-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[10%]">Feature</th>
<th className="py-3 px-4 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[10%]">Link UI</th>
<th className="py-3 pr-6 text-[11px] font-medium text-zinc-400 uppercase tracking-wider w-[10%] text-right">Places</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="py-3 pl-6 pr-4 align-top">
<span className="font-mono text-xs text-zinc-700 font-medium block truncate" title="auth.login.title">auth.login.title</span>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[11px] text-zinc-500 leading-snug block">Header for the main login modal window</span>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-600 leading-relaxed">Sign in to your account</p>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-900 leading-relaxed">アカウントにサインイン</p>
</td>
<td className="py-3 px-4 align-top">
<span className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-[10px] font-medium text-zinc-500">Authentication</span>
</td>
<td className="py-3 px-4 align-top">
<a className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 hover:border-indigo-200 px-2 py-0.5 rounded w-fit transition-colors" href="#">
<iconify-icon height="12" icon="lucide:monitor" width="12"></iconify-icon>
                                Screen
                            </a>
</td>
<td className="py-3 pr-6 align-top text-right">
<div className="flex items-center justify-end gap-1.5 text-zinc-400" title="src/components/auth/LoginModal.tsx">
<iconify-icon height="12" icon="lucide:code-2" width="12"></iconify-icon>
<span className="text-[10px] font-mono">2 files</span>
</div>
</td>
</tr>

<tr className="group hover:bg-amber-50/30 transition-colors">
<td className="py-3 pl-6 pr-4 align-top">
<div className="flex items-center gap-2">
<span className="font-mono text-xs text-zinc-700 font-medium truncate" title="billing.invoice.overdue">billing.inv.overdue</span>
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
</div>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[11px] text-zinc-500 leading-snug block">Email subject line for unpaid invoices</span>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-600 leading-relaxed">Your invoice is overdue</p>
</td>
<td className="py-3 px-4 align-top">
<div className="flex items-center gap-2">
<span className="text-xs text-amber-600 italic">Missing translation</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<span className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-[10px] font-medium text-zinc-500">Billing</span>
</td>
<td className="py-3 px-4 align-top">
<a className="flex items-center gap-1.5 text-[10px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 px-2 py-0.5 rounded w-fit transition-colors" href="#">
<iconify-icon height="12" icon="lucide:mail" width="12"></iconify-icon>
                                Email
                            </a>
</td>
<td className="py-3 pr-6 align-top text-right">
<div className="flex items-center justify-end gap-1.5 text-zinc-400">
<iconify-icon height="12" icon="lucide:code-2" width="12"></iconify-icon>
<span className="text-[10px] font-mono">1 file</span>
</div>
</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="py-3 pl-6 pr-4 align-top">
<span className="font-mono text-xs text-zinc-700 font-medium block truncate" title="settings.security.mfa">settings.sec.mfa</span>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[11px] text-zinc-500 leading-snug block">Security settings page toggle description</span>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-600 leading-relaxed">Enable <span className="text-indigo-600 underline decoration-dotted underline-offset-2 cursor-help" title="Glossary: Multi-Factor Authentication">MFA</span> for better security</p>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-900 leading-relaxed">セキュリティ向上のため多要素認証を有効にする</p>
</td>
<td className="py-3 px-4 align-top">
<span className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-[10px] font-medium text-zinc-500">Settings</span>
</td>
<td className="py-3 px-4 align-top">
<a className="flex items-center gap-1.5 text-[10px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 px-2 py-0.5 rounded w-fit transition-colors" href="#">
<iconify-icon height="12" icon="lucide:settings-2" width="12"></iconify-icon>
                                Panel
                            </a>
</td>
<td className="py-3 pr-6 align-top text-right">
<div className="flex items-center justify-end gap-1.5 text-zinc-400">
<iconify-icon height="12" icon="lucide:code-2" width="12"></iconify-icon>
<span className="text-[10px] font-mono">4 files</span>
</div>
</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="py-3 pl-6 pr-4 align-top">
<span className="font-mono text-xs text-zinc-700 font-medium block truncate">common.act.save</span>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[11px] text-zinc-500 leading-snug block">Primary submit button label</span>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-600 leading-relaxed">Save Changes</p>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-900 leading-relaxed">変更を保存</p>
</td>
<td className="py-3 px-4 align-top">
<span className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-[10px] font-medium text-zinc-500">Shared</span>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[10px] text-zinc-400 italic">N/A</span>
</td>
<td className="py-3 pr-6 align-top text-right">
<div className="flex items-center justify-end gap-1.5 text-zinc-400">
<iconify-icon height="12" icon="lucide:code-2" width="12"></iconify-icon>
<span className="text-[10px] font-mono">42 files</span>
</div>
</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="py-3 pl-6 pr-4 align-top">
<span className="font-mono text-xs text-zinc-700 font-medium block truncate">common.act.cancel</span>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[11px] text-zinc-500 leading-snug block">Secondary action button label</span>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-600 leading-relaxed">Cancel</p>
</td>
<td className="py-3 px-4 align-top">
<p className="text-xs text-zinc-900 leading-relaxed">キャンセル</p>
</td>
<td className="py-3 px-4 align-top">
<span className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-[10px] font-medium text-zinc-500">Shared</span>
</td>
<td className="py-3 px-4 align-top">
<span className="text-[10px] text-zinc-400 italic">N/A</span>
</td>
<td className="py-3 pr-6 align-top text-right">
<div className="flex items-center justify-end gap-1.5 text-zinc-400">
<iconify-icon height="12" icon="lucide:code-2" width="12"></iconify-icon>
<span className="text-[10px] font-mono">38 files</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-3 border-t border-zinc-200 flex items-center justify-between bg-zinc-50 flex-shrink-0">
<span className="text-xs text-zinc-400">Showing 1-20 of 432 keys</span>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 rounded text-xs font-medium transition-colors disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1.5 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 rounded text-xs font-medium transition-colors">Next</button>
</div>
</div>
</main>

<aside className="w-72 bg-white border-l border-zinc-200 hidden xl:flex flex-col flex-shrink-0">
<div className="h-14 flex items-center justify-between px-4 border-b border-zinc-200">
<span className="font-medium text-xs text-zinc-900">Glossary Reference</span>
<button className="text-zinc-400 hover:text-zinc-600">
<iconify-icon height="14" icon="lucide:external-link" width="14"></iconify-icon>
</button>
</div>
<div className="p-4 space-y-4 overflow-y-auto flex-1">
<div className="p-3 bg-zinc-50 rounded-md border border-zinc-100 group hover:border-zinc-200 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-xs text-zinc-900">MFA</span>
<span className="text-[10px] text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded">14 uses</span>
</div>
<p className="text-[11px] text-zinc-500 mb-2 leading-relaxed">Multi-Factor Authentication. Should always be translated as "多要素認証" in JA.</p>
<div className="flex gap-2 text-[10px]">
<span className="text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">Correct</span>
<span className="text-zinc-400 line-through">2FA</span>
</div>
</div>
<div className="p-3 bg-zinc-50 rounded-md border border-zinc-100 group hover:border-zinc-200 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-xs text-zinc-900">Workspace</span>
<span className="text-[10px] text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded">82 uses</span>
</div>
<p className="text-[11px] text-zinc-500 mb-2 leading-relaxed">The main container for user projects. Keep as "ワークスペース" (Katakana).</p>
</div>
<div className="p-3 bg-zinc-50 rounded-md border border-zinc-100 group hover:border-zinc-200 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-xs text-zinc-900">Organization</span>
<span className="text-[10px] text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded">41 uses</span>
</div>
<p className="text-[11px] text-zinc-500 mb-2 leading-relaxed">Top level entity. Translate as "組織" (Soshiki), not "会社" (Kaisha).</p>
</div>
</div>
<div className="p-4 border-t border-zinc-200 bg-zinc-50/50">
<button className="w-full py-1.5 text-xs text-zinc-600 font-medium border border-zinc-200 bg-white hover:bg-zinc-50 rounded shadow-sm transition-colors">
                Manage Terms
            </button>
</div>
</aside>

    </>
  );
}
