import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const state = {
          role: 'guest',
          view: 'landing'
      };

      function setView(viewId, role = null) {
          document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));

          const target = document.getElementById(viewId);
          if(target) target.classList.remove('hidden');

          const appLayout = document.getElementById('app-layout');
          const landingNav = document.getElementById('landing-nav');

          if (['landing', 'auth-login', 'auth-signup', 'auth-reset'].includes(viewId)) {
              appLayout.classList.add('hidden');
              if(viewId === 'landing') landingNav.classList.remove('hidden');
              else landingNav.classList.add('hidden');
          } else {
              appLayout.classList.remove('hidden');
              landingNav.classList.add('hidden');
          }

          if (role) state.role = role;
          updateRoleUI();

          setTimeout(() => lucide.createIcons(), 50);
          window.scrollTo(0,0);
      }

      function updateRoleUI() {
          const sidebar = document.getElementById('sidebar-links');
          const userAvatar = document.getElementById('user-avatar-initials');
          const userName = document.getElementById('user-name-display');
          const mobileNav = document.getElementById('mobile-nav-items');

          let links = '';

          if (state.role === 'student') {
              userName.innerText = "Ahmed (Student)";
              userAvatar.innerText = "AH";
              links = `
                  <button onclick="setView('student-dashboard')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="layout-dashboard" class="w-4 h-4"></i> Dashboard</button>
                  <button onclick="setView('learning-path')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="map" class="w-4 h-4"></i> Learning Path</button>
                  <button onclick="setView('courses')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="library" class="w-4 h-4"></i> My Courses</button>
                  <button onclick="setView('live-classes')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="video" class="w-4 h-4"></i> Live Classes</button>
              `;
          } else if (state.role === 'teacher') {
              userName.innerText = "Ustadh Ali (Teacher)";
              userAvatar.innerText = "UA";
              links = `
                  <button onclick="setView('teacher-dashboard')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="layout-dashboard" class="w-4 h-4"></i> Dashboard</button>
                  <button onclick="setView('teacher-courses')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="book-open" class="w-4 h-4"></i> My Courses</button>
                  <button onclick="setView('live-classes')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="video" class="w-4 h-4"></i> Live Classes</button>
                  <button onclick="setView('teacher-students')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="users" class="w-4 h-4"></i> Students</button>
              `;
          } else if (state.role === 'admin') {
              userName.innerText = "Admin User";
              userAvatar.innerText = "AD";
              links = `
                  <button onclick="setView('admin-dashboard')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="layout-dashboard" class="w-4 h-4"></i> Overview</button>
                  <div class="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Management</div>
                  <button onclick="setView('admin-students')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="users" class="w-4 h-4"></i> Students</button>
                  <button onclick="setView('admin-teachers')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="graduation-cap" class="w-4 h-4"></i> Teachers</button>
                  <button onclick="setView('admin-courses')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="book-open" class="w-4 h-4"></i> Courses</button>
              `;
          }

          links += `
              <div class="my-2 border-t border-zinc-200"></div>
              <button onclick="setView('blog')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="newspaper" class="w-4 h-4"></i> Blog</button>
              <button onclick="setView('settings')" class="flex items-center w-full gap-3 px-3 py-2 text-zinc-600 hover:text-[#0E5E41] hover:bg-white rounded-lg transition-colors font-medium"><i data-lucide="settings" class="w-4 h-4"></i> Settings</button>
              <button onclick="setView('landing', 'guest')" class="flex items-center w-full gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"><i data-lucide="log-out" class="w-4 h-4"></i> Sign Out</button>
          `;

          sidebar.innerHTML = links;
      }
    


      // Initialize
      lucide.createIcons();
      setView('landing', 'guest'); // Start at landing
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<nav className="fixed top-0 w-full z-50 bg-[#FAFAF7]/80 backdrop-blur-md border-b border-zinc-200" id="landing-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#0E5E41] rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4 fill-current" data-lucide="moon"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-[#0E5E41]">
            Daarul-Hijrah
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-[#0E5E41]" href="#">About</a>
<a className="hover:text-[#0E5E41]" href="#">Courses</a>
<a className="hover:text-[#0E5E41]" href="#">Blog</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block text-sm font-medium text-zinc-600 hover:text-[#0E5E41]" onclick="setView('auth-login')">
            Log in
          </button>
<button className="bg-[#0E5E41] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0b4a33] transition-colors shadow-sm shadow-[#0E5E41]/20" onclick="setView('auth-signup')">
            Start Learning
          </button>
</div>
</div>
</nav>

<div className="app-view pt-16" id="landing">

<section className="relative pt-20 pb-32 overflow-hidden pattern-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6A561]/10 text-[#D6A561] text-xs font-medium mb-6 border border-[#D6A561]/20">
<span className="w-2 h-2 rounded-full bg-[#D6A561]"></span>
            New: Winter Semester Enrollment
          </div>
<h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 tracking-tight mb-6 leading-[1.1]">
            Knowledge that
            <br className="hidden md:block"/>
            illuminates the heart.
          </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            A modern Madrasah platform combining traditional Islamic scholarship
            with contemporary learning tools. Join over 5,000 students
            worldwide.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-[#0E5E41] text-white rounded-xl font-medium shadow-lg shadow-[#0E5E41]/20 hover:bg-[#0b4a33] transition-transform active:scale-95" onclick="setView('auth-signup')">
              Begin Journey
            </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-700 rounded-xl font-medium hover:bg-zinc-50 transition-colors" onclick="setView('courses')">
              Explore Courses
            </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-[#FAFAF7] border border-zinc-100">
<div className="w-10 h-10 bg-[#0E5E41]/10 rounded-lg flex items-center justify-center text-[#0E5E41] mb-4">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Structured Curriculum
              </h3>
<p className="text-zinc-500 leading-relaxed">
                From Fiqh to Aqeedah, follow a clear path designed by scholars.
              </p>
</div>
<div className="p-6 rounded-2xl bg-[#FAFAF7] border border-zinc-100">
<div className="w-10 h-10 bg-[#D6A561]/10 rounded-lg flex items-center justify-center text-[#D6A561] mb-4">
<i className="w-5 h-5" data-lucide="video"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Live Sessions
              </h3>
<p className="text-zinc-500 leading-relaxed">
                Interact with Ustadhs in real-time Q&amp;A sessions weekly.
              </p>
</div>
<div className="p-6 rounded-2xl bg-[#FAFAF7] border border-zinc-100">
<div className="w-10 h-10 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-600 mb-4">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Community
              </h3>
<p className="text-zinc-500 leading-relaxed">
                Join study circles and connect with fellow students globally.
              </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-4 text-center text-zinc-400 text-sm">
<p>© 2024 Daarul-Hijrah Madrasah. All rights reserved.</p>
</div>
</footer>
</div>

<div className="app-view hidden min-h-screen flex items-center justify-center pattern-bg px-4" id="auth-login">
<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
<div className="text-center mb-8">
<div className="w-12 h-12 bg-[#0E5E41] rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-[#0E5E41]/30">
<i className="w-6 h-6 fill-current" data-lucide="moon"></i>
</div>
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Welcome Back
          </h2>
<p className="text-zinc-500 mt-2">Sign in to continue your learning</p>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
              Email Address
            </label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#0E5E41]/20 focus:border-[#0E5E41] transition-all" placeholder="name@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
              Password
            </label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#0E5E41]/20 focus:border-[#0E5E41] transition-all" placeholder="••••••••" type="password"/>
</div>
<div className="pt-2 flex flex-col gap-3">
<button className="w-full py-2.5 bg-[#0E5E41] text-white rounded-lg font-medium hover:bg-[#0b4a33] transition-colors" onclick="setView('student-dashboard', 'student')">
              Login as Student
            </button>
<button className="w-full py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-colors" onclick="setView('admin-dashboard', 'admin')">
              Login as Admin (Demo)
            </button>
<button className="w-full py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-colors" onclick="setView('teacher-dashboard', 'teacher')">
              Login as Teacher
            </button>
</div>
</div>
<p className="mt-6 text-center text-xs text-zinc-500">
          Don't have an account?
          <button className="text-[#0E5E41] font-medium hover:underline" onclick="setView('auth-signup')">
            Sign up
          </button>
</p>
</div>
</div>
<div className="app-view hidden min-h-screen flex items-center justify-center pattern-bg px-4" id="auth-signup">
<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
<div className="text-center mb-6">
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Create Account
          </h2>
<p className="text-zinc-500 mt-2">Join the Madrasah today</p>
</div>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<button className="p-4 rounded-xl border-2 border-[#0E5E41] bg-[#0E5E41]/5 flex flex-col items-center justify-center gap-2">
<i className="w-5 h-5 text-[#0E5E41]" data-lucide="user"></i>
<span className="text-xs font-semibold text-[#0E5E41]">Student</span>
</button>
<button className="p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 flex flex-col items-center justify-center gap-2 text-zinc-500">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<span className="text-xs font-medium">Teacher</span>
</button>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
              Full Name
            </label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 focus:border-[#0E5E41]" placeholder="Abdullah..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
              Email
            </label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 focus:border-[#0E5E41]" placeholder="name@example.com" type="email"/>
</div>
<button className="w-full py-2.5 bg-[#0E5E41] text-white rounded-lg font-medium hover:bg-[#0b4a33] mt-2" onclick="setView('learning-path-setup', 'student')">
            Create Account
          </button>
</div>
<p className="mt-6 text-center text-xs text-zinc-500">
          Already have an account?
          <button className="text-[#0E5E41] font-medium hover:underline" onclick="setView('auth-login')">
            Log in
          </button>
</p>
</div>
</div>

<div className="hidden flex h-screen overflow-hidden" id="app-layout">

<aside className="hidden md:flex flex-col w-64 bg-[#FAFAF7] border-r border-zinc-200 h-full">
<div className="p-6 flex items-center gap-2">
<div className="w-7 h-7 bg-[#0E5E41] rounded-md flex items-center justify-center text-white">
<i className="w-4 h-4 fill-current" data-lucide="moon"></i>
</div>
<span className="font-semibold text-zinc-900 tracking-tight">
            Daarul-Hijrah
          </span>
</div>
<div className="px-3 flex-1 overflow-y-auto space-y-1" id="sidebar-links">

</div>
<div className="p-4 border-t border-zinc-200">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-zinc-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-[#0E5E41]/10 text-[#0E5E41] flex items-center justify-center text-xs font-bold" id="user-avatar-initials">
              AH
            </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-zinc-900 truncate" id="user-name-display">
                Ahmed (Student)
              </p>
<p className="text-[10px] text-zinc-500">Online</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">

<header className="h-14 md:hidden border-b border-zinc-200 flex items-center justify-between px-4 bg-[#FAFAF7]">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#0E5E41] rounded-md flex items-center justify-center text-white">
<i className="w-3 h-3 fill-current" data-lucide="moon"></i>
</div>
<span className="font-semibold text-sm">Daarul-Hijrah</span>
</div>
<button className="p-2 text-zinc-600">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</header>

<header className="hidden md:flex h-16 border-b border-zinc-100 items-center justify-between px-8 bg-white shrink-0">
<div className="flex items-center text-sm text-zinc-500">
<span className="text-zinc-400">Portal</span>
<i className="w-4 h-4 mx-2" data-lucide="chevron-right"></i>
<span className="text-zinc-900 font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-full transition-colors" onclick="setView('notifications')">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 relative">

<div className="app-view hidden space-y-8 max-w-6xl mx-auto" id="student-dashboard">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
                  Assalamu Alaykum, Ahmed
                </h1>
<p className="text-zinc-500 text-sm mt-1">
                  Ready to continue your journey of knowledge?
                </p>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-[#0E5E41] text-white rounded-lg text-sm font-medium shadow-sm hover:bg-[#0b4a33]" onclick="setView('learning-path')">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
                Resume Path
              </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-5 rounded-xl border border-zinc-200 bg-[#FAFAF7]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">
                    Daily Goal
                  </span>
<i className="w-4 h-4 text-[#D6A561]" data-lucide="clock"></i>
</div>
<div className="text-2xl font-semibold text-zinc-900">45m</div>
<div className="w-full bg-zinc-200 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-[#D6A561] h-full rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">
                    Completed Lessons
                  </span>
<i className="w-4 h-4 text-[#0E5E41]" data-lucide="check-circle"></i>
</div>
<div className="text-2xl font-semibold text-zinc-900">12</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">
                    Courses Active
                  </span>
<i className="w-4 h-4 text-zinc-400" data-lucide="book"></i>
</div>
<div className="text-2xl font-semibold text-zinc-900">3</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">
                    Next Live
                  </span>
<i className="w-4 h-4 text-red-500" data-lucide="video"></i>
</div>
<div className="text-sm font-semibold text-zinc-900">
                  Fiqh of Prayer
                </div>
<div className="text-xs text-zinc-500">Today, 5:00 PM</div>
</div>
</div>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
                  Continue Learning
                </h2>
<button className="text-sm text-[#0E5E41] hover:underline font-medium" onclick="setView('courses')">
                  View All
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all cursor-pointer" onclick="setView('course-detail')">
<div className="h-40 bg-zinc-100 relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
<i className="w-10 h-10" data-lucide="image"></i>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-medium">
                      12:30
                    </div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] uppercase font-bold tracking-wider text-[#0E5E41] bg-[#0E5E41]/5 px-2 py-0.5 rounded">
                        Fiqh
                      </span>
</div>
<h3 className="font-semibold text-zinc-900 mb-1 line-clamp-1 group-hover:text-[#0E5E41]">
                      Purification (Taharah) - Part 3
                    </h3>
<p className="text-xs text-zinc-500 mb-4">
                      Sh. Muhammad Al-Ghazali
                    </p>
<div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#0E5E41] h-full rounded-full" style={{width: '45%'}}></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all cursor-pointer">
<div className="h-40 bg-zinc-100 relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
<i className="w-10 h-10" data-lucide="image"></i>
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] uppercase font-bold tracking-wider text-[#D6A561] bg-[#D6A561]/10 px-2 py-0.5 rounded">
                        Seerah
                      </span>
</div>
<h3 className="font-semibold text-zinc-900 mb-1 line-clamp-1 group-hover:text-[#0E5E41]">
                      The Makkan Period
                    </h3>
<p className="text-xs text-zinc-500 mb-4">Ust. Aminah Yusuf</p>
<div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#0E5E41] h-full rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="app-view hidden space-y-8 max-w-6xl mx-auto" id="admin-dashboard">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
                Madrasah Overview
              </h1>
<button className="bg-[#0E5E41] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0b4a33]">
                Generate Report
              </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  Total Students
                </span>
<div className="text-3xl font-semibold text-zinc-900 mt-2">
                  1,240
                </div>
<span className="text-xs text-green-600 flex items-center mt-1">
<i className="w-3 h-3 mr-1" data-lucide="arrow-up"></i>
                  12% vs last month
                </span>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  Active Teachers
                </span>
<div className="text-3xl font-semibold text-zinc-900 mt-2">24</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  Course Revenue
                </span>
<div className="text-3xl font-semibold text-zinc-900 mt-2">
                  $14.2k
                </div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  Pending Signups
                </span>
<div className="text-3xl font-semibold text-zinc-900 mt-2">8</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
<h3 className="font-semibold text-zinc-900">Recent Students</h3>
<button className="text-xs text-[#0E5E41] font-medium hover:underline">
                  View All
                </button>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 text-zinc-500 font-medium">
<tr>
<th className="px-6 py-3">Name</th>
<th className="px-6 py-3">Email</th>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">
                      Omar Farooq
                    </td>
<td className="px-6 py-4 text-zinc-500">omar.f@example.com</td>
<td className="px-6 py-4 text-zinc-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">
                      Sarah Ahmed
                    </td>
<td className="px-6 py-4 text-zinc-500">s.ahmed@example.com</td>
<td className="px-6 py-4 text-zinc-500">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                        Pending
                      </span>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">
                      Yusuf Ali
                    </td>
<td className="px-6 py-4 text-zinc-500">yusuf@example.com</td>
<td className="px-6 py-4 text-zinc-500">Oct 22, 2023</td>
<td className="px-6 py-4">
<span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="app-view hidden max-w-2xl mx-auto pt-10" id="learning-path-setup">
<div className="mb-8">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
<span className="w-6 h-6 rounded-full bg-[#0E5E41] text-white flex items-center justify-center text-xs">
                  1
                </span>
<span>Setup your journey</span>
</div>
<h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">
                Personalize your path
              </h1>
<p className="text-zinc-500 mt-2">
                Help Aura customize your curriculum based on your goals.
              </p>
</div>
<div className="space-y-6">
<div className="p-6 bg-white border border-zinc-200 rounded-xl">
<label className="block text-sm font-medium text-zinc-900 mb-4">
                  What is your current knowledge level?
                </label>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 cursor-pointer hover:border-[#0E5E41] hover:bg-[#0E5E41]/5 transition-colors">
<input className="accent-[#0E5E41]" name="level" type="radio"/>
<div>
<div className="font-medium text-sm text-zinc-900">
                        Beginner
                      </div>
<div className="text-xs text-zinc-500">
                        New to structured Islamic studies
                      </div>
</div>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 cursor-pointer hover:border-[#0E5E41] hover:bg-[#0E5E41]/5 transition-colors">
<input className="accent-[#0E5E41]" name="level" type="radio"/>
<div>
<div className="font-medium text-sm text-zinc-900">
                        Intermediate
                      </div>
<div className="text-xs text-zinc-500">
                        Have completed basic primers
                      </div>
</div>
</label>
</div>
</div>
<div className="p-6 bg-white border border-zinc-200 rounded-xl">
<label className="block text-sm font-medium text-zinc-900 mb-4">
                  Interests (Select all that apply)
                </label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm hover:border-[#0E5E41] hover:text-[#0E5E41] bg-white">
                    Quranic Arabic
                  </button>
<button className="px-3 py-1.5 rounded-full border border-[#0E5E41] text-[#0E5E41] bg-[#0E5E41]/5 text-sm font-medium">
                    Fiqh
                  </button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm hover:border-[#0E5E41] hover:text-[#0E5E41] bg-white">
                    Hadith
                  </button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm hover:border-[#0E5E41] hover:text-[#0E5E41] bg-white">
                    Seerah
                  </button>
<button className="px-3 py-1.5 rounded-full border border-[#0E5E41] text-[#0E5E41] bg-[#0E5E41]/5 text-sm font-medium">
                    Tazkiyah
                  </button>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="px-6 py-2.5 bg-[#0E5E41] text-white rounded-lg font-medium hover:bg-[#0b4a33]" onclick="setView('student-dashboard')">
                  Generate Roadmap
                </button>
</div>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto h-full flex flex-col" id="course-detail">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<button className="hover:text-zinc-900" onclick="setView('student-dashboard')">
                Courses
              </button>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-zinc-900">Fiqh of Purification</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

<div className="lg:col-span-2 space-y-6">
<div className="aspect-video bg-black rounded-xl relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">
<button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform" onclick="setView('video-active')">
<i className="w-6 h-6 fill-current ml-1" data-lucide="play"></i>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="h-1 bg-white/30 rounded-full mb-4">
<div className="h-full bg-[#D6A561] w-1/3 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex justify-between text-white text-xs font-medium">
<span>12:45 / 45:00</span>
<div className="flex gap-3">
<i className="w-4 h-4" data-lucide="volume-2"></i>
<i className="w-4 h-4" data-lucide="maximize"></i>
</div>
</div>
</div>
</div>
<div>
<h1 className="text-2xl font-semibold text-zinc-900 mb-2">
                    Lesson 3: Types of Water
                  </h1>
<p className="text-zinc-500 leading-relaxed">
                    In this lesson, Shaykh Muhammad explains the different
                    categories of water (Tahur, Tahir, Najis) and their validity
                    for Wudu.
                  </p>
<div className="mt-6 border-b border-zinc-200">
<div className="flex gap-6 text-sm font-medium">
<button className="pb-3 border-b-2 border-[#0E5E41] text-[#0E5E41]">
                        Notes
                      </button>
<button className="pb-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-900">
                        Resources
                      </button>
<button className="pb-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-900">
                        Q&amp;A
                      </button>
</div>
</div>
<div className="py-4 text-sm text-zinc-600 space-y-2">
<p>
                      • Water is divided into three categories in the Maliki
                      Madhhab.
                    </p>
<p>• Only Tahur water can lift Hadath (ritual impurity).</p>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl flex flex-col h-[600px]">
<div className="p-4 border-b border-zinc-100">
<h3 className="font-semibold text-zinc-900">Course Content</h3>
<div className="flex items-center justify-between mt-2 text-xs text-zinc-500">
<span>12 Lessons</span>
<span>25% Complete</span>
</div>
<div className="w-full bg-zinc-100 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-[#0E5E41] h-full rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 text-left opacity-60">
<i className="w-4 h-4 text-[#0E5E41] shrink-0" data-lucide="check-circle"></i>
<div>
<div className="text-sm font-medium text-zinc-900 line-through decoration-zinc-400">
                        Introduction to Purification
                      </div>
<div className="text-xs text-zinc-500">10:00</div>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 text-left opacity-60">
<i className="w-4 h-4 text-[#0E5E41] shrink-0" data-lucide="check-circle"></i>
<div>
<div className="text-sm font-medium text-zinc-900 line-through decoration-zinc-400">
                        Importance of Niyyah
                      </div>
<div className="text-xs text-zinc-500">15:30</div>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0E5E41]/5 border border-[#0E5E41]/10 text-left">
<i className="w-4 h-4 text-[#0E5E41] shrink-0" data-lucide="play-circle"></i>
<div>
<div className="text-sm font-semibold text-[#0E5E41]">
                        Types of Water
                      </div>
<div className="text-xs text-[#0E5E41]/70">45:00</div>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 text-left group">
<i className="w-4 h-4 text-zinc-400 shrink-0 group-hover:text-zinc-600" data-lucide="lock"></i>
<div>
<div className="text-sm font-medium text-zinc-900">
                        Water Impurities
                      </div>
<div className="text-xs text-zinc-500">20:00</div>
</div>
</button>
</div>
</div>
</div>
</div>


<div className="app-view hidden max-w-4xl mx-auto space-y-6" id="learning-path">
<h1 className="text-2xl font-semibold text-zinc-900">
              Your Learning Journey
            </h1>
<div className="p-6 rounded-xl bg-gradient-to-r from-[#0E5E41] to-[#0b4a33] text-white">
<h2 className="text-lg font-semibold">Today's Goals</h2>
<p className="text-white/80 text-sm mt-1">
                Complete 2 lessons to maintain your 7-day streak.
              </p>
<div className="mt-4 flex gap-3">
<button className="px-4 py-2 bg-white text-[#0E5E41] rounded-lg text-sm font-semibold" onclick="setView('course-detail')">
                  Resume Fiqh
                </button>
<button className="px-4 py-2 bg-[#ffffff]/10 text-white rounded-lg text-sm font-medium hover:bg-[#ffffff]/20">
                  View Schedule
                </button>
</div>
</div>
<h3 className="font-semibold text-zinc-900">Up Next</h3>
<div className="space-y-3">
<div className="p-4 border border-zinc-200 rounded-xl flex gap-4 items-center bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div className="flex-1">
<h4 className="font-medium text-zinc-900">
                    Introduction to Hadith Sciences
                  </h4>
<p className="text-xs text-zinc-500">Module 1 • 45m</p>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="lock"></i>
</div>
</div>
</div>

<div className="app-view hidden space-y-6 max-w-6xl mx-auto" id="teacher-dashboard">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-semibold text-zinc-900">
                Instructor Dashboard
              </h1>
<button className="bg-[#0E5E41] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#0b4a33]">
<i className="w-4 h-4" data-lucide="plus"></i>
                Create Course
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500">
                  Total Students
                </span>
<div className="text-2xl font-semibold text-zinc-900 mt-1">450</div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500">
                  Course Rating
                </span>
<div className="text-2xl font-semibold text-zinc-900 mt-1">
                  4.8/5.0
                </div>
</div>
<div className="p-5 rounded-xl border border-zinc-200 bg-white">
<span className="text-xs font-medium text-zinc-500">
                  Pending Questions
                </span>
<div className="text-2xl font-semibold text-zinc-900 mt-1">12</div>
</div>
</div>
<h2 className="text-lg font-semibold text-zinc-900">My Courses</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
<div className="h-32 bg-zinc-100 flex items-center justify-center">
<i className="w-8 h-8 text-zinc-300" data-lucide="book"></i>
</div>
<div className="p-4">
<h3 className="font-medium text-zinc-900">Fiqh of Fasting</h3>
<div className="flex items-center justify-between mt-4 text-xs text-zinc-500">
<span>240 Students</span>
<button className="text-[#0E5E41] font-medium">Manage</button>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-6xl mx-auto space-y-6" id="courses">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h1 className="text-2xl font-semibold text-zinc-900">
                Browse Courses
              </h1>
<div className="flex gap-2">
<input className="px-3 py-2 border border-zinc-200 rounded-lg text-sm w-full md:w-64 focus:border-[#0E5E41] focus:outline-none" placeholder="Search..." type="text"/>
<select className="px-3 py-2 border border-zinc-200 rounded-lg text-sm bg-white focus:border-[#0E5E41] focus:outline-none">
<option>All Categories</option>
<option>Fiqh</option>
<option>Aqeedah</option>
<option>Seerah</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md cursor-pointer transition-all" onclick="setView('course-detail')">
<div className="h-40 bg-zinc-100 flex items-center justify-center text-zinc-300 relative">
<i className="w-10 h-10" data-lucide="image"></i>
<div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-medium">
                    12 Lessons
                  </div>
</div>
<div className="p-4">
<span className="text-[10px] font-bold text-[#0E5E41] bg-[#0E5E41]/5 px-2 py-0.5 rounded tracking-wider">
                    FIQH
                  </span>
<h3 className="font-semibold text-zinc-900 mt-2 group-hover:text-[#0E5E41] transition-colors">
                    Purification (Taharah)
                  </h3>
<p className="text-xs text-zinc-500 mt-1">
                    Sh. Muhammad Al-Ghazali
                  </p>
<div className="mt-4 flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3 text-[#D6A561] fill-current" data-lucide="star"></i>
                    4.9 (120 reviews)
                  </div>
</div>
</div>
<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md cursor-pointer transition-all">
<div className="h-40 bg-zinc-100 flex items-center justify-center text-zinc-300 relative">
<i className="w-10 h-10" data-lucide="image"></i>
</div>
<div className="p-4">
<span className="text-[10px] font-bold text-[#D6A561] bg-[#D6A561]/10 px-2 py-0.5 rounded tracking-wider">
                    SEERAH
                  </span>
<h3 className="font-semibold text-zinc-900 mt-2 group-hover:text-[#0E5E41] transition-colors">
                    The Makkan Period
                  </h3>
<p className="text-xs text-zinc-500 mt-1">Ust. Aminah Yusuf</p>
<div className="mt-4 flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3 text-[#D6A561] fill-current" data-lucide="star"></i>
                    5.0 (85 reviews)
                  </div>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-4xl mx-auto space-y-6" id="live-classes">
<h1 className="text-2xl font-semibold text-zinc-900">Live Sessions</h1>
<div className="bg-[#0E5E41] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-[#0E5E41]/20">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wider">
                    Live Now
                  </span>
</div>
<h2 className="text-xl font-semibold">
                  Q&amp;A: Contemporary Issues
                </h2>
<p className="text-white/80 text-sm mt-1">with Sh. Abdullah</p>
</div>
<button className="px-6 py-2 bg-white text-[#0E5E41] rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors">
                Join Class
              </button>
</div>
<div className="space-y-4">
<h3 className="font-medium text-zinc-900">Upcoming</h3>
<div className="flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-xl">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex flex-col items-center justify-center text-zinc-500 font-bold leading-none border border-zinc-100">
<span>24</span>
<span className="text-[10px]">OCT</span>
</div>
<div className="flex-1">
<h4 className="font-medium text-zinc-900">
                    Tafseer Surah Al-Kahf
                  </h4>
<p className="text-xs text-zinc-500">5:00 PM EST • Ust. Aminah</p>
</div>
<button className="p-2 hover:bg-zinc-50 rounded-full text-zinc-400 hover:text-zinc-600">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</div>
</div>

<div className="app-view hidden max-w-5xl mx-auto space-y-8" id="blog">
<div className="text-center max-w-2xl mx-auto pt-4">
<h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">
                Madrasah Insights
              </h1>
<p className="text-zinc-500 mt-2">
                Articles on knowledge, spirituality, and community news.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="rounded-xl overflow-hidden border border-zinc-200 group cursor-pointer">
<div className="h-48 bg-zinc-100 relative group-hover:scale-105 transition-transform duration-500"></div>
<div className="p-6 relative bg-white">
<div className="text-xs text-[#0E5E41] font-bold uppercase tracking-wider mb-2">
                    Spiritual Growth
                  </div>
<h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-[#0E5E41] transition-colors">
                    The Etiquette of Seeking Knowledge
                  </h2>
<p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                    Understanding the adab required before embarking on the
                    journey of 'ilm is crucial for every student.
                  </p>
<span className="text-sm font-medium text-[#0E5E41] flex items-center gap-1">
                    Read Article
                    <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-zinc-200 group cursor-pointer">
<div className="h-48 bg-zinc-100 relative group-hover:scale-105 transition-transform duration-500"></div>
<div className="p-6 relative bg-white">
<div className="text-xs text-[#D6A561] font-bold uppercase tracking-wider mb-2">
                    Community
                  </div>
<h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-[#0E5E41] transition-colors">
                    Reflections on Winter
                  </h2>
<p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                    How believers can take advantage of the short days and long
                    nights for worship and reflection.
                  </p>
<span className="text-sm font-medium text-[#0E5E41] flex items-center gap-1">
                    Read Article
                    <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-2xl mx-auto space-y-6" id="settings">
<h1 className="text-2xl font-semibold text-zinc-900">Settings</h1>
<div className="flex gap-4 border-b border-zinc-200 text-sm font-medium text-zinc-500">
<button className="pb-3 border-b-2 border-[#0E5E41] text-[#0E5E41]">
                Profile
              </button>
<button className="pb-3 hover:text-zinc-800 transition-colors">
                Notifications
              </button>
<button className="pb-3 hover:text-zinc-800 transition-colors">
                Privacy
              </button>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
<div className="p-6 border-b border-zinc-100">
<h2 className="font-medium text-zinc-900">Profile Information</h2>
<div className="mt-4 flex items-center gap-4">
<div className="w-16 h-16 bg-[#0E5E41]/10 rounded-full flex items-center justify-center text-[#0E5E41] text-xl font-bold">
                    AH
                  </div>
<button className="text-xs border border-zinc-200 px-3 py-2 rounded-lg hover:bg-zinc-50 font-medium">
                    Change Photo
                  </button>
</div>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
                    Full Name
                  </label>
<input className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:border-[#0E5E41] focus:outline-none" type="text" value="Ahmed Student"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">
                    Email
                  </label>
<input className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:border-[#0E5E41] focus:outline-none" type="email" value="ahmed@example.com"/>
</div>
<div className="pt-2">
<button className="bg-[#0E5E41] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0b4a33]">
                    Save Changes
                  </button>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-6xl mx-auto" id="teacher-courses">
<h1 className="text-2xl font-semibold text-zinc-900 mb-4">
              Course Management
            </h1>
<div className="p-12 text-center border border-dashed border-zinc-300 rounded-xl text-zinc-400">
              Course Editor &amp; Content Uploader Placeholder
            </div>
</div>
<div className="app-view hidden max-w-6xl mx-auto" id="teacher-students">
<h1 className="text-2xl font-semibold text-zinc-900 mb-4">
              Enrolled Students
            </h1>
<div className="p-12 text-center border border-dashed border-zinc-300 rounded-xl text-zinc-400">
              Student Grading &amp; Progress List Placeholder
            </div>
</div>
<div className="app-view hidden max-w-6xl mx-auto" id="admin-teachers">
<h1 className="text-2xl font-semibold text-zinc-900 mb-4">
              Teacher Management
            </h1>
<div className="p-12 text-center border border-dashed border-zinc-300 rounded-xl text-zinc-400">
              Teacher CRUD Table Placeholder
            </div>
</div>
<div className="app-view hidden max-w-6xl mx-auto" id="admin-courses">
<h1 className="text-2xl font-semibold text-zinc-900 mb-4">
              Course Registry
            </h1>
<div className="p-12 text-center border border-dashed border-zinc-300 rounded-xl text-zinc-400">
              Course Approval &amp; List Placeholder
            </div>
</div>
<div className="app-view hidden max-w-6xl mx-auto" id="admin-students">
<h1 className="text-2xl font-semibold text-zinc-900 mb-4">
              Student Database
            </h1>
<div className="p-12 text-center border border-dashed border-zinc-300 rounded-xl text-zinc-400">
              Student Management Table Placeholder
            </div>
</div>
<div className="app-view hidden max-w-2xl mx-auto" id="notifications">
<h1 className="text-2xl font-semibold text-zinc-900 mb-6">
              Notifications
            </h1>
<div className="space-y-3">
<div className="p-4 bg-white border border-zinc-200 rounded-xl flex gap-4">
<div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
<div>
<p className="text-sm font-medium text-zinc-900">
                    Welcome to Daarul-Hijrah!
                  </p>
<p className="text-xs text-zinc-500 mt-1">
                    Start your journey by setting up your learning path.
                  </p>
<span className="text-[10px] text-zinc-400 mt-2 block">
                    2 mins ago
                  </span>
</div>
</div>
<div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl flex gap-4 opacity-75">
<div className="w-2 h-2 rounded-full bg-transparent mt-2"></div>
<div>
<p className="text-sm font-medium text-zinc-900">System Update</p>
<p className="text-xs text-zinc-500 mt-1">
                    We have improved the video player performance.
                  </p>
<span className="text-[10px] text-zinc-400 mt-2 block">
                    1 day ago
                  </span>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-zinc-200 h-16 flex justify-around items-center px-2 z-50" id="mobile-nav">
<button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-[#0E5E41] focus:text-[#0E5E41]" onclick="setView('student-dashboard')">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-[#0E5E41] focus:text-[#0E5E41]" onclick="setView('courses')">
<i className="w-5 h-5" data-lucide="book-open"></i>
<span className="text-[10px] font-medium">Courses</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-[#0E5E41] focus:text-[#0E5E41]" onclick="setView('learning-path')">
<i className="w-5 h-5" data-lucide="map"></i>
<span className="text-[10px] font-medium">Path</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-[#0E5E41] focus:text-[#0E5E41]" onclick="setView('live-classes')">
<i className="w-5 h-5" data-lucide="video"></i>
<span className="text-[10px] font-medium">Live</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-[#0E5E41] focus:text-[#0E5E41]" onclick="setView('settings')">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>


    </>
  );
}
