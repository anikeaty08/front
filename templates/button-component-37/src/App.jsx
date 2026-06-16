import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-[1440px] mx-auto">

<header className="mb-12">
<div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-normal mb-5 border border-slate-200/60">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
        Beta Release
      </div>
<h1 className="text-3xl tracking-tight font-normal mb-3 text-slate-900">Button Component</h1>
<p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
        A button triggers an event or action. Below is the full variant matrix representing every combination of appearance, state, spacing, and iconography detailed in the design specification.
      </p>
</header>

<section className="mb-16">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-xl tracking-tight font-normal text-slate-900">Default Spacing</h2>
<p className="text-sm text-slate-500 mt-1">Padding: 12px horizontal, 4px vertical · Min Height: 32px</p>
</div>
</div>
<div className="border border-slate-200/80 rounded-[12px] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50 w-40">Appearance</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Interactive</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Hover</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Press</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Focus</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Selected</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Disabled</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Loading</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">With Icons</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Default</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#F1F2F4] text-[#172B4D] hover:bg-[#DCDFE4] active:bg-[#C7CDD5] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#DCDFE4] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#C7CDD5] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#F1F2F4] text-[#172B4D] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#E9F2FE] text-[#1868DB] ring-1 ring-inset ring-[#1868DB] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[rgba(8,15,33,0.06)] text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#F1F2F4] text-[#172B4D] cursor-wait w-[68px]">
<iconify-icon className="animate-spin text-base" icon="solar:spinner-linear"></iconify-icon>
</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#F1F2F4] text-[#172B4D] hover:bg-[#DCDFE4] active:bg-[#C7CDD5] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
                    Button
                    <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</td>
</tr>

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Primary</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#0C66E4] text-[#FFFFFF] hover:bg-[#0055CC] active:bg-[#09326C] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#0055CC] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#09326C] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#0C66E4] text-[#FFFFFF] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#09326C] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[rgba(8,15,33,0.06)] text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#0C66E4] text-[#FFFFFF] cursor-wait w-[68px]">
<iconify-icon className="animate-spin text-base" icon="solar:spinner-linear"></iconify-icon>
</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#0C66E4] text-[#FFFFFF] hover:bg-[#0055CC] active:bg-[#09326C] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
                    Button
                    <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</td>
</tr>

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Subtle</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-transparent text-[#505258] hover:bg-[rgba(5,21,36,0.06)] active:bg-[rgba(11,18,40,0.14)] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[rgba(5,21,36,0.06)] text-[#505258] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[rgba(11,18,40,0.14)] text-[#505258] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-transparent text-[#505258] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#E9F2FE] text-[#1868DB] ring-1 ring-inset ring-[#1868DB] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-transparent text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-transparent text-[#505258] cursor-wait w-[68px]">
<iconify-icon className="animate-spin text-base" icon="solar:spinner-linear"></iconify-icon>
</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-transparent text-[#505258] hover:bg-[rgba(5,21,36,0.06)] active:bg-[rgba(11,18,40,0.14)] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
                    Button
                    <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</td>
</tr>

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Warning</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#F5CD47] text-[#172B4D] hover:bg-[#E2B203] active:bg-[#CF9F02] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#E2B203] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#CF9F02] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#F5CD47] text-[#172B4D] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#CF9F02] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[rgba(8,15,33,0.06)] text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#F5CD47] text-[#172B4D] cursor-wait w-[68px]">
<iconify-icon className="animate-spin text-base" icon="solar:spinner-linear"></iconify-icon>
</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#F5CD47] text-[#172B4D] hover:bg-[#E2B203] active:bg-[#CF9F02] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
                    Button
                    <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</td>
</tr>

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Danger</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#CA3521] text-[#FFFFFF] hover:bg-[#AE2A19] active:bg-[#601E16] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#AE2A19] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#601E16] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#CA3521] text-[#FFFFFF] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#601E16] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[rgba(8,15,33,0.06)] text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border bg-[#CA3521] text-[#FFFFFF] cursor-wait w-[68px]">
<iconify-icon className="animate-spin text-base" icon="solar:spinner-linear"></iconify-icon>
</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-1 min-h-[32px] box-border transition-colors bg-[#CA3521] text-[#FFFFFF] hover:bg-[#AE2A19] active:bg-[#601E16] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
                    Button
                    <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-xl tracking-tight font-normal text-slate-900">Compact Spacing</h2>
<p className="text-sm text-slate-500 mt-1">Padding: 12px horizontal, 2px vertical · Min Height: 24px</p>
</div>
</div>
<div className="border border-slate-200/80 rounded-[12px] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50 w-40">Appearance</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Interactive</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Hover</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Press</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Focus</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Selected</th>
<th className="p-5 text-xs font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 bg-slate-50/50">Disabled</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Default</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border transition-colors bg-[#F1F2F4] text-[#172B4D] hover:bg-[#DCDFE4] active:bg-[#C7CDD5] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#DCDFE4] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#C7CDD5] text-[#172B4D] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#F1F2F4] text-[#172B4D] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#E9F2FE] text-[#1868DB] ring-1 ring-inset ring-[#1868DB] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[rgba(8,15,33,0.06)] text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
</tr>

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Primary</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border transition-colors bg-[#0C66E4] text-[#FFFFFF] hover:bg-[#0055CC] active:bg-[#09326C] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#0055CC] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#09326C] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#0C66E4] text-[#FFFFFF] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#09326C] text-[#FFFFFF] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[rgba(8,15,33,0.06)] text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
</tr>

<tr>
<td className="p-5 text-sm font-normal text-slate-600 capitalize">Subtle</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border transition-colors bg-transparent text-[#505258] hover:bg-[rgba(5,21,36,0.06)] active:bg-[rgba(11,18,40,0.14)] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-[#4688EC]">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[rgba(5,21,36,0.06)] text-[#505258] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[rgba(11,18,40,0.14)] text-[#505258] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-transparent text-[#505258] outline outline-2 outline-offset-[-2px] outline-[#4688EC] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-[#E9F2FE] text-[#1868DB] ring-1 ring-inset ring-[#1868DB] pointer-events-none">Button</button>
</td>
<td className="p-5">
<button className="inline-flex items-center justify-center gap-1.5 rounded-[6px] font-normal text-sm px-3 py-0.5 min-h-[24px] box-border bg-transparent text-[rgba(8,15,33,0.28)] cursor-not-allowed">Button</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>

    </>
  );
}
