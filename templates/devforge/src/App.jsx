import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // 12-Week Intensive Accordion Logic
        let activeIndex = 1; // Default open index
        
        function toggleCurriculum(index) {
            // Reset all
            for (let i = 0; i < 4; i++) {
                const desc = document.getElementById(`desc-${i}`);
                const icon = document.getElementById(`icon-${i}`);
                const title = document.getElementById(`title-${i}`);
                const wrapper = desc.parentElement.parentElement; // The .group div

                if (i === index) {
                    // Activate this one
                    desc.classList.remove('h-0', 'opacity-0');
                    desc.classList.add('h-auto', 'opacity-100');
                    icon.parentElement.classList.remove('bg-white/5', 'text-white');
                    icon.parentElement.classList.add('bg-[#9EF0A0]', 'text-[#18181B]');
                    icon.classList.add('rotate-45');
                    title.classList.remove('text-white');
                    title.classList.add('text-[#9EF0A0]');
                } else {
                    // Deactivate others
                    desc.classList.remove('h-auto', 'opacity-100');
                    desc.classList.add('h-0', 'opacity-0');
                    icon.parentElement.classList.remove('bg-[#9EF0A0]', 'text-[#18181B]');
                    icon.parentElement.classList.add('bg-white/5');
                    icon.classList.remove('rotate-45');
                    title.classList.remove('text-[#9EF0A0]');
                    title.classList.add('text-white');
                }
            }
            activeIndex = index;
        }

        // Testimonial Animation Data
        const testimonials = [
            {
                text: "\"DevForge didn't just teach me to code; they taught me how to think like an engineer. I landed my dream job at a major fintech company 3 weeks after demo day.\"",
                name: "Marcus Chen",
                role: "Software Engineer, Stripe"
            },
            {
                text: "\"The intensity of the program is matched only by the support of the instructors. It was the hardest thing I've ever done, and the most rewarding.\"",
                name: "Elena Rodriguez",
                role: "Full Stack Dev, Airbnb"
            },
            {
                text: "\"I switched careers from marketing to dev in 3 months. The career services team is incredible - they really know how to position you for success.\"",
                name: "James Wilson",
                role: "Frontend Engineer, Shopify"
            }
        ];

        const bubbles = [
            {
                text: "\"The mentorship I received was world-class. I felt supported every step of the way.\"",
                name: "Sarah Jenkins",
                role: "Frontend Dev, Vercel",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50"
            },
            {
                text: "\"Best investment I ever made in myself.\"",
                name: "David Kim",
                role: "Backend Dev, Uber",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50"
            },
            {
                text: "\"Community is everything here.\"",
                name: "Anita Patel",
                role: "Engineer, Notion",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50"
            }
        ];

        let currentTestimonial = 0;
        
        function rotateTestimonials() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            
            // Main Card Animation
            const content = document.getElementById('testimonial-content');
            content.style.opacity = '0';
            
            setTimeout(() => {
                const t = testimonials[currentTestimonial];
                content.innerHTML = `
                    <p class="text-xl text-[#D4D4D8] italic mb-6 leading-relaxed font-light">${t.text}</p>
                    <div>
                        <div class="font-medium text-white text-lg">${t.name}</div>
                        <div class="text-[#71717A] text-sm">${t.role}</div>
                    </div>
                `;
                content.style.opacity = '1';
                
                // Update dots
                [0, 1, 2].forEach(i => {
                    const el = document.getElementById(`indicator-${i}`);
                    if (i === currentTestimonial) {
                        el.classList.remove('bg-white/20');
                        el.classList.add('bg-[#9EF0A0]');
                    } else {
                        el.classList.remove('bg-[#9EF0A0]');
                        el.classList.add('bg-white/20');
                    }
                });
            }, 500);

            // Bubble Animation (offset slightly)
            const bubble = document.getElementById('bubble-card');
            
            setTimeout(() => {
                bubble.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => {
                    const b = bubbles[currentTestimonial];
                    document.getElementById('bubble-text').innerText = b.text;
                    document.getElementById('bubble-name').innerText = b.name;
                    document.getElementById('bubble-role').innerText = b.role;
                    document.getElementById('bubble-img').src = b.img;
                    
                    bubble.classList.remove('opacity-0', 'translate-y-4');
                }, 500);
            }, 1000);
        }

        setInterval(rotateTestimonials, 5000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
<div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#9EF0A0]" data-icon="solar:code-square-bold-duotone" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m13.792 21.319l-.597 1.008c-.531.897-1.859.897-2.39 0l-.597-1.008c-.462-.781-.693-1.172-1.065-1.388c-.371-.216-.84-.224-1.774-.24c-1.381-.024-2.247-.109-2.974-.41a5.5 5.5 0 0 1-2.976-2.976C1 15.294 1 14.013 1 11.45v-1.1c0-3.6 0-5.401.81-6.724A5.5 5.5 0 0 1 3.626 1.81C4.95 1 6.75 1 10.35 1h3.3c3.6 0 5.401 0 6.724.81a5.5 5.5 0 0 1 1.816 1.816C23 4.95 23 6.75 23 10.35v1.1c0 2.563 0 3.844-.419 4.855a5.5 5.5 0 0 1-2.976 2.976c-.727.301-1.593.386-2.974.41c-.935.016-1.403.024-1.774.24c-.372.216-.603.607-1.065 1.388" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M15.267 6.83a.825.825 0 0 1 1.167 0l.188.188l.04.04c.7.7 1.283 1.282 1.683 1.807c.423.554.72 1.14.72 1.848s-.297 1.294-.72 1.848c-.4.524-.983 1.107-1.682 1.806l-.23.23a.825.825 0 0 1-1.166-1.167l.189-.19c.75-.749 1.252-1.254 1.577-1.68c.31-.407.381-.644.381-.847s-.07-.44-.38-.847c-.326-.426-.828-.931-1.578-1.681l-.189-.189a.825.825 0 0 1 0-1.166m-1.63-2.226c.44.118.701.57.583 1.01L11.373 16.24a.825.825 0 1 1-1.594-.427l2.847-10.625a.825.825 0 0 1 1.01-.584M8.733 6.83a.825.825 0 0 0-1.167 0l-.188.188l-.04.04c-.7.7-1.283 1.282-1.683 1.807c-.423.554-.72 1.14-.72 1.848s.297 1.294.72 1.848c.4.524.983 1.107 1.682 1.806l.23.23a.825.825 0 0 0 1.166-1.167l-.189-.19c-.75-.749-1.252-1.254-1.577-1.68c-.31-.407-.381-.644-.381-.847s.07-.44.38-.847c.326-.426.828-.931 1.578-1.681l.189-.189a.825.825 0 0 0 0-1.166" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-lg font-semibold tracking-tight text-white">DevForge</span>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium text-[#A1A1AA]">
<a className="hover:text-white transition-colors" href="#">Curriculum</a>
<a className="hover:text-white transition-colors" href="#">Mentorship</a>
<a className="hover:text-white transition-colors" href="#">Tuition</a>
<a className="hover:text-white transition-colors" href="#">Outcomes</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-[#9EF0A0] transition-colors" href="#">Log In</a>
<a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9EF0A0] text-[#18181B] text-sm font-semibold hover:bg-[#8BE08D] transition-all" href="#">
                    Apply Now
                </a>
</div>

<button className="md:hidden text-white p-1" id="menu-btn">
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#18181B] border-b border-white/10 p-6 flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Curriculum</a>
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Mentorship</a>
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Tuition</a>
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Outcomes</a>
<hr className="border-white/10 my-2"/>
<a className="text-white text-lg font-medium" href="#">Log In</a>
<a className="bg-[#9EF0A0] text-[#18181B] text-center py-3 rounded-lg font-semibold" href="#">Apply Now</a>
</div>
</nav>

<header className="lg:px-10 overflow-hidden text-white bg-[#18181B] rounded-b-[3rem] pt-12 pr-6 pb-24 pl-6 relative pt-28">
<div className="max-w-[1400px] mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">

<div className="lg:col-span-6 flex flex-col gap-8 z-10">
<div className="">
<h1 className="lg:text-[5.5rem] leading-[1] text-6xl text-white mb-6 font-medium tracking-tight">
                            Logic Meets <br/>
<span className="text-[#9EF0A0]">Creativity.</span>
</h1>
<p className="text-[#A1A1AA] text-lg font-light leading-relaxed max-w-lg">
                            We don't just teach syntax; we engineer mindsets. Join the #1 rated coding bootcamp and leave ready to deploy scalable applications on day one.
                        </p>
</div>

<div className="flex flex-wrap items-center gap-6 mt-2">
<a className="px-8 py-4 bg-[#9EF0A0] text-[#18181B] rounded-xl font-semibold text-base hover:bg-[#8BE08D] transition-colors shadow-[0_0_20px_rgba(158,240,160,0.2)]" href="#">
                            Get Started
                        </a>
<div className="flex flex-col border-l border-white/10 pl-6">
<span className="text-sm font-medium text-white">Next Cohort</span>
<span className="text-sm text-[#71717A]">Starts Oct 12</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#27272A] aspect-[4/3]">
<div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg max-w-[180px]">
<div className="text-[10px] font-bold text-[#71717A] uppercase tracking-wider mb-1">5000+ Alumni</div>
<div className="text-sm font-semibold text-[#18181B] leading-tight">See Our Latest Outcome Report</div>
</div>
<img alt="Students coding" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c366997c-6a03-4ceb-baf5-f1115ea453be_1600w.jpg"/>
</div>

<div className="flex mt-8 pr-4 pl-4 space-x-4 items-start justify-between">
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-white tracking-tight mb-1">94%</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Hired Rate</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-[#9EF0A0] tracking-tight mb-1">1.2k+</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Active Students</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-[#B2A5FE] tracking-tight mb-1">$85k</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Avg Salary</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-white tracking-tight mb-1">500+</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Hiring Partners</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#18181B] via-transparent to-[#18181B]"></div>
<div className="flex overflow-hidden w-full">
<div className="flex gap-6 animate-marquee w-max pt-4 pb-4 gap-x-6 gap-y-6">

<div className="w-[350px] bg-[#27272A] rounded-3xl p-8 flex flex-col h-full border border-white/10 hover:border-[#B2A5FE]/50 transition-colors group">
<div className="w-12 h-12 bg-[#2E2E32] rounded-full flex items-center justify-center mb-6 text-[#B2A5FE] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:code-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight">Software Engineering</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Full-stack mastery. From database architecture to reactive front-end interfaces.
        </p>
</div>

<div className="w-[350px] bg-[#9EF0A0]/5 rounded-3xl p-8 flex flex-col h-full border border-[#9EF0A0]/10 hover:bg-[#9EF0A0]/10 transition-colors group">
<div className="w-12 h-12 bg-[#9EF0A0] rounded-full flex items-center justify-center mb-6 text-[#18181B] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:monitor-smartphone-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path><path d="M8 17c-2.829 0-4.243 0-5.122-.879c-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304c.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4z" fill="currentColor"></path><path d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="text-2xl text-[#9EF0A0] mb-3 font-medium tracking-tight">Web Design</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Master modern UI/UX principles and implement them with React and Tailwind CSS.
        </p>
</div>

<div className="w-[350px] bg-[#B2A5FE]/5 rounded-3xl p-8 flex flex-col h-full border border-[#B2A5FE]/10 hover:bg-[#B2A5FE]/10 transition-colors group">
<div className="w-12 h-12 bg-[#B2A5FE] rounded-full flex items-center justify-center mb-6 text-[#18181B] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:rocket-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792S22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306S19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.5 1.5 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.93 1.93 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.93 1.93 0 0 1 0 2.738" fill="currentColor" fill-rule="evenodd"></path><path d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6 6 0 0 0-.619.82l-.024-.025l-.095-.094a4.9 4.9 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.4 3.4 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512q.243.311.434.658c.142.26.253.537.474 1.092a.69.69 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="text-2xl text-[#B2A5FE] mb-3 font-medium tracking-tight">Digital Transformation</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Learn how to architect scalable systems that drive business growth and efficiency.
        </p>
</div>

<div className="w-[350px] bg-[#27272A] rounded-3xl p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group">
<div className="w-12 h-12 bg-[#2E2E32] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:chart-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293" fill="currentColor"></path><path d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293" fill="currentColor" opacity=".4"></path><path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z" fill="currentColor" opacity=".7"></path><path d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight">Data Science</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Extract insights from complex datasets using Python, SQL, and Machine Learning.
        </p>
</div>


<div className="w-[350px] bg-[#27272A] rounded-3xl p-8 flex flex-col h-full border border-white/10 hover:border-[#B2A5FE]/50 transition-colors group">
<div className="w-12 h-12 bg-[#2E2E32] rounded-full flex items-center justify-center mb-6 text-[#B2A5FE] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:code-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path><path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight">Software Engineering</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Full-stack mastery. From database architecture to reactive front-end interfaces.
        </p>
</div>

<div className="w-[350px] bg-[#9EF0A0]/5 rounded-3xl p-8 flex flex-col h-full border border-[#9EF0A0]/10 hover:bg-[#9EF0A0]/10 transition-colors group">
<div className="w-12 h-12 bg-[#9EF0A0] rounded-full flex items-center justify-center mb-6 text-[#18181B] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:monitor-smartphone-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path><path d="M8 17c-2.829 0-4.243 0-5.122-.879c-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304c.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4z" fill="currentColor"></path><path d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="text-2xl text-[#9EF0A0] mb-3 font-medium tracking-tight">Web Design</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Master modern UI/UX principles and implement them with React and Tailwind CSS.
        </p>
</div>

<div className="w-[350px] bg-[#B2A5FE]/5 rounded-3xl p-8 flex flex-col h-full border border-[#B2A5FE]/10 hover:bg-[#B2A5FE]/10 transition-colors group">
<div className="w-12 h-12 bg-[#B2A5FE] rounded-full flex items-center justify-center mb-6 text-[#18181B] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:rocket-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792S22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306S19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.5 1.5 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.93 1.93 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.93 1.93 0 0 1 0 2.738" fill="currentColor" fill-rule="evenodd"></path><path d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6 6 0 0 0-.619.82l-.024-.025l-.095-.094a4.9 4.9 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.4 3.4 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512q.243.311.434.658c.142.26.253.537.474 1.092a.69.69 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="text-2xl text-[#B2A5FE] mb-3 font-medium tracking-tight">Digital Transformation</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Learn how to architect scalable systems that drive business growth and efficiency.
        </p>
</div>

<div className="w-[350px] bg-[#27272A] rounded-3xl p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group">
<div className="w-12 h-12 bg-[#2E2E32] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:chart-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293" fill="currentColor"></path><path d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293" fill="currentColor" opacity=".4"></path><path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z" fill="currentColor" opacity=".7"></path><path d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight">Data Science</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Extract insights from complex datasets using Python, SQL, and Machine Learning.
        </p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16">
<div className="flex flex-wrap gap-12 lg:gap-20 transition-all hover:grayscale-0 hover:opacity-80 opacity-30 max-w-7xl mr-auto ml-auto pr-6 pl-6 grayscale gap-x-12 gap-y-12 justify-center">
<svg aria-hidden="true" className="iconify w-[48px] h-[48px] text-[#18181B] iconify--logos" data-icon="logos:nodejs-icon" height="1em" role="img" viewbox="0 0 256 289" width="0.89em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571" fill="#539E43"></path></svg>
<svg aria-hidden="true" className="iconify w-[48px] h-[48px] text-[#18181B] iconify--logos" data-icon="logos:react" height="1em" role="img" viewbox="0 0 256 228" width="1.13em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" fill="#00D8FF"></path></svg>
<svg aria-hidden="true" className="iconify text-[#18181B] iconify--logos w-[48px] h-[48px]" data-icon="logos:python" data-icon-replaced="true" data-icon-set="logos" data-logos="openai-icon" height="48" role="img" strokeWidth="2" style={{color: 'rgb(24, 24, 27)', width: '48px', height: '48px'}} viewbox="0 0 256 260" width="48" xmlns="http://www.w3.org/2000/svg"><path className="" d="M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z"></path></svg>
<svg aria-hidden="true" className="iconify w-[48px] h-[48px] text-[#18181B] iconify--logos" data-icon="logos:github-icon" height="1em" role="img" viewbox="0 0 256 250" width="1.03em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" fill="#161614"></path></svg>
<svg aria-hidden="true" className="iconify iconify--logos w-[48px] h-[48px]" data-icon="logos:typescript-icon" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0" fill="#3178C6"></path><path className="" d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z" fill="#FFF"></path></svg><svg aria-hidden="true" className="iconify iconify--logos w-[48px] h-[48px]" data-icon="logos:typescript-icon" data-icon-replaced="true" data-icon-set="logos" data-logos="flutter" height="48" role="img" strokeWidth="2" style={{color: 'rgb(24, 24, 27)', width: '48px', height: '48px'}} viewbox="0 0 256 317" width="48" xmlns="http://www.w3.org/2000/svg"><defs></defs><path className="" d="M157.666.001L.001 157.666l48.8 48.8L255.268.001zm-1.099 145.396l-84.418 84.418l48.984 49.716l48.71-48.71l85.425-85.424z" fill="#47C5FB"></path><path d="m121.133 279.531l37.082 37.082h97.052l-85.425-85.792z" fill="#00569E"></path><path className="" d="m71.6 230.364l48.801-48.801l49.441 49.258l-48.709 48.71z" fill="#00B5F8"></path><path d="m121.133 279.531l40.56-13.459l4.029-31.131z" fill="url(#SVGpXTHBYoI)" fillOpacity=".8"></path></svg><svg aria-hidden="true" className="iconify iconify--logos w-[48px] h-[48px]" data-icon="logos:typescript-icon" data-icon-replaced="true" data-icon-set="logos" data-logos="html-5" height="48" role="img" strokeWidth="2" style={{color: 'rgb(24, 24, 27)', width: '48px', height: '48px'}} viewbox="0 0 256 361" width="48" xmlns="http://www.w3.org/2000/svg"><path className="" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z" fill="#E44D26"></path><path d="m128 337.95l84.417-23.403l19.86-222.49H128z" fill="#F16529"></path><path className="" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z" fill="#EBEBEB"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"></path><path d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z" fill="#FFF"></path></svg>
</div>
</section>

<section className="py-24 bg-[#E4E9E5]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#18181B]"></div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#18181B]">Why DevForge</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-4">
<img alt="Reviewer" className="w-14 h-14 rounded-full border-4 border-[#E4E9E5]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Reviewer" className="w-14 h-14 rounded-full border-4 border-[#E4E9E5]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Reviewer" className="w-14 h-14 rounded-full border-4 border-[#E4E9E5]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="">
<div className="font-semibold text-xl text-[#18181B]">4.9/5 Rating</div>
<div className="text-[#52525B] text-sm font-light">Based on 1,200+ Graduate Reviews</div>
</div>
</div>
</div>
<div className="">
<h2 className="lg:text-5xl leading-tight text-4xl text-[#18181B] mb-6 font-medium tracking-tight">
                        Accelerate Your Journey from Novice to Software Engineer.
                    </h2>
<p className="text-xl text-[#52525B] leading-relaxed mb-8 font-light">
                        At DevForge Academy, we combine rigorous technical training with career-focused mentorship. Our immersive curriculum is designed to transform you into a high-impact developer in just 12 weeks.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-5 relative group">
<img alt="Office meeting" className="w-full h-80 object-cover rounded-[2rem] shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cc23948-cfe5-4f3d-9621-720fba8e3408_1600w.jpg"/>
</div>
<div className="md:col-span-5 relative group">
<img alt="Collaboration" className="w-full h-80 object-cover rounded-[2rem] shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f6fb7b5-3e24-4bb3-96d7-788a0bc2e2db_1600w.jpg"/>
</div>
<div className="md:col-span-2 flex items-end justify-end">
<a className="w-full h-full min-h-[100px] bg-[#18181B] text-white rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-[#27272A] transition-colors p-6 text-center border border-[#9EF0A0]/20 shadow-xl group" href="#">
<span className="text-lg font-medium text-white">Meet Mentors</span>
<svg aria-hidden="true" className="iconify text-2xl text-[#9EF0A0] group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6">
<div className="bg-[#18181B] text-white rounded-[2.5rem] p-8 lg:p-20 relative overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-xl">
<span className="text-[#9EF0A0] text-sm font-medium tracking-wide uppercase mb-4 block">— 12 Week Intensive</span>
<h2 className="text-4xl lg:text-5xl text-white font-medium tracking-tight">Curriculum Excellence.</h2>
</div>
<div className="mt-6 md:mt-0 max-w-xs text-[#A1A1AA] text-lg font-light">
                        Our curriculum evolves with the industry. Master the tools top tech companies use today.
                        <a className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white text-[#18181B] rounded-full text-sm font-medium hover:bg-[#E4E9E5]" href="#">
                            Download Guide
                            <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:download-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col border-t border-white/10" id="curriculum-list">


<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(0)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-white font-medium tracking-tight group-hover:text-[#9EF0A0] transition-colors" id="title-0">Foundations of Computer Science</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#9EF0A0] group-hover:text-[#18181B] transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-0" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-0">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Deep dive into algorithms, data structures, and big O notation. Learn how computers actually work before writing your first line of production code.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(1)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-[#9EF0A0] font-medium tracking-tight" id="title-1">Full Stack Development</h3>
<div className="rounded-full bg-[#9EF0A0] text-[#18181B] p-3 transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform rotate-45 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-1" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-100" id="desc-1">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Build dynamic applications using React, Node.js, PostgreSQL, and Modern Cloud Infrastructure. Create real-world projects that scale.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(2)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-white font-medium tracking-tight group-hover:text-[#9EF0A0] transition-colors" id="title-2">System Design &amp; Architecture</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#9EF0A0] group-hover:text-[#18181B] transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-2" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-2">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Understand microservices, load balancing, and database shading. Design systems that can handle millions of concurrent users.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(3)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-white font-medium tracking-tight group-hover:text-[#9EF0A0] transition-colors" id="title-3">Career Strategy &amp; Negotiation</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#9EF0A0] group-hover:text-[#18181B] transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-3" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-3">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Technical skills get you the interview; soft skills get you the job. We teach you how to negotiate your salary and navigate the hiring process.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E4E9E5]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-[#18181B]"></div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#18181B]">Student Portfolio</span>
</div>
<h2 className="text-4xl lg:text-5xl text-[#18181B] font-medium tracking-tight">Capstone Projects Built by Recent Grads</h2>
</div>
<a className="px-6 py-3 bg-[#18181B] text-white rounded-full text-sm font-medium hover:bg-[#27272A] transition-colors flex items-center gap-2 mt-6 md:mt-0" href="#">
                    View All Capstones
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group cursor-pointer bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300">
<div className="bg-[#F2F4F3] rounded-[2rem] overflow-hidden mb-6 relative aspect-[4/3]">
<div className="group-hover:bg-black/10 transition-colors z-10 bg-center bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Dashboard" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f627dda-22f9-4cd4-bde1-95bafd0aca99_1600w.jpg"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-4 py-1 rounded-full bg-[#18181B] text-white text-xs font-medium">FinTech</span>
</div>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div>
<h3 className="text-2xl mb-1 text-[#18181B] font-medium tracking-tight">Nexus Financial</h3>
<p className="text-[#71717A] text-lg font-light">React, D3.js, Node.js</p>
</div>
<div className="p-3 rounded-full bg-[#E4E9E5] text-[#18181B] group-hover:bg-[#9EF0A0] transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300">
<div className="bg-[#F2F4F3] rounded-[2rem] overflow-hidden mb-6 relative aspect-[4/3]">
<div className="group-hover:bg-black/10 transition-colors bg-center z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Code" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c09acd3-7179-4b95-af05-00bfbe62e6c4_1600w.jpg"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-4 py-1 rounded-full bg-[#18181B] text-white text-xs font-medium">Social</span>
</div>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div className="">
<h3 className="text-2xl mb-1 text-[#18181B] font-medium tracking-tight">DevConnect App</h3>
<p className="text-[#71717A] text-lg font-light">MERN Stack, Socket.io</p>
</div>
<div className="p-3 rounded-full bg-[#E4E9E5] text-[#18181B] group-hover:bg-[#9EF0A0] transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#18181B] text-white py-24 overflow-hidden rounded-t-[3rem] relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#9EF0A0]"></div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#9EF0A0]">Alumni Stories</span>
</div>
<h2 className="text-4xl lg:text-6xl mb-8 text-white font-medium tracking-tight">Where Are Our Grads Now?</h2>

<div className="bg-[#27272A] border border-white/5 p-10 rounded-[2rem] max-w-lg relative mb-10 min-h-[300px] flex flex-col justify-between transition-all" id="testimonial-card">
<div className="">
<span className="iconify text-[#B2A5FE] text-4xl mb-6" data-icon="solar:quote-up-square-bold-duotone"></span>
<div className="transition-opacity duration-500 opacity-100" id="testimonial-content">
<p className="text-xl text-[#D4D4D8] italic mb-6 leading-relaxed font-light">
                                "DevForge didn't just teach me to code; they taught me how to think like an engineer. I landed my dream job at a major fintech company 3 weeks after demo day."
                            </p>
<div>
<div className="font-medium text-white text-lg">Marcus Chen</div>
<div className="text-[#71717A] text-sm">Software Engineer, Stripe</div>
</div>
</div>
</div>

<div className="flex gap-2 mt-8">
<div className="h-1 rounded-full bg-[#9EF0A0] w-8 transition-all duration-300" id="indicator-0"></div>
<div className="h-1 rounded-full bg-white/20 w-8 transition-all duration-300" id="indicator-1"></div>
<div className="h-1 rounded-full bg-white/20 w-8 transition-all duration-300" id="indicator-2"></div>
</div>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-[#B2A5FE] text-[#18181B] rounded-full font-medium hover:bg-[#A597FF] transition-colors" href="#">
                    Read Success Stories
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
<div className="relative h-full min-h-[500px]">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
<img className="opacity-40 mix-blend-overlay w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ba198c4-eafe-4d01-8017-63537641710a_1600w.webp"/>
<div className="bg-gradient-to-t from-[#18181B] via-[#18181B]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-20 -left-10 bg-white text-[#18181B] p-6 rounded-[2rem] shadow-2xl max-w-xs hidden lg:block transform transition-all duration-700 hover:-translate-y-2" id="bubble-card">
<p className="text-sm font-medium leading-relaxed mb-4" id="bubble-text">"The mentorship I received was world-class. I felt supported every step of the way."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" id="bubble-img" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=50&amp;h=50"/>
<div>
<div className="font-bold text-xs" id="bubble-name">Sarah Jenkins</div>
<div className="text-xs text-[#52525B]" id="bubble-role">Frontend Dev, Vercel</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-4 items-end">
<div className="flex items-center gap-3 text-right bg-[#18181B]/80 backdrop-blur px-4 py-2 rounded-full border border-white/10">
<div className="text-xs text-[#A1A1AA]">
<div className="font-bold text-white">Google</div>
<div className="">Senior Eng</div>
</div>
<img className="w-8 h-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=50&amp;h=50"/>
</div>
<div className="flex items-center gap-3 text-right bg-[#18181B]/80 backdrop-blur px-4 py-2 rounded-full border border-white/10">
<div className="text-xs text-[#A1A1AA]">
<div className="font-bold text-white">Amazon</div>
<div className="">Backend Dev</div>
</div>
<img className="w-8 h-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=50&amp;h=50"/>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#18181B] mb-0 pr-6 pb-6 pl-6">
<div className="lg:p-24 overflow-hidden group text-center bg-[#27272A] max-w-7xl border-white/5 border rounded-[2.5rem] mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 relative">
<h2 className="text-4xl lg:text-6xl text-white font-medium tracking-tight mb-6 relative z-10">Ready to break the code?</h2>
<p className="text-[#A1A1AA] text-lg max-w-xl mx-auto mb-10 relative z-10">
                Applications for the Fall Cohort are closing soon. Secure your spot and start your journey today.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
<a className="px-8 py-4 bg-[#white] bg-white text-[#18181B] rounded-full font-semibold text-lg hover:bg-[#E4E9E5] transition-colors shadow-lg" href="#">
                    Apply for Free
                </a>
<a className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-colors" href="#">
                    Schedule a Call
                </a>
</div>

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#9EF0A0] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B2A5FE] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
</div>
</div>

<footer className="bg-[#18181B] border-white/5 border-t mt-0 mb-0 pt-24 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-[#9EF0A0] text-2xl iconify--solar" data-icon="solar:code-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tight text-white">DevForge</span>
</div>
<p className="text-[#71717A] text-sm leading-relaxed max-w-xs mb-6">
                        The premier coding academy for ambitious builders. We are committed to transforming the tech landscape one graduate at a time.
                    </p>
<div className="flex gap-4">
<a className="text-[#A1A1AA] hover:text-white" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:twitter" height="1em" role="img" viewbox="0 0 256 209" width="1.23em" xmlns="http://www.w3.org/2000/svg"><path d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45" fill="#55acee"></path></svg></a>
<a className="text-[#A1A1AA] hover:text-white" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:linkedin-icon" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg></a>
<a className="text-[#A1A1AA] hover:text-white" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:github-icon" height="1em" role="img" viewbox="0 0 256 250" width="1.03em" xmlns="http://www.w3.org/2000/svg"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" fill="#161614"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Academy</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Curriculum</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Admissions</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Tuition &amp; Financing</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Career Support</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Resources</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li className=""><a className="hover:text-[#9EF0A0] transition-colors" href="#">Student Stories</a></li>
<li className=""><a className="hover:text-[#9EF0A0] transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-[#9EF0A0] transition-colors" href="#">Events</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Free Workshops</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-[#9EF0A0] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#52525B] text-sm">© 2024 DevForge Academy Inc. All rights reserved.</p>
<div className="flex gap-8 text-sm text-[#52525B]">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
