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



        // Default Data with requested embeds
        const defaultCards = [
            {
                id: '1',
                type: 'embed',
                variant: 'winner',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DOBMiKkDUU5/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DOBMiKkDUU5/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Sieh dir diesen Beitrag auf Instagram an</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DOBMiKkDUU5/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Ein Beitrag geteilt von Matthias Tayala (@golfprowannabes)</a></p></div></blockquote>`,
                isDefault: true
            },
            {
                id: '2',
                type: 'embed',
                variant: 'review',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DN6HcGaD_U_/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DN6HcGaD_U_/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Sieh dir diesen Beitrag auf Instagram an</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DN6HcGaD_U_/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Ein Beitrag geteilt von Evan Thompson (@evanthompson12)</a></p></div></blockquote>`,
                isDefault: true
            },
            {
                id: '3',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DS50z_ODW9K/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '4',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DSntaEdiCss/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '5',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DIp-agEzZLg/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '6',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DKdwltkzKUn/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '7',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C6Aiq7xPfaw/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '8',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C5PslidvBz6/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '9',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C5FTwBNP7Y4/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '10',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DP_akJiE2Iz/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '11',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DKKhbrEOJul/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '12',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DJzgW_zuA40/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '13',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DTX9ij2iEj-/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '14',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DSaW4TyE2ok/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '15',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DTjAv9dDZBW/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '16',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C8r2IfDNqan/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '17',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DT2XEboj3Mo/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:none; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>`,
                isDefault: true
            },
            {
                id: '18',
                type: 'embed',
                variant: 'standard',
                embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DTTM6uejYCh/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DTTM6uejYCh/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Sieh dir diesen Beitrag auf Instagram an</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DTTM6uejYCh/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Ein Beitrag geteilt von GolfwithOcaz (@golfwithocaz)</a></p></div></blockquote>`,
                isDefault: true
            }
        ];

        let cards = [];
        let isEditMode = false;

        // Initialize
        function init() {
            const savedData = localStorage.getItem('instaAudit_cards');
            if (savedData) {
                try {
                    // For demo purposes, we are forcing the new defaults to show the requested videos immediately.
                    // In a real persistent app, we'd check if defaults need to be merged.
                    // To keep persistence, use: cards = JSON.parse(savedData);
                    cards = [...defaultCards]; 
                } catch(e) {
                    cards = [...defaultCards];
                }
            } else {
                cards = [...defaultCards];
                saveData();
            }
            renderCards();

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                const dropdown = document.getElementById('settingsDropdown');
                const btn = document.getElementById('settingsBtn');
                if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
                    dropdown.classList.remove('block');
                    dropdown.classList.add('hidden');
                }
            });
        }

        function saveData() {
            localStorage.setItem('instaAudit_cards', JSON.stringify(cards));
        }

        // --- EXPORT / IMPORT LOGIC ---
        function exportData() {
            const dataStr = JSON.stringify(cards, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const exportFileDefaultName = 'insta-audit-backup.json';
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            toggleSettingsMenu(); // Close menu
        }

        function importData(input) {
            const file = input.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const content = e.target.result;
                    const parsedData = JSON.parse(content);
                    
                    if (Array.isArray(parsedData)) {
                        cards = parsedData;
                        saveData();
                        renderCards();
                        alert('Data restored successfully!');
                    } else {
                        alert('Invalid JSON file format.');
                    }
                } catch (error) {
                    alert('Error reading file. Please make sure it is a valid JSON file.');
                }
            };
            reader.readAsText(file);
            // Reset input so same file can be selected again
            input.value = '';
            toggleSettingsMenu();
        }
        // -----------------------------

        function toggleSettingsMenu() {
            const dropdown = document.getElementById('settingsDropdown');
            if (dropdown.classList.contains('hidden')) {
                dropdown.classList.remove('hidden');
                setTimeout(() => dropdown.classList.add('block'), 10);
            } else {
                dropdown.classList.remove('block');
                dropdown.classList.add('hidden');
            }
        }

        function renderCards() {
            const container = document.getElementById('gridContainer');
            container.innerHTML = '';

            cards.forEach(card => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid';
                
                // Determine Header Style
                let headerHTML = '';
                let hasHeaderBar = false;

                if (card.variant === 'winner') {
                    headerHTML = `<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 z-10 rounded-t-xl"></div>`;
                } else if (card.variant === 'review') {
                    hasHeaderBar = true;
                    headerHTML = `
                        <div class="absolute top-0 left-0 w-full h-1 bg-orange-400 z-10 rounded-t-xl"></div>
                        <div class="px-3 py-2 flex items-center justify-between border-b border-slate-50 bg-orange-50/30 rounded-t-xl">
                            <span class="text-[10px] font-semibold text-orange-600 uppercase tracking-wide">Under Review</span>
                            <iconify-icon icon="solar:star-bold" class="text-orange-400" width="12"></iconify-icon>
                        </div>`;
                } else if (card.variant === 'new') {
                    hasHeaderBar = true;
                     headerHTML = `
                        <div class="absolute top-0 left-0 w-full h-1 bg-indigo-500 z-10 rounded-t-xl"></div>
                        <div class="px-3 py-2 flex items-center justify-between border-b border-slate-50 bg-indigo-50/30 rounded-t-xl">
                            <span class="text-[10px] font-semibold text-indigo-600 uppercase tracking-wide">Imported</span>
                        </div>`;
                }

                // Determine Content Body
                let contentHTML = '';
                if (card.type === 'embed') {
                    const roundedClass = hasHeaderBar ? 'rounded-b-xl' : 'rounded-xl';
                    const marginClass = (card.variant === 'winner' || card.variant === 'new') && !hasHeaderBar ? 'mt-1' : '';

                    contentHTML = `
                    <div class="w-full bg-slate-50 relative overflow-hidden ${roundedClass} ${marginClass}">
                        <div class="instagram-wrapper flex justify-center bg-white min-h-[400px]">
                            ${card.embedCode}
                        </div>
                    </div>`;
                }

                // Delete Button Visibility
                const deleteBtnClass = isEditMode ? 'scale-100 opacity-100' : 'scale-0 opacity-0';

                cardEl.innerHTML = `
                    <button onclick="handleDeleteCard('${card.id}', this)" class="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all ${deleteBtnClass} cursor-pointer">
                        <iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
                    </button>
                    ${headerHTML}
                    ${contentHTML}
                `;
                
                container.appendChild(cardEl);
            });

            // Re-process Instagram Embeds
            if (window.instgrm) {
                setTimeout(() => {
                    window.instgrm.Embeds.process();
                }, 500); 
            }
        }

        function toggleEditMode() {
            isEditMode = !isEditMode;
            const btns = document.querySelectorAll('.delete-btn');
            const toggleContainer = document.getElementById('editModeToggle');
            const toggleDot = toggleContainer.querySelector('div');
            
            if (isEditMode) {
                // Show delete buttons
                btns.forEach(b => {
                    b.classList.remove('scale-0', 'opacity-0');
                    b.classList.add('scale-100', 'opacity-100');
                });
                // Update toggle UI
                toggleContainer.classList.remove('bg-slate-200');
                toggleContainer.classList.add('bg-indigo-600');
                toggleDot.classList.remove('translate-x-0');
                toggleDot.classList.add('translate-x-3');
            } else {
                // Hide delete buttons
                btns.forEach(b => {
                    b.classList.add('scale-0', 'opacity-0');
                    b.classList.remove('scale-100', 'opacity-100');
                });
                // Update toggle UI
                toggleContainer.classList.add('bg-slate-200');
                toggleContainer.classList.remove('bg-indigo-600');
                toggleDot.classList.add('translate-x-0');
                toggleDot.classList.remove('translate-x-3');
            }
        }

        function handleDeleteCard(id, btn) {
            if (confirm('Are you sure you want to remove this content?')) {
                const cardEl = btn.closest('.card-wrapper');
                cardEl.style.opacity = '0';
                cardEl.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    cards = cards.filter(c => c.id !== id);
                    saveData();
                    renderCards();
                    if(isEditMode) {
                        document.querySelectorAll('.delete-btn').forEach(b => {
                            b.classList.remove('scale-0', 'opacity-0');
                            b.classList.add('scale-100', 'opacity-100');
                        });
                    }
                }, 300);
            }
        }

        function handleAddCard() {
            const embedCode = document.getElementById('inputEmbed').value;
            
            if(!embedCode) {
                alert("Please paste the Instagram embed code.");
                return;
            }

            const newCard = {
                id: Date.now().toString(),
                type: 'embed',
                variant: 'new',
                embedCode: embedCode
            };

            cards.unshift(newCard);
            saveData();
            
            document.getElementById('inputEmbed').value = '';
            document.getElementById('addModal').classList.add('hidden');
            
            renderCards();
            
            if(isEditMode) {
                setTimeout(() => {
                     document.querySelectorAll('.delete-btn').forEach(b => {
                        b.classList.remove('scale-0', 'opacity-0');
                        b.classList.add('scale-100', 'opacity-100');
                    });
                }, 50);
            }
        }

        // Initialize on Load
        document.addEventListener('DOMContentLoaded', init);

    
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
      

