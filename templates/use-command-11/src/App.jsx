import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function showUploadModal() {
            document.getElementById('uploadModal').classList.remove('hidden');
            lucide.createIcons();
        }

        function closeUploadModal() {
            document.getElementById('uploadModal').classList.add('hidden');
        }

        function showNewCaseModal() {
            document.getElementById('newCaseModal').classList.remove('hidden');
            lucide.createIcons();
        }

        function closeNewCaseModal() {
            document.getElementById('newCaseModal').classList.add('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
<div className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="bg-neutral-900 text-white w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold tracking-tight">CR</div>
<div>
<div className="text-sm font-semibold tracking-tight">Cancer Registry</div>
<div className="text-xs text-neutral-500">CityCare Health Network</div>
</div>
</div>
<nav className="hidden lg:flex items-center gap-1">
<button className="px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-md">Dashboard</button>
<button className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition">Cases</button>
<button className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition">Patients</button>
<button className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition">Uploads</button>
<button className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition">Reports</button>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition">
<i data-lucide="bell" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition">
<i data-lucide="help-circle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
<div className="w-px h-5 bg-neutral-200"></div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-neutral-100 cursor-pointer transition">
<img alt="User" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="hidden md:block">
<div className="text-xs font-medium">Dr. Sarah Chen</div>
<div className="text-xs text-neutral-500">Hospital Registrar</div>
</div>
<i className="text-neutral-400" data-lucide="chevron-down" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</header>

<div className="flex h-[calc(100vh-73px)]">

<aside className="hidden md:block w-64 bg-white border-r border-neutral-200 overflow-y-auto">
<div className="p-4 space-y-6">
<div>
<div className="px-2 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Registry</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-md" href="#">
<i data-lucide="layout-dashboard" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Dashboard
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="folder-open" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            All Cases
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="users" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Patients
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="flask-conical" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Specimens
                        </a>
</nav>
</div>
<div>
<div className="px-2 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Data</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="upload" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Uploads
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="download" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Exports
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="database" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            API Access
                        </a>
</nav>
</div>
<div>
<div className="px-2 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Quality</div>
<nav className="space-y-1">
<a className="flex items-center justify-between px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<div className="flex items-center gap-3">
<i data-lucide="alert-circle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                                Validation Queue
                            </div>
<span className="px-1.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded">12</span>
</a>
<a className="flex items-center justify-between px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<div className="flex items-center gap-3">
<i data-lucide="flag" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                                Flags
                            </div>
<span className="px-1.5 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded">3</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="shield-check" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Audit Log
                        </a>
</nav>
</div>
<div>
<div className="px-2 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Admin</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="users-2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Users &amp; Roles
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="building-2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Organizations
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition" href="#">
<i data-lucide="settings" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Settings
                        </a>
</nav>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="p-6 max-w-screen-2xl mx-auto space-y-6">

<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Dashboard</h1>
<p className="text-sm text-neutral-500 mt-1">CityCare – Main Hospital</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-300 text-neutral-700 text-sm font-medium rounded-lg hover:bg-neutral-50 transition" onclick="showUploadModal()">
<i data-lucide="upload" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            Upload Data
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition" onclick="showNewCaseModal()">
<i data-lucide="plus" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                            New Case
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white border border-neutral-200 rounded-lg p-5">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-500">Total Cases</div>
<div className="p-2 bg-blue-50 rounded-md">
<i className="text-blue-600" data-lucide="folder" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">1,247</div>
<div className="flex items-center gap-1 mt-2 text-xs">
<span className="text-green-600 font-medium">+12.3%</span>
<span className="text-neutral-500">vs last month</span>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-500">Pending Review</div>
<div className="p-2 bg-amber-50 rounded-md">
<i className="text-amber-600" data-lucide="clock" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">24</div>
<div className="flex items-center gap-1 mt-2 text-xs">
<span className="text-neutral-500">Requires validation</span>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-500">Active Flags</div>
<div className="p-2 bg-red-50 rounded-md">
<i className="text-red-600" data-lucide="alert-triangle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">3</div>
<div className="flex items-center gap-1 mt-2 text-xs">
<span className="text-red-600 font-medium">2 critical</span>
<span className="text-neutral-500">• 1 warning</span>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-5">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-neutral-500">Uploads Today</div>
<div className="p-2 bg-green-50 rounded-md">
<i className="text-green-600" data-lucide="upload" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">7</div>
<div className="flex items-center gap-1 mt-2 text-xs">
<span className="text-green-600 font-medium">5 completed</span>
<span className="text-neutral-500">• 2 processing</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-neutral-200 rounded-lg">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-sm font-semibold text-neutral-900">Recent Cases</h2>
<button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition">View all</button>
</div>
<div className="divide-y divide-neutral-200">
<div className="px-5 py-4 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-neutral-900">C-2025-0001</span>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">SUBMITTED</span>
</div>
<div className="text-sm text-neutral-600">Asha Verma • MRN: H-001-2025</div>
</div>
<span className="text-xs text-neutral-500">2 hours ago</span>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span>Left breast upper outer quadrant</span>
<span>•</span>
<span>Stage IIA</span>
<span>•</span>
<span className="flex items-center gap-1">
<i className="text-green-600" data-lucide="check-circle" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                        ICD-11 Valid
                                    </span>
</div>
</div>
<div className="px-5 py-4 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-neutral-900">C-2025-0002</span>
<span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded">QUERIED</span>
</div>
<div className="text-sm text-neutral-600">Rahul Mehta • MRN: H-002-2025</div>
</div>
<span className="text-xs text-neutral-500">5 hours ago</span>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span>Right lung upper lobe</span>
<span>•</span>
<span>Stage IIIB</span>
<span>•</span>
<span className="flex items-center gap-1">
<i className="text-amber-600" data-lucide="alert-circle" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                        Post-coord warning
                                    </span>
</div>
</div>
<div className="px-5 py-4 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-neutral-900">C-2025-0003</span>
<span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">DRAFT</span>
</div>
<div className="text-sm text-neutral-600">Priya Sharma • MRN: H-003-2025</div>
</div>
<span className="text-xs text-neutral-500">1 day ago</span>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span>Colon, sigmoid</span>
<span>•</span>
<span>Stage pending</span>
<span>•</span>
<span className="flex items-center gap-1">
<i className="text-neutral-400" data-lucide="circle" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                        Incomplete
                                    </span>
</div>
</div>
<div className="px-5 py-4 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-neutral-900">C-2025-0004</span>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">SUBMITTED</span>
</div>
<div className="text-sm text-neutral-600">Anil Kumar • MRN: H-004-2025</div>
</div>
<span className="text-xs text-neutral-500">2 days ago</span>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span>Prostate</span>
<span>•</span>
<span>Stage IIB</span>
<span>•</span>
<span className="flex items-center gap-1">
<i className="text-green-600" data-lucide="check-circle" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                                        ICD-11 Valid
                                    </span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-neutral-200 rounded-lg p-5">
<h2 className="text-sm font-semibold text-neutral-900 mb-4">Quick Actions</h2>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 transition" onclick="showNewCaseModal()">
<i data-lucide="file-plus" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                                    Create New Case
                                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 transition" onclick="showUploadModal()">
<i data-lucide="upload" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                                    Upload Data File
                                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 transition">
<i data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                                    Search ICD-11 Codes
                                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 transition">
<i data-lucide="download" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                                    Export Registry Data
                                </button>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-lg">
<div className="px-5 py-4 border-b border-neutral-200">
<h2 className="text-sm font-semibold text-neutral-900">Recent Activity</h2>
</div>
<div className="p-5 space-y-4">
<div className="flex gap-3">
<div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<i className="text-green-600" data-lucide="check" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-neutral-900">Case <span className="font-medium">C-2025-0001</span> submitted</p>
<p className="text-xs text-neutral-500 mt-0.5">2 hours ago</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
<i className="text-blue-600" data-lucide="upload" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-neutral-900">CSV upload completed</p>
<p className="text-xs text-neutral-500 mt-0.5">3 hours ago • 45 rows processed</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
<i className="text-amber-600" data-lucide="alert-circle" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-neutral-900">Validation warning on <span className="font-medium">C-2025-0002</span></p>
<p className="text-xs text-neutral-500 mt-0.5">5 hours ago</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
<i className="text-purple-600" data-lucide="flask-conical" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-neutral-900">Pathology report received</p>
<p className="text-xs text-neutral-500 mt-0.5">6 hours ago • ACC-24-3345</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white border border-neutral-200 rounded-lg">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-sm font-semibold text-neutral-900">Recent Uploads</h2>
<button className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition">View all</button>
</div>
<div className="divide-y divide-neutral-200">
<div className="px-5 py-3 hover:bg-neutral-50 transition">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-green-100 rounded">
<i className="text-green-600" data-lucide="file-spreadsheet" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-medium text-neutral-900">registry_batch_jan.csv</span>
</div>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">Completed</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 ml-8">
<span>45 rows</span>
<span>•</span>
<span>2.3 MB</span>
<span>•</span>
<span>3 hours ago</span>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-blue-100 rounded">
<i className="text-blue-600" data-lucide="file-json" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-medium text-neutral-900">fhir_bundle_001.ndjson</span>
</div>
<span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">Processing</span>
</div>
<div className="ml-8 mt-2">
<div className="w-full bg-neutral-100 rounded-full h-1.5">
<div className="bg-blue-600 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mt-1.5">
<span>8 of 12 resources</span>
<span>•</span>
<span>1.8 MB</span>
</div>
</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-purple-100 rounded">
<i className="text-purple-600" data-lucide="file" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-medium text-neutral-900">pathology_reports.zip</span>
</div>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">Completed</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 ml-8">
<span>12 PDFs</span>
<span>•</span>
<span>15.7 MB</span>
<span>•</span>
<span>1 day ago</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-lg">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-sm font-semibold text-neutral-900">Validation Queue</h2>
<button className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition">View all</button>
</div>
<div className="divide-y divide-neutral-200">
<div className="px-5 py-3 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-start gap-2">
<div className="p-1.5 bg-red-100 rounded mt-0.5">
<i className="text-red-600" data-lucide="x-circle" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">C-2025-0005</div>
<div className="text-xs text-neutral-500 mt-0.5">Invalid ICD-11 post-coordination</div>
</div>
</div>
<span className="text-xs text-neutral-400">2h</span>
</div>
<div className="ml-8 text-xs text-neutral-600">Extension code XT-Temporal-Recurrence incompatible with stem code 2C60.Y</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-start gap-2">
<div className="p-1.5 bg-amber-100 rounded mt-0.5">
<i className="text-amber-600" data-lucide="alert-triangle" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">C-2025-0006</div>
<div className="text-xs text-neutral-500 mt-0.5">Missing required field</div>
</div>
</div>
<span className="text-xs text-neutral-400">4h</span>
</div>
<div className="ml-8 text-xs text-neutral-600">Diagnosis date is required for submitted cases</div>
</div>
<div className="px-5 py-3 hover:bg-neutral-50 transition cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-start gap-2">
<div className="p-1.5 bg-amber-100 rounded mt-0.5">
<i className="text-amber-600" data-lucide="alert-circle" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">C-2025-0007</div>
<div className="text-xs text-neutral-500 mt-0.5">Data quality warning</div>
</div>
</div>
<span className="text-xs text-neutral-400">1d</span>
</div>
<div className="ml-8 text-xs text-neutral-600">Age at diagnosis (142) exceeds expected range</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="uploadModal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Upload Data</h2>
<p className="text-sm text-neutral-500 mt-0.5">CSV, Excel, JSON, FHIR, DICOM, or PDF formats supported</p>
</div>
<button className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition" onclick="closeUploadModal()">
<i data-lucide="x" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6">
<div className="space-y-6">

<div>
<label className="block text-sm font-medium text-neutral-700 mb-3">Select File Type</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<button className="flex flex-col items-center gap-2 p-4 border-2 border-neutral-900 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition">
<i className="text-neutral-900" data-lucide="file-spreadsheet" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-900">CSV / Excel</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border-2 border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition">
<i className="text-neutral-600" data-lucide="file-json" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-600">JSON / NDJSON</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border-2 border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition">
<i className="text-neutral-600" data-lucide="activity" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-600">FHIR Bundle</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border-2 border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition">
<i className="text-neutral-600" data-lucide="scan" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-600">DICOM</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border-2 border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition">
<i className="text-neutral-600" data-lucide="file-text" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-600">PDF Reports</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border-2 border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition">
<i className="text-neutral-600" data-lucide="package" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-neutral-600">Batch / ZIP</span>
</button>
</div>
</div>

<div className="border-2 border-dashed border-neutral-300 rounded-lg p-12 text-center hover:border-neutral-400 hover:bg-neutral-50 transition cursor-pointer">
<i className="mx-auto text-neutral-400 mb-4" data-lucide="upload-cloud" style={{width: '48px', height: '48px', strokeWidth: '1.5'}}></i>
<p className="text-base font-medium text-neutral-900 mb-1">Drop files here or click to browse</p>
<p className="text-sm text-neutral-500">CSV, XLSX, JSON, NDJSON, FHIR, DICOM, PDF up to 2GB</p>
<p className="text-xs text-neutral-400 mt-3">Files will be scanned for viruses and validated before processing</p>
</div>

<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
<div className="flex gap-3">
<i className="text-blue-600 flex-shrink-0 mt-0.5" data-lucide="info" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<div>
<div className="text-sm font-medium text-blue-900 mb-1">CSV/Excel Expected Columns</div>
<div className="text-xs text-blue-700 space-y-1">
<p><strong>Required:</strong> mrn, first_name, last_name, dob, sex, case_no, diagnosis_date, primary_site_text</p>
<p><strong>Optional:</strong> laterality, stage_group, stage_system, icd11_stem, icd11_extensions, accession_no</p>
</div>
<button className="text-xs font-medium text-blue-700 hover:text-blue-800 underline mt-2">Download template CSV</button>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3">
<input checked="" className="w-4 h-4 rounded border-neutral-300" id="autoValidate" type="checkbox"/>
<label className="text-sm font-medium text-neutral-700" htmlFor="autoValidate">Auto-validate ICD-11 codes</label>
</div>
<div className="flex items-center gap-3">
<input className="w-4 h-4 rounded border-neutral-300" id="mergeDuplicates" type="checkbox"/>
<label className="text-sm font-medium text-neutral-700" htmlFor="mergeDuplicates">Merge duplicate MRNs (update existing records)</label>
</div>
<div className="flex items-center gap-3">
<input checked="" className="w-4 h-4 rounded border-neutral-300" id="notifyComplete" type="checkbox"/>
<label className="text-sm font-medium text-neutral-700" htmlFor="notifyComplete">Notify me when processing completes</label>
</div>
</div>
</div>
</div>
<div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-end gap-3 bg-neutral-50">
<button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition" onclick="closeUploadModal()">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">Start Upload</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="newCaseModal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">New Cancer Registry Case</h2>
<p className="text-sm text-neutral-500 mt-0.5">ICD-11 Standards-Aligned Intake Form</p>
</div>
<button className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition" onclick="closeNewCaseModal()">
<i data-lucide="x" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50">
<div className="flex items-center justify-between max-w-3xl mx-auto">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold">1</div>
<span className="text-sm font-medium text-neutral-900">Patient</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-3"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-sm font-semibold">2</div>
<span className="text-sm font-medium text-neutral-500">Case Details</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-3"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-sm font-semibold">3</div>
<span className="text-sm font-medium text-neutral-500">ICD-11</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-3"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-sm font-semibold">4</div>
<span className="text-sm font-medium text-neutral-500">Specimen</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-3"></div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-sm font-semibold">5</div>
<span className="text-sm font-medium text-neutral-500">Review</span>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto px-6 py-6">
<div className="max-w-3xl mx-auto space-y-6">
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-4">Patient Information</h3>
<div className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Medical Record Number (MRN) <span className="text-red-600">*</span></label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="H-001-2025" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">National ID (Will be hashed) <span className="text-red-600">*</span></label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="National ID number" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name <span className="text-red-600">*</span></label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Enter first name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name <span className="text-red-600">*</span></label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Enter last name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Date of Birth <span className="text-red-600">*</span></label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">Sex at Birth <span className="text-red-600">*</span></label>
<select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent">
<option value="">Select...</option>
<option value="F">Female</option>
<option value="M">Male</option>
<option value="Other">Other</option>
<option value="Unknown">Unknown</option>
</select>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50">
<button className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition">Save as Draft</button>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition" onclick="closeNewCaseModal()">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition">Continue to Case Details</button>
</div>
</div>
</div>
</div>


    </>
  );
}
