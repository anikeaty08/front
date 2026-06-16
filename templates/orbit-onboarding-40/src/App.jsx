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
      

<header className="md:hidden flex items-center justify-between p-6 border-b border-white/5">
<div className="text-white font-semibold tracking-tighter text-lg">ORBIT</div>
<button className="text-zinc-400 hover:text-white">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</header>

<aside className="hidden md:flex flex-col w-72 h-screen border-r border-white/5 bg-[#080808] relative z-10">
<div className="p-8">
<div className="text-white font-semibold tracking-tighter text-xl mb-12">ORBIT</div>
<nav className="space-y-1 relative">

<div className="absolute left-[11px] top-3 bottom-3 w-[1px] bg-zinc-800"></div>

<div className="relative flex items-start gap-4 group">
<div className="relative z-10 w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 ring-4 ring-[#080808]">
<span className="iconify text-black" data-height="14" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</div>
<div className="pb-8">
<p className="text-sm font-medium text-white">Account</p>
<p className="text-xs text-zinc-500 mt-1">Credentials &amp; basic info</p>
</div>
</div>

<div className="relative flex items-start gap-4">
<div className="relative z-10 w-6 h-6 rounded-full border border-white bg-[#080808] flex items-center justify-center shrink-0 ring-4 ring-[#080808]">
<div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
</div>
<div className="pb-8">
<p className="text-sm font-medium text-white">Workspace</p>
<p className="text-xs text-zinc-500 mt-1">Customize your environment</p>
</div>
</div>

<div className="relative flex items-start gap-4 opacity-40">
<div className="relative z-10 w-6 h-6 rounded-full border border-zinc-700 bg-[#080808] flex items-center justify-center shrink-0 ring-4 ring-[#080808]"></div>
<div className="pb-8">
<p className="text-sm font-medium text-zinc-400">Integration</p>
<p className="text-xs text-zinc-500 mt-1">Connect your tools</p>
</div>
</div>
</nav>
</div>
<div className="mt-auto p-8 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-white text-xs font-medium">
                    JD
                </div>
<div>
<p className="text-xs font-medium text-white">John Doe</p>
<p className="text-xs text-zinc-500">Free Plan</p>
</div>
<button className="ml-auto text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:settings" data-width="16"></span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-y-auto">

<div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none"></div>
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="w-full max-w-2xl mx-auto p-6 md:p-12 lg:p-20 z-10 flex flex-col justify-center min-h-screen md:min-h-0 md:h-full">
<div className="mb-10">
<h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-3">How do you plan to use Orbit?</h1>
<p className="text-base text-zinc-400 font-light leading-relaxed">We'll streamline your setup experience accordingly. You can change this later.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

<label className="group cursor-pointer relative">
<input checked="" className="peer sr-only" name="usage" type="radio"/>
<div className="absolute inset-0 border border-white/10 rounded-xl peer-checked:border-white/40 transition-all duration-300 pointer-events-none"></div>
<div className="absolute inset-0 bg-white/0 peer-checked:bg-white/[0.02] rounded-xl transition-all duration-300 pointer-events-none"></div>
<div className="p-5 h-full rounded-xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors border border-transparent">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-400 peer-checked:text-white peer-checked:bg-white/10 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-1">Developer</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Deploy projects, manage APIs, and configure webhooks directly.</p>
</div>

<div className="absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity text-white">
<span className="iconify" data-height="18" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="usage" type="radio"/>
<div className="absolute inset-0 border border-white/10 rounded-xl peer-checked:border-white/40 transition-all duration-300 pointer-events-none"></div>
<div className="absolute inset-0 bg-white/0 peer-checked:bg-white/[0.02] rounded-xl transition-all duration-300 pointer-events-none"></div>
<div className="p-5 h-full rounded-xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors border border-transparent">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-1">Designer</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Collaborate on UI components, manage assets, and review builds.</p>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="usage" type="radio"/>
<div className="absolute inset-0 border border-white/10 rounded-xl peer-checked:border-white/40 transition-all duration-300 pointer-events-none"></div>
<div className="absolute inset-0 bg-white/0 peer-checked:bg-white/[0.02] rounded-xl transition-all duration-300 pointer-events-none"></div>
<div className="p-5 h-full rounded-xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors border border-transparent">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-1">Manager</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Monitor team usage, billing, and project analytics.</p>
</div>
</label>