<aside className="w-64 border-r border-slate-200 bg-white hidden md:flex flex-col z-20 shrink-0">
<div className="flex h-16 border-slate-100 border-b pr-6 pl-6 items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-md flex items-center justify-center text-white text-xs font-bold tracking-tighter">
                    I
                </div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">InstaAudit</span>
</div>
</div>
<div className="p-4 space-y-6">
<div className="">
<h3 className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Workshop</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium bg-slate-50 text-slate-900 rounded-md ring-1 ring-slate-200/50" href="#">
<iconify-icon className="text-indigo-600" icon="solar:chart-square-linear" width="18"></iconify-icon>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                        Competitors
                    </a>
</nav>
</div>
<div className="">
<h3 className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Filter</h3>
<div className="space-y-3 px-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-indigo-500">
<div className="w-2 h-2 bg-indigo-500 rounded-sm"></div>
</div>
<span className="text-sm text-slate-600">Reels</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-indigo-500">
</div>
<span className="text-sm text-slate-600">Carousel</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-indigo-500">
</div>
<span className="text-sm text-slate-600">Stories</span>
</label>
</div>
</div>
</div>
<div className="mt-auto p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
<img alt="Trainer" className="w-full h-full object-cover" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Trainer"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Moritz Kompaß</span>
<span className="text-[10px] text-slate-500">PGA Workshop</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0 bg-slate-50/50">

