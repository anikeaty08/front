import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
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

        // FAQ Accordion Logic
        function toggleFaq(element) {
            const isActive = element.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked if it wasn't active
            if (!isActive) {
                element.classList.add('active');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":0,"w":1040,"h":80,"abs_x":480,"abs_y":42}' className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-dark)]/70 backdrop-blur-xl border-b border-[var(--color-accent)] transition-all duration-300">
<div bis_size='{"x":0,"y":0,"w":1040,"h":80,"abs_x":480,"abs_y":42}' className="md:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a bis_size='{"x":32,"y":26,"w":193,"h":28,"abs_x":512,"abs_y":68}' className="flex items-center gap-3 group" href="#">
<span bis_size='{"x":32,"y":26,"w":193,"h":28,"abs_x":512,"abs_y":68}' className="hidden sm:block text-xl font-semibold tracking-tight">Hugo Rivera Fitness</span>
</a>
<div bis_size='{"x":320,"y":30,"w":428,"h":20,"abs_x":800,"abs_y":72}' className="hidden md:flex gap-8 text-[var(--color-text-sec)] text-sm font-medium gap-x-8 gap-y-8 items-center">
<a bis_size='{"x":320,"y":30,"w":69,"h":20,"abs_x":800,"abs_y":72}' className="hover:text-[var(--color-text-pri)] transition-colors" href="/#about-me">About Me</a>
<a bis_size='{"x":421,"y":30,"w":52,"h":20,"abs_x":901,"abs_y":72}' className="hover:text-[var(--color-text-pri)] transition-colors" href="#results">Results</a>
<a bis_size='{"x":506,"y":30,"w":29,"h":20,"abs_x":986,"abs_y":72}' className="hover:text-[var(--color-text-pri)] transition-colors" href="#faq">FAQ</a>
<a bis_size='{"x":568,"y":30,"w":90,"h":20,"abs_x":1048,"abs_y":72}' className="hover:text-[var(--color-text-pri)] transition-colors" href="/#buy-book">Buy My Book</a>
<a bis_size='{"x":690,"y":30,"w":58,"h":20,"abs_x":1170,"abs_y":72}' className="hover:text-[var(--color-text-pri)] transition-colors" href="#program">Contact</a>
</div>
<div bis_size='{"x":843,"y":20,"w":165,"h":40,"abs_x":1323,"abs_y":62}' className="flex items-center gap-4">
<button bis_size='{"x":843,"y":20,"w":165,"h":40,"abs_x":1323,"abs_y":62}' className="cta-btn hidden sm:inline-flex text-sm py-2 px-4 min-h-[40px]">
<span bis_size='{"x":843,"y":20,"w":165,"h":40,"abs_x":1323,"abs_y":62}' className="points_wrapper"><i bis_size='{"x":860,"y":68,"w":2,"h":2,"abs_x":1340,"abs_y":110}' className="point"></i><i bis_size='{"x":893,"y":68,"w":2,"h":2,"abs_x":1373,"abs_y":110}' className="point"></i><i bis_size='{"x":884,"y":68,"w":2,"h":2,"abs_x":1364,"abs_y":110}' className="point"></i></span>
<span bis_size='{"x":859,"y":30,"w":133,"h":20,"abs_x":1339,"abs_y":72}' className="cta-btn-inner">
                Book Consultation
            </span>
</button>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' className="md:hidden text-[var(--color-text-pri)] p-2">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' x1="4" x2="20" y1="12" y2="12"></line><line bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' x1="4" x2="20" y1="6" y2="6"></line><line bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</nav>

<header bis_size='{"x":0,"y":0,"w":1040,"h":689,"abs_x":480,"abs_y":42}' className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div bis_size='{"x":220,"y":44,"w":600,"h":600,"abs_x":700,"abs_y":86}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/20 rounded-full blur-[120px] pointer-events-none"></div>
<div bis_size='{"x":72,"y":80,"w":896,"h":609,"abs_x":552,"abs_y":122}' className="flex flex-col reveal active z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div bis_size='{"x":379,"y":80,"w":281,"h":33,"abs_x":859,"abs_y":122}' className="inline-flex gap-2 border-[var(--color-glass-border)] text-[var(--color-text-sec)] text-sm font-medium border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">Accepting New Applicants for Q3<span bis_size='{"x":640,"y":92,"w":8,"h":8,"abs_x":1120,"abs_y":134}' className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span></div>
<h1 bis_size='{"x":96,"y":145,"w":848,"h":192,"abs_x":576,"abs_y":187}' className="md:text-7xl lg:text-8xl leading-[1.05] bg-clip-text text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white to-[var(--color-text-sec)] mb-8">
                Engineer Your Elite Physique.
            </h1>
<p bis_size='{"x":184,"y":369,"w":672,"h":64,"abs_x":664,"abs_y":411}' className="md:text-2xl text-[var(--color-text-sec)] leading-relaxed text-xl max-w-2xl mr-auto mb-12 ml-auto">
                Data-driven programming and uncompromising accountability for those ready to transcend average.
            </p>
<button bis_size='{"x":384,"y":481,"w":272,"h":60,"abs_x":864,"abs_y":523}' className="cta-btn text-lg px-8 py-4 mb-16">
<span bis_size='{"x":384,"y":481,"w":272,"h":60,"abs_x":864,"abs_y":523}' className="points_wrapper">
<i bis_size='{"x":411,"y":549,"w":2,"h":2,"abs_x":891,"abs_y":591}' className="point"></i><i bis_size='{"x":465,"y":549,"w":2,"h":2,"abs_x":945,"abs_y":591}' className="point"></i><i bis_size='{"x":452,"y":549,"w":2,"h":2,"abs_x":932,"abs_y":591}' className="point"></i><i bis_size='{"x":504,"y":549,"w":2,"h":2,"abs_x":984,"abs_y":591}' className="point"></i><i bis_size='{"x":520,"y":549,"w":2,"h":2,"abs_x":1000,"abs_y":591}' className="point"></i>
</span>
<span bis_size='{"x":416,"y":497,"w":208,"h":28,"abs_x":896,"abs_y":539}' className="cta-btn-inner">
                    Apply For Coaching
                    <svg bis_size='{"x":604,"y":501,"w":20,"h":20,"abs_x":1084,"abs_y":543}' className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path bis_size='{"x":608,"y":511,"w":11,"h":0,"abs_x":1088,"abs_y":553}' d="M5 12h14"></path><path bis_size='{"x":614,"y":505,"w":5,"h":11,"abs_x":1094,"abs_y":547}' d="m12 5 7 7-7 7"></path></svg>
</span>
</button>

<div bis_size='{"x":380,"y":605,"w":278,"h":84,"abs_x":860,"abs_y":647}' className="flex flex-col items-center gap-4">
<div bis_size='{"x":432,"y":605,"w":176,"h":48,"abs_x":912,"abs_y":647}' className="flex -space-x-4">
<div bis_size='{"x":432,"y":605,"w":48,"h":48,"abs_x":912,"abs_y":647}' className="w-12 h-12 rounded-full border-2 border-[var(--color-bg-dark)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)]"></div>
<div bis_size='{"x":464,"y":605,"w":48,"h":48,"abs_x":944,"abs_y":647}' className="w-12 h-12 rounded-full border-2 border-[var(--color-bg-dark)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)]"></div>
<div bis_size='{"x":496,"y":605,"w":48,"h":48,"abs_x":976,"abs_y":647}' className="w-12 h-12 rounded-full border-2 border-[var(--color-bg-dark)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)]"></div>
<div bis_size='{"x":528,"y":605,"w":48,"h":48,"abs_x":1008,"abs_y":647}' className="w-12 h-12 rounded-full border-2 border-[var(--color-bg-dark)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)]"></div>
<div bis_size='{"x":560,"y":605,"w":48,"h":48,"abs_x":1040,"abs_y":647}' className="w-12 h-12 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface)] flex items-center justify-center text-xs font-medium text-[var(--color-text-pri)]">
                        +2k
                    </div>
</div>
<p bis_size='{"x":380,"y":669,"w":278,"h":20,"abs_x":860,"abs_y":711}' className="text-sm text-[var(--color-text-sec)]">Join over <span bis_size='{"x":450,"y":670,"w":47,"h":17,"abs_x":930,"abs_y":712}' className="text-[var(--color-text-pri)] font-medium">2,100+</span> members transformed</p>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":689,"w":1040,"h":173,"abs_x":480,"abs_y":731}' className="border-y border-[var(--color-divider)] bg-[var(--color-surface)] py-12 reveal">
<div bis_size='{"x":0,"y":738,"w":1040,"h":76,"abs_x":480,"abs_y":780}' className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--color-divider)]">
<div bis_size='{"x":24,"y":738,"w":309,"h":76,"abs_x":504,"abs_y":780}' className="flex flex-col items-center text-center pt-8 md:pt-0">
<span bis_size='{"x":100,"y":738,"w":157,"h":48,"abs_x":580,"abs_y":780}' className="text-4xl md:text-5xl font-semibold text-[var(--color-accent)] tracking-tight mb-2">2,100+</span>
<span bis_size='{"x":78,"y":794,"w":201,"h":20,"abs_x":558,"abs_y":836}' className="text-sm text-[var(--color-text-sec)] uppercase tracking-wider font-medium">Members Transformed</span>
</div>
<div bis_size='{"x":365,"y":738,"w":309,"h":76,"abs_x":845,"abs_y":780}' className="flex flex-col items-center text-center pt-8 md:pt-0">
<span bis_size='{"x":475,"y":738,"w":91,"h":48,"abs_x":955,"abs_y":780}' className="text-4xl md:text-5xl font-semibold text-[var(--color-accent)] tracking-tight mb-2">20+</span>
<span bis_size='{"x":448,"y":794,"w":144,"h":20,"abs_x":928,"abs_y":836}' className="text-sm text-[var(--color-text-sec)] uppercase tracking-wider font-medium">Years Coaching</span>
</div>
<div bis_size='{"x":707,"y":738,"w":309,"h":76,"abs_x":1187,"abs_y":780}' className="flex flex-col items-center text-center pt-8 md:pt-0">
<span bis_size='{"x":798,"y":738,"w":126,"h":48,"abs_x":1278,"abs_y":780}' className="text-4xl md:text-5xl font-semibold text-[var(--color-accent)] tracking-tight mb-2">500+</span>
<span bis_size='{"x":779,"y":794,"w":166,"h":20,"abs_x":1259,"abs_y":836}' className="text-sm text-[var(--color-text-sec)] uppercase tracking-wider font-medium">Competition Titles</span>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":863,"w":1040,"h":208,"abs_x":480,"abs_y":905}' className="py-16 bg-[var(--color-bg-base)] overflow-hidden reveal">
<div bis_size='{"x":0,"y":927,"w":1040,"h":16,"abs_x":480,"abs_y":969}' className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p bis_size='{"x":24,"y":927,"w":992,"h":16,"abs_x":504,"abs_y":969}' className="text-xs text-[var(--color-text-mut)] uppercase tracking-widest font-medium">Trusted By Athletes Featured In</p>
</div>
<div bis_size='{"x":8,"y":975,"w":1024,"h":32,"abs_x":488,"abs_y":1017}' className="relative w-full max-w-5xl mx-auto ticker-mask">
<div bis_size='{"x":8,"y":975,"w":2048,"h":32,"abs_x":488,"abs_y":1017}' className="flex w-[200%] animate-scroll items-center gap-16 md:gap-24 opacity-40">

