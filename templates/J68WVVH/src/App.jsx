import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
<h1 className="text-2xl font-bold mb-2">Client Data</h1>
<p className="text-gray-600 mb-6">(only for superusers)</p>
<form className="space-y-6">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="maxUsers">Max Users</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" id="maxUsers" min="1" name="maxUsers" required="" type="number" value="1001"/>
<p className="text-xs text-gray-400">Max number of non-superusers in the web</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Licenses</label>
<div className="flex flex-wrap gap-4">
<label className="flex items-center space-x-2">
<input checked="" className="text-indigo-600" disabled="" type="checkbox" />
<span>Basic</span>
</input></label>
<label className="flex items-center space-x-2">
<input checked="" className="text-indigo-600" disabled="" type="checkbox"/>
<span>Audit</span>
</label>
<label className="flex items-center space-x-2">
<input checked="" className="text-indigo-600" disabled="" type="checkbox"/>
<span>Modeler</span>
</label>
<label className="flex items-center space-x-2">
<input checked="" className="text-indigo-600" disabled="" type="checkbox"/>
<span>Tipification</span>
</label>
</div>
<p className="text-xs text-gray-400">Licenses the client has paid for</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Roles With Sensible Access</label>
<select className="block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 cursor-not-allowed" disabled="" id="rolesWithSensibleAccess" multiple="" name="rolesWithSensibleAccess">
<option selected="">sensitive_access</option>
</select>
<p className="text-xs text-gray-400">Roles who can see obfuscated data (sensitive_access must always be present)</p>
</div>

<div className="flex items-center">
<input checked="" className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" id="activateMfa" name="activateMfa" type="checkbox"/>
<label className="ml-2 block text-sm font-medium text-gray-700" htmlFor="activateMfa">
          Activate MFA
        </label>
</div>
<p className="text-xs text-gray-400 ml-7 mb-2">Web has MFA access activated by default</p>

<div className="flex items-center">
<input checked="" className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" id="enableGenai" name="enableGenai" type="checkbox"/>
<label className="ml-2 block text-sm font-medium text-gray-700" htmlFor="enableGenai">
          Enable GenAI
        </label>
</div>
<p className="text-xs text-gray-400 ml-7 mb-2">Users can ask LLM questions about audios in details</p>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="maxNumberDataViews">Max Number Data Views</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" id="maxNumberDataViews" min="1" name="maxNumberDataViews" required="" type="number" value="400"/>
<p className="text-xs text-gray-400">Maximum number of data views</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="maxNumberDataViewsAggregated">Max Number Data Views Aggregated</label>
<input className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" id="maxNumberDataViewsAggregated" min="1" name="maxNumberDataViewsAggregated" required="" type="number" value="400"/>
<p className="text-xs text-gray-400">Maximum number of aggregated data views</p>
</div>

<div className="pt-4">
<button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 transition" type="submit">
          Save Configuration
        </button>
</div>
</form>
</div>

    </>
  );
}
