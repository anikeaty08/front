import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize lucide icons with 1.5 stroke
      function initIcons() {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      }
      document.addEventListener('DOMContentLoaded', () => {
        initIcons();

        const tabLogin = document.getElementById('tabLogin');
        const tabRegister = document.getElementById('tabRegister');
        const panelLogin = document.getElementById('panelLogin');
        const panelRegister = document.getElementById('panelRegister');
        const toRegisterFromLogin = document.getElementById('toRegisterFromLogin');
        const toLoginFromRegister = document.getElementById('toLoginFromRegister');

        function showPanel(panel) {
          const isLogin = panel === 'login';
          panelLogin.classList.toggle('hidden', !isLogin);
          panelRegister.classList.toggle('hidden', isLogin);
          tabLogin.dataset.active = isLogin;
          tabRegister.dataset.active = !isLogin;
          initIcons();
        }

        tabLogin.addEventListener('click', () => showPanel('login'));
        tabRegister.addEventListener('click', () => showPanel('register'));
        toRegisterFromLogin.addEventListener('click', () => {
          showPanel('register');
          // focus email
          setTimeout(() => document.getElementById('regEmail')?.focus(), 50);
        });
        toLoginFromRegister.addEventListener('click', () => {
          showPanel('login');
          setTimeout(() => document.getElementById('loginId')?.focus(), 50);
        });

        // Login interactions
        const loginPassword = document.getElementById('loginPassword');
        const loginPasswordHelp = document.getElementById('loginPasswordHelp');
        const toggleLoginPassword = document.getElementById('toggleLoginPassword');
        const loginBtn = document.getElementById('loginBtn');

        toggleLoginPassword.addEventListener('click', () => {
          const isPwd = loginPassword.type === 'password';
          loginPassword.type = isPwd ? 'text' : 'password';
          toggleLoginPassword.innerHTML = isPwd
            ? '<i data-lucide="eye-off" class="h-5 w-5"></i>'
            : '<i data-lucide="eye" class="h-5 w-5"></i>';
          initIcons();
        });

        function validateLogin() {
          const idVal = document.getElementById('loginId').value.trim();
          const passVal = loginPassword.value;
          const passOk = passVal.length >= 8;
          loginPasswordHelp.classList.toggle('hidden', passOk || passVal.length === 0 ? true : false);
          loginBtn.disabled = !(idVal && passOk);
        }
        document.getElementById('loginId').addEventListener('input', validateLogin);
        loginPassword.addEventListener('input', validateLogin);
        validateLogin();

        // Register steps
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        const prog1 = document.getElementById('prog1');
        const progText = document.getElementById('progText');
        const sendOtpBtn = document.getElementById('sendOtpBtn');
        const verifyOtpBtn = document.getElementById('verifyOtpBtn');
        const resendOtp = document.getElementById('resendOtp');
        const otpInputs = () => Array.from(document.querySelectorAll('#step2 .otp-input'));
        const otpError = document.getElementById('otpError');

        let resendTimer = null;
        let remaining = 30;

        function setStep(n) {
          step1.classList.toggle('hidden', n !== 1);
          step2.classList.toggle('hidden', n !== 2);
          step3.classList.toggle('hidden', n !== 3);
          if (n === 1) {
            prog1.style.width = '33%';
            prog1.className = 'h-full w-1/3 rounded-full bg-teal-600 transition-all';
            progText.textContent = 'Step 1 of 3';
          }
          if (n === 2) {
            prog1.style.width = '66%';
            prog1.className = 'h-full w-2/3 rounded-full bg-teal-600 transition-all';
            progText.textContent = 'Step 2 of 3';
            // focus first OTP
            setTimeout(() => otpInputs()[0]?.focus(), 50);
          }
          if (n === 3) {
            prog1.style.width = '100%';
            prog1.className = 'h-full w-full rounded-full bg-teal-600 transition-all';
            progText.textContent = 'Step 3 of 3';
            setTimeout(() => document.getElementById('regPassword')?.focus(), 50);
          }
        }

        function startResendCountdown() {
          remaining = 30;
          resendOtp.disabled = true;
          resendOtp.textContent = `Resend in ${remaining}s`;
          clearInterval(resendTimer);
          resendTimer = setInterval(() => {
            remaining -= 1;
            if (remaining <= 0) {
              clearInterval(resendTimer);
              resendOtp.disabled = false;
              resendOtp.textContent = 'Resend OTP';
              return;
            }
            resendOtp.textContent = `Resend in ${remaining}s`;
          }, 1000);
        }

        sendOtpBtn.addEventListener('click', () => {
          const email = document.getElementById('regEmail').value.trim();
          if (!email) {
            document.getElementById('regEmail').focus();
            return;
          }
          setStep(2);
          startResendCountdown();
        });

        resendOtp.addEventListener('click', () => {
          startResendCountdown();
          otpInputs().forEach(i => i.value = '');
          otpInputs()[0]?.focus();
          otpError.classList.add('hidden');
        });

        // OTP auto-advance and backspace
        function bindOtpInputs() {
          otpInputs().forEach((input, idx, all) => {
            input.addEventListener('input', () => {
              input.value = input.value.replace(/\D/g, '').slice(0, 1);
              if (input.value && idx < all.length - 1) {
                all[idx + 1].focus();
              }
              otpError.classList.add('hidden');
            });
            input.addEventListener('keydown', (e) => {
              if (e.key === 'Backspace' && !input.value && idx > 0) {
                all[idx - 1].focus();
              }
            });
            input.addEventListener('paste', (e) => {
              e.preventDefault();
              const data = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
              if (!data) return;
              all.forEach((i, j) => i.value = data[j] || '');
              const next = data.length >= 6 ? all[all.length - 1] : all[data.length] || all[all.length - 1];
              next.focus();
            });
          });
        }
        bindOtpInputs();

        verifyOtpBtn.addEventListener('click', () => {
          const code = otpInputs().map(i => i.value).join('');
          if (code.length !== 6) {
            otpError.classList.remove('hidden');
            return;
          }
          otpError.classList.add('hidden');
          setStep(3);
        });

        // Strength meter
        const regPassword = document.getElementById('regPassword');
        const regConfirm = document.getElementById('regConfirm');
        const strengthBar = document.getElementById('strengthBar');
        const strengthLabel = document.getElementById('strengthLabel');
        const toggleRegPassword = document.getElementById('toggleRegPassword');
        const confirmError = document.getElementById('confirmError');
        const registerBtn = document.getElementById('registerBtn');

        toggleRegPassword.addEventListener('click', () => {
          const isPwd = regPassword.type === 'password';
          regPassword.type = isPwd ? 'text' : 'password';
          toggleRegPassword.innerHTML = isPwd
            ? '<i data-lucide="eye-off" class="h-5 w-5"></i>'
            : '<i data-lucide="eye" class="h-5 w-5"></i>';
          initIcons();
        });

        function scorePassword(pw) {
          let score = 0;
          if (pw.length >= 8) score++;
          if (/[A-Z]/.test(pw)) score++;
          if (/[a-z]/.test(pw)) score++;
          if (/\d/.test(pw)) score++;
          if (/[^A-Za-z0-9]/.test(pw)) score++;
          return Math.min(score, 4); // 0-4
        }

        function updateStrength() {
          const pw = regPassword.value;
          const s = scorePassword(pw);
          let w = '0%';
          let color = 'bg-rose-600';
          let label = 'Weak';
          if (s === 0) {
            w = '0%'; label = '-'; color = 'bg-rose-600';
          } else if (s === 1) {
            w = '25%'; label = 'Weak'; color = 'bg-rose-600';
          } else if (s === 2) {
            w = '50%'; label = 'Fair'; color = 'bg-amber-500';
          } else if (s === 3) {
            w = '75%'; label = 'Good'; color = 'bg-teal-500';
          } else if (s >= 4) {
            w = '100%'; label = 'Strong'; color = 'bg-teal-600';
          }
          strengthBar.style.width = w;
          strengthBar.className = `h-full rounded-full transition-all ${color}`;
          strengthLabel.textContent = `Strength: ${label}`;
        }

        function validateRegister() {
          const pw = regPassword.value;
          const cf = regConfirm.value;
          const ok = pw.length >= 8 && cf.length > 0 && pw === cf;
          confirmError.classList.toggle('hidden', pw === cf || cf.length === 0);
          registerBtn.disabled = !ok;
        }

        regPassword.addEventListener('input', () => {
          updateStrength();
          validateRegister();
        });
        regConfirm.addEventListener('input', validateRegister);

        // Default states
        registerBtn.disabled = true;

        // Optional demo submit handlers
        document.getElementById('loginForm').addEventListener('submit', () => {
          // Demo: show simple feedback
          const btn = loginBtn;
          const prev = btn.textContent;
          btn.textContent = 'Logging in...';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = prev;
            btn.disabled = false;
            alert('Logged in (demo)');
          }, 900);
        });

        document.getElementById('registerForm').addEventListener('submit', () => {
          const btn = registerBtn;
          const prev = btn.textContent;
          btn.textContent = 'Creating account...';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = prev;
            btn.disabled = false;
            alert('Account created (demo)');
          }, 1100);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex">

