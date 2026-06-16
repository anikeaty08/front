import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (async () => {
      await tsParticles.load("tsparticles", {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#3b82f6"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.2,
            random: true
          },
          size: {
            value: 4,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#60a5fa",
            opacity: 0.25,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5
              }
            },
            push: {
              particles_nb: 3
            }
          }
        },
        detectRetina: true,
        background: {
          color: "#ebf5ff",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      });

      // Simple card select implementation
      const cardIcons = document.querySelectorAll('.card-icon');
      cardIcons.forEach(icon => {
        icon.addEventListener('click', () => {
          cardIcons.forEach(i => i.classList.remove('active'));
          icon.classList.add('active');
        });
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="tsparticles"></div>

<div className="relative z-10 max-w-xl w-full bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200">

<div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6">
<div className="flex justify-between items-center">
<div>
<span className="px-2 py-1 bg-blue-600/70 rounded-full text-xs text-white mb-2 inline-block">SECURE PAYMENT</span>
<h2 className="text-2xl font-bold text-white">Complete Your Purchase</h2>
</div>
<div className="h-12 w-12 rounded-lg bg-blue-600/30 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>

<div className="mt-5 p-4 bg-white/20 rounded-lg border border-blue-400/30">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-blue-50">Plan</span>
<span className="text-sm font-medium text-white">Premium Subscription</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-blue-50">Billing</span>
<span className="text-sm font-medium text-white">Monthly</span>
</div>
<div className="flex justify-between items-center pt-2 border-t border-blue-400/30">
<span className="text-sm font-medium text-blue-100">Total</span>
<span className="text-lg font-bold text-white">$29.99/mo</span>
</div>
</div>
</div>

<div className="p-6 bg-white">
<form>

<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
<div className="flex space-x-3 mb-4">
<div className="flex items-center card-icon active">
<img alt="Visa" className="h-8 w-10 object-contain" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg"/>
</div>
<div className="flex items-center card-icon">
<img alt="Mastercard" className="h-8 w-10 object-contain" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg"/>
</div>
<div className="flex items-center card-icon">
<img alt="American Express" className="h-8 w-10 object-contain" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/americanexpress.svg"/>
</div>
<div className="flex items-center card-icon">
<img alt="Apple Pay" className="h-8 w-10 object-contain" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/applepay.svg"/>
</div>
<div className="flex items-center card-icon">
<img alt="PayPal" className="h-8 w-10 object-contain" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/paypal.svg"/>
</div>
</div>
</div>

<div className="space-y-4">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="card-number">Card Number</label>
<div className="input-focus relative rounded-lg border border-gray-300 bg-gray-50 focus-within:bg-white">
<input className="w-full px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm" id="card-number" placeholder="1234 5678 9012 3456" type="text"/>
<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
<svg className="h-5 w-5 text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="card-holder">Card Holder</label>
<div className="input-focus rounded-lg border border-gray-300 bg-gray-50 focus-within:bg-white">
<input className="w-full px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm" id="card-holder" placeholder="Full Name on Card" type="text"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expiry">Expiry Date</label>
<div className="input-focus rounded-lg border border-gray-300 bg-gray-50 focus-within:bg-white">
<input className="w-full px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm" id="expiry" placeholder="MM / YY" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cvv">Security Code</label>
<div className="input-focus relative rounded-lg border border-gray-300 bg-gray-50 focus-within:bg-white">
<input className="w-full px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm" id="cvv" placeholder="CVV" type="text"/>
<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
<svg className="h-4 w-4 text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="flex items-center pt-2">
<input className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500" id="save-card" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-600" htmlFor="save-card">
              Save my payment information for future purchases
            </label>
</div>
</div>

<div className="mt-6 text-xs text-gray-500">
          By completing this purchase, you agree to our <a className="text-blue-600 hover:text-blue-700" href="#">Terms of Service</a> and <a className="text-blue-600 hover:text-blue-700" href="#">Privacy Policy</a>.
        </div>

<div className="mt-6 flex items-center justify-between">
<div className="flex items-center text-sm text-gray-600">
<svg className="h-4 w-4 mr-1.5 text-green-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path>
</svg>
            Secured by SSL
          </div>
<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center font-medium shadow-sm" type="submit">
            Pay $29.99
            <svg className="h-4 w-4 ml-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</form>
</div>
</div>


    </>
  );
}
