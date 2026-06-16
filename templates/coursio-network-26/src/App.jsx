import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
850: '#1e293b',
950: '#020617',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const courses = [
            {
                id: 1,
                title: "Accelerate growth with the right corporate culture",
                category: "Leadership",
                creator: "Breakit Courses",
                creatorLogo: "B",
                price: 235,
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
                relevance: 94,
                desc: "The training is suitable for those who are passionate about service sales and want to develop as leaders. Those who curr...",
                isPack: true,
                certificate: true
            },
            {
                id: 2,
                title: "Product Design Leadership Bundle",
                category: "Design",
                creator: "DesignCo",
                creatorLogo: "D",
                price: 499,
                image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&w=800&q=80",
                relevance: 88,
                desc: "Complete leadership track for senior product designers managing large teams.",
                isPack: true,
                certificate: true
            },
            {
                id: 3,
                title: "Tech Sales Architectures",
                category: "Sales",
                creator: "SalesFlow",
                creatorLogo: "S",
                price: 199,
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
                relevance: 91,
                desc: "Technical sales methodologies for complex B2B SaaS environments.",
                isPack: false,
                certificate: false
            },
            {
                id: 4,
                title: "Full Stack React & Node Mastery",
                category: "Tech",
                creator: "CodeLab",
                creatorLogo: "C",
                price: 149,
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
                relevance: 98,
                desc: "Build production-ready applications with modern JavaScript stack.",
                isPack: false,
                certificate: true
            },
            {
                id: 5,
                title: "Financial Modeling for Founders",
                category: "Leadership",
                creator: "FinTech",
                creatorLogo: "F",
                price: 299,
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                relevance: 85,
                desc: "Create robust financial models to secure funding and manage burn rate.",
                isPack: false,
                certificate: true
            },
            {
                id: 6,
                title: "Enterprise UX Strategy",
                category: "Design",
                creator: "UXMastery",
                creatorLogo: "U",
                price: 349,
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
                relevance: 89,
                desc: "Aligning user experience strategy with high-level business goals.",
                isPack: false,
                certificate: true
            }
        ];

        let cart = [];
        let currentMode = 'student';

        function renderStudentView() {
            const container = document.getElementById('student-grid');
            container.innerHTML = courses.map(course => `
                <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
                    
                    <div class="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
                        ${course.isPack ? `
                        <div class="absolute top-5 left-5 bg-[#0f172a] text-white text-xs font-medium px-3.5 py-1.5 rounded-lg tracking-wide uppercase shadow-sm">
                            Bundle 10
                        </div>` : ''}

                        <div class="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                            <span class="text-sm font-semibold text-slate-800 tracking-tight">MATCH ${course.relevance}%</span>
                        </div>
                    </div>

                    <div class="p-7 flex flex-col flex-grow">
                        <div class="flex justify-between items-center mb-5">
                            <span class="text-xs font-medium text-slate-500 uppercase tracking-wide">${course.creator}</span>
                            <span class="text-base font-semibold text-slate-800">${course.price * 100} SEK</span>
                        </div>
                        
                        <h3 class="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            ${course.title}
                        </h3>
                        
                        <p class="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            ${course.desc}
                        </p>
                        
                        <div class="mt-auto">
                            <button class="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderResellerView() {
            const container = document.getElementById('reseller-list');
            container.innerHTML = courses.map(course => {
                const isAdded = cart.find(c => c.id === course.id);
                return `
                <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border ${isAdded ? 'border-zinc-800 ring-1 ring-zinc-800/10' : 'border-slate-100/50'} flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
                    
                    <div class="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
                        <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover">
                        ${course.isPack ? `
                        <div class="absolute top-4 left-4 bg-[#0f172a] text-white text-[10px] font-medium px-2.5 py-1.5 rounded-md tracking-wide uppercase shadow-sm">
                            Bundle
                        </div>` : ''}
                    </div>

                    <div class="p-6 flex flex-col flex-1 min-w-0">
                        <div class="flex justify-between items-start gap-4 mb-3">
                            <div class="flex flex-col">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-xs font-medium text-slate-500 uppercase tracking-wide">${course.creator}</span>
                                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <span class="text-xs font-medium text-slate-500 uppercase tracking-wide">${course.category}</span>
                                </div>
                                <h3 class="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">${course.title}</h3>
                            </div>
                            <span class="text-xl font-semibold text-slate-900 shrink-0">$${course.price}</span>
                        </div>

                        <p class="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            ${course.desc}
                        </p>
                        
                        <div class="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
                            <div class="flex items-center">
                                ${course.certificate ? `
                                <div class="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                    <iconify-icon icon="solar:medal-ribbon-star-linear" class="text-amber-500 text-sm"></iconify-icon>
                                    <span class="text-xs font-medium">Certificate</span>
                                </div>` : '<div></div>'}
                            </div>
                            
                            <button onclick="toggleCart(${course.id})" class="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${isAdded ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 shadow-sm' : 'bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm'}">
                                ${isAdded ? `
                                    <iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon> Remove
                                ` : `
                                    <iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                `}
                            </button>
                        </div>
                    </div>
                </div>
            `}).join('');
        }

        function switchMode(mode) {
            currentMode = mode;
            const studentBtn = document.getElementById('btn-student');
            const resellerBtn = document.getElementById('btn-reseller');
            const toggleBg = document.getElementById('toggle-bg');
            const studentView = document.getElementById('student-view');
            const resellerView = document.getElementById('reseller-view');

            if (mode === 'student') {
                toggleBg.style.transform = 'translateX(0)';
                studentBtn.classList.add('text-slate-900');
                studentBtn.classList.remove('text-slate-500');
                resellerBtn.classList.add('text-slate-500');
                resellerBtn.classList.remove('text-slate-900');

                resellerView.classList.add('opacity-0');
                setTimeout(() => {
                    resellerView.classList.add('hidden');
                    studentView.classList.remove('hidden');
                    void studentView.offsetWidth; 
                    studentView.classList.remove('opacity-0');
                }, 300);

            } else {
                toggleBg.style.transform = 'translateX(100%)';
                toggleBg.style.left = '-4px';
                
                resellerBtn.classList.add('text-slate-900');
                resellerBtn.classList.remove('text-slate-500');
                studentBtn.classList.add('text-slate-500');
                studentBtn.classList.remove('text-slate-900');

                studentView.classList.add('opacity-0');
                setTimeout(() => {
                    studentView.classList.add('hidden');
                    resellerView.classList.remove('hidden');
                    renderResellerView();
                    void resellerView.offsetWidth;
                    resellerView.classList.remove('opacity-0');
                }, 300);
            }
        }

        function toggleCart(id) {
            const index = cart.findIndex(c => c.id === id);
            if (index > -1) {
                cart.splice(index, 1);
            } else {
                const course = courses.find(c => c.id === id);
                if (course) cart.push(course);
            }
            updateCartUI();
            renderResellerView();
        }

        function removeFromCart(id) {
            const index = cart.findIndex(c => c.id === id);
            if (index > -1) {
                cart.splice(index, 1);
                updateCartUI();
                renderResellerView();
            }
        }

        function clearCart() {
            cart = [];
            updateCartUI();
            renderResellerView();
        }

        function updateCartUI() {
            const cartContainer = document.getElementById('cart-items');
            const countEl = document.getElementById('cart-count');
            const totalEl = document.getElementById('cart-total');
            
            countEl.innerText = cart.length;
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            totalEl.innerText = `$${total.toFixed(2)}`;

            if (cart.length === 0) {
                cartContainer.innerHTML = `
                    <div id="empty-cart" class="flex flex-col items-center justify-center h-40 text-slate-400 gap-2 fade-enter-active">
                        <iconify-icon icon="solar:cart-large-minimalistic-linear" width="24" class="opacity-50"></iconify-icon>
                        <span class="text-sm">No courses selected</span>
                    </div>
                `;
            } else {
                cartContainer.innerHTML = cart.map(item => `
                    <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors group fade-enter-active">
                        <div class="h-8 w-8 bg-white border border-slate-200 text-slate-700 rounded flex items-center justify-center text-xs font-bold shrink-0">
                            ${item.creatorLogo}
                        </div>
                        <div class="min-w-0 flex-1">
                            <h5 class="text-sm font-medium text-slate-900 truncate">${item.title}</h5>
                            <p class="text-xs text-slate-500">$${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-slate-300 hover:text-red-500 transition-colors p-1">
                            <iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
                        </button>
                    </div>
                `).join('');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderStudentView();
            renderResellerView();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-lg tracking-tight">C</span>
</div>
<span className="font-semibold tracking-tight text-slate-900 text-lg">COURSIO</span>
</div>
<div className="bg-slate-100 p-1 rounded-lg flex relative">
<div className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm border border-slate-200/50 transition-all duration-300 ease-out" id="toggle-bg"></div>
<button className="relative z-10 px-4 py-1.5 text-sm font-medium text-slate-900 transition-colors duration-200 flex items-center gap-2 w-32 justify-center" id="btn-student" onclick="switchMode('student')">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
                    Student
                </button>
<button className="transition-colors duration-200 flex hover:text-slate-700 text-sm font-medium text-slate-500 w-32 z-10 pt-1.5 pr-4 pb-1.5 pl-4 relative gap-x-2 gap-y-2 items-center justify-center" id="btn-reseller" onclick="switchMode('reseller')">Reseller<iconify-icon className="" icon="solar:shop-linear" width="16"></iconify-icon></button>
</div>
<div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ring-1 ring-slate-200">
<img alt="Profile" className="h-full w-full object-cover" src="https://ui-avatars.com/api/?name=User&amp;background=random&amp;color=fff"/>
</div>
</div>
</header>
<main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 relative">
<div className="flex flex-col gap-8 transition-opacity duration-300" id="student-view">
<div className="sticky top-20 z-40 -mx-4 px-4 sm:mx-0 sm:px-0">
<div className="flex gap-2 overflow-x-auto no-scrollbar py-2 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent pr-8">
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-slate-900 text-white text-sm font-medium border border-transparent shadow-sm">All</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm">Marketing</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm">Design</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm">Sales</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm">Leadership</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm">Technology</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="student-grid">
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
<div className="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
<div className="absolute top-5 left-5 bg-[#0f172a] text-white text-xs font-medium px-3.5 py-1.5 rounded-lg tracking-wide uppercase shadow-sm">
                            Bundle 10
                        </div>
<div className="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
<svg className="text-orange-400" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-semibold text-slate-800 tracking-tight">MATCH 94%</span>
</div>
</div>
<div className="p-7 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Breakit Courses</span>
<span className="text-base font-semibold text-slate-800">23500 SEK</span>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            Accelerate growth with the right corporate culture
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            The training is suitable for those who are passionate about service sales and want to develop as leaders. Those who curr...
                        </p>
<div className="mt-auto">
<button className="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
<div className="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
<div className="absolute top-5 left-5 bg-[#0f172a] text-white text-xs font-medium px-3.5 py-1.5 rounded-lg tracking-wide uppercase shadow-sm">
                            Bundle 10
                        </div>
<div className="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
<svg className="text-orange-400" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-semibold text-slate-800 tracking-tight">MATCH 88%</span>
</div>
</div>
<div className="p-7 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">DesignCo</span>
<span className="text-base font-semibold text-slate-800">49900 SEK</span>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            Product Design Leadership Bundle
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            Complete leadership track for senior product designers managing large teams.
                        </p>
<div className="mt-auto">
<button className="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
<div className="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
<div className="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
<svg className="text-orange-400" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-semibold text-slate-800 tracking-tight">MATCH 91%</span>
</div>
</div>
<div className="p-7 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">SalesFlow</span>
<span className="text-base font-semibold text-slate-800">19900 SEK</span>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            Tech Sales Architectures
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            Technical sales methodologies for complex B2B SaaS environments.
                        </p>
<div className="mt-auto">
<button className="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
<div className="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
<div className="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
<svg className="text-orange-400" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-semibold text-slate-800 tracking-tight">MATCH 98%</span>
</div>
</div>
<div className="p-7 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">CodeLab</span>
<span className="text-base font-semibold text-slate-800">14900 SEK</span>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            Full Stack React &amp; Node Mastery
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            Build production-ready applications with modern JavaScript stack.
                        </p>
<div className="mt-auto">
<button className="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
<div className="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
<div className="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
<svg className="text-orange-400" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-semibold text-slate-800 tracking-tight">MATCH 85%</span>
</div>
</div>
<div className="p-7 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">FinTech</span>
<span className="text-base font-semibold text-slate-800">29900 SEK</span>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            Financial Modeling for Founders
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            Create robust financial models to secure funding and manage burn rate.
                        </p>
<div className="mt-auto">
<button className="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-slate-100/50">
<div className="relative w-full h-56 bg-gradient-to-br from-[#126b77] to-[#12a1a8]">
<div className="absolute bottom-5 right-5 bg-white shadow-sm px-3.5 py-2 rounded-xl flex items-center gap-1.5">
<svg className="text-orange-400" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-semibold text-slate-800 tracking-tight">MATCH 89%</span>
</div>
</div>
<div className="p-7 flex flex-col flex-grow">
<div className="flex justify-between items-center mb-5">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">UXMastery</span>
<span className="text-base font-semibold text-slate-800">34900 SEK</span>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight leading-snug mb-3">
                            Enterprise UX Strategy
                        </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                            Aligning user experience strategy with high-level business goals.
                        </p>
<div className="mt-auto">
<button className="w-full bg-zinc-800 text-white hover:bg-zinc-900 text-base font-medium py-3.5 rounded-full transition-colors shadow-sm">
                                Buy now
                            </button>
</div>
</div>
</div>
</div>
</div>
<div className="hidden grid grid-cols-1 lg:grid-cols-12 gap-8 opacity-0 transition-opacity duration-300" id="reseller-view">
<div className="lg:col-span-8 flex flex-col gap-6">
<div className="flex items-center justify-between pb-2 border-b border-slate-200">
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-wide">Available Inventory</h2>
<div className="flex gap-2">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon> Sort by Margin
                        </button>
</div>
</div>
<div className="flex flex-col gap-6" id="reseller-list">
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
<div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
<img alt="Accelerate growth with the right corporate culture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-[#0f172a] text-white text-[10px] font-medium px-2.5 py-1.5 rounded-md tracking-wide uppercase shadow-sm">
                            Bundle
                        </div>
</div>
<div className="p-6 flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-4 mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Breakit Courses</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Leadership</span>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">Accelerate growth with the right corporate culture</h3>
</div>
<span className="text-xl font-semibold text-slate-900 shrink-0">$235</span>
</div>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            The training is suitable for those who are passionate about service sales and want to develop as leaders. Those who curr...
                        </p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
<div className="flex items-center">
<div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
<iconify-icon className="text-amber-500 text-sm" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-xs font-medium">Certificate</span>
</div>
</div>
<button className="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm" onclick="toggleCart(1)">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
<div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
<img alt="Product Design Leadership Bundle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-[#0f172a] text-white text-[10px] font-medium px-2.5 py-1.5 rounded-md tracking-wide uppercase shadow-sm">
                            Bundle
                        </div>
</div>
<div className="p-6 flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-4 mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">DesignCo</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Design</span>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">Product Design Leadership Bundle</h3>
</div>
<span className="text-xl font-semibold text-slate-900 shrink-0">$499</span>
</div>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            Complete leadership track for senior product designers managing large teams.
                        </p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
<div className="flex items-center">
<div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
<iconify-icon className="text-amber-500 text-sm" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-xs font-medium">Certificate</span>
</div>
</div>
<button className="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm" onclick="toggleCart(2)">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
<div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
<img alt="Tech Sales Architectures" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-4 mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">SalesFlow</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Sales</span>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">Tech Sales Architectures</h3>
</div>
<span className="text-xl font-semibold text-slate-900 shrink-0">$199</span>
</div>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            Technical sales methodologies for complex B2B SaaS environments.
                        </p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
<div className="flex items-center">
<div></div>
</div>
<button className="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm" onclick="toggleCart(3)">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
<div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
<img alt="Full Stack React &amp; Node Mastery" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-4 mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">CodeLab</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Tech</span>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">Full Stack React &amp; Node Mastery</h3>
</div>
<span className="text-xl font-semibold text-slate-900 shrink-0">$149</span>
</div>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            Build production-ready applications with modern JavaScript stack.
                        </p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
<div className="flex items-center">
<div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
<iconify-icon className="text-amber-500 text-sm" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-xs font-medium">Certificate</span>
</div>
</div>
<button className="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm" onclick="toggleCart(4)">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
<div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
<img alt="Financial Modeling for Founders" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-4 mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">FinTech</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Leadership</span>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">Financial Modeling for Founders</h3>
</div>
<span className="text-xl font-semibold text-slate-900 shrink-0">$299</span>
</div>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            Create robust financial models to secure funding and manage burn rate.
                        </p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
<div className="flex items-center">
<div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
<iconify-icon className="text-amber-500 text-sm" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-xs font-medium">Certificate</span>
</div>
</div>
<button className="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm" onclick="toggleCart(5)">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                
                            </button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100/50 flex flex-col sm:flex-row overflow-hidden transition-all duration-300 group">
<div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative bg-slate-100">
<img alt="Enterprise UX Strategy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-1 min-w-0">
<div className="flex justify-between items-start gap-4 mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">UXMastery</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Design</span>
</div>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight leading-snug line-clamp-2">Enterprise UX Strategy</h3>
</div>
<span className="text-xl font-semibold text-slate-900 shrink-0">$349</span>
</div>
<p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
                            Aligning user experience strategy with high-level business goals.
                        </p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100/80">
<div className="flex items-center">
<div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
<iconify-icon className="text-amber-500 text-sm" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-xs font-medium">Certificate</span>
</div>
</div>
<button className="min-w-[120px] py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm" onclick="toggleCart(6)">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon> Sell course
                                
                            </button>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 relative">
<div className="sticky top-24 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="font-medium text-slate-900 tracking-tight">Selected Courses</h3>
<span className="bg-slate-200 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-md" id="cart-count">0</span>
</div>
<div className="p-4 flex flex-col gap-3 min-h-[200px] max-h-[60vh] overflow-y-auto" id="cart-items">
<div className="flex flex-col items-center justify-center h-40 text-slate-400 gap-2" id="empty-cart">
<iconify-icon className="opacity-50" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
<span className="text-sm">No courses selected</span>
</div>
</div>
<div className="p-5 bg-slate-50 border-t border-slate-100 mt-auto">
<div className="flex justify-between items-end mb-5">
<span className="text-sm text-slate-500 font-medium">Total Value</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900" id="cart-total">$0.00</span>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors" onclick="clearCart()">
                                Clear
                            </button>
<button className="flex-[2] py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                                Confirm Selection
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
