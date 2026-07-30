import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
    document.addEventListener('DOMContentLoaded', function () {
      const tabs = document.querySelectorAll('[data-tab]');
      tabs.forEach(tab => {
        tab.addEventListener('click', function () {
          tabs.forEach(t => t.classList.remove('bg-blue-600', 'text-white'));
          this.classList.add('bg-blue-600', 'text-white');
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="flex flex-col md:flex-row min-h-screen">

<aside className="w-full md:w-64 bg-white shadow-md px-6 py-8">
<h2 className="text-xl font-bold mb-8 text-gray-800">Programs</h2>
<nav className="flex flex-col space-y-2">
<button className="text-left px-4 py-3 rounded-lg transition-all font-medium bg-blue-600 text-white shadow" data-tab="">
          Writing
        </button>
<button className="text-left px-4 py-3 rounded-lg transition-all font-medium text-gray-700 hover:bg-blue-100" data-tab="">
          Public Speaking and Debate
        </button>
<button className="text-left px-4 py-3 rounded-lg transition-all font-medium text-gray-700 hover:bg-blue-100" data-tab="">
          English Language Arts
        </button>
<button className="text-left px-4 py-3 rounded-lg transition-all font-medium text-gray-700 hover:bg-blue-100" data-tab="">
          Mandarin
        </button>
</nav>
</aside>

<main className="flex-1 p-6 overflow-auto">
<div className="flex items-center mb-8">
<h1 className="text-2xl font-bold text-gray-900 mr-4">Weekly Course Calendar</h1>
<span className="text-blue-700 bg-blue-100 rounded px-3 py-1 text-sm font-semibold">August 12 – December 18</span>
</div>
<div className="space-y-6">

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Monday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">3:45 - 5:15 pm</span>
<div className="ml-4 flex-1 bg-blue-100 border-l-4 border-blue-500 rounded px-4 py-2">
<span className="font-semibold text-blue-800">Writing Skills</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:00 - 7:00 pm</span>
<div className="ml-4 flex-1 bg-pink-100 border-l-4 border-pink-500 rounded px-4 py-2">
<span className="font-semibold text-pink-800">Mandarin Level 1</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Tuesday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">4:00 - 5:30 pm</span>
<div className="ml-4 flex-1 bg-green-100 border-l-4 border-green-500 rounded px-4 py-2">
<span className="font-semibold text-green-800">Public Speaking</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:15 - 7:15 pm</span>
<div className="ml-4 flex-1 bg-yellow-100 border-l-4 border-yellow-500 rounded px-4 py-2">
<span className="font-semibold text-yellow-800">ELA: Reading Comprehension</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Wednesday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">4:15 - 5:45 pm</span>
<div className="ml-4 flex-1 bg-purple-100 border-l-4 border-purple-500 rounded px-4 py-2">
<span className="font-semibold text-purple-800">Debate Club</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:30 - 7:30 pm</span>
<div className="ml-4 flex-1 bg-pink-100 border-l-4 border-pink-500 rounded px-4 py-2">
<span className="font-semibold text-pink-800">Mandarin Level 2</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Thursday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">3:45 - 5:15 pm</span>
<div className="ml-4 flex-1 bg-blue-100 border-l-4 border-blue-500 rounded px-4 py-2">
<span className="font-semibold text-blue-800">Creative Writing</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:00 - 7:00 pm</span>
<div className="ml-4 flex-1 bg-green-100 border-l-4 border-green-500 rounded px-4 py-2">
<span className="font-semibold text-green-800">Public Speaking</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Friday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">4:00 - 5:30 pm</span>
<div className="ml-4 flex-1 bg-yellow-100 border-l-4 border-yellow-500 rounded px-4 py-2">
<span className="font-semibold text-yellow-800">ELA: Essay Writing</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:30 - 7:30 pm</span>
<div className="ml-4 flex-1 bg-pink-100 border-l-4 border-pink-500 rounded px-4 py-2">
<span className="font-semibold text-pink-800">Mandarin Conversation</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Saturday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">4:00 - 5:30 pm</span>
<div className="ml-4 flex-1 bg-purple-100 border-l-4 border-purple-500 rounded px-4 py-2">
<span className="font-semibold text-purple-800">Debate Practice</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:00 - 7:30 pm</span>
<div className="ml-4 flex-1 bg-blue-100 border-l-4 border-blue-500 rounded px-4 py-2">
<span className="font-semibold text-blue-800">Writing Workshop</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center mb-2">
<div className="w-24 font-semibold text-blue-700 text-lg">Sunday</div>
<div className="flex-1 border-t border-blue-100"></div>
</div>
<div className="flex flex-col gap-4 ml-8">
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">4:00 - 5:00 pm</span>
<div className="ml-4 flex-1 bg-yellow-100 border-l-4 border-yellow-500 rounded px-4 py-2">
<span className="font-semibold text-yellow-800">ELA: Literature Circle</span>
</div>
</div>
<div className="flex items-center">
<span className="w-28 text-gray-500 text-sm">6:00 - 7:00 pm</span>
<div className="ml-4 flex-1 bg-pink-100 border-l-4 border-pink-500 rounded px-4 py-2">
<span className="font-semibold text-pink-800">Mandarin Cultural Class</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
