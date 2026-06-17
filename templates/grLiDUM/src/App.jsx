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



      function handleLogin(e){
        e.preventDefault();
        document.getElementById('login').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
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
      

<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white" id="login">
<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col items-center">
<div className="mb-6 flex flex-row items-center gap-2">
<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
<h2 className="text-2xl font-semibold text-blue-800">HospitalMS</h2>
</div>
<form className="w-full flex flex-col gap-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-gray-600 mb-1 text-sm" htmlFor="email">Email</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" required="" type="email"/>
</div>
<div>
<label className="block text-gray-600 mb-1 text-sm" htmlFor="password">Password</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="password" required="" type="password"/>
</div>
<button className="mt-2 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 text-white font-semibold rounded py-2 transition" type="submit">Sign In</button>
</form>
<div className="w-full flex justify-between mt-4 text-xs">
<a className="text-blue-500 hover:underline" href="#">Forgot password?</a>
<a className="text-blue-500 hover:underline" href="#">Contact Support</a>
</div>
</div>
</div>

<div className="hidden min-h-screen" id="dashboard">
<div className="flex min-h-screen">

<aside className="bg-white shadow-lg w-64 flex flex-col">
<div className="h-20 flex items-center px-6 border-b">
<span className="text-2xl font-bold text-blue-700 flex items-center gap-2">
<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
              HospitalMS
            </span>
</div>
<nav className="flex-1 py-5">
<ul className="flex flex-col gap-1 px-4 text-gray-700">
<li>
<a className="flex items-center gap-2 py-2 px-3 rounded-md bg-blue-100 font-medium text-blue-700" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 12l2-2a9 9 0 0 1 14 0l2 2"></path><path d="M19 21a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14z"></path></svg>
                  Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 11H5M12 4l-7 7 7 7"></path></svg>
                  Patients
                </a>
</li>
<li>
<a className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M6 22v-3a6 6 0 0 1 12 0v3"></path></svg>
                  Doctors
                </a>
</li>
<li>
<a className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="13" rx="2" width="18" x="3" y="7"></rect><path d="M8 3v4"></path><path d="M16 3v4"></path></svg>
                  Appointments
                </a>
</li>
<li>
<a className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 12l9 6 9-6-9-6-9 6z"></path></svg>
                  Departments
                </a>
</li>
<li>
<a className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
                  Billing
                </a>
</li>
</ul>
</nav>
<div className="border-t px-6 py-4 flex items-center gap-3">
<img alt="user" className="w-10 h-10 rounded-full border" src="https://randomuser.me/api/portraits/men/42.jpg"/>
<div>
<span className="block text-gray-900 font-medium">Admin Name</span>
<span className="block text-sm text-gray-500">Administrator</span>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-8">

<div className="flex justify-between items-center mb-8">
<h1 className="text-3xl font-semibold text-blue-800">Dashboard</h1>
<div className="flex items-center gap-4">
<input className="border px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm" placeholder="Search..." type="text"/>
<button className="relative">
<svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11c0-3.07-1.64-5.64-5-5.917V4a1 1 0 0 0-2 0v1.083C7.64 5.36 6 7.929 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m5 0v1a3 3 0 0 1-6 0v-1m6 0H9"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 border">
<span className="text-sm text-gray-500">Patients</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-blue-700">1,245</span>
<span className="text-green-500 text-sm">+24</span>
</div>
</div>
<div className="bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 border">
<span className="text-sm text-gray-500">Doctors</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-blue-700">85</span>
<span className="text-green-500 text-sm">+3</span>
</div>
</div>
<div className="bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 border">
<span className="text-sm text-gray-500">Appointments Today</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-blue-700">134</span>
<span className="text-green-500 text-sm">+8</span>
</div>
</div>
<div className="bg-white shadow-lg p-6 rounded-lg flex flex-col gap-2 border">
<span className="text-sm text-gray-500">Revenue (INR)</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-blue-700">₹1,50,000</span>
<span className="text-green-500 text-sm">+5%</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-12">

<div className="lg:col-span-4 bg-white border rounded-lg shadow-lg p-6">
<h2 className="text-lg font-medium mb-4 text-gray-800">Recent Appointments</h2>
<div className="overflow-x-auto">
<table className="min-w-full text-left text-sm">
<thead>
<tr>
<th className="py-2 px-2 text-gray-500 font-semibold">Patient</th>
<th className="py-2 px-2 text-gray-500 font-semibold">Doctor</th>
<th className="py-2 px-2 text-gray-500 font-semibold">Date</th>
<th className="py-2 px-2 text-gray-500 font-semibold">Status</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-2">John Smith</td>
<td className="py-2 px-2">Dr. Jane Doe</td>
<td className="py-2 px-2">2024-06-14 09:30</td>
<td className="py-2 px-2">
<span className="px-2 py-1 rounded bg-green-100 text-green-800">Completed</span>
</td>
</tr>
<tr>
<td className="py-2 px-2">Amrita Singh</td>
<td className="py-2 px-2">Dr. Suresh Mehta</td>
<td className="py-2 px-2">2024-06-14 10:00</td>
<td className="py-2 px-2">
<span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800">Pending</span>
</td>
</tr>
<tr>
<td className="py-2 px-2">Ravi Kumar</td>
<td className="py-2 px-2">Dr. Maria Paul</td>
<td className="py-2 px-2">2024-06-14 10:15</td>
<td className="py-2 px-2">
<span className="px-2 py-1 rounded bg-blue-100 text-blue-800">Scheduled</span>
</td>
</tr>
<tr>
<td className="py-2 px-2">Leena Stephen</td>
<td className="py-2 px-2">Dr. Rahul Bansal</td>
<td className="py-2 px-2">2024-06-14 11:45</td>
<td className="py-2 px-2">
<span className="px-2 py-1 rounded bg-red-100 text-red-800">Cancelled</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-6">
<div className="bg-white border rounded-lg shadow-lg p-6">
<h2 className="text-lg font-medium mb-3 text-gray-800">Quick Links</h2>
<div className="flex flex-wrap gap-3">
<a className="flex items-center gap-2 px-3 py-2 rounded text-blue-700 bg-blue-100 font-medium hover:bg-blue-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg>
                    New Appointment
                  </a>
<a className="flex items-center gap-2 px-3 py-2 rounded text-blue-700 bg-blue-100 font-medium hover:bg-blue-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M6 22v-3a6 6 0 0 1 12 0v3"></path></svg>
                    Add Doctor
                  </a>
<a className="flex items-center gap-2 px-3 py-2 rounded text-blue-700 bg-blue-100 font-medium hover:bg-blue-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
                    Billing
                  </a>
<a className="flex items-center gap-2 px-3 py-2 rounded text-blue-700 bg-blue-100 font-medium hover:bg-blue-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 12l2-2a9 9 0 0 1 14 0l2 2"></path></svg>
                    Departments
                  </a>
</div>
</div>
<div className="bg-blue-50 border rounded-lg shadow p-6">
<h2 className="text-lg font-medium text-blue-900 mb-3">Announcements</h2>
<ul className="list-disc pl-5 space-y-2 text-blue-800">
<li>COVID-19 vaccination drive on June 18th</li>
<li>Doctor's meeting scheduled on June 20th at 4pm</li>
<li>System upgrade planned for June 25th, midnight</li>
</ul>
</div>
</div>
</div>

<footer className="text-sm text-gray-400 flex justify-between items-center pt-8 border-t">
<span>© 2024 HospitalMS</span>
<span>Powered by HospitalMS Team</span>
</footer>
</main>
</div>
</div>

    </>
  );
}
