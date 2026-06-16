import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#ffffff] to-[#f0f2f5] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#e1e4e8] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: '44px'}}>
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center p-2 text-xs mt-2">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#eaecf0] mr-3">
<i className="fas fa-arrow-left text-gray-500"></i>
</button>
<h1 className="text-2xl font-bold">Add Recipe</h1>
</div>
<button className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm">Save</button>
</div>
</header>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="mb-6">
<div className="bg-[#eaecf0] rounded-2xl h-48 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
<div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-2">
<i className="fas fa-camera text-orange-500 text-xl"></i>
</div>
<p className="text-sm text-gray-500">Upload Recipe Photo</p>
<p className="text-xs text-gray-400 mt-1">Tap to browse from gallery</p>
</div>
</div>

<div className="mb-6">
<h3 className="font-bold mb-3">Basic Information</h3>
<div className="space-y-4">
<div>
<label className="text-sm text-gray-500 mb-1 block">Recipe Name</label>
<input className="w-full bg-[#eaecf0] rounded-xl py-3 px-4 text-sm focus:outline-none border border-gray-200" placeholder="Enter recipe name" type="text"/>
</div>
<div>
<label className="text-sm text-gray-500 mb-1 block">Description</label>
<textarea className="w-full bg-[#eaecf0] rounded-xl py-3 px-4 text-sm focus:outline-none border border-gray-200 h-24 resize-none" placeholder="Briefly describe your recipe"></textarea>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-sm text-gray-500 mb-1 block">Prep Time</label>
<div className="relative">
<input className="w-full bg-[#eaecf0] rounded-xl py-3 px-4 text-sm focus:outline-none border border-gray-200" placeholder="15" type="text"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">mins</span>
</div>
</div>
<div>
<label className="text-sm text-gray-500 mb-1 block">Cook Time</label>
<div className="relative">
<input className="w-full bg-[#eaecf0] rounded-xl py-3 px-4 text-sm focus:outline-none border border-gray-200" placeholder="30" type="text"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">mins</span>
</div>
</div>
</div>
<div>
<label className="text-sm text-gray-500 mb-1 block">Difficulty</label>
<div className="flex space-x-2">
<button className="flex-1 py-2 bg-orange-500 text-white rounded-xl text-sm">Easy</button>
<button className="flex-1 py-2 bg-[#eaecf0] text-gray-600 rounded-xl text-sm">Medium</button>
<button className="flex-1 py-2 bg-[#eaecf0] text-gray-600 rounded-xl text-sm">Hard</button>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold">Categories</h3>
<button className="text-xs text-orange-600">Add New</button>
</div>
<div className="flex flex-wrap gap-2">
<div className="bg-orange-100 text-orange-600 text-sm px-3 py-1.5 rounded-full flex items-center">
<span>Breakfast</span>
<i className="fas fa-times ml-2 text-xs"></i>
</div>
<div className="bg-orange-100 text-orange-600 text-sm px-3 py-1.5 rounded-full flex items-center">
<span>Healthy</span>
<i className="fas fa-times ml-2 text-xs"></i>
</div>
<div className="bg-[#eaecf0] text-gray-600 text-sm px-3 py-1.5 rounded-full">
              + Add Category
            </div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold">Ingredients</h3>
<button className="text-xs text-orange-600">Add More</button>
</div>
<div className="space-y-3">
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-center border border-gray-200">
<input className="flex-1 bg-transparent focus:outline-none text-sm" type="text" value="2 large eggs"/>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/60">
<i className="fas fa-times text-gray-400 text-sm"></i>
</button>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-center border border-gray-200">
<input className="flex-1 bg-transparent focus:outline-none text-sm" type="text" value="1 ripe avocado"/>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/60">
<i className="fas fa-times text-gray-400 text-sm"></i>
</button>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-center border border-gray-200">
<input className="flex-1 bg-transparent focus:outline-none text-sm" type="text" value="2 slices of bread"/>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/60">
<i className="fas fa-times text-gray-400 text-sm"></i>
</button>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-center border border-dashed border-gray-300">
<input className="flex-1 bg-transparent focus:outline-none text-sm text-gray-400" placeholder="Add ingredient" type="text"/>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-100">
<i className="fas fa-plus text-orange-500 text-sm"></i>
</button>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold">Instructions</h3>
<button className="text-xs text-orange-600">Add Step</button>
</div>
<div className="space-y-3">
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-start border border-gray-200">
<div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
<span className="text-xs">1</span>
</div>
<textarea className="flex-1 bg-transparent focus:outline-none text-sm resize-none h-16">Toast bread slices until golden brown.</textarea>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/60 flex-shrink-0 mt-1">
<i className="fas fa-times text-gray-400 text-sm"></i>
</button>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-start border border-gray-200">
<div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
<span className="text-xs">2</span>
</div>
<textarea className="flex-1 bg-transparent focus:outline-none text-sm resize-none h-16">Mash avocado and spread on toast.</textarea>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-white/60 flex-shrink-0 mt-1">
<i className="fas fa-times text-gray-400 text-sm"></i>
</button>
</div>
<div className="bg-[#eaecf0] rounded-xl p-3 flex items-start border border-dashed border-gray-300">
<div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
<span className="text-xs">3</span>
</div>
<textarea className="flex-1 bg-transparent focus:outline-none text-sm resize-none h-16 text-gray-400" placeholder="Add step instructions"></textarea>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-100 flex-shrink-0 mt-1">
<i className="fas fa-plus text-orange-500 text-sm"></i>
</button>
</div>
</div>
</div>
</main>
</div>
</div>

<style>
    .hide-scrollbar::-webkit-scrollbar { display:none;}
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none;}
  </style>

    </>
  );
}