<div bis_size='{"x":8,"y":975,"w":1042,"h":32,"abs_x":488,"abs_y":1017}' className="flex gap-16 md:gap-24 items-center shrink-0">
<span bis_size='{"x":8,"y":975,"w":168,"h":32,"abs_x":488,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">MEN'S HEALTH</span>
<span bis_size='{"x":272,"y":975,"w":100,"h":32,"abs_x":752,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">OXYGEN</span>
<span bis_size='{"x":468,"y":975,"w":216,"h":32,"abs_x":948,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">MUSCLE &amp; FITNESS</span>
<span bis_size='{"x":780,"y":975,"w":53,"h":32,"abs_x":1260,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">FLEX</span>
<span bis_size='{"x":930,"y":975,"w":120,"h":32,"abs_x":1410,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">IRONMAN</span>
</div>
<div bis_size='{"x":1146,"y":975,"w":1042,"h":32,"abs_x":1626,"abs_y":1017}' className="flex gap-16 md:gap-24 items-center shrink-0">
<span bis_size='{"x":1146,"y":975,"w":168,"h":32,"abs_x":1626,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">MEN'S HEALTH</span>
<span bis_size='{"x":1410,"y":975,"w":100,"h":32,"abs_x":1890,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">OXYGEN</span>
<span bis_size='{"x":1606,"y":975,"w":216,"h":32,"abs_x":2086,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">MUSCLE &amp; FITNESS</span>
<span bis_size='{"x":1919,"y":975,"w":53,"h":32,"abs_x":2399,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">FLEX</span>
<span bis_size='{"x":2068,"y":975,"w":120,"h":32,"abs_x":2548,"abs_y":1017}' className="text-2xl font-semibold tracking-tighter text-[var(--color-text-sec)]">IRONMAN</span>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1071,"w":1040,"h":826,"abs_x":480,"abs_y":1113}' className="py-24 overflow-hidden reveal" id="results">
<div bis_size='{"x":0,"y":1167,"w":1040,"h":634,"abs_x":480,"abs_y":1209}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":1167,"w":992,"h":120,"abs_x":504,"abs_y":1209}' className="mb-16 text-center">
<h2 bis_size='{"x":24,"y":1167,"w":992,"h":48,"abs_x":504,"abs_y":1209}' className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Client Highlights</h2>
<p bis_size='{"x":232,"y":1231,"w":576,"h":56,"abs_x":712,"abs_y":1273}' className="text-[var(--color-text-sec)] max-w-xl mx-auto">Real people achieving unsustainable goals through sustainable, scientifically-backed protocols.</p>
</div>
<div bis_size='{"x":24,"y":1351,"w":992,"h":450,"abs_x":504,"abs_y":1393}' className="relative flex items-center justify-center" style={{minHeight: '450px'}}>
<div bis_size='{"x":24,"y":1576,"w":992,"h":0,"abs_x":504,"abs_y":1618}' className="container max-w-full flex justify-center items-center h-full relative">