<aside className="hidden lg:flex relative w-[40%] min-h-full items-center justify-center bg-neutral-900 overflow-hidden">
<img alt="Healthcare abstract" className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="relative z-10 p-10">
<div className="flex items-center gap-2 text-white/90 mb-6">
<div className="h-9 w-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
<span className="text-white tracking-tight text-sm font-medium">HC</span>
</div>
<span className="text-white/90 text-sm">HealthCore</span>
</div>
<h2 className="text-white text-3xl xl:text-4xl tracking-tight font-semibold">Care that meets you where you are</h2>
<p className="text-white/70 mt-3 text-sm leading-relaxed max-w-md">
            Seamless access to your records, appointments, and care team—secured with industry-leading protection.
          </p>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(45,212,191,0.25),transparent)]"></div>
</aside>

<main className="flex-1 flex items-center justify-center p-4">
<div className="w-full max-w-md">

<div className="mb-4 flex items-center justify-center">
<div className="inline-flex items-center rounded-full bg-white border border-neutral-200 p-1 shadow-sm">
<button className="px-4 py-2 text-sm rounded-full transition-colors data-[active=true]:bg-neutral-900 data-[active=true]:text-white text-neutral-700 hover:text-neutral-900" data-active="true" id="tabLogin">Login</button>
<button className="px-4 py-2 text-sm rounded-full transition-colors data-[active=true]:bg-neutral-900 data-[active=true]:text-white text-neutral-700 hover:text-neutral-900" data-active="false" id="tabRegister">Register</button>
</div>
</div>

