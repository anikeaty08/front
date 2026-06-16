import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    function leadApp() {
      return {
        // --- AUTH ---
        authEmail: '',
        authPassword: '',
        user: null,

        // --- LEADS ---
        statuses: ['New', 'Contacted', 'Qualified', 'Lost'],
        leads: [],
        newLead: { name: '', email: '', phone: '', company: '', source: 'Website', notes: '' },

        // --- UI STATE ---
        filterStatus: '',
        filterSource: '',
        searchTerm: '',
        selectedLead: null,
        dragLeadId: null,

        // --- INIT ---
        init() {
          const user = localStorage.getItem('leadUser');
          if (user) {
            this.user = JSON.parse(user);
            this.loadLeads();
          }
        },

        // --- AUTH LOGIC ---
        login() {
          if (!this.authEmail || !this.authPassword) return;
          // Accept any email/password and create session
          this.user = { email: this.authEmail };
          localStorage.setItem('leadUser', JSON.stringify(this.user));
          // Initialize leads for new users
          if (!localStorage.getItem(this.storageKey())) {
            localStorage.setItem(this.storageKey(), JSON.stringify([]));
          }
          this.loadLeads();
        },
        logout() {
          this.user = null;
          localStorage.removeItem('leadUser');
          this.authEmail = '';
          this.authPassword = '';
        },

        // --- LEAD STORAGE ---
        storageKey() {
          return this.user ? `leads_${this.user.email}` : 'leads_demo';
        },
        loadLeads() {
          this.leads = JSON.parse(localStorage.getItem(this.storageKey()) || '[]');
        },
        saveLeads() {
          localStorage.setItem(this.storageKey(), JSON.stringify(this.leads));
        },

        // --- LEAD CREATION ---
        createLead() {
          if (!this.newLead.name.trim() || !this.newLead.email.trim()) return;
          const lead = {
            ...this.newLead,
            id: Date.now() + Math.random().toString(36).substr(2,6),
            status: 'New',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          this.leads.push(lead);
          this.saveLeads();
          this.newLead = { name: '', email: '', phone: '', company: '', source: 'Website', notes: '' };
        },

        // --- LEAD DRAG/DROP (KANBAN) ---
        onDragStart(e, leadId) {
          this.dragLeadId = leadId;
        },
        onDrop(e, status) {
          if (!this.dragLeadId) return;
          let idx = this.leads.findIndex(l => l.id === this.dragLeadId);
          if (idx >= 0 && this.leads[idx].status !== status) {
            this.leads[idx].status = status;
            this.leads[idx].updatedAt = new Date().toISOString();
            this.saveLeads();
          }
          this.dragLeadId = null;
        },

        // --- LEAD DETAILS MODAL ---
        viewLead(lead) {
          this.selectedLead = { ...lead };
        },
        saveLeadDetails() {
          let idx = this.leads.findIndex(l => l.id === this.selectedLead.id);
          if (idx >= 0) {
            this.selectedLead.updatedAt = new Date().toISOString();
            this.leads[idx] = { ...this.selectedLead };
            this.saveLeads();
          }
        },
        deleteLead(leadId) {
          this.leads = this.leads.filter(l => l.id !== leadId);
          this.saveLeads();
          this.selectedLead = null;
        },

        // --- FILTERS & SEARCH ---
        get filteredLeads() {
          return this.leads.filter(l => {
            if (this.filterStatus && l.status !== this.filterStatus) return false;
            if (this.filterSource && l.source !== this.filterSource) return false;
            let q = this.searchTerm.trim().toLowerCase();
            if (!q) return true;
            return (
              l.name.toLowerCase().includes(q) ||
              (l.email && l.email.toLowerCase().includes(q)) ||
              (l.company && l.company.toLowerCase().includes(q))
            );
          });
        },

        // --- UTILS ---
        formatDate(dt) {
          if (!dt) return '-';
          const d = new Date(dt);
          return d.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col" id="app" x-data="leadApp()" x-init="init()">

<header className="bg-white shadow z-10">
<nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="font-bold text-lg text-blue-600 tracking-tight">LeadManager</span>
</div>
<template x-if="user">
<div className="flex items-center space-x-4">
<span className="text-gray-600 text-sm">Hi, <span x-text="user.email"></span></span>
<button @click="logout()" className="text-gray-500 hover:text-blue-600 text-sm">Logout</button>
</div>
</template>
</nav>
</header>

<main className="flex-1 flex flex-col items-center justify-center" x-cloak="" x-show="!user">
<div className="w-full max-w-sm bg-white p-8 rounded-lg shadow mt-12">
<h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
<form @submit.prevent="login()" className="space-y-5">
<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input autocomplete="username" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" required="" type="email" x-model="authEmail"/>
</div>
<div>
<label className="block text-sm font-medium mb-1">Password</label>
<input autocomplete="current-password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" minlength="1" required="" type="password" x-model="authPassword"/>
</div>
<button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition" type="submit"> 
            Login
          </button>
</form>
</div>
</main>

<main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8" x-cloak="" x-show="user">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

<form @submit.prevent="createLead()" className="bg-white rounded-lg shadow px-6 py-4 flex flex-col md:flex-row items-start md:items-end gap-4 w-full md:w-auto md:min-w-[400px]">
<div>
<label className="block text-xs font-semibold mb-1">Name <span className="text-red-500">*</span></label>
<input className="border rounded px-2 py-1 w-36 focus:outline-none focus:ring-1 focus:ring-blue-200" required="" x-model="newLead.name" />
</input></div>
<div>
<label className="block text-xs font-semibold mb-1">Email <span className="text-red-500">*</span></label>
<input className="border rounded px-2 py-1 w-40 focus:outline-none focus:ring-1 focus:ring-blue-200" required="" type="email" x-model="newLead.email" />
</input></div>
<div>
<label className="block text-xs font-semibold mb-1">Phone</label>
<input className="border rounded px-2 py-1 w-28 focus:outline-none focus:ring-1 focus:ring-blue-200" type="tel" x-model="newLead.phone"/>
</div>
<div>
<label className="block text-xs font-semibold mb-1">Company</label>
<input className="border rounded px-2 py-1 w-32 focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="newLead.company"/>
</div>
<div>
<label className="block text-xs font-semibold mb-1">Source</label>
<select className="border rounded px-2 py-1 w-28 focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="newLead.source">
<option>Website</option>
<option>Referral</option>
<option>Cold Call</option>
<option>Event</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold mb-1">Notes</label>
<input className="border rounded px-2 py-1 w-40 focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="newLead.notes"/>
</div>
<button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition" type="submit">Add</button>
</form>

<div className="flex items-center gap-3">
<select className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="filterStatus">
<option value="">All Statuses</option>
<template :key="status" x-htmlFor="status in statuses">
<option x-text="status"></option>
</template>
</select>
<select className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="filterSource">
<option value="">All Sources</option>
<option>Website</option>
<option>Referral</option>
<option>Cold Call</option>
<option>Event</option>
<option>Other</option>
</select>
<input className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 w-56" placeholder="Search by name, email, company..." x-model="searchTerm"/>
</div>
</div>

<div className="overflow-x-auto pb-4">
<div className="flex gap-6 min-w-[800px]">
<template :key="status" x-htmlFor="status in statuses">
<div className="flex-1 bg-white rounded-lg shadow min-w-[250px] h-[540px] flex flex-col">
<div className="px-4 py-3 border-b flex items-center justify-between">
<span className="font-semibold text-gray-700" x-text="status"></span>
<span className="text-xs text-gray-400" x-text="filteredLeads.filter(l =&gt; l.status === status).length"></span>
</div>

<div :id="'droppable-' + status" @dragover.prevent="" @drop="onDrop($event, status)" className="flex-1 px-2 py-2 space-y-3 overflow-y-auto">
<template :key="lead.id" x-htmlFor="lead in filteredLeads.filter(l =&gt; l.status === status)">
<div :className="{'ring-2 ring-blue-300': selectedLead &amp;&amp; selectedLead.id === lead.id}" :draggable="true" @click="viewLead(lead)" @dragstart="onDragStart($event, lead.id)" className="bg-blue-50 border border-blue-100 rounded px-3 py-2 cursor-move shadow-sm hover:shadow-md transition relative group">
<div className="font-semibold text-blue-700 truncate" x-text="lead.name"></div>
<div className="text-xs text-gray-500 truncate" x-text="lead.company"></div>
<div className="absolute top-1 right-2 text-gray-400 text-xs group-hover:opacity-100 opacity-0 transition">
<svg className="inline w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 12H9m12 0A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"></path></svg>
</div>
</div>
</template>
</div>
</div>
</template>
</div>
</div>

<div className="fixed inset-0 z-20 bg-black bg-opacity-40 flex items-center justify-center" x-cloak="" x-show="selectedLead">
<div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-fade-in">
<button @click="selectedLead=null" className="absolute top-2 right-3 text-gray-400 hover:text-blue-600">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"></path></svg>
</button>
<h3 className="text-xl font-bold text-blue-700 mb-3" x-text="selectedLead.name"></h3>
<div className="grid grid-cols-2 gap-3 mb-4 text-sm">
<div>
<div className="font-semibold text-gray-600">Email</div>
<div x-text="selectedLead.email"></div>
</div>
<div>
<div className="font-semibold text-gray-600">Phone</div>
<div x-text="selectedLead.phone || '-'"></div>
</div>
<div>
<div className="font-semibold text-gray-600">Company</div>
<div x-text="selectedLead.company || '-'"></div>
</div>
<div>
<div className="font-semibold text-gray-600">Source</div>
<div x-text="selectedLead.source || '-'"></div>
</div>
<div>
<div className="font-semibold text-gray-600">Status</div>
<select @change="saveLeadDetails()" className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="selectedLead.status">
<template :key="status" x-htmlFor="status in statuses">
<option x-text="status"></option>
</template>
</select>
</div>
<div>
<div className="font-semibold text-gray-600">Created</div>
<div x-text="formatDate(selectedLead.createdAt)"></div>
</div>
<div>
<div className="font-semibold text-gray-600">Updated</div>
<div x-text="formatDate(selectedLead.updatedAt)"></div>
</div>
</div>
<div>
<div className="font-semibold text-gray-600 mb-1">Notes</div>
<textarea @blur="saveLeadDetails()" className="border rounded px-2 py-1 w-full min-h-[60px] focus:outline-none focus:ring-1 focus:ring-blue-200" x-model="selectedLead.notes"></textarea>
</div>
<div className="mt-6 flex justify-between items-center">
<button @click="deleteLead(selectedLead.id)" className="text-red-600 hover:underline text-sm">Delete Lead</button>
<button @click="selectedLead=null" className="bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition">Close</button>
</div>
</div>
</div>
</main>
</div>




    </>
  );
}
