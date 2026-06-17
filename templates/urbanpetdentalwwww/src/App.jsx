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



(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W5KFKGLQ');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WY1N87QCHD');



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
slate: { 850: '#1f2937', 900: '#0f172a', 950: '#020617' },
blue: { 50: '#eff6ff', 600: '#2563eb', 700: '#1d4ed8' },
teal: { 50: '#f0fdfa', 100: '#ccfbf1' },
sky: { 50: '#f0f9ff', 100: '#e0f2fe' }
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function() {
          var dateInput = document.getElementById('form-date');
          if (dateInput) {
            var today = new Date();
            var yyyy = today.getFullYear();
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var dd = String(today.getDate()).padStart(2, '0');
            dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
          }
        })();
  


    (function() {
          var btnOffice = document.getElementById('loc-btn-office');
          var btnMobile = document.getElementById('loc-btn-mobile');
          var hiddenInput = document.getElementById('form-location');
          function selectOffice() {
            btnOffice.classList.add('active');
            btnOffice.style.borderColor = '#2563eb';
            btnOffice.style.boxShadow = '0 0 0 1px #2563eb';
            btnOffice.style.background = '#f8fafc';
            var odot = btnOffice.querySelector('.radio-dot');
            odot.style.borderColor = '#2563eb';
            odot.innerHTML = '<div style="width:8px;height:8px;border-radius:50%;background:#2563eb;"></div>';
            btnMobile.classList.remove('active');
            btnMobile.style.borderColor = '#e2e8f0';
            btnMobile.style.boxShadow = 'none';
            btnMobile.style.background = '#ffffff';
            var mdot = btnMobile.querySelector('.radio-dot');
            mdot.style.borderColor = '#cbd5e1';
            mdot.innerHTML = '';
            var mLabel = btnMobile.querySelector('.loc-label');
            if (mLabel) mLabel.style.color = '#334155';
            hiddenInput.value = 'NYC Office ($499)';
          }
          function selectMobile() {
            btnMobile.classList.add('active');
            btnMobile.style.borderColor = '#0f172a';
            btnMobile.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.15)';
            btnMobile.style.background = '#0f172a';
            var mdot = btnMobile.querySelector('.radio-dot');
            mdot.style.borderColor = '#60a5fa';
            mdot.innerHTML = '<div style="width:8px;height:8px;border-radius:50%;background:#60a5fa;"></div>';
            var mLabel = btnMobile.querySelector('.loc-label');
            if (mLabel) mLabel.style.color = '#ffffff';
            btnOffice.classList.remove('active');
            btnOffice.style.borderColor = '#e2e8f0';
            btnOffice.style.boxShadow = 'none';
            btnOffice.style.background = '#ffffff';
            var odot = btnOffice.querySelector('.radio-dot');
            odot.style.borderColor = '#cbd5e1';
            odot.innerHTML = '';
            hiddenInput.value = 'Mobile Home ($599)';
          }
          selectOffice();
          btnOffice.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); selectOffice(); });
          btnMobile.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); selectMobile(); });
        })();
  


    (function() {
      var petTypeSelect = document.getElementById('form-pet-type');
      var weightSection = document.getElementById('weight-section');
      var weightInput = document.getElementById('form-dog-weight');
      var aggressiveCheckbox = document.getElementById('form-aggressive');
      var priceEstimate = document.getElementById('price-estimate');
      var priceOffice = document.getElementById('price-office');
      var priceMobile = document.getElementById('price-mobile');

      // Show/hide weight section based on pet type
      petTypeSelect.addEventListener('change', function() {
        if (petTypeSelect.value === 'Dog') {
          weightSection.style.display = 'block';
        } else {
          weightSection.style.display = 'none';
          priceEstimate.style.display = 'none';
          weightInput.value = '';
          aggressiveCheckbox.checked = false;
        }
      });

      // Calculate price when weight changes
      function calculatePrice() {
        var weight = parseFloat(weightInput.value);
        if (!weight || weight <= 0) {
          priceEstimate.style.display = 'none';
          return;
        }

        var officePrice, mobilePrice;

        // Determine base price based on weight
        if (weight < 20) {
          officePrice = 499;
          mobilePrice = 599;
        } else if (weight < 40) {
          officePrice = 599;
          mobilePrice = 699;
        } else {
          officePrice = 699;
          mobilePrice = 799;
        }

        // Add aggressive dog fee if checked
        if (aggressiveCheckbox.checked) {
          officePrice += 50;
          mobilePrice += 50;
        }

        // Display the prices
        priceOffice.textContent = '$' + officePrice;
        priceMobile.textContent = '$' + mobilePrice;
        priceEstimate.style.display = 'block';
      }

      weightInput.addEventListener('input', calculatePrice);
      aggressiveCheckbox.addEventListener('change', calculatePrice);
    })();
  


    (function() {
    var form = document.getElementById('booking-form');
    var formWrapper = document.getElementById('form-wrapper');
    var formSuccess = document.getElementById('form-success');
    var submitBtn = document.getElementById('submit-btn');
    var submitBtnText = document.getElementById('submit-btn-text');
    var submitBtnArrow = document.getElementById('submit-btn-arrow');
    var submitBtnSpinner = document.getElementById('submit-btn-spinner');
    var globalError = document.getElementById('form-global-error');
    var globalErrorText = document.getElementById('form-global-error-text');

    var fields = {
      name: { el: document.getElementById('form-name'), err: document.getElementById('err-name') },
      phone: { el: document.getElementById('form-phone'), err: document.getElementById('err-phone') },
      email: { el: document.getElementById('form-email'), err: document.getElementById('err-email') },
      petType: { el: document.getElementById('form-pet-type'), err: document.getElementById('err-pet-type') },
      date: { el: document.getElementById('form-date'), err: document.getElementById('err-date') }
    };

    Object.keys(fields).forEach(function(key) {
      var field = fields[key];
      field.el.addEventListener('input', function() { clearFieldError(field); });
      field.el.addEventListener('change', function() { clearFieldError(field); });
    });

    function clearFieldError(field) {
      field.el.classList.remove('input-error');
      field.err.classList.remove('show');
    }

    function showFieldError(field) {
      field.el.classList.add('input-error');
      field.err.classList.add('show');
      field.el.classList.add('shake');
      setTimeout(function() {
        field.el.classList.remove('shake');
      }, 400);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
      var cleaned = phone.replace(/[\s\-\(\)\+\.]/g, '');
      return cleaned.length >= 7 && /^\d+$/.test(cleaned);
    }

    function validateForm() {
      var isValid = true;

      if (!fields.name.el.value.trim()) {
        showFieldError(fields.name);
        isValid = false;
      }

      if (!fields.phone.el.value.trim() || !isValidPhone(fields.phone.el.value.trim())) {
        showFieldError(fields.phone);
        isValid = false;
      }

      if (!fields.email.el.value.trim() || !isValidEmail(fields.email.el.value.trim())) {
        showFieldError(fields.email);
        isValid = false;
      }

      if (!fields.petType.el.value) {
        showFieldError(fields.petType);
        isValid = false;
      }

      if (!fields.date.el.value) {
        showFieldError(fields.date);
        isValid = false;
      }

      return isValid;
    }

    function setLoading(loading) {
      if (loading) {
        submitBtn.classList.add('submit-loading');
        submitBtnText.textContent = 'Sending...';
        submitBtnArrow.classList.add('hidden');
        submitBtnSpinner.classList.remove('hidden');
      } else {
        submitBtn.classList.remove('submit-loading');
        submitBtnText.textContent = "Book My Pet's Cleaning";
        submitBtnArrow.classList.remove('hidden');
        submitBtnSpinner.classList.add('hidden');
      }
    }

    function formatDate(dateStr) {
      if (!dateStr) return '';
      var parts = dateStr.split('-');
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return months[parseInt(parts[1], 10) - 1] + ' ' + parseInt(parts[2], 10) + ', ' + parts[0];
    }

    function showGlobalError(msg) {
      globalErrorText.textContent = msg || 'Something went wrong. Please try again or contact us directly.';
      globalError.classList.remove('hidden');
      globalError.style.display = 'flex';
      globalError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function hideGlobalError() {
      globalError.classList.add('hidden');
      globalError.style.display = '';
    }

    async function sendToTelegram(formData) {
      var response = await fetch('https://nqnjjyioclxxhwxofsyu.supabase.co/functions/v1/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: formData })
      });

      var result = await response.json();

      if (!result.ok) {
        throw new Error(result.description || 'Telegram send failed');
      }

      return result;
    }

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      hideGlobalError();

      if (!validateForm()) {
        var firstError = form.querySelector('.input-error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
        return;
      }

      var formData = {
        name: fields.name.el.value.trim(),
        phone: fields.phone.el.value.trim(),
        email: fields.email.el.value.trim(),
        petType: fields.petType.el.value,
        date: fields.date.el.value,
        location: document.getElementById('form-location').value,
        details: document.getElementById('form-details').value.trim(),
        dogWeight: document.getElementById('form-dog-weight').value,
        aggressive: document.getElementById('form-aggressive').checked
      };

      setLoading(true);

      try {
        await sendToTelegram(formData);

        try {
          sessionStorage.setItem('upd_booking', JSON.stringify(formData));
        } catch (e) {}

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'booking_form_submit',
          pet_type: formData.petType,
          location: formData.location
        });

        setLoading(false);
        // window.location.href = 'name=' + encodeURIComponent(formData.name) + '&pet=' + encodeURIComponent(formData.petType) + '&date=' + encodeURIComponent(formData.date) + '&location=' + encodeURIComponent(formData.location);
      } catch (err) {
        setLoading(false);
        console.error('Telegram error:', err);
        showGlobalError('Hmm, something went wrong on our end. Please try again, or call us at (216) 390-8027.');
      }
    });

    document.getElementById('book-another-btn').addEventListener('click', function() {
      formSuccess.classList.add('hidden');
      formWrapper.classList.remove('hidden');
      form.reset();
      hideGlobalError();
      document.getElementById('loc-btn-office').click();
      document.getElementById('book').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  })();
  


    (function() {
          var track = document.getElementById('results-track');
          var prevBtn = document.getElementById('carousel-prev');
          var nextBtn = document.getElementById('carousel-next');
          var dots = document.querySelectorAll('.carousel-dot');
          var currentSlide = 0;
          var totalSlides = track ? track.children.length : 0;
          var autoplayInterval;

          function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentSlide = index;
            track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
            dots.forEach(function(dot, i) {
              if (i === currentSlide) {
                dot.className = 'carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-900';
              } else {
                dot.className = 'carousel-dot w-2 h-2 rounded-full transition-all duration-300 bg-slate-300 hover:bg-slate-400';
              }
            });
          }

          function startAutoplay() {
            stopAutoplay();
            autoplayInterval = setInterval(function() { goToSlide(currentSlide + 1); }, 5000);
          }

          function stopAutoplay() {
            if (autoplayInterval) clearInterval(autoplayInterval);
          }

          if (prevBtn) prevBtn.addEventListener('click', function() { stopAutoplay(); goToSlide(currentSlide - 1); startAutoplay(); });
          if (nextBtn) nextBtn.addEventListener('click', function() { stopAutoplay(); goToSlide(currentSlide + 1); startAutoplay(); });
          dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
              stopAutoplay();
              goToSlide(parseInt(dot.getAttribute('data-index'), 10));
              startAutoplay();
            });
          });

          // Touch/swipe support
          var touchStartX = 0;
          if (track) {
            track.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; stopAutoplay(); }, { passive: true });
            track.addEventListener('touchend', function(e) {
              var diff = touchStartX - e.changedTouches[0].screenX;
              if (Math.abs(diff) > 50) {
                if (diff > 0) goToSlide(currentSlide + 1);
                else goToSlide(currentSlide - 1);
              }
              startAutoplay();
            }, { passive: true });
          }

          goToSlide(0);
          startAutoplay();
        })();
  


    (function() {
          var toggles = document.querySelectorAll('.faq-bottom-toggle');
          toggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
              var item = toggle.closest('.faq-bottom-item');
              var content = item.querySelector('.faq-bottom-content');
              var iconPlus = toggle.querySelector('.faq-bottom-icon-plus');
              var iconMinus = toggle.querySelector('.faq-bottom-icon-minus');
              var isOpen = toggle.getAttribute('aria-expanded') === 'true';

              // Close all other items
              document.querySelectorAll('.faq-bottom-item').forEach(function(otherItem) {
                if (otherItem !== item) {
                  var otherContent = otherItem.querySelector('.faq-bottom-content');
                  var otherToggle = otherItem.querySelector('.faq-bottom-toggle');
                  var otherPlus = otherToggle.querySelector('.faq-bottom-icon-plus');
                  var otherMinus = otherToggle.querySelector('.faq-bottom-icon-minus');
                  otherContent.style.maxHeight = '0px';
                  otherToggle.setAttribute('aria-expanded', 'false');
                  if (otherPlus) otherPlus.classList.remove('hidden');
                  if (otherMinus) otherMinus.classList.add('hidden');
                }
              });

              if (isOpen) {
                content.style.maxHeight = '0px';
                toggle.setAttribute('aria-expanded', 'false');
                if (iconPlus) iconPlus.classList.remove('hidden');
                if (iconMinus) iconMinus.classList.add('hidden');
              } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                toggle.setAttribute('aria-expanded', 'true');
                if (iconPlus) iconPlus.classList.add('hidden');
                if (iconMinus) iconMinus.classList.remove('hidden');
              }
            });
          });
        })();
  


    (function() {
          var btn = document.getElementById('mobile-menu-btn');
          var closeBtn = document.getElementById('mobile-menu-close');
          var overlay = document.getElementById('mobile-menu-overlay');
          var panel = document.getElementById('mobile-menu-panel');
          function openMenu() {
            panel.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0', 'invisible');
            overlay.style.pointerEvents = 'auto';
            document.body.style.overflow = 'hidden';
          }
          function closeMenu() {
            panel.classList.add('translate-x-full');
            overlay.classList.add('opacity-0', 'invisible');
            overlay.style.pointerEvents = 'none';
            document.body.style.overflow = '';
          }
          btn.addEventListener('click', openMenu);
          closeBtn.addEventListener('click', closeMenu);
          overlay.addEventListener('click', closeMenu);
        })();
  


    (function() {
          var overlayEl = document.getElementById('lightbox-overlay');
          var imgEl = document.getElementById('lightbox-img');
          var labelEl = document.getElementById('lightbox-label');
          var closeBtn = document.getElementById('lightbox-close');
          var prevBtn = document.getElementById('lightbox-prev');
          var nextBtn = document.getElementById('lightbox-next');

          var images = [];
          var currentIndex = 0;

          // Collect all lightbox-enabled images
          var triggers = document.querySelectorAll('[data-lightbox-src]');
          triggers.forEach(function(trigger, i) {
            images.push({
              src: trigger.getAttribute('data-lightbox-src'),
              label: trigger.getAttribute('data-lightbox-label') || ''
            });
            trigger.addEventListener('click', function(e) {
              e.stopPropagation();
              currentIndex = i;
              openLightbox();
            });
          });

          function openLightbox() {
            if (images.length === 0) return;
            imgEl.src = images[currentIndex].src;
            labelEl.textContent = images[currentIndex].label;
            overlayEl.classList.add('active');
            document.body.style.overflow = 'hidden';
          }

          function closeLightbox() {
            overlayEl.classList.remove('active');
            document.body.style.overflow = '';
          }

          function goNext() {
            currentIndex = (currentIndex + 1) % images.length;
            imgEl.src = images[currentIndex].src;
            labelEl.textContent = images[currentIndex].label;
          }

          function goPrev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            imgEl.src = images[currentIndex].src;
            labelEl.textContent = images[currentIndex].label;
          }

          closeBtn.addEventListener('click', function(e) { e.stopPropagation(); closeLightbox(); });
          overlayEl.addEventListener('click', function(e) {
            if (e.target === overlayEl) closeLightbox();
          });
          prevBtn.addEventListener('click', function(e) { e.stopPropagation(); goPrev(); });
          nextBtn.addEventListener('click', function(e) { e.stopPropagation(); goNext(); });

          document.addEventListener('keydown', function(e) {
            if (!overlayEl.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
          });
        })();
  


    (function () {
        const form = document.getElementById('booking-form');          // твоя форма
        const formSuccess = document.getElementById('form-success');   // твой success блок
        const formWrapper = document.getElementById('form-wrapper');   // если есть контейнер формы
        const anotherBtn = document.getElementById('book-another-btn');

        if (!form) { console.error('booking-form not found'); return; }
        if (!formSuccess) { console.error('form-success not found'); return; }

        const sName = document.getElementById('summary-name');
        const sPet = document.getElementById('summary-pet');
        const sPetName = document.getElementById('summary-pet-name');
        const sWeight = document.getElementById('summary-weight');
        const sAggressive = document.getElementById('summary-aggressive');
        const sDate = document.getElementById('summary-date');
        const sPrice = document.getElementById('summary-price');

        function valByNames(names) {
          for (const n of names) {
            const el = form.querySelector(`[name="${n}"]`);
            if (el && 'value' in el) return (el.value || '').trim();
          }
          return '';
        }

        function selectedTextByNames(names) {
          for (const n of names) {
            const el = form.querySelector(`[name="${n}"]`);
            if (!el) continue;
            if (el.tagName === 'SELECT') {
              const opt = el.options?.[el.selectedIndex];
              return ((opt && opt.text) ? opt.text : el.value || '').trim();
            }
            if ('value' in el) return (el.value || '').trim();
          }
          return '';
        }

        function getLocationLabel() {
          const hidden =
            form.querySelector('input[type="hidden"][name*="location"]') ||
            form.querySelector('input[type="hidden"][name*="appointmentlocation"]') ||
            form.querySelector('input[type="hidden"][name*="servicelocation"]');
          if (hidden && hidden.value) return hidden.value.trim();

          const officeBtn = document.getElementById('loc-btn-office');
          const homeBtn = document.getElementById('loc-btn-home');
          if (officeBtn?.classList.contains('active')) return officeBtn.textContent.trim();
          if (homeBtn?.classList.contains('active')) return homeBtn.textContent.trim();

          const checked = form.querySelector('input[type="radio"][name*="location"]:checked');
          if (checked) return (checked.value || '').trim();

          return '';
        }

        function showSuccess(payload) {
          if (sName) sName.textContent = payload.name || '';
          if (sPet) sPet.textContent = payload.pet ? `Pet type: ${payload.pet}` : '';

          // Pet name (if provided in details or if there's a pet name field)
          if (sPetName) {
            const petNameField = form.querySelector('[name="pet_name"]');
            if (petNameField && petNameField.value.trim()) {
              sPetName.textContent = `Pet name: ${petNameField.value.trim()}`;
            } else {
              sPetName.style.display = 'none';
            }
          }

          // Weight (only for dogs)
          if (sWeight) {
            const weightField = document.getElementById('form-dog-weight');
            if (payload.pet === 'Dog' && weightField && weightField.value) {
              sWeight.textContent = `Weight: ${weightField.value} lbs`;
              sWeight.style.display = 'block';
            } else {
              sWeight.style.display = 'none';
            }
          }

          // Aggressive (only for dogs)
          if (sAggressive) {
            const aggressiveField = document.getElementById('form-aggressive');
            if (payload.pet === 'Dog' && aggressiveField) {
              sAggressive.textContent = `Aggressive: ${aggressiveField.checked ? 'Yes' : 'No'}`;
              sAggressive.style.display = 'block';
            } else {
              sAggressive.style.display = 'none';
            }
          }

          if (sDate) sDate.textContent = payload.date ? `Preferred date: ${payload.date}` : '';

          // Calculate and display price
          if (sPrice) {
            const weightField = document.getElementById('form-dog-weight');
            const aggressiveField = document.getElementById('form-aggressive');
            const locationValue = payload.location || '';
            const isOffice = locationValue.toLowerCase().includes('office');
            const isMobile = locationValue.toLowerCase().includes('mobile') || locationValue.toLowerCase().includes('home');

            let price = 0;

            if (payload.pet === 'Dog' && weightField && weightField.value) {
              const weight = parseFloat(weightField.value);
              if (weight < 20) {
                price = isOffice ? 499 : 599;
              } else if (weight < 40) {
                price = isOffice ? 599 : 699;
              } else {
                price = isOffice ? 699 : 799;
              }

              if (aggressiveField && aggressiveField.checked) {
                price += 50;
              }
            } else if (payload.pet === 'Cat') {
              price = isOffice ? 599 : 699;
            }

            if (price > 0) {
              sPrice.innerHTML = `Estimated price: <span style="color: #22d3ee;">$${price}</span>`;
              sPrice.style.display = 'block';
            } else {
              sPrice.style.display = 'none';
            }
          }

          formSuccess.classList.remove('hidden');
          if (formWrapper) formWrapper.classList.add('hidden');

          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function resetToForm() {
          form.reset();
          formSuccess.classList.add('hidden');
          if (formWrapper) formWrapper.classList.remove('hidden');
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        form.addEventListener('submit', function (e) {
          e.preventDefault();
          e.stopPropagation();

          // КЛЮЧЕВОЕ: success показываем только если форма валидна
          // (required, type="email", pattern и т.п.) [web:1376]
          if (!form.reportValidity()) return;

          const payload = {
            name: valByNames(['name', 'your_name', 'full_name', 'form-name']),
            pet: selectedTextByNames(['pet_type', 'pet', 'dog_or_cat', 'dogOrCat']),
            location: getLocationLabel(),
            date: valByNames(['preferred_date', 'preferred-date', 'date', 'preferredDate']),
          };

          showSuccess(payload);
        });

        if (anotherBtn) {
          anotherBtn.addEventListener('click', resetToForm);
        }
      })();
  
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
      

<noscript className="">
    &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-W5KFKGLQ" height="0"
    width="0"
    style={{display: 'none', visibility: 'hidden'}}&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/iframe&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;
  </noscript>


<div className="fixed -z-50 overflow-hidden w-full h-full top-0 right-0 bottom-0 left-0" style={{background: '#e8eaf0'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #dde1ec 0%, #e8ecf3 20%, #f5f0f0 40%, #faf8f6 55%, #f0eef5 75%, #e4e3ef 100%)'}}>
</div>
<div className="absolute top-[-5%] left-[-10%] h-[700px] w-[900px] rounded-full opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse, rgba(200, 210, 230, 0.8) 0%, transparent 70%)', filter: 'blur(80px)'}}>
</div>
<div className="pointer-events-none opacity-50 w-[700px] h-[600px] rounded-full absolute top-[-8%] right-[-5%]" style={{background: 'radial-gradient(ellipse, rgba(195, 200, 225, 0.7) 0%, transparent 65%)', filter: 'blur(90px)'}}>
</div>
<div className="pointer-events-none opacity-80 w-[900px] h-[800px] rounded-full absolute top-[25%] left-[20%]" style={{background: 'radial-gradient(ellipse, rgba(255, 253, 250, 0.95) 0%, rgba(250, 245, 240, 0.6) 40%, transparent 70%)', filter: 'blur(60px)'}}>
</div>
<div className="pointer-events-none opacity-40 w-[600px] h-[500px] rounded-full absolute top-[30%] right-[10%]" style={{background: 'radial-gradient(ellipse, rgba(245, 225, 215, 0.6) 0%, transparent 65%)', filter: 'blur(80px)'}}>
</div>
<div className="pointer-events-none opacity-50 w-[700px] h-[600px] rounded-full absolute bottom-[5%] left-[30%]" style={{background: 'radial-gradient(ellipse, rgba(200, 185, 230, 0.7) 0%, rgba(190, 175, 225, 0.4) 40%, transparent 70%)', filter: 'blur(100px)'}}>
</div>
<div className="pointer-events-none opacity-45 w-[600px] h-[500px] rounded-full absolute right-[15%] bottom-[0%]" style={{background: 'radial-gradient(ellipse, rgba(195, 180, 235, 0.6) 0%, transparent 65%)', filter: 'blur(90px)'}}>
</div>
<div className="pointer-events-none opacity-40 w-[600px] h-[500px] rounded-full absolute bottom-[-5%] left-[-5%]" style={{background: 'radial-gradient(ellipse, rgba(200, 210, 228, 0.6) 0%, transparent 60%)', filter: 'blur(80px)'}}>
</div>
<div className="pointer-events-none opacity-30 w-[500px] h-[400px] rounded-full absolute top-[40%] left-[5%]" style={{background: 'radial-gradient(ellipse, rgba(240, 225, 210, 0.5) 0%, transparent 60%)', filter: 'blur(70px)'}}>
</div>
<div className="opacity-[0.02] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}>
</div>
</div>

<div className="z-50 text-xs font-medium text-white text-center bg-slate-900 pt-2.5 pr-4 pb-2.5 pl-4 relative">
<div className="flex gap-2 items-center justify-center">
<span className="text-[10px] uppercase font-semibold text-white/90 tracking-wide bg-white/10 rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">
          New Clients
        </span>
<span>
          Get
          <span className="underline underline-offset-2 decoration-1 decoration-white/40">
            $50 OFF
          </span>
      your first dental cleaning
      </span>
</div>
</div>

<nav className="sticky transition-all duration-300 bg-white/70 w-full z-40 border-slate-200/50 border-b top-0 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<img alt="Urban Pet Dental Logo" className="group-hover:scale-105 transition-transform w-16 h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/020d70f3-98d0-4d46-877f-1f41bd095bd1_320w.png"/>
</a>

<div className="hidden md:flex items-center gap-3">
<div className="flex items-center gap-8 text-sm font-medium text-slate-500 mr-6">
<a className="transition-colors text-slate-900 hover:text-slate-900" href="#">
            Home
          </a>
<a className="transition-colors hover:text-slate-900" href="#services">
            Services
          </a>
<a className="transition-colors hover:text-slate-900" href="#about">
            About
          </a>
<a className="transition-colors hover:text-slate-900" href="#results">
            Results
          </a>
</div>
<a className="transition-all active:scale-[0.98] hover:bg-slate-800 text-sm font-medium text-white bg-slate-900 rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="#book">
          Book My Pet's Cleaning
        </a>
</div>

<button aria-label="Open menu" className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors text-slate-900 hover:bg-slate-100" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-50 backdrop-blur-sm opacity-0 invisible transition-all duration-300 md:hidden bg-black/50" id="mobile-menu-overlay" style={{pointerEvents: 'none'}}></div>

<div className="fixed top-0 right-0 z-50 h-full w-[280px] shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out md:hidden bg-white" id="mobile-menu-panel">
<div className="flex items-center justify-between p-6 border-b border-slate-100">
<a className="flex items-center gap-2" href="#">
<img alt="Urban Pet Dental Logo" className="h-8 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74bee135-b94d-4413-a132-694447cc2e42_800w.png"/>
<span className="text-sm font-semibold tracking-tight text-slate-900">
            Urban Pet Dental
          </span>
</a>
<button aria-label="Close menu" className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors text-slate-900 hover:bg-slate-100" id="mobile-menu-close">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<nav className="flex flex-col p-6 gap-1">
<a className="mobile-menu-link flex items-center gap-3 text-[15px] transition-colors hover:bg-slate-50 font-medium text-slate-900 rounded-xl pt-3.5 pr-4 pb-3.5 pl-4" href="#" onclick="document.getElementById('mobile-menu-close').click();">
        Home
      </a>
<a className="mobile-menu-link flex items-center gap-3 text-[15px] transition-colors hover:bg-slate-50 font-medium text-slate-600 rounded-xl pt-3.5 pr-4 pb-3.5 pl-4" href="#services" onclick="document.getElementById('mobile-menu-close').click();">
        Services
      </a>
<a className="mobile-menu-link flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-[15px] transition-colors text-slate-600 hover:bg-slate-50" href="#about" onclick="document.getElementById('mobile-menu-close').click();">
        About
      </a>
<a className="mobile-menu-link flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-[15px] transition-colors text-slate-600 hover:bg-slate-50" href="#results" onclick="document.getElementById('mobile-menu-close').click();">
        Results
      </a>
<div className="pt-4 mt-2 border-t border-slate-100">
<a className="mobile-menu-link flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-medium transition-all bg-slate-900 text-white hover:bg-slate-800" href="#book" onclick="document.getElementById('mobile-menu-close').click();">
          Book My Pet's Cleaning
        </a>
</div>
</nav>
</div>

<section aria-label="Anesthesia-free pet dental cleaning in NYC" className="overflow-hidden pt-5 pb-20 relative md:pb-32 md:pt-14">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row lg:gap-20 gap-x-0 gap-y-6 items-center" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="lg:w-[55%] flex flex-col z-10 space-y-8 items-start">
<div className="inline-flex text-[11px] uppercase font-bold text-blue-600 tracking-wider bg-blue-50/80 border-blue-100/50 border rounded-full mt-1 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Mobile &amp; In-Office NYC Care
          </div>
<h1 className="leading-[1.05] md:text-[4.5rem] text-4xl font-semibold text-slate-900 tracking-tight">
            Anesthesia-Free Pet Dental Cleanings in NYC
          </h1>
<p className="leading-relaxed text-lg font-light text-slate-500 max-w-lg">
            Gentle, vet-supervised mobile and in-office dental care for dogs and cats
          </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-xl group bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20 hover:shadow-slate-900/30" href="#book">
              Book My Pet's Cleaning
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 transition-all hover:bg-white hover:border-slate-300 text-sm font-medium text-slate-700 bg-white/60 border-slate-200 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm backdrop-blur-md" href="#results">
              See Real Results
            </a>
</div>
<div className="flex pb-7 gap-x-4 gap-y-4 items-center">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-[3px] shadow-sm border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/223805ab-06da-44d6-84be-449c4a285966/320w.jpg"/>
<img alt="User" className="border-[3px] w-10 h-10 object-cover border-white rounded-full shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/9b28edf4-15a0-4643-88b7-7fc127053619/320w.jpg"/>
<img alt="User" className="border-[3px] w-10 h-10 border-white rounded-full shadow-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/411f6e50-f398-4430-a310-e03ccbe331f2/320w.jpg"/>
</div>
<p className="text-sm text-slate-500 font-medium">
              Loved by
              <span className="font-semibold text-slate-900">200+</span>
              NYC pet parents
            </p>
</div>
</div>
<div className="lg:w-[45%] w-full relative">
<div className="relative rounded-[32px] overflow-hidden shadow-2xl ring-1 shadow-slate-200/50 ring-white/50">
<img alt="Vet cleaning dog teeth" className="w-full h-auto object-cover aspect-[4/3.5] scale-[1.01]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf16b35b-7ae7-48ad-8302-576a90bbb922_800w.jpg"/>
<div className="bg-gradient-to-t to-transparent from-slate-900/10 absolute top-0 right-0 bottom-0 left-0 translate-y-3">
</div>
<div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-4 shadow-lg border bg-white/95 border-white/40">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-green-50 text-green-600">
<iconify-icon className="" height="22" icon="solar:shield-check-linear" style={{strokeWidth: '1.5', color: 'rgb(22, 163, 74)'}} width="22"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-bold text-slate-900">
                  100% Safe Procedure
                </p>
<p className="text-xs text-slate-500 font-medium">
                  No anesthesia.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Before and after dental cleaning results" className="pt-24 pb-10 relative" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-slate-900">
            Before and After: Dog &amp; Cat Teeth Cleaning Results
          </h2>
<p className="text-slate-500 mt-3 text-lg font-light">
            Real NYC pets, real transformations - no anesthesia needed. Tap
            any photo to zoom in.
          </p>
</div>
<a className="group flex items-center gap-1 font-semibold text-sm hover:opacity-70 transition-opacity whitespace-nowrap mb-1 text-slate-900" href="#book">
          Book My Pet's Cleaning
          <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="overflow-hidden rounded-[2rem]" id="results-carousel">
<div className="flex transition-transform duration-500 ease-in-out" id="results-track" style={{willChange: 'transform'}}>

<div className="w-full flex-shrink-0 px-2" style={{minWidth: '100%'}}>
<div className="backdrop-blur-sm p-5 rounded-[2rem] shadow-sm border max-w-2xl mx-auto bg-white/80 border-slate-100/50">
<div className="grid grid-cols-2 gap-3">
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Bella — Before" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98cae3ba-f3a4-4051-9dd5-ce5aef08ec3f_800w.jpg">
<img alt="Dog teeth before" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98cae3ba-f3a4-4051-9dd5-ce5aef08ec3f_800w.jpg"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-slate-900/10"></div>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full border bg-slate-900/80 border-white/10">
<span className="text-[10px] font-bold tracking-wide uppercase text-white">
                            Before
                          </span>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Bella — After" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f382e64-1624-4f29-bedd-ca8f1b6a7289_800w.jpg">
<img alt="Dog teeth after" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f382e64-1624-4f29-bedd-ca8f1b6a7289_800w.jpg"/>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm bg-white/90">
<span className="text-[10px] font-bold tracking-wide uppercase text-slate-900">
                            After
                          </span>
</div>
</div>
</div>
<div className="mt-6 px-1">
<h4 className="text-xl font-semibold tracking-tight text-slate-900">
                    Bella
                  </h4>
<p className="text-slate-500 text-sm mt-1 font-medium">
                    Golden Retriever in Brooklyn • 45 min session
                  </p>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 px-2" style={{minWidth: '100%'}}>
<div className="backdrop-blur-sm p-5 rounded-[2rem] shadow-sm border max-w-2xl mx-auto bg-white/80 border-slate-100/50">
<div className="grid grid-cols-2 gap-3">
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Luna — Before" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b7b8493-b372-4e61-a0bb-6c3df6e5b444_800w.jpg">
<img alt="Cat teeth before" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b7b8493-b372-4e61-a0bb-6c3df6e5b444_800w.jpg"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-slate-900/10"></div>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full border bg-slate-900/80 border-white/10">
<span className="text-[10px] font-bold tracking-wide uppercase text-white">
                            Before
                          </span>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Luna — After" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d02308d1-777e-4135-bb04-177e476f3745_800w.jpg">
<img alt="Cat teeth after" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d02308d1-777e-4135-bb04-177e476f3745_800w.jpg"/>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm bg-white/90">
<span className="text-[10px] font-bold tracking-wide uppercase text-slate-900">
                            After
                          </span>
</div>
</div>
</div>
<div className="mt-6 px-1">
<h4 className="text-xl font-semibold tracking-tight text-slate-900">
                    Luna
                  </h4>
<p className="text-slate-500 text-sm mt-1 font-medium">
                    Siamese Cat in Queens • Plaque removal
                  </p>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 px-2" style={{minWidth: '100%'}}>
<div className="backdrop-blur-sm p-5 rounded-[2rem] shadow-sm border max-w-2xl mx-auto bg-white/80 border-slate-100/50">
<div className="grid grid-cols-2 gap-3">
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Max — Before" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/add7054a-95d6-4451-8a87-60f3ed6e7366_800w.jpg">
<img alt="Dog teeth before" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/add7054a-95d6-4451-8a87-60f3ed6e7366_800w.jpg" style={{filter: 'hue-rotate(15deg) brightness(1.05)'}}/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-slate-900/10"></div>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full border bg-slate-900/80 border-white/10">
<span className="text-[10px] font-bold tracking-wide uppercase text-white">
                            Before
                          </span>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Max — After" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6560a19e-fd5a-4fb6-b87e-ef96b5b531d6_800w.jpg">
<img alt="Dog teeth after" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6560a19e-fd5a-4fb6-b87e-ef96b5b531d6_800w.jpg" style={{filter: 'hue-rotate(15deg) brightness(1.05)'}}/>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm bg-white/90">
<span className="text-[10px] font-bold tracking-wide uppercase text-slate-900">
                            After
                          </span>
</div>
</div>
</div>
<div className="mt-6 px-1">
<h4 className="text-xl font-semibold tracking-tight text-slate-900">
                    Max
                  </h4>
<p className="text-slate-500 text-sm mt-1 font-medium">
                    German Shepherd in Manhattan • Deep cleaning
                  </p>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 px-2" style={{minWidth: '100%'}}>
<div className="backdrop-blur-sm p-5 rounded-[2rem] shadow-sm border max-w-2xl mx-auto bg-white/80 border-slate-100/50">
<div className="grid grid-cols-2 gap-3">
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Mochi — Before" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6299c7f8-c693-4ca1-989a-6278dfe817a3_800w.jpg">
<img alt="Cat teeth before" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6299c7f8-c693-4ca1-989a-6278dfe817a3_800w.jpg" style={{filter: 'hue-rotate(-10deg) saturate(1.1)'}}/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-slate-900/10"></div>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full border bg-slate-900/80 border-white/10">
<span className="text-[10px] font-bold tracking-wide uppercase text-white">
                            Before
                          </span>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-zoom-in" data-lightbox-label="Mochi — After" data-lightbox-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9901cb66-44ae-40f1-8ba4-60699ac386f4_800w.jpg">
<img alt="Cat teeth after" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9901cb66-44ae-40f1-8ba4-60699ac386f4_800w.jpg" style={{filter: 'hue-rotate(-10deg) saturate(1.1)'}}/>
<div className="absolute bottom-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm bg-white/90">
<span className="text-[10px] font-bold tracking-wide uppercase text-slate-900">
                            After
                          </span>
</div>
</div>
</div>
<div className="mt-6 px-1">
<h4 className="text-xl font-semibold tracking-tight text-slate-900">
                    Mochi
                  </h4>
<p className="text-slate-500 text-sm mt-1 font-medium">
                    Persian Cat in Bronx • Tartar removal
                  </p>
</div>
</div>
</div>
</div>
</div>
<button aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10 w-12 h-12 rounded-full backdrop-blur-md border shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all bg-white/90 border-slate-200 text-slate-700 hover:bg-white" id="carousel-prev">
<iconify-icon height="22" icon="solar:alt-arrow-left-linear" width="22"></iconify-icon>
</button>
<button aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10 w-12 h-12 rounded-full backdrop-blur-md border shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all bg-white/90 border-slate-200 text-slate-700 hover:bg-white" id="carousel-next">
<iconify-icon height="22" icon="solar:alt-arrow-right-linear" width="22"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 mt-8" id="carousel-dots">
<button aria-label="Go to slide 1" className="carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-900" data-index="0"></button>
<button aria-label="Go to slide 2" className="carousel-dot w-2 h-2 rounded-full transition-all duration-300 bg-slate-300 hover:bg-slate-400" data-index="1"></button>
<button aria-label="Go to slide 3" className="carousel-dot w-2 h-2 rounded-full transition-all duration-300 bg-slate-300 hover:bg-slate-400" data-index="2"></button>
<button aria-label="Go to slide 4" className="carousel-dot w-2 h-2 rounded-full transition-all duration-300 bg-slate-300 hover:bg-slate-400" data-index="3"></button>
</div>
</div>
</div>
</section>

<section aria-label="Benefits of our pet dental service" className="pt-8 pb-4 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">
<div className="backdrop-blur-sm rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 bg-white/80 border-slate-100/60 hover:shadow-slate-200/40">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-blue-50 border-blue-100">
<iconify-icon className="text-blue-600" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-slate-900">
            Safe for NYC Pets
          </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
            No anesthesia means no risk of side effects. Especially ideal for
            senior pets or those with health conditions.
          </p>
</div>
<div className="backdrop-blur-sm rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 bg-white/80 border-slate-100/60 hover:shadow-slate-200/40">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-purple-50 border-purple-100">
<iconify-icon className="text-purple-500" height="24" icon="solar:heart-shine-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-slate-900">
            Stress-Free Care
          </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
            Our trained specialists use gentle swaddling to keep your pet calm
            and relaxed — no sedation needed.
          </p>
</div>
<div className="backdrop-blur-sm rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 bg-white/80 border-slate-100/60 hover:shadow-slate-200/40">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-emerald-500" height="24" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-slate-900">
            Mobile to All Boroughs
          </h3>
<p className="text-base text-slate-500 leading-relaxed font-light">
            Skip the stressful taxi ride. We bring everything to your door
            across Manhattan, Brooklyn, Queens, Bronx &amp; Staten Island.
          </p>
</div>
</div>
</div>
</section>

<section aria-label="How our dental cleaning process works" className="pt-16 pb-2 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="backdrop-blur-sm rounded-[2.5rem] p-8 md:p-14 lg:p-20 border bg-white/50 border-slate-100/60">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="flex flex-col">
<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-[1.15] mb-16 text-slate-900">
              How Our Non-Anesthetic
              <br/>
<span className="font-light text-slate-400">
                  Dental Cleaning Works
                </span>
</h2>
<div className="space-y-12">
<div className="flex items-start gap-5">
<span className="text-6xl md:text-7xl font-bold leading-none tracking-tighter select-none shrink-0 text-slate-200/80" style={{fontVariantNumeric: 'tabular-nums'}}>
                    01
                  </span>
<div className="pt-2">
<h4 className="text-lg font-medium tracking-tight mb-2 text-slate-900">
                    Pick a Time That Works for You
                  </h4>
<p className="text-base text-slate-500 font-light leading-relaxed max-w-md">
                    Choose a date online in under 60 seconds. We serve dogs
                    and cats across all five NYC boroughs.
                  </p>
</div>
</div>
<div className="flex items-start gap-5">
<span className="text-6xl md:text-7xl font-bold leading-none tracking-tighter select-none shrink-0 text-slate-200/80" style={{fontVariantNumeric: 'tabular-nums'}}>
                    02
                  </span>
<div className="pt-2">
<h4 className="text-lg font-medium tracking-tight mb-2 text-slate-900">
                    Your Place or Ours
                  </h4>
<p className="text-base text-slate-500 font-light leading-relaxed max-w-md">
                    We'll come to your home in any borough, or welcome you at
                    our office - your pet's comfort comes first.
                  </p>
</div>
</div>
<div className="flex items-start gap-5">
<span className="text-6xl md:text-7xl font-bold leading-none tracking-tighter select-none shrink-0 text-slate-200/80" style={{fontVariantNumeric: 'tabular-nums'}}>
                    03
                  </span>
<div className="pt-2">
<h4 className="text-lg font-medium tracking-tight mb-2 text-slate-900">
                    Fresh Breath, Happy Pet
                  </h4>
<p className="text-base text-slate-500 font-light leading-relaxed max-w-md">
                    Your pet goes home the same day with sparkling teeth and
                    fresh breath -
                    <span className="font-semibold italic text-slate-700">
                        no anesthesia, no recovery time
                      </span>
                    .
                  </p>
</div>
</div>
</div>
<div className="mt-14">
<a className="inline-flex items-center justify-center gap-2 transition-all group text-sm font-medium bg-[#00a3d7] border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm hover:bg-slate-50 hover:border-slate-300 text-gray-50 border-slate-200" href="#book">
                Email for a free quote
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-slate-100">
<img alt="Happy dog with toy" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f6bec2c-d158-4a60-b87b-1fbd5bceea50_800w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Pricing and dental services" className="border-t pt-10 pb-10 relative border-slate-200/30" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
          NYC Pricing &amp; Dental Services
        </h2>
<p className="text-slate-500 text-lg leading-relaxed">
          Honest, upfront pricing for anesthesia-free dental care in New York.
          No surprises on your bill.
        </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

<div className="md:p-12 flex flex-col hover:shadow-xl transition-all duration-300 hover:shadow-slate-200/40 bg-white/80 h-full border-slate-100/50 border rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 shadow-sm backdrop-blur-sm">
<div className="flex gap-5 mb-10 gap-x-5 gap-y-5 items-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg bg-slate-900 text-white shadow-slate-900/10">
<iconify-icon className="" height="32" icon="solar:hospital-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                Office Visit
              </h3>
<p className="text-slate-500 text-sm font-medium">
                Our Manhattan Facility
              </p>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-3">
<span className="text-[3.5rem] leading-none font-bold tracking-tight text-slate-900">🐕</span>
<span className="text-xs font-medium uppercase tracking-wider text-[#22d3ee]">Dog</span>
</div>
<div className="text-sm text-slate-500 font-light pl-2">
              From <span className="font-semibold text-slate-900">$499</span> / session
            </div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-3">
<span className="text-[3.5rem] leading-none font-bold tracking-tight text-slate-900">🐱</span>
<span className="text-xs font-medium uppercase tracking-wider text-[#22d3ee]">Cat</span>
</div>
<div className="text-sm text-slate-500 font-light pl-2">
<span className="font-semibold text-slate-900">$599</span> / session
            </div>
</div>
<p className="leading-relaxed text-base text-slate-500 mb-10">Professional anesthesia-free cleaning at our
            well-equipped New York facility. A calm environment designed for optimal dental care for all breeds.
            What’s included in the cleaning:</p>
<div className="text-sm text-slate-500 mb-10">
<p className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-3">The procedure includes:</p>
<ul className="space-y-2">
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Oral examination</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Manual and/or ultrasonic tartar removal (without anesthesia)</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Cleaning between teeth</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Teeth polishing</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Gum treatment with professional solutions</span>
</li>
</ul>
</div>
<div className="space-y-0 mb-10 flex-1 border-t border-slate-100">
<details className="group">
<summary className="flex items-center justify-between py-5 cursor-pointer font-medium transition-colors text-slate-900 hover:text-slate-700">
                Do you clean large dog teeth?
                <iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-500 leading-relaxed">
                Yes, we handle all breeds including large dogs. Our
                specialists are trained in handling techniques safe for larger
                pets.
              </div>
</details>
<div className="h-px w-full bg-slate-100"></div>
<details className="group">
<summary className="flex cursor-pointer transition-colors font-medium pt-5 pb-5 items-center justify-between hover:text-slate-700 text-slate-900">
                Is it safe for anxious pets?
                <iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-slate-500 leading-relaxed">
                Absolutely. We use a gentle swaddling technique. If a pet is
                too stressed, we stop immediately. Safety is our priority.
              </div>
</details>
<div className="h-px w-full bg-slate-100"></div>
</div>
<a className="block transition-colors hover:bg-slate-100 text-base font-semibold text-slate-900 text-center bg-slate-50 w-full border-slate-950/50 border-2 rounded-2xl pt-5 pb-5" href="#book">
            Book an Office Visit
          </a>
<p className="mt-5 text-xs italic leading-relaxed text-slate-400">
            Starting prices. Final cost after consultation depends on:
            <br/>
              • Dog size &amp; condition
            <br/>
              • Location (Manhattan/Brooklyn/Queens, etc.)
            <br/>
              • Extractions/treatments needed
            <br/>
<br/>
              Exact price given after form submission.
          </p>
</div>

<div className="rounded-[2.5rem] p-10 md:p-12 shadow-2xl flex flex-col h-full relative overflow-hidden ring-1 bg-slate-950 ring-slate-800">
<div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none -mt-32 -mr-32 bg-blue-900/20">
</div>
<div className="z-10 flex flex-col h-full relative">
<div className="flex items-center gap-5 mb-10">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-white text-slate-900">
<iconify-icon className="" height="32" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-white">
                  Mobile In-Home Visit
                </h3>
<p className="text-sm font-medium text-slate-400">
                  We come to your NYC home
                </p>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-3">
<span className="text-[3.5rem] leading-none font-bold tracking-tight text-white">🐕</span>
<span className="text-xs font-medium uppercase tracking-wider text-[#22d3ee]">Dog</span>
</div>
<div className="text-sm text-slate-400 font-light pl-2">
                From <span className="font-semibold text-white">$599</span> / session
              </div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-3">
<span className="text-[3.5rem] leading-none font-bold tracking-tight text-white">🐱</span>
<span className="text-xs font-medium uppercase tracking-wider text-[#22d3ee]">Cat</span>
</div>
<div className="text-sm text-slate-400 font-light pl-2">
<span className="font-semibold text-white">$699</span> / session
              </div>
</div>
<p className="leading-relaxed text-base text-slate-400 mb-10">
              Convenient mobile pet dental cleaning in New York. Ideal for
              anxious dogs/cats or busy owners. We bring all equipment to you.
            </p>
<div className="text-sm text-slate-500 mb-10">
<p className="uppercase text-xs font-semibold text-slate-200 tracking-widest mb-3">The procedure includes:</p>
<ul className="space-y-2">
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Oral examination</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Manual and/or ultrasonic tartar removal (without anesthesia)</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Cleaning between teeth</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Teeth polishing</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 text-blue-600 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 211, 238)'}} width="16"></iconify-icon>
<span className="text-sm text-slate-500 font-light">Gum treatment with professional solutions</span>
</li>
</ul>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-center gap-3.5 font-medium text-slate-300">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                No travel stress in NYC traffic
              </li>
<li className="flex items-center gap-3.5 font-medium text-slate-300">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                Familiar home environment
              </li>
<li className="flex items-center gap-3.5 font-medium text-slate-300">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                Full professional equipment
              </li>
<li className="flex items-center gap-3.5 font-medium text-slate-300">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                Flexible NYC scheduling
              </li>
</ul>
<a className="block hover:bg-blue-500 transition-all shadow-blue-900/30 text-base font-semibold text-white text-center bg-blue-600 w-full rounded-2xl pt-5 pb-5 shadow-lg" href="#book">
              Book a Home Visit
            </a>
<p className="mt-5 text-xs text-slate-500/70 italic leading-relaxed">
              Starting prices. Final cost after consultation depends on:
              <br/>
                • Dog size &amp; condition
              <br/>
                • Location (Manhattan/Brooklyn/Queens, etc.)
              <br/>
                • Extractions/treatments needed
              <br/>
<br/>
                Exact price given after form submission.
            </p>
</div>
</div>
</div>
</div>
</section>

<section aria-label="About Urban Pet Dental" className="border-t pt-10 pb-10 border-slate-200/30" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="md:p-12 lg:p-20 overflow-hidden bg-white/80 border-slate-100/60 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-sm backdrop-blur-sm">
<div className="grid lg:grid-cols-2 lg:gap-24 gap-x-12 gap-y-12 items-center relative z-10">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50">
<img alt="Urban Pet Dental Team" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4001c6b-ba38-49a9-bfba-04bd68a4381a_800w.png"/>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h2 className="leading-[1.1] md:text-4xl lg:text-3xl text-3xl font-medium text-slate-900 tracking-tight">
              About Us
            </h2>
<div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
<p className="">
                We are specialists with over 4 years of hands-on experience in
                anesthesia-free dog and cat teeth cleaning. Our team loves
                animals and is trained to work gently with anxious, senior,
                and large-breed pets.
              </p>
<p className="">
                Many New York pet owners avoid dental cleanings due to
                anesthesia risks. Our mission is to provide NYC dogs and cats
                with thorough, non-anesthetic dental care in a calm,
                low-stress setting.
              </p>
<p className="">
                Urban Pet Dental combines professional dental expertise with
                genuine compassion for pets. When we examine your pet, we
                treat them like our own and provide clear photos plus detailed
                recommendations for your veterinarian.
              </p>
</div>
<div className="flex gap-8 pt-4 gap-x-8 gap-y-8 items-center">
<div className="flex gap-4 items-center">
<img alt="Ira - Co-Founder" className="w-12 h-12 rounded-full shadow-md object-cover" src="https://urbanpetdental.com/photos/photo_2026-03-02_22-12-36.jpg"/>
<div>
<div className="font-semibold leading-tight text-slate-900">Ira</div>
<div className="text-sm font-medium text-slate-400">Co-Founder</div>
</div>
</div>
<div className="flex gap-4 items-center">
<img alt="Oleg - Co-Founder" className="w-12 h-12 rounded-full shadow-md object-cover" src="https://urbanpetdental.com/photos/photo_2026-03-02_22-34-43.jpg"/>
<div>
<div className="font-semibold leading-tight text-slate-900">Oleg</div>
<div className="text-sm font-medium text-slate-400">Co-Founder</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Customer testimonials" className="pt-10 pb-14 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-slate-900">
          What real pet parents are saying
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="rounded-2xl shadow-sm border overflow-hidden bg-white/80 border-slate-100/60">
<div className="pt-11 pr-11 pb-11 pl-11">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
<img alt="Dee with their pet" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/105266b6-6dd8-4908-bac7-cfaad33ca8e7_1600w.jpg"/>
</div>
<h3 className="text-base font-medium tracking-tight mt-4 text-slate-900">
              Stress-Free Service
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mt-2 font-light">
              "My dog usually hates any kind of vet visit, but this cleaning felt surprisingly calm. She sat in my lap
              afterwards like nothing happened and her breath actually smelled fresh"
            </p>
<div className="mt-4 pt-4 border-t border-slate-100">
<p className="text-sm font-medium text-slate-900">- Megan</p>
</div>
</div>
</div>

<div className="rounded-2xl shadow-sm border overflow-hidden bg-white/80 border-slate-100/60">
<div className="pt-11 pr-11 pb-11 pl-11">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
<img alt="Alexandra with their pet" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55df6f73-8a59-4b1e-a5c2-7f4f13b5bb8f_800w.png"/>
</div>
<h3 className="text-base font-medium tracking-tight mt-4 text-slate-900">
              Kind and Professional
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mt-2 font-light">
              "I was nervous bringing my older cat in, but the team spoke softly, moved slowly, and explained every
              step. You can tell they really like animals, not just teeth."
            </p>
<div className="mt-4 pt-4 border-t border-slate-100">
<p className="text-sm font-medium text-slate-900">- Priya</p>
</div>
</div>
</div>

<div className="rounded-2xl shadow-sm border overflow-hidden bg-white/80 border-slate-100/60">
<div className="pt-11 pr-11 pb-11 pl-11">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
<img alt="Julia with their pet" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43b2cf5b-78eb-4cdb-a1e2-8581cfaf6c23_1600w.png"/>
</div>
<h3 className="text-base font-medium tracking-tight mt-4 text-slate-900">
              Gentle Care from Ira
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mt-2 font-light">
              "Our little guy is very suspicious of new people, and I was sure he’d fight the whole time. Ira won him
              over in minutes - she handled him so gently, kept talking to him, and somehow still managed to clean every
              tooth. You can see she genuinely cares about the animals, not just the appointment."
            </p>
<div className="mt-4 pt-4 border-t border-slate-100">
<p className="text-sm font-medium text-slate-900">- Luis</p>
</div>
</div>
</div>

<div className="rounded-2xl shadow-sm border overflow-hidden bg-white/80 border-slate-100/60">
<div className="pt-11 pr-11 pb-11 pl-11">
<div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
<img alt="Mark with their pet" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b45454c8-3b96-4efa-8188-9f6ef1f311cb_800w.png"/>
</div>
<h3 className="text-base font-medium tracking-tight mt-4 text-slate-900">
              Results You Can See
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mt-2 font-light">
              "I didn’t realize how bad the tartar was until I saw the before and after. The yellow stains are gone, the
              gum line looks healthier, and my dog is finally chewing without hesitation."
            </p>
<div className="mt-4 pt-4 border-t border-slate-100">
<p className="text-sm font-medium text-slate-900">- Daniel</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Get in touch with us" className="pt-20 pb-20 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 border rounded-full px-3 py-1.5 mb-6 shadow-sm backdrop-blur-sm bg-blue-50/80 border-blue-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-[11px] uppercase font-semibold tracking-wider text-blue-600">
            Let's Chat
          </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-5 text-slate-900">
        Questions? We're Here to Help
      </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
        Reach out anytime - we're happy to talk about your pet's dental needs,
        answer questions, or schedule a consultation.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center gap-2 transition-all group hover:bg-slate-800 shadow-slate-900/20 hover:shadow-slate-900/30 text-sm font-medium text-white bg-slate-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="/tel:+12163908027">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
          Call for Pricing
        </a>
<a className="inline-flex items-center justify-center gap-2 backdrop-blur-md border px-8 py-4 rounded-full text-sm font-medium transition-all shadow-sm bg-white/60 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300" href="mailto:info@urbanpetdental.com">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
          Email for Pricing
        </a>
</div>
<div className="mt-12 pt-10 border-t border-slate-200/50">
<p className="text-sm text-slate-500 mb-4 font-medium">
          Prefer to book online?
        </p>
<a className="inline-flex items-center gap-2 font-medium text-sm hover:opacity-70 transition-opacity group text-slate-900" href="#book">
          Jump to Booking Form
          <iconify-icon className="group-hover:translate-y-0.5 transition-transform" height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section aria-label="Book a pet dental cleaning appointment" className="border-slate-200/30 border-t pt-10 pb-10" id="book">
<div className="md:px-6 max-w-[1200px] mr-auto ml-auto pr-4 pl-4">
<div className="md:p-14 lg:p-16 shadow-slate-200/40 bg-white/85 border-slate-100/60 border rounded-[40px] pt-8 pr-8 pb-8 pl-8 shadow-lg backdrop-blur-xl">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div className="flex flex-col h-full">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-4 text-slate-900">
              Get Your Pet on the Schedule
            </h2>
<p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
              Fill out this quick form and we'll confirm your pet's
              appointment within 15 minutes. We serve all five boroughs.
            </p>
<div className="space-y-8 mb-12">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 bg-blue-50 border-blue-100 text-blue-600">
<iconify-icon height="22" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900">
                    Service Area
                  </h4>
<p className="text-slate-500 text-sm mt-0.5 leading-relaxed max-w-[250px]">
                    Manhattan, Brooklyn, Queens, Bronx, Staten Island, etc.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 bg-blue-50 border-blue-100 text-blue-600">
<iconify-icon height="22" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900">Phone</h4>
<p className="text-slate-500 text-sm mt-0.5">(216) 390-8027</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 bg-blue-50 border-blue-100 text-blue-600">
<iconify-icon height="22" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900">Email</h4>
<p className="text-slate-500 text-sm mt-0.5">
                    info@urbanpetdental.com
                  </p>
</div>
</div>
</div>
<div className="mt-auto"></div>
</div>
<div className="">
<div className="" id="form-wrapper">
<form className="space-y-6" id="booking-form" novalidate="">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900" htmlFor="form-name">
                        Your Name
                      </label>
<input className="placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all text-sm font-medium text-slate-900 bg-slate-50/50 w-full h-12 border-slate-200 border rounded-lg pr-4 pl-4" id="form-name" name="name" placeholder="Sarah Johnson" required="" type="text"/>
<div className="form-error-msg" id="err-name">
                      We need your name to confirm the booking
                    </div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase font-semibold tracking-widest text-slate-900" htmlFor="form-phone">
                        Phone
                      </label>
<input className="w-full h-12 px-4 rounded-lg border placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all text-sm font-medium border-slate-200 bg-slate-50/50 text-slate-900" id="form-phone" name="phone" placeholder="(212) 555-1234" required="" type="tel"/>
<div className="form-error-msg" id="err-phone">
                      Try a format like (212) 555-1234
                    </div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900" htmlFor="form-email">
                      Email (for appointment details)
                    </label>
<input className="w-full h-12 px-4 rounded-lg border placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all text-sm font-medium border-slate-200 bg-slate-50/50 text-slate-900" id="form-email" name="email" placeholder="sarah@email.com" required="" type="email"/>
<div className="form-error-msg" id="err-email">
                    Double-check your email — we'll send confirmation here
                  </div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5 relative">
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900" htmlFor="form-pet-type">
                        Dog or cat?
                      </label>
<select className="w-full h-12 px-4 rounded-lg border text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white cursor-pointer font-medium border-slate-200 bg-slate-50/50 text-slate-900" id="form-pet-type" name="pet_type" required="">
<option value="">Choose one...</option>
<option value="Dog">Dog</option>
<option value="Cat">Cat</option>
</select>
<iconify-icon className="absolute right-4 top-[34px] pointer-events-none text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
<div className="form-error-msg" id="err-pet-type">
                      Let us know if we're seeing a dog or cat
                    </div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900" htmlFor="form-date">
                        Preferred Date
                      </label>
<div className="relative">
<input className="w-full h-12 px-4 pr-10 rounded-lg border placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all text-sm font-medium appearance-none border-slate-200 bg-slate-50/50 text-slate-900" id="form-date" min="2026-03-27" name="date" required="" type="date"/>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<div className="form-error-msg" id="err-date">
                      Pick a date — we'll confirm availability by email
                    </div>
</div>
</div>

<div className="space-y-1.5" id="weight-section" style={{display: 'none'}}>
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900" htmlFor="form-dog-weight">
                    Dog's weight (lbs)
                  </label>
<input className="w-full h-12 px-4 rounded-lg border placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all text-sm font-medium border-slate-200 bg-slate-50/50 text-slate-900" id="form-dog-weight" max="200" min="1" name="dog_weight" placeholder="e.g. 25" type="number"/>

<div className="flex items-center gap-2 pt-2">
<input className="w-4 h-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-500" id="form-aggressive" name="aggressive" type="checkbox"/>
<label className="text-sm text-slate-600 cursor-pointer" htmlFor="form-aggressive">My dog can be aggressive — +$50</label>
</div>

<div className="text-sm text-slate-600 pt-1" id="price-estimate" style={{display: 'none'}}>
                    Estimated price: <span className="font-semibold" id="price-office" style={{color: '#22d3ee'}}></span>
                    (Office) / <span className="font-semibold" id="price-mobile" style={{color: '#22d3ee'}}></span> (Mobile)
                  </div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900">
                      Location
                    </label>
<input id="form-location" name="location" type="hidden" value="NYC Office ($499)"/>
<div className="grid grid-cols-2 gap-3 pt-1">
<button className="location-btn location-btn-office active flex transition-all text-left w-full border rounded-xl pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3 items-center hover:border-slate-300 bg-white border-slate-200" id="loc-btn-office" style={{borderColor: 'rgb(37, 99, 235)', boxShadow: 'rgb(37, 99, 235) 0px 0px 0px 1px', background: 'rgb(248, 250, 252)'}} type="button">
<div className="radio-dot" style={{borderColor: 'rgb(37, 99, 235)'}}><div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb'}}></div></div>
<div>
<div className="loc-label leading-tight text-xs font-semibold text-slate-700">
                            Visit Our NYC Office
                          </div>
</div>
</button>
<button className="location-btn location-btn-mobile w-full py-4 px-4 border rounded-xl text-left flex items-center gap-3 transition-all border-slate-200 bg-white" id="loc-btn-mobile" style={{borderColor: 'rgb(226, 232, 240)', boxShadow: 'none', background: 'rgb(255, 255, 255)'}} type="button">
<div className="radio-dot" style={{borderColor: 'rgb(203, 213, 225)'}}></div>
<div>
<div className="loc-label leading-tight text-xs font-semibold text-slate-700" style={{color: 'rgb(51, 65, 85)'}}>
                            Come to My Home
                          </div>
</div>
</button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase tracking-widest text-slate-900" htmlFor="form-details">
                      Tell us about your pet
                    </label>
<textarea className="placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all resize-none text-sm font-medium text-slate-900 bg-slate-50/50 w-full border-slate-200 border rounded-lg pt-4 pr-4 pb-4 pl-4" id="form-details" name="details" placeholder="Breed, age, any dental concerns or nervousness..." rows="4"></textarea>
</div>
<div className="hidden border rounded-xl px-5 py-4 text-sm font-medium items-center gap-3 bg-red-50 border-red-200 text-red-700" id="form-global-error">
<iconify-icon className="text-red-500 shrink-0" height="20" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<span id="form-global-error-text">
                      Hmm, something went wrong on our end. Please try again, or
                      call us at (216) 390-8027.
                    </span>
</div>
<div className="pt-2">
<button className="transition-all flex group hover:bg-slate-800 shadow-slate-900/10 cursor-pointer font-semibold text-white bg-slate-900 w-full rounded-lg pt-4 pb-4 shadow-xl gap-x-2 gap-y-2 items-center justify-center" id="submit-btn" role="button" type="submit">
<span className="cursor-pointer" id="submit-btn-text">
                        Book My Pet's Cleaning
                      </span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" id="submit-btn-arrow" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
<span className="spinner hidden" id="submit-btn-spinner"></span>
</button>
<p className="text-[11px] font-medium text-center mt-4 text-slate-400"></p>
</div>
</form>
</div>
<div className="hidden" id="form-success">
<div className="text-center py-10 fade-in-up">
<div className="w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-6 bg-green-50 border-green-200">
<iconify-icon className="text-green-500" height="40" icon="solar:check-circle-bold" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-slate-900">
                  Thanks! Lead sent to NYC team. We'll reply within 15 minutes 🦷
                </h3>
<p className="text-slate-500 text-base max-w-sm mx-auto leading-relaxed">
                  Your booking request has been instantly sent to our team.
                  Check your inbox for a confirmation summary.
                </p>
<div className="mt-8 p-5 rounded-2xl border text-left max-w-sm mx-auto bg-slate-50 border-slate-100">
<div className="text-xs font-semibold uppercase tracking-widest mb-3 text-slate-400">
                    Appointment Summary
                  </div>
<div className="text-sm font-medium mb-1 text-slate-700" id="summary-name"></div>
<div className="text-sm text-slate-500 mb-1" id="summary-pet"></div>
<div className="text-sm text-slate-500 mb-1" id="summary-pet-name"></div>
<div className="text-sm text-slate-500 mb-1" id="summary-weight"></div>
<div className="text-sm text-slate-500 mb-1" id="summary-aggressive"></div>
<div className="text-sm text-slate-500 mb-1" id="summary-date"></div>
<div className="text-sm text-slate-700 font-medium mt-2" id="summary-price"></div>
</div>
<button className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors text-blue-600 hover:text-blue-700" id="book-another-btn" type="button">
<iconify-icon height="16" icon="solar:restart-linear" width="16"></iconify-icon>
                    Book for Another Pet
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Frequently asked questions about pet dental cleaning" className="pt-16 pb-20 relative" id="faq-bottom">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 backdrop-blur-none">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-slate-900">
          Frequently Asked Questions
        </h2>
<p className="leading-relaxed text-lg text-slate-500">
          Answers to common questions from NYC pet parents about our gentle,
          anesthesia-free process.
        </p>
</div>
<div className="max-w-3xl mx-auto space-y-4" id="faq-bottom-accordion">
<div className="rounded-2xl overflow-hidden ring-1 faq-bottom-item bg-slate-950 ring-slate-800">
<button aria-expanded="false" className="faq-bottom-toggle flex cursor-pointer group text-left w-full pt-6 pr-7 pb-6 pl-7 gap-x-4 gap-y-4 items-center" type="button">
<div className="w-10 h-10 rounded-xl border border-blue-500/20 flex items-center justify-center shrink-0 bg-blue-600/20">
<iconify-icon className="text-blue-400" height="22" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="text-[15px] flex-1 font-semibold tracking-tight text-white">
                How is the procedure performed?
              </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 bg-white/10">
<iconify-icon className="faq-bottom-icon-plus text-blue-400" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="faq-bottom-icon-minus hidden text-blue-400" height="20" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="faq-bottom-content overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="pt-0 pr-7 pb-6 pl-[5.25rem]">
<p className="text-[15px] leading-relaxed font-light text-slate-400">
                Your pet is gently swaddled for comfort and safety. We use the
                same ultrasonic scalers and hand tools used in human dentistry
                - just without anesthesia. Most pets relax within minutes.
              </p>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 faq-bottom-item bg-slate-950 ring-slate-800">
<button aria-expanded="false" className="faq-bottom-toggle flex cursor-pointer group text-left w-full pt-6 pr-7 pb-6 pl-7 gap-x-4 gap-y-4 items-center" type="button">
<div className="w-10 h-10 rounded-xl border border-blue-500/20 flex items-center justify-center shrink-0 bg-blue-600/20">
<iconify-icon className="text-blue-400" height="22" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="text-[15px] flex-1 font-semibold tracking-tight text-white">
                How much does a cleaning cost?
              </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 bg-white/10">
<iconify-icon className="faq-bottom-icon-plus text-blue-400" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="faq-bottom-icon-minus hidden text-blue-400" height="20" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="faq-bottom-content overflow-hidden transition-all duration-300" style={{maxHeight: '0'}}>
<div className="pt-0 pr-7 pb-6 pl-[5.25rem]">
<p className="text-[15px] leading-relaxed font-light text-slate-400">
                Office visits start at $499 and mobile home visits at $599.
                We'll give you an exact quote after reviewing your pet's info
                - no surprise charges.
              </p>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 faq-bottom-item bg-slate-950 ring-slate-800">
<button aria-expanded="false" className="faq-bottom-toggle w-full flex items-center gap-4 px-7 py-6 text-left cursor-pointer group" type="button">
<div className="w-10 h-10 rounded-xl border border-blue-500/20 flex items-center justify-center shrink-0 bg-blue-600/20">
<iconify-icon className="text-blue-400" height="22" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="text-[15px] font-semibold flex-1 tracking-tight text-white">
                Can I stay with my pet during cleaning?
              </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 bg-white/10">
<iconify-icon className="faq-bottom-icon-plus text-blue-400" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="faq-bottom-icon-minus hidden text-blue-400" height="20" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="faq-bottom-content overflow-hidden transition-all duration-300" style={{maxHeight: '0'}}>
<div className="px-7 pb-6 pt-0 pl-[5.25rem]">
<p className="text-[15px] leading-relaxed font-light text-slate-400">
                We ask owners to step out - pets are calmer and more
                cooperative without their favorite human nearby. It actually
                helps preserve your bond! We'll send photos when we're done.
              </p>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 faq-bottom-item bg-slate-950 ring-slate-800">
<button aria-expanded="false" className="faq-bottom-toggle w-full flex items-center gap-4 px-7 py-6 text-left cursor-pointer group" type="button">
<div className="w-10 h-10 rounded-xl border border-blue-500/20 flex items-center justify-center shrink-0 bg-blue-600/20">
<iconify-icon className="text-blue-400" height="22" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="text-[15px] font-semibold flex-1 tracking-tight text-white">
                Is this safe for my pet?
              </span>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 bg-white/10">
<iconify-icon className="faq-bottom-icon-plus text-blue-400" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="faq-bottom-icon-minus hidden text-blue-400" height="20" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</div>
</button>
<div className="faq-bottom-content overflow-hidden transition-all duration-300" style={{maxHeight: '0'}}>
<div className="px-7 pb-6 pt-0 pl-[5.25rem]">
<p className="text-[15px] leading-relaxed font-light text-slate-400">
                Yes - every pet gets a pre-cleaning exam to make sure they're
                a good candidate. If your pet shows signs of stress or a
                condition that requires anesthesia, we'll let you know
                honestly and refer you to a trusted vet.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="z-10 cursor-pointer bg-white/70 border-slate-200/50 border-t pt-10 pb-10 relative backdrop-blur-xl" role="button">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 h-21" href="#">
<img alt="Urban Pet Dental Logo" className="w-20 h-20 object-contain mt-0 mb-9" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37a010c1-71f2-463e-9229-8addb35d5073_800w.png"/>
</a>
<p className="leading-relaxed text-xs text-slate-400 mb-6">
            Providing safe, anesthesia-free dental care for NYC pets since
            2022.
          </p>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-slate-900">Services</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="transition-colors hover:text-blue-600" href="#">
                Dog Teeth Cleaning
              </a>
</li>
<li>
<a className="transition-colors hover:text-blue-600" href="#">
                Cat Teeth Cleaning
              </a>
</li>
<li>
<a className="transition-colors hover:text-blue-600" href="#">
                Mobile Services
              </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-slate-900">Company</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li className="">
<a className="transition-colors hover:text-blue-600" href="#">
                About Us
              </a>
</li>
<li className="">
<a className="transition-colors hover:text-blue-600" href="#">
                Contact
              </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-slate-900">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex gap-2.5 gap-x-2.5 gap-y-2.5 items-start">
<iconify-icon className="mt-0.5 text-blue-600" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
              3745 Cypress Ave
              Brooklyn, NY 11224
            </li>
<a className="flex gap-2.5 gap-x-2.5 gap-y-2.5 items-center" href="/tel:+12163908027">
<iconify-icon className="text-blue-600" height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
              (216) 390-8027
            </a>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row text-xs text-slate-400 border-slate-100 border-t pb-9 gap-x-4 gap-y-4 items-center justify-between">
<p className="">© 2026 Urban Pet Dental. All rights reserved.</p>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-4 mt-4">
<a className="" href="https://www.instagram.com/urbanpetdental/" rel="noopenerInstagram" target="_blank">
<iconify-icon className="" height="24" icon="mdi:instagram" style={{color: 'rgb(148, 163, 184)'}} width="24"></iconify-icon>
</a>
<a aria-label="Facebook" className="" href="https://www.facebook.com/profile.php?id=61588172350030" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" height="24" icon="mdi:facebook" style={{color: 'rgb(148, 163, 184)'}} width="24"></iconify-icon>
</a>
<a aria-label="YouTube" className="" href="https://www.youtube.com/@UrbanPetDental" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" height="24" icon="mdi:youtube" style={{color: 'rgb(148, 163, 184)'}} width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</footer>

<div className="lightbox-overlay" id="lightbox-overlay">
<button aria-label="Close" className="lightbox-close" id="lightbox-close">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<button aria-label="Previous" className="lightbox-nav prev" id="lightbox-prev">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<button aria-label="Next" className="lightbox-nav next" id="lightbox-next">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polyline points="9 6 15 12 9 18"></polyline>
</svg>
</button>
<div className="lightbox-img-wrapper" id="lightbox-wrapper">
<img alt="" id="lightbox-img" src=""/>
</div>
<div className="lightbox-label" id="lightbox-label"></div>
</div>



















<a className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium transition-all shadow-2xl bg-slate-900 text-white hover:bg-slate-800 safe-area-bottom" href="#book" id="sticky-mobile-cta">
    Book Now
    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<style>
    /* Sticky mobile CTA styles */
    #sticky-mobile-cta {
      padding-bottom: max(1rem, env(safe-area-inset-bottom));
      box-shadow: 0 -4px 20px rgba(15, 23, 42, 0.15);
    }

    /* Hide on desktop (768px and up) */
    @media (min-width: 768px) {
      #sticky-mobile-cta {
        display: none !important;
      }
    }

    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }
  </style>

    </>
  );
}
