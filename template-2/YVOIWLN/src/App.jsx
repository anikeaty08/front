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



    // Splash screen transitions
    let splashImgs = [
      "https://undraw.co/api/illustrations/4d2ee7ec-b62b-4dba-b5b7-5b401efc9c19",
      "https://undraw.co/api/illustrations/bbce9e43-6eeb-4b9e-aab5-6e66fa3a9c0e",
      "https://undraw.co/api/illustrations/5a4e3d8b-3ee8-46c2-8ef4-4f7b3b529d08"
    ];
    let splashIndex = 0;

    function splashCycle() {
      const img = document.getElementById('splashImg');
      img.classList.remove('fade-in');
      setTimeout(() => {
        splashIndex = (splashIndex + 1) % splashImgs.length;
        img.src = splashImgs[splashIndex];
        img.classList.add('fade-in');
      }, 400);
    }

    // General navigation
    function showScreen(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
      document.getElementById(id).classList.remove('hidden');
      window.scrollTo({top:0,behavior:'smooth'});
    }
    // Splash -> Login
    window.onload = () => {
      setTimeout(() => {
        splashCycle();
        setTimeout(() => splashCycle(), 1600);
        setTimeout(() => {
          document.getElementById('splashScreen').classList.add('fade');
          document.getElementById('loginScreen').classList.remove('hidden');
          setTimeout(() => document.getElementById('splashScreen').style.display="none", 700);
        }, 3200);
      }, 900);
    };

    // Age calculation
    function calcAge() {
      const dob = document.getElementById('dob').value;
      if (!dob) return;
      const birth = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
      document.getElementById('age').value = age > 0 ? age : '';
    }
    // OTP
    function validateOTP() {
      const otp = document.getElementById('otp').value;
      if (otp.length === 6 && /^\d+$/.test(otp)) {
        showScreen('onboardScreen');
      } else {
        document.getElementById('otpError').textContent = "Enter valid 6-digit OTP.";
      }
    }
    function sendOTP() {
      const mobile = document.getElementById('mobile').value;
      if (/^\+\d{1,3}\d{7,12}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = "";
        showScreen('otpScreen');
      } else {
        document.getElementById('mobileError').textContent = "Enter valid mobile number.";
      }
    }
    function completeOnboarding() {
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const height = document.getElementById('height').value;
      const weight = document.getElementById('weight').value;
      if (name && dob && age && gender && height && weight) {
        showScreen('homeScreen');
        setTimeout(()=>{
          document.getElementById('chatBody').innerHTML = `<div class="flex items-start mb-2">
        <div class="bg-blue-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%] shadow-md">
          <span>Hello <b>${name}</b>! What symptoms are you experiencing today?</span>
        </div>
      </div>`;
        },300);
      } else {
        document.getElementById('onboardError').textContent = "Please fill all fields.";
      }
    }
    // Chatbot logic
    const symptomQuestions = {
      "Fever": [
        { q: "How high is your temperature?", a: ["Below 100°F", "100-102°F", "Above 102°F"] },
        { q: "Do you have chills?", a: ["Yes", "No"] }
      ],
      "Headache": [
        { q: "Is the pain severe or mild?", a: ["Severe", "Mild"] },
        { q: "Is it on one side or both sides?", a: ["One side", "Both sides"] }
      ],
      "Cough": [
        { q: "Is it dry or productive?", a: ["Dry", "Productive"] },
        { q: "How long have you had it?", a: ["<1 week", "1-2 weeks", ">2 weeks"] }
      ],
      "Sore throat": [
        { q: "Is it painful to swallow?", a: ["Yes", "No"] }
      ],
      "Nausea": [
        { q: "Did you vomit?", a: ["Yes", "No"] }
      ]
    };
    const symptomDiagnosis = {
      "Fever": "You may have a viral infection such as Flu or COVID-19.",
      "Headache": "Possible causes: Migraine, Stress or Dehydration.",
      "Cough": "You may have Common Cold or Bronchitis.",
      "Sore throat": "Could be pharyngitis or a cold.",
      "Nausea": "Possible indigestion or mild infection."
    };
    let chatState = { selectedSymptom: null, questionIdx: 0 };

    function selectSymptom(symptom) {
      chatState.selectedSymptom = symptom;
      chatState.questionIdx = 0;
      addChatBubble('user', symptom);
      askNextQuestion();
    }
    function askNextQuestion() {
      const questions = symptomQuestions[chatState.selectedSymptom];
      if (questions && chatState.questionIdx < questions.length) {
        const qObj = questions[chatState.questionIdx];
        addChatBubble('bot', qObj.q, qObj.a);
      } else {
        addChatBubble('bot', `<b>Possible Condition:</b> ${symptomDiagnosis[chatState.selectedSymptom] || "Further assessment needed."}`);
        chatState.selectedSymptom = null;
        chatState.questionIdx = 0;
      }
    }
    function answerQuestion(answer) {
      addChatBubble('user', answer);
      chatState.questionIdx++;
      setTimeout(askNextQuestion, 600);
    }
    function addChatBubble(sender, text, options) {
      const chat = document.getElementById('chatBody');
      const bubble = document.createElement('div');
      bubble.className = sender === 'bot'
        ? "flex items-start mb-2"
        : "flex items-end justify-end mb-2";
      bubble.innerHTML = `
        <div class="${sender === 'bot' ? "bg-blue-100 text-gray-800" : "bg-green-100 text-gray-800"} px-4 py-2 rounded-2xl max-w-[78vw] shadow-md">
          <span>${text}</span>
          ${options ? `<div class="mt-2 flex flex-wrap gap-2">${options.map(opt => `<button onclick="answerQuestion('${opt}')" class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs active:scale-95 transition">${opt}</button>`).join('')}</div>` : ""}
        </div>
      `;
      chat.appendChild(bubble);
      chat.scrollTop = chat.scrollHeight;
    }
    function searchSymptoms() {
      const val = document.getElementById('symptomSearch').value.toLowerCase();
      document.querySelectorAll('.symptom-btn').forEach(btn => {
        btn.style.display = btn.textContent.toLowerCase().includes(val) ? '' : 'none';
      });
    }

    // Bottom navigation
    function navTo(tab) {
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('text-blue-600','font-bold'));
      document.getElementById('nav-'+tab).classList.add('text-blue-600','font-bold');
      if(tab==='home') {
        showScreen('homeScreen');
      } else if(tab==='profile') {
        showScreen('profileScreen');
      } else if(tab==='integrations') {
        showScreen('integrationScreen');
      }
    }

    // Share/export (dummy)
    function exportWhatsapp() {
      alert("Your symptom summary will be exported to WhatsApp (mockup).");
    }
    function connectAppleHealth() {
      alert("Connecting to Apple Health (mockup).");
    }
    function connectGoogleFit() {
      alert("Connecting to Google Fit (mockup).");
    }
  
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
      

