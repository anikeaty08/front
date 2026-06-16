import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    setInterval(updateClock, 1000); updateClock();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[375px] h-[812px] rounded-[54px] bg-white overflow-hidden shadow-2xl border-8 border-gray-100">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[18px] z-20"></div>

<div className="pt-9 px-6 pb-1 flex justify-between items-center text-xs">
<span className="font-medium text-gray-500" id="clock">9:41</span>
<div className="flex space-x-1 text-gray-600">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="6" rx="2" strokeWidth="1.5" width="16" x="4" y="9"></rect></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="2" strokeWidth="1.5"></circle></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="10" rx="2" strokeWidth="1.5" width="18" x="3" y="7"></rect></svg>
</div>
</div>

<header className="px-6 py-2 flex justify-between items-center">
<h1 className="text-2xl font-bold text-gray-900">More</h1>
<div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="6" r="1.5"></circle>
<circle cx="12" cy="12" r="1.5"></circle>
<circle cx="12" cy="18" r="1.5"></circle>
</svg>
</div>
</header>

<main className="px-6 pb-24">

<div className="flex items-center bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-5 mb-8 shadow">
<img alt="User" className="w-14 h-14 rounded-full border-4 border-white mr-4" src="https://i.pravatar.cc/100?img=13"/>
<div className="flex-1">
<div className="text-white text-lg font-bold">Your Name</div>
<div className="text-white/90 text-xs">your.email@email.com</div>
</div>
<button className="bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded-full text-xs transition" onclick="alert('Edit profile')">Edit</button>
</div>

<div className="mb-6 space-y-3">
<button className="w-full flex items-center px-5 py-4 bg-white rounded-2xl shadow hover:bg-purple-50 transition" onclick="alert('Manage Account')">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M2 20c0-3.5 4.2-6 10-6s10 2.5 10 6"></path></svg>
</div>
<div className="flex-1 text-left">
<div className="font-semibold text-gray-800">Account</div>
<div className="text-xs text-gray-500">Profile, Personal info, Security</div>
</div>
<svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full flex items-center px-5 py-4 bg-white rounded-2xl shadow hover:bg-purple-50 transition" onclick="alert('Notifications')">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><path d="M15 17h5l-1.405-1.405M20.405 16H9.595c-.234 0-.429-.236-.429-.5v-.717a.995.995 0 01.195-.617L15 5V3.5A1.5 1.5 0 0013.5 2h-3A1.5 1.5 0 009 3.5V5l6.14 9.66c.114.18.165.39.145.6v.74c0 .26-.197.5-.43.5z"></path></svg>
</div>
<div className="flex-1 text-left">
<div className="font-semibold text-gray-800">Notifications</div>
<div className="text-xs text-gray-500">Push, Email, SMS</div>
</div>
<svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full flex items-center px-5 py-4 bg-white rounded-2xl shadow hover:bg-purple-50 transition" onclick="alert('Appearance')">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 7.07l-1.414-1.414M6.343 6.343L4.929 4.929m12.728 0l-1.414 1.414M6.343 17.657l-1.414 1.414"></path></svg>
</div>
<div className="flex-1 text-left">
<div className="font-semibold text-gray-800">Appearance</div>
<div className="text-xs text-gray-500">Theme, App icon</div>
</div>
<svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full flex items-center px-5 py-4 bg-white rounded-2xl shadow hover:bg-purple-50 transition" onclick="alert('Help &amp; Support')">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><path d="M10 14h.01M12 11a1 1 0 10-1-1m1 1v1a1 1 0 001 1h.01M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 3.53 2.09 6.6 5 8.12V21a1 1 0 001 1h6a1 1 0 001-1v-.88A8.978 8.978 0 0021 12z"></path></svg>
</div>
<div className="flex-1 text-left">
<div className="font-semibold text-gray-800">Help &amp; Support</div>
<div className="text-xs text-gray-500">FAQ, Contact us</div>
</div>
<svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<button className="w-full flex items-center px-5 py-4 bg-white rounded-2xl shadow hover:bg-purple-50 transition" onclick="alert('Settings')">
<div className="w-10 h-10 rounded-full bg-gray-500/10 flex items-center justify-center mr-4">
<svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path><path d="M21.5 12a9.429 9.429 0 01-.197 1.785 1.98 1.98 0 01-1.144 1.38l-.586.23a9.46 9.46 0 01-1.338.274c-.01.034-.013.07-.013.105 0 .035.002.071.013.105.255.022.511.054.765.098l.588.228c.428.174.76.56.91.992A9.361 9.361 0 0121.5 12zm-19 0a9.361 9.361 0 01.197-1.785 1.98 1.98 0 011.144-1.38l.586-.23a9.46 9.46 0 011.338-.274c.01-.034.013-.07.013-.105 0-.035-.002-.071-.013-.105a9.372 9.372 0 01-.765-.098l-.588-.228A1.982 1.982 0 012.5 12z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex-1 text-left">
<div className="font-semibold text-gray-800">Settings</div>
<div className="text-xs text-gray-500">App, Permissions</div>
</div>
<svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<button className="w-full flex items-center justify-center bg-red-50 text-red-600 rounded-2xl font-bold py-3 mt-2 hover:bg-red-100 transition" onclick="alert('Log Out')">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Log Out
      </button>
</main>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 z-10">
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Finance')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 10.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v3.75m-18 0v6.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 17.25V10.5m-18 0h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Finance</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Wallet')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="4" width="20" x="2" y="5"></rect><path d="M6 5v-2a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Wallet</span>
</div>
<div className="flex flex-col items-center z-10">
<div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center -mt-8 shadow cursor-pointer" onclick="alert('Add new entry');">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 6v12m6-6H6" strokeLinecap="round"></path></svg>
</div>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Stats')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 13.5h2.25V21M9.75 17.25V21M16.5 12V21M21 7.5v13.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Stats</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="6" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
<span className="text-xs font-bold text-purple-600 mt-1">More</span>
<div className="w-1 h-1 bg-purple-600 rounded-full mt-1"></div>
</div>
</div>
</div>


    </>
  );
}
