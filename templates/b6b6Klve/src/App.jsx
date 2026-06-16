import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = { theme: { extend: { fontFamily: { geist: ['Geist', 'sans-serif'] } } } }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col max-w-md w-full rounded-2xl bg-gray-900 shadow-lg shadow-white/5 overflow-hidden">
<div className="px-8 pt-8 pb-2">
<h3 className="text-base font-medium text-white mb-3">Latest Signups</h3>
<p className="text-sm text-gray-400">
        Track new users as they join your platform. Instantly review signups, spot patterns, and welcome users right from your dashboard.
      </p>
</div>
<div className="flex flex-col items-center px-8 pb-8 pt-6">
<div className="flex items-center w-full max-w-lg gap-4 p-4 rounded-md bg-gray-800 bg-gradient-to-br from-white/5 to-65% ring-4 ring-gray-950/30 mb-8">
<svg className="w-6 h-6" fill="none" viewbox="0 0 16 16">
<path d="M8 1.75v1.042m0 10.416v1.042m3.125-11.663-.521.902m-5.208 9.022-.521.902m8.537-8.538-.902.52m-9.02 5.21-.903.52M14.25 8h-1.042M2.792 8H1.75m11.662 3.125-.902-.52m-9.02-5.21-.903-.52m8.538 8.538-.52-.902m-5.21-9.022-.52-.902" stroke="url(#signup-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"></path>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="rotate(102.529 4.047 5.711) scale(11.5244)" id="signup-gradient" r="1">
<stop stop-color="#fff"></stop>
<stop offset="1" stop-color="#fff" stop-opacity=".2"></stop>
</radialgradient>
</defs>
</svg>
<span className="font-mono text-xs tracking-tight text-gray-500 flex-1">4 new users joined</span>
<span className="text-xs text-gray-600">09:12</span>
</div>
<div className="w-full max-w-xl flex flex-col gap-7">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-700/30">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 block"></span>
</div>
<div>
<div className="font-medium text-sm text-white mb-0.5">jordan.charles@email.com</div>
<div className="text-xs text-gray-500">Signed up May 17 at 09:09</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-700/30">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 block"></span>
</div>
<div>
<div className="font-medium text-sm text-white mb-0.5">ava.nguyen@startup.io</div>
<div className="text-xs text-gray-500">Signed up May 17 at 09:10</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-700/30">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 block"></span>
</div>
<div>
<div className="font-medium text-sm text-white mb-0.5">luis.fernandez@domain.net</div>
<div className="text-xs text-gray-500">Signed up May 17 at 09:11</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-700/30">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 block"></span>
</div>
<div>
<div className="font-medium text-sm text-white mb-0.5">megan.shaw@prosite.com</div>
<div className="text-xs text-gray-500">Signed up May 17 at 09:12</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