<div bis_size='{"x":296,"y":1419,"w":381,"h":325,"abs_x":776,"abs_y":1461}' className="absolute w-[300px] md:w-[340px] transition-transform duration-500 hover:z-10 hover:scale-105" style={{transform: 'rotate(-10deg) translateX(-10%)'}}>
<div bis_size='{"x":296,"y":1419,"w":381,"h":325,"abs_x":776,"abs_y":1461}' className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-accent)] rounded-xl p-6 shadow-2xl relative overflow-hidden group">
<div bis_size='{"x":297,"y":1421,"w":379,"h":322,"abs_x":777,"abs_y":1463}' className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
<svg bis_size='{"x":324,"y":1495,"w":27,"h":27,"abs_x":804,"abs_y":1537}' className="text-[var(--color-accent)] mb-6 opacity-80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":327,"y":1500,"w":11,"h":19,"abs_x":807,"abs_y":1542}' d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21z"></path><path bis_size='{"x":339,"y":1498,"w":11,"h":19,"abs_x":819,"abs_y":1540}' d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1-.5 1.5-1.5 1.5L17 21z"></path></svg>
<p bis_size='{"x":333,"y":1496,"w":301,"h":140,"abs_x":813,"abs_y":1538}' className="text-sm leading-relaxed text-[var(--color-text-pri)] mb-8">
                                "The level of detail in the programming is unmatched. I dropped 12% body fat while increasing my lifts. Hugo doesn't guess; he calculates."
                            </p>
<div bis_size='{"x":354,"y":1617,"w":294,"h":98,"abs_x":834,"abs_y":1659}' className="pt-4 border-t border-[var(--color-divider)] flex items-center justify-between">
<div bis_size='{"x":357,"y":1662,"w":127,"h":53,"abs_x":837,"abs_y":1704}' className="flex items-center gap-3">
<div bis_size='{"x":357,"y":1678,"w":37,"h":37,"abs_x":837,"abs_y":1720}' className="w-8 h-8 rounded-full bg-[var(--color-border)]"></div>
<div bis_size='{"x":400,"y":1662,"w":84,"h":45,"abs_x":880,"abs_y":1704}'>
<div bis_size='{"x":400,"y":1662,"w":81,"h":29,"abs_x":880,"abs_y":1704}' className="text-xs font-medium text-[var(--color-text-pri)]">Marcus T.</div>
<div bis_size='{"x":403,"y":1678,"w":81,"h":29,"abs_x":883,"abs_y":1720}' className="text-xs text-[var(--color-text-sec)]">Entrepreneur</div>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":350,"y":1441,"w":340,"h":270,"abs_x":830,"abs_y":1483}' className="absolute w-[300px] md:w-[340px] z-10 transition-transform duration-500 hover:z-20 hover:scale-105" style={{transform: 'rotate(0deg)'}}>
<div bis_size='{"x":350,"y":1441,"w":340,"h":270,"abs_x":830,"abs_y":1483}' className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-accent)] rounded-xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden group">
<div bis_size='{"x":351,"y":1442,"w":338,"h":267,"abs_x":831,"abs_y":1484}' className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
<svg bis_size='{"x":375,"y":1466,"w":24,"h":24,"abs_x":855,"abs_y":1508}' className="text-[var(--color-accent)] mb-6 opacity-80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":377,"y":1469,"w":8,"h":18,"abs_x":857,"abs_y":1511}' d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21z"></path><path bis_size='{"x":389,"y":1469,"w":8,"h":18,"abs_x":869,"abs_y":1511}' d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1-.5 1.5-1.5 1.5L17 21z"></path></svg>
<p bis_size='{"x":375,"y":1514,"w":290,"h":91,"abs_x":855,"abs_y":1556}' className="text-sm leading-relaxed text-[var(--color-text-pri)] mb-8">
                                "I've worked with numerous coaches, but this system is different. It's an education in biomechanics and nutrition. Achieved my pro card in 18 months."
                            </p>
<div bis_size='{"x":375,"y":1637,"w":290,"h":48,"abs_x":855,"abs_y":1679}' className="pt-4 border-t border-[var(--color-divider)] flex items-center justify-between">
<div bis_size='{"x":375,"y":1654,"w":94,"h":32,"abs_x":855,"abs_y":1696}' className="flex items-center gap-3">
<div bis_size='{"x":375,"y":1654,"w":32,"h":32,"abs_x":855,"abs_y":1696}' className="w-8 h-8 rounded-full bg-[var(--color-border)]"></div>
<div bis_size='{"x":419,"y":1654,"w":50,"h":32,"abs_x":899,"abs_y":1696}'>
<div bis_size='{"x":419,"y":1654,"w":50,"h":16,"abs_x":899,"abs_y":1696}' className="text-xs font-medium text-[var(--color-text-pri)]">Sarah L.</div>
<div bis_size='{"x":419,"y":1670,"w":50,"h":16,"abs_x":899,"abs_y":1712}' className="text-xs text-[var(--color-text-sec)]">IFBB Pro</div>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":366,"y":1423,"w":374,"h":314,"abs_x":846,"abs_y":1465}' className="absolute w-[300px] md:w-[340px] transition-transform duration-500 hover:z-10 hover:scale-105" style={{transform: 'rotate(8deg) translateX(10%)'}}>
<div bis_size='{"x":366,"y":1423,"w":374,"h":314,"abs_x":846,"abs_y":1465}' className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-accent)] rounded-xl p-6 shadow-2xl relative overflow-hidden group">
<div bis_size='{"x":367,"y":1425,"w":372,"h":312,"abs_x":847,"abs_y":1467}' className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
<svg bis_size='{"x":422,"y":1452,"w":27,"h":27,"abs_x":902,"abs_y":1494}' className="text-[var(--color-accent)] mb-6 opacity-80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":424,"y":1455,"w":10,"h":18,"abs_x":904,"abs_y":1497}' d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21z"></path><path bis_size='{"x":436,"y":1457,"w":10,"h":18,"abs_x":916,"abs_y":1499}' d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1-.5 1.5-1.5 1.5L17 21z"></path></svg>
<p bis_size='{"x":406,"y":1499,"w":300,"h":130,"abs_x":886,"abs_y":1541}' className="text-sm leading-relaxed text-[var(--color-text-pri)] mb-8">
                                "Accountability is the name of the game here. You aren't just given a spreadsheet; you are guided daily. Completely rewired my habits."
                            </p>
