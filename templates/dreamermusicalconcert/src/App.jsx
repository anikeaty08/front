import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('copy-button').addEventListener('click', function() {
            const accountNumber = document.getElementById('account-number-display').innerText.trim();

            const copyTextToClipboard = (text) => {
                try {
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);

                    const messageElement = document.getElementById('copy-message');
                    messageElement.classList.remove('opacity-0');
                    messageElement.classList.add('opacity-100');
                    messageElement.innerText = 'Account Number Copied!';

                    setTimeout(() => {
                        messageElement.classList.remove('opacity-100');
                        messageElement.classList.add('opacity-0');
                    }, 2000);

                } catch (err) {
                    const messageElement = document.getElementById('copy-message');
                    messageElement.innerText = 'Failed to copy. Please manually select: ' + text;
                    messageElement.classList.remove('opacity-0');
                    messageElement.classList.add('opacity-100');
                    messageElement.classList.remove('text-green-400');
                    messageElement.classList.add('text-red-400');
                }
            };

            copyTextToClipboard(accountNumber);
        });

        window.onload = function() {
             console.log("Remember to replace all placeholder text in brackets [] with your friend's actual show and bank details!");
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f8bfb75-c7d9-4361-a366-93581ff4728d_3840w.jpg?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="sm:p-10 text-white bg-gray-900 w-full max-w-4xl rounded-xl mt-8 mb-8 pt-6 pr-6 pb-6 pl-6">

<header className="text-center mb-10">
<h1 className="bg-clip-text sm:text-6xl text-4xl font-bold text-transparent tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 mb-2">Big Diamond 
Dreamer Musical Concert!</h1>
<p className="text-xl text-gray-400">
                Secure your ticket for the ultimate experience!
            </p>
<div className="mt-4">
<a className="inline-block hover:bg-pink-700 transition duration-300 transform hover:scale-105 text-xl font-semibold bg-pink-600 rounded-full pt-3 pr-8 pb-3 pl-8" href="#transfer-guide">Buy Your Tickets Now</a>
</div>
</header>

<section className="mb-10 text-center">
</section>

<section className="mb-10 p-6 bg-purple-900 bg-opacity-30 rounded-lg card">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-purple-300 border-b border-purple-500 pb-2">Ticket Information</h2>
<div className="flex flex-col sm:flex-row justify-between items-center text-center">
<div className="p-3">
<p className="text-base text-gray-400">Regular Ticket Price</p>
<p className="text-3xl font-semibold text-green-400" id="ticket-price">₦2,000</p>
</div>
<div className="p-3">
<p className="text-base text-gray-400">Date &amp; Time</p>
<p className="text-2xl font-semibold text-white">Sat, Dec 13, 2025  (6PM Prompt)</p>
</div>
<div className="p-3">
<p className="text-base text-gray-400">Location</p>
<p className="text-2xl font-semibold text-white">Habby Forex Sports Complex, off Pako B/stop, Yaba</p>
</div>
</div>
<div className="mt-6 text-center text-gray-300">
<p className="text-xl font-semibold text-amber-500 scale-105">VIP Ticket: ₦15,000 (Comes with Black T-Shirt)</p>
</div>
</section>

<section className="mb-10" id="transfer-guide">
<h2 className="text-3xl font-semibold text-purple-400 tracking-tight mb-6">1. Make Your Payment</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 bg-gray-800 rounded-lg card">
<p className="text-base font-medium text-gray-400">Bank Name</p>
<p className="text-2xl font-semibold text-white mb-4" id="bank-name">[OPay]</p>
<p className="text-base font-medium text-gray-400">Account Name</p>
<p className="text-xl font-semibold text-purple-300 mb-4" id="account-name">[Samuel Oshionebo]</p>
<p className="text-base font-medium text-gray-400">Account Number</p>
<div className="flex items-center space-x-3">
<p className="text-3xl text-yellow-300 tracking-widest font-mono" id="account-number-display">[9034398416]</p>
<button className="flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-lg transition duration-150" id="copy-button" title="Click to copy account number">
<svg className="h-5 w-5 mr-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
<path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3h-2a3 3 0 01-3-3z"></path>
</svg>
                            Copy
                        </button>
</div>
<p className="mt-2 text-sm text-green-400 opacity-0 transition duration-300" id="copy-message">Copied!</p>
</div>
<div className="p-6 bg-gray-800 rounded-lg card">
<h3 className="text-2xl font-semibold tracking-tight text-purple-300 mb-3">Important Transfer Steps</h3>
<ul className="space-y-3 text-lg text-gray-300">
<li className="flex items-start">
<span className="text-pink-600 mr-2 font-semibold text-lg">1.</span>
<p className="">Transfer the <span className="font-semibold">exact ticket price</span> (₦2,000 for Regular, or ₦15,000 for VIP) to the account above.</p>
</li>
<li className="flex items-start">
<span className="text-pink-600 mr-2 font-semibold text-lg">2.</span>
<p className="">In the transfer narration/memo, use your <span className="font-semibold">Full Name</span> and the word <span className="font-semibold">TICKET</span> (e.g., <span className="italic">Samuel TICKET</span>). This is critical for verification!</p>
</li>
<li className="flex items-start">
<span className="text-pink-600 mr-2 font-semibold text-lg">3.</span>
<p className="">After transferring, take a <span className="font-semibold">screenshot or photo</span> of the successful payment receipt.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="card bg-gray-800 rounded-lg pt-6 pr-6 pb-6 pl-6">
<h2 className="text-3xl font-semibold text-purple-400 tracking-tight mb-4">2. Confirm Your Purchase</h2>
<p className="text-xl text-gray-300 mb-4">
                Your ticket will be issued immediately upon verification of payment.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
<div className="flex items-center flex-shrink-0">
<svg className="h-8 w-8 text-green-400 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zm4.356 5.756a1 1 0 10-1.412-1.416l-.002.002.002-.002.002-.002zm-8.712 0l-.002.002a1 1 0 001.412 1.416l.002-.002zm5.712-4.756a1 1 0 10-2 0h2zm-5 7a1 1 0 000 2h10a1 1 0 100-2H5z" fill-rule="evenodd"></path>
<path className="" clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8 7a1 1 0 100-2h.01a1 1 0 100 2H10zm3.356-4.756l-5-5a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414-1.414z" fill-rule="evenodd"></path>
</svg>
<p className="text-2xl font-semibold text-white">Send Proof of Payment via WhatsApp:</p>
</div>
<a className="flex items-center hover:bg-green-600 transition duration-300 transform hover:scale-105 text-xl font-bold text-gray-900 font-poppins text-center bg-green-500 rounded-full pt-3 pr-6 pb-3 pl-6" href="https://wa.me/+2349034398416" target="_blank">Contact/Chat </a>
</div>
<p className="mt-4 text-base text-gray-500">
                Ticket delivery is typically within 15 minutes of payment confirmation.
            </p>
</section>

<footer className="text-base text-gray-500 text-center border-gray-700 border-t mt-10 pt-6">© 2025 Big Diamond Dreamer. All Rights Reserved. For inquiries: [ossyoshioramhe@gmail.com]</footer>
</div>


    </>
  );
}
