import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'cream': '#F4F0E9',
'dark-brown': '#25201D',
'accent-brown': '#4A3728',
'light-brown': '#D6CEC6'
},
spacing: {
'128': '32rem',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="font-serif text-2xl font-medium tracking-tight">Floristy</div>
<div className="hidden md:flex space-x-12 text-xs font-medium tracking-widest text-gray-600">
<a className="hover:text-black" href="#">HOME</a>
<a className="hover:text-black" href="#">ABOUT</a>
<a className="hover:text-black" href="#">TERMS</a>
<a className="hover:text-black" href="#">CONTACT</a>
</div>
<button className="bg-[#3E2D23] text-white text-[10px] font-medium tracking-wider px-6 py-3 rounded-full hover:bg-black transition-colors">
            GET STARTED
        </button>
</nav>

<header className="relative w-full pt-16 pb-32 max-w-7xl mx-auto px-6 overflow-hidden">

<div className="text-center z-20 relative mb-12">
<h1 className="font-serif text-5xl md:text-7xl font-medium uppercase leading-[1.1] tracking-tight text-[#1A1816]">
                High Quality Legal <br/> Consultancy
            </h1>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[500px] items-center">

<div className="md:col-span-3 flex flex-col justify-center items-start pl-4 z-20">
<i className="w-6 h-6 mb-4 stroke-[1.5] text-gray-800" data-lucide="arrow-down"></i>
<p className="text-base text-gray-800 leading-snug max-w-[200px]">
                    Specialist Family Lawyers and Divorce Solicitors.
                </p>

<div className="absolute left-[-20px] top-[60%] hidden md:block opacity-90 transform -rotate-12">
<img alt="Gavel" className="w-32 h-auto mix-blend-multiply drop-shadow-xl" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;bg=transparent" style={{filter: 'contrast(1.1) sepia(0.3)'}}/>
</div>
</div>

<div className="md:col-span-6 relative flex justify-center items-center h-full">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
<span className="font-serif text-[180px] md:text-[240px] text-[#EAE4D8] opacity-60 font-medium tracking-widest leading-none">
                        LAWYER
                    </span>
</div>

<img alt="Lady Justice" className="h-[450px] md:h-[580px] w-auto object-contain z-10 relative drop-shadow-2xl filter sepia-[0.15] contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="md:col-span-3 flex flex-col justify-start items-end pr-4 z-20 h-full pt-20">
<p className="text-sm text-gray-700 leading-relaxed text-right max-w-[220px] mb-20">
                    Family law is all we do, so whatever your situation, it will be familiar to us. We strive to expand time.
                </p>

<div className="relative w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center animate-spin-slow">
<svg className="w-full h-full absolute" viewbox="0 0 100 100">
<defs>
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path>
</defs>
<text className="uppercase font-medium tracking-widest" fill="currentColor" fontSize="11">
<textpath xlink:href="#circle">
                                Best for you • Best for you •
                            </textpath>
</text>
</svg>
<i className="w-4 h-4 fill-current text-black ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-serif text-3xl md:text-4xl font-medium uppercase tracking-tight mb-4 text-[#1A1816]">
                The Area Where We <br/> Practise Law
            </h2>
<p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                We offer a wide range of services to our customers and we go the extra length to make sure justice is served.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="flex flex-col items-center group">
<div className="w-10 h-10 rounded-full bg-[#E8E2D2] flex items-center justify-center mb-6 text-[#4A3728]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3">Business Law</h3>
<p className="text-xs text-gray-500 leading-relaxed px-8">
                    There are various forms of legal business entities ranging from the sole trader
                </p>
</div>

<div className="flex flex-col items-center group">
<div className="w-10 h-10 rounded-full bg-[#E8E2D2] flex items-center justify-center mb-6 text-[#4A3728]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="scale"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3">Criminal Law</h3>
<p className="text-xs text-gray-500 leading-relaxed px-8">
                    Criminal law is the body of law that relates to crime. Conduct perceived as threatening, harmful.
                </p>
</div>

<div className="flex flex-col items-center group">
<div className="w-10 h-10 rounded-full bg-[#E8E2D2] flex items-center justify-center mb-6 text-[#4A3728]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3">Family Law</h3>
<p className="text-xs text-gray-500 leading-relaxed px-8">
                    Family law is a legal practice area that focuses on issues involving family relationships
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-medium uppercase tracking-tight text-[#1A1816]">
                Meet Our Most Talented And <br/> Qualified Attorneys
            </h2>
</div>

<div className="absolute left-0 bottom-20 hidden lg:block z-10">
<img alt="Gavel" className="w-40 h-auto transform rotate-45 mix-blend-multiply opacity-90 drop-shadow-xl" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;bg=transparent" style={{filter: 'contrast(1.1) sepia(0.4)'}}/>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="pl-0 lg:pl-16 z-20">
<h3 className="font-serif text-2xl font-medium uppercase mb-6 tracking-wide text-gray-800">
                    Lead Counsel <br/> Verified Attorneys
                </h3>
<p className="text-sm text-gray-500 leading-loose mb-8 max-w-md">
                    When looking for an attorney, you want a professional who has experience dealing with cases like yours and maintains the highest ethical and customer service.
                </p>
<a className="inline-block border-b border-[#A64D4D] text-[#A64D4D] text-sm font-medium pb-0.5 hover:text-red-700 transition-colors" href="#">
                    Learn More
                </a>
</div>

<div className="relative flex justify-center lg:justify-start">

<div className="absolute top-10 right-10 w-64 h-80 bg-[#EADCC7] rounded-tl-[100px] rounded-br-[100px] z-0 opacity-50"></div>

<div className="relative z-10">
<img alt="Attorney" className="h-[400px] w-auto object-cover rounded-none grayscale-[0.2] contrast-[1.1]" src="https://img.freepik.com/free-photo/portrait-female-lawyer-holding-gavel-looking-camera_23-2148154332.jpg?t=st=1708453000~exp=1708453600~hmac=abcdef" style={{clipPath: 'circle(70% at 50% 40%)', marginBottom: '-40px'}}/>
</div>


<div className="absolute top-10 left-10 bg-[#F4F0E9] p-4 rounded-full shadow-lg border border-white z-20 w-24 h-24 flex flex-col items-center justify-center text-center">
<span className="font-serif text-lg font-bold text-gray-900 leading-none">95%</span>
<span className="text-[8px] uppercase tracking-wide text-gray-500 mt-1">Legal Solution</span>
</div>

<div className="absolute bottom-10 left-0 bg-[#F4F0E9] px-4 py-3 rounded shadow-lg border border-white z-20 flex flex-col items-center text-center">
<span className="font-serif text-lg font-bold text-gray-900 leading-none">550+</span>
<span className="text-[8px] uppercase tracking-wide text-gray-500 mt-1">Project Done</span>
</div>

<div className="absolute bottom-0 right-10 bg-[#F4F0E9] p-3 rounded-full shadow-lg border border-white z-20 w-20 h-20 flex flex-col items-center justify-center text-center">
<span className="font-serif text-lg font-bold text-gray-900 leading-none">100%</span>
<span className="text-[7px] uppercase tracking-wide text-gray-500 mt-0.5">Project Success</span>
</div>
</div>
</div>
</section>

<section className="bg-[#25201D] text-white py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

<div className="space-y-6">
<h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight tracking-tight text-[#F4F0E9]">
                        WHAT BENEFITS <br/> WILL YOU GET <br/> FROM US?
                    </h2>
<p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                        We provide high quality law service for you with best integrated people.
                    </p>
<button className="bg-[#F4F0E9] text-[#25201D] px-6 py-2.5 rounded text-[10px] font-bold tracking-wider uppercase mt-4 hover:bg-gray-200 transition-colors">
                        Find Attorney
                    </button>
</div>

<div className="relative flex justify-center py-10 lg:py-0">

<div className="absolute bg-[#F4F0E9] w-64 h-80 rotate-6 z-0 rounded-sm shadow-2xl"></div>

<div className="relative z-10 w-60 h-80 overflow-hidden bg-gray-800 rotate-[-2deg] border-4 border-[#F4F0E9] shadow-xl">
<img alt="Lawyer" className="w-full h-full object-cover grayscale-[0.3]" src="https://img.freepik.com/free-photo/medium-shot-man-posing-as-lawyer_23-2151054084.jpg"/>
</div>
</div>

<div className="space-y-8 pl-0 lg:pl-10">

<div>
<h4 className="font-serif text-lg font-medium text-[#F4F0E9] mb-2">Legal representation</h4>
<p className="text-gray-500 text-[11px] leading-relaxed max-w-xs">
                            This can include criminal defense, civil litigation, and various legal negotiations.
                        </p>
</div>

<div>
<h4 className="font-serif text-lg font-medium text-[#F4F0E9] mb-2">Allegations</h4>
<p className="text-gray-500 text-[11px] leading-relaxed max-w-xs">
                            You have a right to know every detail of the allegation.
                        </p>
</div>

<div>
<h4 className="font-serif text-lg font-medium text-[#F4F0E9] mb-2">Support</h4>
<p className="text-gray-500 text-[11px] leading-relaxed max-w-xs">
                            Our team is available 24/7 to provide help and support.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center bg-[#F4F0E9]">
<h2 className="font-serif text-3xl font-medium uppercase tracking-tight text-[#1A1816] mb-8">
            Want A Lawyer?
        </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
<button className="border border-[#1A1816] px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-medium hover:bg-[#1A1816] hover:text-white transition-colors">
                Contact Us
            </button>
<div className="hidden md:block w-16 h-[1px] bg-[#1A1816] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#1A1816] rotate-45"></div>
</div>
<div className="font-serif text-2xl md:text-3xl text-[#1A1816] tracking-tight">
                LET'S TALK
            </div>
</div>
<a className="font-serif text-2xl md:text-3xl text-[#1A1816] tracking-tight hover:underline decoration-1 underline-offset-4" href="mailto:hello@ofspace.co">
            HELLO@OFSPACE.CO
        </a>
</section>

<footer className="py-10 px-8 border-t border-gray-200 bg-[#F4F0E9]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

<div className="font-serif text-xl font-medium tracking-tight text-gray-800">
                Floristy
            </div>

<div className="flex space-x-8 text-[10px] font-medium tracking-widest uppercase text-gray-500">
<a className="hover:text-black" href="#">Home</a>
<a className="hover:text-black" href="#">Projects</a>
<a className="hover:text-black" href="#">Blog</a>
<a className="hover:text-black" href="#">Contacts</a>
</div>

<div className="text-[9px] text-gray-400 text-center md:text-right leading-tight">
                © 2023 Designed by <span className="font-bold text-gray-600">Ofspace LLC</span><br/>
                Powered by <span className="font-bold text-gray-600">Webflow</span>
</div>
</div>
</footer>


    </>
  );
}
