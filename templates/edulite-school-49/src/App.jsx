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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1f2937',
}
}
}
}
}



        const moduleData = {
            'student_academic': {
                title: "Student & Academic Management",
                desc: "Centralized student lifecycle management. Handle session transfers, subject assignments, and detailed student logs efficiently.",
                features: ["Scholar Register", "Session Records & Transfers", "Active & Deactivated Cases", "Subject Assignments", "Student Activity Logs"],
                benefit: "Ensure data continuity across academic sessions and easily promote, transfer, or archive student records."
            },
            'admin_settings': {
                title: "Administration & Settings",
                desc: "Complete control over your ERP environment. Manage user rights, track logs, and configure session-wise settings securely.",
                features: ["User-rights Management", "Audit Logs of Records & Docs", "Session Configuration", "Automated Data Backup", "Security Settings"],
                benefit: "Role-based access control and detailed audit trails ensure your data remains secure and compliant."
            },
            'admission': {
                title: "Enquiry & Admissions",
                desc: "Streamline the admission funnel from initial enquiry to final conversion. Track leads effectively.",
                features: ["Course-wise New Enquiries", "User-wise Enquiry Reports", "Status & Conversion Reports", "Admission Funnel Analysis", "Lead Tracking"],
                benefit: "Gain full visibility into your admission pipeline and monitor conversion rates in real-time."
            },
            'attendance': {
                title: "Attendance Management",
                desc: "Robust tracking for students and staff. Supports both manual entry and biometric machine integration.",
                features: ["Daily & Monthly Reports", "Parent Messaging System", "Holidays Calendar", "Machine ID Assignment", "Absentee Analysis"],
                benefit: "Automated parent notifications and deep analytics help improve student punctuality and safety."
            },
            'fees': {
                title: "Fee & Billing Management",
                desc: "Transparent financial tracking with automated alerts for due fees. Ensure financial accuracy effortlessly.",
                features: ["Daily Deposits Report", "Head-wise Fee Reports", "Due Fee Alerts via SMS", "Demand Slip Generation", "Defaulter Lists"],
                benefit: "Reduce pending dues with automated reminders and keep your accounts perfectly reconciled."
            },
            'exams': {
                title: "Examination & Results",
                desc: "Flexible exam structures and automated report card generation for CBSE, ICSE, and State boards.",
                features: ["Customized Mark Sheets", "Student Progress Reports", "Class Tests & Periodic Assessments", "PTM Format Lists", "Exam-wise Analytics"],
                benefit: "Save weeks of manual work during exam season with one-click report card generation."
            },
            'certificates': {
                title: "Certificates & Documents",
                desc: "Generate official documents on demand. Reduce manual paperwork with standardized formats.",
                features: ["Character Certificates", "Transfer Certificates (TC)", "Study / Bonafide Certificates", "Fee Certificates", "Bank Challans"],
                benefit: "Issue error-free, professional certificates instantly whenever a student or parent requests them."
            },
            'transport': {
                title: "Transport Management",
                desc: "Optimize routes and ensure student safety with comprehensive vehicle and boarding point management.",
                features: ["Route Lists & Optimization", "Boarding Point-wise Details", "Vehicle-wise Student Lists", "Transport Fee Mapping", "SMS Alerts for Delay"],
                benefit: "Keep parents informed and ensure maximum utilization of your school's transport fleet."
            },
            'hostel': {
                title: "Hostel Management",
                desc: "Manage occupancy, room allocations, and warden assignments with clarity.",
                features: ["Room-wise Student Lists", "Available Capacity Reports", "Building/Floor-wise Details", "Warden Assignment", "Student Room Allotments"],
                benefit: "Maintain strict control over hostel occupancy and ensure student safety within campus accommodation."
            },
            'library': {
                title: "Library Management",
                desc: "Digital tracking for your library inventory. Manage issues, returns, and stocks efficiently.",
                features: ["Student Access Logs", "Book Stock Reports", "Issued & Returned Books", "Due Date Reports", "Bar Code System Integration"],
                benefit: "Prevent book loss and simplify inventory management with a modern digital library system."
            },
            'staff': {
                title: "Staff & Payroll",
                desc: "Manage employee records and payroll compliance seamlessly. Ensure salary transparency.",
                features: ["Employee Profiles", "Salary Calculation", "PF / ESI Compliance", "Salary Slip Generation", "Attendance Integration"],
                benefit: "Automate your payroll process and maintain organized digital records for all teaching and non-teaching staff."
            },
            'stock': {
                title: "Stock & Inventory",
                desc: "Track school supplies, sales, and purchases. Keep your inventory audit-ready at all times.",
                features: ["Easy Stock Entry", "Class-wise Billing", "Short-stock Alerts", "Sales & Purchase Reports", "Taxation Reports"],
                benefit: "Gain full visibility into expenses and inventory levels to prevent wastage and pilferage."
            },
            'accounts': {
                title: "Accounts & Finance",
                desc: "End-to-end financial control. Manage vouchers, day books, and banking integrations in one place.",
                features: ["Receipt & Payment Vouchers", "Day Book & Cash Book", "Vendor Management", "PDC Management", "Financial Overview"],
                benefit: "Maintain statutory compliance and get a real-time view of your institution's financial health."
            },
            'messaging': {
                title: "Messaging & Communication",
                desc: "Stay connected with parents. Send real-time alerts for important updates.",
                features: ["Attendance Alerts", "Emergency Notifications", "Fee Defaulter Reminders", "Exam Result Alerts", "Birthday Wishes"],
                benefit: "Boost parent engagement and trust through timely and relevant communication."
            },
            'homework': {
                title: "Homework & Task Management",
                desc: "Ensure academic continuity. Track assignments and analyze student performance.",
                features: ["Homework Notifications", "Subject-wise Reports", "Task Assignments", "Progress Analysis", "Auto-updates to App"],
                benefit: "Hold students accountable and give parents visibility into daily classwork and home assignments."
            },
            'visitors': {
                title: "Visitors & Security",
                desc: "Enhance campus security. Monitor visitor entry and exit with digital logs.",
                features: ["Daily Visitor Lists", "Visitor Gate Pass Cards", "Visitor-wise History", "Date-wise Reports", "Purpose Tracking"],
                benefit: "Know exactly who is on campus at any given time and prevent unauthorized access."
            },
            'idcards': {
                title: "Identity Cards",
                desc: "Professional identity management. Create and print ID cards directly from the system.",
                features: ["Bulk ID Creation", "Admission-time Generation", "Custom Size & Layout", "Portrait/Landscape Orientation", "Staff ID Cards"],
                benefit: "Eliminate coordination with external vendors and issue ID cards instantly upon admission."
            },
            'media': {
                title: "Media: Pictures & Videos",
                desc: "Secure media sharing. upload event photos and videos for parent access via the app.",
                features: ["Event-wise Photo Uploads", "Video Galleries", "Mobile App Integration", "Central Repository", "Secure Access"],
                benefit: "Showcase school events and student life to parents securely, enhancing community engagement."
            },
            'reports': {
                title: "Reports & Analytics",
                desc: "Data-driven administration. Generate custom reports to support decision making.",
                features: ["Custom Field Reports", "Student Strength Analysis", "Category & Age-wise Lists", "Certificate Generation Reports", "Trend Analysis"],
                benefit: "Stop guessing. Use accurate data to make informed decisions about school growth and operations."
            },
            'store': {
                title: "School Services & Store",
                desc: "Unified services management. operate a cashless canteen and efficient school store.",
                features: ["School Store Inventory", "Cashless Canteen", "Service Requests", "Billing Integration", "Daily Sales Reports"],
                benefit: "Provide convenience to students and staff while maintaining transparent accounts for ancillary services."
            }
        };

        function navigateTo(pageId) {
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => section.classList.add('hidden'));

            const targetId = pageId.startsWith('page-') ? pageId : `page-${pageId}`;
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.remove('hidden');
                window.scrollTo(0, 0);
                updateActiveNav(pageId);
            }
        }

        function openModule(moduleId) {
            const data = moduleData[moduleId];
            if (!data) return;

            const contentDiv = document.getElementById('module-detail-content');
            
            // Build the detailed view HTML dynamically
            let featuresHtml = data.features.map(f => `
                <li class="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-bold" class="text-indigo-600 mt-0.5 flex-shrink-0"></iconify-icon>
                    <span class="text-sm text-slate-600">${f}</span>
                </li>
            `).join('');

            contentDiv.innerHTML = `
                <div class="bg-indigo-50 border-b border-indigo-100 py-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onclick="navigateTo('modules')" class="text-indigo-600 text-xs font-semibold uppercase tracking-wide mb-4 flex items-center gap-1 hover:text-indigo-800 transition-colors">
                            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Modules
                        </button>
                        <h1 class="text-3xl font-semibold text-slate-900 mb-4">${data.title}</h1>
                        <p class="text-slate-600 max-w-2xl text-lg">${data.desc}</p>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <!-- Main Content -->
                        <div class="lg:col-span-8">
                            <h2 class="text-xl font-semibold text-slate-900 mb-6">Key Features</h2>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                ${featuresHtml}
                            </ul>

                            <div class="bg-slate-50 rounded-xl border border-slate-200 p-8">
                                <h3 class="text-lg font-semibold text-slate-900 mb-4">Why Schools Need This</h3>
                                <div class="flex gap-4">
                                    <div class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-indigo-600">
                                        <iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
                                    </div>
                                    <div>
                                        <p class="text-slate-600 text-sm leading-relaxed">${data.benefit}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Sidebar -->
                        <div class="lg:col-span-4 space-y-6">
                            <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sticky top-24">
                                <h3 class="font-medium text-slate-900 mb-4">See it in action</h3>
                                <p class="text-sm text-slate-500 mb-6">Schedule a personalized walkthrough of the ${data.title} module.</p>
                                <button onclick="navigateTo('demo')" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors mb-3 flex items-center justify-center gap-2">
                                    Request Demo
                                </button>
                                <button onclick="navigateTo('modules')" class="w-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium py-2.5 px-4 rounded-lg text-sm transition-colors">
                                    View Other Modules
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            navigateTo('page-module-detail');
        }

        function updateActiveNav(pageId) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-slate-900', 'bg-slate-50');
                link.classList.add('text-slate-600');
            });

            let navTarget = pageId;
            if(pageId.includes('module-') || pageId === 'page-module-detail') navTarget = 'modules';
            
            // Handle page- prefix if passed directly
            navTarget = navTarget.replace('page-', '');

            const activeLinks = document.querySelectorAll(`[data-target="${navTarget}"]`);
            activeLinks.forEach(link => {
                link.classList.add('text-slate-900', 'bg-slate-50');
                link.classList.remove('text-slate-600');
            });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('home');
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:hat-graduation-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">EDULITE</span>
</div>

<div className="hidden md:flex space-x-1">
<button className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all" data-target="home" onclick="navigateTo('home')">Home</button>
<button className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all" data-target="modules" onclick="navigateTo('modules')">Modules</button>
<button className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all" data-target="pricing" onclick="navigateTo('pricing')">Pricing</button>
<button className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all" data-target="about" onclick="navigateTo('about')">About</button>
<button className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all" data-target="contact" onclick="navigateTo('contact')">Contact</button>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" onclick="navigateTo('demo')">Log in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm flex items-center gap-2" onclick="navigateTo('demo')">
                        Book Demo
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-100 bg-white" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onclick="navigateTo('home'); toggleMobileMenu()">Home</button>
<button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onclick="navigateTo('modules'); toggleMobileMenu()">Modules</button>
<button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onclick="navigateTo('pricing'); toggleMobileMenu()">Pricing</button>
<button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50 mt-4" onclick="navigateTo('demo'); toggleMobileMenu()">Request Demo</button>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen" id="main-container">

<div className="page-section fade-in" id="page-home">

<section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gradient-to-b from-white to-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Trusted by 500+ Indian Schools
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                        The Operating System for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Modern Education</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                        Streamline admissions, automate fees, and simplify academics with EduLite. The all-in-one ERP designed specifically for the needs of Indian schools, colleges, and institutes.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-slate-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2" onclick="navigateTo('demo')">
                            Start Free Trial
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" onclick="navigateTo('modules')">
                            View Modules
                            <iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>

<div className="mt-16 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/50 max-w-5xl mx-auto">
<div className="aspect-[16/9] rounded-lg bg-slate-50 overflow-hidden relative group">

<div className="absolute inset-0 flex">
<div className="w-64 border-r border-slate-200 bg-white p-4 hidden md:block">
<div className="h-8 w-24 bg-slate-100 rounded mb-6"></div>
<div className="space-y-3">
<div className="h-4 w-full bg-slate-50 rounded"></div>
<div className="h-4 w-3/4 bg-slate-50 rounded"></div>
<div className="h-4 w-5/6 bg-slate-50 rounded"></div>
</div>
</div>
<div className="flex-1 p-6">
<div className="flex justify-between mb-8">
<div className="h-8 w-48 bg-slate-100 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-8 bg-indigo-100 rounded-full"></div>
<div className="h-8 w-8 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-32 bg-indigo-50/50 rounded-lg border border-indigo-100/50"></div>
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100"></div>
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Everything you need to run a school</h2>
<p className="text-slate-500 max-w-xl">A complete suite of modules designed to work together perfectly.</p>
</div>
<button className="hidden sm:flex text-indigo-600 text-sm font-medium items-center gap-1 hover:gap-2 transition-all" onclick="navigateTo('modules')">
                            View all modules <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group" onclick="openModule('admission')">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-plus-linear" width="22"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Admission</h4>
<p className="text-xs text-slate-500">Enquiry to enrollment workflow.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group" onclick="openModule('fees')">
<div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bill-list-linear" width="22"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Fee Management</h4>
<p className="text-xs text-slate-500">Invoices, receipts &amp; online pay.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group" onclick="openModule('attendance')">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-mark-linear" width="22"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Attendance</h4>
<p className="text-xs text-slate-500">Biometric &amp; manual tracking.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group" onclick="openModule('exams')">
<div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-linear" width="22"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Academics</h4>
<p className="text-xs text-slate-500">Timetable, homework &amp; exams.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-modules">
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Complete School Management</h1>
<p className="text-slate-500 max-w-2xl mx-auto">20+ integrated modules to cover every aspect of your institution's administration.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('student_academic')">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Student &amp; Academic</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Centralized student lifecycle management and session records.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('admin_settings')">
<div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Admin &amp; Settings</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">User rights, role-based access, and audit trails.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('admission')">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-plus-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Enquiry &amp; Admissions</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Lead tracking, conversion reports, and admission funnel.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('attendance')">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-mark-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Attendance</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Manual &amp; machine-based tracking with parent alerts.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('fees')">
<div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bill-list-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Fee &amp; Billing</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Automated reminders, demand slips, and deposit reports.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('exams')">
<div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Examination &amp; Results</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Custom marksheets, progress reports, and PTM lists.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('certificates')">
<div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Certificates</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">On-demand generation of TC, Bonafide, and Character certs.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('transport')">
<div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bus-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Transport</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Route management, vehicle tracking, and boarding points.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('hostel')">
<div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bed-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Hostel</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Room allotments, capacity tracking, and warden assignment.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('library')">
<div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:library-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Library</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Book stocks, issues, returns, and barcode integration.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('staff')">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-id-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Staff &amp; Payroll</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Employee records, salary slips, PF/ESI compliance.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('stock')">
<div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Stock &amp; Inventory</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Sales, purchase reports, and stock audits.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('accounts')">
<div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Accounts &amp; Finance</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Day book, cash book, vouchers, and banking integration.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('messaging')">
<div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Messaging</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Alerts for attendance, results, emergencies, and birthdays.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('homework')">
<div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:notebook-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Homework</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Task assignments, notifications, and progress analysis.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('visitors')">
<div className="w-10 h-10 bg-stone-100 text-stone-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hand-up-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Visitors &amp; Security</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Digital visitor logs, pass generation, and gate security.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('idcards')">
<div className="w-10 h-10 bg-fuchsia-50 text-fuchsia-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:card-2-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Identity Cards</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Custom layout design and admission-time generation.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('media')">
<div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gallery-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Media Gallery</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Event photos and videos integrated with the mobile app.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('reports')">
<div className="w-10 h-10 bg-lime-50 text-lime-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Reports &amp; Analytics</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Data-driven insights, strength reports, and custom lists.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group flex flex-col h-full" onclick="openModule('store')">
<div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shop-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Services &amp; Store</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Cashless canteen, school store, and unified services.</p>
<span className="text-indigo-600 text-xs font-medium flex items-center gap-1">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-module-detail">

<div id="module-detail-content"></div>
</div>

<div className="page-section hidden fade-in" id="page-pricing">
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500">Choose a plan that fits your institution size.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-slate-200 rounded-2xl p-8 hover:border-indigo-300 transition-colors">
<h3 className="font-semibold text-lg text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mb-6">For play schools &amp; small institutes</p>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">₹15</span>
<span className="text-slate-500 text-sm">/student/month</span>
</div>
<button className="w-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-8" onclick="navigateTo('demo')">Contact Sales</button>
<ul className="space-y-4">
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Student Info System</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Fee Management</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Attendance</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> ID Cards</li>
</ul>
</div>

<div className="border border-indigo-200 bg-slate-50/50 rounded-2xl p-8 relative shadow-lg">
<div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
<h3 className="font-semibold text-lg text-slate-900">Standard</h3>
<p className="text-sm text-slate-500 mb-6">For K-12 Schools</p>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">₹25</span>
<span className="text-slate-500 text-sm">/student/month</span>
</div>
<button className="w-full py-2 px-4 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-500 transition-colors mb-8" onclick="navigateTo('demo')">Get Started</button>
<ul className="space-y-4">
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Everything in Starter</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Examination &amp; Results</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Parent Mobile App</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Transport Module</li>
</ul>
</div>

<div className="border border-slate-200 rounded-2xl p-8 hover:border-indigo-300 transition-colors">
<h3 className="font-semibold text-lg text-slate-900">Enterprise</h3>
<p className="text-sm text-slate-500 mb-6">For Chain of Schools</p>
<div className="mb-6">
<span className="text-2xl font-bold text-slate-900">Custom</span>
</div>
<button className="w-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-8" onclick="navigateTo('contact')">Contact Us</button>
<ul className="space-y-4">
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Multi-branch support</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Custom Integrations</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Dedicated Account Manager</li>
<li className="text-sm text-slate-600 flex gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> On-premise options</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-about">
<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Empowering Education with Technology</h1>
<p className="text-lg text-slate-500 mb-12">EduLite was born from a simple mission: to remove administrative burdens from educators so they can focus on teaching.</p>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:buildings-2-linear" width="80"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Our Story</h3>
<p className="text-slate-600 mb-4 leading-relaxed">Starting in 2018 in Bangalore, we realized that most School ERPs were clunky, hard to use, and expensive. Indian schools needed a solution that was modern, fast, and catered to local needs like CBSE format report cards and GST-compliant fee receipts.</p>
<p className="text-slate-600 leading-relaxed">Today, EduLite serves over 500 institutions across 20 states in India, handling data for over 200,000 students daily.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-demo">
<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 sm:p-12">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900 mb-2">Schedule a Free Demo</h2>
<p className="text-slate-500 text-sm">See how EduLite can transform your school management.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you! Our team will contact you shortly.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">School Name</label>
<input className="w-full rounded-md border-slate-300 shadow-sm px-3 py-2 text-sm border focus:ring-indigo-500 focus:border-indigo-500" placeholder="St. Mary's School" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Contact Person</label>
<input className="w-full rounded-md border-slate-300 shadow-sm px-3 py-2 text-sm border" placeholder="Principal Name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full rounded-md border-slate-300 shadow-sm px-3 py-2 text-sm border" placeholder="+91 98765 43210" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full rounded-md border-slate-300 shadow-sm px-3 py-2 text-sm border" placeholder="admin@school.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Student Strength</label>
<select className="w-full rounded-md border-slate-300 shadow-sm px-3 py-2 text-sm border bg-white">
<option>Less than 500</option>
<option>500 - 1000</option>
<option>1000 - 2000</option>
<option>2000+</option>
</select>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg text-sm hover:bg-slate-800 transition-all" type="submit">Submit Request</button>
</form>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="page-contact">
<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
<p className="text-slate-500 mt-2">We are here to help you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Sales</h3>
<p className="text-sm text-slate-500 mt-1">+91 80 1234 5678</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Email</h3>
<p className="text-sm text-slate-500 mt-1">hello@edulite.in</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Office</h3>
<p className="text-sm text-slate-500 mt-1">HSR Layout, Bangalore, India</p>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:hat-graduation-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">EduLite</span>
</div>
<p className="text-slate-500 max-w-xs mb-4">The most trusted School ERP for Indian education institutions. Simple, fast, and reliable.</p>
<div className="flex gap-4 text-slate-400">
<iconify-icon className="hover:text-indigo-600 cursor-pointer" icon="solar:brand-facebook-linear"></iconify-icon>
<iconify-icon className="hover:text-indigo-600 cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="hover:text-indigo-600 cursor-pointer" icon="solar:brand-linkedin-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li><button className="hover:text-indigo-600" onclick="navigateTo('modules')">Modules</button></li>
<li><button className="hover:text-indigo-600" onclick="navigateTo('pricing')">Pricing</button></li>
<li><button className="hover:text-indigo-600" onclick="navigateTo('demo')">Request Demo</button></li>
<li><button className="hover:text-indigo-600" onclick="navigateTo('modules')">Parent App</button></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-slate-500">
<li><button className="hover:text-indigo-600" onclick="navigateTo('about')">About Us</button></li>
<li><button className="hover:text-indigo-600" onclick="navigateTo('contact')">Contact</button></li>
<li><button className="hover:text-indigo-600" onclick="navigateTo('faq')">FAQ</button></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><button className="hover:text-indigo-600" onclick="navigateTo('privacy')">Privacy Policy</button></li>
<li><button className="hover:text-indigo-600" onclick="navigateTo('privacy')">Terms of Service</button></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
<p>© 2023 EduLite Systems Pvt Ltd. All rights reserved.</p>
<div className="mt-2 md:mt-0">Made in India with <iconify-icon className="text-red-400 inline align-middle" icon="solar:heart-bold"></iconify-icon></div>
</div>
</div>
</footer>



    </>
  );
}
