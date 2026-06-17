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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Icons
      lucide.createIcons();
    


      KlaviyoSubscribe.attachToForms('#klaviyo_survey_form', {
          hide_form_on_success: true,
          success_message: "Thank you for your feedback! Your responses have been saved.",
          success: function ($form) {}
      });

      document.addEventListener('DOMContentLoaded', function() {
          const urlParams = new URLSearchParams(window.location.search);
          const emailParam = urlParams.get('email') || urlParams.get('_kx');
          if(emailParam) {
              const emailInput = document.getElementById('k_id_email');
              if(emailInput) {
                  emailInput.value = emailParam;
                  if(emailParam.includes('@')) {
                      emailInput.setAttribute('readonly', 'true');
                      emailInput.classList.add('bg-zinc-50', 'text-black', 'cursor-not-allowed');
                  }
              }
          }
      });
    
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
      
<main className="max-w-xl mx-auto bg-white rounded-2xl border shadow-sm overflow-hidden border-zinc-200">

<div className="px-6 py-8 sm:px-10 sm:py-10 border-b bg-white text-center border-zinc-100">
<img alt="Mai Nami Logo" className="h-8 w-auto mx-auto mb-4 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5feef13b-77da-4ad0-b9a4-71b3b24ded39_320w.png"/>
<h1 className="sm:text-3xl text-2xl tracking-tight mb-2 font-bold text-[#782616]">
          How did you like the Hair Pudding?
        </h1>
<p className="text-base max-w-sm mx-auto text-zinc-500">
          Your feedback goes directly to our product team to help us perfect the
          formula.
        </p>
</div>

<form action="//manage.kmail-lists.com/subscriptions/subscribe" className="p-6 sm:p-10 space-y-8" id="klaviyo_survey_form" method="POST">

<input name="g" type="hidden" value="LIST_ID_HERE"/>
<input name="$fields" type="hidden" value="TextureRating,PackagingRating,SmellRating,EffectRating,FeedbackComments"/>
<input name="$source" type="hidden" value="Post-Purchase Feedback Survey"/>

<div className="">
<label className="flex items-center text-base font-normal text-zinc-800 mb-3" htmlFor="k_id_email">
<i className="w-5 h-5 mr-2 text-zinc-400" data-lucide="mail" strokeWidth="1.5"></i>
            Email Address
          </label>
<input className="focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-zinc-900/10 focus:border-zinc-900 text-base text-zinc-900 bg-white w-full border-zinc-200 border rounded-xl pt-3.5 pr-3.5 pb-3.5 pl-3.5 shadow-sm placeholder-black" id="k_id_email" name="email" placeholder="Enter your email" required="" type="email"/>
</div>

<div className="">
<label className="flex items-center text-base font-normal mb-3 text-zinc-800">
<i className="w-5 h-5 mr-2 text-zinc-400" data-lucide="wand-2" strokeWidth="1.5"></i>
            Texture
          </label>
<div className="grid grid-cols-5 gap-2 sm:gap-3">
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="TextureRating" required="" type="radio" value="1"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900 hover:text-black">
                1
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="TextureRating" type="radio" value="2"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                2
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="TextureRating" type="radio" value="3"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                3
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="TextureRating" type="radio" value="4"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                4
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="TextureRating" type="radio" value="5"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                5
              </div>
</label>
</div>
<div className="flex justify-between text-sm mt-2 px-1 text-zinc-400">
<span className="">Needs work</span>
<span>Perfect</span>
</div>
</div>

<div>
<label className="flex items-center text-base font-normal mb-3 text-zinc-800">
<i className="w-5 h-5 mr-2 text-zinc-400" data-lucide="package" strokeWidth="1.5"></i>
            Packaging
          </label>
<div className="grid grid-cols-5 gap-2 sm:gap-3">
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="PackagingRating" required="" type="radio" value="1"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                1
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="PackagingRating" type="radio" value="2"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                2
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="PackagingRating" type="radio" value="3"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                3
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="PackagingRating" type="radio" value="4"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                4
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="PackagingRating" type="radio" value="5"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                5
              </div>
</label>
</div>
<div className="flex justify-between text-sm mt-2 px-1 text-zinc-400">
<span>Impractical</span>
<span>Beautiful &amp; easy</span>
</div>
</div>

<div>
<label className="flex items-center text-base font-normal mb-3 text-zinc-800">
<i className="w-5 h-5 mr-2 text-zinc-400" data-lucide="wind" strokeWidth="1.5"></i>
            Smell
          </label>
<div className="grid grid-cols-5 gap-2 sm:gap-3">
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="SmellRating" required="" type="radio" value="1"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                1
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="SmellRating" type="radio" value="2"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                2
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="SmellRating" type="radio" value="3"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                3
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="SmellRating" type="radio" value="4"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                4
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="SmellRating" type="radio" value="5"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                5
              </div>
</label>
</div>
<div className="flex justify-between text-sm mt-2 px-1 text-zinc-400">
<span>Too strong/weak</span>
<span>Just right</span>
</div>
</div>

<div>
<label className="flex items-center text-base font-normal mb-3 text-zinc-800">
<i className="w-5 h-5 mr-2 text-zinc-400" data-lucide="sparkles" strokeWidth="1.5"></i>
            Finished Effect on Hair
          </label>
<div className="grid grid-cols-5 gap-2 sm:gap-3">
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="EffectRating" required="" type="radio" value="1"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                1
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="EffectRating" type="radio" value="2"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                2
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="EffectRating" type="radio" value="3"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                3
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="EffectRating" type="radio" value="4"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                4
              </div>
</label>
<label className="relative flex cursor-pointer">
<input className="peer sr-only" name="EffectRating" type="radio" value="5"/>
<div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
                5
              </div>
</label>
</div>
<div className="flex justify-between text-sm mt-2 px-1 text-zinc-400">
<span>Not what I wanted</span>
<span>Looks amazing</span>
</div>
</div>
<hr className="border-zinc-100"/>

<div>
<label className="flex items-center text-base font-normal mb-2 text-zinc-800" htmlFor="FeedbackComments">
<i className="w-5 h-5 mr-2 text-zinc-400" data-lucide="file-text" strokeWidth="1.5"></i>
            Any additional thoughts?
          </label>
<textarea className="w-full bg-white border rounded-xl p-3.5 text-base focus:outline-none focus:ring-2 transition-all duration-200 resize-none shadow-sm border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-zinc-900/10 focus:border-zinc-900" id="FeedbackComments" name="FeedbackComments" placeholder="Tell us what you loved or what could be better..." rows="3"></textarea>
</div>

<div className="klaviyo_messages hidden">
<div className="success_message text-base font-normal border p-4 rounded-xl text-center hidden mb-4 text-zinc-800 bg-zinc-50 border-zinc-200"></div>
<div className="error_message text-base font-normal border p-4 rounded-xl text-center hidden mb-4 text-zinc-600 bg-zinc-50 border-zinc-100"></div>
</div>

<div className="pt-2">
<button className="flex transition-all duration-200 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-[#782616]/90 focus-visible:ring-[#782616] text-base font-normal text-white font-dm-sans bg-[#782616] w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 shadow-sm items-center justify-center" type="submit">
            Submit Responses
            <i className="ml-2 w-5 h-5 opacity-70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</form>
</main>





    </>
  );
}
