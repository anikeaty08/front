import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50 opacity-0 animate-pulse" style={{animation: 'fadeIn 0.6s ease-out 0.1s forwards'}}>
<div className="px-4 sm:px-6">
<div className="flex justify-between items-center h-14 sm:h-16">
<div className="flex items-center space-x-3">
<div className="bg-emerald-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-semibold text-base sm:text-lg tracking-tight">MP</div>
<h1 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">MealPlan</h1>
</div>
<div className="flex items-center space-x-2 sm:space-x-4">

<button className="sm:hidden inline-flex items-center p-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>

<button className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
<i className="w-4 h-4 mr-2" data-lucide="share-2"></i>
                        Share Plan
                    </button>
<button className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all duration-200">
<i className="w-4 h-4 mr-2" data-lucide="plus"></i>
                        Add Meal
                    </button>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
<span className="text-white text-sm font-medium">A</span>
</div>
</div>
</div>
</div>
</header>
<div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto">

<div className="space-y-6">

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 opacity-0" style={{animation: 'slideInUp 0.6s ease-out 0.2s forwards'}}>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold text-gray-900">Current Week</h2>
<div className="flex items-center space-x-2">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="chevron-left"></i>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="text-sm text-gray-600 mb-3">January 15-21, 2024</div>
<div className="bg-emerald-50 rounded-lg p-3 sm:p-4">
<div className="text-sm font-medium text-emerald-900 mb-1">7 meals planned</div>
<div className="text-xs text-emerald-700">3 shared with family</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden opacity-0" style={{animation: 'slideInUp 0.6s ease-out 0.3s forwards'}}>
<div className="p-4 sm:p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Weekly Meal Plan</h2>
<div className="flex items-center space-x-1 sm:space-x-2">
<button className="px-2.5 py-1.5 sm:px-3 text-xs sm:text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                This Week
                            </button>
<button className="px-2.5 py-1.5 sm:px-3 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                Next Week
                            </button>
</div>
</div>
</div>

<div className="lg:hidden">
<div className="space-y-4 p-4">

<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold text-gray-900">Monday</div>
<div className="text-xs text-gray-600">January 15</div>
</div>
<button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="p-4 space-y-3">
<div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-orange-800 uppercase tracking-wide">Breakfast</span>
<span className="text-xs text-orange-600">15 mins</span>
</div>
<div className="text-sm font-medium text-orange-900">Avocado Toast</div>
</div>
<div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 relative">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-emerald-800 uppercase tracking-wide">Lunch</span>
<span className="text-xs text-emerald-600">12 mins</span>
</div>
<div className="text-sm font-medium text-emerald-900">Caesar Salad</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
<i className="w-2.5 h-2.5 text-white" data-lucide="users"></i>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-lg p-3 relative">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-slate-800 uppercase tracking-wide">Dinner</span>
<span className="text-xs text-slate-600">35 mins</span>
</div>
<div className="text-sm font-medium text-slate-900">Grilled Salmon</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
<i className="w-2.5 h-2.5 text-white" data-lucide="users"></i>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold text-gray-900">Tuesday</div>
<div className="text-xs text-gray-600">January 16</div>
</div>
<button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="p-4 space-y-3">
<div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-blue-800 uppercase tracking-wide">Breakfast</span>
<span className="text-xs text-blue-600">5 mins</span>
</div>
<div className="text-sm font-medium text-blue-900">Greek Yogurt</div>
</div>
<button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center">
<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Lunch</div>
<div className="flex items-center justify-center">
<i className="w-4 h-4 text-gray-400 mr-2" data-lucide="plus"></i>
<span className="text-sm text-gray-500">Add meal</span>
</div>
</button>
<div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-amber-800 uppercase tracking-wide">Dinner</span>
<span className="text-xs text-amber-600">45 mins</span>
</div>
<div className="text-sm font-medium text-amber-900">Chicken Curry</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold text-gray-900">Wednesday</div>
<div className="text-xs text-gray-600">January 17</div>
</div>
<button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="p-4 space-y-3">
<button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center">
<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Breakfast</div>
<div className="flex items-center justify-center">
<i className="w-4 h-4 text-gray-400 mr-2" data-lucide="plus"></i>
<span className="text-sm text-gray-500">Add meal</span>
</div>
</button>
<div className="bg-red-50 border border-red-200 rounded-lg p-3">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-red-800 uppercase tracking-wide">Lunch</span>
<span className="text-xs text-red-600">8 mins</span>
</div>
<div className="text-sm font-medium text-red-900">Pasta Salad</div>
</div>
<div className="bg-teal-50 border border-teal-200 rounded-lg p-3 relative">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-teal-800 uppercase tracking-wide">Dinner</span>
<span className="text-xs text-teal-600">20 mins</span>
</div>
<div className="text-sm font-medium text-teal-900">Veggie Stir Fry</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
<i className="w-2.5 h-2.5 text-white" data-lucide="users"></i>
</div>
</div>
</div>
</div>

