import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const reviews = [
        { "name": "Shah Hussain", "time": "4 weeks ago", "text": "Took my car in for an MOT and was really impressed with Abdal’s service. Professional, honest, and clearly knows his stuff. Quick, efficient, and no upselling." },
        { "name": "Yahya Ahmed", "time": "1 month ago", "text": "Super friendly team who made me feel comfortable. MOT was quick, honest and without any unnecessary charges. I’ll definitely be returning." },
        { "name": "Will HW Chung", "time": "3 weeks ago", "text": "My first MOT and I felt welcomed immediately. Friendly staff and a smooth process that left me relieved and happy. Highly recommended." },
        { "name": "David Marfil", "time": "6 months ago", "text": "Quick, friendly and professional. They explained a minor brake issue clearly and the whole MOT process was smooth. Recommended." },
        { "name": "Sadique Ali", "time": "1 year ago", "text": "Top quality service. Very professional and thorough, pointing out minor issues to keep my car running smoothly. Great team." },
        { "name": "Vanya Beloborodov", "time": "5 months ago", "text": "Lovely guys, no upselling, and great customer service. They explained everything clearly and gave me real peace of mind." },
        { "name": "Kaysar", "time": "4 months ago", "text": "They fit me in 2 days earlier than my appointment. MOT done in under an hour with a text to collect. Simple and effective service." },
        { "name": "King K95", "time": "1 year ago", "text": "Absolute legends! Sorted my car within minutes and always friendly. I come here for everything — they sort issues straight away." },
        { "name": "Bill Thomas", "time": "5 months ago", "text": "Very happy with my same-day MOT for my Honda Jazz. No drama, friendly, professional and highly recommended." },
        { "name": "The Random Reminders", "time": "2 months ago", "text": "Great service, patient staff, and clear explanation of advisories. No time wasted — exactly what you want from an MOT centre." },
        { "name": "Nazmul Hasan", "time": "2 months ago", "text": "First time here and highly recommend. Solid communication throughout the process and a great team overall." },
        { "name": "Sha Kamaly", "time": "1 year ago", "text": "Excellent service. I’ve been with these guys for over 15 years. Now that they have their own MOT centre, it’s even better." },
        { "name": "Ahsanul Mumin", "time": "1 year ago", "text": "Great service and extremely clean compared to other MOT centres. Staff constantly maintain the space. Very professional." },
        { "name": "Mo Akbar", "time": "2 months ago", "text": "Great service. Booked quickly and got my MOT done without any issues. Highly recommended." },
        { "name": "Kaziology Vlogs", "time": "1 year ago (edited)", "text": "One of the best MOT places around. I've been using them for over 10 years and they always go the extra mile for safety." },
        { "name": "Rofiqul Islam", "time": "1 year ago", "text": "Had my MOT done and the inspector (Abdal) was careful and thorough. He explained everything clearly. 10/10 service." },
        { "name": "Rahel Ali", "time": "1 year ago", "text": "Super fast, friendly and most importantly honest service. I’m coming back next week for some repairs too." },
        { "name": "Damola O.", "time": "6 months ago", "text": "Abdal helped with my dashboard issues even though it was last minute and they were busy. Kind, honest and flexible." },
        { "name": "S Ahmed", "time": "2 months ago", "text": "I take my car there every time. Friendly team and professional service. Highly recommended." },
        { "name": "Shan “Shah A” A", "time": "10 months ago", "text": "Highly recommended. I was seen immediately and the MOT was done quickly. Great customer service from top guys." }
      ];

      function createReviewCard(review) {
          const initial = review.name.charAt(0);
          const truncatedText = review.text.length > 80 ? review.text.substring(0, 80) + "..." : review.text;

          return `
              <div class="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
                  <div>
                      <div class="flex items-center justify-between mb-3">
                          <div class="flex gap-1 text-yellow-400">
                              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          </div>
                          <span class="text-xs text-zinc-400 font-medium">${review.time}</span>
                      </div>
                      <p class="text-sm text-zinc-600 leading-relaxed">${truncatedText}</p>
                  </div>

                  <div class="flex items-center gap-3 pt-4 border-t border-zinc-100">
                      <div class="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">${initial}</div>
                      <span class="text-xs font-bold text-zinc-900">${review.name}</span>
                  </div>

                  <!-- POPUP OVERLAY (Click based) -->
                  <div class="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
                      <div class="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
                           <div class="flex items-center justify-between mb-6">
                              <div class="flex items-center gap-3">
                                  <div class="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">${initial}</div>
                                  <div>
                                      <h4 class="font-bold text-lg text-zinc-900">${review.name}</h4>
                                      <span class="text-sm text-zinc-500">${review.time}</span>
                                  </div>
                              </div>
                              <div class="flex gap-1 text-yellow-500">
                                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                              </div>
                          </div>
                          <p class="text-xl text-zinc-800 leading-relaxed font-medium">"${review.text}"</p>
                      </div>
                  </div>
              </div>
          `;
      }

      // Review Logic
      window.openReview = function(card) {
          const popup = card.querySelector('.review-popup');
          if(popup) {
              popup.classList.add('popup-open');
              document.body.style.overflow = 'hidden';
          }
      };

      window.closeReview = function(event, popup) {
          event.stopPropagation();
          popup.classList.remove('popup-open');
          document.body.style.overflow = '';
      };

      // FAQ Logic
      window.toggleFAQ = function(button) {
          const answer = button.nextElementSibling;
          const icon = button.querySelector('.faq-icon');
          if (answer.style.maxHeight) {
              answer.style.maxHeight = null;
              icon.classList.remove('rotate-180');
          } else {
              answer.style.maxHeight = answer.scrollHeight + "px";
              icon.classList.add('rotate-180');
          }
      };

      // Initialization & Animation
      document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons();

          const track = document.getElementById('review-track');
          const trackDuplicate = document.getElementById('review-track-duplicate');

          const reviewHTML = reviews.map(createReviewCard).join('');

          if(track) track.innerHTML = reviewHTML;
          if(trackDuplicate) trackDuplicate.innerHTML = reviewHTML;

          // Intersection Observer for Animation
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                  }
              });
          }, { threshold: 0.1 });

          document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full z-50 pt- pr-6 pb-4 pl-6 absolute top-0 items-center justify-center">
