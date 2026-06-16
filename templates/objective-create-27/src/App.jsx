import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
green: {
50: '#f0fdf4',
100: '#dcfce7',
500: '#22c55e',
600: '#16a34a',
700: '#15803d',
900: '#14532d',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // FAQ Logic
        document.querySelectorAll('.faq-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');

                // Toggle Current
                content.classList.toggle('open');
                icon.classList.toggle('open');
                
                // Optional: Close others (Accordian style)
                document.querySelectorAll('.faq-content').forEach(otherContent => {
                    if (otherContent !== content && otherContent.classList.contains('open')) {
                        otherContent.classList.remove('open');
                        otherContent.previousElementSibling.querySelector('i').classList.remove('open');
                    }
                });
            });
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<span className="text-xl font-medium tracking-tight text-gray-900">Green Habitat</span>
</div>
<div className="hidden md:flex gap-6">
<button className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Login</button>
<button className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Get Started</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                New: Corporate Travel Rewards
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 max-w-5xl mx-auto">
                Corporate Benefits: A New Era of Employee Engagement
            </h1>
<h2 className="text-xl md:text-2xl text-gray-500 font-normal mb-8 max-w-3xl mx-auto">
                Empower Your Workforce, Reduce Costs, and Enhance Employee Well-Being with Green Habitat
            </h2>
<p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                Corporate benefits have evolved into an essential tool for attracting and retaining top talent, improving financial efficiency, and building long-term client relationships. In today’s competitive market, offering meaningful, high-value benefits can significantly boost employee morale and company loyalty.
                <br/><br/>
                Green Habitat provides businesses with a smart and flexible travel rewards program that enhances corporate benefits, drives cost savings, and improves employee satisfaction. With access to 460,000+ hotels worldwide, businesses can offer employees and clients unique travel experiences, rewarding them with real value.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2">
                    Schedule a Live Demo
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                    Get Your 1-Year Advantage Pass
                </button>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none -z-10">
<div className="absolute top-20 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">Why Corporate Benefits Matter</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Enhance Employee Satisfaction and Retention</h3>
<p className="text-gray-600">Competitive benefits show employees they are valued, increasing motivation and long-term commitment to the company.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Improve Productivity and Performance</h3>
<p className="text-gray-600">Meaningful rewards, such as travel incentives, help employees recharge and return more focused and engaged, improving overall workplace efficiency.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Strengthen Employer Branding</h3>
<p className="text-gray-600">Companies that offer flexible, personalized perks are more attractive to potential hires and create a stronger corporate identity.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Optimize Financial Efficiency</h3>
<p className="text-gray-600">By leveraging corporate benefit solutions like exclusive travel rewards, businesses can save on costs while providing employees with highly desirable perks.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal md:col-span-2 lg:col-span-2">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Drive Client Loyalty</h3>
<p className="text-gray-600">Businesses that offer meaningful incentives to clients—such as exclusive travel deals—foster deeper partnerships and improve long-term customer retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Green Habitat: A Smart Corporate Benefit Solution</h2>
<p className="text-xl text-green-600 font-medium">Unparalleled Advantages for Businesses and Employees</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex gap-6 group reveal">
<div className="shrink-0">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="percent"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-2">Save Up to 60% on Accommodations</h4>
<p className="text-gray-600">Offer deeply discounted rates across a vast range of hotels, from cost-effective stays to premium experiences.</p>
</div>
</div>

<div className="flex gap-6 group reveal">
<div className="shrink-0">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-2">Improve Work-Life Balance</h4>
<p className="text-gray-600">Encourage employees to take well-earned breaks, reducing burnout and increasing overall happiness and productivity.</p>
</div>
</div>

<div className="flex gap-6 group reveal">
<div className="shrink-0">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sliders"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-2">Flexible and Customizable Rewards</h4>
<p className="text-gray-600">Employees and clients choose when and how to use their travel rewards, ensuring the benefit fits their needs.</p>
</div>
</div>

<div className="flex gap-6 group reveal">
<div className="shrink-0">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-2">Exclusive Hotel Deals for Internal Business Travel</h4>
<p className="text-gray-600">Companies can cut travel costs while ensuring employees have access to high-quality stays for work trips.</p>
</div>
</div>

<div className="flex gap-6 group reveal">
<div className="shrink-0">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="handshake"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-2">Enhance Client Relationships</h4>
<p className="text-gray-600">Strengthen partnerships by offering VIP clients travel perks, demonstrating appreciation in a meaningful way.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                        Premium Benefits
                    </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Green Habitat’s 1-Year Advantage Pass: The Smartest Corporate Benefit</h2>
<p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        A simple and flexible way to reward employees and clients, providing year-round access to top-tier travel options and savings.
                    </p>
<div className="space-y-6">

