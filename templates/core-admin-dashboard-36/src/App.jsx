import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('alpine:init', () => {
            Alpine.data('coreAdmin', () => ({
                currentView: 'dashboard',
                drawerOpen: false,
                selectedUser: null,
                showAccessModal: false,

                navItems: [
                    { id: 'dashboard', label: 'Dashboard', icon: 'solar:widget-linear' },
                    { id: 'users', label: 'User Management', icon: 'solar:users-group-rounded-linear' },
                    { id: 'roles', label: 'Roles & Permissions', icon: 'solar:shield-keyhole-linear' },
                    { id: 'requests', label: 'Access Requests', icon: 'solar:inbox-linear' },
                    { id: 'audit', label: 'Audit Logs', icon: 'solar:file-check-linear' }
                ],

                dashboardStats: [
                    { label: 'Total Users', value: '1,248', icon: 'solar:users-group-two-rounded-linear', trend: '+12%', trendUp: true, bgClass: 'bg-indigo-50', borderClass: 'border-indigo-100', textClass: 'text-indigo-600' },
                    { label: 'Pending Requests', value: '14', icon: 'solar:bell-linear', trend: '+4', trendUp: false, bgClass: 'bg-amber-50', borderClass: 'border-amber-100', textClass: 'text-amber-600' },
                    { label: 'Custom Overrides', value: '86', icon: 'solar:key-minimalistic-linear', trend: '-2%', trendUp: true, bgClass: 'bg-blue-50', borderClass: 'border-blue-100', textClass: 'text-blue-600' },
                    { label: 'High Risk Grants', value: '5', icon: 'solar:danger-triangle-linear', trend: '0%', trendUp: true, bgClass: 'bg-rose-50', borderClass: 'border-rose-100', textClass: 'text-rose-600' },
                ],

                users: [
                    { id: 1, name: 'Sarah Connor', email: 's.connor@core.ent', role: 'CX General Agent', team: 'Customer Success', status: 'Active', overrides: false },
                    { id: 2, name: 'James Holden', email: 'j.holden@core.ent', role: 'Finance Manager', team: 'Finance', status: 'Active', overrides: true },
                    { id: 3, name: 'Amos Burton', email: 'a.burton@core.ent', role: 'Platform Admin', team: 'Engineering', status: 'Active', overrides: false },
                    { id: 4, name: 'Naomi Nagata', email: 'n.nagata@core.ent', role: 'CX Lead', team: 'Customer Success', status: 'Disabled', overrides: false },
                    { id: 5, name: 'Alex Kamal', email: 'a.kamal@core.ent', role: 'KYC Analyst', team: 'Compliance', status: 'Active', overrides: false },
                    { id: 6, name: 'Roberta Draper', email: 'b.draper@core.ent', role: 'Finance Manager', team: 'Finance', status: 'Active', overrides: false },
                ],

                rolePermissions: [
                    { module: 'Customer Profile', view: true, edit: true, approve: false, bulk: false },
                    { module: 'KYC Verification', view: true, edit: false, approve: false, bulk: false },
                    { module: 'Order Management', view: true, edit: true, approve: true, bulk: false },
                    { module: 'Refunds & Payouts', view: true, edit: false, approve: false, bulk: false },
                    { module: 'System Settings', view: false, edit: false, approve: false, bulk: false },
                ],

                requests: [
                    { id: 101, user: 'Sarah Connor', module: 'Refunds', action: 'Approve', reason: 'Covering for manager leave', date: '2 hrs ago', risk: 'High' },
                    { id: 102, user: 'Alex Kamal', module: 'User Logs', action: 'View', reason: 'Audit compliance check', date: '5 hrs ago', risk: 'Low' },
                    { id: 103, user: 'Amos Burton', module: 'Feature Flags', action: 'Edit', reason: 'Hotfix deployment', date: '1 day ago', risk: 'Medium' },
                ],

                recentLogs: [
                    { time: '10:42 AM', type: 'Approve', user: 'Alex S.', detail: 'Approved Refund Access for J. Holden' },
                    { time: '09:15 AM', type: 'Grant', user: 'System', detail: 'Auto-provisioned User N. Nagata' },
                    { time: 'Oct 23', type: 'Revoke', user: 'Alex S.', detail: 'Revoked Admin Access for T. Stark' },
                    { time: 'Oct 23', type: 'Approve', user: 'Alex S.', detail: 'Role Update: CX Lead' },
                    { time: 'Oct 22', type: 'Grant', user: 'J. Holden', detail: 'Bulk Refund Batch #992' },
                ],

                fullLogs: [
                    { id: 'LOG-8821', time: 'Oct 24, 10:42 AM', action: 'Override Grant', admin: 'Alex S. (Super Admin)', target: 'J. Holden', reason: 'Temporary refund authority granted' },
                    { id: 'LOG-8820', time: 'Oct 24, 09:15 AM', action: 'User Created', admin: 'System', target: 'N. Nagata', reason: 'SSO Provisioning' },
                    { id: 'LOG-8819', time: 'Oct 23, 04:30 PM', action: 'Access Revoked', admin: 'Alex S. (Super Admin)', target: 'T. Stark', reason: 'Contract ended' },
                    { id: 'LOG-8818', time: 'Oct 23, 02:12 PM', action: 'Role Change', admin: 'Alex S. (Super Admin)', target: 'S. Connor', reason: 'Promoted to Team Lead' },
                    { id: 'LOG-8817', time: 'Oct 23, 11:00 AM', action: 'Login Failed', admin: '-', target: 'A. Burton', reason: 'Invalid MFA attempt' },
                    { id: 'LOG-8816', time: 'Oct 22, 05:45 PM', action: 'Policy Update', admin: 'Policy Engine', target: 'Global', reason: 'Updated PWD rotation policy' },
                ],

                openUserDrawer(user) {
                    this.selectedUser = user;
                    this.drawerOpen = true;
                },

                getInitials(name) {
                    if (!name) return '';
                    return name.split(' ').map(n => n[0]).join('').substring(0,2);
                }
            }))
        })
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col justify-between shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-200/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-bold" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900">CORE</span>
<span className="text-xs bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-medium ml-2">ADMIN</span>
</div>
</div>

