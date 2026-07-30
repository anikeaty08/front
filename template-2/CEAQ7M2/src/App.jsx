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
      
<header className="py-12">
<h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center drop-shadow mb-2">Our Programs</h1>
<p className="text-center text-lg text-gray-500 max-w-2xl mx-auto">Explore our enriching after-school programs designed to inspire and educate.</p>
</header>
<div className="max-w-4xl mx-auto mt-2 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row" x-data="{
      activeTab: 0,
      dateRange: '8/11 - 12/23',
      showModal: false,
      form: { name: '', email: '', program: '' },
      programs: [
        {
          name: 'Speech & Debate',
          schedule: [
            { time: '4:00pm - 5:00pm', weekdays: ['Mon'], subject: 'Public Speaking' },
            { time: '5:00pm - 6:00pm', weekdays: ['Tue'], subject: 'Speech Analysis' },
            { time: '4:00pm - 5:00pm', weekdays: ['Wed'], subject: 'Argument Construction' },
            { time: '5:00pm - 6:00pm', weekdays: ['Thu'], subject: 'Presentation Skills' },
            { time: '4:00pm - 5:30pm', weekdays: ['Fri'], subject: 'Debate Practice' },
            { time: '10:00am - 11:00am', weekdays: ['Sat'], subject: 'Team Debates' },
            { time: '2:00pm - 3:00pm', weekdays: ['Sun'], subject: 'Impromptu Speaking' }
          ]
        },
        {
          name: 'ELA',
          schedule: [
            { time: '3:30pm - 4:30pm', weekdays: ['Mon'], subject: 'Reading Comprehension' },
            { time: '5:00pm - 6:00pm', weekdays: ['Tue'], subject: 'Literature Circle' },
            { time: '3:30pm - 4:30pm', weekdays: ['Wed'], subject: 'Vocabulary Building' },
            { time: '5:00pm - 6:00pm', weekdays: ['Thu'], subject: 'Critical Thinking' },
            { time: '3:30pm - 4:30pm', weekdays: ['Fri'], subject: 'Grammar Skills' },
            { time: '11:00am - 12:00pm', weekdays: ['Sat'], subject: 'Reading Workshop' },
            { time: '1:00pm - 2:00pm', weekdays: ['Sun'], subject: 'Book Discussion' }
          ]
        },
        {
          name: 'Writing',
          schedule: [
            { time: '5:00pm - 6:00pm', weekdays: ['Mon'], subject: 'Creative Writing' },
            { time: '5:00pm - 6:00pm', weekdays: ['Tue'], subject: 'Storytelling' },
            { time: '6:00pm - 7:00pm', weekdays: ['Wed'], subject: 'Poetry Workshop' },
            { time: '5:00pm - 6:00pm', weekdays: ['Thu'], subject: 'Essay Writing' },
            { time: '4:00pm - 5:00pm', weekdays: ['Fri'], subject: 'Editing Skills' },
            { time: '9:00am - 10:00am', weekdays: ['Sat'], subject: 'Writing Club' },
            { time: '11:00am - 12:00pm', weekdays: ['Sun'], subject: 'Essay Workshop' }
          ]
        },
        {
          name: 'Mandarin',
          schedule: [
            { time: '5:30pm - 6:30pm', weekdays: ['Mon'], subject: 'Beginner Mandarin' },
            { time: '4:30pm - 5:30pm', weekdays: ['Tue'], subject: 'Mandarin Conversation' },
            { time: '5:30pm - 6:30pm', weekdays: ['Wed'], subject: 'Intermediate Mandarin' },
            { time: '4:00pm - 5:00pm', weekdays: ['Thu'], subject: 'Mandarin Reading' },
            { time: '5:30pm - 6:30pm', weekdays: ['Fri'], subject: 'Mandarin Culture' },
            { time: '1:00pm - 2:00pm', weekdays: ['Sat'], subject: 'Mandarin Writing' },
            { time: '10:00am - 11:00am', weekdays: ['Sun'], subject: 'Mandarin Practice' }
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
<template x-for="(program, idx) in programs"><button className="w-full md:py-6 py-4 px-6 text-left md:text-base text-sm font-semibold border-b md:border-b-0 md:border-r border-gray-200 focus:outline-none transition"><span x-text="program.name"></span></button></template>
</div>

<div className="md:w-3/4 w-full p-8">
<div className="flex items-center gap-4 flex-wrap mb-6">
<h2 className="text-2xl font-bold text-gray-800" x-text="programs[activeTab].name"></h2>
<span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
<svg className="inline-block w-4 h-4 mr-1 -mt-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="18" rx="2" width="18"></rect><path></path></svg>
<span x-text="dateRange"></span>
</span>
</div>
<template x-for="day in weekdays"><div className="mb-8" x-data="{ schedule: scheduleByDay(programs[activeTab])[day] }" x-show="schedule.length > 0"><h3 className="text-lg font-semibold text-blue-700 mb-2" x-text="weekdayNames[day]"></h3><table className="w-full bg-white rounded-lg shadow overflow-hidden mb-2"><thead><tr className="bg-blue-50"><th className="py-2 px-4 text-left text-sm font-semibold text-gray-700"></th><th className="py-2 px-4 text-left text-sm font-semibold text-gray-700"></th></tr></thead><tbody><template x-for="(item, i) in schedule"><tr className="border-b last:border-b-0"><td className="py-2 px-4 text-gray-800" x-text="item.time"></td><td className="py-2 px-4 text-gray-600" x-text="item.subject"></td></tr></template></tbody></table></div></template>
</div>
</div>

<button aria-label="Open Enrollment Form" className="fixed z-30 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg transition flex items-center gap-2" x-data="">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path></path>
</svg>
    Enrollment Form
  </button>

<div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40" style={{display: `none`}} x-show="showModal" x-transition="">
<div className="bg-white w-full max-w-md rounded-lg shadow-xl p-8 relative">
<button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<h3 className="text-2xl font-bold mb-4 text-blue-700">Enrollment Form</h3>
<form className="space-y-4">
<div>
<label className="block text-gray-700 font-medium mb-1">Name</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" required type="text" x-model="form.name" />
</div>
<div>
<label className="block text-gray-700 font-medium mb-1">Email</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" required type="email" x-model="form.email" />
</div>
<div>
<label className="block text-gray-700 font-medium mb-1">Program</label>
<select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" required x-model="form.program">
<option disabled selected value="">Select a program</option>
<template x-for="program in programs"><option x-text="program.name"></option></template>
</select>
</div>
<button className="w-full bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition" type="submit">Submit</button>
</form>
</div>
</div>

    </>
  );
}
