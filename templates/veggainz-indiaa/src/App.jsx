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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let userData = {
            name: '',
            mobile: ''
        };

        function sendOTP() {
            const name = document.getElementById('fullName').value.document.getElementById('mobileNumber').value.trim();

            if (!name || name.length < 2) {
                alert('Please enter your full name');
                return;
            }

            if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
                alert('Please enter a valid 10-digit mobile number');
                return;
            }

            userData.name = name;
            userData.mobile = mobile;

            // Display masked mobile number
            const maskedMobile = mobile.substring(0, 2) + 'XXXXXX' + mobile.substring(8);
            document.getElementById('displayMobile').textContent = maskedMobile;

            // In production, integrate Firebase Auth here
            // firebase.auth().signInWithPhoneNumber('+91' + mobile, appVerifier)
            
            console.log('Sending OTP to:', mobile);
            document.getElementById('otpModal').classList.remove('hidden');
            
            // Focus first OTP input
            setTimeout(() => {
                document.getElementById('otp1').focus();
            }, 300);
        }

        function moveToNext(current, index) {
            const inputs = document.querySelectorAll('.otp-input');
            
            if (current.value.length === 1 && index < 5) {
                inputs[index + 1].focus();
            }
            
            // Auto-verify when all 6 digits are entered
            const allFilled = Array.from(inputs).every(input => input.value.length === 1);
            if (allFilled) {
                setTimeout(() => verifyOTP(), 300);
            }
        }

        function verifyOTP() {
            const inputs = document.querySelectorAll('.otp-input');
            const otp = Array.from(inputs).map(input => input.value).join('');

            if (otp.length !== 6) {
                alert('Please enter complete OTP');
                return;
            }

            // In production, verify OTP with Firebase
            // confirmationResult.confirm(otp)
            
            console.log('Verifying OTP:', otp);
            console.log('User Data:', userData);
            
            // Simulate successful verification
            setTimeout(() => {
                saveUserData();
                document.getElementById('otpModal').classList.add('hidden');
                document.getElementById('successModal').classList.remove('hidden');
                
                // Clear form
                document.getElementById('fullName').value = '';
                document.getElementById('mobileNumber').value = '';
                inputs.forEach(input => input.value = '');
            }, 500);
        }

        function saveUserData() {
            // In production, save to Firebase Firestore
            // firebase.firestore().collection('leads').add({
            //     name: userData.name,
            //     mobile: userData.mobile,
            //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
            // })
            
            console.log('Saved to database:', userData);
        }

        function closeModal() {
            document.getElementById('otpModal').classList.add('hidden');
            const inputs = document.querySelectorAll('.otp-input');
            inputs.forEach(input => input.value = '');
        }

        function closeSuccessModal() {
            document.getElementById('successModal').classList.add('hidden');
        }

        // Allow only numbers in mobile input
        document.getElementById('mobileNumber').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        // Allow only numbers in OTP inputs
        document.querySelectorAll('.otp-input').forEach(input => {
            input.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && !this.value) {
                    const inputs = document.querySelectorAll('.otp-input');
                    const currentIndex = Array.from(inputs).indexOf(this);
                    if (currentIndex > 0) {
                        inputs[currentIndex - 1].focus();
                    }
                }
            });
            
            // Handle paste event
            input.addEventListener('paste', function(e) {
                e.preventDefault();
                const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').substring(0, 6);
                const inputs = document.querySelectorAll('.otp-input');
                
                pastedData.split('').forEach((char, index) => {
                    if (inputs[index]) {
                        inputs[index].value = char;
                    }
                });
                
                if (pastedData.length === 6) {
                    setTimeout(() => verifyOTP(), 300);
                }
            });
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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="floating-element absolute top-20 left-[10%] opacity-20">
<iconify-icon height="80" icon="lucide:dumbbell" style={{fontSize: '80px', color: '#16a34a'}} width="80"></iconify-icon>
</div>
<div className="floating-element-slow absolute top-40 right-[15%] opacity-10">
<div className="w-32 h-32 rounded-full border-4 border-green-600"></div>
</div>
<div className="floating-element absolute bottom-32 left-[20%] opacity-15">
<div className="w-24 h-24 rounded-2xl bg-green-600 transform rotate-45"></div>
</div>
<div className="floating-element-slow absolute top-60 right-[30%] opacity-20">
<iconify-icon height="60" icon="lucide:dumbbell" style={{fontSize: '60px', color: '#15803d'}} width="60"></iconify-icon>
</div>
<div className="floating-element absolute bottom-20 right-[10%] opacity-10">
<div className="w-40 h-40 rounded-full border-4 border-green-600"></div>
</div>
</div>