<div bis_size='{"x":394,"y":1621,"w":294,"h":88,"abs_x":874,"abs_y":1663}' className="pt-4 border-t border-[var(--color-divider)] flex items-center justify-between">
<div bis_size='{"x":394,"y":1638,"w":106,"h":45,"abs_x":874,"abs_y":1680}' className="flex items-center gap-3">
<div bis_size='{"x":394,"y":1638,"w":36,"h":36,"abs_x":874,"abs_y":1680}' className="w-8 h-8 rounded-full bg-[var(--color-border)]"></div>
<div bis_size='{"x":438,"y":1644,"w":62,"h":39,"abs_x":918,"abs_y":1686}'>
<div bis_size='{"x":440,"y":1644,"w":60,"h":24,"abs_x":920,"abs_y":1686}' className="text-xs font-medium text-[var(--color-text-pri)]">James C.</div>
<div bis_size='{"x":438,"y":1660,"w":60,"h":24,"abs_x":918,"abs_y":1702}' className="text-xs text-[var(--color-text-sec)]">Executive</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1897,"w":1040,"h":878,"abs_x":480,"abs_y":1939}' className="py-24 bg-[var(--color-bg-base)] reveal">
<div bis_size='{"x":0,"y":1993,"w":1040,"h":686,"abs_x":480,"abs_y":2035}' className="max-w-6xl mx-auto px-6">
<h2 bis_size='{"x":24,"y":1993,"w":992,"h":40,"abs_x":504,"abs_y":2035}' className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">The Distinction is Obvious.</h2>
<div bis_size='{"x":24,"y":2097,"w":992,"h":410,"abs_x":504,"abs_y":2139}' className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

<div bis_size='{"x":24,"y":2097,"w":472,"h":410,"abs_x":504,"abs_y":2139}' className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 md:p-10 flex flex-col opacity-80">
<h3 bis_size='{"x":64,"y":2138,"w":390,"h":44,"abs_x":544,"abs_y":2180}' className="text-xl font-medium text-[var(--color-text-sec)] mb-8 pb-4 border-b border-[var(--color-divider)]">The Average Gym-Goer</h3>
<ul bis_size='{"x":64,"y":2214,"w":390,"h":252,"abs_x":544,"abs_y":2256}' className="space-y-5 flex-1 text-[var(--color-text-sec)] text-base">
<li bis_size='{"x":64,"y":2214,"w":390,"h":48,"abs_x":544,"abs_y":2256}' className="flex items-start gap-3">
<svg bis_size='{"x":64,"y":2218,"w":18,"h":18,"abs_x":544,"abs_y":2260}' className="shrink-0 mt-1 text-[var(--color-text-mut)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><path bis_size='{"x":69,"y":2223,"w":9,"h":9,"abs_x":549,"abs_y":2265}' d="M18 6 6 18"></path><path bis_size='{"x":69,"y":2223,"w":9,"h":9,"abs_x":549,"abs_y":2265}' d="m6 6 12 12"></path></svg>
                            Follows generic templates downloaded from influencers.
                        </li>
<li bis_size='{"x":64,"y":2282,"w":390,"h":48,"abs_x":544,"abs_y":2324}' className="flex items-start gap-3">
<svg bis_size='{"x":64,"y":2286,"w":18,"h":18,"abs_x":544,"abs_y":2328}' className="shrink-0 mt-1 text-[var(--color-text-mut)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><path bis_size='{"x":69,"y":2291,"w":9,"h":9,"abs_x":549,"abs_y":2333}' d="M18 6 6 18"></path><path bis_size='{"x":69,"y":2291,"w":9,"h":9,"abs_x":549,"abs_y":2333}' d="m6 6 12 12"></path></svg>
                            Guesses their daily macro intake and caloric expenditure.
                        </li>
<li bis_size='{"x":64,"y":2350,"w":390,"h":48,"abs_x":544,"abs_y":2392}' className="flex items-start gap-3">
<svg bis_size='{"x":64,"y":2354,"w":18,"h":18,"abs_x":544,"abs_y":2396}' className="shrink-0 mt-1 text-[var(--color-text-mut)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><path bis_size='{"x":69,"y":2359,"w":9,"h":9,"abs_x":549,"abs_y":2401}' d="M18 6 6 18"></path><path bis_size='{"x":69,"y":2359,"w":9,"h":9,"abs_x":549,"abs_y":2401}' d="m6 6 12 12"></path></svg>
                            Hits plateaus and assumes they need to "work harder."
                        </li>
<li bis_size='{"x":64,"y":2418,"w":390,"h":48,"abs_x":544,"abs_y":2460}' className="flex items-start gap-3">
<svg bis_size='{"x":64,"y":2422,"w":18,"h":18,"abs_x":544,"abs_y":2464}' className="shrink-0 mt-1 text-[var(--color-text-mut)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><path bis_size='{"x":69,"y":2427,"w":9,"h":9,"abs_x":549,"abs_y":2469}' d="M18 6 6 18"></path><path bis_size='{"x":69,"y":2427,"w":9,"h":9,"abs_x":549,"abs_y":2469}' d="m6 6 12 12"></path></svg>
                            Relies solely on motivation, leading to inconsistent routines.
                        </li>
</ul>
</div>

<div bis_size='{"x":544,"y":2097,"w":472,"h":410,"abs_x":1024,"abs_y":2139}' className="bg-[var(--color-surface)] border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)] rounded-2xl p-8 md:p-10 flex flex-col relative shadow-[0_0_30px_rgba(37,99,235,0.05)]">
<h3 bis_size='{"x":588,"y":2138,"w":387,"h":44,"abs_x":1068,"abs_y":2180}' className="text-xl font-medium text-[var(--color-text-pri)] mb-8 pb-4 border-b border-[var(--color-divider)]">The Hugo Rivera Athlete</h3>
<ul bis_size='{"x":588,"y":2214,"w":387,"h":252,"abs_x":1068,"abs_y":2256}' className="space-y-5 flex-1 text-base text-[var(--color-text-pri)]">
<li bis_size='{"x":588,"y":2214,"w":387,"h":48,"abs_x":1068,"abs_y":2256}' className="flex items-start gap-3">
<svg bis_size='{"x":588,"y":2218,"w":18,"h":18,"abs_x":1068,"abs_y":2260}' className="shrink-0 mt-1 text-[var(--color-accent)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline bis_size='{"x":591,"y":2223,"w":12,"h":8,"abs_x":1071,"abs_y":2265}' points="20 6 9 17 4 12"></polyline></svg>
                            Executes a phase-specific protocol designed for their specific biomechanics.
                        </li>
<li bis_size='{"x":588,"y":2282,"w":387,"h":48,"abs_x":1068,"abs_y":2324}' className="flex items-start gap-3">
<svg bis_size='{"x":588,"y":2286,"w":18,"h":18,"abs_x":1068,"abs_y":2328}' className="shrink-0 mt-1 text-[var(--color-accent)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline bis_size='{"x":591,"y":2291,"w":12,"h":8,"abs_x":1071,"abs_y":2333}' points="20 6 9 17 4 12"></polyline></svg>
                            Tracks precise metabolic markers to ensure constant progressive overload.
                        </li>