<button className="w-full bg-gray-100 border border-gray-200 rounded-lg p-4 hover:bg-gray-200 transition-colors">
<div className="flex items-center justify-center space-x-2">
<span className="text-sm font-medium text-gray-700">Show remaining 4 days</span>
<i className="w-4 h-4 text-gray-600" data-lucide="chevron-down"></i>
</div>
</button>
</div>
</div>

<div className="hidden lg:block overflow-x-auto">
<div className="min-w-full">

<div className="grid grid-cols-8 border-b border-gray-200">
<div className="p-4 bg-gray-50">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Meal</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Mon</div>
<div className="text-sm text-gray-900 mt-1">15</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tue</div>
<div className="text-sm text-gray-900 mt-1">16</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Wed</div>
<div className="text-sm text-gray-900 mt-1">17</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Thu</div>
<div className="text-sm text-gray-900 mt-1">18</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Fri</div>
<div className="text-sm text-gray-900 mt-1">19</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sat</div>
<div className="text-sm text-gray-900 mt-1">20</div>
</div>
<div className="p-4 bg-gray-50 border-l border-gray-200">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sun</div>
<div className="text-sm text-gray-900 mt-1">21</div>
</div>
</div>

</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 opacity-0" style={{animation: 'slideInUp 0.6s ease-out 0.4s forwards'}}>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h3 className="text-sm font-semibold text-gray-900 mb-4">This Week</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Breakfast</span>
<span className="text-sm font-medium">6/7</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Lunch</span>
<span className="text-sm font-medium">5/7</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Dinner</span>
<span className="text-sm font-medium">7/7</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
<h3 className="text-sm font-semibold text-gray-900 mb-4">Shared With</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<img alt="Sarah" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<div>
<div className="text-sm font-medium text-gray-900">Sarah</div>
<div className="text-xs text-gray-500">Partner</div>
</div>
</div>
<div className="flex items-center space-x-3">
<img alt="Mike" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<div>
<div className="text-sm font-medium text-gray-900">Mike</div>
<div className="text-xs text-gray-500">Roommate</div>
</div>
</div>
<button className="w-full text-left flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
<i className="w-4 h-4 text-gray-600" data-lucide="plus"></i>
</div>
<span className="text-sm text-gray-600">Add person</span>
</button>
</div>
</div>

<div className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 p-4 sm:p-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="shopping-cart"></i>
</div>
<div>
<div className="font-semibold text-emerald-900">Shopping List</div>
<div className="text-sm text-emerald-700 mt-1">Auto-generate from meals</div>
</div>
</div>
<button className="w-full mt-4 bg-emerald-600 text-white rounded-lg py-2.5 px-4 font-medium hover:bg-emerald-700 transition-colors">
                        Generate List
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0" style={{animation: 'slideInUp 0.6s ease-out 0.6s forwards'}}>
<button className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-left">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="shuffle"></i>
</div>
<div>
<div className="font-semibold text-gray-900">Meal Suggestions</div>
<div className="text-sm text-gray-600 mt-1">Get personalized ideas</div>
</div>
</div>
</button>
<button className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-left">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-purple-600" data-lucide="copy"></i>
</div>
<div>
<div className="font-semibold text-gray-900">Copy Last Week</div>
<div className="text-sm text-gray-600 mt-1">Reuse previous plan</div>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 lg:hidden z-40 opacity-0" style={{animation: 'scaleIn 0.4s ease-out 1s forwards'}}>
<button className="w-14 h-14 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>
<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
    </style>


    </>
  );
}
