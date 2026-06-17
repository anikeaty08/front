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
      

<nav className="navbar navbar-expand-lg fixed-top navbar-custom">
<div className="container max-w-6xl px-4 px-lg-0">

<a className="navbar-brand d-flex align-items-center gap-2 m-0 p-0" href="#">
<div className="d-flex align-items-center justify-content-center bg-slate-900 text-white rounded-2" style={{width: '32px', height: '32px'}}>
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="fs-6 fw-medium tracking-tight text-slate-900">SECURE<span className="text-slate-400">HOME</span></span>
</a>
<div className="d-flex align-items-center ms-auto">
<div className="d-none d-sm-flex align-items-center gap-2 text-sm fw-medium text-slate-600">
<span className="position-relative d-flex" style={{width: '8px', height: '8px'}}>
<span className="position-absolute w-100 h-100 rounded-circle bg-success opacity-75 animate-ping" style={{animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'}}></span>
<span className="position-relative w-100 h-100 rounded-circle bg-success"></span>
</span>
<span>24/7 Sales Support: <span className="text-slate-900">800-555-0199</span></span>
</div>
<div className="d-sm-none ms-3">
<a className="text-sm fw-medium text-primary text-decoration-none" href="#quote">Get Quote</a>
</div>
</div>
</div>
</nav>

<section className="position-relative overflow-hidden pt-5 pb-5 mt-5">
<div className="position-absolute top-0 start-0 w-100 h-100 bg-slate-50 bg-grid" style={{zIndex: '-1'}}>
<div className="hero-radial"></div>
</div>
<div className="container max-w-6xl px-4 px-lg-0 py-lg-5">
<div className="row g-5 align-items-center">

<div className="col-lg-7 d-flex flex-column gap-4">

<div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1" style={{background: 'var(--blue-50)', border: '1px solid var(--blue-100)', width: 'fit-content'}}>
<iconify-icon className="text-primary" icon="solar:alarm-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs fw-medium text-primary">Limited Offer: Free HD Camera with Installation</span>
</div>
<h1 className="display-4 fw-medium tracking-tight text-slate-900 lh-sm">
                        Protect your home <br className="d-none d-lg-block"/>
<span className="text-slate-400">before it happens.</span>
</h1>
<p className="lead text-slate-600 fs-5" style={{maxWidth: '500px'}}>Proactive monitoring, smart detection, and instant alerts. Join 50,000+ families secured by the fastest response time in the industry.</p>
<div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 pt-2">
<div className="d-flex align-items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>$0 Down payment</span>
</div>
<div className="d-none d-sm-block text-slate-300">•</div>
<div className="d-flex align-items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Locked-in Rate</span>
</div>
<div className="d-none d-sm-block text-slate-300">•</div>
<div className="d-flex align-items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>30-Day Risk Free</span>
</div>
</div>

<div className="mt-4 d-none d-lg-block border-top border-light pt-4 w-100">
<p className="text-xs text-slate-400 text-uppercase letter-spacing-2 mb-3" style={{letterSpacing: '0.1em'}}>Trusted Technology Partners</p>
<div className="d-flex gap-4 opacity-25 grayscale" style={{filter: 'grayscale(100%)', opacity: '0.4'}}>
<div className="fw-bold fs-5 tracking-tight text-dark">NEST</div>
<div className="fw-bold fs-5 tracking-tight text-dark">RING</div>
<div className="fw-bold fs-5 tracking-tight text-dark">ALARM.COM</div>
<div className="fw-bold fs-5 tracking-tight text-dark">AUGUST</div>
</div>
</div>
</div>

<div className="col-lg-5 position-relative" id="quote" style={{zIndex: '10'}}>
<div className="bg-white p-4 p-sm-5 rounded-4 shadow-lg border border-light">
<div className="mb-4">
<h3 className="h5 fw-medium tracking-tight text-slate-900 mb-1">Check Eligibility &amp; Pricing</h3>
<p className="text-sm text-slate-500">Fill out the form to secure your limited time offer.</p>
</div>
<form action="#" method="POST">
<div className="row g-3 mb-3">
<div className="col-6">
<label className="form-label" htmlFor="first-name">First Name</label>
<input className="form-control form-control-custom" id="first-name" placeholder="Jane" required="" type="text"/>
</div>
<div className="col-6">
<label className="form-label" htmlFor="last-name">Last Name</label>
<input className="form-control form-control-custom" id="last-name" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="email">Email Address</label>
<input className="form-control form-control-custom" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="phone">Mobile Number</label>
<input className="form-control form-control-custom" id="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div className="d-flex align-items-start py-2 mb-3">
<label className="position-relative d-flex align-items-center cursor-pointer me-3">
<input checked="" className="custom-checkbox" required="" type="checkbox"/>
<span className="checkmark">
<svg viewbox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path></svg>
</span>
</label>
<div className="text-xs text-slate-500 lh-sm pt-1">
                                    I agree to receive a free quote and security tips via SMS/Email.
                                </div>
</div>
<button className="btn btn-primary-custom w-100 text-white shadow-sm" type="submit">
<span>Get My Free Quote</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<p className="text-center text-slate-400 mt-3 mb-0" style={{fontSize: '10px'}}>
                                Your information is secure. No commitment required.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-5 bg-white border-top border-light">
<div className="container max-w-6xl px-4 px-lg-0 my-4">
<div className="text-center mx-auto mb-5" style={{maxWidth: '600px'}}>
<h2 className="h2 fw-medium tracking-tight text-slate-900">Total home awareness</h2>
<p className="mt-3 text-slate-600">Our system integrates seamlessly into your life, providing protection that you can set and forget.</p>
</div>
<div className="row g-4">

<div className="col-md-4">
<div className="feature-card h-100 d-flex flex-column align-items-start">
<div className="rounded-2 bg-white border border-light d-flex align-items-center justify-content-center text-slate-900 shadow-sm mb-3" style={{width: '40px', height: '40px'}}>
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="h5 fw-medium text-slate-900 mb-2">Control from anywhere</h3>
<p className="text-sm text-slate-500 mb-0 lh-base">Arm, disarm, and check camera feeds instantly from our top-rated mobile app, no matter where you are.</p>
</div>
</div>

<div className="col-md-4">
<div className="feature-card h-100 d-flex flex-column align-items-start">
<div className="rounded-2 bg-white border border-light d-flex align-items-center justify-content-center text-slate-900 shadow-sm mb-3" style={{width: '40px', height: '40px'}}>
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="h5 fw-medium text-slate-900 mb-2">24/7 Professional Monitoring</h3>
<p className="text-sm text-slate-500 mb-0 lh-base">Our redundant monitoring centers respond to alarms in seconds, dispatching police or fire services immediately.</p>
</div>
</div>

<div className="col-md-4">
<div className="feature-card h-100 d-flex flex-column align-items-start">
<div className="rounded-2 bg-white border border-light d-flex align-items-center justify-content-center text-slate-900 shadow-sm mb-3" style={{width: '40px', height: '40px'}}>
<iconify-icon icon="solar:home-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="h5 fw-medium text-slate-900 mb-2">Smart Home Integration</h3>
<p className="text-sm text-slate-500 mb-0 lh-base">Works with your existing smart locks, lights, and thermostats for a truly connected and secure ecosystem.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-5 bg-slate-900 position-relative overflow-hidden text-white">

<div className="position-absolute rounded-circle orb-blue" style={{width: '250px', height: '250px', pointerEvents: 'none'}}></div>
<div className="position-absolute rounded-circle orb-indigo" style={{width: '250px', height: '250px', pointerEvents: 'none'}}></div>
<div className="container max-w-6xl px-4 px-lg-0 position-relative" style={{zIndex: '10'}}>
<div className="row align-items-center gy-5">
<div className="col-lg-6">
<div className="d-flex align-items-center gap-1 mb-3 text-warning">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h2 className="h3 fw-medium tracking-tight mb-4 lh-base">"The installation was effortless and the peace of mind is priceless. The app is incredibly intuitive."</h2>
<div className="d-flex align-items-center gap-3">
<div className="d-flex align-items-center justify-content-center rounded-circle text-slate-300 fw-medium bg-secondary bg-opacity-25" style={{width: '40px', height: '40px'}}>
                            SR
                        </div>
<div>
<p className="text-sm fw-medium text-white mb-0">Sarah Reynolds</p>
<p className="text-xs text-slate-400 mb-0">Verified Customer • Austin, TX</p>
</div>
</div>
</div>
<div className="col-lg-6">
<div className="p-4 rounded-4" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(4px)'}}>
<div className="d-flex align-items-start gap-3">
<div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '40px', height: '40px', background: 'rgba(239, 68, 68, 0.1)', color: '#f87171'}}>
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="h5 fw-medium text-white mb-1">Offer Expiring Soon</h3>
<p className="text-sm text-slate-300 mb-3">Our "New Customer" equipment package deal ends this weekend. Secure your hardware discount today.</p>
<a className="d-inline-flex align-items-center gap-2 text-sm fw-medium text-white text-decoration-none" href="#quote" onmouseout="this.style.opacity='1'" onmouseover="this.style.opacity='0.8'" style={{transition: 'opacity 0.2s'}}>
                                    Claim Offer Now
                                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-5 border-top border-light">
<div className="container max-w-6xl px-4 px-lg-0 d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
<div className="d-flex align-items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm fw-medium text-slate-900 tracking-tight">SECURE<span className="text-slate-400">HOME</span></span>
</div>
<div className="text-xs text-slate-400 d-flex flex-column flex-md-row gap-3 gap-md-4 text-center text-md-end">
<a className="text-decoration-none text-slate-400 hover-dark transition-colors" href="#">Privacy Policy</a>
<a className="text-decoration-none text-slate-400 hover-dark transition-colors" href="#">Terms of Service</a>
<a className="text-decoration-none text-slate-400 hover-dark transition-colors" href="#">Licensing</a>
<span>© 2023 SecureHome Inc.</span>
</div>
</div>
</footer>



    </>
  );
}