<div className="max-w-7xl mx-auto flex items-center justify-center relative">

<div className="flex flex-col items-center justify-center cursor-pointer hover:opacity-95 transition-opacity fade-in-element">
<div className="relative w-[24rem] md:w-[32rem] flex items-center justify-center">
<div className="w-full flex justify-center py-2">
<img alt="Burdett MOT Centre Logo" className="w-full h-auto object-contain" src="https://i.postimg.cc/bNqZJ4Zq/image.png"/>
</div>
</div>
</div>

<a className="hidden md:flex absolute right-0 top-10 hover:bg-zinc-800 transition-colors items-center gap-2 font-medium text-white bg-black rounded-full pt-2.5 pr-6 pb-2.5 pl-6 fade-in-element" href="tel:07985610216">
          Chat with Whatsapp
        </a>
</div>
</nav>

<section className="overflow-hidden md:pt-48 md:pb-32 bg-zinc-50 border-b border-zinc-200 pt-36 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex gap-2 text-sm font-semibold text-slate-50 bg-green-600 border-black-200 border rounded-full mb-8 mt-10 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="inline-flex h-2.5 w-2.5 bg-purple-50 rounded-full relative"></span>
</span>
            Accepting walk-ins today
          </div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-bold text-slate-900 tracking-tight mb-6 fade-in-element">
            Fast, honest MOT testing in East London for £50.
          </h1>
<p className="text-xl md:text-2xl font-normal text-slate-500 max-w-lg mb-10 leading-relaxed fade-in-element">
            DVSA-approved Class 4 MOTs for drivers in Bow, Mile End and Poplar.
            No upselling, just straight answers.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-start fade-in-element">
<a className="w-full sm:w-auto hover:bg-zinc-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 text-lg font-medium text-white bg-zinc-900 rounded-full px-8 py-4 shadow-xl shadow-zinc-200" href="tel:07985610216">
              Call now to book
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto hover:bg-white transition-all flex items-center justify-center gap-2 text-lg font-medium text-slate-700 bg-white border border-slate-200 rounded-full px-8 py-4 shadow-sm hover:shadow-md hover:border-slate-300" href="#location">
              Get directions
            </a>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[500px] fade-in-element">
