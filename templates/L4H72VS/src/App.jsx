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



        // Global variables
        let currentDate = new Date();
        let selectedDate = new Date();
        let selectedDateKey = '';
        let salaryData = JSON.parse(localStorage.getItem('salaryData')) || {};
        let isDayOff = false;

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            updateCurrentDate();
            updateCalendar();
            updateStats();
            updateRecentEntries();
            setupTimeCalculation();
        });

        // Setup time calculation listeners
        function setupTimeCalculation() {
            const startTime = document.getElementById('startTime');
            const endTime = document.getElementById('endTime');
            const hourlyRate = document.getElementById('hourlyRate');
            const breakTime = document.getElementById('breakTime');

            [startTime, endTime, hourlyRate, breakTime].forEach(input => {
                input.addEventListener('input', calculateHours);
            });
        }

        // Toggle day off
        function toggleDayOff() {
            isDayOff = !isDayOff;
            const checkbox = document.getElementById('dayOffCheckbox');
            const workDetails = document.getElementById('workDetails');
            const dayOffDisplay = document.getElementById('dayOffDisplay');

            checkbox.classList.toggle('checked', isDayOff);
            
            if (isDayOff) {
                workDetails.classList.add('hidden');
                dayOffDisplay.classList.remove('hidden');
            } else {
                workDetails.classList.remove('hidden');
                dayOffDisplay.classList.add('hidden');
                calculateHours();
            }
        }

        // Calculate hours and total
        function calculateHours() {
            if (isDayOff) return;

            const startTime = document.getElementById('startTime').value;
            const endTime = document.getElementById('endTime').value;
            const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
            const breakTime = parseInt(document.getElementById('breakTime').value) || 0;

            if (startTime && endTime) {
                const start = new Date(`1970-01-01T${startTime}:00`);
                const end = new Date(`1970-01-01T${endTime}:00`);
                
                let diff = (end - start) / 1000 / 60; // difference in minutes
                if (diff < 0) diff += 24 * 60; // handle overnight shifts
                
                diff -= breakTime; // subtract break time
                const hours = Math.max(0, diff / 60);
                
                document.getElementById('calculatedHours').textContent = hours.toFixed(1) + 'h';
                document.getElementById('calculatedTotal').textContent = 'CHF ' + (hours * hourlyRate).toFixed(2);
            }
        }

        // Update current date display
        function updateCurrentDate() {
            const now = new Date();
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
        }

        // Update calendar display
        function updateCalendar() {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December'];
            
            document.getElementById('currentMonth').textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
            
            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            const startDate = new Date(firstDay);
            startDate.setDate(startDate.getDate() - firstDay.getDay());
            
            const calendarGrid = document.getElementById('calendarGrid');
            calendarGrid.innerHTML = '';
            
            const today = new Date();
            
            for (let i = 0; i < 42; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day glass-inner rounded-lg p-3 text-center text-sm h-12 flex items-center justify-center';
                dayElement.textContent = date.getDate();
                
                const dateKey = date.toISOString().split('T')[0];
                
                // Add classes based on date status
                if (date.toDateString() === today.toDateString()) {
                    dayElement.classList.add('today');
                }
                
                if (date.getMonth() !== currentDate.getMonth()) {
                    dayElement.classList.add('opacity-30');
                }
                
                if (salaryData[dateKey]) {
                    if (salaryData[dateKey].isDayOff) {
                        dayElement.classList.add('day-off');
                    } else {
                        dayElement.classList.add('has-data');
                    }
                }
                
                dayElement.addEventListener('click', () => openModal(date));
                calendarGrid.appendChild(dayElement);
            }
        }

        // Open modal for date entry
        function openModal(date) {
            selectedDate = date;
            selectedDateKey = date.toISOString().split('T')[0];
            
            // Update modal display
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('selectedDateDisplay').textContent = date.toLocaleDateString('en-US', options);
            
            // Reset form
            resetForm();
            
            // Load existing data if available
            if (salaryData[selectedDateKey]) {
                loadExistingData(salaryData[selectedDateKey]);
            }
            
            // Show modal
            document.getElementById('entryModal').classList.remove('hidden');
        }

        // Reset form to default state
        function resetForm() {
            isDayOff = false;
            document.getElementById('dayOffCheckbox').classList.remove('checked');
            document.getElementById('workDetails').classList.remove('hidden');
            document.getElementById('dayOffDisplay').classList.add('hidden');
            document.getElementById('startTime').value = '08:00';
            document.getElementById('endTime').value = '17:00';
            document.getElementById('hourlyRate').value = '';
            document.getElementById('breakTime').value = '';
            document.getElementById('entryNotes').value = '';
            document.getElementById('deleteButton').classList.add('hidden');
            calculateHours();
        }

        // Load existing data into form
        function loadExistingData(data) {
            isDayOff = data.isDayOff || false;
            document.getElementById('dayOffCheckbox').classList.toggle('checked', isDayOff);
            
            if (isDayOff) {
                document.getElementById('workDetails').classList.add('hidden');
                document.getElementById('dayOffDisplay').classList.remove('hidden');
            } else {
                document.getElementById('startTime').value = data.startTime || '08:00';
                document.getElementById('endTime').value = data.endTime || '17:00';
                document.getElementById('hourlyRate').value = data.hourlyRate || '';
                document.getElementById('breakTime').value = data.breakTime || '';
                calculateHours();
            }
            
            document.getElementById('entryNotes').value = data.notes || '';
            document.getElementById('deleteButton').classList.remove('hidden');
        }

        // Save entry
        function saveEntry() {
            const entry = {
                date: selectedDateKey,
                isDayOff: isDayOff,
                notes: document.getElementById('entryNotes').value
            };
            
            if (!isDayOff) {
                entry.startTime = document.getElementById('startTime').value;
                entry.endTime = document.getElementById('endTime').value;
                entry.hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
                entry.breakTime = parseInt(document.getElementById('breakTime').value) || 0;
                
                // Calculate total
                const start = new Date(`1970-01-01T${entry.startTime}:00`);
                const end = new Date(`1970-01-01T${entry.endTime}:00`);
                let diff = (end - start) / 1000 / 60;
                if (diff < 0) diff += 24 * 60;
                diff -= entry.breakTime;
                const hours = Math.max(0, diff / 60);
                entry.hours = hours;
                entry.total = hours * entry.hourlyRate;
            }
            
            salaryData[selectedDateKey] = entry;
            localStorage.setItem('salaryData', JSON.stringify(salaryData));
            
            closeModal();
            updateCalendar();
            updateStats();
            updateRecentEntries();
        }

        // Delete current entry
        function deleteCurrentEntry() {
            if (confirm('Are you sure you want to delete this entry?')) {
                delete salaryData[selectedDateKey];
                localStorage.setItem('salaryData', JSON.stringify(salaryData));
                
                closeModal();
                updateCalendar();
                updateStats();
                updateRecentEntries();
            }
        }

        // Close modal
        function closeModal() {
            document.getElementById('entryModal').classList.add('hidden');
        }

        // Update statistics
        function updateStats() {
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            
            let monthlyTotal = 0;
            let weeklyTotal = 0;
            let workingDays = 0;
            
            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - now.getDay());
            
            Object.values(salaryData).forEach(entry => {
                const entryDate = new Date(entry.date);
                
                if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear) {
                    if (!entry.isDayOff && entry.total) {
                        monthlyTotal += entry.total;
                        workingDays++;
                    }
                }
                
                if (entryDate >= startOfWeek && entryDate <= now) {
                    if (!entry.isDayOff && entry.total) {
                        weeklyTotal += entry.total;
                    }
                }
            });
            
            const dailyAverage = workingDays > 0 ? monthlyTotal / workingDays : 0;
            
            document.getElementById('monthlyTotal').textContent = 'CHF ' + monthlyTotal.toFixed(0);
            document.getElementById('weeklyTotal').textContent = 'CHF ' + weeklyTotal.toFixed(0);
            document.getElementById('dailyAverage').textContent = 'CHF ' + dailyAverage.toFixed(0);
            document.getElementById('workingDays').textContent = workingDays;
        }

        // Update recent entries
        function updateRecentEntries() {
            const entries = Object.values(salaryData)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 5);
            
            const container = document.getElementById('recentEntries');
            container.innerHTML = '';
            
            if (entries.length === 0) {
                container.innerHTML = '<div class="text-gray-400 text-sm text-center py-4">No entries yet</div>';
                return;
            }
            
            entries.forEach(entry => {
                const date = new Date(entry.date);
                const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                
                const entryElement = document.createElement('div');
                entryElement.className = 'glass-inner rounded-xl p-3 hover:bg-white/10 transition-all cursor-pointer';
                entryElement.onclick = () => openModal(date);
                
                if (entry.isDayOff) {
                    entryElement.innerHTML = `
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="text-white font-medium">${dateStr}</div>
                                <div class="text-orange-400 text-sm">Day Off</div>
                            </div>
                            <div class="text-orange-400">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                        </div>
                    `;
                } else {
                    entryElement.innerHTML = `
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="text-white font-medium">${dateStr}</div>
                                <div class="text-gray-400 text-sm">${entry.hours ? entry.hours.toFixed(1) + 'h' : 'N/A'}</div>
                            </div>
                            <div class="text-emerald-400 font-semibold">CHF ${entry.total ? entry.total.toFixed(0) : '0'}</div>
                        </div>
                    `;
                }
                
                container.appendChild(entryElement);
            });
        }

        // Calendar navigation
        function previousMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar();
        }

        // Navigation functions (placeholders)
        function showDashboard() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-400');
                link.classList.add('text-gray-300');
            });
            event.target.classList.add('text-blue-400');
            event.target.classList.remove('text-gray-300');
        }

        function showCalendar() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-400');
                link.classList.add('text-gray-300');
            });
            event.target.classList.add('text-blue-400');
            event.target.classList.remove('text-gray-300');
        }

        function showReports() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-400');
                link.classList.add('text-gray-300');
            });
            event.target.classList.add('text-blue-400');
            event.target.classList.remove('text-gray-300');
        }

        function showSettings() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-400');
                link.classList.add('text-gray-300');
            });
            event.target.classList.add('text-blue-400');
            event.target.classList.remove('text-gray-300');
        }

        // Close modal when clicking outside
        document.getElementById('entryModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
</div>

<nav className="sticky top-4 z-50 opacity-0 animate-slide-down">
<div className="max-w-7xl mx-auto px-4">
<div className="glass-navbar rounded-2xl px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xl font-bold text-white">SalaryTracker</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<button className="nav-link text-blue-400 font-medium" onclick="showDashboard()">Dashboard</button>
<button className="nav-link text-gray-300 font-medium" onclick="showCalendar()">Calendar</button>
<button className="nav-link text-gray-300 font-medium" onclick="showReports()">Reports</button>
<button className="nav-link text-gray-300 font-medium" onclick="showSettings()">Settings</button>
</div>

<div className="flex items-center space-x-4">
<div className="glass-inner px-3 py-1 rounded-lg">
<span className="text-emerald-400 text-sm font-medium">CHF</span>
</div>
<button className="md:hidden text-gray-300 hover:text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</nav>
<div className="max-w-7xl mx-auto relative z-10 px-4">

<div className="text-center py-12 md:py-20">
<div className="opacity-0 animate-fade-in delay-200">
<div className="inline-flex items-center glass-inner px-4 py-2 rounded-full mb-8">
<div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
<span className="text-emerald-400 text-sm font-medium">Data Synced: <span id="currentDate"></span></span>
</div>
</div>
<h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight opacity-0 animate-slide-up delay-300">
<span className="hero-gradient">Track Your</span><br/>
<span className="hero-gradient">Salary Journey</span>
</h1>
<p className="text-lg md:text-xl hero-sub-gradient max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-slide-up delay-400">
                Monitor your daily earnings, track progress, and optimize your income with our beautiful salary tracking dashboard.
            </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0 animate-fade-in delay-500">
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="monthlyTotal">CHF 0</div>
<div className="text-gray-400 text-sm">This Month</div>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="weeklyTotal">CHF 0</div>
<div className="text-gray-400 text-sm">This Week</div>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="dailyAverage">CHF 0</div>
<div className="text-gray-400 text-sm">Daily Avg</div>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="workingDays">0</div>
<div className="text-gray-400 text-sm">Working Days</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">

<div className="lg:col-span-2 glass-card glass-reflection rounded-3xl p-6 opacity-0 animate-scale-in delay-600">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Calendar View</h2>
<div className="flex items-center space-x-2">
<button className="glass-inner p-2 rounded-lg hover:bg-white/10 transition-all" onclick="previousMonth()">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<span className="text-white font-medium px-4" id="currentMonth"></span>
<button className="glass-inner p-2 rounded-lg hover:bg-white/10 transition-all" onclick="nextMonth()">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-2 mb-4">
<div className="text-center text-gray-400 text-sm font-medium py-2">Sun</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Mon</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Tue</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Wed</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Thu</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Fri</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Sat</div>
</div>
<div className="grid grid-cols-7 gap-2" id="calendarGrid">

</div>

<div className="flex items-center justify-center space-x-6 mt-6 text-sm">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-blue-500/30 border border-blue-500/50 rounded"></div>
<span className="text-gray-300">Today</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-emerald-500/30 border border-emerald-500/50 rounded"></div>
<span className="text-gray-300">Work Day</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-orange-500/30 border border-orange-500/50 rounded"></div>
<span className="text-gray-300">Day Off</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-purple-500/30 border border-purple-500/50 rounded"></div>
<span className="text-gray-300">Selected</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-card glass-reflection rounded-3xl p-6 opacity-0 animate-slide-up delay-700">
<h3 className="text-xl font-semibold text-white mb-4">Recent Entries</h3>
<div className="space-y-3" id="recentEntries">

</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="entryModal">
<div className="modal-overlay absolute inset-0" onclick="closeModal()"></div>
<div className="flex items-center justify-center min-h-screen p-4">
<div className="modal-content rounded-3xl p-6 w-full max-w-md relative modal-enter">

<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-semibold text-white">Day Entry</h3>
<button className="text-gray-400 hover:text-white transition-colors" onclick="closeModal()">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="glass-inner rounded-xl p-4 mb-6">
<div className="text-center">
<div className="text-gray-400 text-sm mb-1">Selected Date</div>
<div className="text-white font-semibold text-lg" id="selectedDateDisplay"></div>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between glass-inner rounded-xl p-4">
<div className="flex items-center space-x-3">
<div className="custom-checkbox" id="dayOffCheckbox" onclick="toggleDayOff()"></div>
<div>
<div className="text-white font-medium">Day Off</div>
<div className="text-gray-400 text-sm">Mark this day as a day off</div>
</div>
</div>
<div className="text-orange-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="space-y-4" id="workDetails">
<div>
<label className="block text-gray-300 text-sm mb-3">Work Time Frame</label>
<div className="time-picker-container">
<div>
<label className="block text-gray-400 text-xs mb-1">Start Time</label>
<input className="glass-input w-full px-3 py-2 rounded-lg text-sm" id="startTime" type="time" value="08:00"/>
</div>
<div className="text-gray-400 text-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<label className="block text-gray-400 text-xs mb-1">End Time</label>
<input className="glass-input w-full px-3 py-2 rounded-lg text-sm" id="endTime" type="time" value="17:00"/>
</div>
</div>
</div>

<div className="glass-inner rounded-xl p-4 time-display">
<div className="text-center">
<div className="text-gray-400 text-sm mb-1">Total Hours</div>
<div className="text-emerald-400 font-semibold text-xl" id="calculatedHours">8.0h</div>
</div>
</div>

<div>
<label className="block text-gray-300 text-sm mb-2">Hourly Rate (CHF)</label>
<input className="glass-input w-full px-4 py-3 rounded-xl" id="hourlyRate" placeholder="25.00" step="0.01" type="number"/>
</div>

<div className="glass-inner rounded-xl p-4">
<div className="flex justify-between items-center">
<span className="text-gray-300">Total Amount:</span>
<span className="text-white font-semibold text-lg" id="calculatedTotal">CHF 0.00</span>
</div>
</div>

<div>
<label className="block text-gray-300 text-sm mb-2">Break Time (minutes)</label>
<input className="glass-input w-full px-4 py-3 rounded-xl" id="breakTime" placeholder="60" type="number"/>
<div className="text-gray-400 text-xs mt-1">Lunch break, etc. (will be subtracted from total)</div>
</div>
</div>

<div className="glass-inner rounded-xl p-4 day-off-display text-center hidden" id="dayOffDisplay">
<div className="text-orange-400 text-lg font-semibold mb-2">Day Off</div>
<div className="text-gray-400 text-sm">No earnings for this day</div>
</div>

<div className="mt-4">
<label className="block text-gray-300 text-sm mb-2">Notes</label>
<textarea className="glass-input w-full px-4 py-3 rounded-xl h-20 resize-none" id="entryNotes" placeholder="Project details, vacation, sick day..."></textarea>
</div>

<div className="flex space-x-3 pt-4">
<button className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl" onclick="saveEntry()">
                        Save Entry
                    </button>
<button className="px-6 py-3 bg-red-500/20 text-red-400 rounded-xl font-medium hover:bg-red-500/30 transition-all duration-300 border border-red-500/30 hidden" id="deleteButton" onclick="deleteCurrentEntry()">
                        Delete
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
