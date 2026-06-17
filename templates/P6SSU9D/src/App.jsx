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
      
<div className="max-w-4xl mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row" x-data="{
      activeTab: 0,
      dateRange: '8/11 - 12/23',
      showModal: false,
      form: { name: '', email: '', program: '' },
      programs: [
        {
          name: 'Speech &amp; Debate',
          schedule: [
            { time: '4:00pm - 5:00pm', weekdays: ['Mon', 'Wed'], subject: 'Public Speaking' },
            { time: '4:00pm - 5:30pm', weekdays: ['Fri'], subject: 'Debate Practice' }
          ]
        },
        {
          name: 'ELA',
          schedule: [
            { time: '3:30pm - 4:30pm', weekdays: ['Tue', 'Thu'], subject: 'Reading Comprehension' },
            { time: '10:00am - 11:00am', weekdays: ['Sat'], subject: 'Grammar Skills' }
          ]
        },
        {
          name: 'Writing',
          schedule: [
            { time: '5:00pm - 6:00pm', weekdays: ['Mon', 'Thu'], subject: 'Creative Writing' },
            { time: '11:00am - 12:00pm', weekdays: ['Sun'], subject: 'Essay Workshop' }
          ]
        },
        {
          name: 'Mandarin',
          schedule: [
            { time: '5:30pm - 6:30pm', weekdays: ['Wed', 'Fri'], subject: 'Beginner Mandarin' },
            { time: '1:00pm - 2:00pm', weekdays: ['Sat'], subject: 'Mandarin Conversation' }
          ]
        }
      ],
      weekdays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      weekdayNames: {
        'Mon': 'Monday',
        'Tue': 'Tuesday',
        'Wed': 'Wednesday',
        'Thu': 'Thursday',
        'Fri': 'Friday',
        'Sat': 'Saturday',
        'Sun': 'Sunday'
      },
      scheduleByDay(program) {
        // program.schedule is array of {time, weekdays: [], subject}
        const map = {};
        for(const day of this.weekdays) map[day] = [];
        for(const item of program.schedule) {
          for(const day of item.weekdays) {
            map[day].push({time: item.time, subject: item.subject});
          }
        }
        return map;
      }
    }">

<div className="md:w-1/4 w-full bg-gray-100 flex md:flex-col flex-row md:items-stretch items-center">
<template :key="idx" x-htmlFor="(program, idx) in programs">
<button :className="activeTab === idx ? 'bg-white text-blue-600 md:border-r-4 md:border-blue-600 shadow-sm' : 'text-gray-700 hover:bg-gray-200'" @click="activeTab = idx" className="w-full md:py-6 py-4 px-6 text-left md:text-base text-sm font-semibold border-b md:border-b-0 md:border-r border-gray-200 focus:outline-none transition">
<span x-text="program.name"></span>
</button>
</template>
</div>

<div className="md:w-3/4 w-full p-8">
<div className="flex items-center gap-4 flex-wrap mb-6">
<h2 className="text-2xl font-bold text-gray-800" x-text="programs[activeTab].name"></h2>
<span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
<svg className="inline-block w-4 h-4 mr-1 -mt-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
<span x-text="dateRange"></span>
</span>
</div>
<template :key="day" x-htmlFor="day in weekdays">
<div className="mb-8" x-data="{ schedule: scheduleByDay(programs[activeTab])[day] }" x-show="schedule.length &gt; 0">
<h3 className="text-lg font-semibold text-blue-700 mb-2" x-text="weekdayNames[day]"></h3>
<table className="w-full bg-white rounded-lg shadow overflow-hidden mb-2">
<thead>
<tr className="bg-blue-50">
<th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Time</th>
<th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Subject</th>
</tr>
</thead>
<tbody>
<template :key="i" x-htmlFor="(item, i) in schedule">
<tr className="border-b last:border-b-0">
<td className="py-2 px-4 text-gray-800" x-text="item.time"></td>
<td className="py-2 px-4 text-gray-600" x-text="item.subject"></td>
</tr>
</template>
</tbody>
</table>
</div>
</template>
</div>
</div>

<button @click="showModal = true" aria-label="Open Enrollment Form" className="fixed z-30 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg transition flex items-center gap-2" x-data="">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
    Enrollment Form
  </button>

<div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40" style={{display: 'none'}} x-show="showModal" x-transition="">
<div @click.away="showModal = false" className="bg-white w-full max-w-md rounded-lg shadow-xl p-8 relative">
<button @click="showModal = false" className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<h3 className="text-2xl font-bold mb-4 text-blue-700">Enrollment Form</h3>
<form @submit.prevent="showModal = false" className="space-y-4">
<div>
<label className="block text-gray-700 font-medium mb-1">Name</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" required="" type="text" x-model="form.name"/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-1">Email</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" required="" type="email" x-model="form.email"/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-1">Program</label>
<select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" required="" x-model="form.program">
<option disabled="" selected="" value="">Select a program</option>
<template x-htmlFor="program in programs">
<option :value="program.name" x-text="program.name"></option>
</template>
</select>
</div>
<button className="w-full bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition" type="submit">Submit</button>
</form>
</div>
</div>

    </>
  );
}