<section className="w-full rounded-2xl bg-white border border-neutral-200 shadow-sm p-6 sm:p-8">

<div className="space-y-6" id="panelLogin">

<div className="flex flex-col items-center text-center">
<div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-3 shadow-sm">
<span className="text-xs tracking-tight font-medium">HC</span>
</div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Welcome Back</h1>
<p className="text-sm text-neutral-600 mt-1">Login to continue your healthcare journey.</p>
</div>

<form className="space-y-5" id="loginForm" onsubmit="event.preventDefault()">

<div>
<label className="block text-[13px] text-neutral-700 mb-1.5" htmlFor="loginId">Please enter your email / phone</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<i className="h-5 w-5" data-lucide="mail"></i>
</div>
<input autocomplete="username" className="w-full pl-10 pr-3 h-11 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition" id="loginId" inputmode="email" placeholder="Email / Phone" type="text"/>
</div>
</div>

<div>
<div className="flex items-center justify-between">
<label className="block text-[13px] text-neutral-700 mb-1.5" htmlFor="loginPassword">Please enter your password</label>
<a className="text-[12px] text-neutral-500 hover:text-neutral-800 underline underline-offset-4" href="#">Forgot your password?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<input autocomplete="current-password" className="w-full pl-10 pr-10 h-11 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition" id="loginPassword" placeholder="Password" type="password"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-700" id="toggleLoginPassword" type="button">
<i className="h-5 w-5" data-lucide="eye"></i>
</button>
</div>
<p className="mt-1.5 text-[12px] text-rose-600 hidden" id="loginPasswordHelp">Password must be at least 8 characters</p>
</div>