<div className="fixed inset-0 bg-blue-700 z-50 flex flex-col justify-center items-center transition-opacity fade-in" id="splashScreen">
<div className="flex flex-col items-center">
<img alt="Splash Illustration" className="w-[140px] h-[140px] rounded-2xl shadow-xl mb-5 fade-in transition-opacity duration-700" id="splashImg" src="https://undraw.co/api/illustrations/4d2ee7ec-b62b-4dba-b5b7-5b401efc9c19" style={{background: `#fff`, objectFit: `cover`}} />
<h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow mb-1" style={{fontFamily: `inherit`}}>Arie AI</h1>
<div className="flex items-center gap-2">
<svg fill="none" height="28" width="28"><rect fill="#38bdf8" height="28" rx="8" width="28"></rect><path d="M9 15c0-1.657 1.343-3 3-3h0c1.657 0 3 1.343 3 3" stroke="#fff" strokeLinecap="round" strokeWidth="2"></path></svg>
<p className="text-lg font-medium text-white/90 tracking-wide">Your Mobile Symptom Assistant</p>
</div>
</div>
<div className="absolute bottom-8 left-0 w-full flex justify-center">
<div className="flex gap-1">
<span className="h-2 w-2 bg-white/70 rounded-full inline-block"></span>
<span className="h-2 w-2 bg-white/30 rounded-full inline-block"></span>
<span className="h-2 w-2 bg-white/30 rounded-full inline-block"></span>
</div>
</div>
</div>

