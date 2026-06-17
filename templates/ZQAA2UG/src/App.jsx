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
      
    function app() {
      return {
        screen: 'dashboard',
        editIndex: null,
        templates: [
          {
            name: 'Invoice',
            fields: [
              { name: 'Invoice No', type: 'text', regex: '' },
              { name: 'Date', type: 'date', regex: '' },
              { name: 'Amount', type: 'number', regex: '' }
            ]
          },
          {
            name: 'Receipt',
            fields: [
              { name: 'Store', type: 'text', regex: '' },
              { name: 'Date', type: 'date', regex: '' },
              { name: 'Total', type: 'number', regex: '' }
            ]
          },
          {
            name: 'Contract',
            fields: [
              { name: 'Party A', type: 'text', regex: '' },
              { name: 'Party B', type: 'text', regex: '' },
              { name: 'Date', type: 'date', regex: '' },
              { name: 'Term', type: 'text', regex: '' }
            ]
          }
        ],
        templateForm: {
          name: '',
          fields: []
        },
        resetTemplateForm() {
          this.editIndex = null;
          this.templateForm = { name: '', fields: [] };
        },
        addField() {
          this.templateForm.fields.push({ name: '', type: 'text', regex: '' });
        },
        removeField(idx) {
          this.templateForm.fields.splice(idx, 1);
        },
        moveFieldUp(idx) {
          if (idx === 0) return;
          [this.templateForm.fields[idx - 1], this.templateForm.fields[idx]] = [this.templateForm.fields[idx], this.templateForm.fields[idx - 1]];
        },
        moveFieldDown(idx) {
          if (idx >= this.templateForm.fields.length - 1) return;
          [this.templateForm.fields[idx + 1], this.templateForm.fields[idx]] = [this.templateForm.fields[idx], this.templateForm.fields[idx + 1]];
        },
        saveTemplate() {
          // Simple save logic for demo (overwrite or add new)
          if (!this.templateForm.name.trim()) {
            alert("Template name is required.");
            return;
          }
          if (this.templateForm.fields.length === 0) {
            alert("Add at least one field.");
            return;
          }
          if (this.editIndex !== null) {
            this.templates[this.editIndex] = JSON.parse(JSON.stringify(this.templateForm));
          } else {
            this.templates.push(JSON.parse(JSON.stringify(this.templateForm)));
          }
          this.screen = 'templates';
          this.resetTemplateForm();
        },
        editTemplate(idx) {
          this.editIndex = idx;
          this.templateForm = JSON.parse(JSON.stringify(this.templates[idx]));
        }
      }
    }
  
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
      
<div className="flex min-h-screen" x-cloak="" x-data="app()">

<aside className="bg-white shadow-lg w-64 flex flex-col justify-between">
<div>
<div className="flex items-center px-6 py-6 border-b">
<img alt="logo" className="w-8 h-8 mr-2" src="https://img.icons8.com/ios-filled/50/4e8cff/document.png"/>
<span className="font-bold text-xl text-blue-600">DocParse</span>
</div>
<nav className="mt-8">
<ul>
<li>
<button :className="screen==='dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'" @click="screen='dashboard'" className="w-full text-left flex items-center px-6 py-3 rounded-r-full font-medium">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m0 0V9a3 3 0 00-6 0v10m6 0H9"></path>
</svg>
                Dashboard
              </button>
</li>
<li>
<button :className="screen==='templates' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'" @click="screen='templates'" className="w-full text-left flex items-center px-6 py-3 rounded-r-full font-medium mt-2">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="13" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 21h8"></path>
</svg>
                Templates
              </button>
</li>
<li>
<button :className="screen==='subscription' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'" @click="screen='subscription'" className="w-full text-left flex items-center px-6 py-3 rounded-r-full font-medium mt-2">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15A7.97 7.97 0 0121 12c0-4.42-3.58-8-8-8S5 7.58 5 12c0 1.36.27 2.65.76 3.83"></path>
</svg>
                Subscription
              </button>
</li>
<li>
<button :className="screen==='createTemplate' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'" @click="screen='createTemplate'; resetTemplateForm()" className="w-full text-left flex items-center px-6 py-3 rounded-r-full font-medium mt-2">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
                Create Template
              </button>
