import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center shadow-sm bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-teal-50/50"></div>
<iconify-icon className="text-teal-800 relative z-10 text-xl" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight">E-Medical</h1>
<p className="text-xs text-slate-500 font-medium">Healthcare System</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-bing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-9 h-9 rounded-full bg-teal-900 flex items-center justify-center text-white text-sm font-medium shadow-sm">
                JS
            </div>
</div>
</header>

<main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8 lg:py-10">

<div className="mb-8">
<div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
<a className="hover:text-slate-900 transition-colors" href="#">Patients</a>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900 font-medium">New Registration</span>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Patient Registration</h2>
<p className="text-sm text-slate-500">Enter the patient's personal, contact, and medical details below.</p>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<form className="flex flex-col">

<div className="p-6 md:p-8 border-b border-slate-100">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
<iconify-icon className="text-teal-700 text-lg" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Personal Information</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="firstName">First Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400" id="firstName" placeholder="e.g. John" type="text"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="lastName">Last Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400" id="lastName" placeholder="e.g. Doe" type="text"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="dob">Date of Birth</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm text-slate-500 focus:text-slate-900" id="dob" type="date"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="gender">Gender</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-slate-400 text-lg pointer-events-none z-10" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<select className="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm appearance-none" id="gender">
<option disabled="" selected="" value="">Select gender</option>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-1">
<label className="text-sm font-medium text-slate-700" htmlFor="bloodGroup">Blood Group</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-slate-400 text-lg pointer-events-none z-10" icon="solar:drop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<select className="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm appearance-none" id="bloodGroup">
<option disabled="" selected="" value="">Select blood group</option>
<option value="A+">A+</option>
<option value="A-">A-</option>
<option value="B+">B+</option>
<option value="B-">B-</option>
<option value="O+">O+</option>
<option value="O-">O-</option>
<option value="AB+">AB+</option>
<option value="AB-">AB-</option>
</select>
<iconify-icon className="absolute right-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="p-6 md:p-8 border-b border-slate-100">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
<iconify-icon className="text-teal-700 text-lg" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Contact Details</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">Phone Number</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="email">Email Address <span className="text-slate-400 font-normal">(Optional)</span></label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400" id="email" placeholder="patient@example.com" type="email"/>
</div>
</div>

<div className="flex flex-col gap-1.5 md:col-span-2">
<label className="text-sm font-medium text-slate-700" htmlFor="address">Residential Address</label>
<div className="relative flex">
<iconify-icon className="absolute left-3.5 top-3 text-slate-400 text-lg pointer-events-none" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<textarea className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400 resize-none" id="address" placeholder="Enter complete address..." rows="3"></textarea>
</div>
</div>
</div>
</div>

<div className="p-6 md:p-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
<iconify-icon className="text-teal-700 text-lg" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Emergency Contact</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="emName">Contact Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400" id="emName" placeholder="Full name" type="text"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-slate-700" htmlFor="emRelation">Relationship</label>
<div className="relative flex items-center">
<select className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm appearance-none" id="emRelation">
<option disabled="" selected="" value="">Select relation</option>
<option value="parent">Parent</option>
<option value="spouse">Spouse</option>
<option value="child">Child</option>
<option value="sibling">Sibling</option>
<option value="friend">Friend</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-1">
<label className="text-sm font-medium text-slate-700" htmlFor="emPhone">Phone Number</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-900/10 focus:border-teal-900 transition-all text-slate-900 shadow-sm placeholder:text-slate-400" id="emPhone" placeholder="Emergency phone" type="tel"/>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 border-t border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-end gap-3 rounded-b-2xl">
<button className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors text-sm shadow-sm" type="button">
                        Cancel
                    </button>
<button className="w-full sm:w-auto px-6 py-2.5 bg-teal-900 hover:bg-teal-950 text-white font-medium rounded-xl transition-all text-sm shadow-sm active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
<iconify-icon className="text-lg" icon="solar:diskette-linear"></iconify-icon>
                        Save Patient Record
                    </button>
</div>
</form>
</div>
</main>

    </>
  );
}
