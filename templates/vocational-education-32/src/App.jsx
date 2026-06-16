import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data Store for News Items
        const newsData = {
            1: {
                title: "Graduates Launch New Agri-Tech App to Support Local Farmers",
                date: "Oct 12, 2024",
                category: "Innovation & Tech",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">In a remarkable display of innovation meeting necessity, three graduates from IVIEN's Technology Hub have launched "HarvestConnect," a mobile application designed to bridge the gap between small-scale farmers and urban markets.</p>
                    <p class="mb-6">The team, comprised of software development students and data analytics trainees, identified supply chain inefficiencies as a major hurdle for local agriculture. "We saw that farmers were losing produce because they couldn't find buyers in time," explains team lead Marcus. "Our app uses the skills we learned in the Tech Hub—specifically React Native and Node.js—to solve a real problem."</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">From Classroom to Market</h3>
                    <p class="mb-6">The project began as a capstone assignment during the 6-month Software Development intensive. With mentorship from IVIEN's industry partners, the team refined their prototype, conducted user testing with local cooperatives, and successfully deployed the beta version last month.</p>
                    <p>IVIEN is proud to support initiatives that demonstrate the tangible impact of vocational technology training. The team has now been accepted into a regional incubator to scale their operations further.</p>
                `
            },
            2: {
                title: "Carpentry Cohort Revitalizes Community Center",
                date: "Sep 28, 2024",
                category: "Vocational Skills",
                image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">Practical skills are best learned by doing. That is the philosophy behind IVIEN's latest Vocational Training initiative, which saw twenty carpentry and joinery students renovating the historic Eastside Community Center.</p>
                    <p class="mb-6">Over the course of two weeks, students replaced flooring, repaired structural beams, and built custom furniture for the center's library. This project was not just a simulation; it was a live site environment requiring safety compliance, project management, and precision craftsmanship.</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">Building More Than Furniture</h3>
                    <p class="mb-6">"It gave us confidence," says trainee Sarah. "Using tools in the workshop is one thing, but fixing a 50-year-old door frame requires problem-solving you can't learn from a book."</p>
                    <p>The project was supervised by master craftsmen partners, ensuring that the work met industry standards while providing the students with a portfolio-worthy achievement before graduation.</p>
                `
            },
            3: {
                title: "Alumni Spotlight: From Classroom Idea to Sustainable Fashion Brand",
                date: "Aug 15, 2024",
                category: "Entrepreneurship",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">Sarah T., a graduate of the IVIEN Entrepreneurship & Fashion Design program, has officially launched "EcoThread," a clothing line dedicated to upcycling textile waste into high-fashion garments.</p>
                    <p class="mb-6">Sarah entered IVIEN with basic sewing skills but lacked the business acumen to monetize her talent. Through the Entrepreneurship module, she learned about cost pricing, branding, and market validation. Her final pitch deck attracted seed funding from a local angel investor network connected to the institute.</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">Sustainable Enterprise</h3>
                    <p class="mb-6">"IVIEN didn't just teach me how to stitch; they taught me how to sell," Sarah notes. "The mentorship on the business side was critical. I learned how to register my company, manage taxes, and market my products online."</p>
                    <p>EcoThread now employs two other IVIEN graduates and is currently fulfilling orders for boutiques across the city.</p>
                `
            },
            4: {
                title: "Upcoming Innovation Hackathon 2024",
                date: "Jul 02, 2024",
                category: "Events",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">IVIEN is excited to announce the 2024 Innovation Hackathon, a 48-hour event bringing together coders, designers, and tradespeople to solve local infrastructure challenges.</p>
                    <p class="mb-6">This year's theme is "Smart Cities, Local Solutions." Participants will form cross-disciplinary teams to prototype solutions for issues ranging from waste management to energy efficiency in small businesses.</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">Why Participate?</h3>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>Network:</strong> Meet industry leaders and potential employers.</li>
                        <li><strong>Win:</strong> Cash prizes and incubation support for winning ideas.</li>
                        <li><strong>Learn:</strong> Access workshops on rapid prototyping and pitching.</li>
                    </ul>
                    <p>Registration is open to all current students and alumni. Visit the student portal or contact the events office to sign up your team.</p>
                `
            },
            5: {
                title: "Empowering the Next Gen: Youth and Early-Career Learners",
                date: "May 18, 2024",
                category: "Youth Development",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">The transition from academic education to the professional world is often fraught with challenges. IVIEN’s new initiative for Youth and Early-Career Learners addresses this gap directly, providing mentorship and practical exposure before graduation.</p>
                    <p class="mb-6">"The modern workforce demands more than just a degree," states Dr. Amina, Head of Youth Programs. "Employers are looking for adaptability, digital literacy, and problem-solving skills." Our new weekend bootcamps offer teenagers and undergraduates a taste of professional environments in fields ranging from digital marketing to solar installation.</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">Building Confidence Early</h3>
                    <p class="mb-6">Participants work on live projects alongside seasoned professionals. This early exposure helps dismantle the fear of failure and instills a growth mindset. Recent surveys indicate that 85% of program participants felt more prepared for job interviews after just three sessions.</p>
                    <p>By empowering youth with marketable skills early, we are not just helping them find jobs; we are helping them define their careers.</p>
                `
            },
            6: {
                title: "From Side Hustle to SME: The Journey of Small Business Ownership",
                date: "Apr 10, 2024",
                category: "Small Business",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">In today's economy, the line between a hobby and a business is often blurred. At IVIEN, we are formalizing that transition. Our latest series of workshops focuses specifically on Small Business Ownership, guiding artisans and freelancers through the complexities of scaling up.</p>
                    <p class="mb-6">The curriculum covers the unglamorous but vital aspects of entrepreneurship: bookkeeping, legal registration, supply chain management, and customer retention strategies. "I knew how to bake," says alumni James, owner of Urban Crumb Bakery, "but I didn't know how to price my bread for profit until I took the SME module."</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">Sustainable Growth</h3>
                    <p class="mb-6">Small businesses are the backbone of the local economy. By equipping owners with the right tools, IVIEN ensures that these enterprises survive past their first critical year. The program also facilitates networking, allowing owners to trade services and support one another.</p>
                    <p>We are seeing a wave of registered, tax-paying businesses emerging from our cohorts, contributing significantly to community development.</p>
                `
            },
            7: {
                title: "The Critical Role of Vocational & Entrepreneurship Education",
                date: "Mar 22, 2024",
                category: "Education",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
                content: `
                    <p class="mb-6">For too long, vocational education was viewed as a secondary option. Today, it is the primary driver of economic resilience. Combining technical trade skills with entrepreneurial thinking is creating a new class of workforce: the 'Task-Preneur'.</p>
                    <p class="mb-6">Vocational training provides the 'hard skills'—the ability to build, code, repair, or design. Entrepreneurship education provides the 'soft skills'—the ability to sell, manage, and innovate. Together, they form a powerful educational model that reduces unemployment and fosters self-reliance.</p>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 mt-8">A Dual Approach</h3>
                    <p class="mb-6">At IVIEN, we believe that a carpenter should also know how to draft a business plan, and a software developer should understand market fit. This dual approach ensures that our graduates are not just employees waiting for instructions, but innovators capable of creating value.</p>
                    <p>As industries evolve, the ability to pivot and apply practical skills in new ways will be the defining characteristic of the successful modern professional.</p>
                `
            }
        };

        // Simple routing logic to toggle sections
        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Update Nav State
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => {
                // If we are on news-detail, highlight 'news' button
                const effectiveTarget = (pageId === 'news-detail') ? 'news' : pageId;
                
                if(btn.dataset.target === effectiveTarget) {
                    btn.classList.remove('text-gray-500', 'hover:bg-gray-50');
                    btn.classList.add('text-gray-900', 'bg-gray-100/50', 'shadow-sm');
                } else {
                    btn.classList.add('text-gray-500', 'hover:bg-gray-50');
                    btn.classList.remove('text-gray-900', 'bg-gray-100/50', 'shadow-sm');
                }
            });

            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Function to load news details
        function showNewsDetail(id) {
            const data = newsData[id];
            if (!data) return;

            // Populate Elements
            document.getElementById('detail-title').innerText = data.title;
            document.getElementById('detail-date').innerText = data.date;
            document.getElementById('detail-category').innerText = data.category;
            document.getElementById('detail-image').src = data.image;
            document.getElementById('detail-content').innerHTML = data.content;

            // Switch view
            switchPage('news-detail');
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            switchPage('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full px-6 py-4 md:px-12 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-gray-200/50">
<div className="flex max-w-[1440px] mr-auto ml-auto items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="switchPage('home')">
<div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-br-xl rounded-tl-xl rounded-tr-md rounded-bl-md shadow-lg shadow-gray-900/20">
<iconify-icon height="18" icon="solar:plain-3-bold-duotone" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight leading-none">IVIEN</span>
</div>

<div className="hidden lg:flex items-center gap-1 bg-white p-1 rounded-full border border-gray-200/80 shadow-sm">
<button className="nav-btn px-4 py-1.5 text-xs font-medium rounded-full transition-all hover:text-gray-900 text-gray-900 bg-gray-100/50 shadow-sm" data-target="home" onclick="switchPage('home')">Home</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full transition-all hover:text-gray-900 hover:bg-gray-50" data-target="about" onclick="switchPage('about')">About</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full transition-all hover:text-gray-900 hover:bg-gray-50" data-target="programs" onclick="switchPage('programs')">Programs</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full transition-all hover:text-gray-900 hover:bg-gray-50" data-target="news" onclick="switchPage('news')">News</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full transition-all hover:text-gray-900 hover:bg-gray-50" data-target="contact" onclick="switchPage('contact')">Contact</button>
</div>

<div className="hidden md:flex gap-3">
<button className="bg-gray-900 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10 flex items-center gap-2 group" onclick="switchPage('contact')">
<span className="">Get Started</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<button className="lg:hidden p-2 text-gray-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" style={{color: 'rgb(75, 85, 99)'}} width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-gray-200 p-6 flex flex-col gap-4 lg:hidden shadow-xl z-50" id="mobile-menu">
<button className="text-left text-sm font-medium text-gray-600" onclick="switchPage('home')">Home</button>
<button className="text-left text-sm font-medium text-gray-600" onclick="switchPage('about')">About</button>
<button className="text-left text-sm font-medium text-gray-600" onclick="switchPage('programs')">Programs</button>
<button className="text-left text-sm font-medium text-gray-600" onclick="switchPage('news')">News</button>
<button className="text-left text-sm font-medium text-gray-600" onclick="switchPage('contact')">Contact</button>
</div>
</nav>

<div className="flex-grow w-full max-w-[1440px] mx-auto" id="content-container">

<section className="page-section fade-in px-6 md:px-12 pt-12 pb-20" id="home">

<div className="flex flex-col text-center max-w-4xl mr-auto mb-24 ml-auto items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-[10px] font-semibold uppercase tracking-wider mb-8">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon> Skills. Innovation. Enterprise.
                </div>
<h1 className="text-5xl md:text-7xl leading-[1.05] font-semibold tracking-tighter mb-8 text-gray-900">
                    Empowering skills, <span className="text-gray-400">innovation</span> &amp; enterprise.
                </h1>
<p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
                    We prepare individuals for real-world success by combining hands-on vocational training, creativity, and enterprise development.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group bg-gray-900 text-white pl-6 pr-2 py-2.5 rounded-full flex items-center gap-4 transition-all hover:scale-105 shadow-xl shadow-gray-900/10" onclick="switchPage('programs')">
<span className="font-medium text-sm">Explore Our Programs</span>
<div className="bg-white text-gray-900 rounded-full p-1.5 group-hover:translate-x-1 transition-transform flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
<button className="px-6 py-3 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors bg-white" onclick="switchPage('about')">
                        More About Us
                    </button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-32 border border-gray-100 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm">
<div>
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Who We Are</h2>
<p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        IVIEN was established to address the growing need for <span className="text-gray-900 font-medium">practical skills, entrepreneurial thinking, and innovation-led education</span>. We bridge the gap between learning and earning by equipping individuals with competencies that translate directly into opportunity.
                    </p>
</div>
<div className="bg-[#F4F2EE] rounded-2xl h-64 md:h-full relative overflow-hidden group">
<img alt="Team meeting" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</section>

<section className="page-section hidden fade-in px-6 md:px-12 pt-12 pb-20" id="about">
<div className="max-w-4xl mx-auto mb-20">
<div className="text-center">
<span className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-3 block">About IVIEN</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Building capable individuals.</h1>
<p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                        The Institute for Vocational &amp; Innovative Enterprise (IVIEN) is a skills-driven institution dedicated to building <span className="font-medium text-gray-900">capable individuals, innovative thinkers, and sustainable enterprises</span>.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
<div className="bg-white p-10 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Our Vision</h3>
<p className="text-gray-500 leading-relaxed">
                            To become a leading center for vocational excellence, innovation, and enterprise development.
                        </p>
</div>
</div>
<div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-lg flex flex-col justify-between">
<div className="w-12 h-12 bg-gray-800 text-gray-200 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Our Mission</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-circle-linear"></iconify-icon>
                                To deliver practical vocational and entrepreneurial education
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="mt-0.5 text-white" icon="solar:check-circle-linear"></iconify-icon>
                                To foster creativity and innovation
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in px-6 md:px-12 pt-12 pb-20" id="programs">
<div className="mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Our Programs</h1>
<p className="text-gray-500 max-w-xl">Hands-on training designed to build employable and entrepreneurial skills for the modern economy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:hammer-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Vocational &amp; Entrepreneurship</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                        Practical skills for modern industries combined with business fundamentals. Learn trades, financial literacy, and market readiness.
                    </p>
<div className="mt-auto pt-6 border-t border-gray-100">
<button className="text-xs font-semibold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all" onclick="switchPage('contact')">
                            Apply Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
<div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:lightbulb-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Innovation &amp; Creativity</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                        Turning ideas into solutions. Focus on design principles, problem identification, solution modeling, and creative leadership.
                    </p>
<div className="mt-auto pt-6 border-t border-gray-100">
<button className="text-xs font-semibold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all" onclick="switchPage('contact')">
                            Apply Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:laptop-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Technology Hub</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                        Build digital skills for the modern economy. Software fundamentals, productivity tools, and tech-enabled entrepreneurship.
                    </p>
<div className="mt-auto pt-6 border-t border-gray-100">
<button className="text-xs font-semibold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all" onclick="switchPage('contact')">
                            Apply Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in px-6 md:px-12 pt-12 pb-20" id="news">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">News &amp; Stories</h1>
<p className="text-gray-500 max-w-xl">Updates from our community, success stories, and student achievements across our programs.</p>
</div>
<div className="hidden md:flex gap-2 text-sm text-gray-500">
<span className="bg-gray-100 px-3 py-1 rounded-full text-gray-900 font-medium">All</span>
<span className="px-3 py-1 rounded-full hover:bg-gray-50 cursor-pointer">Vocational</span>
<span className="px-3 py-1 rounded-full hover:bg-gray-50 cursor-pointer">Tech</span>
<span className="px-3 py-1 rounded-full hover:bg-gray-50 cursor-pointer">Enterprise</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer" onclick="showNewsDetail(1)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Tech Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-blue-600 uppercase border border-white/50">
                            Innovation
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>Oct 12, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Technology Hub</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-blue-600 transition-colors">Graduates Launch New Agri-Tech App to Support Local Farmers</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Three graduates from our Technology Hub have joined forces to create a digital solution solving local supply chain issues...</p>
</div>

<div className="group cursor-pointer" onclick="showNewsDetail(2)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Vocational" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-orange-600 uppercase border border-white/50">
                            Vocational
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>Sep 28, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Construction &amp; Design</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-orange-600 transition-colors">Carpentry Cohort Revitalizes Community Center</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Putting skills into practice, the vocational training cohort spent two weeks renovating the historic community hall...</p>
</div>

<div className="group cursor-pointer" onclick="showNewsDetail(3)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-purple-600 uppercase border border-white/50">
                            Enterprise
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>Aug 15, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Success Story</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-purple-600 transition-colors">Alumni Spotlight: From Classroom Idea to Sustainable Fashion Brand</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">How Sarah T. used the IVIEN Entrepreneurship module to turn her sewing skills into a registered, eco-friendly clothing line.</p>
</div>

<div className="group cursor-pointer" onclick="showNewsDetail(4)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Events" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-green-600 uppercase border border-white/50">
                            Events
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>Jul 02, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Community</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-green-600 transition-colors">Upcoming Innovation Hackathon 2024</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Join us next month for a 48-hour event focused on solving local infrastructure challenges using modern tools.</p>
</div>

<div className="group cursor-pointer" onclick="showNewsDetail(5)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Students" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-pink-600 uppercase border border-white/50">
                            Youth Development
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>May 18, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Career Pathways</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-pink-600 transition-colors">Empowering the Next Gen: Youth and Early-Career Learners</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">IVIEN is bridging the gap between academic theory and workplace reality for young learners entering the job market.</p>
</div>

<div className="group cursor-pointer" onclick="showNewsDetail(6)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Business Owner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-teal-600 uppercase border border-white/50">
                            Small Business
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>Apr 10, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Enterprise</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-teal-600 transition-colors">From Side Hustle to SME: The Journey of Ownership</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">A deep dive into how our recent graduates are transitioning from freelancers to registered small business owners.</p>
</div>

<div className="group cursor-pointer" onclick="showNewsDetail(7)">
<div className="bg-gray-100 rounded-[1.5rem] h-64 w-full mb-6 overflow-hidden relative">
<img alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-indigo-600 uppercase border border-white/50">
                            Education
                        </div>
</div>
<div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
<span>Mar 22, 2024</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span>Thought Leadership</span>
</div>
<h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-indigo-600 transition-colors">The Critical Role of Vocational &amp; Entrepreneurship Education</h3>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Why combining technical trade skills with business acumen is the key to sustainable economic development.</p>
</div>
</div>
</section>

<section className="page-section hidden fade-in px-6 md:px-12 pt-8 pb-24" id="news-detail">

<button className="group flex items-center gap-2 text-sm font-medium text-gray-500 mb-8 hover:text-gray-900 transition-colors" onclick="switchPage('news')">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-300 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</div>
                Back to News
            </button>

<article className="max-w-3xl mx-auto">

<div className="mb-8">
<div className="flex gap-3 mb-6">
<span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-900" id="detail-category">Category</span>
</div>
<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight" id="detail-title">
                        News Headline Goes Here
                    </h1>
<div className="flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img alt="Author" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=IVIEN+Admin&amp;background=000&amp;color=fff"/>
</div>
<span className="font-medium text-gray-900">IVIEN Team</span>
</div>
<span>•</span>
<span id="detail-date">Date</span>
</div>
</div>

<div className="rounded-[2rem] overflow-hidden mb-12 shadow-sm border border-gray-100">
<img alt="Cover" className="w-full h-auto object-cover max-h-[500px]" id="detail-image" src=""/>
</div>

<div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-8" id="detail-content">

</div>

<div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
<span className="text-sm text-gray-400">Share this story</span>
<div className="flex gap-4">
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:copy-linear" width="20"></iconify-icon></button>
<button className="text-gray-400 hover:text-blue-600"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></button>
<button className="text-gray-400 hover:text-blue-400"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></button>
</div>
</div>
</article>
</section>

<section className="page-section hidden fade-in px-6 md:px-12 pt-12 pb-24" id="contact">

<div className="max-w-4xl mx-auto text-center mb-16">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Contact IVIEN</h1>
<h2 className="text-xl md:text-2xl font-normal text-gray-500 mb-6">Let’s Build Skills, Innovation, and Enterprise Together</h2>
<p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    The Institute for Vocational &amp; Innovative Enterprise (IVIEN) welcomes enquiries from individuals, organizations, institutions, and partners who share our commitment to skills development.
                </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

<div className="lg:col-span-5 space-y-12">

<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                            Who Can Reach Out
                        </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:check-circle-linear"></iconify-icon>
                                Prospective students, parents &amp; guardians
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:check-circle-linear"></iconify-icon>
                                Entrepreneurs and innovators
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:check-circle-linear"></iconify-icon>
                                Corporate organizations &amp; Government agencies
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:check-circle-linear"></iconify-icon>
                                NGOs, foundations &amp; development partners
                            </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-6">
<div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">Get in Touch</span>
<div className="space-y-4">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400">General Enquiries</p>
<p className="text-sm font-medium text-gray-900">info@ivien.edu</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400">Admissions</p>
<p className="text-sm font-medium text-gray-900">admissions@ivien.edu</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:handshake-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400">Partnerships</p>
<p className="text-sm font-medium text-gray-900">partnerships@ivien.edu</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400">Phone</p>
<p className="text-sm font-medium text-gray-900">+234 XXX XXX XXXX</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
<h4 className="text-sm font-semibold text-gray-900 mb-2">Partner with us</h4>
<p className="text-xs text-gray-500 leading-relaxed mb-0">
                            We collaborate with corporations, NGOs, and government initiatives. Indicate <strong>“Partnership Enquiry”</strong> in your message.
                        </p>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-xl shadow-gray-200/50 sticky top-24">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">Send Us a Message</h3>
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-1">Full Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-1">Email Address</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-1">Phone Number</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300" placeholder="+234..." type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-1">Enquiry Type</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all appearance-none text-gray-700 cursor-pointer">
<option disabled="" selected="" value="">Select an option</option>
<option>Admissions &amp; Enrollment</option>
<option>Training &amp; Development Programs</option>
<option>Innovation &amp; Technology Hub</option>
<option>Partnerships &amp; Collaboration</option>
<option>Vocational Skills Village</option>
<option>General Enquiry</option>
</select>
<div className="absolute right-4 top-3.5 text-gray-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-1">Message</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all resize-none placeholder:text-gray-300" placeholder="How can we help you?" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-gray-900 text-white py-3.5 rounded-full text-sm font-medium hover:bg-black transition-all shadow-lg shadow-gray-900/10 flex items-center justify-center gap-2 group" type="button">
<span>Send Message</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-bold-duotone"></iconify-icon>
</button>
<p className="text-center text-[10px] text-gray-400 mt-4">
                                    We aim to respond within 24–48 business hours.
                                </p>
</div>
</form>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-8">

<div className="bg-gray-900 text-white p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden relative">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Visit Our Campus</h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            IVIEN operates dedicated learning environments in Nigeria. For facility tours or official meetings, please schedule in advance.
                        </p>
<button className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors inline-flex items-center gap-2">
                            Request a Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
</div>

<div className="bg-orange-50 border border-orange-100 text-orange-950 p-8 rounded-[2rem] flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white/50 border border-orange-200 rounded-xl flex items-center justify-center mb-6 text-orange-600">
<iconify-icon icon="solar:stars-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Start Your Journey</h3>
<p className="text-orange-900/70 text-sm leading-relaxed max-w-sm mb-6">
                            Whether you’re learning a skill or building an enterprise, IVIEN is here to support you.
                        </p>
</div>
<div className="flex flex-wrap gap-3">
<button className="bg-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-orange-200 hover:bg-orange-100 transition-colors">Apply to Program</button>
<button className="bg-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-orange-200 hover:bg-orange-100 transition-colors">Partner With Us</button>
</div>
</div>
</div>
</section>
</div>

<section className="bg-[#FDFBF7] px-6 border-t border-gray-200 pt-16 pb-8">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Ready to start?</h2>
<div className="flex justify-center gap-4">
<button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg" onclick="switchPage('contact')">
                    Enrol Today
                </button>
<button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors" onclick="switchPage('contact')">
                    Become a Partner
                </button>
</div>
</div>
</section>

<footer className="w-full bg-[#F4F2EE] py-12 px-6 border-t border-gray-200">
<div className="max-w-[1440px] mx-auto flex flex-col items-center">
<div className="flex items-center gap-2 mb-8 opacity-80">
<iconify-icon className="text-gray-900" icon="solar:plain-3-bold-duotone" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-gray-900">IVIEN</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500 mb-10">
<button className="hover:text-gray-900" onclick="switchPage('home')">Home</button>
<button className="hover:text-gray-900" onclick="switchPage('about')">About</button>
<button className="hover:text-gray-900" onclick="switchPage('programs')">Programs</button>
<button className="hover:text-gray-900" onclick="switchPage('news')">News</button>
<button className="hover:text-gray-900" onclick="switchPage('contact')">Contact</button>
</div>
<p className="text-gray-400 text-xs text-center">
                © 2024 Institute for Vocational &amp; Innovative Enterprise (IVIEN). All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