<nav className="p-3 space-y-0.5">
<template :key="item.id" x-htmlFor="item in navItems">
<button :className="currentView === item.id ? 'bg-white shadow-sm border border-slate-200 text-slate-900' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'" @click="currentView = item.id" className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150 group">
<iconify-icon :icon="item.icon" className="opacity-70 group-hover:opacity-100 transition-opacity" width="18"></iconify-icon>
<span className="font-medium" x-text="item.label"></span>
</button>
</template>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 border border-white shadow-sm"></div>
<div className="flex flex-col">
<span className="font-medium text-slate-900 leading-none">Alex S.</span>
<span className="text-xs text-slate-500 mt-1 leading-none">Super Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative overflow-hidden">

<header className="h-16 border-b border-slate-200 flex items-center justify-between px-8 bg-white shrink-0 z-10">
<h1 className="text-lg font-medium tracking-tight text-slate-900" x-text="navItems.find(i =&gt; i.id === currentView).label"></h1>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-slate-200"></div>
<button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:question-circle-linear" width="18"></iconify-icon>
<span className="font-medium">Help</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">

<div x-show="currentView === 'dashboard'" x-transition.opacity="">

<div className="grid grid-cols-4 gap-6 mb-8">
<template x-htmlFor="stat in dashboardStats">
<div className="p-5 border border-slate-200 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-4">
<div :className="stat.bgClass + ' ' + stat.borderClass" className="p-2 rounded-md border">
<iconify-icon :className="stat.textClass" :icon="stat.icon" width="20"></iconify-icon>
</div>
<span :className="stat.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'" className="text-xs font-medium px-2 py-0.5 rounded-full">
<span x-text="stat.trend"></span>
</span>
</div>
<div className="text-2xl font-medium tracking-tight text-slate-900" x-text="stat.value"></div>
<div className="text-xs text-slate-500 mt-1" x-text="stat.label"></div>
</div>
</template>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
<h3 className="font-medium text-slate-900">Recent Audit Activity</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View All Logs</button>
</div>
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 border-b border-slate-100">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Timestamp</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<template x-htmlFor="log in recentLogs.slice(0, 5)">
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-3 font-mono text-xs text-slate-500" x-text="log.time"></td>
<td className="px-6 py-3">
<span :class="{
                                                'bg-emerald-50 text-emerald-700 border-emerald-100': log.type === 'Approve',
                                                'bg-amber-50 text-amber-700 border-amber-100': log.type === 'Grant',
                                                'bg-slate-50 text-slate-700 border-slate-200': log.type === 'Revoke'
                                            }" className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-xs font-medium">
