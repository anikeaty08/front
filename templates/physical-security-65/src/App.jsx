import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Toggle Logic for View vs Edit States
        function toggleMode() {
            const viewState = document.getElementById('view-state');
            const editState = document.getElementById('edit-state');
            
            if (viewState.classList.contains('hidden')) {
                // Switch to View
                viewState.classList.remove('hidden');
                editState.classList.add('hidden');
            } else {
                // Switch to Edit
                viewState.classList.add('hidden');
                editState.classList.remove('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">

<div className="h-16 flex items-center px-5 border-b border-transparent">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white mr-3">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight text-gray-900">Konfirmity</span>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="home"></i>
                Home
            </a>
<a className="flex items-center px-3 py-2 text-base text-emerald-700 bg-emerald-50 rounded-md font-medium group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-emerald-600" data-lucide="book"></i>
                Documents
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="sliders-horizontal"></i>
                Controls
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="users"></i>
                People
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="store"></i>
                Vendors
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="monitor"></i>
                Assets
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="alert-triangle"></i>
                Risks
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="activity"></i>
                SIEM
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="calendar"></i>
                Meetings
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="shield-check"></i>
                Security
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="file-check"></i>
                Audits
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="puzzle"></i>
                Integrations
            </a>
<a className="flex items-center px-3 py-2 text-base text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" data-lucide="building"></i>
                Profile
            </a>
</nav>

<div className="p-3 space-y-3 bg-gray-50 border-t border-gray-200">

<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-gray-900">Setup Guide</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div className="flex items-center p-2 rounded-lg border border-gray-200 bg-white shadow-sm">
<div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium border border-gray-200">V</div>
<div className="ml-3 overflow-hidden">
<p className="text-sm font-medium text-gray-900 truncate">Vaishnavi Pawar</p>
<p className="text-xs text-gray-500 truncate">Konfirmity Pte Ltd</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col overflow-hidden relative">

<header className="bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3 shrink-0">
<div className="flex-1 min-w-0">
<div className="flex items-center text-sm text-gray-500 mb-1">
<span>Documents</span>
<i className="w-4 h-4 mx-2" data-lucide="chevron-right"></i>
<span className="text-gray-900">Physical Security Policy</span>
</div>
<div className="flex items-center gap-3">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Physical Security Policy</h1>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Active
                    </span>
</div>
<div className="mt-1 text-sm text-gray-500">Last updated: 14 Jan 2026</div>
</div>
<div className="flex items-center gap-2">

<button className="bg-gray-900 text-white hover:bg-gray-800 text-sm px-4 py-2 rounded-lg font-medium shadow-sm transition-all flex items-center gap-2" onclick="toggleMode()">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i>
<span>Toggle View/Edit State</span>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</header>

<main className="flex-1 flex flex-col overflow-hidden bg-white fade-in" id="view-state">

<div className="border-b border-gray-200 px-6">
<nav className="-mb-px flex space-x-6">
<a className="border-emerald-500 text-emerald-600 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Edit</a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Version History</a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Controls Mapping</a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Implementation Tasks</a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Consent Applicability</a>
<div className="ml-auto py-2">
<button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
<i className="w-3.5 h-3.5 mr-2 text-gray-500" data-lucide="pencil"></i>
                            Edit
                        </button>
</div>
</nav>
</div>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-5xl">
<h2 className="text-xl font-medium text-gray-900 mb-6 tracking-tight">Physical Security Policy</h2>
<h3 className="text-lg font-medium text-gray-900 mb-3">Document Information</h3>

<div className="border border-gray-200 rounded-none overflow-hidden text-sm">
<table className="min-w-full divide-y divide-gray-200">
<tbody className="divide-y divide-gray-200">
<tr>
<td className="w-1/4 bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Name</td>
<td className="bg-white py-3.5 px-4 text-gray-900">Physical Security Policy</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Curr. Version</td>
<td className="bg-white py-3.5 px-4 text-gray-900">[Version]</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Curr. Version Date</td>
<td className="bg-white py-3.5 px-4 text-gray-900">[Current Version Date]</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Type</td>
<td className="bg-white py-3.5 px-4 text-gray-900">Policy</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Owner</td>
<td className="bg-white py-3.5 px-4 text-gray-900">Konfirmity Pte Ltd</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Reviewers</td>
<td className="bg-white py-3.5 px-4 text-gray-900">[Security Committee]</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Owner</td>
<td className="bg-white py-3.5 px-4 text-gray-900">[CISO]</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Distribution List</td>
<td className="bg-white py-3.5 px-4 text-gray-900">KONFIRMITY/ISMS/PEOPLE</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Review Frequency</td>
<td className="bg-white py-3.5 px-4 text-gray-900">Annual</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium border-b border-gray-700">Doc. Repository</td>
<td className="bg-white py-3.5 px-4 text-gray-900">KONFIRMITY/ISMS/</td>
</tr>
<tr>
<td className="bg-gray-800 text-white py-3.5 px-4 font-medium">Document ID</td>
<td className="bg-white py-3.5 px-4 text-gray-900">[ISMS-DOC-ISRMPROCESS-002]</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-8">
<h3 className="text-lg font-medium text-gray-900 mb-3">Document References</h3>
<div className="h-px bg-gray-200 w-full mb-6"></div>
</div>
</div>
</div>

<div className="border-t border-gray-200 p-4 bg-white flex items-center gap-3">
<button className="inline-flex items-center px-4 py-2 border border-emerald-500 shadow-sm text-sm font-medium rounded text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none">
                    Edit Document
                </button>
<button className="inline-flex items-center px-4 py-2 border border-emerald-500 shadow-sm text-sm font-medium rounded text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none">
                    Import
                </button>
<button className="inline-flex items-center px-4 py-2 border border-emerald-500 shadow-sm text-sm font-medium rounded text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none">
                    Task
                </button>
<button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none">
                    Tambi AI
                </button>
</div>
</main>

<main className="flex-1 flex flex-col overflow-hidden bg-gray-50 hidden fade-in relative" id="edit-state">

<div className="bg-amber-50 border-b border-amber-200 px-6 py-2 flex items-center justify-center text-amber-800 text-sm font-medium">
<i className="w-4 h-4 mr-2" data-lucide="edit-3"></i>
                You are currently in Edit Mode. Changes are saved automatically.
            </div>

<div className="bg-white border-b border-gray-200 px-6 shadow-sm">
<nav className="-mb-px flex space-x-6">
<a className="border-emerald-500 text-emerald-700 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center" href="#">
<span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                        Editor
                    </a>
<a className="border-transparent text-gray-400 cursor-not-allowed whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Version History</a>
<a className="border-transparent text-gray-400 cursor-not-allowed whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Controls Mapping</a>
</nav>
</div>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium text-gray-900 tracking-tight">Edit Document Metadata</h2>
<span className="text-xs text-gray-400 font-mono">ID: df680b7a...</span>
</div>

<div className="grid grid-cols-1 gap-6">

<div className="grid grid-cols-12 gap-6 items-center border-b border-gray-100 pb-4">
<label className="col-span-4 text-sm font-medium text-gray-600">Document Name</label>
<div className="col-span-8">
<input className="w-full text-base text-gray-900 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none shadow-sm transition-shadow" type="text" value="Physical Security Policy"/>
</div>
</div>
<div className="grid grid-cols-12 gap-6 items-center border-b border-gray-100 pb-4">
<label className="col-span-4 text-sm font-medium text-gray-600">Current Version</label>
<div className="col-span-8 flex gap-2">
<input className="w-1/3 text-base text-gray-900 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none shadow-sm" type="text" value="[Version]"/>
<span className="text-xs text-gray-400 self-center">Auto-increments on publish</span>
</div>
</div>
<div className="grid grid-cols-12 gap-6 items-center border-b border-gray-100 pb-4">
<label className="col-span-4 text-sm font-medium text-gray-600">Document Type</label>
<div className="col-span-8">
<div className="relative">
<select className="w-full text-base text-gray-900 bg-white border border-gray-300 rounded-md px-3 py-2 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm">
<option>Policy</option>
<option>Procedure</option>
<option>Guideline</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-6 items-center border-b border-gray-100 pb-4">
<label className="col-span-4 text-sm font-medium text-gray-600">Document Owner</label>
<div className="col-span-8">
<input className="w-full text-base text-gray-900 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none shadow-sm" type="text" value="Konfirmity Pte Ltd"/>
</div>
</div>
<div className="grid grid-cols-12 gap-6 items-center border-b border-gray-100 pb-4">
<label className="col-span-4 text-sm font-medium text-gray-600">Reviewers</label>
<div className="col-span-8">
<div className="flex flex-wrap gap-2 border border-gray-300 rounded-md p-2 bg-white focus-within:ring-2 focus-within:ring-emerald-500 shadow-sm">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                        Security Committee <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
</span>
<input className="text-sm outline-none flex-1 min-w-[100px]" placeholder="Add reviewer..." type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-6 items-center border-b border-gray-100 pb-4">
<label className="col-span-4 text-sm font-medium text-gray-600">Review Frequency</label>
<div className="col-span-8">
<div className="flex items-center gap-4">
<label className="flex items-center gap-2">
<input checked="" className="text-emerald-500 focus:ring-emerald-500" name="freq" type="radio"/>
<span className="text-sm text-gray-700">Annual</span>
</label>
<label className="flex items-center gap-2">
<input className="text-emerald-500 focus:ring-emerald-500" name="freq" type="radio"/>
<span className="text-sm text-gray-700">Quarterly</span>
</label>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-6 items-center">
<label className="col-span-4 text-sm font-medium text-gray-600">Document ID</label>
<div className="col-span-8">
<input className="w-full text-base font-mono text-gray-600 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 outline-none cursor-not-allowed" readonly="" type="text" value="[ISMS-DOC-ISRMPROCESS-002]"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-gray-200 p-4 shadow-lg z-10 flex justify-between items-center">
<span className="text-sm text-gray-500 flex items-center">
<i className="w-4 h-4 text-emerald-500 mr-2" data-lucide="check-circle"></i>
                    All changes saved to draft
                </span>
<div className="flex gap-3">
<button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
<button className="px-4 py-2 bg-emerald-600 rounded-lg text-sm font-medium text-white hover:bg-emerald-700 shadow-sm transition-colors flex items-center">
<i className="w-4 h-4 mr-2" data-lucide="save"></i>
                        Save &amp; Publish
                    </button>
</div>
</div>
</main>
</div>

<aside className="w-80 bg-white border-l border-gray-200 flex flex-col flex-shrink-0">
<div className="h-14 border-b border-gray-100 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center">
<i className="w-4 h-4 text-orange-600" data-lucide="dog"></i>
</div>
<span className="text-sm font-medium text-gray-900">Tambi</span>
<i className="w-3 h-3 text-gray-400" data-lucide="info"></i>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="panel-right-close"></i>
</button>
</div>
<div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
<p className="text-sm font-medium text-gray-900 mb-2">How can I help?</p>
<p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
                Hi, I'm Tambi, an AI agent that can answer your compliance questions. I keep improving daily!
            </p>
</div>
<div className="p-4">
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-4 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-white transition-all h-24 items-start placeholder:text-gray-400 align-top" placeholder="Ask anything..." type="text"/>
<button className="absolute bottom-3 right-3 text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</aside>


    </>
  );
}
