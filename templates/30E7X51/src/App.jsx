import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Add interactivity to poll options
        document.addEventListener('DOMContentLoaded', function() {
            const pollOptions = document.querySelectorAll('.poll-option');
            let hasVoted = false;
            
            pollOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Only allow one vote
                    if (hasVoted) return;
                    
                    hasVoted = true;
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Reveal results for all options
                    pollOptions.forEach(opt => {
                        opt.classList.add('voted');
                        
                        // Get percentage and set progress bar width
                        const percentage = opt.getAttribute('data-percentage');
                        opt.querySelector('.poll-progress').style.width = percentage + '%';
                    });
                    
                    // Add a slight delay for the animation
                    setTimeout(() => {
                        // Add a light vibration effect if supported
                        if (navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                    }, 100);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="left-sidebar">
<div className="brand-logo">
<span className="brand-red">Trover</span>
<span className="brand-white">Agency</span>
</div>
<div className="nav-item active">
<i className="fas fa-home"></i>
</div>
<div className="nav-item">
<i className="fas fa-compass"></i>
</div>
<div className="nav-item">
<i className="fas fa-users"></i>
</div>
<div className="nav-item">
<i className="fas fa-plus-square"></i>
</div>
<div className="nav-item">
<i className="fas fa-bell"></i>
</div>
</div>

<div className="top-nav">
<div className="nav-tabs">
<div className="nav-tab">Following</div>
<div className="nav-tab active">For You</div>
<div className="nav-tab">Properties</div>
</div>
</div>

<div className="feed-container">

<div className="post">
<div className="video-container">
<img alt="Urban Penthouse" className="post-media" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"/>
<div className="music-note">
<i className="fas fa-music"></i>
</div>
<div className="post-overlay">
<div className="username">@urbanagent <i className="fas fa-check-circle"></i></div>
<div className="caption">Urban Penthouse in Downtown Chicago - $2,000,000</div>
<div className="hashtags">#chicago #luxury #realestate #penthouse</div>
<a className="post-cta" href="#">View Listing</a>
</div>
</div>

<div className="right-sidebar">
<div className="action-btn profile-btn">
<img alt="Creator" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="count">+</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-heart"></i></div>
<div className="count">12.3K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-comment-dots"></i></div>
<div className="count">1.2K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-bookmark"></i></div>
<div className="count">4.8K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-share"></i></div>
<div className="count">Share</div>
</div>
</div>
</div>

<div className="post">
<div className="video-container">
<img alt="Ad Background" className="post-media" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"/>
<div className="ad-label">Sponsored</div>
<div className="post-overlay">
<div className="ad-agent">
<img alt="Agent" className="agent-avatar" src="https://randomuser.me/api/portraits/women/22.jpg"/>
<div className="agent-name">TroverAgency</div>
</div>
<div className="caption">Meet Your Local Chasseur</div>
<div className="hashtags">We hunt down your dream home so you don't have to.</div>
<a className="post-cta" href="#">Book a Free Call</a>
</div>
</div>

<div className="right-sidebar">
<div className="action-btn profile-btn">
<img alt="Creator" src="https://randomuser.me/api/portraits/women/22.jpg"/>
<div className="count">+</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-heart"></i></div>
<div className="count">8.7K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-comment-dots"></i></div>
<div className="count">934</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-bookmark"></i></div>
<div className="count">3.2K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-share"></i></div>
<div className="count">Share</div>
</div>
</div>
</div>

<div className="post">
<div className="video-container">
<img alt="Luxury Home" className="post-media" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" style={{filter: 'brightness(0.7)'}}/>
<div className="poll-container">
<h2 className="poll-question">What's your top priority when house hunting?</h2>
<div className="poll-options">
<div className="poll-option" data-percentage="40">
<span className="poll-text">Price</span>
<div className="poll-progress" style={{width: '40%'}}></div>
<span className="poll-percentage">40%</span>
</div>
<div className="poll-option" data-percentage="30">
<span className="poll-text">Location</span>
<div className="poll-progress" style={{width: '30%'}}></div>
<span className="poll-percentage">30%</span>
</div>
<div className="poll-option" data-percentage="20">
<span className="poll-text">Style</span>
<div className="poll-progress" style={{width: '20%'}}></div>
<span className="poll-percentage">20%</span>
</div>
<div className="poll-option" data-percentage="10">
<span className="poll-text">Outdoor Space</span>
<div className="poll-progress" style={{width: '10%'}}></div>
<span className="poll-percentage">10%</span>
</div>
</div>
</div>
<div className="post-overlay">
<div className="username">@realestatepro <i className="fas fa-check-circle"></i></div>
<div className="caption">What matters most to you? Tell us your priority!</div>
<div className="hashtags">#realestate #homeshopping #dreamhome</div>
</div>
</div>

<div className="right-sidebar">
<div className="action-btn profile-btn">
<img alt="Creator" src="https://randomuser.me/api/portraits/women/33.jpg"/>
<div className="count">+</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-heart"></i></div>
<div className="count">5.4K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-comment-dots"></i></div>
<div className="count">762</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-bookmark"></i></div>
<div className="count">1.9K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-share"></i></div>
<div className="count">Share</div>
</div>
</div>
</div>

<div className="post">
<div className="video-container">
<img alt="Modern Loft" className="post-media" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"/>
<div className="music-note">
<i className="fas fa-music"></i>
</div>
<div className="post-overlay">
<div className="username">@loftlivingnyc <i className="fas fa-check-circle"></i></div>
<div className="caption">Modern Loft Retreat in Brooklyn - $1,350,000</div>
<div className="hashtags">#newyork #brooklyn #loft #modern</div>
<a className="post-cta" href="#">View Listing</a>
</div>
</div>

<div className="right-sidebar">
<div className="action-btn profile-btn">
<img alt="Creator" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="count">+</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-heart"></i></div>
<div className="count">9.8K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-comment-dots"></i></div>
<div className="count">872</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-bookmark"></i></div>
<div className="count">3.1K</div>
</div>
<div className="action-btn">
<div className="action-icon"><i className="fas fa-share"></i></div>
<div className="count">Share</div>
</div>
</div>
</div>
</div>

<div className="notification">
<div className="notification-item">
<img alt="User" className="notification-avatar" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="notification-content">
<div className="notification-text">James Robert liked your listing</div>
<div className="notification-time">2m ago</div>
</div>
</div>
<div className="notification-item">
<img alt="User" className="notification-avatar" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<div className="notification-content">
<div className="notification-text">Nikki Haskell started following you</div>
<div className="notification-time">5m ago</div>
</div>
<button className="follow-btn">Follow</button>
</div>
</div>


    </>
  );
}
