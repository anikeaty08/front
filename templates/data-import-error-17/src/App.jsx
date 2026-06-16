import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-50">

<div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden">

<div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between bg-white shrink-0">
<div className="flex gap-4">
<div className="p-2 bg-red-50 rounded-lg border border-red-100 shrink-0">
<i className="w-6 h-6 text-red-600" data-lucide="alert-octagon" strokeWidth="1.5"></i>
</div>
<div>
<h2 className="text-xl font-medium tracking-tight text-slate-900">Import Validation Failed</h2>
<p className="text-base text-slate-500 mt-1">Found 4 critical errors across 8 rows. Please correct the file and upload again.</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-50 rounded-md">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="overflow-y-auto p-6 space-y-6 bg-slate-50/50">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
<div className="border-l-2 border-red-500 pl-4 py-4 pr-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h3 className="text-lg font-medium text-slate-900">Invalid Value</h3>
<span className="bg-red-50 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium border border-red-100">Critical</span>
</div>
<span className="text-sm text-slate-500">Row 14</span>
</div>
<p className="text-base text-slate-600 mb-3">The value provided does not match the required format options.</p>

<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Column:</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 text-xs font-mono">
                                Weight
                            </span>
</div>

<div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-100 border-b border-slate-200 text-slate-500">
<tr>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider w-16">Row</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider">Product Name</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider">Weight</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider text-right">Message</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="bg-white">
<td className="px-4 py-3 text-slate-400 font-mono text-xs">14</td>
<td className="px-4 py-3 text-slate-700">Ergonomic Chair V2</td>
<td className="px-4 py-3">
<span className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-100 font-mono text-xs">"Heavy"</span>
</td>
<td className="px-4 py-3 text-right text-slate-500 text-xs">Expected numeric (kg)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="border-l-2 border-orange-500 pl-4 py-4 pr-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h3 className="text-lg font-medium text-slate-900">Duplicate Value</h3>
<span className="bg-orange-50 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium border border-orange-100">Unique Constraint</span>
</div>
<span className="text-sm text-slate-500">3 Affected Rows</span>
</div>
<p className="text-base text-slate-600 mb-3">This field requires a unique value for every row, but duplicates were found.</p>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Columns:</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 text-xs font-mono">amazon.com</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 text-xs font-mono">target.com</span>
</div>
<div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-100 border-b border-slate-200 text-slate-500">
<tr>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider w-16">Row</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider">SKU</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider">External ID</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="bg-white">
<td className="px-4 py-3 text-slate-400 font-mono text-xs">22</td>
<td className="px-4 py-3 text-slate-700">TBL-lamp-001</td>
<td className="px-4 py-3 font-mono text-orange-700 bg-orange-50/50">EXT-99821</td>
</tr>
<tr className="bg-white">
<td className="px-4 py-3 text-slate-400 font-mono text-xs">45</td>
<td className="px-4 py-3 text-slate-700">TBL-lamp-002</td>
<td className="px-4 py-3 font-mono text-orange-700 bg-orange-50/50">EXT-99821</td>
</tr>
</tbody>
</table>
<div className="bg-slate-50 px-4 py-2 border-t border-slate-200 text-xs text-slate-500 text-center">
                                + 1 more row with duplicate values
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="border-l-2 border-red-500 pl-4 py-4 pr-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h3 className="text-lg font-medium text-slate-900">Invalid Data Type</h3>
</div>
<span className="text-sm text-slate-500">Row 8</span>
</div>
<p className="text-base text-slate-600 mb-3">Change the value so it matches the expected type (Decimal/Currency).</p>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Column:</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 text-xs font-mono">MAP Price</span>
</div>
<div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-100 border-b border-slate-200 text-slate-500">
<tr>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider w-16">Row</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider">Item</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider">MAP Price</th>
<th className="px-4 py-2 font-medium text-xs uppercase tracking-wider text-right">Message</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="bg-white">
<td className="px-4 py-3 text-slate-400 font-mono text-xs">8</td>
<td className="px-4 py-3 text-slate-700">Wireless Mouse</td>
<td className="px-4 py-3">
<span className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-100 font-mono text-xs">free</span>
</td>
<td className="px-4 py-3 text-right text-slate-500 text-xs">Non-numeric string</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="px-6 py-5 bg-white border-t border-slate-200 shrink-0 flex items-center justify-between">
<button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
                    Download Error Report
                </button>
<div className="flex gap-3">
<button className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200">
                        Cancel Import
                    </button>
<button className="px-4 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
                        Upload Corrected File
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