<div className="screen min-h-screen flex flex-col items-center justify-center px-4 py-8 hidden" id="loginScreen">
<div className="w-full max-w-xs mx-auto bg-white/90 rounded-3xl shadow-xl p-6 slide-up slide-in">
<div className="flex justify-center mb-3">
<img alt="Login Illustration" className="w-20 h-20 rounded-xl shadow" src="https://undraw.co/api/illustrations/5a4e3d8b-3ee8-46c2-8ef4-4f7b3b529d08" />
</div>
<h2 className="text-xl font-bold mb-2 text-blue-700">Sign In</h2>
<label className="block text-sm font-medium mb-1" htmlFor="mobile">Mobile Number</label>
<input className="w-full border rounded px-3 py-2 mb-2 focus:ring focus:ring-blue-100 bg-blue-50" id="mobile" placeholder="+1XXXXXXXXXX" type="text" />
<div className="text-red-500 text-xs mb-2" id="mobileError"></div>
<button className="w-full bg-blue-600 text-white rounded-xl py-2 font-semibold mt-2 shadow active:scale-95 transition" onClick={(e) => { sendOTP() }}>Send OTP</button>
</div>
</div>

<div className="screen min-h-screen flex flex-col items-center justify-center px-4 py-8 hidden" id="otpScreen">
<div className="w-full max-w-xs mx-auto bg-white/90 rounded-3xl shadow-xl p-6 slide-up slide-in">
<div className="flex justify-center mb-3">
<img alt="OTP Illustration" className="w-20 h-20 rounded-xl shadow" src="https://undraw.co/api/illustrations/bbce9e43-6eeb-4b9e-aab5-6e66fa3a9c0e" />
</div>
<h2 className="text-xl font-bold mb-2 text-blue-700">OTP Verification</h2>
<p className="text-gray-500 mb-2 text-sm">Enter the 6-digit OTP sent to your number.</p>
<input className="w-full border rounded px-3 py-2 mb-2 bg-blue-50 focus:ring focus:ring-blue-100" id="otp" maxlength="6" type="text" />
<div className="text-red-500 text-xs mb-2" id="otpError"></div>
<button className="w-full bg-blue-600 text-white rounded-xl py-2 font-semibold shadow active:scale-95 transition" onClick={(e) => { validateOTP() }}>Verify & Continue</button>
<button className="mt-2 text-xs text-blue-500 underline" onClick={(e) => { showScreen('loginScreen') }}>Edit Mobile Number</button>
</div>
</div>

<div className="screen min-h-screen flex flex-col items-center justify-center px-4 py-8 hidden" id="onboardScreen">
<div className="w-full max-w-sm mx-auto bg-white/95 rounded-3xl shadow-xl p-6 slide-up slide-in">
<div className="flex justify-center mb-3">
<img alt="Profile Illustration" className="w-20 h-20 rounded-xl shadow" src="https://undraw.co/api/illustrations/4d2ee7ec-b62b-4dba-b5b7-5b401efc9c19" />
</div>
<h2 className="text-xl font-bold mb-4 text-blue-700">About You</h2>
<div className="mb-2">
<label className="block text-sm mb-1">Name</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50" id="name" type="text" />
</div>
<div className="mb-2 flex gap-2">
<div className="w-1/2">
<label className="block text-sm mb-1">Date of Birth</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50" id="dob" onChange={(e) => { calcAge() }} type="date" />
</div>
<div className="w-1/2">
<label className="block text-sm mb-1">Age</label>
<input className="w-full border rounded-xl px-3 py-2 bg-gray-100" id="age" readOnly type="number" />
</div>
</div>
<div className="mb-2">
<label className="block text-sm mb-1">Gender</label>
<select className="w-full border rounded-xl px-3 py-2 bg-blue-50" id="gender">
<option value="">Select Gender</option>
<option>Female</option>
<option>Male</option>
<option>Other</option>
</select>
</div>
<div className="mb-2 flex gap-2">
<div className="w-1/2">
<label className="block text-sm mb-1">Height (cm)</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50" id="height" type="number" />
</div>
<div className="w-1/2">
<label className="block text-sm mb-1">Weight (kg)</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50" id="weight" type="number" />
</div>
</div>
<div className="text-red-500 text-xs mb-2" id="onboardError"></div>
<button className="w-full bg-blue-600 text-white rounded-xl py-2 mt-2 font-semibold shadow active:scale-95 transition" onClick={(e) => { completeOnboarding() }}>Continue</button>
</div>
</div>