</li>
</ul>
</nav>
</div>
<div className="px-6 py-4 border-t flex items-center">
<img alt="User avatar" className="w-9 h-9 rounded-full border-2 border-blue-200" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="ml-3">
<p className="font-semibold text-gray-700">Alex Morgan</p>
<p className="text-xs text-gray-400">Pro Plan</p>
</div>
<button className="ml-auto p-2 text-gray-400 hover:text-blue-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 16l4-4m0 0l-4-4m4 4H7"></path>
</svg>
</button>
</div>
</aside>

<main className="flex-1 p-8">

<div x-show="screen==='dashboard'">
<div className="flex flex-col md:flex-row md:justify-between md:items-center">
<div>
<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
<p className="text-gray-500 mt-1">Quick summary of your activity and usage</p>
</div>
<div className="mt-4 md:mt-0 flex space-x-2">
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 flex items-center">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
              Upload Document
            </button>
<button @click="screen='createTemplate'; resetTemplateForm()" className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 flex items-center">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
              New Template
            </button>
</div>
</div>




<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="bg-white rounded-xl p-6 shadow flex items-center">
<div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="13" rx="2" width="18" x="3" y="7"></rect>
<path d="M16 3h-1a2 2 0 00-2 2v2"></path>
</svg>
</div>
<div className="ml-4">
<p className="text-sm text-gray-500">Documents Processed</p>
<p className="text-2xl font-bold text-gray-800">182</p>
</div>
</div>
<div className="bg-white rounded-xl p-6 shadow flex items-center">
<div className="bg-green-100 text-green-600 p-3 rounded-lg">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="13" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 21h8"></path>
</svg>
</div>
<div className="ml-4">
<p className="text-sm text-gray-500">Active Templates</p>
<p className="text-2xl font-bold text-gray-800">9</p>
</div>
</div>
<div className="bg-white rounded-xl p-6 shadow flex items-center">
<div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="ml-4">
<p className="text-sm text-gray-500">Subscription Status</p>
<p className="text-2xl font-bold text-gray-800">Pro (14 days left)</p>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow p-6 col-span-2">
<h2 className="font-semibold text-lg text-gray-700 mb-4">Quick Actions</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="flex flex-col items-center justify-center p-5 bg-blue-50 hover:bg-blue-100 rounded-lg shadow">
<svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
<span className="font-medium text-blue-700">Upload Files</span>
</button>
<button @click="screen='createTemplate'; resetTemplateForm()" className="flex flex-col items-center justify-center p-5 bg-green-50 hover:bg-green-100 rounded-lg shadow">
<svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="13" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 21h8"></path>
</svg>
<span className="font-medium text-green-700">Create Template</span>
</button>
<button @click="screen='subscription'" className="flex flex-col items-center justify-center p-5 bg-yellow-50 hover:bg-yellow-100 rounded-lg shadow">
<svg className="w-8 h-8 text-yellow-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 00-8 0v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="font-medium text-yellow-700">Subscription</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl shadow p-6">
<h2 className="font-semibold text-lg text-gray-700 mb-4">Recent Activity</h2>
<ul className="space-y-4">
<li className="flex items-center">
<div className="bg-blue-100 p-2 rounded-full">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-gray-700 text-sm"><span className="font-semibold">Invoice_2024.pdf</span> extracted with template <span className="text-blue-600">Invoice</span></p>
<p className="text-xs text-gray-400">2 mins ago</p>
</div>
</li>
<li className="flex items-center">
<div className="bg-green-100 p-2 rounded-full">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="13" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 21h8"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-gray-700 text-sm">Template <span className="text-green-600 font-semibold">Receipt</span> edited</p>
<p className="text-xs text-gray-400">10 mins ago</p>
</div>
</li>
<li className="flex items-center">
<div className="bg-yellow-100 p-2 rounded-full">
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-gray-700 text-sm">Subscription upgraded to <span className="text-yellow-600 font-semibold">Pro</span></p>
<p className="text-xs text-gray-400">1 hour ago</p>
</div>
</li>
</ul>
</div>
</div>
</div>

<div x-cloak="" x-show="screen==='templates'">
<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-bold text-gray-800">Templates</h1>
<p className="text-gray-500 mt-1">Manage your extraction templates</p>
</div>
<button @click="screen='createTemplate'; resetTemplateForm()" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 flex items-center">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
            Create Template
          </button>