<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-green-500 shrink-0 mt-1" data-lucide="globe"></i>
<div>
<h4 className="text-lg font-medium text-white">460,000+ Hotel Partnerships</h4>
<p className="text-gray-400">Options across every budget range, ensuring there’s something for everyone.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-green-500 shrink-0 mt-1" data-lucide="user-check"></i>
<div>
<h4 className="text-lg font-medium text-white">Personalized Rewards</h4>
<p className="text-gray-400">Employees and clients can tailor their travel experiences to their needs and preferences.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-green-500 shrink-0 mt-1" data-lucide="laptop"></i>
<div>
<h4 className="text-lg font-medium text-white">Optimized Booking System</h4>
<p className="text-gray-400">A seamless booking platform that simplifies travel planning for employees and business trips.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-green-500 shrink-0 mt-1" data-lucide="coins"></i>
<div>
<h4 className="text-lg font-medium text-white">Substantial Savings</h4>
<p className="text-gray-400">Average employee savings of up to €1,750 per year, creating tangible financial benefits.</p>
</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-green-500/20 transform hover:scale-[1.02] transition-transform duration-500">
<div className="flex justify-between items-start mb-12">
<i className="w-12 h-12 text-white" data-lucide="leaf"></i>
<span className="px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">Corporate Pass</span>
</div>
<h3 className="text-3xl font-medium mb-2">Advantage Pass</h3>
<p className="text-green-100 mb-12">Annual Access Member</p>
<div className="flex justify-between items-end">
<div>
<p className="text-sm text-green-200 uppercase tracking-wider mb-1">Valid Thru</p>
<p className="font-mono text-xl">12/25</p>
</div>
<div className="text-right">
<p className="text-sm text-green-200 uppercase tracking-wider mb-1">Savings</p>
<p className="font-mono text-xl">up to 60%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">A Flexible Hotel Selection with Sustainability Transparency</h2>
</div>
<div className="reveal delay-100">
<p className="text-gray-600 mb-6">
                        At Green Habitat, we offer a diverse selection of hotels designed to accommodate different corporate travel needs. Whether for business trips, employee rewards, or client perks, our platform provides access to over 460,000 hotels worldwide, ranging from practical stays to luxury experiences.
                    </p>
<p className="text-gray-600">
                        We recognize that businesses and travelers have different priorities when selecting accommodations. That’s why we provide clear sustainability indicators, ensuring companies and employees can make informed decisions based on their values and preferences.
                    </p>
</div>
</div>

<div className="reveal">
<div className="text-center mb-12">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">Sustainability Transparency with Our Green Badge System</h3>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto">
<i className="w-7 h-7" data-lucide="sprout"></i>
</div>
<h4 className="text-xl font-medium text-center text-gray-900 mb-4">Eco Essential</h4>
<p className="text-center text-gray-600 text-base">Hotels that integrate basic sustainable practices, such as energy-efficient lighting, water-saving systems, and responsible waste management.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
<div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-6 mx-auto">
<i className="w-7 h-7" data-lucide="tree-deciduous"></i>
</div>
<h4 className="text-xl font-medium text-center text-gray-900 mb-4">Eco Plus</h4>
<p className="text-center text-gray-600 text-base">Hotels that go beyond the basics, featuring eco-friendly operations, locally sourced materials, and green certifications.</p>
</div>

<div className="bg-green-600 rounded-2xl p-8 shadow-lg transform md:-translate-y-4 hover:scale-105 transition-all text-white">
<div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white mb-6 mx-auto backdrop-blur-sm">
<i className="w-7 h-7" data-lucide="award"></i>
</div>
<h4 className="text-xl font-medium text-center mb-4">Sustainability Champions</h4>
<p className="text-center text-green-50 text-base">Hotels with the highest sustainability scores, prioritizing carbon reduction, renewable energy, and strong environmental initiatives.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<span className="text-green-600 font-medium tracking-wide uppercase text-sm">How It Works</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mt-2">Corporate Benefits That Deliver Real Impact</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

<div className="relative bg-white pt-4 reveal">
<div className="w-16 h-16 bg-white border-2 border-green-100 rounded-2xl flex items-center justify-center text-2xl font-semibold text-green-600 mb-6 mx-auto shadow-sm z-10">1</div>
<h3 className="text-xl font-medium text-center text-gray-900 mb-3">Enroll Your Team and Clients</h3>
<p className="text-center text-gray-600">Effortlessly provide employees and key clients with access to exclusive travel rewards.</p>
</div>

<div className="relative bg-white pt-4 reveal delay-100">
<div className="w-16 h-16 bg-white border-2 border-green-100 rounded-2xl flex items-center justify-center text-2xl font-semibold text-green-600 mb-6 mx-auto shadow-sm z-10">2</div>
<h3 className="text-xl font-medium text-center text-gray-900 mb-3">Unlock Year-Round Perks</h3>
<p className="text-center text-gray-600">Enjoy high-value travel benefits with significant cost savings on hotels worldwide.</p>
</div>