<div className="absolute right-0 top-0 w-4/5 h-4/5 bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl rotate-3 border-4 border-white">
<img alt="Burdett MOT Centre Garage Workshop" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/geougc-cs/AMBA38uhkNfeXhwB1eMNBuWbLrJLUXSTa_Tu6SFyM_hRuIxu-EG3UPOPy0w-4IwtBxiNoAJbjlY5tE66vOb-JB09e0f4zqCEx-nUFmmOzgdfa-Ej00wy8UOl3wciiIZPJHVPhAxQVCvB-g=s3226-w3226-h1912-rw"/>
</div>
<div className="absolute left-0 bottom-10 w-3/5 h-3/5 bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl -rotate-6 border-4 border-white">
<img alt="Mechanic inspecting vehicle" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy3IZFe3ibGBlSv8MtUq7JgsYweHPfG7OG_pBNLJiH5znAj9saaOyfHItqPMZWceMnHqW2JV4xbry6NhthkPaIqoGWFAUhqWsI5s8dT75RTq8nWNj8-C4QboZ6Mc7SgSrCrcQw=s680-w680-h510-rw"/>
</div>

</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">
          Trusted by London drivers
        </h2>
<p className="text-lg text-zinc-500">
          See what our customers are saying on Google.
        </p>
</div>
<div className="relative w-full">

<div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

<div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-6 w-max animate-scroll hover:pause px-6">


<div className="flex gap-x-6 gap-y-6" id="review-track">
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">4 weeks ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Took my car in for an MOT and was really impressed with Abdal’s service. Profess...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Shah Hussain</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Shah Hussain</h4>
<span className="text-sm text-zinc-500">4 weeks ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Took my car in for an MOT and was really impressed with Abdal’s service. Professional, honest, and clearly knows his stuff. Quick, efficient, and no upselling."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 month ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Super friendly team who made me feel comfortable. MOT was quick, honest and with...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">Y</div>
<span className="text-xs font-bold text-zinc-900">Yahya Ahmed</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">Y</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Yahya Ahmed</h4>
<span className="text-sm text-zinc-500">1 month ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Super friendly team who made me feel comfortable. MOT was quick, honest and without any unnecessary charges. I’ll definitely be returning."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">3 weeks ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">My first MOT and I felt welcomed immediately. Friendly staff and a smooth proces...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">W</div>
<span className="text-xs font-bold text-zinc-900">Will HW Chung</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">W</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Will HW Chung</h4>
<span className="text-sm text-zinc-500">3 weeks ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"My first MOT and I felt welcomed immediately. Friendly staff and a smooth process that left me relieved and happy. Highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">6 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Quick, friendly and professional. They explained a minor brake issue clearly and...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">D</div>
<span className="text-xs font-bold text-zinc-900">David Marfil</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">D</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">David Marfil</h4>
<span className="text-sm text-zinc-500">6 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Quick, friendly and professional. They explained a minor brake issue clearly and the whole MOT process was smooth. Recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Top quality service. Very professional and thorough, pointing out minor issues t...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Sadique Ali</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Sadique Ali</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Top quality service. Very professional and thorough, pointing out minor issues to keep my car running smoothly. Great team."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">5 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Lovely guys, no upselling, and great customer service. They explained everything...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">V</div>
<span className="text-xs font-bold text-zinc-900">Vanya Beloborodov</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">V</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Vanya Beloborodov</h4>
<span className="text-sm text-zinc-500">5 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Lovely guys, no upselling, and great customer service. They explained everything clearly and gave me real peace of mind."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">4 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">They fit me in 2 days earlier than my appointment. MOT done in under an hour wit...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">K</div>
<span className="text-xs font-bold text-zinc-900">Kaysar</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">K</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Kaysar</h4>
<span className="text-sm text-zinc-500">4 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"They fit me in 2 days earlier than my appointment. MOT done in under an hour with a text to collect. Simple and effective service."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Absolute legends! Sorted my car within minutes and always friendly. I come here ...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">K</div>
<span className="text-xs font-bold text-zinc-900">King K95</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">K</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">King K95</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Absolute legends! Sorted my car within minutes and always friendly. I come here for everything — they sort issues straight away."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">5 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Very happy with my same-day MOT for my Honda Jazz. No drama, friendly, professio...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">B</div>
<span className="text-xs font-bold text-zinc-900">Bill Thomas</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">B</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Bill Thomas</h4>
<span className="text-sm text-zinc-500">5 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Very happy with my same-day MOT for my Honda Jazz. No drama, friendly, professional and highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Great service, patient staff, and clear explanation of advisories. No time waste...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">T</div>
<span className="text-xs font-bold text-zinc-900">The Random Reminders</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">T</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">The Random Reminders</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Great service, patient staff, and clear explanation of advisories. No time wasted — exactly what you want from an MOT centre."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">First time here and highly recommend. Solid communication throughout the process...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">N</div>
<span className="text-xs font-bold text-zinc-900">Nazmul Hasan</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">N</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Nazmul Hasan</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"First time here and highly recommend. Solid communication throughout the process and a great team overall."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Excellent service. I’ve been with these guys for over 15 years. Now that they ha...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Sha Kamaly</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Sha Kamaly</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Excellent service. I’ve been with these guys for over 15 years. Now that they have their own MOT centre, it’s even better."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Great service and extremely clean compared to other MOT centres. Staff constantl...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">A</div>
<span className="text-xs font-bold text-zinc-900">Ahsanul Mumin</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">A</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Ahsanul Mumin</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Great service and extremely clean compared to other MOT centres. Staff constantly maintain the space. Very professional."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Great service. Booked quickly and got my MOT done without any issues. Highly rec...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">M</div>
<span className="text-xs font-bold text-zinc-900">Mo Akbar</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">M</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Mo Akbar</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Great service. Booked quickly and got my MOT done without any issues. Highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago (edited)</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">One of the best MOT places around. I've been using them for over 10 years and th...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">K</div>
<span className="text-xs font-bold text-zinc-900">Kaziology Vlogs</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">K</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Kaziology Vlogs</h4>
<span className="text-sm text-zinc-500">1 year ago (edited)</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"One of the best MOT places around. I've been using them for over 10 years and they always go the extra mile for safety."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Had my MOT done and the inspector (Abdal) was careful and thorough. He explained...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">R</div>
<span className="text-xs font-bold text-zinc-900">Rofiqul Islam</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">R</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Rofiqul Islam</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Had my MOT done and the inspector (Abdal) was careful and thorough. He explained everything clearly. 10/10 service."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Super fast, friendly and most importantly honest service. I’m coming back next w...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">R</div>
<span className="text-xs font-bold text-zinc-900">Rahel Ali</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">R</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Rahel Ali</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Super fast, friendly and most importantly honest service. I’m coming back next week for some repairs too."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">6 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Abdal helped with my dashboard issues even though it was last minute and they we...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">D</div>
<span className="text-xs font-bold text-zinc-900">Damola O.</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">D</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Damola O.</h4>
<span className="text-sm text-zinc-500">6 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Abdal helped with my dashboard issues even though it was last minute and they were busy. Kind, honest and flexible."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">I take my car there every time. Friendly team and professional service. Highly r...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">S Ahmed</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">S Ahmed</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"I take my car there every time. Friendly team and professional service. Highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">10 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Highly recommended. I was seen immediately and the MOT was done quickly. Great c...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Shan “Shah A” A</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Shan “Shah A” A</h4>
<span className="text-sm text-zinc-500">10 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Highly recommended. I was seen immediately and the MOT was done quickly. Great customer service from top guys."</p>
</div>
</div>
</div>
</div>

