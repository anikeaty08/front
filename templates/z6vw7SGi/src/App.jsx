import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    window.addEventListener('DOMContentLoaded', () => {
      const ratingItems = document.querySelectorAll('[data-rating]');
      let selected = -1;
      ratingItems.forEach((el, idx) => {
        el.addEventListener('click', () => {
          selected = idx;
          ratingItems.forEach((item, i) => {
            if (i <= idx) item.classList.add('selected');
            else item.classList.remove('selected');
          });
          document.getElementById('rating-input').value = idx + 1;
        });
      });

      // Screenshot file button
      document.getElementById('ss-btn').addEventListener('click', () => {
        document.getElementById('ss-input').click();
      });
      document.getElementById('ss-input').addEventListener('change', (e) => {
        let label = document.getElementById('ss-label');
        if (e.target.files.length) label.innerText = "Screenshot added";
        else label.innerText = "Add Screenshot";
      });

      // Voice record pseudo functionality
      let rec = false;
      const recBtn = document.getElementById('rec-btn');
      recBtn.addEventListener('click', () => {
        rec = !rec;
        if (rec) {
          recBtn.classList.add('bg-red-500');
          recBtn.classList.remove('bg-gray-100');
          recBtn.querySelector('i').classList.replace('fa-microphone', 'fa-stop');
          recBtn.querySelector('span').textContent = "Recording...";
        } else {
          recBtn.classList.remove('bg-red-500');
          recBtn.classList.add('bg-gray-100');
          recBtn.querySelector('i').classList.replace('fa-stop', 'fa-microphone');
          recBtn.querySelector('span').textContent = "Record Voice";
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-[450px] h-[1000px] bg-white rounded-3xl shadow-lg flex flex-col gap-6 px-8 py-10 mx-auto">

<section className="flex flex-col gap-2 items-center">
<h1 className="text-3xl font-semibold text-gray-900">Customer Satisfaction Survey</h1>
<p className="text-base text-gray-600 text-center">We value your feedback! Please tell us how satisfied you are with our service today.</p>
</section>

<section className="flex flex-col gap-3 mt-4">
<label className="text-lg font-medium text-gray-800 mb-2" htmlFor="rating-input">How do you feel about your experience?</label>
<div className="flex flex-row justify-center items-center gap-6 px-4 py-4 bg-gray-50 rounded-xl">

<button aria-label="Very Dissatisfied" className="star transition text-3xl bg-white rounded-full shadow-sm hover:ring-2 hover:ring-red-400 px-3 py-2" data-rating="1" type="button">😭</button>
<button aria-label="Dissatisfied" className="star transition text-3xl bg-white rounded-full shadow-sm hover:ring-2 hover:ring-orange-400 px-3 py-2" data-rating="2" type="button">😞</button>
<button aria-label="Neutral" className="star transition text-3xl bg-white rounded-full shadow-sm hover:ring-2 hover:ring-yellow-400 px-3 py-2" data-rating="3" type="button">😐</button>
<button aria-label="Satisfied" className="star transition text-3xl bg-white rounded-full shadow-sm hover:ring-2 hover:ring-green-400 px-3 py-2" data-rating="4" type="button">😊</button>
<button aria-label="Very Satisfied" className="star transition text-3xl bg-white rounded-full shadow-sm hover:ring-2 hover:ring-emerald-400 px-3 py-2" data-rating="5" type="button">😁</button>
</div>
<input id="rating-input" name="rating" type="hidden" value=""/>
</section>

<section className="flex flex-col gap-2 mt-1">
<label className="text-lg font-medium text-gray-800 mb-2" htmlFor="feedback">Additional feedback</label>
<textarea className="resize-none w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 text-gray-800 shadow-sm" id="feedback" name="feedback" placeholder="Let us know what we did well or how we can improve..." rows="5"></textarea>
</section>

<section className="flex flex-row gap-4 my-2 justify-center">

<div className="flex flex-row items-center gap-2 bg-gray-100 rounded-xl px-4 py-2 shadow-sm">
<input accept="image/*" id="ss-input" type="file"/>
<button className="flex items-center gap-1 p-0 hover:text-emerald-600" id="ss-btn" type="button">
<i className="fa-regular fa-image text-2xl"></i>
<span className="font-medium text-gray-700" id="ss-label">Add Screenshot</span>
</button>
</div>

<button className="flex flex-row items-center gap-2 bg-gray-100 hover:bg-red-100 transition rounded-xl px-4 py-2 shadow-sm" id="rec-btn" type="button">
<i className="fa-solid fa-microphone text-xl text-emerald-500"></i>
<span className="font-medium text-gray-700">Record Voice</span>
</button>
</section>

<section className="flex flex-col mt-auto">
<button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-semibold text-lg shadow-md hover:bg-emerald-600 transition" type="submit">
        Submit Feedback
      </button>
</section>
</main>

    </>
  );
}
