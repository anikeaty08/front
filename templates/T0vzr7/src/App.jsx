import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Time Display
    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent =
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Setting link renderer (for repeated settings lines)
    function SettingLink({icon, color, label, last = false}) {
      var root = document.currentScript.ownerDocument || document;
      const main = root.querySelector("main");
      // If already rendered, don't do it again
      if (main && !main.querySelector(`[data-label='${label}']`)) {
        const line = document.createElement("div");
        line.className = (last?"pt-2 border-t border-white/10 mt-1 ":"") + ' flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition';
        line.setAttribute('data-label', label);
        line.innerHTML = `
          <div class="flex items-center gap-4">
            <span class="bg-[#212143] rounded-full p-2"><i class="fa-solid fa-${icon} ${color}"></i></span>
            <span>${label}</span>
          </div>
          <i class="fas fa-chevron-right text-xs opacity-40"></i>
        `;
        const section = document.querySelectorAll(".space-y-2");
        // Place in last section if last, otherwise in the right section
        if(section.length > 0) {
          (last ? section[section.length-1] : section[0]).appendChild(line);
        }
      }
    }

    // Render dynamic settings links
    SettingLink({icon:"user-shield",color:"text-indigo-400",label:"Privacy & Security"});
    SettingLink({icon:"file-invoice-dollar",color:"text-pink-400",label:"Manage Subscriptions"});
    SettingLink({icon:"globe",color:"text-green-400",label:"Language"});
    SettingLink({icon:"moon",color:"text-gray-300",label:"Dark Mode",last:true});
    SettingLink({icon:"question-circle",color:"text-blue-400",label:"Help & Support"});
    SettingLink({icon:"right-from-bracket",color:"text-red-400",label:"Logout",last:true});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#181830] to-[#0a0a17] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#171731] flex flex-col mx-auto">
<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: '44px'}}>
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex flex-col h-full">

<div className="flex justify-between items-center p-2 text-xs mt-2 select-none">
<span className="font-mono" id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Settings</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a] focus:ring-2 focus:ring-purple-400">
<i className="fas fa-xmark"></i>
</button>
</div>
</header>

<div className="flex flex-col items-center mb-6 px-6">
<img className="w-20 h-20 rounded-full border-4 border-[#212143] object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="mt-3 text-lg font-bold">Your Name</div>
<div className="text-xs text-white/50">you@email.com</div>
<button className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-medium text-white text-sm">Edit Profile</button>
</div>

<main className="flex-1 px-6 pb-28 overflow-y-auto hide-scrollbar">
<div className="space-y-6">

<div className="bg-[#181830] rounded-2xl shadow-lg p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-bell text-purple-400"></i></span>
<div>
<div className="font-semibold">Push Notifications</div>
<div className="text-xs text-gray-400">Receive important updates</div>
</div>
</div>
<label className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 rounded-full bg-[#222241] flex items-center transition peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500">
<span className="inline-block w-5 h-5 rounded-full bg-white transition transform translate-x-1 shadow"></span>
</div>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-fingerprint text-blue-400"></i></span>
<div>
<div className="font-semibold">Biometric Login</div>
<div className="text-xs text-gray-400">Use Face ID or Fingerprint</div>
</div>
</div>
<label className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 rounded-full bg-[#222241] flex items-center transition peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500">
<span className="inline-block w-5 h-5 rounded-full bg-white transition transform translate-x-1 peer-checked:translate-x-6 shadow"></span>
</div>
</label>
</div>
</div>

<div className="bg-[#181830] rounded-2xl shadow-lg p-5 space-y-2">
<settinglink color="text-indigo-400" icon="user-shield" label="Privacy &amp; Security"></settinglink>
<settinglink color="text-pink-400" icon="file-invoice-dollar" label="Manage Subscriptions"></settinglink>
<settinglink color="text-green-400" icon="globe" label="Language"></settinglink>
<settinglink color="text-gray-300" icon="moon" label="Dark Mode" last=""></settinglink>
</div>
<div className="bg-[#181830] rounded-2xl shadow-lg p-5 space-y-2">
<settinglink color="text-blue-400" icon="question-circle" label="Help &amp; Support"></settinglink>
<settinglink color="text-red-400" icon="right-from-bracket" label="Logout" last=""></settinglink>
</div>
</div>
</main>

<nav className="absolute bottom-0 left-0 right-0 bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-chart-pie text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-ellipsis-h text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Settings</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
</div>
</nav>
</div>
</div>


    </>
  );
}
