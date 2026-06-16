import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        function handleSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('registerForm');
            const success = document.getElementById('successMessage');
            form.classList.add('hidden');
            success.classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F4]/95 backdrop-blur-sm border-b border-[#5F6B50]/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-[#5F6B50] text-lg font-semibold tracking-tighter" href="#" style={{fontFamily: '\'EB Garamond\', serif'}}>Deenroots</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs tracking-widest text-[#333333]/70 hover:text-[#5F6B50] transition-colors" href="#features" style={{fontFamily: '\'Inter\', sans-serif'}}>FEATURES</a>
<a className="text-xs tracking-widest text-[#333333]/70 hover:text-[#5F6B50] transition-colors" href="#about" style={{fontFamily: '\'Inter\', sans-serif'}}>ABOUT</a>
<a className="text-xs tracking-widest text-[#333333]/70 hover:text-[#5F6B50] transition-colors" href="#register" style={{fontFamily: '\'Inter\', sans-serif'}}>REGISTER</a>
</div>
<button className="md:hidden text-[#5F6B50]" id="mobileMenuBtn">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-[#F9F8F4] hidden flex-col items-center justify-center gap-8" id="mobileMenu">
<button className="absolute top-4 right-6 text-[#5F6B50]" id="closeMenu">
<span className="iconify" data-icon="lucide:x" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<a className="text-sm tracking-widest text-[#333333] hover:text-[#5F6B50]" href="#features" style={{fontFamily: '\'Inter\', sans-serif'}}>FEATURES</a>
<a className="text-sm tracking-widest text-[#333333] hover:text-[#5F6B50]" href="#about" style={{fontFamily: '\'Inter\', sans-serif'}}>ABOUT</a>
<a className="text-sm tracking-widest text-[#333333] hover:text-[#5F6B50]" href="#register" style={{fontFamily: '\'Inter\', sans-serif'}}>REGISTER</a>
</div>

<section className="min-h-screen pt-20 flex items-center">
<div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="order-2 lg:order-1">
<p className="text-3xl md:text-4xl text-[#C5A059] mb-4" style={{fontFamily: '\'Amiri\', \'EB Garamond\', serif'}}>الأدعية والأذكار</p>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#5F6B50] tracking-tight leading-tight mb-4">Supplications<br/>&amp; Remembrances</h1>
<p className="text-xl md:text-2xl text-[#333333]/80 italic mb-6">The First English Rendition</p>
<p className="text-base md:text-lg text-[#333333]/70 leading-relaxed mb-8 max-w-lg">A meticulously crafted collection of authentic supplications, presented with scholarly precision and timeless elegance. This definitive edition brings centuries of Islamic devotional literature to the English-speaking world.</p>
<a className="inline-block bg-[#C5A059] text-white px-8 py-4 text-xs tracking-widest hover:bg-[#B08D4A] transition-colors" href="#register" style={{fontFamily: '\'Inter\', sans-serif'}}>REGISTER FOR PRESALE</a>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-br from-[#C5A059]/10 to-[#5F6B50]/10 rounded-lg blur-2xl"></div>
<div className="relative bg-gradient-to-br from-[#5F6B50] to-[#4A5440] w-64 md:w-72 lg:w-80 h-96 md:h-[420px] lg:h-[480px] rounded-r-sm shadow-2xl" style={{transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)'}}>
<div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#4A5440] to-[#5F6B50] rounded-l-sm"></div>
<div className="absolute inset-6 border border-[#C5A059]/30 flex flex-col items-center justify-center text-center p-4">
<p className="text-2xl md:text-3xl text-[#C5A059] mb-4" style={{fontFamily: '\'Amiri\', serif'}}>الأدعية والأذكار</p>
<div className="w-16 h-px bg-[#C5A059]/50 mb-4"></div>
<h2 className="text-lg md:text-xl text-[#F9F8F4] font-medium tracking-tight mb-2">Supplications</h2>
<p className="text-sm md:text-base text-[#F9F8F4]/80 italic">&amp;</p>
<h2 className="text-lg md:text-xl text-[#F9F8F4] font-medium tracking-tight">Remembrances</h2>
<div className="w-16 h-px bg-[#C5A059]/50 mt-4 mb-4"></div>
<p className="text-xs text-[#C5A059]/80 tracking-wider" style={{fontFamily: '\'Inter\', sans-serif'}}>DEENROOTS</p>
</div>
<div className="absolute right-2 top-1/4 w-1 h-48 bg-[#8B2942] rounded-full opacity-80"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-y border-[#5F6B50]/10" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">

<div className="lg:border-r lg:border-[#5F6B50]/15 lg:px-8 text-center">
<span className="iconify text-[#C5A059] mb-4 mx-auto" data-icon="lucide:book-open" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-lg font-medium text-[#5F6B50] tracking-tight mb-2">Premium Hardback</h3>
<p className="text-sm text-[#333333]/60">Cloth-bound cover with foil stamping</p>
</div>

<div className="lg:border-r lg:border-[#5F6B50]/15 lg:px-8 text-center">
<span className="iconify text-[#C5A059] mb-4 mx-auto" data-icon="lucide:layers" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-lg font-medium text-[#5F6B50] tracking-tight mb-2">Smyth-Sewn Binding</h3>
<p className="text-sm text-[#333333]/60">Lies flat for comfortable reading</p>
</div>

<div className="lg:border-r lg:border-[#5F6B50]/15 lg:px-8 text-center">
<span className="iconify text-[#C5A059] mb-4 mx-auto" data-icon="lucide:palette" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-lg font-medium text-[#5F6B50] tracking-tight mb-2">Two-Tone Interior</h3>
<p className="text-sm text-[#333333]/60">Arabic text in distinguished olive</p>
</div>

<div className="lg:px-8 text-center">
<span className="iconify text-[#C5A059] mb-4 mx-auto" data-icon="lucide:bookmark" data-width="32" style={{strokeWidth: '1.5'}}></span>
<h3 className="text-lg font-medium text-[#5F6B50] tracking-tight mb-2">Premium Viscose Ribbon</h3>
<p className="text-sm text-[#333333]/60">Burgundy silk ribbon marker</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="about">
<div className="max-w-6xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
<div className="border border-[#5F6B50]/15 p-8 md:p-12">
<p className="text-xs tracking-widest text-[#C5A059] mb-4" style={{fontFamily: '\'Inter\', sans-serif'}}>ABOUT THE COLLECTION</p>
<h2 className="text-2xl md:text-3xl font-medium text-[#5F6B50] tracking-tight mb-6">A Treasury of Sacred Words</h2>
<p className="text-base md:text-lg text-[#333333]/70 leading-relaxed mb-4">This comprehensive collection draws from the most authentic sources of Islamic tradition, presenting supplications for every occasion in life — from the moments of waking to the quiet hours before sleep.</p>
<p className="text-base md:text-lg text-[#333333]/70 leading-relaxed">Each supplication is presented in its original Arabic, accompanied by precise transliteration and eloquent English translation, making this work accessible to readers at every level of their journey.</p>
</div>
<div className="flex justify-center">
<div className="bg-[#5F6B50]/5 p-8 w-full max-w-md">
<div className="bg-white shadow-lg p-6 border border-[#5F6B50]/10">
<p className="text-xl text-[#C5A059] text-center mb-4" style={{fontFamily: '\'Amiri\', serif'}}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
<p className="text-sm text-center text-[#333333]/60 italic">Bismillāhi r-Raḥmāni r-Raḥīm</p>
<div className="w-12 h-px bg-[#C5A059]/30 mx-auto my-4"></div>
<p className="text-sm text-center text-[#333333]/80">In the name of God, the Most Gracious, the Most Merciful</p>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1 flex justify-center">
<div className="relative">
<div className="bg-white shadow-xl p-4 max-w-md">
<div className="bg-[#F9F8F4] p-6 grid grid-cols-2 gap-4">
<div className="text-right pr-4 border-r border-[#5F6B50]/10">
<p className="text-lg text-[#C5A059] mb-2" style={{fontFamily: '\'Amiri\', serif'}}>اللَّهُمَّ أَنْتَ رَبِّي</p>
<p className="text-xs text-[#333333]/50">Allāhumma anta Rabbī</p>
</div>
<div className="text-left pl-4">
<p className="text-sm text-[#333333]/80 italic">O Allah, You are my Lord</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 border border-[#5F6B50]/15 p-8 md:p-12">
<p className="text-xs tracking-widest text-[#C5A059] mb-4" style={{fontFamily: '\'Inter\', sans-serif'}}>FOREWORD</p>
<h2 className="text-2xl md:text-3xl font-medium text-[#5F6B50] tracking-tight mb-6">By Shaykh Muhammad Darwish</h2>
<p className="text-base md:text-lg text-[#333333]/70 leading-relaxed mb-4 italic">"This work represents a significant contribution to the English-speaking Muslim community. The translators have achieved a rare balance — remaining faithful to the sacred texts while rendering them in prose that touches the heart."</p>
<p className="text-base md:text-lg text-[#333333]/70 leading-relaxed">"I pray that this collection becomes a companion to every believer, guiding them through the moments of their day with remembrance and gratitude."</p>
</div>
</div>
</div>
</section>

<div className="py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<svg className="w-full h-24 opacity-10" preserveaspectratio="xMidYMid slice" viewbox="0 0 1200 100">
<defs>
<pattern height="100" id="islamicPattern" patternunits="userSpaceOnUse" width="100" x="0" y="0">
<path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#5F6B50" strokeWidth="1"></path>
<circle cx="50" cy="50" fill="none" r="20" stroke="#5F6B50" strokeWidth="1"></circle>
<path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="#C5A059" strokeWidth="0.5" transform="rotate(45 50 50)"></path>
</pattern>
</defs>
<rect fill="url(#islamicPattern)" height="100%" width="100%"></rect>
</svg>
</div>
</div>

<section className="py-16 md:py-24 bg-[#5F6B50]/5" id="register">
<div className="max-w-2xl mx-auto px-6 text-center">
<p className="text-xs tracking-widest text-[#C5A059] mb-4" style={{fontFamily: '\'Inter\', sans-serif'}}>BE THE FIRST TO KNOW</p>
<h2 className="text-3xl md:text-4xl font-medium text-[#5F6B50] tracking-tight mb-4">Register for Presale</h2>
<p className="text-base md:text-lg text-[#333333]/70 mb-8">Join our exclusive list to receive priority access when pre-orders open. Limited first edition copies available.</p>

<div className="max-w-md mx-auto" id="registerForm">
<form className="flex flex-col sm:flex-row gap-4" onsubmit="handleSubmit(event)">
<input className="flex-1 px-6 py-4 bg-white border border-[#5F6B50]/20 text-[#333333] placeholder-[#333333]/40 focus:outline-none focus:border-[#C5A059] transition-colors text-base" placeholder="Enter your email address" required="" style={{fontFamily: '\'EB Garamond\', serif'}} type="email"/>
<button className="bg-[#C5A059] text-white px-8 py-4 text-xs tracking-widest hover:bg-[#B08D4A] transition-colors whitespace-nowrap" style={{fontFamily: '\'Inter\', sans-serif'}} type="submit">NOTIFY ME</button>
</form>
<p className="text-xs text-[#333333]/50 mt-4">We respect your privacy. Unsubscribe at any time.</p>
</div>

<div className="hidden" id="successMessage">
<div className="bg-white border border-[#5F6B50]/20 p-8 max-w-md mx-auto">
<span className="iconify text-[#C5A059] mb-4 mx-auto" data-icon="lucide:check-circle" data-width="48" style={{strokeWidth: '1.5'}}></span>
<p className="text-xl text-[#5F6B50] mb-2">Jazākumullāhu Khayran</p>
<p className="text-base text-[#333333]/70">You are on the list.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-[#5F6B50]/10">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-lg text-[#5F6B50] mb-6" style={{fontFamily: '\'EB Garamond\', serif'}}>Available exclusively at <span className="italic">Barakah Bookstore</span></p>
<div className="flex items-center justify-center gap-8 mb-8">
<a className="flex items-center gap-2 text-[#333333]/60 hover:text-[#C5A059] transition-colors" href="https://instagram.com/Deenroots" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs tracking-wider" style={{fontFamily: '\'Inter\', sans-serif'}}>@DEENROOTS</span>
</a>
<a className="flex items-center gap-2 text-[#333333]/60 hover:text-[#C5A059] transition-colors" href="https://instagram.com/BarakahBookstore" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs tracking-wider" style={{fontFamily: '\'Inter\', sans-serif'}}>@BARAKAHBOOKSTORE</span>
</a>
</div>
<div className="w-16 h-px bg-[#5F6B50]/20 mx-auto mb-6"></div>
<p className="text-lg font-medium text-[#5F6B50] tracking-tighter mb-2">Deenroots Publications</p>
<p className="text-xs text-[#333333]/50" style={{fontFamily: '\'Inter\', sans-serif'}}>© 2024 ALL RIGHTS RESERVED</p>
</div>
</footer>


    </>
  );
}