<iconify-icon icon="solar:shield-check-linear" width="12" x-show="log.type === 'Approve'"></iconify-icon>
<iconify-icon icon="solar:pen-new-square-linear" width="12" x-show="log.type === 'Grant'"></iconify-icon>
<span x-text="log.type"></span>
</span>
</td>
<td className="px-6 py-3 text-slate-900 font-medium" x-text="log.user"></td>
<td className="px-6 py-3 text-slate-500" x-text="log.detail"></td>
</tr>
</template>
</tbody>
</table>
</div>
</div>

<div x-cloak="" x-show="currentView === 'users'">
<div className="flex items-center justify-between mb-6">
<div className="relative w-72">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 placeholder-slate-400 shadow-sm transition-all" placeholder="Search users, emails, or roles..." type="text"/>
</div>
<div className="flex gap-3">
<button className="px-3 py-2 bg-white border border-slate-200 rounded-md text-slate-600 font-medium hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                            Filter
                        </button>
<button className="px-3 py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:user-plus-linear" width="16"></iconify-icon>
                            Add User
                        </button>
</div>
</div>
<div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
<table className="w-full text-left">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider w-10">

<div className="w-4 h-4 border border-slate-300 rounded bg-white"></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Team</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Overrides</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<template :key="user.id" x-htmlFor="user in users">
<tr @click="openUserDrawer(user)" className="hover:bg-slate-50 cursor-pointer transition-colors group">
<td className="px-6 py-3">
<div className="w-4 h-4 border border-slate-300 rounded bg-white group-hover:border-slate-400"></div>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 border border-slate-200" x-text="getInitials(user.name)"></div>
<div>
<div className="font-medium text-slate-900" x-text="user.name"></div>
<div className="text-xs text-slate-500" x-text="user.email"></div>
</div>
</div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700">
<iconify-icon className="opacity-50" icon="solar:key-minimalistic-linear" width="12"></iconify-icon>
<span x-text="user.role"></span>
</span>
</td>
<td className="px-6 py-3 text-slate-500" x-text="user.team"></td>
<td className="px-6 py-3">
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-medium" x-show="user.overrides">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                            Custom Access
                                        </div>
<div className="text-slate-400 text-xs" x-show="!user.overrides">-</div>
</td>
<td className="px-6 py-3">
<div :className="user.status === 'Active' ? 'text-emerald-600' : 'text-slate-500'" className="flex items-center gap-1.5 text-xs font-medium">
<iconify-icon :icon="user.status === 'Active' ? 'solar:check-circle-bold' : 'solar:forbidden-circle-bold'" width="14"></iconify-icon>
<span x-text="user.status"></span>
</div>
</td>
</tr>
</template>
</tbody>
</table>
</div>
</div>

<div x-cloak="" x-show="currentView === 'roles'">
<div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Select Role to View</label>
<div className="relative w-64">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500">
<option>CX General Agent</option>
<option>Finance Manager</option>
<option>Platform Admin</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="mt-4 p-3 bg-blue-50/50 border border-blue-100 rounded-md flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:info-circle-linear" width="16"></iconify-icon>
<div>
<p className="text-xs text-blue-900 font-medium">System Defined Role</p>
<p className="text-xs text-blue-700 mt-0.5">Permissions for this role are immutable. To grant additional access, use User Overrides.</p>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
<table className="w-full">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500 text-left uppercase tracking-wider">Feature Module</th>
<th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider w-24">View</th>
<th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider w-24">Edit</th>
<th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider w-24">Approve</th>
<th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider w-24">Bulk</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<template x-htmlFor="perm in rolePermissions">
<tr>
<td className="px-6 py-4 font-medium text-slate-700" x-text="perm.module"></td>
<td className="px-6 py-4 text-center"><iconify-icon :className="perm.view ? 'text-emerald-500' : 'text-slate-300'" :icon="perm.view ? 'solar:check-circle-bold' : 'solar:minus-circle-linear'" width="20"></iconify-icon></td>
<td className="px-6 py-4 text-center"><iconify-icon :className="perm.edit ? 'text-emerald-500' : 'text-slate-300'" :icon="perm.edit ? 'solar:check-circle-bold' : 'solar:minus-circle-linear'" width="20"></iconify-icon></td>
<td className="px-6 py-4 text-center"><iconify-icon :className="perm.approve ? 'text-emerald-500' : 'text-slate-300'" :icon="perm.approve ? 'solar:check-circle-bold' : 'solar:minus-circle-linear'" width="20"></iconify-icon></td>
<td className="px-6 py-4 text-center"><iconify-icon :className="perm.bulk ? 'text-emerald-500' : 'text-slate-300'" :icon="perm.bulk ? 'solar:check-circle-bold' : 'solar:minus-circle-linear'" width="20"></iconify-icon></td>
</tr>
</template>
</tbody>
</table>
</div>
</div>