<button className="w-full h-11 rounded-full bg-teal-600 text-white text-[15px] font-medium tracking-tight hover:bg-teal-500 active:bg-teal-700 transition focus:outline-none focus:ring-4 focus:ring-teal-500/25 disabled:opacity-60 disabled:cursor-not-allowed" id="loginBtn" type="submit">
                  Login
                </button>

<div className="relative my-1">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-neutral-200"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-3 text-[12px] text-neutral-500">OR</span>
</div>
</div>

<button className="w-full h-11 rounded-xl border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 transition flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-neutral-200" type="button">
<svg aria-hidden="true" className="h-5 w-5" viewbox="0 0 48 48">
<path d="M43.611 20.083H42V20H24v8h11.303C33.607 31.659 29.222 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.053 29.7 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z" fill="#FFC107"></path>
<path d="M6.306 14.691l6.571 4.815C14.297 16.107 18.797 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.053 29.7 3 24 3 16.318 3 9.656 7.337 6.306 14.691z" fill="#FF3D00"></path>
<path d="M24 43c5.147 0 9.773-1.976 13.283-5.197l-6.137-5.197C29.112 34.744 26.677 36 24 36c-5.194 0-9.592-3.322-11.297-7.946l-6.56 5.053C9.458 38.727 16.227 43 24 43z" fill="#4CAF50"></path>
<path d="M43.611 20.083H42V20H24v8h11.303c-1.032 2.981-3.319 5.363-6.12 6.606l.001-.001 6.137 5.197C34.965 40.28 44 34 44 23c0-1.341-.138-2.651-.389-3.917z" fill="#1976D2"></path>
</svg>
<span className="text-[14px] font-medium">Continue with Google</span>
</button>
</form>

<div className="text-center text-sm text-neutral-600">
                Don’t have an account?
                <button className="text-neutral-900 font-medium underline underline-offset-4 hover:text-neutral-700" id="toRegisterFromLogin">Register Now</button>
</div>
</div>

<div className="space-y-6 hidden" id="panelRegister">

<div className="flex flex-col items-center text-center">
<div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-3 shadow-sm">
<span className="text-xs tracking-tight font-medium">HC</span>
</div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Create Account</h1>
<p className="text-sm text-neutral-600 mt-1">Join us to manage your health effortlessly.</p>
</div>

<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 rounded-full bg-neutral-200">
<div className="h-full w-1/3 rounded-full bg-teal-600 transition-all" id="prog1"></div>
</div>
<span className="text-[12px] text-neutral-500" id="progText">Step 1 of 3</span>
</div>

<form className="space-y-5" id="registerForm" onsubmit="event.preventDefault()">

<div className="space-y-4" id="step1">
<div>
<label className="block text-[13px] text-neutral-700 mb-1.5" htmlFor="regEmail">Enter your email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<i className="h-5 w-5" data-lucide="mail"></i>
</div>
<input autocomplete="email" className="w-full pl-10 pr-3 h-11 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition" id="regEmail" placeholder="you@example.com" type="email"/>
</div>
</div>
<button className="w-full h-11 rounded-full bg-teal-600 text-white text-[15px] font-medium tracking-tight hover:bg-teal-500 active:bg-teal-700 transition focus:outline-none focus:ring-4 focus:ring-teal-500/25 disabled:opacity-60 disabled:cursor-not-allowed" id="sendOtpBtn" type="button">
                    Send OTP
                  </button>
</div>

