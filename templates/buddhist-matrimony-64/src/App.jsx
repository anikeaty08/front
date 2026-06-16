import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Noto Sans Devanagari', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c', // Saffron/Orange tone
700: '#c2410c',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200" x-show="!showLogin">
<div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
<div @click="currentView = 'home'" className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:flower-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-lg font-semibold tracking-tight text-zinc-800">धम्म मंगल परिणय</h1>
</div>
<div className="flex items-center gap-3">

<template x-if="!isAdmin">
<div className="flex items-center gap-3">
<button @click="currentView = 'premium'" className="text-xs font-medium bg-gradient-to-r from-brand-600 to-brand-500 text-white px-3 py-1.5 rounded-full shadow-sm hover:opacity-90 transition" x-show="isPremiumGlobal">
                            Premium
                        </button>
<button @click="currentView = 'help'" className="text-zinc-500 hover:text-zinc-800">
<iconify-icon icon="lucide:life-buoy" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div @click="currentView = 'profile'" className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</template>

<button :className="isAdmin ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-zinc-500'" @click="toggleAdmin()" className="p-1.5 rounded-md transition-colors text-xs font-mono">
<span x-text="isAdmin ? 'ADM' : 'USR'"></span>
</button>
</div>
</div>
</nav>

<main className="flex-1 max-w-md mx-auto w-full p-4">

<div className="fixed inset-0 z-[60] bg-zinc-900 flex flex-col transition-opacity duration-500" x-show="showLogin">

<div className="absolute inset-0">
<img alt="Buddha Blessing Couple" className="w-full h-full object-cover opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/buddha_wedding_art.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-black/20"></div>
</div>

<div className="relative z-10 flex flex-col justify-end h-full p-6 pb-12 max-w-md mx-auto w-full">

<div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
<iconify-icon icon="lucide:flower-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-3 leading-tight drop-shadow-lg">
                    धम्म मंगल <br/>
<span className="text-brand-500">परिणय</span>
</h2>
<p className="text-zinc-200 text-base font-medium mb-8 leading-relaxed drop-shadow-md opacity-90">
                    बौद्ध समाजासाठी सुरक्षित आणि विश्वासार्ह वधु-वर सूचक मंडळ. <br/>
<span className="text-zinc-300 font-normal text-sm">आपले अनुरूप जोडीदार शोधा.</span>
</p>
<button @click="showLogin = false" className="w-full bg-brand-600 text-white py-3.5 rounded-xl font-medium shadow-xl shadow-brand-600/20 hover:bg-brand-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group ring-1 ring-brand-500/50">
<span>लॉगिन करा (Login)</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<p className="mt-6 text-[10px] text-zinc-400 text-center font-medium tracking-wide opacity-60">
                    By continuing, you agree to our Terms &amp; Conditions.
                </p>
</div>
</div>

<div x-show="currentView === 'home' &amp;&amp; !isAdmin" x-transition="">

<div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 text-white mb-6 relative overflow-hidden ring-1 ring-zinc-900/5">
<div className="relative z-10">
<h3 className="text-lg font-semibold mb-1 tracking-tight">आपले स्वागत आहे, अमित!</h3>
<p className="text-zinc-300 text-sm opacity-90">तुमच्या पसंतीनुसार नवीन प्रोफाइल पहा.</p>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32" icon="lucide:users" width="128"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-4">
<h4 className="font-medium text-zinc-900">नवीन वधु-वर (Matches)</h4>
<span className="text-xs text-brand-600 font-medium bg-brand-50 px-2 py-1 rounded-md">
<span x-text="profiles.filter(p =&gt; !p.blocked).length"></span> नवीन
                </span>
</div>

<div className="space-y-4">
<template :key="profile.id" x-htmlFor="profile in profiles">
<div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm relative group overflow-hidden hover:border-zinc-300 transition-colors" x-show="!profile.blocked">
<div className="flex gap-4">

<div className="w-20 h-24 rounded-lg bg-zinc-100 overflow-hidden flex-shrink-0 relative">
<template x-if="isPremiumGlobal &amp;&amp; !currentUser.approved">
<div className="absolute inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-10">
<div className="bg-white/80 p-1.5 rounded-full shadow-sm">
<iconify-icon className="text-zinc-500" icon="lucide:lock" width="14"></iconify-icon>
</div>
</div>
</template>
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover"/>
</div>

<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-zinc-900 truncate" x-text="profile.name"></h3>
<p className="text-xs text-zinc-500 mt-0.5 font-medium">
<span x-text="profile.age"></span> वर्षे • <span x-text="profile.loc"></span>
</p>
</div>