<div className="flex gap-6" id="review-track-duplicate">
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">4 weeks ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Took my car in for an MOT and was really impressed with Abdal’s service. Profess...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Shah Hussain</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Shah Hussain</h4>
<span className="text-sm text-zinc-500">4 weeks ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Took my car in for an MOT and was really impressed with Abdal’s service. Professional, honest, and clearly knows his stuff. Quick, efficient, and no upselling."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 month ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Super friendly team who made me feel comfortable. MOT was quick, honest and with...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">Y</div>
<span className="text-xs font-bold text-zinc-900">Yahya Ahmed</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">Y</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Yahya Ahmed</h4>
<span className="text-sm text-zinc-500">1 month ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Super friendly team who made me feel comfortable. MOT was quick, honest and without any unnecessary charges. I’ll definitely be returning."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">3 weeks ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">My first MOT and I felt welcomed immediately. Friendly staff and a smooth proces...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">W</div>
<span className="text-xs font-bold text-zinc-900">Will HW Chung</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">W</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Will HW Chung</h4>
<span className="text-sm text-zinc-500">3 weeks ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"My first MOT and I felt welcomed immediately. Friendly staff and a smooth process that left me relieved and happy. Highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">6 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Quick, friendly and professional. They explained a minor brake issue clearly and...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">D</div>
<span className="text-xs font-bold text-zinc-900">David Marfil</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">D</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">David Marfil</h4>
<span className="text-sm text-zinc-500">6 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Quick, friendly and professional. They explained a minor brake issue clearly and the whole MOT process was smooth. Recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Top quality service. Very professional and thorough, pointing out minor issues t...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Sadique Ali</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Sadique Ali</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Top quality service. Very professional and thorough, pointing out minor issues to keep my car running smoothly. Great team."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">5 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Lovely guys, no upselling, and great customer service. They explained everything...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">V</div>
<span className="text-xs font-bold text-zinc-900">Vanya Beloborodov</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">V</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Vanya Beloborodov</h4>
<span className="text-sm text-zinc-500">5 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Lovely guys, no upselling, and great customer service. They explained everything clearly and gave me real peace of mind."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">4 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">They fit me in 2 days earlier than my appointment. MOT done in under an hour wit...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">K</div>
<span className="text-xs font-bold text-zinc-900">Kaysar</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">K</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Kaysar</h4>
<span className="text-sm text-zinc-500">4 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"They fit me in 2 days earlier than my appointment. MOT done in under an hour with a text to collect. Simple and effective service."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Absolute legends! Sorted my car within minutes and always friendly. I come here ...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">K</div>
<span className="text-xs font-bold text-zinc-900">King K95</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">K</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">King K95</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Absolute legends! Sorted my car within minutes and always friendly. I come here for everything — they sort issues straight away."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">5 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Very happy with my same-day MOT for my Honda Jazz. No drama, friendly, professio...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">B</div>
<span className="text-xs font-bold text-zinc-900">Bill Thomas</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">B</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Bill Thomas</h4>
<span className="text-sm text-zinc-500">5 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Very happy with my same-day MOT for my Honda Jazz. No drama, friendly, professional and highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Great service, patient staff, and clear explanation of advisories. No time waste...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">T</div>
<span className="text-xs font-bold text-zinc-900">The Random Reminders</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">T</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">The Random Reminders</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Great service, patient staff, and clear explanation of advisories. No time wasted — exactly what you want from an MOT centre."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">First time here and highly recommend. Solid communication throughout the process...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">N</div>
<span className="text-xs font-bold text-zinc-900">Nazmul Hasan</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">N</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Nazmul Hasan</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"First time here and highly recommend. Solid communication throughout the process and a great team overall."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Excellent service. I’ve been with these guys for over 15 years. Now that they ha...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Sha Kamaly</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Sha Kamaly</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Excellent service. I’ve been with these guys for over 15 years. Now that they have their own MOT centre, it’s even better."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Great service and extremely clean compared to other MOT centres. Staff constantl...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">A</div>
<span className="text-xs font-bold text-zinc-900">Ahsanul Mumin</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">A</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Ahsanul Mumin</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Great service and extremely clean compared to other MOT centres. Staff constantly maintain the space. Very professional."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Great service. Booked quickly and got my MOT done without any issues. Highly rec...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">M</div>
<span className="text-xs font-bold text-zinc-900">Mo Akbar</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">M</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Mo Akbar</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Great service. Booked quickly and got my MOT done without any issues. Highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago (edited)</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">One of the best MOT places around. I've been using them for over 10 years and th...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">K</div>
<span className="text-xs font-bold text-zinc-900">Kaziology Vlogs</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">K</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Kaziology Vlogs</h4>
<span className="text-sm text-zinc-500">1 year ago (edited)</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"One of the best MOT places around. I've been using them for over 10 years and they always go the extra mile for safety."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Had my MOT done and the inspector (Abdal) was careful and thorough. He explained...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">R</div>
<span className="text-xs font-bold text-zinc-900">Rofiqul Islam</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">R</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Rofiqul Islam</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Had my MOT done and the inspector (Abdal) was careful and thorough. He explained everything clearly. 10/10 service."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">1 year ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Super fast, friendly and most importantly honest service. I’m coming back next w...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">R</div>
<span className="text-xs font-bold text-zinc-900">Rahel Ali</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">R</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Rahel Ali</h4>
<span className="text-sm text-zinc-500">1 year ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Super fast, friendly and most importantly honest service. I’m coming back next week for some repairs too."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">6 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Abdal helped with my dashboard issues even though it was last minute and they we...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">D</div>
<span className="text-xs font-bold text-zinc-900">Damola O.</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">D</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Damola O.</h4>
<span className="text-sm text-zinc-500">6 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Abdal helped with my dashboard issues even though it was last minute and they were busy. Kind, honest and flexible."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">2 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">I take my car there every time. Friendly team and professional service. Highly r...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">S Ahmed</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">S Ahmed</h4>
<span className="text-sm text-zinc-500">2 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"I take my car there every time. Friendly team and professional service. Highly recommended."</p>
</div>
</div>
</div>
<div className="review-card group relative w-80 h-48 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between shrink-0 hover:bg-white hover:shadow-lg hover:border-yellow-400 transition-all cursor-pointer" onclick="openReview(this)">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex gap-1 text-yellow-400">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-medium">10 months ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Highly recommended. I was seen immediately and the MOT was done quickly. Great c...</p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 font-bold text-xs flex items-center justify-center">S</div>
<span className="text-xs font-bold text-zinc-900">Shan “Shah A” A</span>
</div>

