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



    // Set minimum date for schedule to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('schedule-date').min = today;
    
    // Show/hide date picker based on radio selection
    const scheduleNow = document.getElementById('send-now');
    const scheduleLater = document.getElementById('schedule-later');
    const dateContainer = document.getElementById('schedule-date-container');
    
    scheduleLater.addEventListener('change', function() {
      if (this.checked) {
        dateContainer.style.display = 'block';
      }
    });
    
    scheduleNow.addEventListener('change', function() {
      if (this.checked) {
        dateContainer.style.display = 'none';
      }
    });
    
    // Simple form validation
    document.getElementById('e-transfer-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const amount = document.getElementById('amount').value;
      const recipient = document.getElementById('recipient').value;
      
      if (!amount || isNaN(parseFloat(amount))) {
        alert('Please enter a valid amount');
        return;
      }
      
      if (!recipient) {
        alert('Please select a recipient');
        return;
      }
      
      if (scheduleLater.checked) {
        const scheduleDate = document.getElementById('schedule-date').value;
        if (!scheduleDate) {
          alert('Please select a date for your scheduled transfer');
          return;
        }
      }
      
      alert('Transfer confirmed! Processing your request...');
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
      
<div className="e-transfer-card">

<div className="card-header">
<h1>Send an e-Transfer</h1>
</div>

<div className="card-body">
<form id="e-transfer-form">

<div className="form-group">
<label className="form-label" htmlFor="amount">Amount</label>
<div className="input-wrapper">
<span className="input-prefix">$</span>
<input className="form-control prefix-input" id="amount" placeholder="0.00" type="text" />
</div>
</div>

<div className="form-group">
<label className="form-label" htmlFor="recipient">Recipient</label>
<div className="select-wrapper">
<select className="form-control" id="recipient">
<option disabled selected value="">Select a recipient</option>
<option value="contact1">Sarah Johnson</option>
<option value="contact2">Michael Chen</option>
<option value="contact3">Alex Rodriguez</option>
<option value="new">+ Add new recipient</option>
</select>
</div>
</div>

<div className="form-group">
<label className="form-label">Scheduled for</label>
<div className="schedule-options">
<div className="schedule-option">
<input checked className="schedule-radio" id="send-now" name="schedule" type="radio" />
<label className="schedule-label" htmlFor="send-now">Send now</label>
</div>
<div className="schedule-option">
<input className="schedule-radio" id="schedule-later" name="schedule" type="radio" />
<label className="schedule-label" htmlFor="schedule-later">Schedule</label>
</div>
</div>
<div className="schedule-date-container" id="schedule-date-container">
<div className="input-wrapper">
<input className="form-control" id="schedule-date" min="" type="date" />
</div>
</div>
</div>

<div className="form-group">
<label className="form-label" htmlFor="source-account">From account</label>
<div className="select-wrapper">
<select className="form-control" id="source-account">
<option value="checking">Checking Account - $2,546.63</option>
<option value="savings">Savings Account - $8,921.15</option>
<option value="joint">Joint Account - $4,370.28</option>
</select>
</div>
</div>

<div className="fee-info">
<span>Service fee</span>
<span className="fee-amount">$1.50</span>
</div>
</form>
</div>

<div className="card-footer">
<button className="btn btn-secondary" type="button">Cancel</button>
<button className="btn btn-primary" form="e-transfer-form" type="submit">Confirm Transfer</button>
</div>
</div>


    </>
  );
}