<button @click="reportProfile(profile.id)" className="text-zinc-400 hover:text-zinc-900 p-1 rounded-md hover:bg-zinc-50">
<iconify-icon icon="lucide:more-vertical" width="16"></iconify-icon>
</button>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-zinc-400" icon="lucide:graduation-cap" width="14"></iconify-icon>
<span className="truncate" x-text="profile.edu"></span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-zinc-400" icon="lucide:briefcase" width="14"></iconify-icon>
<span className="truncate" x-text="profile.job"></span>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-zinc-100 flex gap-3">
<template x-if="isPremiumGlobal &amp;&amp; !currentUser.approved">
<button @click="currentView = 'premium'" className="w-full bg-zinc-900 text-white text-xs font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
                                    संपर्क पाहण्यासाठी Premium घ्या
                                </button>
</template>
<template x-if="!isPremiumGlobal || currentUser.approved">
<div className="flex gap-2 w-full">
<button className="flex-1 bg-brand-50 text-brand-700 border border-brand-100 text-xs font-medium py-2 rounded-lg hover:bg-brand-100 transition">
                                        बायोडेटा पहा
                                    </button>
<button className="flex-1 bg-zinc-50 text-zinc-700 border border-zinc-200 text-xs font-medium py-2 rounded-lg hover:bg-zinc-100 transition">
                                        रुची पाठवा
                                    </button>
</div>
</template>
</div>
</div>
</template>
</div>
</div>

<div x-cloak="" x-show="currentView === 'profile'" x-transition="">
<div @click="currentView = 'home'" className="flex items-center gap-2 mb-6 text-zinc-500 cursor-pointer hover:text-zinc-900 group">
<div className="p-1 rounded-md group-hover:bg-zinc-100 transition">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Back</span>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-6">माझी प्रोफाइल (My Profile)</h2>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Profile Updated Successfully!');">
<div className="flex flex-col items-center mb-6">
<div className="w-24 h-24 rounded-full bg-zinc-100 border border-zinc-200 mb-3 overflow-hidden relative group cursor-pointer shadow-sm">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
<iconify-icon className="text-white" icon="lucide:camera" width="24"></iconify-icon>
</div>
</div>
<span className="text-xs font-medium text-brand-600 cursor-pointer hover:text-brand-700">फोटो बदला</span>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">पूर्ण नाव</label>
<input className="w-full text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 transition shadow-sm" type="text" x-model="currentUser.name"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">जन्मतारीख</label>
<input className="w-full text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 transition shadow-sm" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">ऊंची</label>
<input className="w-full text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 transition shadow-sm" type="text" value="5' 8&quot;"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">शिक्षण</label>
<input className="w-full text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 transition shadow-sm" type="text" value="B.E Computer"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide">नोकरी / व्यवसाय</label>
<input className="w-full text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500 transition shadow-sm" type="text" value="Software Developer"/>
</div>
<div className="pt-4">
<button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-xl hover:bg-zinc-800 transition shadow-lg shadow-zinc-900/10 active:scale-[0.99]">
                        माहिती अपडेट करा (Update)
                    </button>
</div>
</form>
</div>

<div x-cloak="" x-show="currentView === 'premium'" x-transition="">
<div @click="currentView = 'home'" className="flex items-center gap-2 mb-6 text-zinc-500 cursor-pointer hover:text-zinc-900 group">
<div className="p-1 rounded-md group-hover:bg-zinc-100 transition">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Back</span>
</div>
<div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm text-center">
<div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-amber-50/50">
<iconify-icon icon="lucide:crown" width="24"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-zinc-900 mb-2">Premium Membership</h2>
<p className="text-sm text-zinc-500 mb-6">संपूर्ण प्रोफाइल आणि संपर्क क्रमांक पाहण्यासाठी खालील QR कोड वर पेमेंट करा.</p>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 inline-block mb-6 relative">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-40 h-40 mix-blend-multiply opacity-90 mx-auto"/>
<div className="absolute inset-0 border border-zinc-200 rounded-xl pointer-events-none"></div>
</div>
<div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-lg p-3 mb-6">
<span className="text-xs text-zinc-500 font-medium">UPI ID</span>
<div className="flex items-center gap-2">
<span className="text-sm font-mono text-zinc-900" x-text="adminSettings.upiId"></span>
<button className="text-brand-600 hover:text-brand-700 p-1 hover:bg-brand-50 rounded transition">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="text-left bg-blue-50 text-blue-800 p-4 rounded-lg text-xs leading-relaxed border border-blue-100">
<strong>महत्वाची सूचना:</strong> पेमेंट केल्यानंतर स्क्रीनशॉट आणि आपले नाव खालील नंबर वर WhatsApp करावे. ॲडमिन कडून 24 तासात ॲप्रूव्हल मिळेल.
                </div>
</div>
</div>

