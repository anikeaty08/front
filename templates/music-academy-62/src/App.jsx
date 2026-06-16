import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleEnrollment(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const instrument = document.getElementById('instrument').value;
            
            // Format WhatsApp message
            const message = `Hello Beats Academy,\n\nI am ${name}. I am interested in enrolling for the ${instrument} program.\nPlease let me know the next steps.`;
            
            // Redirect to WhatsApp
            const whatsappUrl = `https://wa.me/8446647533?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#140408]/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="tracking-widest text-lg font-medium text-[#FAF7F2] uppercase">
                B E A T S
            </div>
<a className="text-xs font-medium uppercase tracking-widest text-[#FAF7F2]/70 hover:text-[#FAF7F2] transition-colors flex items-center gap-2" href="#enroll">
<span>Enroll</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Drums" className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 transform animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#140408]/30 via-transparent to-[#140408]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#4A1020] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
</div>

<div className="relative z-10 text-center max-w-5xl mx-auto px-6 flex flex-col items-center mt-12">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 text-xs font-medium tracking-wide text-[#FAF7F2]/80">
<iconify-icon icon="solar:music-notes-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Premium Music Education</span>
</div>
<h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-[#FAF7F2] leading-[1.1] mb-8">
                Feel the Beat. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F2] to-[#FAF7F2]/50 italic font-normal">Learn the Rhythm.</span>
</h1>
<a className="group relative inline-flex items-center justify-center gap-3 bg-[#FAF7F2] text-[#140408] px-8 py-4 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(250,247,242,0.15)] hover:shadow-[0_0_40px_rgba(250,247,242,0.4)]" href="#enroll">
<span>Enroll Now</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</header>

<section className="bg-[#FAF7F2] text-[#1A1A1A] py-32 md:py-48 px-6 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<iconify-icon className="text-[#4A1020] mb-8 opacity-50" icon="solar:vinyl-record-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl tracking-tight font-medium leading-tight text-[#1A1A1A]">
                A deep-rooted passion for rhythm. <br/>
                An uncompromising love for instruments. <br/>
<span className="text-[#4A1020] italic font-normal">This is Beats Academy.</span>
</h2>
</div>
</section>

<section className="py-32 px-6 bg-[#140408] relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-[#4A1020] blur-[150px] opacity-20 pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<h2 className="font-playfair text-4xl md:text-5xl tracking-tight font-medium text-[#FAF7F2]">
                    Master your sound.
                </h2>
<p className="text-sm text-[#FAF7F2]/60 max-w-sm">
                    Explore our curated selection of instrument programs, designed for absolute beginners and advanced musicians alike.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 md:col-span-2 row-span-2 h-[400px] md:h-[600px] hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(74,16,32,0.6)] cursor-pointer">
<img alt="Drums" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#140408] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<div className="text-[#FAF7F2]/50 text-xs tracking-widest uppercase mb-2">Featured Program</div>
<h3 className="font-playfair text-4xl font-medium tracking-tight text-[#FAF7F2] flex items-center gap-3">
                            Acoustic Drums
                            <iconify-icon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 h-[280px] hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(74,16,32,0.4)] cursor-pointer">
<img alt="Guitar" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#140408] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#FAF7F2]">Guitar</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 h-[280px] hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(74,16,32,0.4)] cursor-pointer">
<img alt="Keyboard" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#140408] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#FAF7F2]">Keyboard</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 h-[280px] hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(74,16,32,0.4)] cursor-pointer">
<img alt="Djembe" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#140408] to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#FAF7F2]">Djembe</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 h-[280px] hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(74,16,32,0.4)] cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#FAF7F2]">Bongo</h3>
</div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 group-hover:text-white/20 transition-colors" icon="solar:music-note-slider-2-linear" strokeWidth="1" width="80"></iconify-icon>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 h-[280px] hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(74,16,32,0.4)] cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-[#4A1020]/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="font-playfair text-2xl font-medium tracking-tight text-[#FAF7F2]">Clapbox</h3>
</div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 group-hover:text-white/20 transition-colors" icon="solar:box-linear" strokeWidth="1" width="80"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative flex justify-center items-center min-h-screen" id="enroll">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4A1020]/30 rounded-full blur-[100px] mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FAF7F2]/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
</div>
<div className="relative z-10 w-full max-w-xl">
<div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none"></div>
<h2 className="font-playfair text-3xl md:text-4xl tracking-tight font-medium mb-2 text-[#FAF7F2]">Begin your journey.</h2>
<p className="text-sm text-[#FAF7F2]/50 mb-10">Secure your spot and start shaping your sound.</p>
<form className="space-y-6" onsubmit="handleEnrollment(event)">
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-sm text-[#FAF7F2] placeholder-transparent focus:outline-none focus:border-[#FAF7F2] peer transition-colors" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 top-3 text-xs text-[#FAF7F2]/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#FAF7F2] peer-valid:-top-3 peer-valid:text-[10px] peer-valid:text-[#FAF7F2]/60 cursor-text" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-sm text-[#FAF7F2] placeholder-transparent focus:outline-none focus:border-[#FAF7F2] peer transition-colors" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-3 text-xs text-[#FAF7F2]/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#FAF7F2] peer-valid:-top-3 peer-valid:text-[10px] peer-valid:text-[#FAF7F2]/60 cursor-text" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-sm text-[#FAF7F2] placeholder-transparent focus:outline-none focus:border-[#FAF7F2] peer transition-colors" id="phone" placeholder="Phone" required="" type="tel"/>
<label className="absolute left-0 top-3 text-xs text-[#FAF7F2]/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#FAF7F2] peer-valid:-top-3 peer-valid:text-[10px] peer-valid:text-[#FAF7F2]/60 cursor-text" htmlFor="phone">Phone Number</label>
</div>
<div className="relative group pt-4">
<select className="w-full appearance-none bg-transparent border-b border-white/20 py-3 px-0 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#FAF7F2] transition-colors cursor-pointer" id="instrument" required="">
<option className="text-[#FAF7F2]/40" disabled="" selected="" value="">Select Instrument</option>
<option value="Drums">Drums</option>
<option value="Clapbox">Clapbox</option>
<option value="Djembe">Djembe</option>
<option value="Bongo">Bongo</option>
<option value="Keyboard">Keyboard</option>
<option value="Guitar">Guitar</option>
</select>
<iconify-icon className="absolute right-0 top-8 text-white/40 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
<label className="absolute left-0 top-0 text-[10px] text-[#FAF7F2]/60">Instrument of Interest</label>
</div>
<button className="w-full mt-8 bg-[#FAF7F2] text-[#140408] py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,247,242,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2" type="submit">
                        Submit Application
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
<div className="mt-6 text-center text-[10px] text-white/30">
                    Application details are processed securely.
                </div>
</div>
</div>
</section>

<section className="bg-[#FAF7F2] text-[#1A1A1A] py-32 px-6 rounded-t-[3rem] border-t border-white/10 relative overflow-hidden">

<div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
<h2 className="font-playfair text-4xl md:text-6xl tracking-tight font-medium mb-10 leading-tight">
                Start your music journey today.
            </h2>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="px-8 py-4 bg-[#140408] text-[#FAF7F2] rounded-full text-sm font-medium transition-transform hover:scale-105 shadow-xl w-full sm:w-auto text-center" href="#enroll">
                    Get Started
                </a>
<a className="px-8 py-4 bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] rounded-full text-sm font-medium transition-all hover:bg-[#1A1A1A]/5 w-full sm:w-auto text-center flex items-center justify-center gap-2" href="mailto:beatsacademy001@gmail.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    Contact Us
                </a>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 text-center text-[10px] tracking-widest text-[#1A1A1A]/40 uppercase">
            © Beats Academy. Crafted for Rhythm.
        </div>
</section>

<a className="fixed bottom-6 right-6 z-50 bg-[#1A1A1A] md:bg-[#FAF7F2] text-[#FAF7F2] md:text-[#1A1A1A] w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 transition-transform duration-300 group border border-white/10 md:border-black/10" href="https://wa.me/8446647533" rel="noopener noreferrer" target="_blank">

<iconify-icon className="group-hover:animate-pulse" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>



    </>
  );
}