<header className="h-16 flex items-center justify-between px-8 bg-white border-b border-slate-200 shrink-0 relative z-30">
<div>
<h1 className="text-lg font-semibold text-slate-900 tracking-tight">Content Performance</h1>
<p className="text-xs text-slate-500">Golf &amp; Real Estate Niche Analysis</p>
</div>
<div className="flex items-center gap-3 relative">

<button className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm transition-colors text-xs font-medium" onclick="document.getElementById('addModal').classList.remove('hidden')">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Add Content
                </button>

<div className="relative">
<button className="flex items-center justify-center w-8 h-8 bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md shadow-sm transition-colors" id="settingsBtn" onclick="toggleSettingsMenu()" title="Manage Content">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</button>

<div className="dropdown-content hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl ring-1 ring-slate-200 border border-slate-100 z-50" id="settingsDropdown">
<div className="p-2 space-y-1">
<button className="w-full text-left flex items-center justify-between px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 rounded-md transition-colors group" onclick="toggleEditMode()">
<span className="flex items-center gap-2 font-medium">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:trash-bin-trash-linear"></iconify-icon>
                                    Edit Mode
                                </span>
<div className="w-6 h-3.5 bg-slate-200 rounded-full relative transition-colors" id="editModeToggle">
<div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm absolute top-0.5 left-0.5 transition-all transform translate-x-0"></div>
</div>
</button>
<div className="h-px bg-slate-100 my-1"></div>
<button className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 rounded-md transition-colors font-medium" onclick="exportData()">
<iconify-icon className="text-slate-400" icon="solar:download-linear"></iconify-icon>
                                Backup (Save JSON)
                            </button>
