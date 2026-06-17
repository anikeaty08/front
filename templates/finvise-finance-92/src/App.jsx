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



        const { useState, useEffect, useMemo, useRef } = React;

        // --- Custom Dropdown Component ---
        const CustomSelect = ({ label, options, value, onChange, placeholder, required, error }) => {
            const [isOpen, setIsOpen] = useState(false);
            const ref = useRef(null);

            // Close dropdown when clicking outside
            useEffect(() => {
                const handleClickOutside = (event) => {
                    if (ref.current && !ref.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                };
                document.addEventListener('mousedown', handleClickOutside);
                return () => document.removeEventListener('mousedown', handleClickOutside);
            }, []);

            const handleSelect = (option) => {
                onChange(option);
                setIsOpen(false);
            };

            return (
                <div className="relative space-y-1.5" ref={ref}>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider ml-0.5">
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className={`
                            relative w-full px-4 py-3 text-sm bg-white border rounded-lg cursor-pointer
                            flex items-center justify-between smooth-transition hover:border-gray-300
                            ${error ? 'border-red-300 focus:ring-red-100' : 'border-gray-200'}
                            ${isOpen ? 'ring-2 ring-gray-100 border-gray-400' : ''}
                        `}
                    >
                        <span className={`${value ? 'text-gray-900' : 'text-gray-400'}`}>
                            {value || placeholder}
                        </span>
                        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                            <span className="iconify text-gray-400" data-icon="lucide:chevron-down" data-width="16" data-height="16"></span>
                        </span>
                    </div>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                            <ul className="max-h-60 overflow-auto custom-scrollbar py-1">
                                {options.map((opt, idx) => (
                                    <li 
                                        key={idx}
                                        onClick={() => handleSelect(opt)}
                                        className={`
                                            px-4 py-2.5 text-sm cursor-pointer flex items-center justify-between
                                            hover:bg-gray-50 text-gray-700 hover:text-gray-900
                                            ${value === opt ? 'bg-gray-50 font-medium text-gray-900' : ''}
                                        `}
                                    >
                                        {opt}
                                        {value === opt && (
                                            <span className="iconify text-gray-900" data-icon="lucide:check" data-width="14" data-height="14"></span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {error && <p className="text-xs text-red-500 mt-1 ml-0.5">{error}</p>}
                </div>
            );
        };

        // --- Standard Input Component ---
        const InputField = ({ label, type = "text", value, onChange, placeholder, required, error, name }) => (
            <div className="space-y-1.5 group">
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider ml-0.5 smooth-transition group-focus-within:text-gray-800">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                    <input
                        type={type}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className={`
                            w-full px-4 py-3 text-sm text-gray-900 bg-white border rounded-lg outline-none
                            smooth-transition placeholder-gray-300
                            focus:ring-2 focus:ring-gray-100 focus:border-gray-400 hover:border-gray-300
                            ${error ? 'border-red-300 focus:border-red-400 focus:ring-red-50' : 'border-gray-200'}
                        `}
                    />
                    {error && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="iconify text-red-400" data-icon="lucide:alert-circle" data-width="16" data-height="16"></span>
                        </div>
                    )}
                </div>
                {error && <p className="text-xs text-red-500 mt-1 ml-0.5 animate-pulse">{error}</p>}
            </div>
        );

        // --- Main Onboarding Component ---
        const OnboardingApp = () => {
            const [formData, setFormData] = useState({
                fullName: '',
                preferredName: '',
                email: '',
                ageRange: '',
                financialGoal: ''
            });

            const [errors, setErrors] = useState({});
            const [touched, setTouched] = useState({});
            const [isSubmitting, setIsSubmitting] = useState(false);

            // Options
            const ageRanges = ["18 - 24", "25 - 34", "35 - 44", "45 - 54", "55 - 64", "65+"];
            const financialGoals = [
                "Build an Emergency Fund",
                "Save for Retirement",
                "Buy a Home",
                "Grow Wealth / Investing",
                "Pay off Debt",
                "Plan a Large Purchase"
            ];

            // Calculate Progress
            const progress = useMemo(() => {
                let completed = 0;
                const total = 4; // 4 required fields
                
                if (formData.fullName.trim().length >= 2) completed++;
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) completed++;
                if (formData.ageRange) completed++;
                if (formData.financialGoal) completed++;

                return Math.round((completed / total) * 100);
            }, [formData]);

            // Handlers
            const handleChange = (field, value) => {
                setFormData(prev => ({ ...prev, [field]: value }));
                
                // Clear error when user types valid data
                if (touched[field]) {
                    validateField(field, value);
                }
            };

            const validateField = (field, value) => {
                let newErrors = { ...errors };
                
                switch(field) {
                    case 'fullName':
                        if (!value || value.trim().length < 2) newErrors.fullName = "Name must be at least 2 characters";
                        else delete newErrors.fullName;
                        break;
                    case 'email':
                        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Please enter a valid email address";
                        else delete newErrors.email;
                        break;
                    case 'ageRange':
                        if (!value) newErrors.ageRange = "Please select an age range";
                        else delete newErrors.ageRange;
                        break;
                    case 'financialGoal':
                        if (!value) newErrors.financialGoal = "Please select a primary goal";
                        else delete newErrors.financialGoal;
                        break;
                }
                setErrors(newErrors);
            };

            const handleBlur = (field) => {
                setTouched(prev => ({ ...prev, [field]: true }));
                validateField(field, formData[field]);
            };

            const isValid = () => {
                return (
                    formData.fullName.trim().length >= 2 &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                    formData.ageRange &&
                    formData.financialGoal &&
                    Object.keys(errors).length === 0
                );
            };

            const handleSubmit = () => {
                if (!isValid()) return;
                
                setIsSubmitting(true);
                
                // Simulate API Call & Storage
                localStorage.setItem('finvise_onboarding_data', JSON.stringify(formData));
                
                setTimeout(() => {
                    alert("Success! Redirecting to Dashboard... (Prototype End)");
                    // window.location.href = "/dashboard"; // Uncomment for real routing
                    setIsSubmitting(false);
                }, 1000);
            };

            // Dynamic Welcome Name
            const displayName = formData.preferredName || formData.fullName.split(' ')[0];

            return (
                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
                    
                    {/* Top Decorative Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-20"></div>

                    <div className="p-8 sm:p-10">
                        
                        {/* 1. Branding Section */}
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <div className="h-10 w-10 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg shadow-gray-900/10">
                                    <span className="text-white font-bold text-lg tracking-tighter">F</span>
                                </div>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2 smooth-transition">
                                {displayName ? `Welcome to Finvise, ${displayName}` : 'Welcome to Finvise'}
                            </h1>
                            <p className="text-sm text-gray-500 font-normal">
                                Let's personalize your financial journey.
                            </p>
                        </div>

                        {/* 3. Progress Indicator */}
                        <div className="mb-8">
                            <div className="flex justify-between text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
                                <span>Setup Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                <div 
                                    className="bg-gray-900 h-1.5 rounded-full smooth-transition" 
                                    style={{width: `${progress}%`}}
                                ></div>
                            </div>
                        </div>

                        {/* 2. User Input Fields */}
                        <div className="space-y-6">
                            
                            {/* Row 1: Names */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div onBlur={() => handleBlur('fullName')}>
                                    <InputField 
                                        label="Full Name" 
                                        placeholder="e.g. Alex Sterling" 
                                        value={formData.fullName}
                                        onChange={(val) => handleChange('fullName', val)}
                                        required
                                        error={touched.fullName && errors.fullName}
                                    />
                                </div>
                                <div>
                                    <InputField 
                                        label="Preferred Name" 
                                        placeholder="e.g. Alex" 
                                        value={formData.preferredName}
                                        onChange={(val) => handleChange('preferredName', val)}
                                        required={false}
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email */}
                            <div onBlur={() => handleBlur('email')}>
                                <InputField 
                                    label="Email Address" 
                                    type="email"
                                    placeholder="name@company.com" 
                                    value={formData.email}
                                    onChange={(val) => handleChange('email', val)}
                                    required
                                    error={touched.email && errors.email}
                                />
                            </div>

                            {/* Row 3: Dropdowns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div onBlur={() => handleBlur('ageRange')}>
                                    <CustomSelect 
                                        label="Age Range"
                                        placeholder="Select Age"
                                        options={ageRanges}
                                        value={formData.ageRange}
                                        onChange={(val) => handleChange('ageRange', val)}
                                        required
                                        error={touched.ageRange && errors.ageRange}
                                    />
                                </div>
                                <div onBlur={() => handleBlur('financialGoal')}>
                                    <CustomSelect 
                                        label="Primary Goal"
                                        placeholder="Select Goal"
                                        options={financialGoals}
                                        value={formData.financialGoal}
                                        onChange={(val) => handleChange('financialGoal', val)}
                                        required
                                        error={touched.financialGoal && errors.financialGoal}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 4. Primary CTA */}
                        <div className="mt-10">
                            <button
                                onClick={handleSubmit}
                                disabled={!isValid() || isSubmitting}
                                className={`
                                    w-full py-3.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center space-x-2
                                    smooth-transition shadow-sm
                                    ${isValid() && !isSubmitting
                                        ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-md cursor-pointer transform hover:-translate-y-0.5' 
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'}
                                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="iconify animate-spin" data-icon="lucide:loader-2" data-width="18" data-height="18"></span>
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Continue to Dashboard</span>
                                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16" data-height="16"></span>
                                    </>
                                )}
                            </button>
                            
                            {/* Footer / Trust signal */}
                            <div className="mt-6 flex items-center justify-center space-x-2 opacity-60">
                                <span className="iconify text-gray-400" data-icon="lucide:lock" data-width="12" data-height="12"></span>
                                <p className="text-xs text-gray-400">Your data is encrypted and secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<OnboardingApp />);
    
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
      
<div className="w-full max-w-lg mx-auto" id="root"></div>


    </>
  );
}