<li bis_size='{"x":588,"y":2350,"w":387,"h":48,"abs_x":1068,"abs_y":2392}' className="flex items-start gap-3">
<svg bis_size='{"x":588,"y":2354,"w":18,"h":18,"abs_x":1068,"abs_y":2396}' className="shrink-0 mt-1 text-[var(--color-accent)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline bis_size='{"x":591,"y":2359,"w":12,"h":8,"abs_x":1071,"abs_y":2401}' points="20 6 9 17 4 12"></polyline></svg>
                            Utilizes data analysis to pivot instantly when adaptation slows.
                        </li>
<li bis_size='{"x":588,"y":2418,"w":387,"h":48,"abs_x":1068,"abs_y":2460}' className="flex items-start gap-3">
<svg bis_size='{"x":588,"y":2422,"w":18,"h":18,"abs_x":1068,"abs_y":2464}' className="shrink-0 mt-1 text-[var(--color-accent)]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline bis_size='{"x":591,"y":2427,"w":12,"h":8,"abs_x":1071,"abs_y":2469}' points="20 6 9 17 4 12"></polyline></svg>
                            Operates entirely on discipline and systemic accountability frameworks.
                        </li>
</ul>
</div>
</div>
<div bis_size='{"x":24,"y":2571,"w":992,"h":108,"abs_x":504,"abs_y":2613}' className="mt-16 text-center">
<p bis_size='{"x":24,"y":2571,"w":992,"h":28,"abs_x":504,"abs_y":2613}' className="text-xl font-medium mb-8">Stop guessing. Start executing.</p>
<button bis_size='{"x":409,"y":2631,"w":222,"h":48,"abs_x":889,"abs_y":2673}' className="cta-btn text-base px-6 py-3">
<span bis_size='{"x":433,"y":2643,"w":174,"h":24,"abs_x":913,"abs_y":2685}' className="cta-btn-inner">View Program Details</span>
</button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2775,"w":1040,"h":716,"abs_x":480,"abs_y":2817}' className="py-24 overflow-hidden reveal" id="program">
<div bis_size='{"x":0,"y":2871,"w":1040,"h":144,"abs_x":480,"abs_y":2913}' className="max-w-7xl mx-auto px-6 mb-12">
<span bis_size='{"x":24,"y":2871,"w":992,"h":16,"abs_x":504,"abs_y":2913}' className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">The Architecture</span>
<h2 bis_size='{"x":24,"y":2895,"w":992,"h":48,"abs_x":504,"abs_y":2937}' className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">What You Get Inside.</h2>
<p bis_size='{"x":24,"y":2959,"w":576,"h":56,"abs_x":504,"abs_y":3001}' className="text-[var(--color-text-sec)] max-w-xl">A comprehensive ecosystem engineered to remove friction from your transformation.</p>
</div>

<div bis_size='{"x":0,"y":3063,"w":1040,"h":332,"abs_x":480,"abs_y":3105}' className="flex overflow-x-auto gap-6 px-6 pb-12 no-scrollbar snap-x snap-mandatory">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' className="shrink-0 w-0 md:w-[calc((100vw-80rem)/2)] hidden xl:block"></div>

<div bis_size='{"x":24,"y":3063,"w":320,"h":284,"abs_x":504,"abs_y":3105}' className="w-80 shrink-0 snap-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)]/50 transition-colors group">
<div bis_size='{"x":56,"y":3096,"w":64,"h":64,"abs_x":536,"abs_y":3138}' className="w-16 h-16 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)]/30 transition-colors">
<svg bis_size='{"x":74,"y":3114,"w":28,"h":28,"abs_x":554,"abs_y":3156}' fill="none" height="28" stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path bis_size='{"x":77,"y":3117,"w":23,"h":21,"abs_x":557,"abs_y":3159}' d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<h3 bis_size='{"x":56,"y":3184,"w":254,"h":28,"abs_x":536,"abs_y":3226}' className="text-lg font-semibold text-[var(--color-text-pri)] mb-3">Custom Training Block</h3>
<p bis_size='{"x":56,"y":3224,"w":254,"h":91,"abs_x":536,"abs_y":3266}' className="text-sm text-[var(--color-text-sec)] leading-relaxed">Periodized programming built specifically for your anatomy, available equipment, and exact goal timeline.</p>
</div>

<div bis_size='{"x":368,"y":3063,"w":320,"h":284,"abs_x":848,"abs_y":3105}' className="w-80 shrink-0 snap-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)]/50 transition-colors group">
<div bis_size='{"x":400,"y":3096,"w":64,"h":64,"abs_x":880,"abs_y":3138}' className="w-16 h-16 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)]/30 transition-colors">
<svg bis_size='{"x":418,"y":3114,"w":28,"h":28,"abs_x":898,"abs_y":3156}' fill="none" height="28" stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path bis_size='{"x":431,"y":3133,"w":6,"h":4,"abs_x":911,"abs_y":3175}' d="m11 17 2 2a1 1 0 1 0 3-3"></path><path bis_size='{"x":426,"y":3117,"w":16,"h":16,"abs_x":906,"abs_y":3159}' d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path bis_size='{"x":442,"y":3117,"w":2,"h":12,"abs_x":922,"abs_y":3159}' d="m21 3 1 11h-2"></path><path bis_size='{"x":421,"y":3117,"w":11,"h":21,"abs_x":901,"abs_y":3159}' d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3z"></path><path bis_size='{"x":422,"y":3119,"w":9,"h":2,"abs_x":902,"abs_y":3161}' d="M3 4h8s-.50 2.5-5 2.5H3"></path></svg>
</div>
<h3 bis_size='{"x":400,"y":3184,"w":254,"h":28,"abs_x":880,"abs_y":3226}' className="text-lg font-semibold text-[var(--color-text-pri)] mb-3">Metabolic Nutrition</h3>
<p bis_size='{"x":400,"y":3224,"w":254,"h":68,"abs_x":880,"abs_y":3266}' className="text-sm text-[var(--color-text-sec)] leading-relaxed">Dynamic macro protocols that adjust weekly based on your biofeedback and rate of progress.</p>
</div>

<div bis_size='{"x":712,"y":3063,"w":320,"h":284,"abs_x":1192,"abs_y":3105}' className="w-80 shrink-0 snap-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)]/50 transition-colors group">
<div bis_size='{"x":744,"y":3096,"w":64,"h":64,"abs_x":1224,"abs_y":3138}' className="w-16 h-16 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)]/30 transition-colors">
<svg bis_size='{"x":762,"y":3114,"w":28,"h":28,"abs_x":1242,"abs_y":3156}' fill="none" height="28" stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path bis_size='{"x":765,"y":3116,"w":23,"h":23,"abs_x":1245,"abs_y":3158}' d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 bis_size='{"x":744,"y":3184,"w":254,"h":28,"abs_x":1224,"abs_y":3226}' className="text-lg font-semibold text-[var(--color-text-pri)] mb-3">1-on-1 Strategy Calls</h3>
<p bis_size='{"x":744,"y":3224,"w":254,"h":68,"abs_x":1224,"abs_y":3266}' className="text-sm text-[var(--color-text-sec)] leading-relaxed">Direct access logic sessions to troubleshoot plateaus, refine form, and realign mindset.</p>
</div>

