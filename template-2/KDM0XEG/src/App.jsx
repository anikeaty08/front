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
      
    // Visible toggle logic
    const visibleToggle = document.getElementById('visibleToggle');
    const visibleState = document.getElementById('visibleState');
    let visible = true;
    visibleToggle.addEventListener('click', () => {
      visible = !visible;
      visibleToggle.classList.toggle('bg-green-500', visible);
      visibleToggle.classList.toggle('bg-gray-300', !visible);
      visibleToggle.firstElementChild.style.transform = visible ? 'translateX(1.5rem)' : 'translateX(0)';
      visibleState.textContent = visible ? 'Visible' : 'Hidden';
      visibleState.classList.toggle('text-green-600', visible);
      visibleState.classList.toggle('text-gray-500', !visible);
    });
    // Enable GenAI toggle logic
    const genaiToggle = document.getElementById('genaiToggle');
    const genaiState = document.getElementById('genaiState');
    let genaiEnabled = true;
    genaiToggle.addEventListener('click', () => {
      genaiEnabled = !genaiEnabled;
      genaiToggle.classList.toggle('bg-green-500', genaiEnabled);
      genaiToggle.classList.toggle('bg-gray-300', !genaiEnabled);
      genaiToggle.firstElementChild.style.transform = genaiEnabled ? 'translateX(1.5rem)' : 'translateX(0)';
      genaiState.textContent = genaiEnabled ? 'Enabled' : 'Disabled';
      genaiState.classList.toggle('text-green-600', genaiEnabled);
      genaiState.classList.toggle('text-gray-500', !genaiEnabled);
    });
    // Set initial toggle knob positions
    visibleToggle.firstElementChild.style.transform = visible ? 'translateX(1.5rem)' : 'translateX(0)';
    genaiToggle.firstElementChild.style.transform = genaiEnabled ? 'translateX(1.5rem)' : 'translateX(0)';
  
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
      
<div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 space-y-8">
<div className="mb-4">
<h2 className="text-2xl font-semibold text-gray-800">General Configuration Options</h2>
<p className="text-gray-500 text-sm mt-1">Edit the project-level settings below.</p>
</div>

<div>
<label className="flex items-center justify-between mb-1">
<span className="font-medium text-gray-700">Visible</span>
<span className="text-sm text-gray-400 ml-2">Hide project from filters</span>
</label>
<div className="flex items-center">
<button aria-pressed="true" className="w-12 h-6 bg-green-500 rounded-full relative transition-colors focus:outline-none" id="visibleToggle" type="button">
<span className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform translate-x-6 transition-transform"></span>
</button>
<span className="ml-3 text-green-600 font-medium" id="visibleState">Visible</span>
</div>
</div>

<div>
<label className="block font-medium text-gray-700 mb-1" htmlFor="codifications">
        Codification Success
      </label>
<p className="text-sm text-gray-400 mb-2">Select which codifications correspond to a success in the call.</p>
<select className="w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" id="codifications" multiple="">
<option selected value="venta">venta</option>
<option selected value="venta_online">venta_online</option>
<option value="no_venta">no_venta</option>
<option value="cancelada">cancelada</option>
<option value="pendiente">pendiente</option>
</select>
<p className="text-xs text-gray-400 mt-1">Hold Ctrl (Windows) or Command (Mac) to select multiple.</p>
</div>

<div>
<label className="flex items-center justify-between mb-1">
<span className="font-medium text-gray-700">Enable GenAI</span>
<span className="text-sm text-gray-400 ml-2">Allow users to ask about the call in detail views</span>
</label>
<div className="flex items-center">
<button aria-pressed="true" className="w-12 h-6 bg-green-500 rounded-full relative transition-colors focus:outline-none" id="genaiToggle" type="button">
<span className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform translate-x-6 transition-transform"></span>
</button>
<span className="ml-3 text-green-600 font-medium" id="genaiState">Enabled</span>
</div>
</div>

<div>
<label className="block font-medium text-gray-700 mb-1" htmlFor="client_metadata">
        Client Metadata Field
      </label>
<p className="text-sm text-gray-400 mb-2">Select the metadata field used to identify calls belonging to the same client.</p>
<select className="w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" id="client_metadata">
<option selected value="client_id">client_id</option>
<option value="dni">dni</option>
<option value="phone_number">phone_number</option>
<option value="email">email</option>
</select>
</div>

<div className="pt-2 flex justify-end">
<button className="px-6 py-2 bg-indigo-600 text-white rounded font-medium hover:bg-indigo-700 focus:outline-none">
        Save Configuration
      </button>
</div>
</div>


    </>
  );
}
