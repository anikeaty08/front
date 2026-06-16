import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Vazirmatn', 'sans-serif'],
},
colors: {
primary: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1',
600: '#4f46e5',
900: '#312e81',
},
dark: {
900: '#020617', // Slate 950
800: '#0f172a', // Slate 900
700: '#1e293b', // Slate 800
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let isLoggedIn = false;
        let cartCount = 0;
        let currentTheme = localStorage.getItem('theme') || 'dark';

        // Fake Data
        const books = [
            { id: 1, title: "صد سال تنهایی", author: "گابریل گارسیا مارکز", price: 120000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+1&font=bebas" },
            { id: 2, title: "جنایت و مکافات", author: "داستایوفسکی", price: 150000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+2&font=bebas" },
            { id: 3, title: "شازده کوچولو", author: "آنتوان دو سنت اگزوپری", price: 80000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+3&font=bebas" },
            { id: 4, title: "کوری", author: "ژوزه ساراماگو", price: 110000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+4&font=bebas" },
            { id: 5, title: "بیشعوری", author: "خاویر کرمنت", price: 95000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+5&font=bebas" },
            { id: 6, title: "ملت عشق", author: "الیف شافاک", price: 135000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+6&font=bebas" },
            { id: 7, title: "مزرعه حیوانات", author: "جورج اورول", price: 75000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+7&font=bebas" },
            { id: 8, title: "دنیای صوفی", author: "یوستین گردر", price: 160000, image: "https://fakeimg.pl/400x600/1e293b/6366f1?text=Book+8&font=bebas" },
        ];

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            applyTheme();
            renderBooks(books);
        });

        // Theme Logic
        function toggleTheme() {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
            applyTheme();
        }

        function applyTheme() {
            const html = document.documentElement;
            const icon = document.getElementById('themeIcon');
            if (currentTheme === 'dark') {
                html.classList.add('dark');
                icon.setAttribute('icon', 'solar:sun-linear');
            } else {
                html.classList.remove('dark');
                icon.setAttribute('icon', 'solar:moon-linear');
            }
        }

        // Render Books
        function renderBooks(data) {
            const grid = document.getElementById('booksGrid');
            const noResults = document.getElementById('noResults');
            grid.innerHTML = '';
            
            if (data.length === 0) {
                noResults.classList.remove('hidden');
                return;
            }
            noResults.classList.add('hidden');

            data.forEach(book => {
                const card = `
                    <div class="group flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div class="relative aspect-[2/3] overflow-hidden bg-gray-800">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${book.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                                <button onclick="addToCart(${book.id})" class="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon></button>
                                <button class="p-3 bg-white/20 text-white backdrop-blur-md rounded-full hover:scale-110 transition-transform"><iconify-icon icon="solar:eye-linear" width="20"></iconify-icon></button>
                            </div>
                        </div>
                        <div class="p-4 flex-1 flex flex-col">
                            <h3 class="font-bold text-gray-800 dark:text-gray-100 truncate mb-1">${book.title}</h3>
                            <p class="text-xs text-gray-500 mb-3">${book.author}</p>
                            <div class="mt-auto flex items-center justify-between">
                                <span class="font-semibold text-primary-600 dark:text-primary-400 text-sm">${book.price.toLocaleString('fa-IR')} <span class="text-[10px] text-gray-500">تومان</span></span>
                            </div>
                        </div>
                    </div>
                `;
                grid.innerHTML += card;
            });
        }

        // Search Logic
        function handleSearch(query) {
            const filtered = books.filter(b => 
                b.title.includes(query) || b.author.includes(query)
            );
            renderBooks(filtered);
        }

        function handleSearchFocus() {
            document.getElementById('searchInput').focus();
            window.scrollTo(0, document.getElementById('booksSection').offsetTop - 100);
        }

        // Auth Logic
        function openLoginModal(mode = 'login') {
            document.getElementById('loginModal').classList.remove('hidden');
        }

        function closeLoginModal() {
            document.getElementById('loginModal').classList.add('hidden');
        }

        function handleGoogleLogin() {
            const btn = document.getElementById('googleLoader');
            btn.classList.remove('hidden');
            
            // Simulate API call
            setTimeout(() => {
                btn.classList.add('hidden');
                loginSuccess();
            }, 2000);
        }

        function handleFormLogin(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerHTML = '<div class="loader mx-auto border-white border-l-transparent w-5 h-5"></div>';
            
            setTimeout(() => {
                loginSuccess();
            }, 1500);
        }

        function loginSuccess() {
            isLoggedIn = true;
            closeLoginModal();
            updateUIState();
            
            // Show toast or panel
            toggleUserPanel();
        }

        function logout() {
            isLoggedIn = false;
            toggleUserPanel();
            updateUIState();
        }

        function updateUIState() {
            const authBtns = document.getElementById('authButtons');
            const userProfile = document.getElementById('userProfile');
            const cartBtn = document.getElementById('cartBtn');

            if (isLoggedIn) {
                authBtns.classList.add('hidden');
                userProfile.classList.remove('hidden');
                cartBtn.classList.remove('hidden'); // Show cart only when logged in
            } else {
                authBtns.classList.remove('hidden');
                userProfile.classList.add('hidden');
                cartBtn.classList.add('hidden');
            }
        }

        // Cart Logic
        function addToCart(id) {
            if (!isLoggedIn) {
                openLoginModal();
                return;
            }
            cartCount++;
            const badge = document.getElementById('cartBadge');
            badge.innerText = cartCount.toLocaleString('fa-IR');
            badge.classList.remove('opacity-0', 'scale-0');
            
            // Simple animation feedback
            badge.parentElement.classList.add('scale-110');
            setTimeout(() => badge.parentElement.classList.remove('scale-110'), 150);
        }

        // Panel Logic
        function toggleUserPanel() {
            const panel = document.getElementById('userPanel');
            const overlay = document.getElementById('panelOverlay');
            
            if (panel.classList.contains('translate-x-full')) {
                panel.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                panel.classList.add('translate-x-full');
                overlay.classList.add('hidden');
            }
        }
        
        // Subscription check
        function checkLoginForPurchase() {
            if (!isLoggedIn) {
                openLoginModal();
            } else {
                alert('هدایت به درگاه بانکی...');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-40 glass border-b border-gray-200 dark:border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

<div className="flex items-center gap-4">
<button className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="text-xl font-bold tracking-tight flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
<span className="font-black text-lg">I</span>
</div>
<span>IRAN<span className="text-primary-600">LIB</span></span>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative">
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full py-2.5 pr-10 pl-4 bg-gray-100 dark:bg-white/5 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-black rounded-xl text-sm transition-all outline-none" id="searchInput" oninput="handleSearch(this.value)" placeholder="جستجو در بین هزاران کتاب..." type="text"/>
</div>

<div className="flex items-center gap-2">

<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400" onclick="toggleTheme()">
<iconify-icon icon="solar:moon-linear" id="themeIcon" width="22"></iconify-icon>
</button>

<button className="relative hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group" id="cartBtn" onclick="toggleCart()">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="22"></iconify-icon>
<span className="absolute top-1 left-1 w-4 h-4 bg-primary-600 text-white text-[10px] flex items-center justify-center rounded-full opacity-0 scale-0 transition-all" id="cartBadge">0</span>
</button>

<div className="flex items-center gap-2" id="authButtons">
<button className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors" onclick="openLoginModal()">
                        ورود
                    </button>
<button className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white rounded-xl shadow-lg shadow-primary-500/20 transition-all transform hover:scale-105" onclick="openLoginModal('register')">
<iconify-icon icon="solar:user-plus-linear" width="18"></iconify-icon>
<span className="hidden md:inline">عضویت رایگان</span>
<span className="md:hidden">ورود</span>
</button>
</div>

<div className="hidden relative" id="userProfile">
<button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-gray-200 dark:border-white/10 hover:border-primary-500 transition-colors" onclick="toggleUserPanel()">
<img alt="User" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=User&amp;background=6366f1&amp;color=fff"/>
<span className="text-xs font-semibold hidden md:block">حساب کاربری</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<div className="md:hidden fixed top-16 w-full px-4 py-2 z-30 glass border-b border-gray-200 dark:border-white/5">
<div className="relative">
<iconify-icon className="absolute right-3 top-3 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full py-2.5 pr-10 pl-4 bg-gray-100 dark:bg-white/5 rounded-xl text-sm outline-none" oninput="handleSearch(this.value)" placeholder="جستجو..." type="text"/>
</div>
</div>
<main className="pt-32 pb-20 px-4 min-h-screen">

<section className="max-w-7xl mx-auto mb-20 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
</span>
                نسخه جدید کتابخانه ایران
            </div>
<h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                مرجع تخصصی <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">کتاب و دانش</span>
<br/>در دستان شما
            </h1>
<p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                دسترسی نامحدود به هزاران کتاب صوتی و متنی. با اشتراک ویژه، کتابخانه را به خانه خود بیاورید. جستجوی هوشمند و مطالعه آنلاین.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2" href="#vip">
<iconify-icon className="text-yellow-500" icon="solar:crown-star-bold"></iconify-icon>
                    خرید اشتراک ویژه
                </a>
<button className="w-full sm:w-auto px-8 py-3.5 border border-gray-200 dark:border-white/10 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" onclick="handleSearchFocus()">
                    کاوش کتاب‌ها
                </button>
</div>
</section>

<section className="max-w-5xl mx-auto mb-24 scroll-mt-28" id="vip">
<div className="text-center mb-10">
<h2 className="text-2xl font-bold mb-2">اشتراک ویژه کتابخانه</h2>
<p className="text-gray-500 text-sm">به جمع ۱۰۰,۰۰۰ کاربر حرفه‌ای بپیوندید</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-gray-500">رایگان</span>
<div className="text-3xl font-black mt-2">۰ <span className="text-sm font-normal text-gray-500">تومان</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> دسترسی به کتب عمومی</li>
<li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"><iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> امکان جستجو</li>
<li className="flex items-center gap-3 text-sm text-gray-400"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> دانلود آفلاین</li>
</ul>
<button className="w-full py-3 rounded-xl border border-gray-200 dark:border-white/10 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">پلن فعلی</button>
</div>

<div className="relative p-8 rounded-3xl border border-primary-500/30 bg-gradient-to-b from-primary-500/10 to-transparent flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                        پیشنهاد ویژه
                    </div>
<div className="mb-4">
<span className="text-sm font-medium text-primary-500">اشتراک حرفه‌ای</span>
<div className="text-3xl font-black mt-2">۹۹,۰۰۰ <span className="text-sm font-normal text-gray-500">تومان / ماهانه</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"><iconify-icon className="text-primary-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> دسترسی به تمام ۱۵,۰۰۰ کتاب</li>
<li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"><iconify-icon className="text-primary-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> کتاب‌های صوتی اختصاصی</li>
<li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"><iconify-icon className="text-primary-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> دانلود نامحدود و آفلاین</li>
<li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"><iconify-icon className="text-primary-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> پشتیبانی اولویت‌دار</li>
</ul>
<button className="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-500 shadow-lg shadow-primary-500/25 transition-all" onclick="checkLoginForPurchase()">خرید اشتراک</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto" id="booksSection">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-bold">تازه‌های نشر</h2>
<div className="flex gap-2">
<button className="p-2 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"><iconify-icon icon="solar:sort-linear"></iconify-icon></button>
<button className="p-2 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"><iconify-icon icon="solar:filter-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" id="booksGrid">

</div>
<div className="hidden text-center py-20" id="noResults">
<div className="inline-flex p-4 rounded-full bg-gray-100 dark:bg-white/5 mb-4 text-gray-400">
<iconify-icon icon="solar:magnifer-bug-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">نتیجه‌ای یافت نشد</h3>
<p className="text-gray-500 text-sm">لطفاً کلمات کلیدی دیگری را امتحان کنید.</p>
</div>
</section>
</main>

<footer className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-dark-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">I</div>
<span className="font-bold text-lg">کتابخانه ایران</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-4">
                        مرجع قانونی دانلود کتاب الکترونیک و صوتی. با ما همراه شوید تا دنیای دانش را کشف کنید.
                    </p>
<div className="flex gap-3">
<a className="text-gray-400 hover:text-primary-500" href="#"><iconify-icon icon="solar:brand-instagram-bold" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-primary-500" href="#"><iconify-icon icon="solar:brand-twitter-bold" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-primary-500" href="#"><iconify-icon icon="solar:brand-telegram-bold" width="24"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold mb-4">دسترسی سریع</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-primary-500" href="#">درباره ما</a></li>
<li><a className="hover:text-primary-500" href="#">تماس با ما</a></li>
<li><a className="hover:text-primary-500" href="#">قوانین و مقررات</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">دسته‌بندی‌ها</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-primary-500" href="#">رمان و داستان</a></li>
<li><a className="hover:text-primary-500" href="#">روانشناسی</a></li>
<li><a className="hover:text-primary-500" href="#">تاریخی</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">اپلیکیشن</h4>
<div className="space-y-2">
<button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-white/10 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-sm">
<iconify-icon icon="solar:apple-bold"></iconify-icon> دانلود iOS
                        </button>
<button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-white/10 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-sm">
<iconify-icon icon="solar:android-bold"></iconify-icon> دانلود Android
                        </button>
</div>
</div>
</div>
<div className="text-center text-xs text-gray-500 border-t border-gray-200 dark:border-white/5 pt-8">
                تمام حقوق محفوظ است © ۱۴۰۳
            </div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="loginModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeLoginModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
<div className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 slide-up">

<div className="p-6 text-center border-b border-gray-100 dark:border-white/5">
<h3 className="text-xl font-bold mb-1">ورود به حساب کاربری</h3>
<p className="text-sm text-gray-500">برای استفاده از امکانات سایت وارد شوید</p>
</div>

<div className="p-6">

<button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors mb-4 group relative overflow-hidden" onclick="handleGoogleLogin()">
<iconify-icon icon="logos:google-icon" width="20"></iconify-icon>
<span className="text-sm font-semibold text-gray-700 dark:text-gray-200">ورود با گوگل</span>
<div className="hidden absolute inset-0 bg-white/80 dark:bg-black/50 flex items-center justify-center" id="googleLoader">
<div className="loader"></div>
</div>
</button>
<div className="relative flex py-2 items-center mb-4">
<div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
<span className="flex-shrink-0 mx-4 text-gray-400 text-xs">یا ورود با ایمیل</span>
<div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
</div>
<form className="space-y-4" onsubmit="handleFormLogin(event)">
<div>
<label className="block text-xs text-gray-500 mb-1">ایمیل یا شماره موبایل</label>
<input className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:border-primary-500 outline-none transition-colors dir-ltr text-right" placeholder="user@example.com" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1">رمز عبور</label>
<input className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:border-primary-500 outline-none transition-colors dir-ltr text-right" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary-500/20" type="submit">
                            ورود به حساب
                        </button>
</form>
<div className="mt-4 text-center">
<a className="text-xs text-primary-500 hover:underline" href="#">رمز عبور را فراموش کرده‌اید؟</a>
</div>
</div>

<div className="p-4 bg-gray-50 dark:bg-white/5 text-center text-sm text-gray-500">
                    حساب کاربری ندارید؟ <a className="text-primary-500 font-bold hover:underline" href="#">ثبت‌نام کنید</a>
</div>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-80 bg-white dark:bg-dark-900 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 border-l border-gray-200 dark:border-white/5 flex flex-col" id="userPanel">
<div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
<h3 className="font-bold">پنل کاربری</h3>
<button className="text-gray-400 hover:text-red-500" onclick="toggleUserPanel()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="p-6 flex flex-col items-center border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
<img className="w-20 h-20 rounded-full mb-3 border-4 border-white dark:border-dark-800 shadow-lg" src="https://ui-avatars.com/api/?name=Ali+Reza&amp;background=6366f1&amp;color=fff"/>
<h4 className="font-bold text-lg">علی رضایی</h4>
<span className="text-xs text-gray-500">ali.reza@gmail.com</span>
<div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/10 text-yellow-600 text-xs rounded-full border border-yellow-500/20">
<iconify-icon icon="solar:crown-linear"></iconify-icon> کاربر عادی
            </div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-sm transition-colors" href="#">
<iconify-icon className="text-gray-400" icon="solar:bookmark-square-linear"></iconify-icon> کتاب‌های من
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-sm transition-colors" href="#">
<iconify-icon className="text-gray-400" icon="solar:wallet-linear"></iconify-icon> کیف پول
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-sm transition-colors" href="#">
<iconify-icon className="text-gray-400" icon="solar:settings-linear"></iconify-icon> تنظیمات
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 text-sm transition-colors mt-4" href="#vip" onclick="toggleUserPanel()">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon> ارتقا به ویژه
            </a>
</div>
<div className="p-4 border-t border-gray-100 dark:border-white/5">
<button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 text-sm font-medium transition-colors" onclick="logout()">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> خروج از حساب
            </button>
</div>
</div>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden transition-opacity" id="panelOverlay" onclick="toggleUserPanel()"></div>


    </>
  );
}
