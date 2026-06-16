import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cream: '#FFFBF2',
brand: {
dark: '#0F2829', // Dark green/teal
DEFAULT: '#123F3E',
accent: '#F97316', // Orange
light: '#E6F0EF',
peach: '#FDE6C6',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Close others
            document.querySelectorAll('.group button + div').forEach(div => {
                if (div !== content) {
                    div.style.height = '0';
                    div.style.opacity = '0';
                    div.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (content.style.height === '0px' || !content.style.height) {
                content.style.height = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.height = '0';
                content.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-3xl font-semibold tracking-tighter text-brand-dark" href="#">MH</a>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-600">
<a className="text-brand-dark relative flex flex-col items-center group" href="#">
                        Home
                        <span className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute -bottom-3 opacity-100 transition-all"></span>
</a>
<a className="hover:text-brand-dark transition-colors relative group" href="#">
                        Featured
                        <span className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute -bottom-3 opacity-0 group-hover:opacity-100 transition-all"></span>
</a>
<a className="hover:text-brand-dark transition-colors relative group" href="#">
                        Contact
                        <span className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute -bottom-3 opacity-0 group-hover:opacity-100 transition-all"></span>
</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2.5 w-72 shadow-sm focus-within:ring-2 focus-within:ring-brand-dark/20 transition-all">
<i className="w-5 h-5 text-gray-400 mr-3" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700" placeholder="What do you want to learn today?" type="text"/>
</div>
<button className="bg-brand-dark text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-brand-dark/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-dark/20">
                    Sign Up
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<svg className="absolute top-20 left-10 w-[800px] h-[800px] opacity-20 text-gray-300" viewbox="0 0 100 100">
<path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-100/30 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8 reveal active">
<h1 className="text-6xl lg:text-7xl font-medium tracking-tight text-brand-dark leading-[1.1]">
                    Learn Skills. Build <br/>
                    Your <span className="text-orange-400 relative inline-block">
                        Future
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                    Start your learning journey Now with our expert-led courses designed to boost your career.
                </p>
<button className="group bg-brand-dark text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-brand-dark/90 hover:shadow-xl hover:shadow-brand-dark/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                    Start For Free
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center reveal delay-200">

<div className="relative w-full max-w-md aspect-square">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-3xl"></div>

<div className="absolute top-0 right-10 animate-float z-20">
<div className="bg-orange-300 p-4 rounded-2xl shadow-xl transform rotate-12">
<i className="w-12 h-12 text-white" data-lucide="magnet"></i>
</div>
</div>
<div className="absolute bottom-20 left-0 animate-float-delayed z-20">
<div className="bg-orange-400 p-4 rounded-2xl shadow-xl transform -rotate-12">
<i className="w-12 h-12 text-white" data-lucide="megaphone"></i>
</div>
</div>
<div className="absolute top-1/2 right-0 animate-float z-20" style={{animationDelay: '1.5s'}}>
<div className="bg-yellow-500 p-3 rounded-full shadow-xl">
<i className="w-8 h-8 text-white" data-lucide="dollar-sign"></i>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden transform hover:scale-105 transition-transform duration-500">
<div className="h-full w-full bg-gradient-to-br from-orange-50 to-white p-6 flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 bg-orange-100/50 rounded-lg p-4 flex items-center justify-center">
<span className="text-orange-400 font-bold text-2xl tracking-tight">ADS</span>
<i className="w-8 h-8 text-orange-400 ml-2" data-lucide="bar-chart-2"></i>
</div>
<div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-12 bg-cream border border-orange-100 rounded-2xl p-8 shadow-xl shadow-orange-900/5 relative z-20 reveal delay-300 transform lg:-translate-y-12">
<div className="grid grid-cols-3 gap-8 divide-x divide-orange-200/50 text-center">
<div className="group">
<h3 className="text-4xl font-semibold text-brand-dark tracking-tight mb-1 group-hover:scale-110 transition-transform duration-300">5k+</h3>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Courses</p>
</div>
<div className="group">
<h3 className="text-4xl font-semibold text-brand-dark tracking-tight mb-1 group-hover:scale-110 transition-transform duration-300">100+</h3>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Expert Instructors</p>
</div>
<div className="group">
<h3 className="text-4xl font-semibold text-brand-dark tracking-tight mb-1 group-hover:scale-110 transition-transform duration-300">2k+</h3>
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Certificates Awarded</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/50">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium tracking-tight text-brand-dark mb-6">Career outcomes from learners</h2>
<p className="text-xl text-gray-600 leading-relaxed mb-10">
                    77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.<sup className="text-sm">1</sup>
</p>
<button className="bg-brand-dark text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-dark/90 hover:shadow-xl hover:shadow-brand-dark/20 transition-all duration-300">
                    Get 3 Free Lessons Now
                </button>
</div>
<div className="relative reveal delay-200">
<div className="relative h-[500px] w-full rounded-tl-3xl rounded-tr-[100px] rounded-bl-3xl rounded-br-3xl overflow-hidden shadow-2xl group">
<img alt="Modern Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>
<div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">

<div className="flex flex-wrap gap-3 mb-12 reveal">
<button className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-transform active:scale-95">All</button>
<button className="bg-white border border-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:border-brand-dark hover:text-brand-dark transition-colors active:scale-95">Ui Ux Design</button>
<button className="bg-white border border-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:border-brand-dark hover:text-brand-dark transition-colors active:scale-95">Motion Graphics</button>
<button className="bg-white border border-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:border-brand-dark hover:text-brand-dark transition-colors active:scale-95">Graphics Design</button>
<button className="bg-white border border-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:border-brand-dark hover:text-brand-dark transition-colors active:scale-95">Animation</button>
<button className="bg-white border border-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:border-brand-dark hover:text-brand-dark transition-colors active:scale-95">Web Development</button>
</div>
<div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[500px]">

<div className="lg:col-span-4 bg-brand-peach rounded-3xl p-10 flex flex-col justify-center items-start relative overflow-hidden reveal shadow-lg">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl"></div>
<h2 className="text-4xl font-medium tracking-tight text-brand-dark mb-6 relative z-10">Our Courses</h2>
<p className="text-lg text-brand-dark/80 mb-10 leading-relaxed relative z-10">
                        Explore courses designed for every level — from beginner to professional.
                    </p>
<button className="bg-transparent border-2 border-brand-dark text-brand-dark px-8 py-3 rounded-full font-medium text-lg hover:bg-brand-dark hover:text-white transition-all duration-300 relative z-10">
                        Explore More
                    </button>
</div>

<div className="lg:col-span-8 flex gap-6 overflow-x-auto hide-scrollbar pb-4 reveal delay-200">

<div className="min-w-[360px] bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
<div className="h-48 bg-orange-50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center group-hover:bg-orange-100 transition-colors">
<i className="w-20 h-20 text-orange-300 group-hover:scale-110 transition-transform duration-500" data-lucide="layout-template"></i>
<div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm p-2 rounded-full">
<i className="w-5 h-5 text-gray-600" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="px-2 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-brand-dark mb-2">Social Media Marketing</h3>
<div className="flex justify-between items-center text-sm text-gray-500 mb-6">
<span>Beginner to Advanced</span>
<span>3 Hours</span>
</div>
<button className="w-full mt-auto bg-brand-dark text-white py-3 rounded-xl text-sm font-medium hover:bg-brand-dark/90 transition-colors">Start Now</button>
</div>
</div>

<div className="min-w-[360px] bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
<div className="h-48 bg-indigo-50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
<i className="w-20 h-20 text-indigo-300 group-hover:scale-110 transition-transform duration-500" data-lucide="smartphone"></i>
<div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm p-2 rounded-full">
<i className="w-5 h-5 text-gray-600" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="px-2 flex-1 flex flex-col">
<h3 className="text-xl font-medium text-brand-dark mb-2">Digital Marketing</h3>
<div className="flex justify-between items-center text-sm text-gray-500 mb-6">
<span>Beginner to Advanced</span>
<span>3 Hours</span>
</div>
<button className="w-full mt-auto bg-brand-dark text-white py-3 rounded-xl text-sm font-medium hover:bg-brand-dark/90 transition-colors">Start Now</button>
</div>
</div>
</div>

<div className="lg:col-span-12 flex justify-end gap-3 mt-4">
<button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-dark/90 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center text-brand-dark mb-16 max-w-2xl mx-auto leading-tight reveal">
                What subscribers are achieving through learning
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 reveal border border-transparent hover:border-orange-100">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="font-semibold text-brand-dark text-lg">Abigail P.</h4>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-gray-600 leading-relaxed text-lg">
                        "I have a full-time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achieve my goals. My Coursera Plus subscription motivated me to keep learning."
                    </p>
</div>

<div className="bg-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 reveal delay-100 border border-transparent hover:border-orange-100">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="font-semibold text-brand-dark text-lg">James L.</h4>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-gray-600 leading-relaxed text-lg">
                        "The structured learning path helped me transition from sales to data analytics in just 6 months. The projects were practical and challenging."
                    </p>
</div>

<div className="bg-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 reveal delay-200 border border-transparent hover:border-orange-100">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="font-semibold text-brand-dark text-lg">Sarah M.</h4>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-gray-600 leading-relaxed text-lg">
                        "Being able to learn at my own pace was crucial. The community support was surprising and very helpful when I got stuck on assignments."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-medium tracking-tight text-center text-brand-dark mb-16 reveal">Frequently asked questions</h2>
<div className="max-w-3xl mx-auto space-y-4 reveal delay-100 border border-gray-200 rounded-3xl p-8 bg-white shadow-sm">

<div className="group">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-brand-dark">How do i know this is good for me?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-brand-dark" data-lucide="chevron-down"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0">
<div className="pb-6 pt-2 text-gray-600 bg-cream/50 p-4 rounded-xl mt-2">
                            This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </div>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="group">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-brand-dark">How do i Know this is good for me?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-brand-dark" data-lucide="chevron-down"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0">
<div className="pb-6 pt-2 text-gray-600 bg-cream/50 p-4 rounded-xl mt-2">
                            Content for the second question goes here. Detailed explanation helps users understand the value proposition.
                        </div>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="group">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-brand-dark">How do i Know this is good for me?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-brand-dark" data-lucide="chevron-down"></i>
</button>
<div className="h-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0">
<div className="pb-6 pt-2 text-gray-600 bg-cream/50 p-4 rounded-xl mt-2">
                            More details about the course structure and benefits would be placed here.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark text-white py-24 px-6 text-center">
<div className="max-w-4xl mx-auto reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Learn Skills. Build Your Future</h2>
<button className="bg-white text-brand-dark px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg shadow-black/20">
                Start For Free
            </button>
</div>
</footer>


    </>
  );
}