<div className="review-popup fixed inset-0 z-[999] flex items-center justify-center bg-zinc-900/40 backdrop-blur-sm p-4" onclick="closeReview(event, this)">
<div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl scale-100 transform transition-transform" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">S</div>
<div>
<h4 className="font-bold text-lg text-zinc-900">Shan “Shah A” A</h4>
<span className="text-sm text-zinc-500">10 months ago</span>
</div>
</div>
<div className="flex gap-1 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xl text-zinc-800 leading-relaxed font-medium">"Highly recommended. I was seen immediately and the MOT was done quickly. Great customer service from top guys."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-16 text-center">
          Our Services
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-element">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:border-yellow-300 hover:shadow-yellow-100/50 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-car-front w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path>
<path d="M7 14h.01"></path>
<path d="M17 14h.01"></path>
<rect height="8" rx="2" width="18" x="3" y="10"></rect>
<path d="M5 18v2"></path>
<path d="M19 18v2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-zinc-900 tracking-tight">
              Class 4 MOT Testing
            </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
              DVSA-certified MOT tests for cars and light vehicles. Clear
              assessments, no unnecessary repairs.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:border-blue-300 hover:shadow-blue-100/50 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-search-check w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 11 2 2 4-4"></path>
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-zinc-900 tracking-tight">
              Pre-MOT Checks
            </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
              Quick visual inspections to help spot issues early and reduce the
              chance of failing.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:border-emerald-300 hover:shadow-emerald-100/50 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-wrench w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4 text-zinc-900 tracking-tight">
              Repairs &amp; Retests
            </h3>
