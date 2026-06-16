import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const progressSection = document.getElementById('progress-section');
    const closeBtn = document.getElementById('close-btn');
    
    progressSection.addEventListener('click', function() {
      if (!progressSection.classList.contains('expanded')) {
        progressSection.classList.add('expanded');
        progressSection.style.backgroundColor = '#f7eee4';
        closeBtn.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
    
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      progressSection.classList.remove('expanded');
      closeBtn.classList.add('hidden');
      document.body.style.overflow = '';
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 z-10 bg-[#f7eee4] p-4 flex justify-between items-center">
<div className="text-lg font-semibold">12:34 PM</div>
<div className="flex gap-2">
<div className="w-5 h-3 rounded-sm border border-[#44120a]/40 relative">
<div className="absolute inset-0 bg-[#44120a] w-3/4 rounded-sm"></div>
</div>
</div>
</div>

<div className="progress-section fixed top-12 left-0 right-0 z-10 px-4 py-2 bg-[#f7eee4]" id="progress-section">
<div className="p-4 bg-gradient-to-b from-[#f7eee4] to-[#eb9c7c]/20 rounded-3xl shadow-lg">
<div className="flex justify-between items-center">
<h2 className="progress-title text-xl font-semibold">Today's Progress</h2>
<button className="hidden p-2 rounded-full" id="close-btn">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex justify-between mt-3">

<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="font-semibold">Protein</span>
<span className="text-xs">68g to go</span>
</div>
<div className="w-32 h-4 bg-[#f7eee4] rounded-full border border-[#44120a]/20">
<div className="h-full w-5/12 bg-[#eb9c7c] rounded-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="font-semibold">Calories</span>
<span className="text-xs">1,000 to go</span>
</div>
<div className="w-32 h-4 bg-[#f7eee4] rounded-full border border-[#44120a]/20">
<div className="h-full w-5/12 bg-[#eb9c7c] rounded-full"></div>
</div>
</div>
</div>
<div className="flex justify-between mt-6">

<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="font-semibold">Healthy Fats</span>
<svg className="w-4 h-4 text-[#00c491] fill-current" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>
</div>
<div className="w-32 h-4 bg-[#f7eee4] rounded-full border border-[#44120a]/20">
<div className="h-full w-10/12 bg-[#00c491] rounded-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="font-semibold">Good Carbs</span>
<span className="text-xs text-[#df2935]">20g over</span>
</div>
<div className="w-32 h-4 bg-[#f7eee4] rounded-full border border-[#44120a]/20">
<div className="h-full w-full bg-[#00c491] rounded-full"></div>
</div>
</div>
</div>

<div className="progress-details">

<div className="mt-8 space-y-4">
<div className="p-3 bg-white rounded-xl">
<div className="flex justify-between">
<span>Total Protein</span>
<span className="font-semibold">72g / 140g</span>
</div>
</div>
<div className="p-3 bg-white rounded-xl">
<div className="flex justify-between">
<span>Total Calories</span>
<span className="font-semibold">1,800 / 2,800</span>
</div>
</div>
<div className="p-3 bg-white rounded-xl">
<div className="flex justify-between">
<span>Healthy Fats</span>
<span className="font-semibold">28g / 70g</span>
</div>
</div>
<div className="p-3 bg-white rounded-xl">
<div className="flex justify-between">
<span>Good Carbs</span>
<span className="font-semibold text-[#df2935]">370g / 350g</span>
</div>
</div>
</div>

<div className="mt-8 p-4 bg-white rounded-2xl">
<div className="flex items-center gap-2">
<span className="text-4xl font-bold">2</span>
<span className="text-lg font-semibold">day streak</span>
</div>
<p className="mt-2 text-sm">Feed your streak — log today's meals and hit your protein or calorie goal to keep it alive.</p>

<div className="mt-6 flex justify-between">
<div className="flex flex-col items-center">
<span className="text-xs mb-2">M</span>
<div className="w-9 h-9 rounded-full bg-[#00c491] text-white flex items-center justify-center">✓</div>
</div>
<div className="flex flex-col items-center">
<span className="text-xs mb-2">T</span>
<div className="w-9 h-9 rounded-full bg-[#00c491] text-white flex items-center justify-center">✓</div>
</div>
<div className="flex flex-col items-center">
<span className="text-xs mb-2">W</span>
<div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
</div>
<div className="flex flex-col items-center">
<span className="text-xs mb-2">T</span>
<div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
</div>
<div className="flex flex-col items-center">
<span className="text-xs mb-2">F</span>
<div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
</div>
<div className="flex flex-col items-center">
<span className="text-xs mb-2">S</span>
<div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
</div>
<div className="flex flex-col items-center">
<span className="text-xs mb-2">S</span>
<div className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-56 pb-48">

<div className="px-6 py-3 space-y-4 mb-4">

<div className="max-w-[90%]">
<p className="text-[#44120a] leading-6">
          You have two paths forward:
          <br/><br/>
          1. Meal Ideas Based on Their Plan
          "Want meal ideas that fit your plan? Choose breakfast, lunch, or dinner, and I'll suggest meals based on your preferences!"
          <br/><br/>
          2. Track What You've Eaten Today
          "Tell me what you ate today and I'll calculate how close you are to your daily goals!"
        </p>
</div>

<div className="flex justify-end">
<div className="bg-[#eb9c7c] rounded-2xl rounded-br-sm px-3 py-1.5">
<p className="text-[#44120a]">I ate 4 eggs today</p>
</div>
</div>

<div className="max-w-[90%]">
<p className="text-[#44120a] leading-6">
          Nice! Let's see how that stacks up against your nutrition goals.
          <br/><br/>
          Based on an estimate of 6g of protein per egg, that's around 24g of protein. Here's where you're at so far today:
          <br/><br/>
          • Calories: ~300 / 2,500–2,800<br/>
          • Protein: ~24g / 150–180g → Still need 126–156g<br/>
          • Healthy Fats: ~20g / 70–90g → Still need 50–70g<br/>
          • Good Carbs: ~1g / 300–350g → Still need 299–349g
          <br/><br/>
          Quick Nutrition Tip: "You're low on carbs—add complex carbs like oatmeal, sweet potatoes, or whole grains to your next meal to close the gap!"
        </p>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 z-10">
<div className="p-4 bg-[#f7eee4] rounded-t-3xl shadow-lg">

<div className="flex justify-between mb-4">
<div className="border border-[#44120a]/20 rounded-2xl px-4 py-3 flex-1 mx-1 text-center">
<span className="font-semibold">🍳 Breakfast</span>
</div>
<div className="border border-[#44120a]/20 rounded-2xl px-4 py-3 flex-1 mx-1 text-center">
<span className="font-semibold">🥗 Lunch</span>
</div>
<div className="border border-[#44120a]/20 rounded-2xl px-4 py-3 flex-1 mx-1 text-center">
<span className="font-semibold">🍽️ Dinner</span>
</div>
</div>

<div className="flex justify-between items-center">
<span className="text-[#44120a]/50 font-semibold">Speak or type to log what you ate …</span>
<div className="p-4 rounded-full">
<svg className="w-5 h-6 text-[#44120a] fill-current" viewbox="0 0 24 24">
<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"></path>
</svg>
</div>
</div>
</div>
</div>


    </>
  );
}