<div x-cloak="" x-show="currentView === 'help'" x-transition="">
<div @click="currentView = 'home'" className="flex items-center gap-2 mb-6 text-zinc-500 cursor-pointer hover:text-zinc-900 group">
<div className="p-1 rounded-md group-hover:bg-zinc-100 transition">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">Back</span>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-6">मदत केंद्र (Help Center)</h2>
<div className="space-y-4">
<div className="bg-white p-4 rounded-xl border border-zinc-200 flex items-center gap-4 hover:border-zinc-300 transition shadow-sm">
<div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 font-medium">WhatsApp Support</p>
<p className="text-sm font-semibold text-zinc-900" x-text="adminSettings.contactPhone"></p>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200 flex items-center gap-4 hover:border-zinc-300 transition shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 font-medium">Email Support</p>
<p className="text-sm font-semibold text-zinc-900" x-text="adminSettings.contactEmail"></p>
</div>
</div>
</div>
<div className="mt-8">
<h3 className="font-medium text-zinc-900 mb-3 text-sm">नियम आणि अटी (Rules)</h3>
<ul className="space-y-3">
<template :key="index" x-htmlFor="(rule, index) in adminSettings.rules">
<li className="flex gap-3 text-sm text-zinc-600 items-start">
<iconify-icon className="text-zinc-400 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span className="leading-snug" x-text="rule"></span>
</li>
</template>
</ul>
</div>
</div>

<div className="pb-20" x-cloak="" x-show="currentView === 'admin' &amp;&amp; isAdmin" x-transition="">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">प्रशासक पॅनेल (Admin)</h2>
<span className="bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded">SUPER USER</span>
</div>

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm mb-6 flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Premium Mode</h3>
<p className="text-xs text-zinc-500">On = Payment required to view</p>
</div>
<button :className="isPremiumGlobal ? 'bg-brand-600' : 'bg-zinc-300'" @click="isPremiumGlobal = !isPremiumGlobal" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
<span :className="isPremiumGlobal ? 'translate-x-5' : 'translate-x-0'" className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>

<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">User Management</h3>
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden mb-6">
<template :key="user.id" x-htmlFor="user in profiles">
<div className="p-4 border-b border-zinc-100 last:border-0 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-200"/>
<div>
<p className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<span x-text="user.name"></span>
<span className="text-[10px] bg-red-100 text-red-700 px-1 rounded font-bold" x-show="user.blocked">BLOCKED</span>
</p>
<p className="text-xs text-zinc-500" x-text="user.loc"></p>
</div>
</div>
<button @click="deleteProfile(user.id)" className="text-zinc-400 hover:text-red-600 transition">
<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
</button>
</div>
<div className="flex gap-2">

<button :className="user.approved ? 'bg-green-50 text-green-700 border-green-200' : 'bg-zinc-50 text-zinc-600 border-zinc-200'" @click="toggleApprove(user.id)" className="flex-1 text-xs font-medium py-1.5 rounded border transition flex items-center justify-center gap-1 hover:brightness-95">
<iconify-icon :icon="user.approved ? 'lucide:check' : 'lucide:x'" width="12"></iconify-icon>
<span x-text="user.approved ? 'Approved' : 'Unapproved'"></span>
</button>

<button :className="user.blocked ? 'bg-zinc-800 text-white' : 'bg-white border border-zinc-200 text-zinc-700'" @click="toggleBlock(user.id)" className="flex-1 text-xs font-medium py-1.5 rounded transition hover:bg-zinc-100">
<span x-text="user.blocked ? 'Unblock' : 'Block User'"></span>
</button>
</div>
</div>
</template>
</div>

<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Settings</h3>
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">UPI ID</label>
<input className="w-full text-xs border border-zinc-200 rounded px-2 py-1.5 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-brand-500/10 outline-none transition" type="text" x-model="adminSettings.upiId"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Support Phone</label>
<input className="w-full text-xs border border-zinc-200 rounded px-2 py-1.5 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-brand-500/10 outline-none transition" type="text" x-model="adminSettings.contactPhone"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Add New Rule</label>
<div className="flex gap-2">
<input className="flex-1 text-xs border border-zinc-200 rounded px-2 py-1.5 bg-zinc-50 focus:bg-white outline-none transition" id="newRuleInput" placeholder="Enter rule..." type="text"/>
<button @click="let val = document.getElementById('newRuleInput').value; if(val) { adminSettings.rules.push(val); document.getElementById('newRuleInput').value=''; }" className="bg-zinc-900 text-white px-3 rounded text-xs hover:bg-zinc-800 transition">Add</button>
</div>
</div>
</div>
<p className="text-center text-[10px] text-zinc-400 mt-6">Admin controls affect all users immediately.</p>
</div>
</main>

    </>
  );
}
