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
      
    function showConfig(mode) {
      document.getElementById('config-date').classList.toggle('hidden', mode !== 'date');
      document.getElementById('config-regex').classList.toggle('hidden', mode !== 'regex');
      document.getElementById('config-userdef').classList.toggle('hidden', mode !== 'user_def_field');
    }
    // Initial state: only no_join config shown (none of the config boxes)
    document.addEventListener('DOMContentLoaded', function() {
      showConfig('no_join');
      document.querySelectorAll('input[name="mode"]').forEach(inp => {
        inp.addEventListener('change', () => showConfig(inp.value));
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
      
<div className="w-full max-w-2xl bg-white shadow rounded-lg p-8">
<h1 className="text-2xl font-bold mb-4">Conversation Joiner</h1>
<p className="mb-6 text-gray-700">
      The data unit of analysis is a <strong>conversation</strong>, which groups one or more audios between an operator and a client. Select how to join audio files into conversations for analysis.
    </p>
<form>
<fieldset>
<legend className="font-semibold text-lg mb-3">Mode</legend>
<div className="space-y-4">

<label className="flex items-start p-3 rounded border border-gray-200 cursor-pointer bg-gray-50">
<input checked="" className="mt-1 mr-3 accent-blue-600" name="mode" onchange="showConfig('no_join')" type="radio" value="no_join"/>
<div>
<span className="font-medium">No join (1-1 correspondence)</span>
<p className="text-sm text-gray-600 mt-1">
                Each uploaded audio is shown as a separate conversation. Suitable when each audio represents a full conversation.
              </p>
</div>
</label>

<label className="flex items-start p-3 rounded border border-gray-200 cursor-pointer bg-gray-50">
<input className="mt-1 mr-3 accent-blue-600" name="mode" onchange="showConfig('date')" type="radio" value="date"/>
<div>
<span className="font-medium">Date</span>
<p className="text-sm text-gray-600 mt-1">
                Group audios from the same operator and client that are close in time. Useful for splitting/merging partial calls.
              </p>
</div>
</label>

<label className="flex items-start p-3 rounded border border-gray-200 cursor-pointer bg-gray-50">
<input className="mt-1 mr-3 accent-blue-600" name="mode" onchange="showConfig('regex')" type="radio" value="regex"/>
<div>
<span className="font-medium">Audio name (regex)</span>
<p className="text-sm text-gray-600 mt-1">
                Group audios based on a regex portion of the audio name, e.g. extracting a conversation ID and part number.
              </p>
<pre className="bg-gray-100 rounded px-3 py-2 mt-2 text-xs text-gray-500">
audio_name: 200070526790_Metlife_1321-0011_i1790_20210112_030130_01
regex:     (?P&lt;conversation_id&gt;.*)_(?P&lt;part&gt;\d\d)
              </pre>
</div>
</label>

<label className="flex items-start p-3 rounded border border-gray-200 cursor-pointer bg-gray-50">
<input className="mt-1 mr-3 accent-blue-600" name="mode" onchange="showConfig('user_def_field')" type="radio" value="user_def_field"/>
<div>
<span className="font-medium">User defined field</span>
<p className="text-sm text-gray-600 mt-1">
                Group audios by a metadata field (e.g. conversation_id) common to all audios in a conversation.
              </p>
</div>
</label>
</div>
</fieldset>

<div className="hidden mt-8 border rounded p-6 bg-gray-50" id="config-date">
<h2 className="font-semibold mb-3">Date Mode Configuration</h2>
<div className="mb-4">
<label className="block font-medium mb-1" htmlFor="max_hours">Maximum time difference (hours)</label>
<input className="w-32 rounded border-gray-300" id="max_hours" min="1" name="max_hours" placeholder="e.g. 24" type="number" value="24"/>
</div>
<div>
<label className="block font-medium mb-1" htmlFor="date_param">Client identifier field</label>
<select className="w-full rounded border-gray-300" id="date_param" name="date_param">
<option value="phone">phone</option>
<option value="client_id">client_id</option>
<option value="dni">dni</option>
</select>
</div>
</div>
<div className="hidden mt-8 border rounded p-6 bg-gray-50" id="config-regex">
<h2 className="font-semibold mb-3">Regex Mode Configuration</h2>
<p className="mb-2 text-sm text-gray-600">
          Provide a regex with two capture groups: <code>conversation_id</code> and <code>part</code>.
        </p>
<label className="block font-medium mb-1" htmlFor="regex_expression">Regex expression</label>
<input className="w-full rounded border-gray-300" id="regex_expression" name="regex_expression" placeholder="e.g. (?P&lt;conversation_id&gt;.*)_(?P&lt;part&gt;\d\d)" type="text"/>
<p className="text-xs text-gray-500 mt-1">
          Example audio_name: <code>200070526790_Metlife_1321-0011_i1790_20210112_030130_01</code><br/>
          Example regex: <code>(?P&lt;conversation_id&gt;.*)_(?P&lt;part&gt;\d\d)</code>
</p>
</div>
<div className="hidden mt-8 border rounded p-6 bg-gray-50" id="config-userdef">
<h2 className="font-semibold mb-3">User Defined Field Configuration</h2>
<label className="block font-medium mb-1" htmlFor="userdef_field">Metadata field to group by</label>
<select className="w-full rounded border-gray-300" id="userdef_field" name="userdef_field">
<option value="conv_identifier">conv_identifier</option>
<option value="call_id">call_id</option>
<option value="session_id">session_id</option>
</select>
</div>

<div className="mt-10">
<h2 className="font-semibold mb-2">Examples</h2>
<div className="bg-gray-100 rounded p-4 text-xs font-mono overflow-x-auto space-y-2">
<pre className="mb-0">No join mode:
{
  "mode": "no_join"
}</pre>
<pre className="mb-0">Date mode:
{
  "mode": "date",
  "max_hours": 24,
  "params": "phone"
}</pre>
<pre className="mb-0">Regex mode:
{
  "mode": "regex",
  "regex": "(?P<conversation_id>.*)_(?P<part>\\d\\d)"
}</part></conversation_id></pre>
<pre className="mb-0">User defined field:
{
  "mode": "user_def_field",
  "field": "conv_identifier"
}</pre>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700" type="submit">
          Save Configuration
        </button>
</div>
</form>
</div>


    </>
  );
}
