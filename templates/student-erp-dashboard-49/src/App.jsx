import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function cmsApp() {
            return {
                isAuthenticated: false,
                userRole: null, 
                currentPage: 'dashboard',
                showNotifications: false,
                chatOpen: false,
                chatInput: '',
                chatHistory: [],
                showIDCard: false,
                showLeaveModal: false,

                // --- Attendance System State ---
                scanStatus: 'idle', // idle, scanning, verifying, success, error
                scanMessage: '',
                attendanceStats: [
                    {id: 'net', n:'Networks', p:85, t:20, a:17},
                    {id: 'dbms', n:'DBMS', p:62, t:22, a:13}, // Low attendance demo
                    {id: 'se', n:'Soft Eng', p:90, t:20, a:18},
                    {id: 'math', n:'Maths', p:72, t:24, a:17} // Low attendance demo
                ],
                
                // Faculty QR State
                facCourse: '',
                facSubject: '',
                facQR: null,
                facQRExpiry: null,

                menuItems: {
                    student: [
                        { id: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-grid' },
                        { id: 'attendance', label: 'Attendance', icon: 'lucide:check-square' },
                        { id: 'timetable', label: 'Timetable', icon: 'lucide:calendar-clock' },
                        { id: 'exams', label: 'Exams & Results', icon: 'lucide:graduation-cap' },
                        { id: 'fees', label: 'Fee Payment', icon: 'lucide:credit-card' },
                        { id: 'library', label: 'Library', icon: 'lucide:library' },
                        { id: 'feedback', label: 'Feedback', icon: 'lucide:message-square' },
                    ],
                    faculty: [
                        { id: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
                        { id: 'attendance_mgr', label: 'Attendance Manager', icon: 'lucide:qr-code' },
                        { id: 'students', label: 'Student List', icon: 'lucide:users' },
                    ]
                },
                
                notifications: [
                    { id: 1, title: 'Attendance Alert', msg: 'DBMS attendance dropped below 75%', time: '2 hours ago', type: 'alert' },
                    { id: 2, title: 'Assignment Graded', msg: 'DSA Lab marks updated: 18/20', time: '5 hours ago', type: 'info' },
                    { id: 3, title: 'Exam Circular', msg: 'Download End-Sem date sheet', time: '1 day ago', type: 'info' }
                ],

                initApp() {
                    const savedRole = localStorage.getItem('cms_role');
                    if(savedRole) {
                        this.userRole = savedRole;
                        this.isAuthenticated = true;
                    }
                },
                
                login(role) {
                    this.userRole = role;
                    this.isAuthenticated = true;
                    this.currentPage = 'dashboard';
                    localStorage.setItem('cms_role', role);
                },

                logout() {
                    this.isAuthenticated = false;
                    this.userRole = null;
                    localStorage.removeItem('cms_role');
                },

                getPageTitle() {
                    if (!this.userRole) return '';
                    const item = this.menuItems[this.userRole].find(i => i.id === this.currentPage);
                    return item ? item.label : 'Dashboard';
                },

                toggleNotifications() {
                    this.showNotifications = !this.showNotifications;
                },

                openLeaveModal() {
                    this.showLeaveModal = true;
                },

                // --- Student: Mark Attendance Logic ---
                markAttendance(method) {
                    if(this.scanStatus === 'scanning' || this.scanStatus === 'success') return;
                    
                    this.scanStatus = 'scanning';
                    this.scanMessage = method === 'face' ? 'Verifying Face Biometrics...' : 'Scanning Class QR Code...';
                    
                    // Simulate Backend Controller Processing
                    setTimeout(() => {
                        // 1. Verify Validity (Simulated)
                        // 2. Check Duplicates (Simulated)
                        // 3. Mark Present
                        this.scanStatus = 'success';
                        this.scanMessage = 'Attendance Marked Successfully!';
                        
                        // Update Stats Dynamically (Simulating DB Update)
                        const subj = this.attendanceStats.find(s => s.n === 'DBMS');
                        if(subj) {
                            subj.a++;
                            subj.t++;
                            subj.p = Math.round((subj.a / subj.t) * 100);
                        }

                        // Reset UI after delay
                        setTimeout(() => {
                            this.scanStatus = 'idle';
                            this.scanMessage = '';
                        }, 3000);
                    }, 2500);
                },

                // --- Faculty: Generate QR Logic ---
                generateQR() {
                    if(!this.facCourse || !this.facSubject) return;
                    
                    // Simulate Backend: generateQrCode Controller
                    // Payload: { courseId, subjectId, timestamp }
                    const payload = `${this.facCourse}_${this.facSubject}_${Date.now()}`;
                    this.facQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${payload}`;
                    this.facQRExpiry = new Date(Date.now() + 10 * 60000); // 10 mins expiry
                },

                sendMessage() {
                    if(!this.chatInput.trim()) return;
                    
                    this.chatHistory.push({ id: Date.now(), text: this.chatInput, sender: 'user' });
                    const userQ = this.chatInput.toLowerCase();
                    this.chatInput = '';

                    setTimeout(() => {
                        let response = "I can't access that information right now.";
                        if(userQ.includes('attendance')) response = "Your overall attendance is 68%. You are short in DBMS (62%).";
                        else if(userQ.includes('exam')) response = "End Semester exams are tentatively scheduled from Nov 24th.";
                        else if(userQ.includes('fee')) response = "You have a pending due of ₹45,000. Last date is Oct 15.";
                        else if(userQ.includes('marks') || userQ.includes('result')) response = "Your current CGPA is 8.42. Last semester you scored 8.10 SGPA.";
                        
                        this.chatHistory.push({ id: Date.now() + 1, text: response, sender: 'bot' });
                    }, 600);
                }
            }
        }
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="fixed inset-0 z-50 flex items-center justify-center bg-white" x-show="!isAuthenticated">
<div className="w-full max-w-sm p-8 space-y-8">
<div className="text-center">
<div className="flex justify-center mb-4">
<div className="h-10 w-10 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg tracking-tight">CM</div>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">University ERP Login</h2>
<p className="mt-2 text-xs text-gray-500">Select portal access level</p>
</div>
<div className="space-y-3">
<button @click="login('student')" className="group relative flex w-full justify-center rounded-lg border border-gray-200 bg-black py-2.5 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none transition-all shadow-sm">
<span className="absolute left-4 flex items-center">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</span>
                    Student Portal
                </button>
<button @click="login('faculty')" className="group relative flex w-full justify-center rounded-lg border border-gray-200 bg-white py-2.5 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition-all">
<span className="absolute left-4 flex items-center">
<iconify-icon icon="lucide:graduation-cap" width="16"></iconify-icon>
</span>
                    Faculty Portal
                </button>
</div>
</div>
</div>



<div className="flex h-screen overflow-hidden" style={{display: 'none'}} x-show="isAuthenticated">

<aside className="w-60 flex flex-col border-r border-gray-200 bg-white hidden md:flex shrink-0">
<div className="h-14 flex items-center px-5 border-b border-gray-100">
<div className="h-6 w-6 bg-black text-white rounded flex items-center justify-center font-bold text-xs tracking-tight mr-3">U</div>
<span className="font-medium tracking-tight text-sm text-gray-900">UniversityERP</span>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
<template :key="item.id" x-htmlFor="item in menuItems[userRole]">
<a :className="currentPage === item.id ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'" @click.prevent="currentPage = item.id" className="group flex items-center px-3 py-2 text-xs font-medium rounded-md transition-colors" href="#">
<iconify-icon :className="currentPage === item.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500'" :icon="item.icon" className="mr-3 transition-colors" width="16"></iconify-icon>
<span x-text="item.label"></span>
</a>
</template>
</div>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center">
<div className="relative">
<img alt="" className="h-8 w-8 rounded-full border border-gray-200" src="https://ui-avatars.com/api/?name=Arjun+Verma&amp;background=0D8ABC&amp;color=fff"/>
<div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white"></div>
</div>
<div className="ml-3 overflow-hidden">
<p className="text-xs font-medium text-gray-900 truncate">Arjun Verma</p>
<p className="text-[10px] text-gray-500 truncate">B.Tech CSE • Sem 5</p>
</div>
<button @click="logout()" className="ml-auto text-gray-400 hover:text-red-500">
<iconify-icon icon="lucide:log-out" width="14"></iconify-icon>
</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col overflow-hidden relative bg-gray-50/50">

<header className="h-14 glass-effect border-b border-gray-200 flex items-center justify-between px-6 z-10 shrink-0">
<div className="flex items-center">
<button className="md:hidden mr-4 text-gray-500"><iconify-icon icon="lucide:menu" width="20"></iconify-icon></button>
<h1 className="text-sm font-medium text-gray-900" x-text="getPageTitle()"></h1>
</div>
<div className="flex items-center space-x-4">
<button @click="showIDCard = true" className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
<iconify-icon className="mr-2" icon="lucide:id-card" width="14"></iconify-icon> Digital ID
                    </button>
<div className="h-4 w-px bg-gray-200"></div>
<div @click="toggleNotifications" className="relative cursor-pointer">
<iconify-icon className="text-gray-500 hover:text-gray-700" icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>

<div @click.away="showNotifications = false" className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 origin-top-right" style={{display: 'none'}} x-show="showNotifications">
<div className="px-4 py-2 border-b border-gray-50 text-[10px] font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
<span>Recent Alerts</span>
<span className="text-blue-600 cursor-pointer">Mark all read</span>
</div>
<div className="max-h-64 overflow-y-auto">
<template :key="notif.id" x-htmlFor="notif in notifications">
<div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer group">
<div className="flex items-start">
<div :className="notif.type === 'alert' ? 'bg-red-500' : 'bg-blue-500'" className="h-2 w-2 rounded-full mt-1.5 mr-2 shrink-0"></div>
<div>
<p className="text-xs font-medium text-gray-900 group-hover:text-blue-600 transition-colors" x-text="notif.title"></p>
<p className="text-[10px] text-gray-500 mt-0.5" x-text="notif.msg"></p>
<p className="text-[9px] text-gray-400 mt-1" x-text="notif.time"></p>
</div>
</div>
</div>
</template>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 scroll-smooth">



<div className="max-w-7xl mx-auto space-y-6" x-show="userRole === 'student' &amp;&amp; currentPage === 'dashboard'">

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-600 border border-gray-200">AV</div>
<div>
<h2 className="text-sm font-semibold text-gray-900">Arjun Verma</h2>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center"><iconify-icon className="mr-1 opacity-70" icon="lucide:hash"></iconify-icon> Roll: 2021CS104</span>
<span className="w-px h-3 bg-gray-300"></span>
<span>B.Tech CSE</span>
<span className="w-px h-3 bg-gray-300"></span>
<span>Section A</span>
</div>
</div>
</div>
<div className="flex gap-6 text-right">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wide">Sem / Year</p>
<p className="text-sm font-medium text-gray-900">Sem V (3rd Year)</p>
</div>
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wide">Batch</p>
<p className="text-sm font-medium text-gray-900">2021 - 2025</p>
</div>
<div className="hidden md:block">
<p className="text-[10px] text-gray-500 uppercase tracking-wide">Enrollment No</p>
<p className="text-sm font-medium text-gray-900">UNV2190011</p>
</div>
</div>
</div>

<div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-start gap-3">
<iconify-icon className="text-red-600 mt-0.5 shrink-0" icon="lucide:alert-triangle"></iconify-icon>
<div>
<h3 className="text-xs font-semibold text-red-800">Attendance Shortage Warning</h3>
<p className="text-xs text-red-700 mt-1">Your overall attendance is <span className="font-bold">68%</span>. You need to attend the next <span className="font-bold underline">7 consecutive classes</span> to reach the 75% eligibility criteria for end-sem exams.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div @click="currentPage='attendance'" className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Attendance</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">68%</h3>
<p className="text-[10px] text-red-500 mt-1 font-medium flex items-center">
<iconify-icon className="mr-0.5" icon="lucide:arrow-down" width="10"></iconify-icon> Shortage
                                    </p>
</div>
<div className="h-10 w-10 relative">
<svg className="h-full w-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-red-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="68, 100" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-purple-200 transition-colors">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Performance</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">8.42 <span className="text-sm font-normal text-gray-400">CGPA</span></h3>
<p className="text-[10px] text-gray-500 mt-1">Last Sem SGPA: <span className="text-gray-900 font-medium">8.10</span></p>
</div>
<div className="bg-purple-50 text-purple-600 p-2 rounded-lg">
<iconify-icon icon="lucide:award" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-yellow-200 transition-colors">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Fee Status</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">₹ 45,000</h3>
<p className="text-[10px] text-yellow-600 mt-1 font-medium bg-yellow-50 inline-block px-1.5 rounded-sm">Due: 15 Oct</p>
</div>
<div className="bg-yellow-50 text-yellow-600 p-2 rounded-lg">
<iconify-icon icon="lucide:receipt" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-200 transition-colors">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Assignments</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">3 <span className="text-sm font-normal text-gray-400">Pending</span></h3>
<p className="text-[10px] text-gray-500 mt-1">Next due in 4 hours</p>
</div>
<div className="bg-green-50 text-green-600 p-2 rounded-lg">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm h-fit">
<div className="p-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-xs font-semibold text-gray-900">Today's Schedule</h3>
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-1 rounded">Tuesday</span>
</div>
<div className="p-2">
<div className="relative pl-4 py-2 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gray-200">

<div className="relative pl-6 opacity-50">
<div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-300 ring-4 ring-white"></div>
<p className="text-[10px] font-mono text-gray-500">09:00 - 10:00 AM</p>
<h4 className="text-xs font-medium text-gray-900">Computer Networks</h4>
<p className="text-[10px] text-gray-500">Room 304 • Prof. Sharma</p>
</div>

<div className="relative pl-6">
<div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-100 animate-pulse"></div>
<span className="absolute right-2 top-0 bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded">NOW</span>
<p className="text-[10px] font-mono text-gray-500">10:00 - 11:30 AM</p>
<h4 className="text-sm font-semibold text-gray-900">Database Management Lab</h4>
<p className="text-[10px] text-gray-500">Lab 2 • Dr. A. Gupta</p>
</div>

<div className="relative pl-6">
<div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-300 ring-4 ring-white"></div>
<p className="text-[10px] font-mono text-gray-500">12:00 - 01:00 PM</p>
<h4 className="text-xs font-medium text-gray-900">Software Engineering</h4>
<p className="text-[10px] text-gray-500">LH-102 • Prof. R. Verma</p>
</div>
</div>
</div>
<div className="p-2 border-t border-gray-100 bg-gray-50 rounded-b-xl text-center">
<button @click="currentPage='timetable'" className="text-xs text-blue-600 font-medium hover:underline">View Weekly Timetable</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
<h3 className="text-xs font-semibold text-gray-900 mb-3">Faculty Contacts</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">RS</div>
<div className="ml-2">
<p className="text-xs font-medium text-gray-900">Prof. R. Sharma</p>
<p className="text-[9px] text-gray-500">Networks • HOD</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="lucide:mail" width="14"></iconify-icon></button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">AG</div>
<div className="ml-2">
<p className="text-xs font-medium text-gray-900">Dr. A. Gupta</p>
<p className="text-[9px] text-gray-500">DBMS • Lab Incharge</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="lucide:mail" width="14"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm">
<div className="p-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-xs font-semibold text-gray-900">Pending Assignments</h3>
<span className="h-5 w-5 rounded-full bg-red-100 text-red-600 text-[10px] flex items-center justify-center font-bold">3</span>
</div>
<div className="divide-y divide-gray-50">

<div className="p-3 hover:bg-gray-50 transition-colors">
<div className="flex justify-between items-start mb-1">
<p className="text-xs font-medium text-gray-900">DBMS Normalization</p>
<span className="text-[9px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded border border-red-100">Due Today</span>
</div>
<div className="flex justify-between items-end">
<p className="text-[10px] text-gray-500">Unit 3 • 20 Marks</p>
<div className="flex gap-2">
<button className="text-[10px] text-gray-500 hover:text-gray-900 flex items-center"><iconify-icon className="mr-1" icon="lucide:download" width="10"></iconify-icon> QP</button>
<button className="text-[10px] bg-black text-white px-2 py-1 rounded hover:bg-gray-800">Upload PDF</button>
</div>
</div>
</div>

<div className="p-3 hover:bg-gray-50 transition-colors">
<div className="flex justify-between items-start mb-1">
<p className="text-xs font-medium text-gray-900">OS Case Study</p>
<span className="text-[9px] bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded border border-yellow-100">Due 14 Oct</span>
</div>
<div className="flex justify-between items-end">
<p className="text-[10px] text-gray-500">Lab Record • 10 Marks</p>
<div className="flex items-center gap-2">
<span className="text-[9px] text-gray-400 flex items-center border border-gray-200 px-1 rounded"><iconify-icon className="mr-1" icon="lucide:check-circle" width="8"></iconify-icon> Turnitin</span>
<button className="text-[10px] bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-50">Submit</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10"><iconify-icon icon="lucide:calendar-days" width="60"></iconify-icon></div>
<h3 className="text-xs font-semibold text-gray-900 mb-3">Upcoming Exams (Mid-Sem)</h3>
<div className="space-y-2">
<div className="flex items-center p-2 bg-gray-50 rounded border border-gray-100">
<div className="text-center px-2 border-r border-gray-200">
<p className="text-[9px] text-gray-500 uppercase">OCT</p>
<p className="text-sm font-bold text-gray-900">24</p>
</div>
<div className="ml-3">
<p className="text-xs font-medium text-gray-900">Computer Networks</p>
<p className="text-[10px] text-gray-500">10:00 AM • Room 301</p>
</div>
</div>
<div className="flex items-center p-2 bg-gray-50 rounded border border-gray-100">
<div className="text-center px-2 border-r border-gray-200">
<p className="text-[9px] text-gray-500 uppercase">OCT</p>
<p className="text-sm font-bold text-gray-900">26</p>
</div>
<div className="ml-3">
<p className="text-xs font-medium text-gray-900">Database Systems</p>
<p className="text-[10px] text-gray-500">10:00 AM • Room 301</p>
</div>
</div>
</div>
<button className="w-full mt-3 text-[10px] font-medium text-center border border-gray-200 rounded py-1.5 hover:bg-gray-50 flex items-center justify-center">
<iconify-icon className="mr-1" icon="lucide:download" width="12"></iconify-icon> Download Admit Card
                                </button>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 bg-gray-50 border-b border-gray-100">
<h3 className="text-xs font-semibold text-gray-900">Notice Board</h3>
</div>
<div className="max-h-60 overflow-y-auto">
<div className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
<div className="flex justify-between">
<span className="text-[9px] text-blue-600 font-medium bg-blue-50 px-1 rounded">EXAM</span>
<span className="text-[9px] text-gray-400">10 Oct</span>
</div>
<p className="text-xs font-medium text-gray-900 mt-1">Mid-Sem Date Sheet Released</p>
</div>
<div className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
<div className="flex justify-between">
<span className="text-[9px] text-purple-600 font-medium bg-purple-50 px-1 rounded">EVENT</span>
<span className="text-[9px] text-gray-400">08 Oct</span>
</div>
<p className="text-xs font-medium text-gray-900 mt-1">Hackathon 2023 Registration Open</p>
</div>
<div className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
<div className="flex justify-between">
<span className="text-[9px] text-orange-600 font-medium bg-orange-50 px-1 rounded">ADMIN</span>
<span className="text-[9px] text-gray-400">05 Oct</span>
</div>
<p className="text-xs font-medium text-gray-900 mt-1">Holiday on Friday (Gazetted)</p>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
<h3 className="text-xs font-semibold text-gray-900 mb-3">Academic Repository</h3>
<div className="grid grid-cols-2 gap-2">
<a className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded border border-gray-100 hover:border-gray-300 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 mb-1" icon="lucide:book-open" width="20"></iconify-icon>
<span className="text-[10px] font-medium text-gray-600">Syllabus</span>
</a>
<a className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded border border-gray-100 hover:border-gray-300 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 mb-1" icon="lucide:file-question" width="20"></iconify-icon>
<span className="text-[10px] font-medium text-gray-600">PYQs</span>
</a>
<a className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded border border-gray-100 hover:border-gray-300 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 mb-1" icon="lucide:sticky-note" width="20"></iconify-icon>
<span className="text-[10px] font-medium text-gray-600">Notes</span>
</a>
<a className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded border border-gray-100 hover:border-gray-300 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 mb-1" icon="lucide:calendar" width="20"></iconify-icon>
<span className="text-[10px] font-medium text-gray-600">Calendar</span>
</a>
</div>
</div>

<div className="space-y-2">
<button @click="openLeaveModal" className="w-full flex items-center justify-center gap-2 bg-black text-white text-xs font-medium py-2 rounded-lg hover:bg-gray-800 transition-colors">
<iconify-icon icon="lucide:send" width="14"></iconify-icon> Apply for Leave
                                </button>
<button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:message-square-warning" width="14"></iconify-icon> Grievance / Feedback
                                </button>
</div>
</div>
</div>
</div>

<div className="h-full flex flex-col items-center justify-center max-w-lg mx-auto space-y-6" x-show="userRole === 'student' &amp;&amp; currentPage === 'attendance'">
<div className="text-center">
<h2 className="text-xl font-semibold text-gray-900">Mark Attendance</h2>
<p className="text-xs text-gray-500 mt-1">Use Face ID or Scan QR code displayed in class</p>
</div>

<div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden relative transition-all">
<div className="h-64 bg-gray-900 relative flex items-center justify-center overflow-hidden">

<img :className="scanStatus === 'scanning' ? 'opacity-60' : 'opacity-30'" className="w-full h-full object-cover blur-sm transition-opacity duration-700" src="https://ui-avatars.com/api/?name=Student&amp;background=random"/>

<div className="absolute inset-0 flex items-center justify-center" x-show="scanStatus === 'idle'">
<iconify-icon className="text-white/40" icon="lucide:scan-face" width="48"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}} x-show="scanStatus === 'scanning'">
<div className="w-48 h-48 border-2 border-blue-500/50 rounded-lg relative overflow-hidden">
<div className="scan-line bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
</div>
</div>

<div className="absolute inset-0 bg-green-500/90 flex flex-col items-center justify-center text-white backdrop-blur-sm" style={{display: 'none'}} x-show="scanStatus === 'success'">
<div className="rounded-full bg-white text-green-500 p-3 mb-3 shadow-lg">
<iconify-icon icon="lucide:check" strokeWidth="4" width="32"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight">Present Marked</span>
<span className="text-xs opacity-90 font-medium mt-1">CMS Server • Verified</span>
</div>

<p className="absolute bottom-4 text-white font-medium text-xs tracking-wide uppercase animate-pulse flex items-center gap-2" x-show="scanStatus === 'scanning'">
<span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span> <span x-text="scanMessage"></span>
</p>
</div>
<div className="p-6">

<div className="flex gap-3" x-show="scanStatus !== 'success'">
<button :disabled="scanStatus === 'scanning'" @click="markAttendance('face')" className="flex-1 bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-wait transition-all flex items-center justify-center gap-2 shadow-sm">
<iconify-icon icon="lucide:smile" width="18"></iconify-icon> Face ID
                                 </button>
<button :disabled="scanStatus === 'scanning'" @click="markAttendance('qr')" className="flex-1 bg-white border border-gray-200 text-gray-900 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-wait transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:qr-code" width="18"></iconify-icon> Scan QR
                                 </button>
</div>

<div className="text-center space-y-3" style={{display: 'none'}} x-show="scanStatus === 'success'">
<p className="text-sm text-gray-600">Attendance has been synced with the central server.</p>
<button @click="scanStatus = 'idle'" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Mark for another subject</button>
</div>
</div>
</div>

<div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Live Statistics</h3>
<span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">Updated Now</span>
</div>
<div className="space-y-4">
<template :key="sub.id" x-htmlFor="sub in attendanceStats">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-gray-800" x-text="sub.n"></span>
<div className="flex items-center gap-2">
<span className="text-[10px] text-gray-400 font-mono" x-text="`${sub.a}/${sub.t}`"></span>
<span :className="sub.p &lt; 75 ? 'text-red-600 font-bold' : 'text-green-600 font-medium'" x-text="sub.p + '%'"></span>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div :className="sub.p &lt; 75 ? 'bg-red-500' : 'bg-green-500'" :style={{`width: '${sub.p}%`'}} className="h-full rounded-full transition-all duration-1000 ease-out"></div>
</div>
</div>
</template>
</div>
</div>
</div>

<div className="flex items-center justify-center h-full" x-show="currentPage !== 'dashboard' &amp;&amp; currentPage !== 'attendance'">
<div className="text-center">
<div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
<iconify-icon className="text-gray-400" icon="lucide:construction" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900">Under Development</h3>
<p className="text-xs text-gray-500">This module is part of the full implementation.</p>
</div>
</div>
</main>
</div>
</div>



<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans" x-show="isAuthenticated">
<div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-gray-200 mb-4 flex flex-col overflow-hidden" style={{display: 'none'}} x-show="chatOpen" x-transition.scale.origin.bottom.right="">
<div className="p-3 bg-gray-900 text-white flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="h-2 w-2 rounded-full bg-green-400"></div>
<div>
<p className="text-xs font-bold">Campus AI</p>
<p className="text-[9px] opacity-70">Ask about fees, exams, marks...</p>
</div>
</div>
<button @click="chatOpen = false"><iconify-icon icon="lucide:x" width="16"></iconify-icon></button>
</div>
<div className="flex-1 bg-gray-50 p-4 overflow-y-auto space-y-3 custom-scrollbar">

<div className="flex justify-start">
<div className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                        Hi Arjun! I can help you with attendance, fee status, or exam dates. Try asking "What is my attendance in DBMS?"
                    </div>
</div>
<template :key="msg.id" x-htmlFor="msg in chatHistory">
<div :className="msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'">
<div :className="msg.sender === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none'" className="text-xs px-3 py-2 rounded-lg shadow-sm max-w-[85%]" x-text="msg.text"></div>
</div>
</template>
</div>
<div className="p-3 bg-white border-t border-gray-100">
<form @submit.prevent="sendMessage" className="flex items-center space-x-2">
<input className="flex-1 text-xs border-none focus:ring-0 bg-gray-100 rounded-full px-4 py-2 outline-none" placeholder="Type query..." type="text" x-model="chatInput"/>
<button className="h-8 w-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800" type="submit"><iconify-icon icon="lucide:send" width="14"></iconify-icon></button>
</form>
</div>
</div>
<button @click="chatOpen = !chatOpen" className="h-14 w-14 bg-black text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform group">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="lucide:bot" width="28"></iconify-icon>
</button>
</div>



<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" style={{display: 'none'}} x-show="showIDCard">
<div @click.away="showIDCard = false" className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl m-4 relative">
<button @click="showIDCard = false" className="absolute top-3 right-3 text-white z-10"><iconify-icon icon="lucide:x-circle" width="24"></iconify-icon></button>

<div className="h-24 bg-blue-600 relative">
<div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
<div className="h-20 w-20 rounded-full border-4 border-white overflow-hidden bg-gray-200">
<img alt="" src="https://ui-avatars.com/api/?name=Arjun+Verma&amp;background=0D8ABC&amp;color=fff&amp;size=128"/>
</div>
</div>
</div>
<div className="pt-12 pb-6 px-6 text-center space-y-1">
<h2 className="text-lg font-bold text-gray-900 uppercase tracking-tight">Arjun Verma</h2>
<p className="text-xs font-medium text-blue-600">Computer Science &amp; Engineering</p>
<p className="text-xs text-gray-500">Batch 2021-2025</p>
<div className="grid grid-cols-2 gap-4 text-left mt-6 border-t border-b border-gray-100 py-4">
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider">Roll No</p>
<p className="text-sm font-semibold text-gray-800">2021CS104</p>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider">DOB</p>
<p className="text-sm font-semibold text-gray-800">12 Aug 2003</p>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider">Blood Group</p>
<p className="text-sm font-semibold text-gray-800">O+</p>
</div>
<div>
<p className="text-[10px] text-gray-400 uppercase tracking-wider">Valid Upto</p>
<p className="text-sm font-semibold text-gray-800">July 2025</p>
</div>
</div>
<div className="mt-4 flex justify-center">
<iconify-icon className="text-gray-900" icon="lucide:qr-code" width="80"></iconify-icon>
</div>
<p className="text-[9px] text-gray-400 mt-2">Scan to verify student identity</p>
</div>
<div className="bg-gray-50 p-3 flex justify-between items-center text-xs border-t border-gray-100">
<span className="text-green-600 font-medium flex items-center"><iconify-icon className="mr-1" icon="lucide:check-circle" width="12"></iconify-icon> Active</span>
<button className="text-blue-600 font-medium">Download PDF</button>
</div>
</div>
</div>



<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm" style={{display: 'none'}} x-show="showLeaveModal">
<div @click.away="showLeaveModal = false" className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 m-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-bold text-gray-900">Apply for Leave</h3>
<button @click="showLeaveModal = false" className="text-gray-400 hover:text-gray-900"><iconify-icon icon="lucide:x" width="18"></iconify-icon></button>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Leave Type</label>
<select className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-black focus:border-black">
<option>Sick Leave</option>
<option>Casual Leave</option>
<option>Duty Leave (NSS/Sports/Event)</option>
<option>Emergency</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">From Date</label>
<input className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">To Date</label>
<input className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Reason</label>
<textarea className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2" placeholder="Briefly describe reason for leave..." rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Upload Document (Optional)</label>
<div className="border border-dashed border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
<p className="text-[10px] text-gray-500">Click to upload Medical Cert / Permission Letter</p>
</div>
</div>
<div className="pt-2">
<button @click="showLeaveModal = false" className="w-full bg-black text-white text-xs font-medium py-2.5 rounded-lg hover:bg-gray-800" type="button">Submit Application</button>
</div>
</form>
</div>
</div>



    </>
  );
}
