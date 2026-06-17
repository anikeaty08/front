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



        lucide.createIcons();

        const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
        const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];
        const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.pdf'];

        const uploadedFiles = {
            passportMain: null,
            passportRegistration: null,
            licenseFront: null,
            licenseBack: null
        };

        // File upload handling
        document.querySelectorAll('.upload-zone').forEach(zone => {
            const input = zone.querySelector('input[type="file"]');
            const field = zone.dataset.field;
            const uploadContent = zone.querySelector('.upload-content');
            const fileInfo = zone.querySelector('.file-info');
            const fileName = zone.querySelector('.file-name');
            const removeBtn = zone.querySelector('.remove-file');
            const errorMsg = zone.parentElement.querySelector('.error-message');

            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    handleFile(file, field, zone, uploadContent, fileInfo, fileName, errorMsg);
                }
            });

            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                resetUpload(field, input, uploadContent, fileInfo, errorMsg, zone);
            });

            // Drag and drop
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('border-[#BC9070]');
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('border-[#BC9070]');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('border-[#BC9070]');
                const file = e.dataTransfer.files[0];
                if (file) {
                    handleFile(file, field, zone, uploadContent, fileInfo, fileName, errorMsg);
                }
            });
        });

        function handleFile(file, field, zone, uploadContent, fileInfo, fileName, errorMsg) {
            errorMsg.classList.add('hidden');
            zone.classList.remove('border-red-500');

            // Check file type
            const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
            if (!ALLOWED_TYPES.includes(file.type) && !ALLOWED_EXTENSIONS.includes(fileExtension)) {
                showError(errorMsg, 'Неверный формат файла. Допустимые форматы: JPG, PNG, PDF');
                zone.classList.add('border-red-500');
                showToast('Ошибка формата', 'Загрузите файл в формате JPG, PNG или PDF');
                return;
            }

            // Check file size
            if (file.size > MAX_FILE_SIZE) {
                showError(errorMsg, 'Файл слишком большой. Максимальный размер: 10 МБ');
                zone.classList.add('border-red-500');
                showToast('Файл слишком большой', 'Максимальный размер файла — 10 МБ');
                return;
            }

            uploadedFiles[field] = file;
            uploadContent.classList.add('hidden');
            fileInfo.classList.remove('hidden');
            fileInfo.classList.add('flex');
            fileName.textContent = file.name;
            zone.classList.add('border-green-600/30');
            zone.classList.remove('border-neutral-800');
        }

        function resetUpload(field, input, uploadContent, fileInfo, errorMsg, zone) {
            uploadedFiles[field] = null;
            input.value = '';
            uploadContent.classList.remove('hidden');
            fileInfo.classList.add('hidden');
            fileInfo.classList.remove('flex');
            errorMsg.classList.add('hidden');
            zone.classList.remove('border-green-600/30', 'border-red-500');
            zone.classList.add('border-neutral-800');
        }

        function showError(element, message) {
            element.textContent = message;
            element.classList.remove('hidden');
        }

        // Checkbox visual toggle
        const consentCheckbox = document.getElementById('consent');
        const checkboxContainer = consentCheckbox.parentElement;
        const checkIcon = checkboxContainer.querySelector('.check-icon');

        consentCheckbox.addEventListener('change', () => {
            // Visual feedback handled largely by peer-checked in HTML, 
            // but keeping JS for any additional logic if needed
            if (consentCheckbox.checked) {
                checkIcon.style.opacity = '1';
                checkboxContainer.querySelector('div').classList.add('bg-[#BC9070]', 'border-[#BC9070]');
            } else {
                checkIcon.style.opacity = '0';
                checkboxContainer.querySelector('div').classList.remove('bg-[#BC9070]', 'border-[#BC9070]');
            }
        });

        // Phone formatting
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '8') {
                    value = '7' + value.slice(1);
                }
                if (value[0] !== '7') {
                    value = '7' + value;
                }
            }
            
            let formatted = '';
            if (value.length > 0) {
                formatted = '+' + value[0];
            }
            if (value.length > 1) {
                formatted += ' (' + value.slice(1, 4);
            }
            if (value.length > 4) {
                formatted += ') ' + value.slice(4, 7);
            }
            if (value.length > 7) {
                formatted += '-' + value.slice(7, 9);
            }
            if (value.length > 9) {
                formatted += '-' + value.slice(9, 11);
            }
            
            e.target.value = formatted;
        });

        // Form submission
        document.getElementById('documentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Clear all errors
            document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.upload-zone').forEach(el => el.classList.remove('border-red-500'));

            // Validate files
            const fileFields = ['passportMain', 'passportRegistration', 'licenseFront', 'licenseBack'];
            
            fileFields.forEach(field => {
                if (!uploadedFiles[field]) {
                    const zone = document.querySelector(`[data-field="${field}"]`);
                    const errorMsg = zone.parentElement.querySelector('.error-message');
                    showError(errorMsg, 'Загрузите документ');
                    zone.classList.add('border-red-500');
                    isValid = false;
                }
            });

            // Validate phone
            const phone = phoneInput.value.replace(/\D/g, '');
            if (phone.length !== 11) {
                showError(document.getElementById('phoneError'), 'Введите корректный номер телефона');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError(document.getElementById('emailError'), 'Введите корректный email');
                isValid = false;
            }

            // Validate consent
            if (!consentCheckbox.checked) {
                showError(document.getElementById('consentError'), 'Необходимо согласие на обработку персональных данных');
                isValid = false;
            }

            if (isValid) {
                showToast('Успешно', 'Документы отправлены на проверку', 'success');
            } else {
                showToast('Ошибка', 'Пожалуйста, заполните все поля корректно');
            }
        });

        // Toast notifications
        function showToast(title, message, type = 'error') {
            const toast = document.getElementById('toast');
            const toastTitle = toast.querySelector('.toast-title');
            const toastMessage = toast.querySelector('.toast-message');
            const toastIcon = toast.querySelector('.toast-icon');

            toastTitle.textContent = title;
            toastMessage.textContent = message;
            
            if (type === 'success') {
                toastIcon.setAttribute('data-lucide', 'check-circle');
                toastIcon.classList.remove('text-red-500');
                toastIcon.classList.add('text-green-500');
            } else {
                toastIcon.setAttribute('data-lucide', 'alert-circle');
                toastIcon.classList.remove('text-green-500');
                toastIcon.classList.add('text-red-500');
            }
            
            lucide.createIcons();

            toast.classList.remove('translate-y-full', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-full', 'opacity-0');
            }, 4000);
        }

        document.querySelector('.toast-close').addEventListener('click', () => {
            document.getElementById('toast').classList.add('translate-y-full', 'opacity-0');
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
      
<div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

<div className="mb-12">
<p className="text-[#BC9070] text-sm font-normal mb-2 uppercase tracking-wide">Carlson Club</p>
<h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white uppercase">ЗАГРУЗКА ДОКУМЕНТОВ</h1>
<p className="mt-4 text-base font-light text-neutral-400">Для оформления аренды премиального автомобиля загрузите необходимые документы</p>
</div>
<form className="space-y-8" id="documentForm">

<div className="space-y-3">
<label className="block text-lg font-light text-white">Главная страница паспорта</label>
<div className="upload-zone relative border border-neutral-800 rounded-lg p-6 hover:border-[#BC9070]/50 transition-colors cursor-pointer" data-field="passportMain">
<input accept=".jpg,.jpeg,.png,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-input="passportMain" type="file"/>
<div className="flex flex-col items-center justify-center text-center upload-content">
<svg className="lucide lucide-upload w-8 h-8 text-neutral-500 mb-3" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="text-base font-light text-neutral-400">Перетащите файл или нажмите для загрузки</p>
<p className="text-sm font-light text-neutral-600 mt-1">JPG, PNG или PDF до 10 МБ</p>
</div>
<div className="hidden file-info items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-check w-6 h-6 text-green-500" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-base font-light text-white file-name"></span>
</div>
<button className="remove-file text-neutral-500 hover:text-red-500 transition-colors" type="button">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<p className="error-message text-sm font-light text-red-500 hidden"></p>
</div>

<div className="space-y-3">
<label className="block text-lg font-light text-white">Страница прописки паспорта</label>
<div className="upload-zone relative border border-neutral-800 rounded-lg p-6 hover:border-[#BC9070]/50 transition-colors cursor-pointer" data-field="passportRegistration">
<input accept=".jpg,.jpeg,.png,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-input="passportRegistration" type="file"/>
<div className="flex flex-col items-center justify-center text-center upload-content">
<svg className="lucide lucide-upload w-8 h-8 text-neutral-500 mb-3" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="text-base font-light text-neutral-400">Перетащите файл или нажмите для загрузки</p>
<p className="text-sm font-light text-neutral-600 mt-1">JPG, PNG или PDF до 10 МБ</p>
</div>
<div className="hidden file-info items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-check w-6 h-6 text-green-500" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-base font-light text-white file-name"></span>
</div>
<button className="remove-file text-neutral-500 hover:text-red-500 transition-colors" type="button">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<p className="error-message text-sm font-light text-red-500 hidden"></p>
</div>

<div className="space-y-3">
<label className="block text-lg font-light text-white">Лицевая сторона водительского удостоверения</label>
<div className="upload-zone relative border border-neutral-800 rounded-lg p-6 hover:border-[#BC9070]/50 transition-colors cursor-pointer" data-field="licenseFront">
<input accept=".jpg,.jpeg,.png,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-input="licenseFront" type="file"/>
<div className="flex flex-col items-center justify-center text-center upload-content">
<svg className="lucide lucide-upload w-8 h-8 text-neutral-500 mb-3" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="text-base font-light text-neutral-400">Перетащите файл или нажмите для загрузки</p>
<p className="text-sm font-light text-neutral-600 mt-1">JPG, PNG или PDF до 10 МБ</p>
</div>
<div className="hidden file-info items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-check w-6 h-6 text-green-500" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-base font-light text-white file-name"></span>
</div>
<button className="remove-file text-neutral-500 hover:text-red-500 transition-colors" type="button">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<p className="error-message text-sm font-light text-red-500 hidden"></p>
</div>

<div className="space-y-3">
<label className="block text-lg font-light text-white">Обратная сторона водительского удостоверения</label>
<div className="upload-zone relative border border-neutral-800 rounded-lg p-6 hover:border-[#BC9070]/50 transition-colors cursor-pointer" data-field="licenseBack">
<input accept=".jpg,.jpeg,.png,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-input="licenseBack" type="file"/>
<div className="flex flex-col items-center justify-center text-center upload-content">
<svg className="lucide lucide-upload w-8 h-8 text-neutral-500 mb-3" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<p className="text-base font-light text-neutral-400">Перетащите файл или нажмите для загрузки</p>
<p className="text-sm font-light text-neutral-600 mt-1">JPG, PNG или PDF до 10 МБ</p>
</div>
<div className="hidden file-info items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-check w-6 h-6 text-green-500" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-base font-light text-white file-name"></span>
</div>
<button className="remove-file text-neutral-500 hover:text-red-500 transition-colors" type="button">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<p className="error-message text-sm font-light text-red-500 hidden"></p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">

<div className="space-y-3">
<label className="block text-lg font-light text-white">Телефон</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="lucide lucide-phone w-5 h-5 text-neutral-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<input className="w-full bg-transparent border border-neutral-800 rounded-lg py-3 pl-12 pr-4 text-base font-light text-white placeholder-neutral-600 focus:outline-none focus:border-[#BC9070]/50 transition-colors" id="phone" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
<p className="error-message text-sm font-light text-red-500 hidden" id="phoneError"></p>
</div>

<div className="space-y-3">
<label className="block text-lg font-light text-white">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="lucide lucide-mail w-5 h-5 text-neutral-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="w-full bg-transparent border border-neutral-800 rounded-lg py-3 pl-12 pr-4 text-base font-light text-white placeholder-neutral-600 focus:outline-none focus:border-[#BC9070]/50 transition-colors" id="email" placeholder="example@mail.com" type="email"/>
</div>
<p className="error-message text-sm font-light text-red-500 hidden" id="emailError"></p>
</div>
</div>

<div className="pt-4">
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex-shrink-0 mt-0.5">
<input className="sr-only peer" id="consent" type="checkbox"/>
<div className="w-5 h-5 border border-neutral-700 rounded peer-checked:bg-[#BC9070] peer-checked:border-[#BC9070] transition-colors flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-black opacity-0 peer-checked:opacity-100 check-icon" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<span className="text-base font-light text-neutral-400 group-hover:text-neutral-300 transition-colors">Я согласен на обработку персональных данных в соответствии с <a className="text-[#BC9070] hover:text-[#C9A385] underline underline-offset-2" href="#">политикой конфиденциальности</a></span>
</label>
<p className="error-message text-sm font-light text-red-500 hidden mt-2" id="consentError"></p>
</div>

<div className="pt-6">
<button className="w-full sm:w-auto px-8 py-4 bg-[#BC9070] hover:bg-[#C9A385] text-black text-base font-normal rounded-none transition-colors uppercase tracking-wide" type="submit">
                    Отправить
                </button>
</div>
</form>

<div className="mt-16 pt-8 border-t border-neutral-900">
<p className="text-sm font-light text-neutral-600">© 2012-2025. Carlson Club. Все права защищены</p>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-neutral-900 border border-neutral-800 rounded-lg p-4 shadow-xl transform translate-y-full opacity-0 transition-all duration-300 max-w-sm" id="toast">
<div className="flex items-start gap-3">
<svg className="lucide lucide-alert-circle w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 toast-icon" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<div>
<p className="text-base font-normal text-white toast-title">Ошибка</p>
<p className="text-sm font-light text-neutral-400 mt-1 toast-message"></p>
</div>
<button className="toast-close text-neutral-500 hover:text-white transition-colors ml-auto" type="button">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>


    </>
  );
}