</div>
<div className="bg-white rounded-xl shadow p-6">
<table className="min-w-full table-auto">
<thead>
<tr className="text-xs text-gray-500 uppercase border-b">
<th className="p-2 text-left">Template Name</th>
<th className="p-2 text-left">Fields</th>
<th className="p-2 text-left">Last Modified</th>
<th className="p-2"></th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b hover:bg-gray-50">
<td className="p-2 font-medium text-gray-700">Invoice</td>
<td className="p-2 text-gray-500">Invoice No, Date, Amount</td>
<td className="p-2 text-gray-400">2024-06-10</td>
<td className="p-2 flex space-x-2">
<button @click="screen='createTemplate'; editTemplate(0)" className="text-blue-600 hover:underline">Edit</button>
<button className="text-red-500 hover:underline">Delete</button>
</td>
</tr>
<tr className="border-b hover:bg-gray-50">
<td className="p-2 font-medium text-gray-700">Receipt</td>
<td className="p-2 text-gray-500">Store, Date, Total</td>
<td className="p-2 text-gray-400">2024-06-07</td>
<td className="p-2 flex space-x-2">
<button @click="screen='createTemplate'; editTemplate(1)" className="text-blue-600 hover:underline">Edit</button>
<button className="text-red-500 hover:underline">Delete</button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="p-2 font-medium text-gray-700">Contract</td>
<td className="p-2 text-gray-500">Party A, Party B, Date, Term</td>
<td className="p-2 text-gray-400">2024-06-05</td>
<td className="p-2 flex space-x-2">
<button @click="screen='createTemplate'; editTemplate(2)" className="text-blue-600 hover:underline">Edit</button>
<button className="text-red-500 hover:underline">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="max-w-3xl mx-auto" x-cloak="" x-show="screen==='createTemplate'">
<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-bold text-gray-800" x-text="editIndex === null ? 'Create New Template' : 'Edit Template'">Create New Template</h1>
<p className="text-gray-500 mt-1">Define fields and structure for extraction.</p>
</div>
<button @click="screen='templates'" className="text-gray-500 hover:text-blue-600 flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7"></path>
</svg>
            Back to Templates
          </button>
</div>
<div className="bg-white rounded-xl shadow p-8">
<form @submit.prevent="">
<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-1">Template Name</label>
<input className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="e.g. Invoice, Receipt" type="text" x-model="templateForm.name"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Fields</label>
<div className="space-y-3">
<template :key="idx" x-htmlFor="(field, idx) in templateForm.fields">
<div className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0 bg-gray-50 rounded-lg p-3">
<div className="flex-1 flex items-center space-x-2">
<input className="w-32 border rounded-lg px-2 py-1" placeholder="Field Name" type="text" x-model="field.name"/>
<select className="w-28 border rounded-lg px-2 py-1" x-model="field.type">
<option value="text">Text</option>
<option value="date">Date</option>
<option value="number">Number</option>
</select>
<input className="w-32 border rounded-lg px-2 py-1" placeholder="Regex/Pattern (optional)" type="text" x-model="field.regex"/>
</div>
<div className="flex items-center space-x-1 mt-2 md:mt-0">
<button :disabled="idx===0" @click="moveFieldUp(idx)" className="text-gray-400 hover:text-blue-500 disabled:opacity-40" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 15l7-7 7 7"></path>
</svg>
</button>
<button :disabled="idx===templateForm.fields.length-1" @click="moveFieldDown(idx)" className="text-gray-400 hover:text-blue-500 disabled:opacity-40" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7"></path>
</svg>
</button>
<button @click="removeField(idx)" className="text-red-400 hover:text-red-600 ml-2" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12"></path>
</svg>
</button>
</div>
</div>
</template>
</div>
<button @click="addField()" className="mt-3 text-blue-600 hover:underline text-sm font-medium flex items-center" type="button">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
                Add Field
              </button>
<p className="text-xs text-gray-400 mt-2">Drag and drop or use arrows to reorder fields.</p>
</div>
<div className="mt-8 flex flex-col md:flex-row md:items-center md:space-x-4">
<button @click="screen='templates'" className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold" type="button">Cancel</button>
<button @click="saveTemplate()" className="mt-3 md:mt-0 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700" type="button">Save Template</button>
</div>
</form>
</div>

