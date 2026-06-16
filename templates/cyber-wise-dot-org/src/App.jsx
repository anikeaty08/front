import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full py-6 px-6 sm:px-12 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2">
<i className="text-[#f88d4e]" data-lucide="book-open-check" strokeWidth="1.5"></i>
<span className="text-3xl font-semibold tracking-tight text-[#133cd4]">cyber<span className="text-[#f88d4e]">wise</span></span>
</div>
</header>
<main className="flex-grow">

<section className="max-w-4xl mx-auto text-center pt-24 pb-16 px-6 sm:pt-32 sm:pb-20">
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-8">
                Welcome to <span className="text-[#133cd4]">Cyber</span><span className="text-[#f88d4e]">Wise</span>!
            </h1>
<p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                We teach students from 4th-8th grade about online safety at a time where it's needed now more than ever.
            </p>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 gap-x-4 gap-y-4 items-center justify-center">
<button className="sm:w-auto hover:bg-orange-500 transition-colors text-lg font-medium text-white bg-[#f88d4e] w-full rounded-md pt-3 pr-10 pb-3 pl-10 shadow-sm">
                    About us
                </button>
<button className="w-full sm:w-auto bg-[#f88d4e] hover:bg-orange-500 text-white font-medium py-3 px-10 rounded-md transition-colors text-lg shadow-sm">
                    Get Involved
                </button>
<button className="w-full sm:w-auto bg-[#f88d4e] hover:bg-orange-500 text-white font-medium py-3 px-10 rounded-md transition-colors text-lg shadow-sm">
                    Blog
                </button>
</div>
</section>

<section className="max-w-5xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight text-left mb-8">Reviews from Instructors:</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex flex-col hover:shadow-md transition-shadow text-center bg-white border-[#133cd4]/30 border-2 rounded-lg pt-10 pr-10 pb-10 pl-10 shadow-sm items-center justify-center">
<p className="text-lg text-gray-700 mb-6 font-medium">"Blah Blah Blah Blah"</p>
<p className="text-base text-gray-500">- Teacher McTeacherson</p>
</div>
<div className="flex flex-col hover:shadow-md transition-shadow text-center bg-white border-[#133cd4]/30 border-2 rounded-lg pt-10 pr-10 pb-10 pl-10 shadow-sm items-center justify-center">
<p className="text-lg text-gray-700 mb-6 font-medium">"I like it"</p>
<p className="text-base text-gray-500">- Professor P.</p>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-100 border-t mt-12 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<h2 className="sm:text-5xl leading-tight text-4xl font-semibold text-gray-900 tracking-tight">
                        We Started CyberWise Because Parents Needed <span className="text-[#f88d4e]">Answers.</span><br/><br/> We Built Cyber Civics Because Kids Needed <span className="text-[#f88d4e]">More.</span>
</h2>
</div>
<div className="lg:col-span-7 space-y-8 text-lg text-gray-700 leading-relaxed">
<div className="flex items-center gap-3 mb-6">
<i className="text-[#133cd4]" data-lucide="info" strokeWidth="1.5"></i>
<h3 className="text-2xl font-semibold tracking-tight text-[#133cd4] uppercase tracking-wider">About Cyberwise</h3>
</div>
<p>
                        CyberWise is a resource site for BUSY grownups seeking to help youth use tech safely and wisely. It was founded in 2011 by Diana Graber and Cynthia Lieberman after they received M.A. degrees in Media Psychology and Social Change, a pioneering field that focuses on how human behavior is affected by media. They decided to use their academic work and entertainment/media experience to benefit parents and kids.
                    </p>
<p className="">
                        However, it quickly became apparent that information alone wasn't enough. If kids were going to navigate the digital world safely and ethically, they needed to learn those skills somewhere structured — somewhere with community, discussion, and real curriculum. So Diana created <span className="font-semibold underline decoration-[#f88d4e] decoration-2 underline-offset-4">Cyber Civics</span>, our award-winning digital literacy program taught across the US and internationally.
                    </p>
<p className="text-base text-gray-500 italic mt-8 pt-6 border-t border-gray-200">
                        Parents can learn more in Diana's book, "Raising Humans in a Digital World: Helping Kids Build a Healthy Relationship with Technology" (HarperCollins Leadership, '19).
                    </p>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-100 py-8 text-center px-6">
<p className="text-base text-gray-500">© 2024 CyberWise. All rights reserved.</p>
</footer>


    </>
  );
}