<div className="relative bg-white pt-4 reveal delay-200">
<div className="w-16 h-16 bg-white border-2 border-green-100 rounded-2xl flex items-center justify-center text-2xl font-semibold text-green-600 mb-6 mx-auto shadow-sm z-10">3</div>
<h3 className="text-xl font-medium text-center text-gray-900 mb-3">Track and Optimize Usage</h3>
<p className="text-center text-gray-600">Monitor engagement and see how travel rewards improve employee satisfaction and retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium tracking-tight mb-8">Why Choose Green Habitat?</h2>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<span className="text-xl font-medium text-gray-200">Trusted by Leading Companies</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<span className="text-xl font-medium text-gray-200">A Smarter Approach to Corporate Benefits</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<span className="text-xl font-medium text-gray-200">Cost-Effective and Impactful</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<span className="text-xl font-medium text-gray-200">Multi-Purpose: Employees, Clients, and Business Travel</span>
</li>
</ul>
</div>

<div className="relative h-96 bg-gray-800 rounded-3xl overflow-hidden reveal delay-200 border border-gray-700">

<img alt="Team meeting" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center max-w-xs">
<h4 className="text-3xl font-bold text-white mb-2">98%</h4>
<p className="text-gray-300 text-sm">Employee Satisfaction Rate</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 text-center mb-12 reveal">Frequently Asked Questions</h2>
<div className="space-y-4 reveal">

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-gray-900">Can employees use the pass for personal travel?</span>
<i className="w-5 h-5 text-gray-500 icon-rotate" data-lucide="chevron-down"></i>
</button>
<div className="faq-content bg-gray-50/50">
<div className="px-6 pb-6 text-gray-600">
                            Yes, the 1-Year Advantage Pass can be used for both work-related and personal travel, ensuring employees enjoy year-round benefits.
                        </div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-gray-900">How does this save businesses money?</span>
<i className="w-5 h-5 text-gray-500 icon-rotate" data-lucide="chevron-down"></i>
</button>
<div className="faq-content bg-gray-50/50">
<div className="px-6 pb-6 text-gray-600">
                            Companies can reduce costs by offering employees exclusive travel perks instead of costly, short-term incentives. Additionally, the pass provides substantial savings on internal business travel.
                        </div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-gray-900">How customizable is the program?</span>
<i className="w-5 h-5 text-gray-500 icon-rotate" data-lucide="chevron-down"></i>
</button>
<div className="faq-content bg-gray-50/50">
<div className="px-6 pb-6 text-gray-600">
                            Employees and clients can book accommodations based on their preferences, making this a highly flexible and appreciated benefit.
                        </div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow">
<button className="faq-toggle w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
<span className="text-lg font-medium text-gray-900">Does this align with CSR initiatives?</span>
<i className="w-5 h-5 text-gray-500 icon-rotate" data-lucide="chevron-down"></i>
</button>
<div className="faq-content bg-gray-50/50">
<div className="px-6 pb-6 text-gray-600">
                            While sustainability is a key consideration, Green Habitat offers a range of hotel options to ensure every employee or client finds the best fit.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 via-white to-white z-0"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
                Ready to Transform Your Corporate Benefits Strategy?
            </h2>
<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join Green Habitat and provide your employees, clients, and business travelers with meaningful, high-value rewards that enhance retention, engagement, and efficiency.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-xl shadow-green-600/20">
                    Schedule a Live Demo
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all duration-200">
                    Get Your 1-Year Advantage Pass
                </button>
</div>
</div>
</section>

<footer className="py-16 bg-gray-900 text-gray-400 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="flex items-center gap-2 mb-6 md:mb-0">
<div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="leaf"></i>
</div>
<span className="text-lg font-medium text-white">Green Habitat</span>
</div>
<div className="flex gap-6">
<a className="hover:text-green-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-green-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-green-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed border-t border-gray-800 pt-12">
<div>
<h5 className="text-white font-medium mb-3">TwoWings Foundation</h5>
<p>TwoWings, founded in 1996, supports small, sustainable education programs in developing regions with a focus on the education of women, youth, and children.</p>
</div>
<div>
<h5 className="text-white font-medium mb-3">Planting Hope Initiative</h5>
<p>Planting Hope is an initiative launched by the TwoWings Foundation that focuses on community development and environmental protection. They support educational and tree-planting programs in Colombia and Zambia, working to create opportunities for children, youth, and women while promoting sustainable agricultural practices and environmental health.</p>
</div>
</div>
<div className="mt-12 text-center text-xs text-gray-600">
                © 2023 Green Habitat. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