<div className="bg-white rounded-xl shadow p-6 mt-8">
<h2 className="font-semibold text-lg text-gray-700 mb-3">Template Preview</h2>
<div>
<div className="mb-2">
<span className="text-gray-500 font-semibold">Name:</span>
<span className="text-gray-900 font-medium" x-text="templateForm.name || 'Untitled Template'"></span>
</div>
<div>
<span className="text-gray-500 font-semibold">Fields:</span>
<ul className="mt-1 space-y-1">
<template :key="field.name + field.type + field.regex" x-htmlFor="field in templateForm.fields">
<li className="pl-2 text-sm text-gray-700">
<span className="font-medium" x-text="field.name || 'Field'"></span>
<span className="text-gray-400">(</span>
<span className="italic text-gray-500" x-text="field.type"></span>
<template x-if="field.regex">
<span className="text-xs text-blue-600 ml-1">pattern: <span x-text="field.regex"></span></span>
</template>
<span className="text-gray-400">)</span>
</li>
</template>
<template x-if="!templateForm.fields.length">
<li className="text-gray-400 italic">No fields added yet.</li>
</template>
</ul>
</div>
</div>
</div>
</div>

<div x-cloak="" x-show="screen==='subscription'">


<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-bold text-gray-800">Subscription</h1>
<p className="text-gray-500 mt-1">Manage your plan and billing</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl shadow p-6 flex flex-col border-2 border-blue-200">
<h2 className="text-xl font-bold text-blue-600 mb-2">Free</h2>
<p className="text-gray-500 mb-4">Basic usage for personal needs.</p>
<ul className="mb-4 space-y-2 text-gray-700 text-sm">
<li>• 20 docs/month</li>
<li>• 2 templates</li>
<li>• Email support</li>
</ul>
<button className="mt-auto bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg cursor-not-allowed">Current Plan</button>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col border-2 border-yellow-400">
<h2 className="text-xl font-bold text-yellow-600 mb-2">Pro</h2>
<p className="text-gray-500 mb-4">For growing teams and automation.</p>
<ul className="mb-4 space-y-2 text-gray-700 text-sm">
<li>• 500 docs/month</li>
<li>• 20 templates</li>
<li>• Export to CSV/Excel/JSON</li>
<li>• Priority support</li>
</ul>
<button className="mt-auto bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600">Upgrade</button>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col border-2 border-gray-300">
<h2 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h2>
<p className="text-gray-500 mb-4">Custom needs &amp; SLAs for enterprises.</p>
<ul className="mb-4 space-y-2 text-gray-700 text-sm">
<li>• Unlimited docs</li>
<li>• Unlimited templates</li>
<li>• Dedicated support</li>
<li>• Custom integrations</li>
</ul>
<button className="mt-auto bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-900">Contact Sales</button>
</div>
</div>
<div className="bg-white rounded-xl shadow p-6 mt-8">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
<div>
<h3 className="font-semibold text-gray-700">Usage</h3>
<div className="mt-2">
<span className="text-sm text-gray-500">Documents processed this month: </span>
<span className="font-bold text-blue-600">182 / 500</span>
</div>
<div className="w-full bg-gray-100 h-2 rounded mt-2">
<div className="bg-blue-500 h-2 rounded" style={{width: '36%'}}></div>
</div>
</div>
<div className="mt-6 md:mt-0">
<h3 className="font-semibold text-gray-700">Billing</h3>
<div className="mt-2 flex items-center space-x-2">
<span className="text-sm text-gray-500">Next Payment:</span>
<span className="font-bold text-gray-800">$29</span>
<span className="text-gray-400 text-xs">(2024-06-20)</span>
</div>
<button className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200">View Invoices</button>
</div>
</div>
<div>
<h3 className="font-semibold text-gray-700 mb-2">Recent Invoices</h3>
<table className="min-w-full table-auto text-sm">
<thead>
<tr className="text-xs text-gray-500 uppercase border-b">
<th className="p-2 text-left">Date</th>
<th className="p-2 text-left">Amount</th>
<th className="p-2 text-left">Status</th>
<th className="p-2"></th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="p-2">2024-05-20</td>
<td className="p-2">$29</td>
<td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Paid</span></td>
<td className="p-2"><button className="text-blue-600 hover:underline">Download</button></td>
</tr>
<tr className="border-b">
<td className="p-2">2024-04-20</td>
<td className="p-2">$29</td>
<td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Paid</span></td>
<td className="p-2"><button className="text-blue-600 hover:underline">Download</button></td>
</tr>
<tr>
<td className="p-2">2024-03-20</td>
<td className="p-2">$29</td>
<td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Paid</span></td>
<td className="p-2"><button className="text-blue-600 hover:underline">Download</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>




    </>
  );
}