<div className="relative z-10">

<div className="pt-8 md:pt-12 text-center">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tighter">
<span className="text-green-600 glow-green font-bold">Veg</span><span className="text-gray-900 font-bold">Gainz</span> <span className="text-green-700/70 font-medium">India</span>
</h1>
</div>

<div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
<div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-gray-900">
                    India's Premium<br/>High-Protein<br/><span className="text-green-600">Vegetarian Meals</span>
</h2>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-normal">
                    Launching soon. Built for people who take fitness seriously.
                </p>

<div className="max-w-md mx-auto mt-8 md:mt-12 space-y-4" id="leadForm">
<input className="input-field w-full px-5 py-4 rounded-xl text-gray-900 placeholder-gray-500 text-base" id="fullName" placeholder="Full Name" type="text"/>
<input className="input-field w-full px-5 py-4 rounded-xl text-gray-900 placeholder-gray-500 text-base" id="mobileNumber" maxlength="10" placeholder="Mobile Number" type="tel"/>
<button className="dumbbell-button w-full py-5 px-8 rounded-xl text-white font-semibold text-base tracking-tight" onclick="sendOTP()">
                        Notify Me
                    </button>
</div>

<div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 md:mt-16">
<div className="trust-badge px-6 py-3 rounded-full flex items-center gap-2">
<iconify-icon height="20" icon="lucide:leaf" style={{color: '#22c55e'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-900">100% Vegetarian</span>
</div>
<div className="trust-badge px-6 py-3 rounded-full flex items-center gap-2">
<iconify-icon height="20" icon="lucide:zap" style={{color: '#22c55e'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-900">High Protein Focus</span>
</div>
<div className="trust-badge px-6 py-3 rounded-full flex items-center gap-2">
<iconify-icon height="20" icon="lucide:dumbbell" style={{color: '#22c55e'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Gym Partnered</span>
</div>
</div>
</div>
</div>

<div className="pb-8 md:pb-12 text-center space-y-4">
<a className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors" href="https://instagram.com/veggainzindia" target="_blank">
<iconify-icon height="24" icon="lucide:instagram" width="24"></iconify-icon>
<span className="text-base font-medium">@veggainzindia</span>
</a>
<p className="text-sm text-gray-500">Launch date will be announced on Instagram.</p>
</div>
</div>

<div className="modal hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="otpModal">
<div className="modal-content rounded-2xl p-8 md:p-10 max-w-md w-full space-y-6 relative">
<div className="text-center space-y-2">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon height="32" icon="lucide:smartphone" style={{color: '#22c55e'}} width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">Verify OTP</h3>
<p className="text-base text-gray-600">Enter the 6-digit code sent to <span className="text-gray-900 font-medium" id="displayMobile"></span></p>
</div>
<div className="flex justify-center gap-2 md:gap-3">
<input className="otp-input rounded-lg" id="otp1" maxlength="1" oninput="moveToNext(this, 0)" type="text"/>
<input className="otp-input rounded-lg" id="otp2" maxlength="1" oninput="moveToNext(this, 1)" type="text"/>
<input className="otp-input rounded-lg" id="otp3" maxlength="1" oninput="moveToNext(this, 2)" type="text"/>
<input className="otp-input rounded-lg" id="otp4" maxlength="1" oninput="moveToNext(this, 3)" type="text"/>
<input className="otp-input rounded-lg" id="otp5" maxlength="1" oninput="moveToNext(this, 4)" type="text"/>
<input className="otp-input rounded-lg" id="otp6" maxlength="1" oninput="moveToNext(this, 5)" type="text"/>
</div>
<button className="dumbbell-button w-full py-4 px-8 rounded-xl text-white font-semibold text-base" onclick="verifyOTP()">
                Verify &amp; Join
            </button>
<div className="text-center space-y-2">
<button className="text-gray-600 hover:text-gray-900 text-sm" onclick="closeModal()">Cancel</button>
</div>
</div>
</div>

<div className="modal hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="successModal">
<div className="modal-content rounded-2xl p-8 md:p-10 max-w-md w-full text-center space-y-6">
<div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
<iconify-icon height="48" icon="lucide:check" style={{color: '#22c55e'}} width="48"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">You're on the priority list!</h3>
<p className="text-base text-gray-600">We'll notify you as soon as we launch. Stay strong!</p>
<button className="dumbbell-button w-full py-4 px-8 rounded-xl text-white font-semibold text-base" onclick="closeSuccessModal()">
                Done
            </button>
</div>
</div>


    </>
  );
}