<div x-cloak="" x-show="currentView === 'requests'">
<div className="grid grid-cols-1 gap-4">
<template x-htmlFor="req in requests">
<div className="bg-white border border-slate-200 rounded-lg p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-slate-900" x-text="req.user"></span>
<span className="text-slate-400 text-xs">requesting</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-xs font-medium text-slate-800">
<span x-text="req.module"></span>
<span className="text-slate-400">/</span>
<span x-text="req.action"></span>
</span>
</div>
<div className="text-slate-500 text-xs mt-1" x-text="'Reason: ' + req.reason"></div>
<div className="flex items-center gap-3 mt-2">
<span className="text-xs text-slate-400" x-text="req.date"></span>
<div className="h-1 w-1 rounded-full bg-slate-300"></div>
<span :class="{
                                            'text-emerald-600': req.risk === 'Low',
                                            'text-amber-600': req.risk === 'Medium',
                                            'text-rose-600': req.risk === 'High'
                                        }" className="text-xs font-medium">
<span x-text="req.risk"></span> Risk
                                        </span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-md transition-all">Reject</button>
<button className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-sm transition-all">Review &amp; Approve</button>
</div>
</div>
</template>
</div>
</div>

<div x-cloak="" x-show="currentView === 'audit'">
<div className="flex gap-4 mb-6">
<div className="flex-1 bg-white border border-slate-200 rounded-md flex items-center px-3 py-2">
<iconify-icon className="text-slate-400 mr-2" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-600">Last 30 Days</span>
</div>
<div className="flex-1 bg-white border border-slate-200 rounded-md flex items-center px-3 py-2">
<iconify-icon className="text-slate-400 mr-2" icon="solar:user-linear" width="16"></iconify-icon>
<input className="text-sm outline-none w-full placeholder-slate-400" placeholder="Filter by User or Admin" type="text"/>
</div>
</div>
<div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
<table className="w-full text-left">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Reference ID</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Timestamp</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Admin</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Target</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<template x-htmlFor="log in fullLogs">
<tr className="hover:bg-slate-50">
<td className="px-6 py-3 font-mono text-xs text-slate-400" x-text="log.id"></td>
<td className="px-6 py-3 text-xs text-slate-500" x-text="log.time"></td>
<td className="px-6 py-3 text-xs font-medium text-slate-700" x-text="log.action"></td>
<td className="px-6 py-3 text-xs text-slate-600" x-text="log.admin"></td>
<td className="px-6 py-3 text-xs text-slate-600" x-text="log.target"></td>
<td className="px-6 py-3 text-xs text-slate-500 max-w-xs truncate" x-text="log.reason"></td>
</tr>
</template>
</tbody>
</table>
</div>
</div>
</div>
</main>

<div @click="drawerOpen = false" className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 transition-opacity" x-cloak="" x-show="drawerOpen"></div>

<div :className="drawerOpen ? 'translate-x-0' : 'translate-x-full'" className="fixed inset-y-0 right-0 w-[600px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-out flex flex-col" x-cloak="">
<div className="h-16 px-6 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
<h2 className="font-medium text-slate-900 text-lg tracking-tight">User Details</h2>
<button @click="drawerOpen = false" className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto" x-data="{ tab: 'profile' }" x-show="selectedUser">

<div className="p-6 bg-slate-50 border-b border-slate-200">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-xl font-medium text-slate-600" x-text="getInitials(selectedUser?.name)"></div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900" x-text="selectedUser?.name"></h3>
<p className="text-slate-500" x-text="selectedUser?.email"></p>
<div className="flex gap-2 mt-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-200 text-slate-700 border border-slate-300">
<span x-text="selectedUser?.role"></span>
</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200" x-show="selectedUser?.status === 'Active'">
                                Active
                            </span>
</div>
</div>
</div>
</div>

<div className="px-6 border-b border-slate-200">
<div className="flex gap-6">
<button :className="tab === 'profile' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'" @click="tab = 'profile'" className="py-3 text-sm font-medium border-b-2 transition-colors">Profile &amp; Role</button>
<button :className="tab === 'access' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'" @click="tab = 'access'" className="py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2">
                        Custom Access
                        <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]" x-show="selectedUser?.overrides">1</span>