<div bis_size='{"x":1056,"y":3063,"w":320,"h":284,"abs_x":1536,"abs_y":3105}' className="w-80 shrink-0 snap-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)]/50 transition-colors group">
<div bis_size='{"x":1088,"y":3096,"w":64,"h":64,"abs_x":1568,"abs_y":3138}' className="w-16 h-16 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)]/30 transition-colors">
<svg bis_size='{"x":1106,"y":3114,"w":28,"h":28,"abs_x":1586,"abs_y":3156}' fill="none" height="28" stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><rect bis_size='{"x":1110,"y":3119,"w":21,"h":21,"abs_x":1590,"abs_y":3161}' height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line bis_size='{"x":1125,"y":3116,"w":0,"h":4,"abs_x":1605,"abs_y":3158}' x1="16" x2="16" y1="2" y2="6"></line><line bis_size='{"x":1116,"y":3116,"w":0,"h":4,"abs_x":1596,"abs_y":3158}' x1="8" x2="8" y1="2" y2="6"></line><line bis_size='{"x":1110,"y":3126,"w":21,"h":0,"abs_x":1590,"abs_y":3168}' x1="3" x2="21" y1="10" y2="10"></line><path bis_size='{"x":1116,"y":3130,"w":0,"h":0,"abs_x":1596,"abs_y":3172}' d="M8 14h.01"></path><path bis_size='{"x":1120,"y":3130,"w":0,"h":0,"abs_x":1600,"abs_y":3172}' d="M12 14h.01"></path><path bis_size='{"x":1125,"y":3130,"w":0,"h":0,"abs_x":1605,"abs_y":3172}' d="M16 14h.01"></path><path bis_size='{"x":1116,"y":3135,"w":0,"h":0,"abs_x":1596,"abs_y":3177}' d="M8 18h.01"></path><path bis_size='{"x":1120,"y":3135,"w":0,"h":0,"abs_x":1600,"abs_y":3177}' d="M12 18h.01"></path><path bis_size='{"x":1125,"y":3135,"w":0,"h":0,"abs_x":1605,"abs_y":3177}' d="M16 18h.01"></path></svg>
</div>
<h3 bis_size='{"x":1088,"y":3184,"w":254,"h":28,"abs_x":1568,"abs_y":3226}' className="text-lg font-semibold text-[var(--color-text-pri)] mb-3">Weekly Audits</h3>
<p bis_size='{"x":1088,"y":3224,"w":254,"h":68,"abs_x":1568,"abs_y":3266}' className="text-sm text-[var(--color-text-sec)] leading-relaxed">Rigorous weekend check-ins reviewing metrics, video form, and subjective fatigue indicators.</p>
</div>

<div bis_size='{"x":1400,"y":3063,"w":320,"h":284,"abs_x":1880,"abs_y":3105}' className="w-80 shrink-0 snap-center bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)]/50 transition-colors group">
<div bis_size='{"x":1432,"y":3096,"w":64,"h":64,"abs_x":1912,"abs_y":3138}' className="w-16 h-16 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)]/30 transition-colors">
<svg bis_size='{"x":1450,"y":3114,"w":28,"h":28,"abs_x":1930,"abs_y":3156}' fill="none" height="28" stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path bis_size='{"x":1455,"y":3116,"w":18,"h":23,"abs_x":1935,"abs_y":3158}' d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 bis_size='{"x":1432,"y":3184,"w":254,"h":28,"abs_x":1912,"abs_y":3226}' className="text-lg font-semibold text-[var(--color-text-pri)] mb-3">Inner Circle Access</h3>
<p bis_size='{"x":1432,"y":3224,"w":254,"h":68,"abs_x":1912,"abs_y":3266}' className="text-sm text-[var(--color-text-sec)] leading-relaxed">Private community of high-performing individuals sharing data, resources, and accountability.</p>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' className="shrink-0 w-6 md:w-[calc((100vw-80rem)/2)] hidden xl:block"></div>
</div>
</section>

<section bis_size='{"x":0,"y":3492,"w":1040,"h":549,"abs_x":480,"abs_y":3534}' className="py-24 bg-[var(--color-bg-base)] reveal">
<div bis_size='{"x":0,"y":3588,"w":1040,"h":357,"abs_x":480,"abs_y":3630}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":3588,"w":992,"h":64,"abs_x":504,"abs_y":3630}' className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div bis_size='{"x":24,"y":3588,"w":396,"h":64,"abs_x":504,"abs_y":3630}' className="">
<span bis_size='{"x":24,"y":3588,"w":396,"h":16,"abs_x":504,"abs_y":3630}' className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-mut)] mb-2 block">Case Studies</span>
<h2 bis_size='{"x":24,"y":3612,"w":396,"h":40,"abs_x":504,"abs_y":3654}' className="text-3xl md:text-4xl font-semibold tracking-tight">Real People. Real Data.</h2>
</div>
<button bis_size='{"x":840,"y":3632,"w":176,"h":20,"abs_x":1320,"abs_y":3674}' className="text-sm text-[var(--color-text-sec)] hover:text-[var(--color-text-pri)] transition-colors flex items-center gap-2">
                    View All Case Studies
                    <svg bis_size='{"x":1000,"y":3634,"w":16,"h":16,"abs_x":1480,"abs_y":3676}' fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path bis_size='{"x":1004,"y":3642,"w":9,"h":0,"abs_x":1484,"abs_y":3684}' d="M5 12h14"></path><path bis_size='{"x":1008,"y":3637,"w":4,"h":9,"abs_x":1488,"abs_y":3679}' d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div bis_size='{"x":24,"y":3700,"w":992,"h":245,"abs_x":504,"abs_y":3742}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":3700,"w":314,"h":245,"abs_x":504,"abs_y":3742}' className="group cursor-pointer">
<div bis_size='{"x":24,"y":3700,"w":314,"h":177,"abs_x":504,"abs_y":3742}' className="aspect-video bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl relative overflow-hidden mb-4 group-hover:border-[var(--color-accent)] transition-colors duration-300">
<div bis_size='{"x":24,"y":3701,"w":313,"h":175,"abs_x":504,"abs_y":3743}' className="absolute inset-0 flex items-center justify-center">
<div bis_size='{"x":153,"y":3760,"w":56,"h":56,"abs_x":633,"abs_y":3802}' className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)]/80 transition-all duration-300">
<svg bis_size='{"x":169,"y":3776,"w":24,"h":24,"abs_x":649,"abs_y":3818}' fill="white" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><polygon bis_size='{"x":174,"y":3779,"w":14,"h":18,"abs_x":654,"abs_y":3821}' points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
<h4 bis_size='{"x":24,"y":3893,"w":314,"h":28,"abs_x":504,"abs_y":3935}' className="font-medium text-[var(--color-text-pri)] mb-1">From Skinny-Fat to Stage Ready</h4>
<p bis_size='{"x":24,"y":3925,"w":314,"h":20,"abs_x":504,"abs_y":3967}' className="text-sm text-[var(--color-text-sec)]">David M. — 24 Week Transformation</p>
</div>

