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



    // Simulate user context: true if user is Guillermo Iglesias or his team
    const IS_GUILLE_TEAM = false; // Change to true to show BigQuery option

    document.addEventListener("DOMContentLoaded", function () {
      const enableCheckbox = document.getElementById("enable");
      const configSection = document.getElementById("configSection");
      const bqOption = document.getElementById("sendToBqOption");
      const sendToBqCheckbox = document.getElementById("send_to_bq");
      const extensionSelect = document.getElementById("extension");
      const extensionLabel = document.getElementById("extensionLabel");

      function updateConfigVisibility() {
        configSection.style.display = enableCheckbox.checked ? "block" : "none";
      }

      function updateBqVisibility() {
        if (IS_GUILLE_TEAM) {
          bqOption.style.display = "block";
        } else {
          bqOption.style.display = "none";
        }
      }

      function updateExtensionLock() {
        if (sendToBqCheckbox && sendToBqCheckbox.checked) {
          extensionSelect.value = "parquet";
          extensionSelect.disabled = true;
          extensionLabel.classList.add("opacity-60");
        } else {
          extensionSelect.disabled = false;
          extensionLabel.classList.remove("opacity-60");
        }
      }

      enableCheckbox.addEventListener("change", updateConfigVisibility);

      if (sendToBqCheckbox) {
        sendToBqCheckbox.addEventListener("change", updateExtensionLock);
      }

      updateConfigVisibility();
      updateBqVisibility();
      updateExtensionLock();
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
      
<div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8 space-y-8">
<div>
<h1 className="text-2xl font-bold mb-2">Export analyzed data to dumps</h1>
<p className="text-gray-600 mb-2">Select if you want analyzed data uploaded to S3 for later download and processing. Then, select the dump types needed for your project.</p>
</div>

<div className="flex items-center space-x-4">
<label className="font-medium" htmlFor="enable">Enable export</label>
<input className="w-5 h-5 accent-blue-600" id="enable" name="enable" type="checkbox" />
</div>
<form className="space-y-6" id="dumpsForm">
<div id="configSection" style={{display: `none`}}>

<div className="flex items-center space-x-4 mb-4" id="sendToBqOption" style={{display: `none`}}>
<label className="font-medium" htmlFor="send_to_bq">Send to BigQuery</label>
<input className="w-5 h-5 accent-green-600" id="send_to_bq" name="send_to_bq" type="checkbox" />
<span className="text-xs text-gray-500">(Only for Guillermo Iglesias and team)</span>
</div>

<div className="flex items-center space-x-4 mb-4">
<label className="font-medium" htmlFor="extension" id="extensionLabel">Extension</label>
<select className="border rounded px-3 py-1" id="extension" name="extension">
<option selected value="parquet">parquet</option>
<option value="csv">csv</option>
</select>
<span className="text-xs text-gray-500">File format to export. Locked to parquet if sending to BigQuery.</span>
</div>

<div className="flex items-center space-x-4 mb-4">
<label className="font-medium" htmlFor="padding_chars">Padding chars</label>
<input className="border rounded px-3 py-1 w-24" id="padding_chars" min="1" name="padding_chars" type="number" value="35" />
<span className="text-xs text-gray-500">Positive integer ({">"}0). Default: 35</span>
</div>

<div className="flex items-center space-x-4 mb-6">
<label className="font-medium" htmlFor="only_deployed">Only deployed</label>
<input className="w-5 h-5 accent-blue-500" id="only_deployed" name="only_deployed" type="checkbox" />
<span className="text-xs text-gray-500">Dump only detections belonging to deployed concepts/business rules</span>
</div>

<div>
<h2 className="text-lg font-semibold mb-2">Select files to dump</h2>
<div className="space-y-4">

<div>
<label className="font-medium flex items-center">
<input className="accent-blue-500 mr-2" id="base" name="files_to_dump[base]" type="checkbox" />
                Base: Vertical data
              </label>
</div>

<div className="ml-6">
<label className="font-medium flex items-center">
<input className="accent-blue-500 mr-2" id="vertical_all" name="files_to_dump[vertical_files][all]" type="checkbox" />
                All (includes future vertical dumps)
              </label>
<div className="ml-6 space-y-1">
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[vertical_files][metadata]" type="checkbox" />Metadata</label>
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[vertical_files][concepts]" type="checkbox" />Concepts</label>
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[vertical_files][business_rules]" type="checkbox" />Business Processes</label>
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[vertical_files][kpis]" type="checkbox" />Kpis</label>
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[vertical_files][language_errors]" type="checkbox" />Language errors</label>
</div>
</div>

<div className="ml-6">
<label className="font-medium">Transcript data</label>
<div className="ml-6 space-y-1">
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[transcript][complete]" type="checkbox" />Complete</label>
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[transcript][fragments]" type="checkbox" />Fragments <span className="ml-2 text-xs text-gray-400">(superusers only)</span></label>
</div>
</div>

<div className="ml-6">
<label className="font-medium">Fragment level</label>
<div className="ml-6 space-y-1">
<label className="flex items-center text-sm"><input className="accent-blue-500 mr-2" name="files_to_dump[fragment_level][kpis]" type="checkbox" />Kpis</label>
</div>
</div>

<div className="ml-6">
<label className="flex items-center font-medium">
<input className="accent-blue-500 mr-2" name="files_to_dump[funnel]" type="checkbox" />Funnel
              </label>
</div>

<div className="ml-6">
<label className="flex items-center font-medium">
<input className="accent-blue-500 mr-2" name="files_to_dump[indicators]" type="checkbox" />Indicators
              </label>
</div>
</div>
</div>
</div>

<div className="pt-6">
<button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700" type="button">Save Configuration</button>
</div>
</form>
</div>

    </>
  );
}