<div className="screen flex flex-col h-screen app-bg pb-24" id="homeScreen">

<div className="flex items-center gap-2 bg-blue-700 p-4 rounded-b-2xl shadow text-white">
<img alt="Arie AI" className="w-10 h-10 rounded-full" src="https://i.imgur.com/A6X1XlR.png" />
<span className="font-bold text-lg tracking-tight">Arie AI</span>
<span className="ml-2 text-xs bg-white/30 rounded px-2 py-1 font-semibold">Symptom Tracker</span>
</div>

<div className="flex-1 overflow-y-auto px-3 pt-2 pb-24" id="chatBody">
<div className="flex items-start mb-2">
<div className="bg-blue-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%] shadow-md">
<span>Hello! What symptoms are you experiencing today?</span>
</div>
</div>
</div>

<div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-[98vw] max-w-md bg-white/95 rounded-3xl px-4 py-3 mx-auto shadow-lg border app-bg">
<input className="w-full border rounded-xl px-3 py-2 mb-2 focus:ring focus:ring-blue-100 bg-blue-50" id="symptomSearch" onInput={(e) => { searchSymptoms() }} placeholder="Search symptoms..." type="text" />
<div className="flex flex-wrap gap-2 mb-2">
<button className="symptom-btn bg-blue-500 text-white px-3 py-1 rounded-full text-xs active:scale-95 transition" onClick={(e) => { selectSymptom('Fever') }}>Fever</button>
<button className="symptom-btn bg-blue-500 text-white px-3 py-1 rounded-full text-xs active:scale-95 transition" onClick={(e) => { selectSymptom('Headache') }}>Headache</button>
<button className="symptom-btn bg-blue-500 text-white px-3 py-1 rounded-full text-xs active:scale-95 transition" onClick={(e) => { selectSymptom('Cough') }}>Cough</button>
<button className="symptom-btn bg-blue-500 text-white px-3 py-1 rounded-full text-xs active:scale-95 transition" onClick={(e) => { selectSymptom('Sore throat') }}>Sore throat</button>
<button className="symptom-btn bg-blue-500 text-white px-3 py-1 rounded-full text-xs active:scale-95 transition" onClick={(e) => { selectSymptom('Nausea') }}>Nausea</button>
</div>
<small className="text-gray-500">Tap a symptom or search and select.</small>
</div>

<button className="fixed bottom-32 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg shadow-green-200 transition active:scale-90 z-40" onClick={(e) => { exportWhatsapp() }} title="Export to WhatsApp">
<svg className="w-6 h-6 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.72 11.06c-1.23-2.46-4.26-4.12-7.34-2.95C7.06 8.71 6.26 9.97 6.07 11.3c-.41 2.88 2.23 6.22 7.19 6.22 1.9 0 4.13-.48 4.09-2.1-.01-.59-.47-1.14-1.23-1.36-1.27-.36-2.33-.28-3.19-.17-.73.09-1.15-.7-.77-1.24.43-.6 1.29-1.5 2.87-1.59.89-.06 2.47.09 2.49-1.33.01-.74-.6-1.16-1.04-1.44z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="screen min-h-screen flex flex-col items-center pt-8 px-4 pb-28 hidden" id="profileScreen">
<div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 mt-2">
<div className="flex flex-col items-center mb-4">
<img alt="Profile" className="w-20 h-20 rounded-full shadow" src="https://undraw.co/api/illustrations/4d2ee7ec-b62b-4dba-b5b7-5b401efc9c19" />
<h2 className="text-xl font-bold mt-2 text-blue-800">Your Profile</h2>
<p className="text-gray-400 text-sm">Manage your info</p>
</div>
<div className="mb-2">
<label className="block text-xs text-gray-500 mb-1">Name</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50 font-semibold text-blue-800" id="profileName" type="text" value="Arie User" />
</div>
<div className="mb-2 flex gap-2">
<div className="w-1/2">
<label className="block text-xs text-gray-500 mb-1">Age</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50 text-blue-800" id="profileAge" type="number" value="28" />
</div>
<div className="w-1/2">
<label className="block text-xs text-gray-500 mb-1">Gender</label>
<select className="w-full border rounded-xl px-3 py-2 bg-blue-50 text-blue-800" id="profileGender"><option>Female</option><option>Male</option><option>Other</option></select>
</div>
</div>
<div className="mb-2 flex gap-2">
<div className="w-1/2">
<label className="block text-xs text-gray-500 mb-1">Height (cm)</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50 text-blue-800" id="profileHeight" type="number" value="165" />
</div>
<div className="w-1/2">
<label className="block text-xs text-gray-500 mb-1">Weight (kg)</label>
<input className="w-full border rounded-xl px-3 py-2 bg-blue-50 text-blue-800" id="profileWeight" type="number" value="62" />
</div>
</div>
<button className="w-full bg-blue-600 text-white rounded-xl py-2 font-semibold mt-4 shadow active:scale-95 transition">Save</button>
</div>
</div>

