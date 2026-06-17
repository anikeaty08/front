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



        // ============ DATA ============
        const universityData = [
            { name: "Massachusetts Institute of Technology", country: "USA", courses: ["Computer Science", "Engineering", "Data Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 1, tuition: "$57,590", scholarship: true, flag: "🇺🇸", acceptance: "4%", type: "Research University" },
            // ... (Previous data preserved, adding logic handled in init) ...
            { name: "Stanford University", country: "USA", courses: ["Computer Science", "MBA", "Engineering", "Data Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 3, tuition: "$56,169", scholarship: true, flag: "🇺🇸", acceptance: "4%", type: "Research University" },
            { name: "Harvard University", country: "USA", courses: ["MBA", "Law", "Medicine", "Computer Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 4, tuition: "$54,768", scholarship: true, flag: "🇺🇸", acceptance: "3%", type: "Research University" },
            { name: "University of California, Berkeley", country: "USA", courses: ["Computer Science", "Engineering", "Data Science", "Biotechnology"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 10, tuition: "$44,066", scholarship: true, flag: "🇺🇸", acceptance: "12%", type: "Public University" },
            { name: "Carnegie Mellon University", country: "USA", courses: ["Computer Science", "Engineering", "Data Science", "Arts & Design"], intakes: ["Fall 2024", "Fall 2025"], ranking: 22, tuition: "$58,924", scholarship: true, flag: "🇺🇸", acceptance: "11%", type: "Research University" },
            { name: "University of Michigan", country: "USA", courses: ["Engineering", "MBA", "Computer Science", "Medicine"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 21, tuition: "$52,266", scholarship: true, flag: "🇺🇸", acceptance: "18%", type: "Public University" },
            { name: "Columbia University", country: "USA", courses: ["MBA", "Law", "Data Science", "Computer Science"], intakes: ["Fall 2024", "Spring 2025"], ranking: 12, tuition: "$63,530", scholarship: true, flag: "🇺🇸", acceptance: "4%", type: "Ivy League" },
            { name: "University of Oxford", country: "UK", courses: ["Computer Science", "Law", "Medicine", "MBA"], intakes: ["Fall 2024", "Fall 2025"], ranking: 1, tuition: "£33,050", scholarship: true, flag: "🇬🇧", acceptance: "13%", type: "Research University" },
            { name: "University of Cambridge", country: "UK", courses: ["Engineering", "Computer Science", "Medicine", "Biotechnology"], intakes: ["Fall 2024", "Fall 2025"], ranking: 2, tuition: "£35,517", scholarship: true, flag: "🇬🇧", acceptance: "18%", type: "Research University" },
            { name: "Imperial College London", country: "UK", courses: ["Engineering", "Computer Science", "Medicine", "Data Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 6, tuition: "£35,100", scholarship: true, flag: "🇬🇧", acceptance: "12%", type: "Research University" },
            { name: "University College London", country: "UK", courses: ["Computer Science", "Law", "Arts & Design", "Engineering"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 9, tuition: "£28,500", scholarship: true, flag: "🇬🇧", acceptance: "16%", type: "Research University" },
            { name: "London School of Economics", country: "UK", courses: ["MBA", "Law", "Data Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 15, tuition: "£26,568", scholarship: true, flag: "🇬🇧", acceptance: "8%", type: "Research University" },
            { name: "University of Edinburgh", country: "UK", courses: ["Computer Science", "Engineering", "Medicine", "Arts & Design"], intakes: ["Fall 2024", "Spring 2025"], ranking: 22, tuition: "£25,300", scholarship: true, flag: "🇬🇧", acceptance: "22%", type: "Research University" },
            { name: "University of Toronto", country: "Canada", courses: ["Computer Science", "Engineering", "MBA", "Medicine"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 18, tuition: "C$58,680", scholarship: true, flag: "🇨🇦", acceptance: "43%", type: "Research University" },
            { name: "University of British Columbia", country: "Canada", courses: ["Engineering", "Computer Science", "Data Science", "Biotechnology"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 34, tuition: "C$42,803", scholarship: true, flag: "🇨🇦", acceptance: "46%", type: "Research University" },
            { name: "McGill University", country: "Canada", courses: ["Medicine", "Engineering", "Computer Science", "Law"], intakes: ["Fall 2024", "Fall 2025"], ranking: 27, tuition: "C$49,995", scholarship: true, flag: "🇨🇦", acceptance: "38%", type: "Research University" },
            { name: "University of Waterloo", country: "Canada", courses: ["Computer Science", "Engineering", "Data Science"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025", "Rolling Admissions"], ranking: 112, tuition: "C$43,500", scholarship: true, flag: "🇨🇦", acceptance: "53%", type: "Research University" },
            { name: "University of Alberta", country: "Canada", courses: ["Engineering", "Computer Science", "Biotechnology", "Medicine"], intakes: ["Fall 2024", "Spring 2025"], ranking: 81, tuition: "C$33,968", scholarship: true, flag: "🇨🇦", acceptance: "58%", type: "Public University" },
            { name: "University of Melbourne", country: "Australia", courses: ["Computer Science", "MBA", "Engineering", "Medicine"], intakes: ["Fall 2024", "Spring 2025", "Rolling Admissions"], ranking: 13, tuition: "A$48,000", scholarship: true, flag: "🇦🇺", acceptance: "52%", type: "Research University" },
            { name: "University of Sydney", country: "Australia", courses: ["Engineering", "MBA", "Law", "Arts & Design"], intakes: ["Fall 2024", "Spring 2025", "Rolling Admissions"], ranking: 18, tuition: "A$46,000", scholarship: true, flag: "🇦🇺", acceptance: "48%", type: "Research University" },
            { name: "Australian National University", country: "Australia", courses: ["Computer Science", "Engineering", "Data Science", "Law"], intakes: ["Fall 2024", "Spring 2025"], ranking: 30, tuition: "A$47,880", scholarship: true, flag: "🇦🇺", acceptance: "35%", type: "Research University" },
            { name: "UNSW Sydney", country: "Australia", courses: ["Engineering", "Computer Science", "MBA", "Data Science"], intakes: ["Fall 2024", "Spring 2025", "Rolling Admissions"], ranking: 19, tuition: "A$45,780", scholarship: true, flag: "🇦🇺", acceptance: "55%", type: "Research University" },
            { name: "Technical University of Munich", country: "Germany", courses: ["Engineering", "Computer Science", "Data Science", "Biotechnology"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 37, tuition: "€146/sem", scholarship: true, flag: "🇩🇪", acceptance: "38%", type: "Technical University" },
            { name: "LMU Munich", country: "Germany", courses: ["Medicine", "Law", "Computer Science", "Engineering"], intakes: ["Fall 2024", "Fall 2025"], ranking: 38, tuition: "€146/sem", scholarship: true, flag: "🇩🇪", acceptance: "35%", type: "Research University" },
            { name: "RWTH Aachen University", country: "Germany", courses: ["Engineering", "Computer Science", "Data Science"], intakes: ["Fall 2024", "Spring 2025"], ranking: 87, tuition: "€300/sem", scholarship: true, flag: "🇩🇪", acceptance: "42%", type: "Technical University" },
            { name: "Heidelberg University", country: "Germany", courses: ["Medicine", "Biotechnology", "Law", "Computer Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 42, tuition: "€1,500/sem", scholarship: true, flag: "🇩🇪", acceptance: "40%", type: "Research University" },
            { name: "Sciences Po Paris", country: "France", courses: ["Law", "MBA", "Arts & Design"], intakes: ["Fall 2024", "Spring 2025"], ranking: 45, tuition: "€14,500", scholarship: true, flag: "🇫🇷", acceptance: "15%", type: "Grand École" },
            { name: "ETH Zurich", country: "Netherlands", courses: ["Computer Science", "Engineering", "Data Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 7, tuition: "CHF 730/sem", scholarship: true, flag: "🇨🇭", acceptance: "27%", type: "Technical University" },
            { name: "Trinity College Dublin", country: "Ireland", courses: ["Computer Science", "Engineering", "Law", "Medicine"], intakes: ["Fall 2024", "Spring 2025"], ranking: 81, tuition: "€22,000", scholarship: true, flag: "🇮🇪", acceptance: "38%", type: "Research University" },
            { name: "University of Auckland", country: "New Zealand", courses: ["Engineering", "Computer Science", "Medicine", "MBA"], intakes: ["Fall 2024", "Spring 2025", "Rolling Admissions"], ranking: 68, tuition: "NZ$37,886", scholarship: true, flag: "🇳🇿", acceptance: "55%", type: "Research University" },
            { name: "National University of Singapore", country: "Singapore", courses: ["Computer Science", "Engineering", "MBA", "Data Science"], intakes: ["Fall 2024", "Spring 2025"], ranking: 8, tuition: "S$38,600", scholarship: true, flag: "🇸🇬", acceptance: "6%", type: "Research University" },
            { name: "Georgia Institute of Technology", country: "USA", courses: ["Computer Science", "Engineering", "Data Science"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 33, tuition: "$33,794", scholarship: true, flag: "🇺🇸", acceptance: "17%", type: "Technical Institute" },
            { name: "University of Pennsylvania", country: "USA", courses: ["MBA", "Medicine", "Law", "Computer Science"], intakes: ["Fall 2024", "Fall 2025"], ranking: 6, tuition: "$61,710", scholarship: true, flag: "🇺🇸", acceptance: "6%", type: "Ivy League" },
            { name: "University of Manchester", country: "UK", courses: ["Computer Science", "Engineering", "MBA", "Biotechnology"], intakes: ["Fall 2024", "Spring 2025", "Fall 2025"], ranking: 32, tuition: "£27,000", scholarship: true, flag: "🇬🇧", acceptance: "33%", type: "Research University" },
            { name: "King's College London", country: "UK", courses: ["Law", "Medicine", "Computer Science", "Arts & Design"], intakes: ["Fall 2024", "Fall 2025"], ranking: 40, tuition: "£25,050", scholarship: true, flag: "🇬🇧", acceptance: "14%", type: "Research University" },
            { name: "Monash University", country: "Australia", courses: ["Engineering", "Medicine", "MBA", "Data Science"], intakes: ["Fall 2024", "Spring 2025", "Rolling Admissions"], ranking: 42, tuition: "A$44,500", scholarship: true, flag: "🇦🇺", acceptance: "60%", type: "Research University" },
        ];

        const testimonials = [
            { name: "Priya Sharma", university: "University of Toronto", country: "Canada", course: "Computer Science", quote: "Abroad Key made my dream of studying in Canada a reality. The AI matching tool recommended Toronto perfectly for my profile. The entire process was seamless!", avatar: "PS", rating: 5 },
            { name: "Rahul Patel", university: "Imperial College London", country: "UK", course: "Engineering", quote: "The counselors at Abroad Key were incredibly supportive. From shortlisting universities to visa guidance, they handled everything. I'm now pursuing my Masters at Imperial!", avatar: "RP", rating: 5 },
            { name: "Ananya Desai", university: "University of Melbourne", country: "Australia", course: "MBA", quote: "I was confused between multiple countries and programs. The Find My Best Fit tool narrowed it down perfectly. The scholarship guidance saved me thousands of dollars.", avatar: "AD", rating: 5 },
            { name: "Vikram Singh", university: "TU Munich", country: "Germany", course: "Data Science", quote: "Studying in Germany was always my dream but the process seemed complicated. Abroad Key simplified everything — from admission to visa to accommodation. Highly recommend!", avatar: "VS", rating: 5 },
            { name: "Sneha Reddy", university: "Stanford University", country: "USA", course: "Computer Science", quote: "I never thought I'd get into Stanford. Abroad Key's team helped me craft a perfect application, SOP, and prepared me for everything. Forever grateful!", avatar: "SR", rating: 5 },
            { name: "Amit Kumar", university: "University of Sydney", country: "Australia", course: "Engineering", quote: "The document management portal made uploading and tracking so easy. Real-time status updates kept me informed throughout. The entire experience was stress-free.", avatar: "AK", rating: 5 },
            { name: "Meera Nair", university: "McGill University", country: "Canada", course: "Medicine", quote: "As a medical student, finding the right program was crucial. The detailed university profiles and filtered search helped me find exactly what I needed.", avatar: "MN", rating: 5 },
            { name: "Karthik Iyer", university: "University of Oxford", country: "UK", course: "Law", quote: "Oxford seemed like an impossible dream. The Abroad Key team believed in me, guided my application, and now I'm reading Law at one of the world's best universities!", avatar: "KI", rating: 5 },
            { name: "Divya Menon", university: "NUS Singapore", country: "Singapore", course: "MBA", quote: "The speed and efficiency of Abroad Key's service is unmatched. My counselor was available 24/7 and the AI recommendations were spot-on. Best consultancy ever!", avatar: "DM", rating: 5 },
        ];

        const documentTypes = [
            { name: "Passport", icon: "id-card", required: true },
            { name: "Academic Transcripts", icon: "file-text", required: true },
            { name: "Statement of Purpose (SOP)", icon: "pen-tool", required: true },
            { name: "Letter of Recommendation (LOR)", icon: "mail", required: true },
            { name: "English Test Score", icon: "award", required: true },
            { name: "Resume / CV", icon: "briefcase", required: false },
            { name: "Financial Documents", icon: "banknote", required: false },
            { name: "Other Documents", icon: "paperclip", required: false },
        ];

        // ============ STATE ============
        let currentPage = 'home';
        let currentUser = null;
        let userDocuments = {};
        let userApplications = [];
        let displayedUnis = 12;
        let currentDashTab = 'overview';

        // ============ INIT ============
        function init() {
            const saved = localStorage.getItem('abroadkey_user');
            if (saved) {
                currentUser = JSON.parse(saved);
                updateAuthUI();
            }
            loadDocuments();
            loadApplications();
            renderTestimonialSlider();
            renderTestimonialsPage();
            renderDocumentList();
            navigateTo('home');
            lucide.createIcons();
        }

        // ============ NAVIGATION ============
        function navigateTo(page) {
            document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
            const target = document.getElementById('page-' + page);
            if (target) {
                target.classList.remove('hidden');
                currentPage = page;
            }

            if (page === 'dashboard' && !currentUser) {
                navigateTo('login');
                return;
            }

            if (page === 'dashboard') {
                updateDashboard();
                switchDashTab('overview');
            }

            if (page === 'universities') {
                displayedUnis = 12;
                filterUniversities();
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
            updateNavScroll();
            lucide.createIcons();
        }

        // ============ NAVBAR SCROLL ============
        function updateNavScroll() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 10 || currentPage !== 'home') {
                nav.classList.add('glass', 'border-b', 'border-gray-200', 'shadow-sm');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('glass', 'border-b', 'border-gray-200', 'shadow-sm');
            }
        }
        window.addEventListener('scroll', updateNavScroll);

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // ============ AUTH & LOGIC FUNCTIONS ============
        // (Reused from original code with minor adjustments for brevity where logic is identical)
        function updateAuthUI() {
            const authBtns = document.getElementById('nav-auth-buttons');
            const userInfo = document.getElementById('nav-user-info');
            const mobileAuth = document.getElementById('mobile-auth');
            const mobileUser = document.getElementById('mobile-user-info');

            if (currentUser) {
                authBtns.classList.add('hidden');
                userInfo.classList.remove('hidden');
                userInfo.classList.add('flex');
                document.getElementById('nav-student-id').textContent = currentUser.studentId;
                mobileAuth.classList.add('hidden');
                mobileUser.classList.remove('hidden');
            } else {
                authBtns.classList.remove('hidden');
                userInfo.classList.add('hidden');
                userInfo.classList.remove('flex');
                mobileAuth.classList.remove('hidden');
                mobileUser.classList.add('hidden');
            }
            lucide.createIcons();
        }

        function generateStudentId() {
            const year = new Date().getFullYear();
            const random = Math.floor(10000 + Math.random() * 90000);
            return `AK${year}${random}`;
        }

        function sendOTP() {
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const pass = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;

            if (!name || !email || !phone || !pass) { showToast('error', 'Missing Fields', 'Please fill in all required fields.'); return; }
            if (pass !== confirm) { showToast('error', 'Password Mismatch', 'Passwords do not match.'); return; }

            document.getElementById('register-step-1').classList.add('hidden');
            document.getElementById('register-step-2').classList.remove('hidden');
            showToast('success', 'OTP Sent', 'Verification codes sent.');
            lucide.createIcons();
        }

        function resendOTP() { showToast('success', 'OTP Resent', 'New verification codes sent.'); }

        function verifyAndRegister() {
            const emailOtp = document.getElementById('email-otp').value.trim();
            if (!emailOtp) { showToast('error', 'Enter OTP', 'Please enter OTP.'); return; }

            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const pass = document.getElementById('reg-password').value;
            const studentId = generateStudentId();

            const user = { name, email, phone: '+91 ' + phone, password: pass, studentId, createdAt: new Date().toISOString(), profile: {} };
            const users = JSON.parse(localStorage.getItem('abroadkey_users') || '[]');
            users.push(user);
            localStorage.setItem('abroadkey_users', JSON.stringify(users));

            currentUser = user;
            localStorage.setItem('abroadkey_user', JSON.stringify(user));

            document.getElementById('register-step-2').classList.add('hidden');
            document.getElementById('register-step-3').classList.remove('hidden');
            document.getElementById('generated-student-id').textContent = studentId;

            updateAuthUI();
            showToast('success', 'Welcome!', 'Account created with ID: ' + studentId);
            lucide.createIcons();
        }

        function loginUser() {
            const emailInput = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value;
            const errorEl = document.getElementById('login-error');

            const users = JSON.parse(localStorage.getItem('abroadkey_users') || '[]');
            const user = users.find(u => (u.email === emailInput || u.phone === emailInput) && u.password === pass);

            if (!user) { errorEl.textContent = 'Invalid credentials.'; errorEl.classList.remove('hidden'); return; }

            errorEl.classList.add('hidden');
            currentUser = user;
            localStorage.setItem('abroadkey_user', JSON.stringify(user));
            updateAuthUI();
            showToast('success', 'Welcome back!', 'Logged in as ' + user.name);
            navigateTo('dashboard');
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem('abroadkey_user');
            updateAuthUI();
            showToast('info', 'Logged out', 'You have been logged out.');
            navigateTo('home');
        }

        // ============ DASHBOARD LOGIC ============
        function updateDashboard() {
            if (!currentUser) return;
            document.getElementById('dash-name').textContent = currentUser.name;
            document.getElementById('dash-student-id').textContent = currentUser.studentId;
            const docs = Object.keys(userDocuments).length;
            const apps = userApplications.length;
            document.getElementById('stat-docs').textContent = docs;
            document.getElementById('stat-apps').textContent = apps;
            document.getElementById('stat-short').textContent = Math.min(apps * 2, 10);
            
            document.getElementById('profile-name').value = currentUser.name;
            document.getElementById('profile-email').value = currentUser.email;
            
            renderApplications();
            renderDocumentList();
        }

        function switchDashTab(tab) {
            document.querySelectorAll('.dash-content').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.dash-tab').forEach(el => { el.classList.remove('bg-white', 'text-gray-900', 'shadow-sm'); el.classList.add('text-gray-500'); });
            document.getElementById('dash-' + tab).classList.remove('hidden');
            const tabBtn = document.getElementById('tab-' + tab);
            tabBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm'); tabBtn.classList.remove('text-gray-500');
            currentDashTab = tab;
            lucide.createIcons();
        }

        function saveProfile() {
            if (!currentUser) return;
            currentUser.name = document.getElementById('profile-name').value;
            localStorage.setItem('abroadkey_user', JSON.stringify(currentUser));
            showToast('success', 'Profile Saved', 'Profile updated.');
        }

        // ============ DOCUMENTS & APPS ============
        function loadDocuments() { const saved = localStorage.getItem('abroadkey_docs'); if (saved) userDocuments = JSON.parse(saved); }
        function saveDocuments() { localStorage.setItem('abroadkey_docs', JSON.stringify(userDocuments)); }
        function renderDocumentList() {
            const list = document.getElementById('document-list');
            if (!list) return;
            list.innerHTML = documentTypes.map(doc => {
                const uploaded = userDocuments[doc.name];
                const statusClass = uploaded ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-400';
                return `<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"><div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0"><i data-lucide="${doc.icon}" class="w-5 h-5 text-gray-400"></i></div><div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-900">${doc.name}</p><p class="text-xs text-gray-400">${uploaded ? uploaded.fileName : 'No file'}</p></div><span class="text-xs font-medium px-2.5 py-1 rounded-full ${statusClass}">${uploaded ? 'Uploaded' : 'Pending'}</span></div>`;
            }).join('');
            lucide.createIcons();
        }
        function handleDragOver(e) { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }
        function handleDragLeave(e) { e.currentTarget.classList.remove('drag-over'); }
        function handleDrop(e) { e.preventDefault(); e.currentTarget.classList.remove('drag-over'); processFiles(e.dataTransfer.files); }
        function handleFileSelect(e) { processFiles(e.target.files); }
        function processFiles(files) {
            for (let file of files) {
                let docType = 'Other Documents';
                const fname = file.name.toLowerCase();
                if (fname.includes('passport')) docType = 'Passport';
                userDocuments[docType] = { fileName: file.name, status: 'Uploaded' };
            }
            saveDocuments(); renderDocumentList(); updateDashboard(); showToast('success', 'Uploaded', `${files.length} file(s) added.`);
        }

        function loadApplications() { const saved = localStorage.getItem('abroadkey_apps'); if (saved) userApplications = JSON.parse(saved); }
        function saveApplications() { localStorage.setItem('abroadkey_apps', JSON.stringify(userApplications)); }
        function addApplication(uni) {
            if (!currentUser) { showToast('error', 'Login Required', 'Please login.'); navigateTo('login'); return; }
            if (userApplications.find(a => a.name === uni.name)) return;
            userApplications.push({ name: uni.name, country: uni.country, status: 'Processing', flag: uni.flag });
            saveApplications(); showToast('success', 'Applied', 'Applied to ' + uni.name); updateDashboard();
        }
        function renderApplications() {
            const list = document.getElementById('applications-list');
            const noApps = document.getElementById('no-applications');
            if (userApplications.length === 0) { list.classList.add('hidden'); noApps.classList.remove('hidden'); return; }
            list.classList.remove('hidden'); noApps.classList.add('hidden');
            list.innerHTML = userApplications.map((app, i) => `<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"><div class="text-2xl">${app.flag}</div><div class="flex-1"><p class="text-sm font-medium text-gray-900">${app.name}</p></div><span class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Processing</span></div>`).join('');
        }

        // ============ UNIVERSITY FILTERING ============
        let filteredUnis = [...universityData];
        function filterUniversities() {
            const search = (document.getElementById('uni-search')?.value || '').toLowerCase();
            const country = document.getElementById('uni-country')?.value || '';
            const course = document.getElementById('uni-course')?.value || '';
            
            filteredUnis = universityData.filter(uni => {
                const matchSearch = !search || uni.name.toLowerCase().includes(search) || uni.country.toLowerCase().includes(search);
                const matchCountry = !country || uni.country === country;
                const matchCourse = !course || uni.courses.includes(course);
                return matchSearch && matchCountry && matchCourse;
            });
            filteredUnis.sort((a, b) => a.ranking - b.ranking);
            displayedUnis = 12;
            renderUniversities();
        }

        function renderUniversities() {
            const grid = document.getElementById('university-grid');
            const loadMore = document.getElementById('load-more-wrap');
            const toShow = filteredUnis.slice(0, displayedUnis);
            
            grid.innerHTML = toShow.map((uni, i) => `
                <div class="card-hover bg-white rounded-2xl border border-gray-200 p-5 animate-fade-in" style="animation-delay:${i * 0.03}s">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center gap-2"><span class="text-xl">${uni.flag}</span><span class="text-xs font-medium text-gray-400">${uni.country}</span></div>
                        <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">#${uni.ranking}</span>
                    </div>
                    <h3 class="text-sm font-semibold text-gray-900 leading-snug mb-2">${uni.name}</h3>
                    <div class="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div class="bg-gray-50 rounded-lg p-2"><span class="text-gray-400 block">Tuition</span><span class="font-medium text-gray-700">${uni.tuition}</span></div>
                        <div class="bg-gray-50 rounded-lg p-2"><span class="text-gray-400 block">Acceptance</span><span class="font-medium text-gray-700">${uni.acceptance}</span></div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick='addApplication(${JSON.stringify(uni).replace(/'/g, "\\'")})' class="flex-1 bg-gray-900 text-white font-medium text-xs py-2 rounded-lg hover:bg-gray-800 transition-colors">Apply</button>
                        <button onclick="showToast('info', '${uni.name}', 'Details view')" class="flex-1 border border-gray-200 text-gray-700 font-medium text-xs py-2 rounded-lg hover:bg-gray-50 transition-colors">Details</button>
                    </div>
                </div>
            `).join('');

            if (filteredUnis.length > displayedUnis) loadMore.classList.remove('hidden'); else loadMore.classList.add('hidden');
            lucide.createIcons();
        }
        function loadMoreUniversities() { displayedUnis += 12; renderUniversities(); }
        function resetFilters() { document.getElementById('uni-search').value = ''; document.getElementById('uni-country').value = ''; document.getElementById('uni-course').value = ''; filterUniversities(); }
        function quickSearch() {
            const country = document.getElementById('qs-country').value;
            if(country) searchByCountry(country); else navigateTo('universities');
        }
        function searchByCountry(country) {
            navigateTo('universities');
            setTimeout(() => { document.getElementById('uni-country').value = country; filterUniversities(); }, 100);
        }

        // ============ AI SEARCH ============
        let aiCurrentStep = 1;
        function aiNextStep(step) {
            document.getElementById('ai-step-' + aiCurrentStep).classList.add('hidden');
            document.getElementById('ai-step-' + step).classList.remove('hidden');
            // Update dots
            for(let i=1; i<=4; i++) {
                const dot = document.getElementById('ai-step-'+i+'-dot');
                if(i<=step) { dot.classList.remove('bg-gray-200','text-gray-400'); dot.classList.add('bg-gray-900','text-white'); }
                else { dot.classList.add('bg-gray-200','text-gray-400'); dot.classList.remove('bg-gray-900','text-white'); }
            }
            aiCurrentStep = step;
            if(step === 4) runAIMatching();
        }
        function toggleAIOption(cb) { const l=cb.closest('.ai-country-option'); if(cb.checked) l.classList.add('border-blue-500','bg-blue-50'); else l.classList.remove('border-blue-500','bg-blue-50'); }
        function runAIMatching() {
            document.getElementById('ai-loading').classList.remove('hidden'); document.getElementById('ai-results').classList.add('hidden');
            setTimeout(() => {
                document.getElementById('ai-loading').classList.add('hidden'); document.getElementById('ai-results').classList.remove('hidden');
                document.getElementById('ai-results-list').innerHTML = `<div class="p-4 border rounded-xl bg-emerald-50 border-emerald-100 text-center"><p class="text-emerald-800 font-medium">Matches Found!</p></div>`;
            }, 2000);
        }
        function aiReset() { aiNextStep(1); }

        // ============ TESTIMONIALS & CONTACT ============
        function renderTestimonialSlider() {
            const slider = document.getElementById('testimonial-slider'); if(!slider) return;
            slider.innerHTML = testimonials.map(t => `<div class="testimonial-card flex-shrink-0 bg
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
<div className="flex items-end gap-0.5">
<div className="w-2.5 h-4 bg-red-500 rounded-sm"></div>
<div className="flex flex-col gap-0.5">
<div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm"></div>
<div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm"></div>
</div>
<div className="flex flex-col gap-0.5">
<div className="w-2.5 h-1.5 bg-green-500 rounded-sm"></div>
<div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
<div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
</div>
<div className="flex flex-col gap-0.5">
<div className="w-2.5 h-3 bg-blue-500 rounded-sm"></div>
<div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div>
<div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div>
</div>
</div>
<div className="ml-1">
<span className="text-lg font-bold tracking-tight text-gray-900" id="logo-text">Abroad Key</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" onclick="navigateTo('home')">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" onclick="navigateTo('universities')">Universities</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" onclick="navigateTo('ai-search')">AI Search</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" onclick="navigateTo('testimonials-page')">Testimonials</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" onclick="navigateTo('contact')">Contact</a>
</div>
<div className="hidden lg:flex items-center gap-3">
<div id="nav-auth-buttons">
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors" onclick="navigateTo('login')">Log in</button>
<button className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-5 py-2.5 rounded-lg transition-colors" onclick="navigateTo('register')">Register</button>
</div>
<div className="hidden items-center gap-3" id="nav-user-info">
<span className="text-xs font-medium text-gray-500" id="nav-student-id"></span>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors flex items-center gap-2" onclick="navigateTo('dashboard')">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Dashboard
                        </button>
<button className="text-sm font-medium text-red-600 hover:text-red-700 px-4 py-2 transition-colors" onclick="logout()">Logout</button>
</div>
</div>
<button className="lg:hidden p-2" onclick="toggleMobileMenu()">
<i className="w-5 h-5" data-lucide="menu" id="menu-icon"></i>
</button>
</div>
</div>

<div className="hidden lg:hidden glass border-t border-gray-200" id="mobile-menu">
<div className="px-4 py-4 space-y-2">
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 cursor-pointer" onclick="navigateTo('home'); toggleMobileMenu()">Home</a>
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 cursor-pointer" onclick="navigateTo('universities'); toggleMobileMenu()">Universities</a>
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 cursor-pointer" onclick="navigateTo('ai-search'); toggleMobileMenu()">AI Search</a>
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 cursor-pointer" onclick="navigateTo('testimonials-page'); toggleMobileMenu()">Testimonials</a>
<a className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 cursor-pointer" onclick="navigateTo('contact'); toggleMobileMenu()">Contact</a>
<div className="pt-2 border-t border-gray-200 space-y-2" id="mobile-auth">
<button className="w-full text-left text-sm font-medium text-gray-600 py-2" onclick="navigateTo('login'); toggleMobileMenu()">Log in</button>
<button className="w-full text-sm font-medium text-white bg-gray-900 py-2.5 rounded-lg" onclick="navigateTo('register'); toggleMobileMenu()">Register</button>
</div>
<div className="hidden pt-2 border-t border-gray-200 space-y-2" id="mobile-user-info">
<button className="w-full text-left text-sm font-medium text-gray-600 py-2" onclick="navigateTo('dashboard'); toggleMobileMenu()">Dashboard</button>
<button className="w-full text-left text-sm font-medium text-red-600 py-2" onclick="logout(); toggleMobileMenu()">Logout</button>
</div>
</div>
</div>
</nav>

<main id="main-content">

<section id="page-home">

<div className="hero-gradient relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
<span className="text-xs font-medium text-blue-100">900+ Universities Worldwide</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                            Your Gateway to<br/>
<span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">World-Class Education</span>
</h1>
<p className="mt-6 text-lg text-blue-100/80 max-w-xl leading-relaxed">
                            Abroad Key connects ambitious students with top universities across the globe. AI-powered matching, expert guidance, and seamless applications — all in one place.
                        </p>
<div className="mt-10 flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-lg shadow-white/20" onclick="navigateTo('ai-search')">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                                Find Your University
                            </button>
<button className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-medium text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all" onclick="navigateTo('register')">
                                Register Now
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-12 flex items-center gap-8">
<div>
<div className="text-2xl font-bold text-white tracking-tight">900+</div>
<div className="text-xs text-blue-200/70">Universities</div>
</div>
<div className="w-px h-10 bg-white/20"></div>
<div>
<div className="text-2xl font-bold text-white tracking-tight">50+</div>
<div className="text-xs text-blue-200/70">Countries</div>
</div>
<div className="w-px h-10 bg-white/20"></div>
<div>
<div className="text-2xl font-bold text-white tracking-tight">15K+</div>
<div className="text-xs text-blue-200/70">Students Placed</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 lg:p-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">Country</label>
<select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer" id="qs-country" onchange="quickSearch()">
<option value="">All Countries</option>
<option>USA</option><option>UK</option><option>Canada</option><option>Australia</option><option>Germany</option><option>France</option><option>Netherlands</option><option>Ireland</option><option>New Zealand</option><option>Singapore</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">Course</label>
<select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer" id="qs-course" onchange="quickSearch()">
<option value="">All Courses</option>
<option>Computer Science</option><option>MBA</option><option>Engineering</option><option>Medicine</option><option>Data Science</option><option>Law</option><option>Arts &amp; Design</option><option>Biotechnology</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">Intake</label>
<select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer" id="qs-intake" onchange="quickSearch()">
<option value="">All Intakes</option>
<option>Fall 2024</option><option>Spring 2025</option><option>Fall 2025</option><option>Rolling Admissions</option>
</select>
</div>
<div className="flex items-end">
<button className="w-full bg-gray-900 text-white font-medium text-sm py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" onclick="navigateTo('universities')">
<i className="w-4 h-4" data-lucide="search"></i>
                                Search Universities
                            </button>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Everything you need to study abroad</h2>
<p className="mt-4 text-base text-gray-500 leading-relaxed">From choosing the right university to landing in a new country, we guide you every step of the way.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
<div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
<i className="w-5 h-5 text-blue-600" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">AI University Matching</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Our AI analyzes your profile, scores, and preferences to recommend the best-fit universities from our 900+ database.</p>
</div>
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
<i className="w-5 h-5 text-emerald-600" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Application Management</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Upload documents, track application status, and manage everything from your personalized student dashboard.</p>
</div>
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
<div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
<i className="w-5 h-5 text-purple-600" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Expert Counseling</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Get personalized guidance from experienced counselors who have helped 15,000+ students achieve their dreams.</p>
</div>
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
<div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
<i className="w-5 h-5 text-amber-600" data-lucide="plane"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Visa Assistance</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Complete visa application support with document preparation, interview coaching, and tracking.</p>
</div>
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
<div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-5">
<i className="w-5 h-5 text-rose-600" data-lucide="banknote"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Scholarship Guidance</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">We help you find and apply for scholarships, reducing your financial burden significantly.</p>
</div>
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
<div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-5">
<i className="w-5 h-5 text-cyan-600" data-lucide="home"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Pre-Departure Support</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed">Accommodation, travel, insurance, and orientation — we ensure you're fully prepared before you fly.</p>
</div>
</div>
</div>

<div className="bg-gray-50 py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Popular study destinations</h2>
<p className="mt-4 text-base text-gray-500">Explore top countries with world-class education systems and opportunities.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('USA')">
<img alt="USA" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇺🇸</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">USA</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">250+ Universities</p>
<div className="h-1 w-12 bg-blue-500 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('UK')">
<img alt="UK" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇬🇧</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">UK</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">180+ Universities</p>
<div className="h-1 w-12 bg-red-500 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('Canada')">
<img alt="Canada" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇨🇦</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">Canada</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">150+ Universities</p>
<div className="h-1 w-12 bg-white rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('Australia')">
<img alt="Australia" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇦🇺</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">Australia</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">120+ Universities</p>
<div className="h-1 w-12 bg-blue-400 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('Germany')">
<img alt="Germany" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇩🇪</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">Germany</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">100+ Universities</p>
<div className="h-1 w-12 bg-yellow-500 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('France')">
<img alt="France" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇫🇷</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">France</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">80+ Universities</p>
<div className="h-1 w-12 bg-indigo-500 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('Ireland')">
<img alt="Ireland" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇮🇪</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">Ireland</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">50+ Universities</p>
<div className="h-1 w-12 bg-emerald-500 rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>

<div className="country-card group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500" onclick="searchByCountry('New Zealand')">
<img alt="New Zealand" className="country-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-1">
<span className="text-xl">🇳🇿</span>
<h3 className="text-lg lg:text-xl font-bold text-white tracking-tight">New Zealand</h3>
</div>
<p className="text-xs lg:text-sm text-gray-300 font-medium">40+ Universities</p>
<div className="h-1 w-12 bg-white rounded-full mt-3 group-hover:w-20 transition-all duration-300"></div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Students love Abroad Key</h2>
<p className="mt-4 text-base text-gray-500">Hear from students who achieved their study abroad dreams with us.</p>
</div>
<div className="relative">
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 scroll-smooth" id="testimonial-slider">

</div>
<button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors hidden lg:flex" onclick="scrollTestimonials(-1)">
<i className="w-5 h-5 text-gray-600" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors hidden lg:flex" onclick="scrollTestimonials(1)">
<i className="w-5 h-5 text-gray-600" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="bg-gray-900 py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Ready to start your journey?</h2>
<p className="mt-4 text-base text-gray-400 max-w-xl mx-auto">Join 15,000+ students who found their perfect university match with Abroad Key.</p>
<div className="mt-10 flex flex-wrap justify-center gap-4">
<button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-100 transition-colors" onclick="navigateTo('register')">
                            Get Started Free
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors" onclick="navigateTo('contact')">
<i className="w-4 h-4" data-lucide="phone"></i>
                            Talk to Counselor
                        </button>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-register">


<div className="max-w-lg mx-auto px-4 sm:px-6 py-12 lg:py-20">
<div className="text-center mb-8">
<h1 className="text-3xl font-bold tracking-tight text-gray-900">Create your account</h1>
<p className="mt-2 text-sm text-gray-500">Start your study abroad journey with Abroad Key</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
<div id="register-step-1">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Full Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="reg-name" placeholder="Enter your full name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Email Address</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="reg-email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Contact Number</label>
<div className="flex gap-2">
<span className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-500">+91</span>
<input className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="reg-phone" placeholder="9146519271" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Password</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="reg-password" placeholder="Create a strong password" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Confirm Password</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="reg-confirm" placeholder="Confirm your password" type="password"/>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors mt-2" onclick="sendOTP()">
                                Send OTP Verification
                            </button>
</div>
</div>
<div className="hidden" id="register-step-2">
<div className="text-center mb-6">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-7 h-7 text-blue-600" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Verify your identity</h3>
<p className="text-sm text-gray-500 mt-1">We've sent OTP to your email &amp; phone</p>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Email OTP</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-center tracking-widest font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="email-otp" maxlength="6" placeholder="Enter 6-digit OTP" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Phone OTP</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-center tracking-widest font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="phone-otp" maxlength="6" placeholder="Enter 6-digit OTP" type="text"/>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors" onclick="verifyAndRegister()">
                                Verify &amp; Create Account
                            </button>
<button className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors" onclick="resendOTP()">
                                Didn't receive? Resend OTP
                            </button>
</div>
</div>
<div className="hidden text-center" id="register-step-3">
<div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-emerald-600" data-lucide="check-circle-2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">Welcome to Abroad Key!</h3>
<p className="text-sm text-gray-500 mt-2">Your account has been created successfully</p>
<div className="mt-4 bg-gray-50 rounded-xl p-4">
<p className="text-xs text-gray-400">Your Student ID</p>
<p className="text-lg font-bold text-gray-900 tracking-tight mt-1" id="generated-student-id"></p>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors mt-6" onclick="navigateTo('dashboard')">
                            Go to Dashboard
                        </button>
</div>
<div className="mt-6 text-center">
<p className="text-sm text-gray-500">Already have an account? <a className="text-blue-600 font-medium cursor-pointer hover:text-blue-700" onclick="navigateTo('login')">Log in</a></p>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-login">
<div className="max-w-lg mx-auto px-4 sm:px-6 py-12 lg:py-20">
<div className="text-center mb-8">
<h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h1>
<p className="mt-2 text-sm text-gray-500">Log in to your Abroad Key account</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Email or Phone</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="login-email" placeholder="you@example.com" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Password</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" id="login-password" placeholder="Enter your password" type="password"/>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors mt-2" onclick="loginUser()">
                            Log in
                        </button>
</div>
<div className="hidden mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600" id="login-error"></div>
<div className="mt-6 text-center">
<p className="text-sm text-gray-500">Don't have an account? <a className="text-blue-600 font-medium cursor-pointer hover:text-blue-700" onclick="navigateTo('register')">Register</a></p>
</div>
</div>
</div>
</section>



<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-dashboard">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
<div><h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">Student Dashboard</h1><p className="mt-1 text-sm text-gray-500">Welcome back, <span className="font-medium text-gray-700" id="dash-name"></span></p></div>
<div className="mt-4 lg:mt-0 flex items-center gap-3"><div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="badge-check"></i><span className="text-xs font-medium text-gray-500">Student ID:</span><span className="text-sm font-bold text-gray-900" id="dash-student-id"></span></div></div>
</div>

<div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8 overflow-x-auto hide-scrollbar">
<button className="dash-tab flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors" id="tab-overview" onclick="switchDashTab('overview')">Overview</button>
<button className="dash-tab flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors" id="tab-documents" onclick="switchDashTab('documents')">Documents</button>
<button className="dash-tab flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors" id="tab-applications" onclick="switchDashTab('applications')">Applications</button>
<button className="dash-tab flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors" id="tab-profile" onclick="switchDashTab('profile')">Profile</button>
</div>

<div className="dash-content" id="dash-overview">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white rounded-2xl border border-gray-200 p-5"><div className="flex items-center justify-between mb-3"><span className="text-xs font-medium text-gray-400">Documents</span><div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center"><i className="w-4 h-4 text-blue-600" data-lucide="file-text"></i></div></div><div className="text-2xl font-bold tracking-tight" id="stat-docs">0</div><div className="text-xs text-gray-400 mt-1">Uploaded</div></div>
<div className="bg-white rounded-2xl border border-gray-200 p-5"><div className="flex items-center justify-between mb-3"><span className="text-xs font-medium text-gray-400">Applications</span><div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center"><i className="w-4 h-4 text-emerald-600" data-lucide="send"></i></div></div><div className="text-2xl font-bold tracking-tight" id="stat-apps">0</div><div className="text-xs text-gray-400 mt-1">Submitted</div></div>
<div className="bg-white rounded-2xl border border-gray-200 p-5"><div className="flex items-center justify-between mb-3"><span className="text-xs font-medium text-gray-400">Shortlisted</span><div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center"><i className="w-4 h-4 text-amber-600" data-lucide="star"></i></div></div><div className="text-2xl font-bold tracking-tight" id="stat-short">0</div><div className="text-xs text-gray-400 mt-1">Universities</div></div>
<div className="bg-white rounded-2xl border border-gray-200 p-5"><div className="flex items-center justify-between mb-3"><span className="text-xs font-medium text-gray-400">Status</span><div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center"><i className="w-4 h-4 text-purple-600" data-lucide="activity"></i></div></div><div className="text-lg font-bold tracking-tight text-emerald-600">Active</div><div className="text-xs text-gray-400 mt-1">Account Status</div></div>
</div>
</div>

<div className="dash-content hidden" id="dash-documents"><div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6"><h3 className="text-lg font-semibold tracking-tight mb-4">Upload Documents</h3><div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-gray-300 transition-colors" id="drop-zone" onclick="document.getElementById('file-input').click()" ondragleave="handleDragLeave(event)" ondragover="handleDragOver(event)" ondrop="handleDrop(event)"><input accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" id="file-input" multiple="" onchange="handleFileSelect(event)" type="file"/><div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4"><i className="w-6 h-6 text-gray-400" data-lucide="upload-cloud"></i></div><p className="text-sm font-medium text-gray-700">Drag and drop files here</p><p className="text-xs text-gray-400 mt-1">or click to browse</p></div></div><div className="bg-white rounded-2xl border border-gray-200 p-6"><h3 className="text-lg font-semibold tracking-tight mb-4">Document Checklist</h3><div className="space-y-3" id="document-list"></div></div></div>
<div className="dash-content hidden" id="dash-applications"><div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6"><div className="flex items-center justify-between mb-6"><h3 className="text-lg font-semibold tracking-tight">Application Tracker</h3><button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" onclick="navigateTo('universities')"><i className="w-4 h-4" data-lucide="plus"></i> Add Application</button></div><div className="space-y-4" id="applications-list"></div><div className="text-center py-12" id="no-applications"><div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><i className="w-8 h-8 text-gray-300" data-lucide="inbox"></i></div><p className="text-sm font-medium text-gray-400">No applications yet</p><button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700" onclick="navigateTo('universities')">Browse Universities →</button></div></div></div>
<div className="dash-content hidden" id="dash-profile"><div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-2xl"><h3 className="text-lg font-semibold tracking-tight mb-6">Profile Information</h3><div className="space-y-4"><input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" id="profile-name" placeholder="Full Name" type="text"/><input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" disabled="" id="profile-email" type="email"/><button className="bg-gray-900 text-white font-medium text-sm px-6 py-2.5 rounded-lg" onclick="saveProfile()">Save Profile</button></div></div></div>
</div>
</section>

<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-universities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="mb-8"><h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">Explore 900+ Universities</h1></div>
<div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6 mb-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
<div><label className="block text-xs font-medium text-gray-500 mb-1.5">Search</label><div className="relative"><i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search"></i><input className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm" id="uni-search" oninput="filterUniversities()" placeholder="Search..." type="text"/></div></div>
<div><label className="block text-xs font-medium text-gray-500 mb-1.5">Country</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm" id="uni-country" onchange="filterUniversities()"><option value="">All Countries</option><option>USA</option><option>UK</option><option>Canada</option><option>Australia</option><option>Germany</option><option>France</option><option>Netherlands</option><option>Ireland</option><option>New Zealand</option><option>Singapore</option></select></div>

<div><label className="block text-xs font-medium text-gray-500 mb-1.5">Course</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm" id="uni-course" onchange="filterUniversities()"><option value="">All Courses</option><option>Computer Science</option><option>MBA</option><option>Engineering</option><option>Medicine</option></select></div>
<div><label className="block text-xs font-medium text-gray-500 mb-1.5">Intake</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm" id="uni-intake" onchange="filterUniversities()"><option value="">All Intakes</option><option>Fall 2024</option><option>Spring 2025</option></select></div>
<div className="flex items-end"><button className="w-full text-sm font-medium text-gray-500 hover:text-gray-700 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" onclick="resetFilters()">Clear</button></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="university-grid"></div>
<div className="mt-8 text-center hidden" id="load-more-wrap"><button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-6 py-2.5 rounded-lg border border-gray-200 hover:bg-white transition-colors" onclick="loadMoreUniversities()">Load More</button></div>
</div>
</section>

<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-ai-search">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="text-center mb-10"><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4"><i className="w-3.5 h-3.5 text-blue-600" data-lucide="sparkles"></i><span className="text-xs font-medium text-blue-700">AI-Powered</span></div><h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Find My Best Fit</h1><p className="mt-3 text-base text-gray-500 max-w-lg mx-auto">Answer a few questions and our AI will recommend the best universities.</p></div>
<div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8" id="ai-quiz">

<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center" id="ai-step-1-dot">1</div>
<div className="flex-1 h-0.5 bg-gray-200"><div className="h-full bg-gray-900 transition-all duration-300" id="ai-progress-1" style={{width: '0%'}}></div></div>
<div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 text-xs font-semibold flex items-center justify-center" id="ai-step-2-dot">2</div>

</div>

<div className="animate-fade-in" id="ai-step-1">
<h3 className="text-xl font-semibold tracking-tight mb-6">Academic Background</h3>
<div className="space-y-4">
<div><label className="block text-xs font-medium text-gray-700 mb-1.5">Highest Education</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" id="ai-education"><option value="">Select</option><option>High School</option><option>Bachelor's</option></select></div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg" onclick="aiNextStep(2)">Next</button>
</div>
</div>
<div className="hidden animate-fade-in" id="ai-step-2"><h3 className="text-xl font-semibold tracking-tight mb-6">Study Preferences</h3><div className="space-y-4"><div className="grid grid-cols-2 sm:grid-cols-3 gap-2" id="ai-countries"><label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer ai-country-option"><input className="hidden ai-country-check" onchange="toggleAIOption(this)" type="checkbox" value="USA"/><span className="text-sm">🇺🇸 USA</span></label><label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer ai-country-option"><input className="hidden ai-country-check" onchange="toggleAIOption(this)" type="checkbox" value="UK"/><span className="text-sm">🇬🇧 UK</span></label></div><button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg" onclick="aiNextStep(3)">Next</button></div></div>
<div className="hidden animate-fade-in" id="ai-step-3"><h3 className="text-xl font-semibold tracking-tight mb-6">Budget</h3><div className="space-y-4"><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" id="ai-budget"><option value="">Select Budget</option><option value="low">Under $15k</option><option value="high">Above $25k</option></select><button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg" onclick="aiNextStep(4)">Get AI Recommendations</button></div></div>
<div className="hidden animate-fade-in" id="ai-step-4"><div className="text-center py-12" id="ai-loading"><i className="w-8 h-8 text-blue-600 mx-auto mb-4 pulse-glow" data-lucide="sparkles"></i><h3>Analyzing...</h3><div className="h-1.5 bg-blue-600 rounded-full mt-4" id="ai-load-bar" style={{width: '0%'}}></div></div><div className="hidden" id="ai-results"><div className="space-y-4" id="ai-results-list"></div><button className="w-full mt-6 border border-gray-200 text-gray-700 py-3 rounded-lg" onclick="aiReset()">Try Again</button></div></div>
</div>
</div>
</section>

<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-testimonials-page">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="text-center mb-12"><h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Student Success Stories</h1></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-grid"></div>
</div>
</section>

<section className="hidden min-h-screen bg-gray-50 pt-20" id="page-contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div><h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Get in touch</h1><p className="mt-3 text-base text-gray-500 leading-relaxed">Have questions? Our expert counselors are here to help.</p><div className="mt-10 space-y-6"><div className="flex items-start gap-4"><i className="w-5 h-5 text-blue-600" data-lucide="mail"></i><a className="text-sm text-gray-500" href="mailto:abroadkey5555@gmail.com">abroadkey5555@gmail.com</a></div><div className="flex items-start gap-4"><i className="w-5 h-5 text-emerald-600" data-lucide="phone"></i><a className="text-sm text-gray-500" href="tel:+919146519271">+91 9146519271</a></div></div></div>
<div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8"><h3 className="text-lg font-semibold tracking-tight mb-6">Send us a message</h3><div className="space-y-4"><input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" id="contact-name" placeholder="Your name" type="text"/><input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" id="contact-email" placeholder="Email" type="email"/><textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm" id="contact-message" placeholder="Message..." rows="4"></textarea><button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg" id="contact-btn" onclick="submitContact()">Send Message</button><div className="hidden p-3 bg-emerald-50 text-emerald-700 text-sm" id="contact-success">Message sent!</div></div></div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="flex items-end gap-0.5">
<div className="w-2 h-3 bg-red-500 rounded-sm"></div>
<div className="flex flex-col gap-0.5"><div className="w-2 h-2 bg-yellow-400 rounded-sm"></div><div className="w-2 h-2 bg-yellow-400 rounded-sm"></div></div>
<div className="flex flex-col gap-0.5"><div className="w-2 h-1 bg-green-500 rounded-sm"></div><div className="w-2 h-2 bg-green-500 rounded-sm"></div><div className="w-2 h-2 bg-green-500 rounded-sm"></div></div>
<div className="flex flex-col gap-0.5"><div className="w-2 h-2 bg-blue-500 rounded-sm"></div><div className="w-2 h-2 bg-blue-500 rounded-sm"></div><div className="w-2 h-2 bg-blue-500 rounded-sm"></div></div>
</div>
<span className="text-base font-bold tracking-tight">Abroad Key</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed mb-6">A plan for every abroad dream. Helping students find their perfect university match since 2020.</p>

<div className="flex items-center gap-4">
<a className="text-gray-400 hover:scale-110 transition-transform" href="https://www.youtube.com/@AbroadKeyStudyAbroad" target="_blank">
<svg className="w-6 h-6 text-[#FF0000] fill-current" viewbox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
</a>
<a className="text-gray-400 hover:scale-110 transition-transform" href="https://www.instagram.com/abroad_key_?igsh=dnZ2cmF6N3VyamZy" target="_blank">
<svg className="w-6 h-6 text-[#E1306C] fill-current" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="text-gray-400 hover:scale-110 transition-transform" href="https://www.facebook.com/share/1A88gZb1BA/?mibextid=wwXIfr" target="_blank">
<svg className="w-6 h-6 text-[#1877F2] fill-current" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<a className="text-gray-400 hover:scale-110 transition-transform" href="https://www.linkedin.com/company/abroadkey-studyabroad/" target="_blank">
<svg className="w-6 h-6 text-[#0A66C2] fill-current" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a className="text-gray-400 hover:scale-110 transition-transform" href="https://x.com/abroad_key" target="_blank">
<svg className="w-6 h-6 text-white fill-current" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Quick Links</h4>
<div className="space-y-2">
<a className="block text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="navigateTo('home')">Home</a>
<a className="block text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="navigateTo('universities')">Universities</a>
<a className="block text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="navigateTo('ai-search')">AI Search</a>
<a className="block text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="navigateTo('testimonials-page')">Testimonials</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Services</h4>
<div className="space-y-2">
<p className="text-sm text-gray-400">University Counseling</p>
<p className="text-sm text-gray-400">Visa Assistance</p>
<p className="text-sm text-gray-400">Scholarship Guidance</p>
<p className="text-sm text-gray-400">SOP &amp; LOR Support</p>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Contact</h4>
<div className="space-y-2">
<p className="text-sm text-gray-400">abroadkey5555@gmail.com</p>
<p className="text-sm text-gray-400">+91 9146519271</p>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-800 text-center">
<p className="text-xs text-gray-500">© 2024 Abroad Key. All rights reserved.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 whatsapp-float hover:scale-110 transition-transform" href="https://wa.me/447469418192" target="_blank">
<div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E]">
<svg className="w-8 h-8 text-white fill-current" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
</div>
</a>

<div className="fixed bottom-4 right-4 z-50 hidden transform transition-all duration-300 translate-y-4 opacity-0" id="toast">
<div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex items-center gap-3 max-w-sm">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" id="toast-icon"></div>
<div>
<p className="text-sm font-medium text-gray-900" id="toast-title"></p>
<p className="text-xs text-gray-500 mt-0.5" id="toast-msg"></p>
</div>
<button className="ml-2 text-gray-300 hover:text-gray-500" onclick="hideToast()"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>

    </>
  );
}
