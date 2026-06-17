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
      

<div className="container-md mt-5" style={{maxWidth: '800px'}}>
<div className="mb-5">
<h2 className="mb-2" style={{}}>Import {Module Name}</h2>
<p className="text-muted" style={{}}>Upload your Excel file and map the columns to import.</p>
</div>

<div className="d-flex flex-column gap-4">

<div className="d-flex gap-4">
<div className="d-flex flex-column align-items-center">
<div className="step-indicator step-done">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="connector"></div>
</div>
<div className="flex-grow-1 pb-4">
<div className="d-flex align-items-center justify-content-between mb-2">
<h6 className="mb-0">1. Upload File</h6>
<span className="badge bg-light text-dark border fw-normal">Completed</span>
</div>
<div className="card-custom p-3 d-flex align-items-center justify-content-between bg-white">
<div className="d-flex align-items-center gap-3">
<div className="bg-success-subtle-custom rounded p-2 text-success">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-spreadsheet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 13h2m4 0h2m-8 4h2m4 0h2"></path></g></svg>
</div>
<div className="">
<div className="fw-medium fs-7 text-dark">customers_q3_2023.xlsx</div>
<div className="text-muted fs-7">2.4 MB • Uploaded just now</div>
</div>
</div>
<button className="btn btn-sm btn-link text-muted text-decoration-none">Replace</button>
</div>
</div>
</div>

<div className="d-flex gap-4">
<div className="d-flex flex-column align-items-center">
<div className="step-indicator step-active">2</div>
<div className="connector"></div>
</div>
<div className="flex-grow-1 pb-5">
<div className="d-flex align-items-center justify-content-between mb-3">
<h6 className="mb-0">2. Map Fields</h6>
<span className="fs-7 text-muted">Mapping 5 fields from uploaded file</span>
</div>
<div className="card-custom overflow-hidden">
<div className="bg-light border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
<div className="row w-100 m-0">
<div className="col-6 ps-0 fs-7 fw-medium text-muted text-uppercase" style={{letterSpacing: '0.05em'}}>CRM Field</div>
<div className="col-6 pe-0 fs-7 fw-medium text-muted text-uppercase" style={{letterSpacing: '0.05em'}}>Excel Column</div>
</div>
</div>
<div className="px-4 py-2">

<div className="row align-items-center py-3 mapping-row">
<div className="col-6">
<div className="d-flex align-items-center gap-1">
<span className="fw-medium fs-7">Full Name</span>
<span className="text-danger" title="Required">*</span>
</div>
</div>
<div className="col-6">
<select className="form-select form-select-sm">
<option selected="" value="name">Customer Name</option>
<option value="email">Email Address</option>
<option value="phone">Phone Number</option>
<option value="company">Organization</option>
</select>
</div>
</div>

<div className="row align-items-center py-3 mapping-row">
<div className="col-6">
<div className="d-flex align-items-center gap-1">
<span className="fw-medium fs-7">Email Address</span>
<span className="text-danger" title="Required">*</span>
</div>
</div>
<div className="col-6">
<select className="form-select form-select-sm">
<option value="name">Customer Name</option>
<option selected="" value="email">Email Address</option>
<option value="phone">Phone Number</option>
</select>
</div>
</div>

<div className="row align-items-center py-3 mapping-row">
<div className="col-6">
<div className="d-flex align-items-center">
<span className="fw-medium fs-7">Company</span>
</div>
</div>
<div className="col-6">
<select className="form-select form-select-sm">
<option selected="" value="company">Organization</option>
<option value="">(Ignore this column)</option>
</select>
</div>
</div>

<div className="row align-items-center py-3 mapping-row">
<div className="col-6">
<div className="d-flex align-items-center">
<span className="fw-medium fs-7">Date Added</span>
</div>
</div>
<div className="col-6">
<select className="form-select form-select-sm text-muted border-warning">
<option selected="" value="">Select a column...</option>
<option value="date">Join Date</option>
<option value="ts">Timestamp</option>
</select>
</div>
</div>
</div>
<div className="bg-light border-top p-3 d-flex justify-content-end gap-2">
<button className="btn btn-outline-custom">Cancel</button>
<button className="btn btn-primary-custom">Run Import</button>
</div>
</div>
</div>
</div>

<div className="d-flex gap-4">
<div className="d-flex flex-column align-items-center">
<div className="step-indicator step-inactive">3</div>
</div>
<div className="flex-grow-1">
<div className="d-flex align-items-center justify-content-between mb-3">
<h6 className="mb-0 text-muted">3. Summary</h6>
<span className="badge bg-success-subtle-custom text-success fw-normal border">Previous Run Result</span>
</div>
<div className="card-custom p-4">
<h5 className="mb-4 fs-6">Import Summary Report</h5>
<div className="row g-3 mb-4">

<div className="col-md-6">
<div className="stat-card bg-success-subtle-custom h-100">
<div className="d-flex align-items-center gap-2 mb-2 text-success">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="fw-semibold fs-7">Successfully Imported</span>
</div>
<div className="fs-2 fw-semibold text-dark tracking-tight">842</div>
<div className="fs-7 text-muted">Records added to database</div>
</div>
</div>

<div className="col-md-6">
<div className="stat-card bg-danger-subtle-custom h-100">
<div className="d-flex align-items-center justify-content-between mb-2">
<div className="d-flex align-items-center gap-2 text-danger">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
<span className="fw-semibold fs-7">Failed Records</span>
</div>
</div>
<div className="fs-2 fw-semibold text-dark tracking-tight">14</div>
<div className="d-flex align-items-center justify-content-between mt-1">
<div className="fs-7 text-muted">Validation errors</div>
<a className="d-flex align-items-center gap-1 text-decoration-none fs-7 fw-medium text-danger" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                                            Download Report (.xls)
                                        </a>
</div>
</div>
</div>
</div>
<div className="d-flex justify-content-end">
<button className="btn btn-outline-custom">Done</button>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