<div className="space-y-4 hidden" id="step2">
<div>
<label className="block text-[13px] text-neutral-700 mb-1.5">Enter the 6-digit code</label>
<div className="flex items-center justify-between gap-2">
<input className="otp-input w-12 h-12 text-center rounded-xl border border-neutral-200 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition text-[18px]" inputmode="numeric" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center rounded-xl border border-neutral-200 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition text-[18px]" inputmode="numeric" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center rounded-xl border border-neutral-200 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition text-[18px]" inputmode="numeric" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center rounded-xl border border-neutral-200 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition text-[18px]" inputmode="numeric" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center rounded-xl border border-neutral-200 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition text-[18px]" inputmode="numeric" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center rounded-xl border border-neutral-200 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition text-[18px]" inputmode="numeric" maxlength="1" type="text"/>
</div>
<p className="mt-1.5 text-[12px] text-rose-600 hidden" id="otpError">Please enter the complete 6-digit code.</p>
</div>
<div className="flex items-center justify-between">
<button className="text-[13px] text-neutral-500 hover:text-neutral-800 underline underline-offset-4 disabled:opacity-50 disabled:no-underline" disabled="" id="resendOtp" type="button">Resend in 30s</button>
<button className="h-11 px-5 rounded-full bg-teal-600 text-white text-[15px] font-medium tracking-tight hover:bg-teal-500 active:bg-teal-700 transition focus:outline-none focus:ring-4 focus:ring-teal-500/25" id="verifyOtpBtn" type="button">
                      Verify OTP
                    </button>
</div>
</div>

<div className="space-y-4 hidden" id="step3">
<div>
<label className="block text-[13px] text-neutral-700 mb-1.5" htmlFor="regPassword">Create Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<input className="w-full pl-10 pr-10 h-11 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition" id="regPassword" placeholder="Minimum 8 characters" type="password"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-700" id="toggleRegPassword" type="button">
<i className="h-5 w-5" data-lucide="eye"></i>
</button>
</div>

<div className="mt-2">
<div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full w-0 bg-rose-600 rounded-full transition-all" id="strengthBar"></div>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-[12px] text-neutral-500" id="strengthLabel">Strength: -</span>
<span className="text-[12px] text-neutral-400">Use letters, numbers, symbols</span>
</div>
</div>
</div>
<div>
<label className="block text-[13px] text-neutral-700 mb-1.5" htmlFor="regConfirm">Confirm Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<input className="w-full pl-10 pr-3 h-11 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-teal-500/15 focus:border-teal-500 transition" id="regConfirm" placeholder="Re-enter password" type="password"/>
</div>
<p className="mt-1.5 text-[12px] text-rose-600 hidden" id="confirmError">Passwords do not match</p>
</div>
<button className="w-full h-11 rounded-full bg-teal-600 text-white text-[15px] font-medium tracking-tight hover:bg-teal-500 active:bg-teal-700 transition focus:outline-none focus:ring-4 focus:ring-teal-500/25 disabled:opacity-60 disabled:cursor-not-allowed" id="registerBtn" type="submit">
                    Register
                  </button>
</div>

<div className="relative my-1">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-neutral-200"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-3 text-[12px] text-neutral-500">OR</span>
</div>
</div>

<button className="w-full h-11 rounded-xl border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 transition flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-neutral-200" type="button">
<svg aria-hidden="true" className="h-5 w-5" viewbox="0 0 48 48">
<path d="M43.611 20.083H42V20H24v8h11.303C33.607 31.659 29.222 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.053 29.7 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z" fill="#FFC107"></path>
<path d="M6.306 14.691l6.571 4.815C14.297 16.107 18.797 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.053 29.7 3 24 3 16.318 3 9.656 7.337 6.306 14.691z" fill="#FF3D00"></path>
<path d="M24 43c5.147 0 9.773-1.976 13.283-5.197l-6.137-5.197C29.112 34.744 26.677 36 24 36c-5.194 0-9.592-3.322-11.297-7.946l-6.56 5.053C9.458 38.727 16.227 43 24 43z" fill="#4CAF50"></path>
<path d="M43.611 20.083H42V20H24v8h11.303c-1.032 2.981-3.319 5.363-6.12 6.606l.001-.001 6.137 5.197C34.965 40.28 44 34 44 23c0-1.341-.138-2.651-.389-3.917z" fill="#1976D2"></path>
</svg>
<span className="text-[14px] font-medium">Sign up with Google</span>
</button>
</form>

<div className="text-center text-sm text-neutral-600">
                Already have an account?
                <button className="text-neutral-900 font-medium underline underline-offset-4 hover:text-neutral-700" id="toLoginFromRegister">Login Here</button>
</div>
</div>
</section>

<div className="text-center mt-4 text-[12px] text-neutral-400">
            Protected by enterprise-grade security
          </div>
</div>
</main>
</div>


    </>
  );
}
