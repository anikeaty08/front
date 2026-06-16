import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let timerInterval;

        // Form Transitions
        function showStep2(e) {
            e.preventDefault();
            const email = document.getElementById('email-input').value;
            document.getElementById('display-email').textContent = email;
            
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            
            step1.classList.remove('animate-fade');
            step1.style.opacity = '0';
            
            setTimeout(() => {
                step1.classList.add('hidden');
                step2.classList.remove('hidden');
                step2.classList.add('animate-fade');
                
                // Focus first OTP input
                setTimeout(() => document.querySelector('.otp-input').focus(), 100);
                startTimer();
            }, 200);
        }
        
        function showStep1() {
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            
            step2.classList.remove('animate-fade');
            step2.style.opacity = '0';
            
            setTimeout(() => {
                step2.classList.add('hidden');
                step1.classList.remove('hidden');
                step1.style.opacity = '1';
                step1.classList.add('animate-fade');
                clearInterval(timerInterval);
            }, 200);
        }

        // OTP Input Logic
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach((input, index) => {
            // Select content on focus
            input.addEventListener('focus', (e) => {
                e.target.select();
            });

            input.addEventListener('input', (e) => {
                // Ensure only 1 character
                if (e.target.value.length > 1) {
                    e.target.value = e.target.value.slice(0, 1);
                }
                // Move to next input
                if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });

            input.addEventListener('keydown', (e) => {
                // Move to previous input on backspace if current is empty
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].value = ''; // Optional: clear previous
                }
            });
        });

        // Toggle Password Visibility
        function togglePassword(btn) {
            const input = btn.previousElementSibling;
            const icon = btn.querySelector('iconify-icon');
            if (input.type === 'password') {
                input.type = 'text';
                icon.setAttribute('icon', 'solar:eye-closed-linear');
            } else {
                input.type = 'password';
                icon.setAttribute('icon', 'solar:eye-linear');
            }
        }

        // Timer Logic
        function startTimer() {
            let timeLeft = 59;
            const timerEl = document.getElementById('timer');
            const resendBtn = document.getElementById('resend-btn');
            
            resendBtn.disabled = true;
            timerEl.textContent = `00:${timeLeft}`;
            
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timeLeft--;
                if(timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerEl.textContent = '';
                    resendBtn.disabled = false;
                    return;
                }
                timerEl.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
            }, 1000);
        }

        // Submit Reset Form
        function resetPassword(e) {
            e.preventDefault();
            showToast('تم بنجاح', 'تم تغيير كلمة المرور الخاصة بك بنجاح.', 'success');
            // Reset form
            setTimeout(() => showStep1(), 2000);
        }

        // Toast Notification Function
        function showToast(title, message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast-enter pointer-events-auto bg-[#111111] border border-neutral-800 shadow-xl rounded-lg p-4 w-80 flex items-start gap-3';
            
            let iconHtml = type === 'success' 
                ? `<div class="mt-0.5 text-emerald-500"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></div>`
                : `<div class="mt-0.5 text-blue-500"><iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon></div>`;

            toast.innerHTML = `
                ${iconHtml}
                <div class="flex-1">
                    <h4 class="text-sm font-medium text-white">${title}</h4>
                    <p class="text-xs text-neutral-400 mt-0.5">${message}</p>
                </div>
            `;
            
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<main className="flex-1 flex items-center justify-center p-4 relative z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-neutral-900/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<div className="w-full max-w-sm relative">

<div className="animate-fade space-y-8" id="step-1">

<div className="text-center space-y-4">
<div className="w-12 h-12 bg-[#0A0A0A] border border-neutral-800 rounded-xl mx-auto flex items-center justify-center shadow-sm">
<iconify-icon className="text-white" icon="solar:key-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">نسيت كلمة المرور؟</h1>
<p className="text-sm text-neutral-400 leading-relaxed">أدخل بريدك الإلكتروني المرتبط بحسابك وسنرسل لك رمزاً لإعادة تعيين كلمة المرور.</p>
</div>
</div>

<form className="space-y-5" onsubmit="showStep2(event)">
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-300">البريد الإلكتروني</label>
<input className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none transition-all text-left" dir="ltr" id="email-input" placeholder="name@company.com" required="" type="email"/>
</div>
<button className="w-full py-2.5 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white outline-none flex items-center justify-center gap-2" type="submit">
                        إرسال رمز التحقق
                        <iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
</form>

<div className="text-center">
<a className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center justify-center gap-1.5 inline-flex outline-none focus:text-white" href="#">
<iconify-icon icon="solar:login-2-linear" width="16"></iconify-icon>
                        العودة لتسجيل الدخول
                    </a>
</div>
</div>

<div className="hidden space-y-8" id="step-2">

<div className="text-center space-y-4">
<div className="w-12 h-12 bg-[#0A0A0A] border border-neutral-800 rounded-xl mx-auto flex items-center justify-center shadow-sm">
<iconify-icon className="text-white" icon="solar:password-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">تعيين كلمة المرور</h1>
<p className="text-sm text-neutral-400 leading-relaxed">أدخل رمز التحقق المكون من ٤ أرقام المرسل إلى <span className="text-neutral-200 font-medium" dir="ltr" id="display-email"></span></p>
</div>
</div>

<form className="space-y-6" onsubmit="resetPassword(event)">

<div className="space-y-2" dir="ltr">
<label className="block text-sm font-medium text-neutral-300 text-right" dir="rtl">رمز التحقق</label>
<div className="flex items-center justify-between gap-3">
<input className="w-full h-14 text-center text-xl font-medium bg-[#0A0A0A] border border-neutral-800 rounded-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none transition-all otp-input" maxlength="1" required="" type="number"/>
<input className="w-full h-14 text-center text-xl font-medium bg-[#0A0A0A] border border-neutral-800 rounded-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none transition-all otp-input" maxlength="1" required="" type="number"/>
<input className="w-full h-14 text-center text-xl font-medium bg-[#0A0A0A] border border-neutral-800 rounded-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none transition-all otp-input" maxlength="1" required="" type="number"/>
<input className="w-full h-14 text-center text-xl font-medium bg-[#0A0A0A] border border-neutral-800 rounded-lg text-white focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none transition-all otp-input" maxlength="1" required="" type="number"/>
</div>
</div>

<div className="space-y-4">
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-300">كلمة المرور الجديدة</label>
<div className="relative">
<input className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 outline-none transition-all text-left" dir="ltr" placeholder="••••••••" required="" type="password"/>
<button className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors outline-none" onclick="togglePassword(this)" type="button">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<button className="w-full py-2.5 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white outline-none flex items-center justify-center gap-2" type="submit">
                        تأكيد وتغيير كلمة المرور
                        <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</form>

<div className="flex items-center justify-between text-sm">
<button className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5 outline-none" onclick="showStep1()" type="button">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                        تعديل البريد
                    </button>
<button className="text-neutral-400 hover:text-white transition-colors outline-none disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="resend-btn" type="button">
                        إعادة إرسال <span className="text-neutral-600 ml-0.5 font-medium" dir="ltr" id="timer">00:59</span>
</button>
</div>
</div>
</div>
</main>



    </>
  );
}
