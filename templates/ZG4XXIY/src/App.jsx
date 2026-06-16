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
      
<div className="w-full max-w-md">
<div className="gradient-border">
<div className="bg-[#111111] rounded-[15px]">
<div className="px-6 py-5 border-b border-gray-800">
<h2 className="text-xs font-medium text-gray-400 tracking-widest uppercase">Get Started</h2>
</div>
<div className="space-y-6 px-6 py-6">
<div className="space-y-5">
<div className="">
<span className="gradient-text font-medium text-sm block mb-3">Account Setup</span>
<div className="space-y-2">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
<p className="text-gray-300 text-sm">Create your profile</p>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
<p className="text-gray-400 text-sm">Verify your email address</p>
</div>
</div>
</div>
<div className="gradient-border-thin">
<div className="h-px bg-gray-800"></div>
</div>
<div className="">
<span className="gradient-text font-medium text-sm block mb-3">Preferences</span>
<div className="space-y-2">
<div className="flex items-center justify-between">
<p className="text-gray-300 text-sm">Dark Mode</p>
<div className="w-8 h-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</div>
</div>
<div className="flex items-center justify-between">
<p className="text-gray-300 text-sm">Notifications</p>
<div className="w-8 h-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</div>
</div>
</div>
</div>
<div className="gradient-border-thin">
<div className="h-px bg-gray-800"></div>
</div>
<div className="">
<span className="gradient-text font-medium text-sm block mb-3">Invite Friends</span>
<div className="flex gap-2">
<input className="flex-1 h-9 px-3 rounded-lg bg-gray-900 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="Enter email address" type="email"/>
<button className="h-9 from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all text-sm font-medium text-white bg-gradient-to-r rounded-lg px-4" type="submit">
                                    Send
                                </button>
</div>
</div>
<div className="gradient-border-thin">
<div className="h-px bg-gray-800"></div>
</div>
<div className="">
<span className="gradient-text font-medium text-sm block mb-3">Progress</span>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Profile completed</span>
<span className="text-white font-medium">80%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2">
<div className="progress-bar w-4/5 rounded-full h-2"></div>
</div>
<div className="grid grid-cols-2 gap-y-2 text-sm">
<span className="text-gray-400">Steps remaining:</span>
<span className="text-white font-medium text-right">2 of 10</span>
<span className="text-gray-400">Time to finish:</span>
<span className="text-white font-medium text-right">~5 min</span>
</div>
</div>
</div>
</div>
</div>
<div className="px-6 py-5 border-t border-gray-800">
<div className="flex items-center justify-between">
<div className="gradient-text text-2xl font-light">
                            Welcome aboard!
                        </div>
<button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 px-6 py-2.5 rounded-lg text-white text-sm font-medium transition-all shadow-lg hover:shadow-purple-500/25">
                            Continue
                        </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
