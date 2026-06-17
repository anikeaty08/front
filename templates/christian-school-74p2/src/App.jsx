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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
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
      

<header className="bg-[#FFFFFF] border-b border-[#F5F7FA] sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
<div className="flex items-center">
<span className="text-[#162B55] font-normal text-xl tracking-tight uppercase">WOLCA</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-base font-normal text-[#5B6472] hover:text-[#213E7C] transition-colors" href="tel:703-354-4222">
                    703-354-4222
                </a>
<a className="bg-[#162B55] hover:bg-[#213E7C] text-[#FFFFFF] text-base font-normal px-4 py-2 rounded-lg transition-all shadow-[0_2px_12px_rgba(22,43,85,0.2)]" href="#tour-form">
                    Schedule a Private Tour
                </a>
</div>
</div>
</header>

<section className="relative bg-[#FFFFFF] pt-10 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="max-w-2xl text-left">
<span className="inline-block text-[#D9A441] text-sm font-normal tracking-widest uppercase mb-3">
                        Springfield, VA Private Christian School | Preschool–8th Grade
                    </span>
<h1 className="text-4xl lg:text-5xl font-normal text-[#162B55] tracking-tight leading-[1.15] mb-4">
                        A Safer, More Structured School Environment Where Your Child Is Known and Supported
                    </h1>
<p className="text-2xl text-[#5B6472] leading-relaxed mb-6">
                        At Word of Life Christian Academy, families find small class settings, caring teachers, strong character development, and a Christ-centered environment designed to help students thrive academically and personally from Preschool through 8th Grade.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
<a className="w-full sm:w-auto text-center bg-[#162B55] hover:bg-[#213E7C] text-[#FFFFFF] text-lg font-normal px-6 py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(22,43,85,0.25)]" href="#tour-form">
                            Schedule a Private Tour
                        </a>
<p className="text-base text-[#5B6472] sm:max-w-[200px] leading-relaxed text-left">
                            Come see how WOLCA helps students feel safe, supported, and known.
                        </p>
</div>
<div className="pt-4 border-t border-[#F5F7FA]">
<div className="grid grid-cols-2 gap-y-2 gap-x-4">
<div className="text-base font-normal text-[#162B55]">Small class settings</div>
<div className="text-base font-normal text-[#162B55]">Preschool–8th Grade</div>
<div className="text-base font-normal text-[#162B55]">Springfield, VA</div>
<div className="text-base font-normal text-[#162B55]">Established Christian school</div>
</div>
</div>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(22,43,85,0.08)] bg-[#F5F7FA]">
<img alt="Students in a calm, structured classroom environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(22,43,85,0.08)] bg-[#FFFFFF]">
<img alt="Teacher supporting a student individually" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="order-1 lg:order-2 text-left">
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4">
                        When a Child Feels Overlooked, Everything Gets Harder
                    </h2>
<div className="space-y-3 text-xl lg:text-2xl text-[#5B6472] leading-relaxed mb-6">
<p>Many parents are not just looking for a better school. They are looking for relief.</p>
<p>They are tired of overcrowded classrooms, inconsistent discipline, and the feeling that their child is just another number in an environment that cannot give them the support they need.</p>
<p>When students do not feel safe, known, and guided, it affects confidence, behavior, focus, and academic growth.</p>
<p>That is why families look for a school environment that feels calmer, more personal, and more structured from the moment they walk in the door.</p>
</div>
<a className="inline-block bg-[#162B55] hover:bg-[#213E7C] text-[#FFFFFF] text-lg font-normal px-6 py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(22,43,85,0.2)]" href="#tour-form">
                        Schedule a Private Tour
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="max-w-3xl mb-8 lg:mb-12 text-left">
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4">
                    Why Parents Choose WOLCA for Safety, Structure, and Support
                </h2>
<p className="text-xl lg:text-2xl text-[#5B6472] leading-relaxed">
                    Families want more than promises. They want a school where children are guided, cared for, and given the kind of attention that helps them grow with confidence.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.04)] border border-[#F5F7FA] relative hover:-translate-y-1 transition-transform duration-300 flex flex-col text-left">
<div className="w-full h-32 sm:h-40 overflow-hidden">
<img alt="Small class settings supporting individual attention" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="w-8 h-1 bg-[#D9A441] rounded-full mb-4"></div>
<h3 className="text-xl font-normal text-[#162B55] tracking-tight mb-3 leading-snug">
                            Small Class Settings That Support Individual Attention
                        </h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">
                            Smaller class environments help students feel seen, supported, and less likely to fall through the cracks. Parents want to know their child is known—not overlooked.
                        </p>
</div>
</div>

<div className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.04)] border border-[#F5F7FA] relative hover:-translate-y-1 transition-transform duration-300 flex flex-col text-left">
<div className="w-full h-32 sm:h-40 overflow-hidden">
<img alt="Structured environment for learning and growth" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="w-8 h-1 bg-[#D9A441] rounded-full mb-4"></div>
<h3 className="text-xl font-normal text-[#162B55] tracking-tight mb-3 leading-snug">
                            A More Structured Environment for Learning and Growth
                        </h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">
                            Children thrive when expectations are clear and the environment feels consistent. A structured school culture can support better focus, stronger habits, and greater peace of mind for parents.
                        </p>
</div>
</div>

<div className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.04)] border border-[#F5F7FA] relative hover:-translate-y-1 transition-transform duration-300 flex flex-col text-left">
<div className="w-full h-32 sm:h-40 overflow-hidden">
<img alt="Caring community helping students feel safe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="w-8 h-1 bg-[#D9A441] rounded-full mb-4"></div>
<h3 className="text-xl font-normal text-[#162B55] tracking-tight mb-3 leading-snug">
                            A Caring Community That Helps Students Feel Safe and Supported
                        </h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">
                            A good school environment is not only academic. It is relational. Families want a place where teachers care, students are guided well, and children feel supported socially, emotionally, and personally.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] py-8 lg:py-10 border-y border-[#E2E8F0]">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
<h2 className="text-2xl font-normal text-[#162B55] tracking-tight mb-2">
                Established. Accredited. Trusted by Families.
            </h2>
<p className="max-w-3xl text-base text-[#5B6472] leading-relaxed mb-6">
                WOLCA is an established Christian school in Springfield, Virginia, serving Preschool through 8th Grade, with multiple education and Christian-school accreditation or association markers shown on its official website.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6">
<div className="text-sm font-normal tracking-widest text-[#5B6472] uppercase text-left leading-relaxed">Middle States<br/>Association</div>
<div className="text-sm font-normal tracking-widest text-[#5B6472] uppercase text-left leading-relaxed">Assoc. of Christian<br/>Schools International</div>
<div className="text-sm font-normal tracking-widest text-[#5B6472] uppercase text-left leading-relaxed">Virginia Council for<br/>Private Education</div>
<div className="text-sm font-normal tracking-widest text-[#5B6472] uppercase text-left leading-relaxed">Intl League of<br/>Christian Schools</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="text-left">
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4 leading-tight">
                        Smaller Class Settings Can Make a Big Difference
                    </h2>
<div className="space-y-4 text-lg text-[#5B6472] leading-relaxed mb-6">
<p>Many parents worry that their child will get lost in the crowd. A smaller school setting can create more opportunities for teacher connection, support, communication, and guidance.</p>
<p>Public listings describe WOLCA as serving PK through 8th Grade in Springfield, VA, and Niche lists the school with a 14:1 student-teacher ratio. WOLCA’s official site also highlights small classes, including a “9-12 Student Per Class” message in its distinguished programming section.</p>
</div>
<a className="inline-block bg-[#162B55] hover:bg-[#213E7C] text-[#FFFFFF] text-lg font-normal px-6 py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(22,43,85,0.2)]" href="#tour-form">
                        Schedule a Private Tour
                    </a>
</div>
<div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

<div className="relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.06)] group h-56 sm:h-64 border border-[#F5F7FA]">
<img alt="Students engaging in a classroom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#162B55]/80 via-[#162B55]/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg text-left pr-6">
<div className="text-2xl font-normal text-[#D9A441] tracking-tight mb-0.5">PK–8th</div>
<div className="text-base font-normal text-[#162B55]">Grade Levels</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.06)] group h-56 sm:h-64 border border-[#F5F7FA]">
<img alt="Teacher working closely with a student" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#162B55]/80 via-[#162B55]/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg text-left pr-6">
<div className="text-2xl font-normal text-[#D9A441] tracking-tight mb-0.5">14:1</div>
<div className="text-base font-normal text-[#162B55]">Student-Teacher Ratio</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.06)] group h-56 sm:h-64 border border-[#F5F7FA]">
<img alt="Small focused classroom setting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#162B55]/80 via-[#162B55]/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg text-left pr-6">
<div className="text-2xl font-normal text-[#D9A441] tracking-tight mb-0.5">9–12</div>
<div className="text-base font-normal text-[#162B55]">Students Per Class</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(22,43,85,0.06)] group h-56 sm:h-64 border border-[#F5F7FA]">
<img alt="Brick campus building" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#162B55]/80 via-[#162B55]/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg text-left pr-6">
<div className="text-2xl font-normal text-[#D9A441] tracking-tight mb-0.5">Springfield</div>
<div className="text-base font-normal text-[#162B55]">Virginia</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="max-w-3xl mb-8 lg:mb-12 text-left">
<span className="inline-block text-[#D9A441] text-sm font-normal tracking-widest uppercase mb-2">
                    Trusted by Families
                </span>
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4">
                    What Parents Notice When Their Child Gets More Support
                </h2>
<p className="text-lg text-[#5B6472] leading-relaxed">
                    Parents often describe the difference in practical terms: more attention, a calmer environment, stronger teacher relationships, and greater peace of mind.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-8">

<div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-[0_4px_16px_rgba(22,43,85,0.03)] flex flex-col h-full relative text-left">
<p className="text-[#5B6472] text-lg italic leading-relaxed mb-6 flex-grow">
                        "We wanted a safer, more structured environment where our child would not get lost in the crowd. WOLCA gave us that and more."
                    </p>
<div className="border-t border-[#F5F7FA] pt-4 mt-auto">
<div className="text-base font-normal text-[#162B55]">Parent of Elementary Student</div>
</div>
</div>

<div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-[0_4px_16px_rgba(22,43,85,0.03)] flex flex-col h-full relative text-left">
<p className="text-[#5B6472] text-lg italic leading-relaxed mb-6 flex-grow">
                        "The small class setting made a huge difference. Teachers know our daughter, support her well, and communicate with us as parents."
                    </p>
<div className="border-t border-[#F5F7FA] pt-4 mt-auto">
<div className="text-base font-normal text-[#162B55]">Parent of Middle School Student</div>
</div>
</div>

<div className="bg-[#FFFFFF] p-6 rounded-2xl shadow-[0_4px_16px_rgba(22,43,85,0.03)] flex flex-col h-full relative text-left">
<p className="text-[#5B6472] text-lg italic leading-relaxed mb-6 flex-grow">
                        "One of the biggest changes we noticed was our child’s confidence. Being in a more supportive environment helped academically and personally."
                    </p>
<div className="border-t border-[#F5F7FA] pt-4 mt-auto">
<div className="text-base font-normal text-[#162B55]">Parent of K5 Student</div>
</div>
</div>
</div>
<div className="text-left">
<a className="inline-block bg-[#162B55] hover:bg-[#213E7C] text-[#FFFFFF] text-lg font-normal px-6 py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(22,43,85,0.2)]" href="#tour-form">
                    Schedule a Private Tour
                </a>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-12 lg:py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(22,43,85,0.08)] bg-[#F5F7FA]">
<img alt="Student focused on learning in a calm environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="order-1 lg:order-2 text-left">
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4 leading-tight">
                        When Students Feel Safe and Supported, They Are Better Able to Learn
                    </h2>
<div className="space-y-4 text-lg text-[#5B6472] leading-relaxed mb-6">
<p>A calmer, more structured school environment does more than improve peace of mind. It also helps students focus, participate, and grow academically with greater confidence.</p>
<p>WOLCA serves students from Preschool through 8th Grade and presents a whole-child approach on its official site, supporting academic, spiritual, social, and emotional development.</p>
</div>
<ul className="space-y-2">
<li className="text-lg text-[#162B55] font-normal text-left flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D9A441] before:rounded-full before:mr-3">Small class settings</li>
<li className="text-lg text-[#162B55] font-normal text-left flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D9A441] before:rounded-full before:mr-3">Caring teacher relationships</li>
<li className="text-lg text-[#162B55] font-normal text-left flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D9A441] before:rounded-full before:mr-3">Structured school culture</li>
<li className="text-lg text-[#162B55] font-normal text-left flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D9A441] before:rounded-full before:mr-3">Academic and personal growth</li>
<li className="text-lg text-[#162B55] font-normal text-left flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D9A441] before:rounded-full before:mr-3">Whole-child development</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="max-w-2xl mb-8 lg:mb-12 text-left">
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4">
                    More Than a Safer School—A Place for Students to Grow
                </h2>
<p className="text-lg lg:text-xl text-[#5B6472] leading-relaxed">
                    Students benefit from opportunities that help them grow in confidence, discipline, creativity, and teamwork.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
<div className="bg-[#FFFFFF] rounded-2xl shadow-[0_2px_8px_rgba(22,43,85,0.04)] overflow-hidden flex flex-col text-left transition-transform hover:-translate-y-1 duration-300">
<div className="h-40 overflow-hidden">
<img alt="STEM &amp; Critical Thinking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-normal text-[#213E7C] tracking-tight mb-2">STEM &amp; Critical Thinking</h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">Opportunities designed to challenge and engage young minds.</p>
</div>
</div>
<div className="bg-[#FFFFFF] rounded-2xl shadow-[0_2px_8px_rgba(22,43,85,0.04)] overflow-hidden flex flex-col text-left transition-transform hover:-translate-y-1 duration-300">
<div className="h-40 overflow-hidden">
<img alt="Fine Arts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-normal text-[#213E7C] tracking-tight mb-2">Fine Arts</h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">Programs that build confidence and encourage creative expression.</p>
</div>
</div>
<div className="bg-[#FFFFFF] rounded-2xl shadow-[0_2px_8px_rgba(22,43,85,0.04)] overflow-hidden flex flex-col text-left transition-transform hover:-translate-y-1 duration-300">
<div className="h-40 overflow-hidden">
<img alt="Athletics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-normal text-[#213E7C] tracking-tight mb-2">Athletics</h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">Activities that encourage personal discipline and teamwork.</p>
</div>
</div>
<div className="bg-[#FFFFFF] rounded-2xl shadow-[0_2px_8px_rgba(22,43,85,0.04)] overflow-hidden flex flex-col text-left transition-transform hover:-translate-y-1 duration-300">
<div className="h-40 overflow-hidden">
<img alt="Service &amp; Leadership" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-normal text-[#213E7C] tracking-tight mb-2">Service &amp; Leadership</h3>
<p className="text-base text-[#5B6472] leading-relaxed flex-1">Opportunities that foster character and community responsibility.</p>
</div>
</div>
</div>
<div className="text-left">
<a className="inline-block text-[#213E7C] text-base font-normal border border-[#213E7C]/20 hover:bg-[#213E7C] hover:text-[#FFFFFF] px-6 py-2.5 rounded-xl transition-all" href="#tour-form">
                    Come See It in Person
                </a>
</div>
</div>
</section>

<section className="bg-[#162B55] py-12 lg:py-20 relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-[#213E7C] rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-[#D9A441] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="text-left">
<span className="inline-block text-[#E8C26A] text-sm font-normal tracking-widest uppercase mb-3">
                        Private Tour Invitation
                    </span>
<h2 className="text-3xl lg:text-4xl font-normal text-[#FFFFFF] tracking-tight mb-4">
                        The Best Way to Know If It Feels Right Is to Visit in Person
                    </h2>
<div className="text-lg lg:text-xl text-[#FFFFFF]/80 leading-relaxed mb-6 space-y-3">
<p>A private tour gives families the chance to experience the environment firsthand.</p>
<p>Walk the campus, meet the team, ask questions, and see whether WOLCA feels like the kind of place where your child can be safe, supported, and known.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 text-left">
<ul className="space-y-2">
<li className="text-base font-normal text-[#FFFFFF] flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#E8C26A] before:rounded-full before:mr-3">See the campus in person</li>
<li className="text-base font-normal text-[#FFFFFF] flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#E8C26A] before:rounded-full before:mr-3">Learn about class settings</li>
</ul>
<ul className="space-y-2">
<li className="text-base font-normal text-[#FFFFFF] flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#E8C26A] before:rounded-full before:mr-3">Ask about admissions and tuition</li>
<li className="text-base font-normal text-[#FFFFFF] flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#E8C26A] before:rounded-full before:mr-3">Explore the school culture firsthand</li>
</ul>
</div>
<a className="inline-block bg-[#162B55] hover:bg-[#213E7C] border border-[#FFFFFF]/20 text-[#FFFFFF] text-lg font-normal px-8 py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(22,43,85,0.3)]" href="#tour-form">
                        Schedule Your Private Tour
                    </a>
<p className="mt-4 text-sm text-[#FFFFFF]/60">
                        Families are encouraged to schedule early to discuss grade availability and next steps.
                    </p>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.2)] border border-[#FFFFFF]/10">
<img alt="Beautiful school campus building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-12 lg:py-16" id="tour-form">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="text-left">
<h2 className="text-3xl lg:text-4xl font-normal text-[#162B55] tracking-tight mb-4 leading-tight">
                        Give Your Child a School Environment Where They Can Feel Safe, Supported, and Ready to Thrive
                    </h2>
<p className="text-xl text-[#5B6472] leading-relaxed mb-6">
                        If you are looking for a more personal, structured school experience for your child, we invite you to schedule a private tour and see whether WOLCA is the right fit for your family.
                    </p>
<div className="bg-[#F5F7FA] p-5 rounded-xl border border-[#F5F7FA]/50 text-left">
<p className="text-base font-normal text-[#162B55]">
                            No pressure. Just a chance to explore the environment, ask questions, and see whether WOLCA is the right fit.
                        </p>
</div>
</div>
<div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl shadow-[0_8px_32px_rgba(22,43,85,0.06)] border border-gray-100 text-left">
<div className="mb-6 text-left">
<h3 className="text-2xl font-normal text-[#162B55] tracking-tight mb-2">Request a Private Tour</h3>
<p className="text-base text-[#5B6472]">Submit your details and our admissions team will contact you to schedule your visit.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="sr-only" htmlFor="parentName">Parent Name</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F5F7FA] text-lg text-[#162B55] placeholder:text-[#5B6472]/60 focus:bg-[#FFFFFF] focus:border-[#213E7C]/30 focus:outline-none focus:ring-4 focus:ring-[#213E7C]/10 transition-all text-left" id="parentName" placeholder="Parent Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="emailAddress">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F5F7FA] text-lg text-[#162B55] placeholder:text-[#5B6472]/60 focus:bg-[#FFFFFF] focus:border-[#213E7C]/30 focus:outline-none focus:ring-4 focus:ring-[#213E7C]/10 transition-all text-left" id="emailAddress" placeholder="Email Address" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="phoneNumber">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F5F7FA] text-lg text-[#162B55] placeholder:text-[#5B6472]/60 focus:bg-[#FFFFFF] focus:border-[#213E7C]/30 focus:outline-none focus:ring-4 focus:ring-[#213E7C]/10 transition-all text-left" id="phoneNumber" placeholder="Phone Number" type="tel"/>
</div>
<div className="relative">
<label className="sr-only" htmlFor="studentGrade">Student Grade Interest</label>
<select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F5F7FA] text-lg text-[#5B6472] appearance-none focus:bg-[#FFFFFF] focus:border-[#213E7C]/30 focus:outline-none focus:ring-4 focus:ring-[#213E7C]/10 transition-all cursor-pointer text-left" id="studentGrade">
<option disabled="" selected="" value="">Student Grade Interest</option>
<option value="preschool">Preschool</option>
<option value="k5">Kindergarten (K5)</option>
<option value="elementary">Elementary (1st-5th)</option>
<option value="middle">Middle School (6th-8th)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#5B6472]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-[#162B55] hover:bg-[#213E7C] text-[#FFFFFF] text-lg font-normal px-6 py-3 rounded-xl transition-all shadow-[0_4px_20px_rgba(22,43,85,0.2)]" type="submit">
                                Schedule Your Private Tour Today
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#F5F7FA] py-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
<div className="text-[#162B55] font-normal text-lg mb-3 uppercase tracking-tight">Word of Life Christian Academy</div>
<div className="text-base text-[#5B6472] space-y-1 mb-4">
<p>5225 Backlick Road, Springfield, VA 22151</p>
<p><a className="hover:text-[#213E7C] transition-colors" href="tel:703-354-4222">703-354-4222</a></p>
</div>
<div className="text-sm text-[#5B6472]/60">
                © 2024 Word of Life Christian Academy. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