<button className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 rounded-md transition-colors font-medium" onclick="document.getElementById('fileInput').click()">
<iconify-icon className="text-slate-400" icon="solar:upload-linear"></iconify-icon>
                                Restore (Load JSON)
                            </button>
</div>
</div>
</div>
<input accept=".json" className="hidden" id="fileInput" onchange="importData(this)" type="file"/>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mr-auto ml-auto pb-20 gap-x-6 gap-y-6 items-start" id="gridContainer">
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('1', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 z-10 rounded-t-xl">
</div>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl mt-1">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-0" frameborder="0" height="730" id="instagram-embed-0" scrolling="no" src="https://www.instagram.com/reel/DOBMiKkDUU5/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A0%2C%22os%22%3A358.69999998807907%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('2', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="absolute top-0 left-0 w-full h-1 bg-orange-400 z-10 rounded-t-xl"></div>
<div className="px-3 py-2 flex items-center justify-between border-b border-slate-50 bg-orange-50/30 rounded-t-xl">
<span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wide">Under Review</span>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="12"></iconify-icon>
</div>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-b-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-1" frameborder="0" height="946" id="instagram-embed-1" scrolling="no" src="https://www.instagram.com/reel/DN6HcGaD_U_/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A1%2C%22os%22%3A359.69999998807907%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('3', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-2" frameborder="0" height="874" id="instagram-embed-2" scrolling="no" src="https://www.instagram.com/reel/DS50z_ODW9K/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A2%2C%22os%22%3A360.5%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('4', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-3" frameborder="0" height="730" id="instagram-embed-3" scrolling="no" src="https://www.instagram.com/reel/DSntaEdiCss/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A3%2C%22os%22%3A976.7999999821186%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('5', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-4" frameborder="0" height="784" id="instagram-embed-4" scrolling="no" src="https://www.instagram.com/reel/DIp-agEzZLg/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A4%2C%22os%22%3A997.3999999761581%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('6', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-5" frameborder="0" height="802" id="instagram-embed-5" scrolling="no" src="https://www.instagram.com/reel/DKdwltkzKUn/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A5%2C%22os%22%3A1180.7999999821186%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('7', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-6" frameborder="0" height="820" id="instagram-embed-6" scrolling="no" src="https://www.instagram.com/reel/C6Aiq7xPfaw/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A6%2C%22os%22%3A1438.7999999821186%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('8', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-7" frameborder="0" height="910" id="instagram-embed-7" scrolling="no" src="https://www.instagram.com/reel/C5PslidvBz6/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A7%2C%22os%22%3A1531.0999999940395%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('9', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-8" frameborder="0" height="1252" id="instagram-embed-8" scrolling="no" src="https://www.instagram.com/reel/C5FTwBNP7Y4/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A8%2C%22os%22%3A1692.7999999821186%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('10', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-9" frameborder="0" height="766" id="instagram-embed-9" scrolling="no" src="https://www.instagram.com/reel/DP_akJiE2Iz/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A9%2C%22os%22%3A1973.7999999821186%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('11', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-10" frameborder="0" height="784" id="instagram-embed-10" scrolling="no" src="https://www.instagram.com/reel/DKKhbrEOJul/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A10%2C%22os%22%3A2060.199999988079%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('12', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-11" frameborder="0" height="784" id="instagram-embed-11" scrolling="no" src="https://www.instagram.com/reel/DJzgW_zuA40/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A11%2C%22os%22%3A2228.5999999940395%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('13', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-12" frameborder="0" height="784" id="instagram-embed-12" scrolling="no" src="https://www.instagram.com/reel/DTX9ij2iEj-/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A12%2C%22os%22%3A2408.5%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('14', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-13" frameborder="0" height="784" id="instagram-embed-13" scrolling="no" src="https://www.instagram.com/reel/DSaW4TyE2ok/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A13%2C%22os%22%3A2517.5%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('15', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-14" frameborder="0" height="874" id="instagram-embed-14" scrolling="no" src="https://www.instagram.com/reel/DTjAv9dDZBW/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A14%2C%22os%22%3A2808.699999988079%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('16', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-15" frameborder="0" height="838" id="instagram-embed-15" scrolling="no" src="https://www.instagram.com/reel/C8r2IfDNqan/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A15%2C%22os%22%3A2894.5999999940395%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('17', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-16" frameborder="0" height="922" id="instagram-embed-16" scrolling="no" src="https://www.instagram.com/reel/DT2XEboj3Mo/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A16%2C%22os%22%3A3052%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
<div className="card-wrapper flex flex-col group hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-visible bg-white border-slate-200 border rounded-xl relative shadow-sm animate-fade-in h-fit break-inside-avoid">
<button className="delete-btn absolute -top-2 -right-2 z-50 bg-white text-red-500 border border-slate-200 rounded-full p-1.5 shadow-lg hover:bg-red-50 hover:border-red-200 transition-all scale-0 opacity-0 cursor-pointer" onclick="handleDeleteCard('18', this)">
<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
</button>
<div className="w-full bg-slate-50 relative overflow-hidden rounded-xl">
<div className="instagram-wrapper flex justify-center bg-white min-h-[400px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-17" frameborder="0" height="748" id="instagram-embed-17" scrolling="no" src="https://www.instagram.com/reel/DTTM6uejYCh/embed/captioned/?cr=1&amp;v=14&amp;wp=696&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A17%2C%22os%22%3A3208%2C%22ls%22%3A101.69999998807907%2C%22le%22%3A101.69999998807907%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:lamp-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Workshop Insight</h4>
<p className="text-xs text-slate-500 mt-1 max-w-md">Golf content with quick swing transitions (under 1.5s) retains 40% more viewers. Real estate tours perform best with direct price hooks.</p>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-md shadow-sm transition-colors">
<iconify-icon icon="solar:document-add-linear" width="16"></iconify-icon>
                    Add to Action Plan
                </button>
</div>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="addModal" role="dialog">
<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="document.getElementById('addModal').classList.add('hidden')"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-slate-200">
<div className="bg-white px-6 py-6">
<div className="flex items-center justify-between mb-5">
<h3 className="text-base font-semibold leading-6 text-slate-900 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:add-circle-bold" width="20"></iconify-icon>
                                Add New Content
                            </h3>
<button className="text-slate-400 hover:text-slate-600" onclick="document.getElementById('addModal').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Instagram Embed Code</label>
<textarea className="w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-relaxed bg-slate-50 focus:bg-white transition-all font-mono" id="inputEmbed" placeholder="Paste &lt;blockquote className='instagram-media'... code here" rows="6"></textarea>
<p className="text-[10px] text-slate-400 mt-1">Go to Instagram Post &gt; ... &gt; Embed &gt; Copy Embed Code</p>
</div>
</div>
</div>
<div className="bg-slate-50 px-6 py-4 flex flex-row-reverse gap-3 border-t border-slate-100">
<button className="inline-flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 sm:w-auto transition-colors" onclick="handleAddCard()" type="button">Import Video</button>
<button className="inline-flex w-full justify-center rounded-lg bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:w-auto transition-colors" onclick="document.getElementById('addModal').classList.add('hidden')" type="button">Cancel</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
