import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Screen navigation
    function showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show selected screen
        document.getElementById(screenId).classList.add('active');
        
        // Update tab bar
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Find and activate corresponding tab
        const tabIndex = ['dashboard-screen', 'subscriptions-screen', 'insights-screen'].indexOf(screenId);
        if (tabIndex >= 0) {
            document.querySelectorAll('.tab')[tabIndex].classList.add('active');
        }
    }
    
    // Modal functions
    function showAddSubscription() {
        document.getElementById('add-subscription-modal').classList.add('active');
    }
    
    function hideAddSubscription() {
        document.getElementById('add-subscription-modal').classList.remove('active');
    }
    
    function saveSubscription() {
        // Get form values
        const name = document.getElementById('sub-name').value;
        const price = document.getElementById('sub-price').value;
        
        // Basic validation
        if (name && price) {
            // In a real app, we would save this data
            // For the prototype, just close the modal and show success feedback
            hideAddSubscription();
            
            // Reset form
            document.getElementById('sub-name').value = '';
            document.getElementById('sub-price').value = '';
            
            // Show feedback (could be a toast notification in a real app)
            alert('Subscription added successfully!');
        } else {
            alert('Please fill in all required fields');
        }
    }
    
    // Toggle billing cycle
    function toggleBilling(element) {
        document.querySelectorAll('.toggle-option').forEach(option => {
            option.classList.remove('active');
        });
        element.classList.add('active');
    }
    
    // Settings screen (placeholder)
    function showSettings() {
        alert('Settings would open here');
    }
    
    // Add haptic feedback simulation
    document.querySelectorAll('.add-button, .tab, .list-actions, .close-button, .save-button').forEach(element => {
        element.addEventListener('click', () => {
            // Simulate haptic feedback with a quick visual change
            element.style.opacity = '0.7';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 100);
        });
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="app-container">

<div className="screen active" id="dashboard-screen">
<div className="header">
<h1>SubTrack</h1>
<div className="header-icon" onclick="showSettings()">⚙️</div>
</div>
<div className="monthly-total">
<h2>Monthly Total</h2>
<p>$37.94</p>
</div>
<div className="upcoming-section">
<div className="section-header">
<h2>Upcoming Payments</h2>
<div className="arrow" onclick="showScreen('subscriptions-screen')">&gt;</div>
</div>
<div className="card">
<div className="subscription-card">
<div className="subscription-info">
<h3>Netflix</h3>
<p>$15.99</p>
</div>
<div className="subscription-date">
<p>May 15</p>
</div>
</div>
<div className="subscription-card">
<div className="subscription-info">
<h3>Spotify</h3>
<p>$9.99</p>
</div>
<div className="subscription-date">
<p>May 17</p>
</div>
</div>
</div>
</div>
<div className="upcoming-section">
<div className="section-header">
<h2>Subscriptions (7)</h2>
</div>
<div className="categories">
<div className="category-card">
<h3>MUSIC</h3>
<p>$15</p>
</div>
<div className="category-card">
<h3>VIDEO</h3>
<p>$22</p>
</div>
<div className="category-card">
<h3>TOOLS</h3>
<p>$10</p>
</div>
</div>
</div>
<div className="add-button" onclick="showAddSubscription()">
            + ADD SUBSCRIPTION
        </div>
</div>

<div className="screen" id="subscriptions-screen">
<div className="header">
<h1>Subscriptions</h1>
<div className="header-icon">🔍</div>
</div>
<div className="subscription-list">
<div className="list-card">
<div className="list-info">
<h3>Netflix</h3>
<p>$15.99/month</p>
<p>Next: May 15</p>
</div>
<div className="list-actions">⋮</div>
</div>
<div className="list-card">
<div className="list-info">
<h3>Spotify</h3>
<p>$9.99/month</p>
<p>Next: May 17</p>
</div>
<div className="list-actions">⋮</div>
</div>
<div className="list-card">
<div className="list-info">
<h3>iCloud</h3>
<p>$2.99/month</p>
<p>Next: May 20</p>
</div>
<div className="list-actions">⋮</div>
</div>
<div className="list-card">
<div className="list-info">
<h3>Adobe CC</h3>
<p>$9.99/month</p>
<p>Next: May 22</p>
</div>
<div className="list-actions">⋮</div>
</div>
</div>
</div>

<div className="screen" id="insights-screen">
<div className="header">
<h1>Insights</h1>
</div>
<div className="upcoming-section">
<div className="section-header">
<h2>Monthly Breakdown</h2>
</div>
<div className="chart-container">
<div className="chart-bar" style={{height: '60%'}}></div>
<div className="chart-bar" style={{height: '80%'}}></div>
<div className="chart-bar" style={{height: '70%'}}></div>
<div className="chart-bar" style={{height: '90%'}}></div>
<div className="chart-bar" style={{height: '100%'}}></div>
</div>
</div>
<div className="category-breakdown">
<div className="section-header">
<h2>By Category</h2>
</div>
<div className="category-item">
<div>
<span className="category-color" style={{backgroundColor: '#FF9500'}}></span>
                    Streaming
                </div>
<div>$25.98</div>
</div>
<div className="category-item">
<div>
<span className="category-color" style={{backgroundColor: '#5AC8FA'}}></span>
                    Music
                </div>
<div>$9.99</div>
</div>
<div className="category-item">
<div>
<span className="category-color" style={{backgroundColor: '#34C759'}}></span>
                    Tools
                </div>
<div>$12.98</div>
</div>
<div className="category-item">
<div>
<span className="category-color" style={{backgroundColor: '#FF3B30'}}></span>
                    Other
                </div>
<div>$2.99</div>
</div>
</div>
<div className="upcoming-section">
<div className="section-header">
<h2>Potential Savings</h2>
</div>
<div className="savings-card">
<p>Switch Netflix to annual</p>
<p>Save: $23.88/year</p>
</div>
</div>
</div>

<div className="modal-screen" id="add-subscription-modal">
<div className="modal-header">
<div className="close-button" onclick="hideAddSubscription()">✕</div>
<h2>New Subscription</h2>
<div className="save-button" onclick="saveSubscription()">Save</div>
</div>
<div className="form-group">
<label htmlFor="sub-name">Name</label>
<input id="sub-name" placeholder="Disney+" type="text"/>
</div>
<div className="form-group">
<label htmlFor="sub-price">Price</label>
<input id="sub-price" placeholder="7.99" type="number"/>
</div>
<div className="form-group">
<label>Billing Cycle</label>
<div className="toggle-group">
<div className="toggle-option active" onclick="toggleBilling(this)">Monthly</div>
<div className="toggle-option" onclick="toggleBilling(this)">Annual</div>
</div>
</div>
<div className="form-group">
<label htmlFor="sub-date">First Payment</label>
<input id="sub-date" type="date"/>
</div>
<div className="form-group">
<label htmlFor="sub-category">Category</label>
<select id="sub-category">
<option value="streaming">Streaming</option>
<option value="music">Music</option>
<option value="productivity">Productivity</option>
<option value="other">Other</option>
</select>
</div>
</div>

<div className="tab-bar">
<div className="tab active" onclick="showScreen('dashboard-screen')">
<div className="tab-icon">📊</div>
<div className="tab-label">Dashboard</div>
</div>
<div className="tab" onclick="showScreen('subscriptions-screen')">
<div className="tab-icon">📋</div>
<div className="tab-label">Subscriptions</div>
</div>
<div className="tab" onclick="showScreen('insights-screen')">
<div className="tab-icon">📈</div>
<div className="tab-label">Insights</div>
</div>
</div>
</div>


    </>
  );
}
