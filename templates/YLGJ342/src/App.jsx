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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Add staggered animation to template items
        const items = document.querySelectorAll('.item-enter');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('item-enter-active');
            }, index * 100);
        });
        
        // Tab switching functionality
        const tabs = document.querySelectorAll('nav button');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active state from all tabs
                tabs.forEach(t => {
                    t.style.color = 'rgb(107 114 128)';
                    const indicator = t.querySelector('div');
                    if (indicator) indicator.remove();
                });
                
                // Add active state to clicked tab
                this.style.color = '#E87424';
                const indicator = document.createElement('div');
                indicator.className = 'absolute bottom-0 left-0 right-0 h-0.5 rounded-full';
                indicator.style.backgroundColor = '#E87424';
                this.appendChild(indicator);
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
      
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
<div className="bg-white rounded-lg shadow-2xl w-full max-w-[600px] dialog-enter dialog-enter-active">

<div className="px-6 py-4 border-b border-gray-200" style={{backgroundColor: '#006394'}}>
<h2 className="text-xl font-bold text-white tracking-tight" style={{opacity: '0.87'}}>Create an Email Campaign</h2>
</div>

<div className="p-6">

<div className="flex gap-2 mb-6">
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-5 w-5 text-gray-500" data-lucide="search"></i>
</div>
<input className="w-full h-14 pl-12 pr-4 rounded-t-md border-0 text-base focus:outline-none focus:ring-2 transition-all duration-200" onblur="this.style.borderBottomColor='transparent'" onfocus="this.style.borderBottomColor='#E87424'" placeholder="Search for Templates" style={{backgroundColor: '#F4F4F4', borderBottom: '2px solid transparent', fontSize: '16px'}} type="text"/>
</div>
<button className="px-4 h-9 rounded font-semibold text-white text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105" style={{backgroundColor: '#E87424', minWidth: '120px'}}>
                        CREATE NEW
                    </button>
</div>

<div className="border-b border-gray-200 mb-6">
<nav className="flex space-x-8 h-12">
<button className="relative px-1 py-3 text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors duration-200" style={{letterSpacing: '1.25px'}}>
                            TalentMap Templates
                        </button>
<button className="relative px-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200" style={{letterSpacing: '1.25px', color: '#E87424'}}>
                            My Templates
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{backgroundColor: '#E87424'}}></div>
</button>
<button className="relative px-1 py-3 text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors duration-200" style={{letterSpacing: '1.25px'}}>
                            Shared Templates
                        </button>
</nav>
</div>

<div className="space-y-2 mb-6">
<div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group item-enter item-enter-active flex items-center justify-between" style={{animationDelay: '100ms'}}>
<div>
<h3 className="text-base font-normal text-black mb-1" style={{opacity: '0.87'}}>Employee Engagement</h3>
<p className="text-sm text-gray-600" style={{opacity: '0.6'}}>1 Initial, 3 Reminders, 1 Thank you</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded" style={{color: 'rgba(0,0,0,0.54)'}}>
<i className="h-4 w-4" data-lucide="trash-2"></i>
</button>
</div>
<div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group item-enter item-enter-active flex items-center justify-between" style={{animationDelay: '200ms'}}>
<div>
<h3 className="text-base font-normal text-black mb-1" style={{opacity: '0.87'}}>Employee Onboarding</h3>
<p className="text-sm text-gray-600" style={{opacity: '0.6'}}>2 Initial, 2 Reminders, 1 Thank you</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded" style={{color: 'rgba(0,0,0,0.54)'}}>
<i className="h-4 w-4" data-lucide="trash-2"></i>
</button>
</div>
<div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group item-enter item-enter-active flex items-center justify-between" style={{animationDelay: '300ms'}}>
<div>
<h3 className="text-base font-normal text-black mb-1" style={{opacity: '0.87'}}>Employee Exit</h3>
<p className="text-sm text-gray-600" style={{opacity: '0.6'}}>1 Initial, 2 Reminders, 1 Thank you</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded" style={{color: 'rgba(0,0,0,0.54)'}}>
<i className="h-4 w-4" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">
<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-all duration-200">
                    CANCEL
                </button>
<button className="px-4 py-2 text-sm font-medium rounded transition-all duration-200 hover:bg-orange-50" style={{color: '#E87424'}}>
                    OK
                </button>
</div>
</div>
</div>


    </>
  );
}
