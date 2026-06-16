import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.getElementById('card').classList.add('card-in');
        // Total slide-in finish: last child delay + transition (.37+.7*0 + .17 for each step) ≈ 1.25s
        setTimeout(() => {
          // Start progress bar filling and counting from 0% to 60%
          const bar = document.getElementById('progress-bar');
          const text = document.getElementById('progress-text');
          let percent = 0;
          const max = 60;
          const duration = 1000;
          let start = null;
          bar.classList.add('filled');
          function animateProgress(ts) {
            if (!start) start = ts;
            let p = Math.min((ts - start) / duration, 1);
            let value = Math.round(p * max);
            text.textContent = value + "%";
            if (p < 1) requestAnimationFrame(animateProgress);
            else text.textContent = max + "%";
          }
          requestAnimationFrame(animateProgress);
        }, 1250);
      }, 30);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="card-animate max-w-xs w-full group bg-[#1a1b21] hover:bg-[#17171B] rounded-2xl border border-white/10 p-5 shadow-xl flex flex-col gap-7" id="card">

<div className="slide-in delay-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-black rounded-xl p-1 w-11 h-11 flex items-center justify-center">

<svg fill="none" height="30" viewbox="0 0 32 32" width="30" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5595 2.08252L18.5467 8.24306L18.5339 14.4036L17.9459 12.9735V12.9698L17.1831 26.6843C17.9331 28.5032 18.3337 29.4749 18.3379 29.4786C18.3422 29.4822 18.7683 29.5042 19.2839 29.5262C20.8435 29.5923 22.7782 29.7353 24.2483 29.8929C24.5892 29.9296 24.879 29.9479 24.9003 29.9333C24.9216 29.9186 24.9259 23.6481 24.9216 15.9951L24.9088 2.08252H18.5595Z" fill="url(#paint0_linear_1)"></path>
<path d="M7.07373 2.06421V15.9915C7.07373 23.6518 7.08225 29.926 7.09504 29.937C7.10782 29.948 7.65753 29.9004 8.32229 29.838C8.98705 29.7757 9.90323 29.695 10.3592 29.662C11.058 29.6107 13.1546 29.497 13.3932 29.4933C13.4657 29.4933 13.4699 29.1816 13.4785 23.5931L13.4912 17.6929L13.9983 18.9251C14.075 19.1157 14.1006 19.1744 14.1773 19.3614L14.9401 5.65053C14.7781 5.25817 14.8634 5.46352 14.6801 5.01615C14.058 3.50168 13.5296 2.22189 13.5083 2.16322L13.4657 2.06055H7.07373V2.06421Z" fill="url(#paint1_linear_1)"></path>
<path d="M7.07373 2.06421L13.487 17.7039V17.6965L13.9941 18.9286C16.8108 25.7895 18.3236 29.4712 18.3321 29.4785C18.3364 29.4822 18.7625 29.5042 19.2781 29.5262C20.8378 29.5922 22.7724 29.7352 24.2426 29.8929C24.5792 29.9295 24.8732 29.9479 24.8903 29.9332L18.5324 14.3999V14.4036L17.9443 12.9735C17.3691 11.5763 16.9856 10.6413 14.6717 5.01613C14.0495 3.50167 13.5211 2.22189 13.4998 2.16322L13.4572 2.06055H10.2655L7.07373 2.06421Z" fill="#E30A17"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_1" x1="27.7853" x2="17.623" y1="22.9103" y2="27.3732">
<stop stop-color="#B20610"></stop><stop offset="0.25" stop-color="#B20610"></stop><stop offset="1" stop-color="#590004"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear_1" x1="3.99205" x2="14.9823" y1="8.17115" y2="3.40039">
<stop stop-color="#B20610"></stop><stop offset="0.25" stop-color="#B20610"></stop><stop offset="1" stop-color="#590004"></stop>
</lineargradient>
</defs>
</svg>
</div>
<span className="text-white font-bold text-[22px] ml-1 select-none tracking-tight">Netflix</span>
</div>
<button className="flex items-center text-white/60 hover:text-white transition gap-1 text-sm">
        Change Plans
        <svg fill="none" height="18" viewbox="0 0 10 18" width="10"><path d="M2 2l6 7-6 7" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-opacity="0.6" strokeWidth="1.5"></path></svg>
</button>
</div>

<div className="slide-in delay-2 flex flex-col gap-2">
<div className="flex items-center gap-4 mb-3">

<svg className="w-6 h-6" fill="none" height="23" viewbox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 10H2V6.5C2 5.67 2.67 5 3.5 5H20.5C21.33 5 22 5.67 22 6.5V10Z" fill-rule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" stroke-opacity="0.6" strokeWidth="1.5"></path><path clip-rule="evenodd" d="M20.5 19H3.5C2.67 19 2 18.33 2 17.5V10H22V17.5C22 18.33 21.33 19 20.5 19Z" fill-rule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M22 9H2V10H22V9Z" stroke="white" strokeLinecap="round" stroke-miterlimit="10" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M5.5 13H11" stroke="white" strokeLinecap="round" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M5.5 16H6" stroke="white" strokeLinecap="round" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M8.5 16H9" stroke="white" strokeLinecap="round" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M11.5 16H12" stroke="white" strokeLinecap="round" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M16.25 16.5C16.9404 16.5 17.5 15.9404 17.5 15.25C17.5 14.5596 16.9404 14 16.25 14C15.5596 14 15 14.5596 15 15.25C15 15.9404 15.5596 16.5 16.25 16.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M18.25 16.5C18.9404 16.5 19.5 15.9404 19.5 15.25C19.5 14.5596 18.9404 14 18.25 14C17.8411 14 17.4781 14.1963 17.25 14.4999C17.407 14.7088 17.5 14.9685 17.5 15.25C17.5 15.5315 17.407 15.7912 17.25 16.0001C17.4781 16.3037 17.8411 16.5 18.25 16.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" stroke-opacity="0.6" strokeWidth="1.5"></path></svg>
<span className="text-white/60 font-semibold text-base">$12 per month</span>
</div>
<div className="flex items-center gap-4">

<svg className="w-6 h-6" fill="none" height="23" viewbox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M19 2.5C19 2.22386 19.2239 2 19.5 2V2C19.7761 2 20 2.22386 20 2.5V5H19V2.5Z" stroke="white" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M14 2.5C14 2.22386 14.2239 2 14.5 2V2C14.7761 2 15 2.22386 15 2.5V5H14V2.5Z" stroke="white" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M4 2.5C4 2.22386 4.22386 2 4.5 2V2C4.77614 2 5 2.22386 5 2.5V5H4V2.5Z" stroke="white" stroke-opacity="0.6" strokeWidth="1.5"></path><path d="M9 2.5C9 2.22386 9.22386 2 9.5 2V2C9.77614 2 10 2.22386 10 2.5V5H9V2.5Z" stroke="white" stroke-opacity="0.6" strokeWidth="1.5"></path><path clip-rule="evenodd" d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V19.6284L19.451 22H4C2.89543 22 2 21.1046 2 20V7Z" fill-rule="evenodd" stroke="white" stroke-opacity="0.6" strokeWidth="1.5"></path><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="6" y="9"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="6" y="13"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="6" y="17"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="17" y="13"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="17" y="17"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="11.5" y="13"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="11.5" y="17"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="11.5" y="9"></rect><rect height="1" stroke="white" stroke-opacity="0.6" strokeWidth="1.5" width="1" x="17" y="9"></rect></svg>
<span className="text-white/60 font-semibold text-base">Renews on March 25</span>
</div>
</div>

<div className="slide-in delay-3 flex items-center justify-between gap-6">
<div className="relative w-2/3">
<div className="h-4 bg-white/10 rounded-full w-full"></div>
<div className="absolute top-0 left-0 h-4 rounded-full progress-bar" id="progress-bar" style={{background: 'linear-gradient(90deg,#05c4ff 0%,#1f25ff 100%)'}}></div>
</div>
<span className="text-xs font-semibold text-[#05C4FF] select-none" id="progress-text" style={{borderRadius: '12px', border: '1px solid rgba(255,255,255,0.10)', padding: '5px 13px 4px 13px', display: 'inline-block', background: 'transparent'}}>
        0%
      </span>
</div>

<div className="slide-in delay-4 text-white/60 text-sm">
      Consider cancelling. You haven’t used it much this month.
    </div>

<div className="slide-in delay-5 flex flex-col gap-3">
<button className="w-full bg-white/10 border border-white/10 group-hover:bg-white/20 group-hover:border-white/20 transition text-[#ED5E56] rounded-[30px] py-2.5 font-normal text-lg shadow flex justify-center items-center text-left relative overflow-hidden">
<span className="block group-hover:hidden">Cancel Subscription</span>
<span className="hidden group-hover:block font-semibold text-[#ED5E56]">Confirm</span>
</button>
<div className="text-white/60 text-xs">
        You can still access your subscription until March 25 if you cancel now.
      </div>
</div>
</div>


    </>
  );
}
