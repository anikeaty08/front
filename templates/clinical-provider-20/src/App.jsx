import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: { 50:'#fafafa', 100:'#f4f4f5', 200:'#e4e4e7', 300:'#d4d4d8', 400:'#a1a1aa', 500:'#71717a', 600:'#52525b', 700:'#3f3f46', 800:'#27272a', 900:'#18181b', 950:'#09090b' }
}
}
}
}
// DATA STORE
const patients = {
'sarah': {
name: 'Sarah Miller',
initials: 'SM',
id: '#9932',
time: '9:42 AM',
status: 'emergency',
headerBadge: '<span class="flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 rounded text-xs font-medium"><i data-lucide="shield-alert" class="w-3 h-3"></i> P3 Escalated</span>',
mobileChat: `
<div class="flex justify-center"><span class="text-xs text-zinc-400 font-medium">Today 9:41 AM</span></div>
<div class="flex gap-3 msg-animate">
<div class="w-6 h-6 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-200"><i data-lucide="sparkles" class="w-3 h-3 text-zinc-500"></i></div>
<div class="max-w-[85%] space-y-1"><div class="bg-white border border-zinc-200 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm"><p class="text-sm text-zinc-700 leading-relaxed">Hi Sarah, it's been 14 days. How are you doing?</p></div><span class="text-xs text-zinc-400 ml-1">ACA • Automated</span></div>
</div>
<div class="flex flex-col items-end space-y-1 msg-animate" style="animation-delay: 0.1s">
<div class="bg-zinc-900 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]"><p class="text-sm leading-relaxed">My heart feels like it's racing and I'm super dizzy.</p></div>
</div>
<div class="flex flex-col gap-2 msg-animate border-l-2 border-red-500 pl-3 py-1" style="animation-delay: 0.2s">
<div class="flex items-center gap-2"><i data-lucide="alert-triangle" class="w-4 h-4 text-red-600"></i><span class="text-xs font-semibold text-red-600 uppercase">Safety Warning</span></div>
<div class="bg-red-50 border border-red-100 rounded-lg p-3"><p class="text-sm text-red-800 font-medium">If you are experiencing a medical emergency, call 911.</p></div>
<div class="flex items-center gap-1.5 mt-1"><div class="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse"></div><span class="text-xs text-zinc-500">Connecting provider...</span></div>
</div>
`,
transcript: `
<div class="flex justify-center"><div class="bg-zinc-100 border border-zinc-200 rounded px-3 py-1 text-xs text-zinc-500 font-medium flex items-center gap-2"><i data-lucide="calendar" class="w-3 h-3"></i>Day-14 Check-in • ACA Generated</div></div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-200 flex items-center justify-center flex-shrink-0"><i data-lucide="bot" class="w-4 h-4 text-zinc-500"></i></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">ACA (AI)</span><span class="text-xs text-zinc-400">9:41 AM</span></div><p class="text-sm text-zinc-600 mt-1">Hi Sarah, it's been 14 days. How are you doing?</p></div>
</div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0"><span class="text-xs font-bold">SM</span></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">Sarah Miller</span><span class="text-xs text-zinc-400">9:42 AM</span></div><p class="text-sm text-zinc-800 mt-1">My heart feels like it's racing and I'm super dizzy.</p></div>
</div>
<div class="flex justify-center w-full my-4">
<div class="w-full max-w-2xl bg-white border border-red-200 rounded-lg shadow-sm overflow-hidden">
<div class="bg-red-50/50 px-4 py-2 border-b border-red-100 flex justify-between items-center"><div class="flex items-center gap-2"><i data-lucide="shield-ban" class="w-4 h-4 text-red-600"></i><span class="text-xs font-semibold text-red-800">ACA Guardrail Triggered: G032 Emergency</span></div><span class="text-[10px] font-mono text-red-600">STOPPED</span></div>
<div class="p-3"><p class="text-xs text-zinc-600">System detected "racing", "dizzy". Emergency banner shown. ACA paused.</p></div>
</div>
</div>
`,
draft: `
<p class="text-sm text-zinc-800 leading-relaxed">Hi Sarah, Dr. Chen here. I've paused the assistant. Since you're describing palpitations, please stop using the spray immediately. I'm reviewing your chart now—do you have a history of tachycardia?</p>
`,
context: `
<div class="bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-4">
<div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold text-zinc-900">Rx #9932</span><span class="text-[10px] text-zinc-500 bg-zinc-200 px-1.5 py-0.5 rounded">v3.1</span></div>
<div class="space-y-1 mb-3"><div class="flex justify-between text-xs text-zinc-600"><span>Azelastine</span><span>0.1%</span></div><div class="flex justify-between text-xs text-zinc-600"><span>Oxymetazoline</span><span>0.025%</span></div></div>
</div>
<div><span class="text-xs font-semibold text-zinc-900 block mb-2">Active Guardrails</span><div class="flex items-start gap-2 text-xs p-2 bg-red-50 border border-red-100 rounded text-red-900"><i data-lucide="alert-circle" class="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0"></i><div><span class="font-bold text-red-700">G032: Emergency</span></div></div></div>
`
},
'emma': {
name: 'Emma Davis',
initials: 'ED',
id: '#8821',
time: '10:05 AM',
status: 'emergency',
headerBadge: '<span class="flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 rounded text-xs font-medium"><i data-lucide="baby" class="w-3 h-3"></i> P1 Pregnancy</span>',
mobileChat: `
<div class="flex justify-center"><span class="text-xs text-zinc-400 font-medium">Today 10:04 AM</span></div>
<div class="flex gap-3 msg-animate">
<div class="w-6 h-6 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-200"><i data-lucide="sparkles" class="w-3 h-3 text-zinc-500"></i></div>
<div class="max-w-[85%] space-y-1"><div class="bg-white border border-zinc-200 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm"><p class="text-sm text-zinc-700 leading-relaxed">Hi Emma, just checking in on your progress.</p></div><span class="text-xs text-zinc-400 ml-1">ACA • Automated</span></div>
</div>
<div class="flex flex-col items-end space-y-1 msg-animate" style="animation-delay: 0.1s">
<div class="bg-zinc-900 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]"><p class="text-sm leading-relaxed">Actually I just found out I'm pregnant! Is this safe?</p></div>
</div>
<div class="flex flex-col gap-2 msg-animate border-l-2 border-red-500 pl-3 py-1" style="animation-delay: 0.2s">
<div class="bg-red-50 border border-red-100 rounded-lg p-3"><p class="text-sm text-red-800 font-medium">Congratulations! I've paused your prescription so your provider can adjust your formula for pregnancy safety.</p></div>
<div class="flex items-center gap-1.5 mt-1"><div class="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse"></div><span class="text-xs text-zinc-500">Notifying provider...</span></div>
</div>
`,
transcript: `
<div class="flex justify-center"><div class="bg-zinc-100 border border-zinc-200 rounded px-3 py-1 text-xs text-zinc-500 font-medium flex items-center gap-2"><i data-lucide="calendar" class="w-3 h-3"></i>Manual Check-in • ACA Generated</div></div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-200 flex items-center justify-center flex-shrink-0"><i data-lucide="bot" class="w-4 h-4 text-zinc-500"></i></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">ACA (AI)</span><span class="text-xs text-zinc-400">10:04 AM</span></div><p class="text-sm text-zinc-600 mt-1">Hi Emma, just checking in on your progress.</p></div>
</div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0"><span class="text-xs font-bold">ED</span></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">Emma Davis</span><span class="text-xs text-zinc-400">10:05 AM</span></div><p class="text-sm text-zinc-800 mt-1">Actually I just found out I'm pregnant! Is this safe?</p></div>
</div>
<div class="flex justify-center w-full my-4">
<div class="w-full max-w-2xl bg-white border border-red-200 rounded-lg shadow-sm overflow-hidden">
<div class="bg-red-50/50 px-4 py-2 border-b border-red-100 flex justify-between items-center"><div class="flex items-center gap-2"><i data-lucide="shield-ban" class="w-4 h-4 text-red-600"></i><span class="text-xs font-semibold text-red-800">ACA Guardrail Triggered: G003 Pregnancy</span></div><span class="text-[10px] font-mono text-red-600">PAUSED</span></div>
<div class="p-3"><p class="text-xs text-zinc-600">Patient reported pregnancy. Auto-pause triggered to review formula safety (Category C components).</p></div>
</div>
</div>
`,
draft: `
<p class="text-sm text-zinc-800 leading-relaxed">Congratulations Emma! That's wonderful news. I've paused your current shipment to be safe. Your current formula has Oxymetazoline which we usually swap out during pregnancy. I'm going to switch you to a pregnancy-safe formulation (Formula C-2) today.</p>
`,
context: `
<div class="bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-4">
<div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold text-zinc-900">Rx #8821</span><span class="text-[10px] text-zinc-500 bg-zinc-200 px-1.5 py-0.5 rounded">v1.0</span></div>
<div class="space-y-1 mb-3"><div class="flex justify-between text-xs text-zinc-600"><span>Mometasone</span><span>High</span></div><div class="flex justify-between text-xs text-zinc-600"><span>Oxymetazoline</span><span>0.025%</span></div></div>
</div>
<div><span class="text-xs font-semibold text-zinc-900 block mb-2">Active Guardrails</span><div class="flex items-start gap-2 text-xs p-2 bg-red-50 border border-red-100 rounded text-red-900"><i data-lucide="baby" class="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0"></i><div><span class="font-bold text-red-700">G003: Pregnancy</span></div></div></div>
`
},
'liam': {
name: 'Liam Wilson',
initials: 'LW',
id: '#4520',
time: '8:30 AM',
status: 'review',
headerBadge: '<span class="flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded text-xs font-medium"><i data-lucide="stethoscope" class="w-3 h-3"></i> P4 Clinical Review</span>',
mobileChat: `
<div class="flex justify-center"><span class="text-xs text-zinc-400 font-medium">Today 8:30 AM</span></div>
<div class="flex gap-3 msg-animate">
<div class="w-6 h-6 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-200"><i data-lucide="sparkles" class="w-3 h-3 text-zinc-500"></i></div>
<div class="max-w-[85%] space-y-1"><div class="bg-white border border-zinc-200 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm"><p class="text-sm text-zinc-700 leading-relaxed">Hi Liam, any improvement in congestion?</p></div></div>
</div>
<div class="flex flex-col items-end space-y-1 msg-animate" style="animation-delay: 0.1s">
<div class="bg-zinc-900 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]"><p class="text-sm leading-relaxed">Not really. My snot is bright green and my cheekbones hurt.</p></div>
</div>
<div class="flex flex-col gap-2 msg-animate border-l-2 border-amber-500 pl-3 py-1" style="animation-delay: 0.2s">
<div class="bg-amber-50 border border-amber-100 rounded-lg p-3"><p class="text-sm text-amber-800 font-medium">It sounds like you might have a sinus infection. I'll have your doctor review this.</p></div>
</div>
`,
transcript: `
<div class="flex justify-center"><div class="bg-zinc-100 border border-zinc-200 rounded px-3 py-1 text-xs text-zinc-500 font-medium flex items-center gap-2"><i data-lucide="calendar" class="w-3 h-3"></i>Symptom Check • ACA Generated</div></div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-200 flex items-center justify-center flex-shrink-0"><i data-lucide="bot" class="w-4 h-4 text-zinc-500"></i></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">ACA (AI)</span><span class="text-xs text-zinc-400">8:30 AM</span></div><p class="text-sm text-zinc-600 mt-1">Hi Liam, any improvement in congestion?</p></div>
</div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0"><span class="text-xs font-bold">LW</span></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">Liam Wilson</span><span class="text-xs text-zinc-400">8:32 AM</span></div><p class="text-sm text-zinc-800 mt-1">Not really. My snot is bright green and my cheekbones hurt.</p></div>
</div>
<div class="flex justify-center w-full my-4">
<div class="w-full max-w-2xl bg-white border border-amber-200 rounded-lg shadow-sm overflow-hidden">
<div class="bg-amber-50/50 px-4 py-2 border-b border-amber-100 flex justify-between items-center"><div class="flex items-center gap-2"><i data-lucide="info" class="w-4 h-4 text-amber-600"></i><span class="text-xs font-semibold text-amber-800">ACA Guardrail: G028 Sinus Infection</span></div><span class="text-[10px] font-mono text-amber-600">REVIEW</span></div>
<div class="p-3"><p class="text-xs text-zinc-600">Keywords "green mucus", "cheek pain" suggest bacterial sinusitis vs allergic rhinitis.</p></div>
</div>
</div>
`,
draft: `
<p class="text-sm text-zinc-800 leading-relaxed">Hi Liam. Green mucus and facial pain often suggest a sinus infection rather than just allergies. The nasal spray helps with inflammation, but you might need oral antibiotics from your PCP if you have a fever. Let's monitor for 2 more days.</p>
`,
context: `
<div class="bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-4">
<div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold text-zinc-900">Rx #4520</span><span class="text-[10px] text-zinc-500 bg-zinc-200 px-1.5 py-0.5 rounded">v2.0</span></div>
<div class="space-y-1 mb-3"><div class="flex justify-between text-xs text-zinc-600"><span>Fluticasone</span><span>High</span></div><div class="flex justify-between text-xs text-zinc-600"><span>Azelastine</span><span>0.1%</span></div></div>
</div>
<div><span class="text-xs font-semibold text-zinc-900 block mb-2">Active Guardrails</span><div class="flex items-start gap-2 text-xs p-2 bg-amber-50 border border-amber-100 rounded text-amber-900"><i data-lucide="thermometer" class="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0"></i><div><span class="font-bold text-amber-700">G028: Possible Infection</span></div></div></div>
`
},
'sophia': {
name: 'Sophia Rodriguez',
initials: 'SR',
id: '#1029',
time: 'Yesterday',
status: 'review',
headerBadge: '<span class="flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded text-xs font-medium"><i data-lucide="database" class="w-3 h-3"></i> P4 Data Conflict</span>',
mobileChat: `
<div class="flex justify-center"><span class="text-xs text-zinc-400 font-medium">Yesterday 4:20 PM</span></div>
<div class="flex gap-3 msg-animate">
<div class="w-6 h-6 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-200"><i data-lucide="sparkles" class="w-3 h-3 text-zinc-500"></i></div>
<div class="max-w-[85%] space-y-1"><div class="bg-white border border-zinc-200 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm"><p class="text-sm text-zinc-700 leading-relaxed">I see you updated your medical history. Can you confirm your allergies?</p></div></div>
</div>
<div class="flex flex-col items-end space-y-1 msg-animate" style="animation-delay: 0.1s">
<div class="bg-zinc-900 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]"><p class="text-sm leading-relaxed">Yes, I am strictly allergic to all steroids. I get hives.</p></div>
</div>
<div class="flex flex-col gap-2 msg-animate border-l-2 border-amber-500 pl-3 py-1" style="animation-delay: 0.2s">
<div class="bg-amber-50 border border-amber-100 rounded-lg p-3"><p class="text-sm text-amber-800 font-medium">Noted. I've flagged this for the pharmacist because your current plan includes a corticosteroid.</p></div>
</div>
`,
transcript: `
<div class="flex justify-center"><div class="bg-zinc-100 border border-zinc-200 rounded px-3 py-1 text-xs text-zinc-500 font-medium flex items-center gap-2"><i data-lucide="file-warning" class="w-3 h-3"></i>Intake Update • ACA Generated</div></div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0"><span class="text-xs font-bold">SR</span></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">Sophia Rodriguez</span><span class="text-xs text-zinc-400">4:22 PM</span></div><p class="text-sm text-zinc-800 mt-1">Yes, I am strictly allergic to all steroids. I get hives.</p></div>
</div>
<div class="flex justify-center w-full my-4">
<div class="w-full max-w-2xl bg-white border border-amber-200 rounded-lg shadow-sm overflow-hidden">
<div class="bg-amber-50/50 px-4 py-2 border-b border-amber-100 flex justify-between items-center"><div class="flex items-center gap-2"><i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600"></i><span class="text-xs font-semibold text-amber-800">ACA Guardrail: G024 Contraindication</span></div><span class="text-[10px] font-mono text-amber-600">FLAGGED</span></div>
<div class="p-3"><p class="text-xs text-zinc-600">Patient reported "Steroid Allergy". Proposed formula contains Triamcinolone (Corticosteroid).</p></div>
</div>
</div>
`,
draft: `
<p class="text-sm text-zinc-800 leading-relaxed">Thanks for clarifying, Sophia. Since you have a steroid allergy, we need to change the formula completely. We can try an antihistamine-only blend (Azelastine + Ipratropium) which is steroid-free. Does that sound okay?</p>
`,
context: `
<div class="bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-4">
<div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold text-zinc-900">Rx #1029</span><span class="text-[10px] text-zinc-500 bg-zinc-200 px-1.5 py-0.5 rounded">Pending</span></div>
<div class="space-y-1 mb-3"><div class="flex justify-between text-xs text-zinc-600"><span>Triamcinolone</span><span>Med</span></div><div class="flex justify-between text-xs text-zinc-600"><span>Azelastine</span><span>0.1%</span></div></div>
<div class="mt-2 p-1 bg-red-100 text-red-700 text-[10px] font-bold text-center rounded border border-red-200">CONFLICT DETECTED</div>
</div>
<div><span class="text-xs font-semibold text-zinc-900 block mb-2">Active Guardrails</span><div class="flex items-start gap-2 text-xs p-2 bg-amber-50 border border-amber-100 rounded text-amber-900"><i data-lucide="file-diff" class="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0"></i><div><span class="font-bold text-amber-700">G024: Data Conflict</span></div></div></div>
`
},
'michael': {
name: 'Michael Chen',
initials: 'MC',
id: '#3391',
time: '1h ago',
status: 'admin',
headerBadge: '<span class="flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded text-xs font-medium"><i data-lucide="truck" class="w-3 h-3"></i> P5 Ops</span>',
mobileChat: `
<div class="flex justify-center"><span class="text-xs text-zinc-400 font-medium">Today 11:00 AM</span></div>
<div class="flex gap-3 msg-animate">
<div class="w-6 h-6 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-200"><i data-lucide="sparkles" class="w-3 h-3 text-zinc-500"></i></div>
<div class="max-w-[85%] space-y-1"><div class="bg-white border border-zinc-200 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm"><p class="text-sm text-zinc-700 leading-relaxed">Hi Michael, your refill is processing.</p></div></div>
</div>
<div class="flex flex-col items-end space-y-1 msg-animate" style="animation-delay: 0.1s">
<div class="bg-zinc-900 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]"><p class="text-sm leading-relaxed">Stop sending these! You guys charged me twice and sent 2 bottles last week.</p></div>
</div>
<div class="flex flex-col gap-2 msg-animate border-l-2 border-blue-500 pl-3 py-1" style="animation-delay: 0.2s">
<div class="bg-blue-50 border border-blue-100 rounded-lg p-3"><p class="text-sm text-blue-800 font-medium">I understand. I'm routing this to our Operations team to fix the billing error.</p></div>
</div>
`,
transcript: `
<div class="flex justify-center"><div class="bg-zinc-100 border border-zinc-200 rounded px-3 py-1 text-xs text-zinc-500 font-medium flex items-center gap-2"><i data-lucide="credit-card" class="w-3 h-3"></i>Billing Inquiry • ACA Generated</div></div>
<div class="group relative flex gap-4">
<div class="w-8 h-8 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0"><span class="text-xs font-bold">MC</span></div>
<div class="flex-1"><div class="flex items-baseline gap-2"><span class="text-sm font-medium text-zinc-900">Michael Chen</span><span class="text-xs text-zinc-400">11:05 AM</span></div><p class="text-sm text-zinc-800 mt-1">Stop sending these! You guys charged me twice and sent 2 bottles last week.</p></div>
</div>
<div class="flex justify-center w-full my-4">
<div class="w-full max-w-2xl bg-white border border-blue-200 rounded-lg shadow-sm overflow-hidden">
<div class="bg-blue-50/50 px-4 py-2 border-b border-blue-100 flex justify-between items-center"><div class="flex items-center gap-2"><i data-lucide="refresh-ccw" class="w-4 h-4 text-blue-600"></i><span class="text-xs font-semibold text-blue-800">ACA Guardrail: GR-S02 Ops Routing</span></div><span class="text-[10px] font-mono text-blue-600">ROUTED</span></div>
<div class="p-3"><p class="text-xs text-zinc-600">Keywords "charged twice", "2 bottles". Routed to CX/Ops queue.</p></div>
</div>
</div>
`,
draft: `
<p class="text-sm text-zinc-800 leading-relaxed">Hi Michael, apologies for the mix-up. I see the duplicate charge on your account. I have refunded $45.00 to your card and paused the next shipment. Please keep the extra bottle as a courtesy.</p>
`,
context: `
<div class="bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-4">
<div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold text-zinc-900">Rx #3391</span><span class="text-[10px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded border border-green-200">Shipped</span></div>
<div class="space-y-1 mb-3 text-xs text-zinc-600"><p>Tracking: 1Z992...</p><p>Billed: $45.00 (x2)</p></div>
</div>
<div><span class="text-xs font-semibold text-zinc-900 block mb-2">Active Guardrails</span><div class="flex items-start gap-2 text-xs p-2 bg-blue-50 border border-blue-100 rounded text-blue-900"><i data-lucide="headphones" class="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0"></i><div><span class="font-bold text-blue-700">GR-S02: Ops/Billing</span></div></div></div>
`
}
};
function selectPatient(btn) {
const pid = btn.getAttribute('data-id');
const data = patients[pid];
if(!data) return;
// Update Buttons Visual State
document.querySelectorAll('.patient-btn').forEach(b => {
b.classList.remove('ring-1', 'ring-zinc-900', 'bg-zinc-100', 'bg-red-50/50', 'bg-white', 'patient-active', 'emergency');
// Restore default styles based on original class logic (simplified for this demo)
if(b.classList.contains('default-red')) b.classList.add('bg-red-50/50');
else b.classList.add('bg-white');
});
// Set Active State
btn.classList.remove('bg-white', 'bg-red-50/50');
if(data.status === 'emergency') btn.classList.add('patient-active', 'emergency');
else btn.classList.add('patient-active');
// DOM Updates
document.getElementById('mobile-chat-container').innerHTML = data.mobileChat;
document.getElementById('chat-transcript').innerHTML = data.transcript;
document.getElementById('ai-draft-text').innerHTML = data.draft;
document.getElementById('clinical-context').innerHTML = data.context;
// Header Updates
document.getElementById('header-name').innerText = data.name;
document.getElementById('header-id').innerText = data.id;
document.getElementById('header-badge-container').innerHTML = data.headerBadge;
// Refresh Icons
lucide.createIcons();
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full md:w-[380px] flex-shrink-0 bg-white border-r border-zinc-200 flex flex-col h-full relative z-10 shadow-xl">

<div className="h-12 bg-white flex items-center justify-between px-5 border-b border-zinc-100">
<span className="text-xs font-semibold tracking-tighter text-zinc-900">ALLERMI</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3 text-zinc-800" data-lucide="signal"></i>
<i className="w-3 h-3 text-zinc-800" data-lucide="wifi"></i>
<i className="w-3 h-3 text-zinc-800" data-lucide="battery"></i>
</div>
</div>

<div className="px-4 py-3 bg-white border-b border-zinc-100 flex items-center justify-between sticky top-0">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
<i className="w-4 h-4 text-zinc-600" data-lucide="sparkles"></i>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h2 className="text-sm font-semibold text-zinc-900 leading-tight">Support Assistant</h2>
<p className="text-xs text-zinc-500">Automated Support</p>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-600"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-5 bg-zinc-50/50" id="mobile-chat-container">

<div className="flex justify-center"><span className="text-xs text-zinc-400 font-medium">Today 9:41 AM</span></div>
<div className="flex gap-3 msg-animate">
<div className="w-6 h-6 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-200">
<i className="w-3 h-3 text-zinc-500" data-lucide="sparkles"></i>
</div>
<div className="max-w-[85%] space-y-1">
<div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm">
<p className="text-sm text-zinc-700 leading-relaxed">Hi Sarah, it's been 14 days since your delivery. How are you doing overall?</p>
</div>
<span className="text-xs text-zinc-400 ml-1">ACA • Automated</span>
</div>
</div>
<div className="flex flex-col items-end space-y-1 msg-animate" style={{animationDelay: '0.1s'}}>
<div className="bg-zinc-900 text-white rounded-2xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]">
<p className="text-sm leading-relaxed">My heart feels like it's racing and I'm super dizzy.</p>
</div>
<span className="text-xs text-zinc-400 mr-1">Read 9:42 AM</span>
</div>
<div className="flex flex-col gap-2 msg-animate border-l-2 border-red-500 pl-3 py-1" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="alert-triangle"></i>
<span className="text-xs font-semibold text-red-600 tracking-wide uppercase">Safety Warning</span>
</div>
<div className="bg-red-50 border border-red-100 rounded-lg p-3">
<p className="text-sm text-red-800 leading-snug font-medium">If you are experiencing a medical emergency, severe dizziness, or palpitations, stop using the medication immediately and call 911.</p>
</div>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse"></div>
<span className="text-xs text-zinc-500">Connecting you to a provider...</span>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-zinc-200">
<div className="flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-2.5 border border-zinc-200">
<input className="bg-transparent flex-1 text-sm outline-none placeholder:text-zinc-400 text-zinc-900" placeholder="Message..." type="text"/>
<button className="text-zinc-400"><i className="w-4 h-4" data-lucide="camera"></i></button>
<button className="text-blue-600"><i className="w-4 h-4" data-lucide="send"></i></button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col h-full min-w-0 bg-zinc-50">

<header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-zinc-900 text-white w-6 h-6 flex items-center justify-center rounded-md">
<span className="text-xs font-bold tracking-tighter">A</span>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-900">Provider Portal</span>
</div>
<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Queue</a>
<a className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md transition-colors" href="#">Active Chats</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-red-50 border border-red-200 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<span className="text-xs font-medium text-red-700">ACA Paused (Safety)</span>
</div>
</div>
<div className="h-4 w-px bg-zinc-200"></div>
<div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 flex items-center justify-center text-xs font-semibold">DC</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<div className="w-72 bg-white border-r border-zinc-200 flex flex-col flex-shrink-0 hidden lg:flex">
<div className="p-4 border-b border-zinc-100">
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-zinc-300 transition-colors" placeholder="Search patients..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<p className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Clinical Safety (P1-P3)</p>

<button className="patient-btn default-red emergency patient-active w-full text-left group flex flex-col gap-1 p-3 bg-red-50/50 border border-red-100 rounded-lg cursor-pointer relative hover:bg-red-50 ring-zinc-900 transition-all focus:outline-none" data-id="sarah" onclick="selectPatient(this)">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-lg"></div>
<div className="flex justify-between items-start pl-2">
<span className="text-sm font-semibold text-zinc-900">Sarah Miller</span>
<span className="text-xs font-mono text-red-600 font-medium">0m 12s</span>
</div>
<div className="pl-2 flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold border border-red-200">G032 PANIC</span>
<span className="text-xs text-zinc-500 truncate">Heart racing/dizzy</span>
</div>
</button>

<button className="patient-btn w-full text-left group flex flex-col gap-1 p-3 bg-white hover:bg-zinc-50 border border-transparent hover:border-zinc-100 rounded-lg cursor-pointer transition-all focus:outline-none" data-id="emma" onclick="selectPatient(this)">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-zinc-700">Emma Davis</span>
<span className="text-xs font-mono text-red-500 font-medium">4m</span>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold border border-red-200">G003 PREG</span>
<span className="text-xs text-zinc-500 truncate">Reported pregnancy</span>
</div>
</button>

<p className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-2">Clinical Review (P4)</p>

<button className="patient-btn w-full text-left group flex flex-col gap-1 p-3 bg-white hover:bg-zinc-50 border border-transparent hover:border-zinc-100 rounded-lg cursor-pointer transition-all focus:outline-none" data-id="liam" onclick="selectPatient(this)">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-zinc-700">Liam Wilson</span>
<span className="text-xs text-zinc-400">14m</span>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 text-[10px] font-bold border border-amber-200">G028 SINUS</span>
<span className="text-xs text-zinc-500 truncate">Green mucus/pain</span>
</div>
</button>

<button className="patient-btn w-full text-left group flex flex-col gap-1 p-3 bg-white hover:bg-zinc-50 border border-transparent hover:border-zinc-100 rounded-lg cursor-pointer transition-all focus:outline-none" data-id="sophia" onclick="selectPatient(this)">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-zinc-700">Sophia Rodriguez</span>
<span className="text-xs text-zinc-400">22m</span>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 text-[10px] font-bold border border-amber-200">G024 DATA</span>
<span className="text-xs text-zinc-500 truncate">Allergy vs Med conflict</span>
</div>
</button>

<p className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-2">Admin Routing (P5)</p>

<button className="patient-btn w-full text-left group flex flex-col gap-1 p-3 bg-white hover:bg-zinc-50 border border-transparent hover:border-zinc-100 rounded-lg cursor-pointer transition-all focus:outline-none" data-id="michael" onclick="selectPatient(this)">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-zinc-700">Michael Chen</span>
<span className="text-xs text-zinc-400">1h</span>
</div>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">GR-S02 OPS</span>
<span className="text-xs text-zinc-500 truncate">Repeat ship complaint</span>
</div>
</button>
</div>
</div>

<div className="flex-1 flex flex-col bg-white min-w-0 relative">

<div className="h-14 border-b border-zinc-200 flex items-center justify-between px-6 bg-white flex-shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-base font-semibold text-zinc-900"><span id="header-name">Sarah Miller</span> <span className="text-zinc-400 font-normal mx-1" id="header-id">#9932</span></h1>
<div className="flex items-center gap-2" id="header-badge-container">
<span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 rounded text-xs font-medium">
<i className="w-3 h-3" data-lucide="shield-alert"></i> P3 Escalated
                            </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-500">ACA Autopilot</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
<button className="px-3 py-1.5 text-xs font-medium border border-zinc-200 rounded-md hover:bg-zinc-50 text-zinc-700">Resolve</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/30" id="chat-transcript">

<div className="flex justify-center">
<div className="bg-zinc-100 border border-zinc-200 rounded px-3 py-1 text-xs text-zinc-500 font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="calendar"></i>
                            Day-14 Check-in • ACA Generated
                        </div>
</div>
<div className="group relative flex gap-4">
<div className="w-8 h-8 rounded-md bg-zinc-200 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-zinc-500" data-lucide="bot"></i>
</div>
<div className="flex-1">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-zinc-900">ACA (AI)</span>
<span className="text-xs text-zinc-400">9:41 AM</span>
</div>
<p className="text-sm text-zinc-600 mt-1">Hi Sarah, it's been 14 days since your delivery. How are you doing overall?</p>
</div>
</div>
<div className="group relative flex gap-4">
<div className="w-8 h-8 rounded-md bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
<span className="text-xs font-bold">SM</span>
</div>
<div className="flex-1">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-zinc-900">Sarah Miller</span>
<span className="text-xs text-zinc-400">9:42 AM</span>
</div>
<p className="text-sm text-zinc-800 mt-1">My heart feels like it's racing and I'm super dizzy.</p>
</div>
</div>
<div className="flex justify-center w-full my-4">
<div className="w-full max-w-2xl bg-white border border-red-200 rounded-lg shadow-sm overflow-hidden">
<div className="bg-red-50/50 px-4 py-2 border-b border-red-100 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="shield-ban"></i>
<span className="text-xs font-semibold text-red-800">ACA Guardrail Triggered: G032 Emergency</span>
</div>
<span className="text-[10px] font-mono text-red-600">STOPPED</span>
</div>
<div className="p-3">
<p className="text-xs text-zinc-600">System detected "racing", "dizzy". Emergency banner shown. ACA paused.</p>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-zinc-200">

<div className="mx-4 -mt-6 mb-4 relative z-10">
<div className="bg-indigo-50 border border-indigo-100 rounded-lg shadow-sm p-3 flex flex-col gap-2 animate-[slideIn_0.3s_ease-out]">
<div className="flex items-center justify-between border-b border-indigo-100 pb-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-indigo-600" data-lucide="sparkles"></i>
<span className="text-xs font-semibold text-indigo-700">AI Suggested Response (Draft)</span>
</div>
<span className="text-[10px] text-indigo-400">Provider review required</span>
</div>
<div id="ai-draft-text">
<p className="text-sm text-zinc-800 leading-relaxed">Hi Sarah, Dr. Chen here. I've paused the assistant. Since you're describing heart palpitations, please stop using the spray immediately. I'm reviewing your chart now—do you have a history of tachycardia?</p>
</div>
<div className="flex gap-2 pt-1">
<button className="bg-indigo-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-indigo-700 transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check"></i> Approve &amp; Send
                                </button>
<button className="bg-white border border-zinc-200 text-zinc-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-zinc-50 transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="edit-2"></i> Edit Draft
                                </button>
</div>
</div>
</div>

<div className="p-4 pt-0">
<div className="flex flex-col gap-2 border border-zinc-200 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all">
<textarea className="w-full p-3 text-sm text-zinc-900 placeholder:text-zinc-400 resize-none focus:outline-none bg-white rounded-lg" placeholder="Type your message..." rows="2"></textarea>
</div>
<div className="flex justify-between items-center mt-3">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Secure audit log active</span>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Internal Note</button>
<button className="px-4 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-md shadow-sm transition-all flex items-center gap-2">
                                    Send <i className="w-3 h-3" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 bg-white border-l border-zinc-200 hidden xl:flex flex-col flex-shrink-0 overflow-y-auto">
<div className="p-5 border-b border-zinc-100" id="clinical-context">

<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Patient Context</h3>
<div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-zinc-900">Rx #9932</span>
<span className="text-[10px] text-zinc-500 bg-zinc-200 px-1.5 py-0.5 rounded">v3.1</span>
</div>
<div className="space-y-1 mb-3">
<div className="flex justify-between text-xs text-zinc-600">
<span>Azelastine</span>
<span>0.1%</span>
</div>
<div className="flex justify-between text-xs text-zinc-600">
<span>Oxymetazoline</span>
<span>0.025%</span>
</div>
</div>
</div>
<div>
<span className="text-xs font-semibold text-zinc-900 block mb-2">Active Guardrails</span>
<div className="space-y-2">
<div className="flex items-start gap-2 text-xs p-2 bg-red-50 border border-red-100 rounded text-red-900">
<i className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" data-lucide="alert-circle"></i>
<div>
<span className="font-bold text-red-700">G032: Emergency</span>
<p className="text-red-800/80 leading-snug mt-0.5">Keywords: "racing", "dizzy". Paused.</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-5">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Clinical Actions</h3>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center justify-center p-2.5 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-all text-center gap-2 group">
<i className="w-3 h-3 text-zinc-500 group-hover:text-zinc-900" data-lucide="file-edit"></i>
<span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-900">Initiate Formula Change (FCR)</span>
</button>
<button className="flex items-center justify-center p-2.5 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-all text-center gap-2 group">
<i className="w-3 h-3 text-zinc-500 group-hover:text-zinc-900" data-lucide="pause-circle"></i>
<span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-900">Pause Prescription</span>
</button>
<button className="flex items-center justify-center p-2.5 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-all text-center gap-2 group">
<i className="w-3 h-3 text-zinc-500 group-hover:text-zinc-900" data-lucide="trending-down"></i>
<span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-900">Assign Taper Plan</span>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