<div className="screen min-h-screen flex flex-col items-center pt-8 px-4 pb-28 hidden" id="integrationScreen">
<div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 mt-2">
<div className="flex flex-col items-center mb-4">
<img alt="Integrations" className="w-20 h-20 rounded-2xl shadow" src="https://undraw.co/api/illustrations/bbce9e43-6eeb-4b9e-aab5-6e66fa3a9c0e" />
<h2 className="text-xl font-bold mt-2 text-blue-800">Integrations</h2>
<p className="text-gray-400 text-sm">Connect health data</p>
</div>
<div className="flex flex-col gap-4">
<button className="flex items-center gap-3 border rounded-xl p-3 shadow active:scale-95 transition bg-blue-50 hover:bg-blue-100" onClick={(e) => { connectAppleHealth() }}>
<img alt="Apple Health" className="w-7 h-7" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Apple_Health_logo.png" />
<span className="font-semibold text-blue-700">Apple Health</span>
</button>
<button className="flex items-center gap-3 border rounded-xl p-3 shadow active:scale-95 transition bg-blue-50 hover:bg-blue-100" onClick={(e) => { connectGoogleFit() }}>
<img alt="Google Fit" className="w-7 h-7" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Fit_icon.svg" />
<span className="font-semibold text-blue-700">Google Fit</span>
</button>
<button className="flex items-center gap-3 border rounded-xl p-3 shadow active:scale-95 transition bg-green-50 hover:bg-green-100" onClick={(e) => { exportWhatsapp() }}>
<svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.72 11.06c-1.23-2.46-4.26-4.12-7.34-2.95C7.06 8.71 6.26 9.97 6.07 11.3c-.41 2.88 2.23 6.22 7.19 6.22 1.9 0 4.13-.48 4.09-2.1-.01-.59-.47-1.14-1.23-1.36-1.27-.36-2.33-.28-3.19-.17-.73.09-1.15-.7-.77-1.24.43-.6 1.29-1.5 2.87-1.59.89-.06 2.47.09 2.49-1.33.01-.74-.6-1.16-1.04-1.44z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="font-semibold text-green-700">Export to WhatsApp</span>
</button>
</div>
<p className="text-xs text-gray-400 mt-5 text-center">More integrations coming soon.</p>
</div>
</div>

<nav className="fixed bottom-0 left-0 w-full z-50 max-w-md mx-auto right-0 app-bg border-t shadow-lg rounded-t-2xl flex justify-between px-6 py-2">
<button className="nav-btn flex flex-col items-center text-blue-600 font-bold" id="nav-home" onClick={(e) => { navTo('home') }}>
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12l8-8 8 8M4 12v8a2 2 0 002 2h3m10-10v8a2 2 0 01-2 2h-3m-6 0h6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs">Home</span>
</button>
<button className="nav-btn flex flex-col items-center text-gray-400" id="nav-profile" onClick={(e) => { navTo('profile') }}>
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21a7.5 7.5 0 0113 0" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs">Profile</span>
</button>
<button className="nav-btn flex flex-col items-center text-gray-400" id="nav-integrations" onClick={(e) => { navTo('integrations') }}>
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13V6a2 2 0 00-2-2H8a2 2 0 00-2 2v7m14 0v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" strokeLinecap="round" strokeLinejoin="round"></path><rect height="6" rx="1" width="8" x="8" y="10"></rect></svg>
<span className="text-xs">Integrations</span>
</button>
</nav>

    </>
  );
}