<div bis_size='{"x":362,"y":3700,"w":314,"h":245,"abs_x":842,"abs_y":3742}' className="group cursor-pointer">
<div bis_size='{"x":362,"y":3700,"w":314,"h":177,"abs_x":842,"abs_y":3742}' className="aspect-video bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl relative overflow-hidden mb-4 group-hover:border-[var(--color-accent)] transition-colors duration-300">
<div bis_size='{"x":363,"y":3701,"w":313,"h":175,"abs_x":843,"abs_y":3743}' className="absolute inset-0 flex items-center justify-center">
<div bis_size='{"x":492,"y":3760,"w":56,"h":56,"abs_x":972,"abs_y":3802}' className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)]/80 transition-all duration-300">
<svg bis_size='{"x":508,"y":3776,"w":24,"h":24,"abs_x":988,"abs_y":3818}' className="" fill="white" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><polygon bis_size='{"x":513,"y":3779,"w":14,"h":18,"abs_x":993,"abs_y":3821}' points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
<h4 bis_size='{"x":362,"y":3893,"w":314,"h":28,"abs_x":842,"abs_y":3935}' className="font-medium text-[var(--color-text-pri)] mb-1">Overcoming 5 Years of Plateaus</h4>
<p bis_size='{"x":362,"y":3925,"w":314,"h":20,"abs_x":842,"abs_y":3967}' className="text-sm text-[var(--color-text-sec)]">Elena R. — 12 Week Strength Phase</p>
</div>

<div bis_size='{"x":701,"y":3700,"w":314,"h":245,"abs_x":1181,"abs_y":3742}' className="group cursor-pointer">
<div bis_size='{"x":701,"y":3700,"w":314,"h":177,"abs_x":1181,"abs_y":3742}' className="aspect-video bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl relative overflow-hidden mb-4 group-hover:border-[var(--color-accent)] transition-colors duration-300">
<div bis_size='{"x":702,"y":3701,"w":313,"h":175,"abs_x":1182,"abs_y":3743}' className="absolute inset-0 flex items-center justify-center">
<div bis_size='{"x":831,"y":3760,"w":56,"h":56,"abs_x":1311,"abs_y":3802}' className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)]/80 transition-all duration-300">
<svg bis_size='{"x":847,"y":3776,"w":24,"h":24,"abs_x":1327,"abs_y":3818}' fill="white" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><polygon bis_size='{"x":852,"y":3779,"w":14,"h":18,"abs_x":1332,"abs_y":3821}' points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
<h4 bis_size='{"x":701,"y":3893,"w":314,"h":28,"abs_x":1181,"abs_y":3935}' className="font-medium text-[var(--color-text-pri)] mb-1">Post-Injury Rebuild Protocol</h4>
<p bis_size='{"x":701,"y":3925,"w":314,"h":20,"abs_x":1181,"abs_y":3967}' className="text-sm text-[var(--color-text-sec)]">Thomas K. — 36 Week Functional Prep</p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4041,"w":1040,"h":622,"abs_x":480,"abs_y":4083}' className="py-24 reveal" id="faq">
<div bis_size='{"x":136,"y":4137,"w":768,"h":430,"abs_x":616,"abs_y":4179}' className="max-w-3xl mx-auto px-6">
<h2 bis_size='{"x":160,"y":4137,"w":720,"h":40,"abs_x":640,"abs_y":4179}' className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div bis_size='{"x":160,"y":4225,"w":720,"h":342,"abs_x":640,"abs_y":4267}' className="space-y-4">

<div bis_size='{"x":160,"y":4225,"w":720,"h":73,"abs_x":640,"abs_y":4267}' className="faq-item bg-[var(--color-surface)] border border-[var(--color-border)] border-l-2 border-l-transparent rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer">
<div bis_size='{"x":162,"y":4226,"w":717,"h":72,"abs_x":642,"abs_y":4268}' className="p-6 flex justify-between items-center" onclick="toggleFaq(this.parentElement)">
<h4 bis_size='{"x":186,"y":4250,"w":371,"h":24,"abs_x":666,"abs_y":4292}' className="font-medium text-base text-[var(--color-text-pri)]">Do I need extensive gym experience to apply?</h4>
<svg bis_size='{"x":835,"y":4252,"w":20,"h":20,"abs_x":1315,"abs_y":4294}' className="faq-icon text-[var(--color-text-sec)] transition-transform duration-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path bis_size='{"x":839,"y":4262,"w":11,"h":0,"abs_x":1319,"abs_y":4304}' d="M5 12h14"></path><path bis_size='{"x":845,"y":4256,"w":0,"h":11,"abs_x":1325,"abs_y":4298}' d="M12 5v14"></path></svg>
</div>
<div bis_size='{"x":162,"y":4298,"w":717,"h":0,"abs_x":642,"abs_y":4340}' className="faq-content px-6 text-sm text-[var(--color-text-sec)] leading-relaxed">
                        No. While we work with elite competitors, our systems are built from the ground up. Whether you are a beginner looking for structural foundation or an advanced athlete needing micro-adjustments, the protocol is scaled to your precise entry point.
                    </div>
</div>

<div bis_size='{"x":160,"y":4314,"w":720,"h":73,"abs_x":640,"abs_y":4356}' className="faq-item bg-[var(--color-surface)] border border-[var(--color-border)] border-l-2 border-l-transparent rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer">
<div bis_size='{"x":162,"y":4315,"w":717,"h":72,"abs_x":642,"abs_y":4357}' className="p-6 flex justify-between items-center" onclick="toggleFaq(this.parentElement)">
<h4 bis_size='{"x":186,"y":4339,"w":336,"h":24,"abs_x":666,"abs_y":4381}' className="font-medium text-base text-[var(--color-text-pri)]">How is this different from PDF templates?</h4>
<svg bis_size='{"x":835,"y":4341,"w":20,"h":20,"abs_x":1315,"abs_y":4383}' className="faq-icon text-[var(--color-text-sec)] transition-transform duration-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path bis_size='{"x":839,"y":4351,"w":11,"h":0,"abs_x":1319,"abs_y":4393}' d="M5 12h14"></path><path bis_size='{"x":845,"y":4345,"w":0,"h":11,"abs_x":1325,"abs_y":4387}' d="M12 5v14"></path></svg>
</div>
<div bis_size='{"x":162,"y":4387,"w":717,"h":0,"abs_x":642,"abs_y":4429}' className="faq-content px-6 text-sm text-[var(--color-text-sec)] leading-relaxed">
                        PDFs are static; biology is dynamic. Our coaching is a feedback loop. You submit data (weight, measurements, video form, fatigue levels), and we adjust variables weekly. You are paying for constant course correction, not a piece of paper.
                    </div>
</div>