<p className="text-lg text-zinc-600 leading-relaxed">
              If your vehicle needs work, retests are available within 10
              working days. Honest guidance and transparent results.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-element">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-10">
              Why drivers choose Burdett
            </h2>
<div className="space-y-10">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
<svg className="w-6 h-6 text-yellow-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Honest assessments
                  </h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                    No upselling, no pressure — just clear, accurate MOT
                    results. We explain advisories in plain English.
                  </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<svg className="w-6 h-6 text-blue-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="">
<h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Fast turnaround times
                  </h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                    Most MOTs are completed within 45 minutes to an hour. Relax
                    in our waiting area or drop and go.
                  </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<svg className="w-6 h-6 text-zinc-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20H2"></path>
<path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"></path>
<path d="M11 4H8a2 2 0 0 0-2 2v14"></path>
<path d="M14 12h.01"></path>
<path d="M22 20h-3"></path>
</svg>
</div>
<div className="">
<h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Walk-in friendly
                  </h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                    We understand life gets busy. Drop by anytime and we’ll fit
                    you in as quickly as possible.
                  </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<img alt="Car on lift" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://i.postimg.cc/3R4nLXkt/image.png" style={{}}/>
<img alt="Mechanic tools" className="w-full h-64 object-cover rounded-2xl shadow-lg translate-y-8" src="https://i.postimg.cc/RCpskc2B/image.png"/>
<img alt="Garage interior" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://i.postimg.cc/t4bvXvTm/image.png"/>
<img alt="Car inspection" className="w-full h-64 object-cover rounded-2xl shadow-lg translate-y-8" src="https://i.postimg.cc/26CByvWg/image.png"/>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6" id="location">
<div className="max-w-7xl mx-auto bg-zinc-900 rounded-[2.5rem] overflow-hidden text-white flex flex-col lg:flex-row shadow-2xl fade-in-element">

