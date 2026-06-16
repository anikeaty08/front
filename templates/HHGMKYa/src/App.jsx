import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        neugray: '#e6e7ee',
                        primary: '#5A67D8',
                        primaryhover: '#4c58bf',
                        textprimary: '#4A5568',
                        textsecondary: '#718096'
                    },
                    boxShadow: {
                        'clay': '8px 8px 16px rgba(174, 174, 192, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                        'pressed': 'inset 5px 5px 10px rgba(174, 174, 192, 0.5), inset -5px -5px 10px rgba(255, 255, 255, 0.9)',
                        'hover': 'inset 3px 3px 6px rgba(174, 174, 192, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.8)'
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
      
<div className="device-frame bg-neugray shadow-2xl border-8 border-gray-700">

<div className="h-full p-4 overflow-auto bg-neugray relative">

<div className="opacity-30 pointer-events-none">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="p-3 rounded-full bg-neugray shadow-clay">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h1 className="text-xl font-bold">Harmony</h1>
</div>
<div className="flex items-center gap-2">
<div className="p-3 rounded-full bg-neugray shadow-clay">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-full bg-neugray shadow-clay overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
</div>
</header>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<div className="w-full max-w-xs mx-auto mb-4">
<div className="aspect-square rounded-xl shadow-clay overflow-hidden">
<img alt="Album Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&amp;auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-neugray rounded-3xl shadow-clay w-full max-w-md p-6">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-textprimary">Settings</h2>
<button className="p-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="mb-6">
<h3 className="text-sm font-semibold text-textsecondary mb-4">ACCOUNT</h3>
<div className="flex items-center mb-4">
<div className="w-12 h-12 rounded-full bg-neugray shadow-clay overflow-hidden mr-4">
<img alt="Profile" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<h4 className="font-semibold text-textprimary">Alex Johnson</h4>
<p className="text-xs text-textsecondary">Premium Member</p>
</div>
<button className="ml-auto p-2 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all text-xs text-textsecondary">
                                Edit
                            </button>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-semibold text-textsecondary mb-4">AUDIO SETTINGS</h3>
<div className="space-y-4">

<div className="flex justify-between items-center">
<div>
<h4 className="font-medium text-textprimary">Audio Quality</h4>
<p className="text-xs text-textsecondary">Streaming quality on cellular</p>
</div>
<select className="bg-neugray shadow-pressed rounded-lg text-sm text-textsecondary py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30">
<option>High</option>
<option>Medium</option>
<option>Low</option>
</select>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-textprimary">Crossfade</h4>
<p className="text-xs text-textsecondary">Smooth transition between songs</p>
</div>
<span className="text-xs text-textsecondary">2s</span>
</div>
<div className="h-2 rounded-full shadow-pressed bg-neugray relative">
<div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full"></div>
</div>
</div>

<div className="flex justify-between items-center">
<div>
<h4 className="font-medium text-textprimary">Normalize Volume</h4>
<p className="text-xs text-textsecondary">Set same volume level for all tracks</p>
</div>
<div className="w-11 h-6 bg-neugray shadow-pressed rounded-full p-1 cursor-pointer">
<div className="w-4 h-4 bg-primary rounded-full transform translate-x-5"></div>
</div>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="font-medium text-textprimary">Gapless Playback</h4>
<p className="text-xs text-textsecondary">Eliminate pauses between songs</p>
</div>
<div className="w-11 h-6 bg-neugray shadow-pressed rounded-full p-1 cursor-pointer">
<div className="w-4 h-4 bg-textsecondary rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-semibold text-textsecondary mb-4">DISPLAY</h3>
<div className="space-y-4">

<div className="flex justify-between items-center">
<h4 className="font-medium text-textprimary">Theme</h4>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-neugray shadow-clay flex items-center justify-center border-2 border-primary">
<span className="text-xs">A</span>
</div>
<div className="w-8 h-8 rounded-full bg-gray-800 shadow-clay flex items-center justify-center">
<span className="text-xs text-white">A</span>
</div>
</div>
</div>

<div className="flex justify-between items-center">
<h4 className="font-medium text-textprimary">Language</h4>
<select className="bg-neugray shadow-pressed rounded-lg text-sm text-textsecondary py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30">
<option>English</option>
<option>Spanish</option>
<option>French</option>
</select>
</div>
</div>
</div>

<div className="flex gap-3">
<button className="flex-1 py-3 rounded-xl bg-neugray shadow-clay hover:shadow-hover transition-all text-textsecondary font-medium">
                            Cancel
                        </button>
<button className="flex-1 py-3 rounded-xl bg-primary text-white shadow-clay hover:bg-primaryhover transition-all font-medium">
                            Save Changes
                        </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