<label className="group cursor-pointer relative">
<input className="peer sr-only" name="usage" type="radio"/>
<div className="absolute inset-0 border border-white/10 rounded-xl peer-checked:border-white/40 transition-all duration-300 pointer-events-none"></div>
<div className="absolute inset-0 bg-white/0 peer-checked:bg-white/[0.02] rounded-xl transition-all duration-300 pointer-events-none"></div>
<div className="p-5 h-full rounded-xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors border border-transparent">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-1">Personal</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Just exploring features for a hobby project.</p>
</div>
</label>
</div>
<div className="mb-10 space-y-6">

<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-400" data-height="18" data-icon="lucide:globe" data-width="18"></span>
<div>
<p className="text-sm font-medium text-white">Public Profile</p>
<p className="text-xs text-zinc-500">Allow others to view your portfolio</p>
</div>
</div>

<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only peer" id="toggle" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-black peer-checked:after:border-transparent"></div>
</label>
</div>
</div>
<div className="flex items-center justify-between mt-auto md:mt-0 pt-6 border-t border-white/5">
<button className="text-sm text-zinc-500 hover:text-white transition-colors px-4 py-2">
                    Back
                </button>
<button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black">
<span className="mr-2 text-sm">Continue</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</main>

<div className="hidden lg:flex w-[45%] bg-[#080808] border-l border-white/5 relative items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black"></div>
<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080808] to-transparent z-10"></div>

<div className="relative w-[120%] h-[80%] [perspective:2000px] flex items-center justify-center">

<div className="absolute top-[15%] left-[20%] w-16 h-16 rounded-2xl glass-panel flex items-center justify-center animate-[bounce_4s_infinite]">
<span className="iconify text-indigo-400" data-height="24" data-icon="lucide:zap" data-width="24"></span>
</div>
<div className="absolute bottom-[20%] right-[20%] w-12 h-12 rounded-xl glass-panel flex items-center justify-center animate-[bounce_5s_infinite_0.5s]">
<span className="iconify text-emerald-400" data-height="20" data-icon="lucide:activity" data-width="20"></span>
</div>

<div className="w-[500px] h-[600px] bg-[#0c0c0c] rounded-xl border border-white/10 shadow-2xl [transform:rotateX(20deg)_rotateY(-20deg)_rotateZ(5deg)] relative overflow-hidden flex flex-col transition-transform duration-700 hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)]">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="ml-auto w-24 h-2 rounded-full bg-white/5"></div>
</div>

<div className="p-6 flex-1 space-y-6">
<div className="flex items-end justify-between">
<div className="space-y-2">
<div className="w-32 h-3 rounded-md bg-white/10"></div>
<div className="w-20 h-2 rounded-md bg-white/5"></div>
</div>
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-height="14" data-icon="lucide:plus" data-width="14"></span>
</div>
</div>

<div className="h-32 w-full border border-white/5 rounded-lg bg-white/[0.01] p-4 flex items-end justify-between gap-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent"></div>
<div className="w-full bg-indigo-500/20 h-[40%] rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-[70%] rounded-sm"></div>
<div className="w-full bg-indigo-500/30 h-[50%] rounded-sm"></div>
<div className="w-full bg-indigo-500/60 h-[85%] rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-[60%] rounded-sm"></div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
<span className="iconify text-emerald-400" data-height="12" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="w-24 h-2 rounded bg-white/10"></div>
</div>
<div className="w-8 h-2 rounded bg-white/5"></div>
</div>
<div className="flex items-center justify-between p-3 rounded border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center">
<span className="iconify text-amber-400" data-height="12" data-icon="lucide:clock" data-width="12"></span>
</div>
<div className="w-28 h-2 rounded bg-white/10"></div>
</div>
<div className="w-8 h-2 rounded bg-white/5"></div>
</div>
<div className="flex items-center justify-between p-3 rounded border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
<span className="iconify text-blue-400" data-height="12" data-icon="lucide:git-pull-request" data-width="12"></span>
</div>
<div className="w-20 h-2 rounded bg-white/10"></div>
</div>
<div className="w-8 h-2 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