<div bis_size='{"x":160,"y":4404,"w":720,"h":73,"abs_x":640,"abs_y":4446}' className="faq-item bg-[var(--color-surface)] border border-[var(--color-border)] border-l-2 border-l-transparent rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer">
<div bis_size='{"x":162,"y":4405,"w":717,"h":72,"abs_x":642,"abs_y":4447}' className="p-6 flex justify-between items-center" onclick="toggleFaq(this.parentElement)">
<h4 bis_size='{"x":186,"y":4429,"w":284,"h":24,"abs_x":666,"abs_y":4471}' className="font-medium text-base text-[var(--color-text-pri)]">What if I travel frequently for work?</h4>
<svg bis_size='{"x":835,"y":4431,"w":20,"h":20,"abs_x":1315,"abs_y":4473}' className="faq-icon text-[var(--color-text-sec)] transition-transform duration-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path bis_size='{"x":839,"y":4441,"w":11,"h":0,"abs_x":1319,"abs_y":4483}' d="M5 12h14"></path><path bis_size='{"x":845,"y":4435,"w":0,"h":11,"abs_x":1325,"abs_y":4477}' d="M12 5v14"></path></svg>
</div>
<div bis_size='{"x":162,"y":4477,"w":717,"h":0,"abs_x":642,"abs_y":4519}' className="faq-content px-6 text-sm text-[var(--color-text-sec)] leading-relaxed">
                        We accommodate high-friction lifestyles. If you travel, we modify your program for hotel gym environments or band/bodyweight protocols. Nutrition parameters are adapted for dining out. Excuses are engineered out of the equation.
                    </div>
</div>

<div bis_size='{"x":160,"y":4494,"w":720,"h":73,"abs_x":640,"abs_y":4536}' className="faq-item bg-[var(--color-surface)] border border-[var(--color-border)] border-l-2 border-l-transparent rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer">
<div bis_size='{"x":162,"y":4494,"w":717,"h":72,"abs_x":642,"abs_y":4536}' className="p-6 flex justify-between items-center" onclick="toggleFaq(this.parentElement)">
<h4 bis_size='{"x":186,"y":4518,"w":325,"h":24,"abs_x":666,"abs_y":4560}' className="font-medium text-base text-[var(--color-text-pri)]">How long until I see measurable results?</h4>
<svg bis_size='{"x":835,"y":4520,"w":20,"h":20,"abs_x":1315,"abs_y":4562}' className="faq-icon text-[var(--color-text-sec)] transition-transform duration-300 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path bis_size='{"x":839,"y":4530,"w":11,"h":0,"abs_x":1319,"abs_y":4572}' d="M5 12h14"></path><path bis_size='{"x":845,"y":4525,"w":0,"h":11,"abs_x":1325,"abs_y":4567}' d="M12 5v14"></path></svg>
</div>
<div bis_size='{"x":162,"y":4566,"w":717,"h":0,"abs_x":642,"abs_y":4608}' className="faq-content px-6 text-sm text-[var(--color-text-sec)] leading-relaxed">
                        Metabolic shifts occur within the first 14 days. Visual changes typically solidify by week 4-6. However, this is a long-term architecture. We require a minimum 12-week commitment to ensure physiological adaptations are permanent, not transient.
                    </div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4663,"w":1040,"h":505,"abs_x":480,"abs_y":4705}' className="border-y border-[var(--color-border)] overflow-hidden reveal pt-32 pb-32 relative">

<div bis_size='{"x":320,"y":4716,"w":400,"h":400,"abs_x":800,"abs_y":4758}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div bis_size='{"x":72,"y":4792,"w":896,"h":248,"abs_x":552,"abs_y":4834}' className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 bis_size='{"x":96,"y":4792,"w":848,"h":60,"abs_x":576,"abs_y":4834}' className="md:text-6xl text-4xl font-semibold tracking-tight mb-6">Your Last Day of Guessing.</h2>
<p bis_size='{"x":184,"y":4876,"w":672,"h":56,"abs_x":664,"abs_y":4918}' className="text-lg md:text-xl text-[var(--color-text-sec)] mb-10 max-w-2xl mx-auto">Spots are strictly limited to ensure maximum bandwidth for each active roster athlete.</p>
<button bis_size='{"x":376,"y":4972,"w":287,"h":68,"abs_x":856,"abs_y":5014}' className="cta-btn text-lg px-10 py-5">
<span bis_size='{"x":416,"y":4992,"w":207,"h":28,"abs_x":896,"abs_y":5034}' className="cta-btn-inner">
                    Submit Application
                    <svg bis_size='{"x":604,"y":4996,"w":20,"h":20,"abs_x":1084,"abs_y":5038}' fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path bis_size='{"x":608,"y":5006,"w":11,"h":0,"abs_x":1088,"abs_y":5048}' d="M5 12h14"></path><path bis_size='{"x":614,"y":5000,"w":5,"h":11,"abs_x":1094,"abs_y":5042}' d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</section>

<footer bis_size='{"x":0,"y":5169,"w":1040,"h":120,"abs_x":480,"abs_y":5211}' className="border-[var(--color-divider)] border-t pt-12 pb-12">
<div bis_size='{"x":0,"y":5218,"w":1040,"h":24,"abs_x":480,"abs_y":5260}' className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div bis_size='{"x":24,"y":5218,"w":197,"h":24,"abs_x":504,"abs_y":5260}' className="flex items-center gap-3">
<svg bis_size='{"x":24,"y":5218,"w":24,"h":24,"abs_x":504,"abs_y":5260}' className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(85, 85, 85)'}} viewbox="0 0 40 40" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":28,"y":5222,"w":14,"h":14,"abs_x":508,"abs_y":5264}' className="" d="M8 8V32H14V22H26V32H32V8H26V16H14V8H8Z" fill="currentColor"></path>
</svg>
<span bis_size='{"x":60,"y":5218,"w":161,"h":24,"abs_x":540,"abs_y":5260}' className="font-medium text-base text-[var(--color-text-pri)]">Hugo Rivera Fitness</span>
</div>
<div bis_size='{"x":382,"y":5220,"w":271,"h":20,"abs_x":862,"abs_y":5262}' className="text-[var(--color-text-mut)] md:text-left text-sm text-center">© 2026 Hugo Rivera. All right reserved.<br bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":42}' className="md:hidden"/></div>
<div bis_size='{"x":814,"y":5220,"w":202,"h":20,"abs_x":1294,"abs_y":5262}' className="flex gap-6 text-sm text-[var(--color-text-sec)] font-medium">
<a bis_size='{"x":814,"y":5220,"w":43,"h":20,"abs_x":1294,"abs_y":5262}' className="hover:text-[var(--color-text-pri)] transition-colors" href="#">Terms</a>
<a bis_size='{"x":881,"y":5220,"w":51,"h":20,"abs_x":1361,"abs_y":5262}' className="hover:text-[var(--color-text-pri)] transition-colors" href="#">Privacy</a>
<a bis_size='{"x":957,"y":5220,"w":59,"h":20,"abs_x":1437,"abs_y":5262}' className="hover:text-[var(--color-text-pri)] transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>



    </>
  );
}