<div className="p-10 md:p-16 lg:w-5/12 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-white">
            Find us
          </h2>
<div className="space-y-8 text-lg font-light text-zinc-300">
<div className="flex items-start gap-5 group">
<div className="p-3 bg-zinc-800 rounded-xl group-hover:bg-yellow-500 group-hover:text-black transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<p className="font-medium text-white mb-1">07985 610 216</p>
<p className="font-medium text-white mb-1">07940 147 237</p>
<p className="text-sm text-zinc-400 mt-1">Call for bookings</p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="p-3 bg-zinc-800 rounded-xl group-hover:bg-yellow-500 group-hover:text-black transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<p className="font-medium text-white mb-1">430 Burdett Road</p>
<p className="text-zinc-400">London, E3 4AT</p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="p-3 bg-zinc-800 rounded-xl group-hover:bg-yellow-500 group-hover:text-black transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
<span className="text-zinc-400">Mon–Fri:</span>
<span className="text-white font-medium">9am – 6pm</span>
<span className="text-zinc-400">Sat:</span>
<span className="text-white font-medium">9am – 4pm</span>
</div>
<p className="mt-4 text-yellow-400 font-medium text-sm border-l-2 border-yellow-500 pl-3">
                  Walk-ins welcome anytime.
                </p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 min-h-[400px] bg-slate-100 relative">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5678072051664!2d-0.0343!3d51.5165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d6706f9c971%3A0x123456789!2s430%20Burdett%20Rd%2C%20London%20E3%204AT!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-12">
          Frequently Asked Questions
        </h2>
<div className="space-y-4 fade-in-element">

<div className="border-b border-zinc-100">
<button className="w-full py-6 flex items-center justify-between text-left group focus:outline-none" onclick="toggleFAQ(this)">
<h3 className="text-xl font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">
                How long does an MOT take?
              </h3>
<svg className="faq-icon w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="faq-answer">
<div className="pb-8 text-lg text-zinc-600 leading-relaxed">
                Most MOTs are completed within 45 minutes to an hour. Call ahead
                for current wait times.
              </div>
</div>
</div>

<div className="border-b border-zinc-100">
<button className="w-full py-6 flex items-center justify-between text-left group focus:outline-none" onclick="toggleFAQ(this)">
<h3 className="text-xl font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">
                What happens if my vehicle fails?
              </h3>
<svg className="faq-icon w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="faq-answer">
<div className="pb-8 text-lg text-zinc-600 leading-relaxed">
                We’ll explain exactly what needs fixing. If repairs are done
                with us, your retest within 10 working days is free.
              </div>
</div>
</div>

<div className="border-b border-zinc-100">
<button className="w-full py-6 flex items-center justify-between text-left group focus:outline-none" onclick="toggleFAQ(this)">
<h3 className="text-xl font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">
                Do you offer pre-MOT checks?
              </h3>
<svg className="faq-icon w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="faq-answer">
<div className="pb-8 text-lg text-zinc-600 leading-relaxed">
                Yes — a quick visual inspection that can save time and reduce
                the chance of failing.
              </div>
</div>
</div>

<div className="pt-4">
<button className="w-full py-6 flex items-center justify-between text-left group focus:outline-none" onclick="toggleFAQ(this)">
<h3 className="text-xl font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">
                Are you DVSA approved?
              </h3>
<svg className="faq-icon w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="faq-answer">
<div className="pb-8 text-lg text-zinc-600 leading-relaxed">
                Absolutely. We are fully certified to conduct Class 4 MOT tests.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-zinc-200 border-t pt-0 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="">
<div className="flex items-center justify-start gap-4 mb-6">

<img alt="Burdett MOT Centre Logo" className="w-20 h-auto" src="https://i.postimg.cc/hGJFJ6DJ/799f0c6c-cd49-4cd4-b185-9318ff94b570-removebg-preview.png"/>
</div>
<div className="text-base space-y-2 text-zinc-500">
<p className="">430 Burdett Road, London, E3 4AT</p>
<p className="text-zinc-900 font-medium">07985 610 216</p>
<p className="pt-4 text-xs uppercase tracking-wider text-zinc-400">
              © 2024 Burdett MOT Centre Ltd
            </p>
</div>
</div>
<div className="flex gap-10">
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-zinc-900">Services</h4>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              MOT Testing
            </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Repairs
            </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Servicing
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-zinc-900">Legal</h4>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Terms
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