</button>
<button :className="tab === 'audit' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'" @click="tab = 'audit'" className="py-3 text-sm font-medium border-b-2 transition-colors">Audit Log</button>
</div>
</div>

<div className="p-6" x-show="tab === 'access'">
<div className="flex items-center justify-between mb-4">
<h4 className="font-medium text-slate-900">Effective Overrides</h4>
<button @click="showAccessModal = true" className="text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-md shadow-sm transition-colors">
                        Add Custom Access
                    </button>
</div>

<div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50" x-show="!selectedUser?.overrides">
<iconify-icon className="text-slate-300 mb-2" icon="solar:shield-keyhole-linear" width="32"></iconify-icon>
<p className="text-sm text-slate-500 font-medium">No custom overrides</p>
<p className="text-xs text-slate-400 mt-1">This user inherits standard role permissions.</p>
</div>

<div className="space-y-3" x-show="selectedUser?.overrides">
<div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
<div className="bg-amber-50/50 px-4 py-2 border-b border-amber-100 flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
<span className="text-xs text-amber-800 font-medium">High Risk • Refund Access</span>
</div>
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<div className="text-sm font-medium text-slate-900">Manual Refunds</div>
<div className="text-xs text-slate-500 mt-0.5">Allow: <span className="font-mono text-slate-700 bg-slate-100 px-1 rounded">Approve</span></div>
</div>
<button className="text-slate-400 hover:text-rose-600"><iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon></button>
</div>
<div className="mt-3 flex items-center gap-3 text-[10px] text-slate-400 uppercase tracking-wide">
<span>Granted by: Alex S.</span>
<span>•</span>
<span>Oct 24, 2023</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 space-y-6" x-show="tab === 'profile'">
<div>
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Role Definition</h4>
<div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-500" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="font-medium text-slate-900" x-text="selectedUser?.role"></span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">This role has access to Customer Profiles (Read/Edit) and standard ticketing flows. Financial modules are restricted to View Only.</p>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Details</h4>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 border border-slate-100 rounded">
<div className="text-xs text-slate-400">Department</div>
<div className="text-sm font-medium text-slate-900" x-text="selectedUser?.team"></div>
</div>
<div className="p-3 border border-slate-100 rounded">
<div className="text-xs text-slate-400">Employee ID</div>
<div className="text-sm font-medium text-slate-900 font-mono">EMP-8832</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3 mt-auto">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50">Reset Password</button>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-xs font-medium text-rose-600 shadow-sm hover:bg-rose-50 hover:border-rose-200">Deactivate User</button>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4" x-cloak="" x-show="showAccessModal">
<div @click="showAccessModal = false" className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
<div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden transform transition-all">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
<h3 className="font-medium text-slate-900">Grant Custom Access</h3>
<button @click="showAccessModal = false" className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-4">

<div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-sm flex gap-3">
<iconify-icon className="text-amber-600 shrink-0" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
<div>
<p className="text-xs font-medium text-amber-800">Permission Escalation</p>
<p className="text-xs text-amber-700 mt-0.5">You are granting permissions that exceed this user's base role. This action will be audited.</p>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Feature Module</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-md p-2.5 appearance-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none">
<option>Payments &amp; Refunds</option>
<option>KYC Verification</option>
<option>System Configuration</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Access Level</label>
<div className="flex gap-2">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="access" type="radio"/>
<div className="border border-slate-200 rounded-md p-2 text-center text-xs font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all">View</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="access" type="radio"/>
<div className="border border-slate-200 rounded-md p-2 text-center text-xs font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all">Edit</div>
</label>
<label className="flex-1 cursor-pointer">
<input checked="" className="peer sr-only" name="access" type="radio"/>
<div className="border border-slate-200 rounded-md p-2 text-center text-xs font-medium text-slate-500 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all">Approve</div>
</label>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Justification <span className="text-rose-500">*</span></label>
<textarea className="w-full border border-slate-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" placeholder="Why is this access needed?" rows="3"></textarea>
</div>
</div>
<div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
<button @click="showAccessModal = false" className="px-4 py-2 border border-slate-200 bg-white rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
<button @click="showAccessModal = false" className="px-4 py-2 bg-slate-900 rounded-md text-sm font-medium text-white shadow-sm hover:bg-slate-800">Grant Access</button>
</div>
</div>
</div>


    </>
  );
}
