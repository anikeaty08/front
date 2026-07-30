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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            const tabIndicator = document.querySelector('.tab-indicator');
            
            // Set initial indicator position and width
            const activeTab = document.querySelector('.tab-btn');
            setIndicator(activeTab);
            
            // Add click event listeners to tab buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => {
                        btn.classList.remove('text-blue-400');
                        btn.classList.add('text-slate-400');
                    });
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Add active class to clicked button and corresponding content
                    this.classList.add('text-blue-400');
                    this.classList.remove('text-slate-400');
                    
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(`${tabId}-content`).classList.add('active');
                    
                    // Update indicator position
                    setIndicator(this);
                });
            });
            
            // Function to set indicator position and width
            function setIndicator(element) {
                const width = element.offsetWidth;
                const left = element.offsetLeft;
                
                tabIndicator.style.width = `${width}px`;
                tabIndicator.style.left = `${left}px`;
            }
            
            // Update indicator position on window resize
            window.addEventListener('resize', function() {
                const activeTab = document.querySelector('.tab-btn.text-blue-400');
                setIndicator(activeTab);
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
      
<div className="max-w-md w-full">

<div className="mb-6">
<div className="tab-menu flex border-b border-slate-800">
<button className="tab-btn px-4 py-3 text-blue-400 font-medium flex-1 text-center relative" data-tab="tab1">Tab 1</button>
<button className="tab-btn px-4 py-3 text-slate-400 font-medium flex-1 text-center relative" data-tab="tab2">Tab 2</button>
<button className="tab-btn px-4 py-3 text-slate-400 font-medium flex-1 text-center relative" data-tab="tab3">Tab 3</button>
<div className="tab-indicator"></div>
</div>
</div>

<div className="tab-content active" id="tab1-content">
<div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
<h2 className="text-xl font-semibold mb-4">Tab 1 Content</h2>
<p className="text-slate-400">This is the content for the first tab. It's kept simple as requested.</p>
</div>
</div>
<div className="tab-content" id="tab2-content">
<div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
<h2 className="text-xl font-semibold mb-4">Tab 2 Content</h2>
<p className="text-slate-400">This is the content for the second tab. All tabs have the same height to prevent menu movement.</p>
</div>
</div>
<div className="tab-content" id="tab3-content">
<div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
<h2 className="text-xl font-semibold mb-4">Tab 3 Content</h2>
<p className="text-slate-400">This is the content for the third tab. The sliding indicator still works smoothly.</p>
</div>
</div>
</div>


    </>
  );
}
