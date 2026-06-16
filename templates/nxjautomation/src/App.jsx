import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1582974095691939');
fbq('track', 'PageView');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['IBM Plex Mono', 'monospace'],
},
colors: {
page: '#050505',
card: '#0a0a0a',
primary: '#f97316',
},
animation: {
'spotlight': 'spotlight 2s ease .75s 1 forwards',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
spotlight: {
'0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
'100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Initialize Icons
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    // Particles
    document.addEventListener('DOMContentLoaded', () => {
        if(typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.1, random: false },
                    size: { value: 2, random: true },
                    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
                    move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                    modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
                },
                retina_detect: true
            });
        }
    });

    // Zoho Validation Script
    // $Id: $
    function zf_ValidateAndSubmit(){
        if(zf_CheckMandatory()){
            if(zf_ValidCheck()){
                if(isSalesIQIntegrationEnabled){
                    zf_addDataToSalesIQ();
                }
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    function zf_CheckMandatory(){
        for(i = 0 ; i < zf_MandArray.length ; i ++) {
            var fieldObj=document.forms.form[zf_MandArray[i]];
            if(fieldObj) {
                if(fieldObj.nodeName != null ){
                    if ( fieldObj.nodeName=='OBJECT' ) {
                        if(!zf_MandatoryCheckSignature(fieldObj)){
                            zf_ShowErrorMsg(zf_MandArray[i]);
                            return false;
                        }
                    }else if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
                        if(fieldObj.type =='file')
                        {
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_MandArray[i]);
                            return false;
                        }
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_MandArray[i]);
                        return false;
                    }  else if( fieldObj.nodeName=='SELECT' ) {// No I18N
                        if(fieldObj.options[fieldObj.selectedIndex].value=='-Select-') {
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_MandArray[i]);
                            return false;
                        }
                    } else if( fieldObj.type =='checkbox' || fieldObj.type =='radio' ){
                        if(fieldObj.checked == false){
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_MandArray[i]);
                            return false;
                        }
                    }
                }else{
                    var checkedValsCount = 0;
                    var inpChoiceElems = fieldObj;
                    for(var ii = 0; ii < inpChoiceElems.length ; ii ++ ){
                        if(inpChoiceElems[ii].checked === true ){
                            checkedValsCount ++;
                        }
                    }
                    if ( checkedValsCount == 0) {
                        inpChoiceElems[0].focus();
                        zf_ShowErrorMsg(zf_MandArray[i]);
                        return false;
                    }
                }
            }
        }
        return true;
    }
    function zf_ValidCheck(){
        var isValid = true;
        for(ind = 0 ; ind < zf_FieldArray.length ; ind++ ) {
            var fieldObj=document.forms.form[zf_FieldArray[ind]];
            if(fieldObj) {
                if(fieldObj.nodeName != null ){
                    var checkType = fieldObj.getAttribute("checktype");
                    if( checkType == "c2" ){// No I18N
                        if( !zf_ValidateNumber(fieldObj)){
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }else if( checkType == "c3" ){// No I18N
                        if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj,10) ) {
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }else if( checkType == "c4" ){// No I18N
                        if( !zf_ValidateDateFormat(fieldObj)){
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }else if( checkType == "c5" ){// No I18N
                        if (!zf_ValidateEmailID(fieldObj)) {
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }else if( checkType == "c6" ){// No I18N
                        if (!zf_ValidateLiveUrl(fieldObj)) {
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }else if( checkType == "c7" ){// No I18N
                        if (!zf_ValidatePhone(fieldObj)) {
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }else if( checkType == "c8" ){// No I18N
                        zf_ValidateSignature(fieldObj);
                    }else if( checkType == "c9" ){// No I18N
                        if( !zf_ValidateMonthYearFormat(fieldObj)){
                            isValid = false;
                            fieldObj.focus();
                            zf_ShowErrorMsg(zf_FieldArray[ind]);
                            return false;
                        }
                    }
                }
            }
        }
        return isValid;
    }
    function zf_ShowErrorMsg(uniqName){
        var fldLinkName;
        for( errInd = 0 ; errInd < zf_FieldArray.length ; errInd ++ ) {
            fldLinkName = zf_FieldArray[errInd].split('_')[0];
            if(document.getElementById(fldLinkName+"_error")) {
                document.getElementById(fldLinkName+"_error").style.display = 'none';
            }
        }
        var linkName = uniqName.split('_')[0];
        if(document.getElementById(linkName+"_error")) {
            document.getElementById(linkName+"_error").style.display = 'block';
        }
    }
    function zf_ValidateNumber(elem) {
        var validChars = "-0123456789";
        var numValue = elem.value.replace(/^\s+|\s+$/g, '');
        if (numValue != null && !numValue == "") {
            var strChar;
            var result = true;
            if (numValue.charAt(0) == "-" && numValue.length == 1) {
                return false;
            }
            for (i = 0; i < numValue.length && result == true; i++) {
                strChar = numValue.charAt(i);
                if ((strChar == "-") && (i != 0)) {
                    return false;
                }
                if (validChars.indexOf(strChar) == -1) {
                    result = false;
                }
            }
            return result;
        } else {
            return true;
        }
    }
    function zf_ValidateDateFormat(inpElem){
        var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
        if( dateValue == "" ){
            return true;
        }else{
            return( zf_DateRegex.test(dateValue) );
        }
    }
    function zf_ValidateCurrency(elem) {
        var validChars = "0123456789.";
        var numValue = elem.value.replace(/^\s+|\s+$/g, '');
        if(numValue.charAt(0) == '-'){
            numValue = numValue.substring(1,numValue.length);
        }
        if (numValue != null && !numValue == "") {
            var strChar;
            var result = true;
            for (i = 0; i < numValue.length && result == true; i++) {
                strChar = numValue.charAt(i);
                if (validChars.indexOf(strChar) == -1) {
                    result = false;
                }
            }
            return result;
        } else {
            return true;
        }
    }
    function zf_ValidateDecimalLength(elem,decimalLen) {
        var numValue = elem.value;
        if (numValue.indexOf('.') >= 0) {
            var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
            if (decimalLength > decimalLen) {
                return false;
            } else {
                return true;
            }
        }
        return true;
    }
    function zf_ValidateEmailID(elem) {
        var check = 0;
        var emailValue = elem.value;
        if (emailValue != null && !emailValue == "") {
            var emailArray = emailValue.split(",");
            for (i = 0; i < emailArray.length; i++) {
                var emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
                if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
                    check = 1;
                }
            }
            if (check == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    function zf_ValidateLiveUrl(elem) {
        var urlValue = elem.value;
        if(urlValue !== null && typeof(urlValue) !== "undefined") {
            urlValue = urlValue.replace(/^\s+|\s+$/g, '');
            if(urlValue !== "") {
                var urlregex = new RegExp("^(((https|http|ftps|ftp)://[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*)+(:\\d{1,5})?)|((w|W){3}(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*){2,}(:\\d{1,5})?)|([a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*)+(:\\d{1,5})?))(/[-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$", "i");
                return(urlregex.test(urlValue));
            }
        }
        return true;
    }
    function zf_ValidatePhone(inpElem){
        var ZFPhoneRegex = {
            PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
            PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
            PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
            PHONE_USA_REG: /^[0-9]+$/,
            PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
        }
        var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
        var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
        var toReturn = true ;
        if( phoneFormat === 1 ){
            if(inpElem.getAttribute("valType") == 'code'){
                var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
                if(fieldInpVal != "" && !codeRexp.test(fieldInpVal)){
                    return false;
                }
            }else{
                var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
                if(inpElem.getAttribute("phoneFormatType") == '2'){
                    IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
                }
                if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
                    toReturn = false;
                    return toReturn;
                }
            }
            return toReturn;
        }else if( phoneFormat === 2 ){
            var InpMaxlength = inpElem.getAttribute("maxlength");
            var USARexp = ZFPhoneRegex.PHONE_USA_REG;
            if  ( fieldInpVal != "" && USARexp.test(fieldInpVal) &&  fieldInpVal.length == InpMaxlength ) {
                toReturn = true;
            }else if( fieldInpVal == "" ){
                toReturn = true;
            }else{
                toReturn = false;
            }
            return toReturn;
        }
    }
    function zf_ValidateSignature(objElem) {
        var linkName = objElem.getAttribute("compname");
        var canvasElem = document.getElementById("drawingCanvas-"+linkName);
        var isValidSign = zf_IsSignaturePresent(objElem,linkName,canvasElem);
        var hiddenSignInputElem = document.getElementById("hiddenSignInput-"+linkName);
        if(isValidSign){
            hiddenSignInputElem.value = canvasElem.toDataURL();
        }else{
            hiddenSignInputElem.value = "";// No I18N
        }
        return isValidSign;
    }
    function zf_MandatoryCheckSignature(objElem){
        var linkName = objElem.getAttribute("compname");
        var canvasElem = document.getElementById("drawingCanvas-"+linkName);
        var isValid = zf_IsSignaturePresent(objElem,linkName,canvasElem);
        return isValid;
    }
    function zf_IsSignaturePresent(objElem,linkName,canvasElem){
        var context = canvasElem.getContext('2d'); // No I18N
        var canvasWidth = canvasElem.width;
        var canvasHeight = canvasElem.height;
        var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
        var signLen = canvasData.data.length;
        var flag = false;
        for(var index =0; index< signLen; index++) {
            if(!canvasData.data[index]) {
                flag =  false;
            }else if(canvasData.data[index]) {
                flag = true;
                break;
            }
        }
        return flag;
    }
    function zf_FocusNext(elem,event) {
        if(event.keyCode == 9 || event.keyCode == 16){
            return;
        }
        if(event.keyCode >=37 && event.keyCode <=40){
            return;
        }
        var compname = elem.getAttribute("compname");
        var inpElemName = elem.getAttribute("name");
        if (inpElemName == compname+"_countrycode") {
            if (elem.value.length == 3) {
                document.getElementsByName(compname+"_first")[0].focus();
            }
        } else if (inpElemName == compname+"_first" ) {
            if (elem.value.length == 3) {
                document.getElementsByName(compname+"_second")[0].focus();
            }
        }
    }
    function zf_ValidateMonthYearFormat(inpElem){
        var monthYearValue = inpElem.value.replace(/^\s+|\s+$/g, '');
        if( monthYearValue == "" ){
            return true;
        }else{
            return (zf_MonthYearRegex.test(monthYearValue));
        }
    }
    function zf_SetDateAndMonthRegexBasedOnDateFormate(dateFormat){
        var dateAndMonthRegexFormateArray = new Array();
        var dateFormatRegExp;
        var monthYearFormatRegExp;
        if(dateFormat === "dd-MMM-yyyy"){
            dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp = "^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";// No I18N
        }else if(dateFormat === "dd-MMMM-yyyy"){// No I18N
            dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";// No I18N
        }else if(dateFormat === "MMMM-dd-yyyy"){// No I18N
            dateFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp ="^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";// No I18N
        }else if(dateFormat === "dd/MM/yyyy"){// No I18N
            dateFormatRegExp ="^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp ="^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
        }else if(dateFormat === "dd-MM-yyyy"){// No I18N
            dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-]([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
        }else if(dateFormat === "MM/dd/yyyy"){// No I18N
            dateFormatRegExp = "^([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))[\/](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
        }else if(dateFormat === "yyyy-MM-dd"){// No I18N
            dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
            monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])$";
        }else if(dateFormat === "yyyy/MM/dd"){// No I18N
            dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
            monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])$";
        }else if(dateFormat === "dd.MM.yyyy"){// No I18N
            dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[.]([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp = "^([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
        }else if(dateFormat === "MM-dd-yyyy"){// No I18N
            dateFormatRegExp = "^([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
            monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
        }
        dateAndMonthRegexFormateArray.push(dateFormatRegExp);
        dateAndMonthRegexFormateArray.push(monthYearFormatRegExp);
        return dateAndMonthRegexFormateArray;
    }

    // Initialization
    var dateAndMonthRegexFormateArray = zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy');
    var zf_DateRegex = new RegExp(dateAndMonthRegexFormateArray[0]);
    var zf_MonthYearRegex = new RegExp(dateAndMonthRegexFormateArray[1]);
    var zf_MandArray = [ "Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "PhoneNumber_first", "PhoneNumber_second", "Radio", "Radio3", "Radio1"]; 
    var zf_FieldArray = [ "Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "PhoneNumber_first", "PhoneNumber_second", "Radio", "Radio3", "Radio1"]; 
    var isSalesIQIntegrationEnabled = false;
    var salesIQFieldsArray = [];

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <img className="" height="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{display: 'none'}} width="1"/>




<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&amp;family=IBM+Plex+Mono:wght@400;600&amp;display=swap" rel="stylesheet"/>

<style>
body {
background-color: #020202;
color: #e2e8f0;
overflow-x: hidden;
}
/* Scroll Margin for Sticky Nav Offset */
section, main, div {
scroll-margin-top: 100px;
}
#particle-canvas {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -15;
pointer-events: none;
}
.bg-grid-slate {
background-size: 50px 50px;
background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
mask-image: linear-gradient(to bottom, black 10%, transparent 90%);
-webkit-mask-image: linear-gradient(to bottom, black 10%, transparent 90%);
}
.text-metallic {
background: linear-gradient(to bottom, #ffffff 40%, #71717a);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-bottom: 0.1em;
}
::-webkit-scrollbar { width: 0px; background: transparent; }
/* 3D Perspective & Cards */
.perspective-container {
perspective: 1200px;
}
.transform-3d-card {
transform-style: preserve-3d;
transition: transform 0.1s ease-out;
}
/* Scroll Triggered Reveal */
.reveal-on-scroll {
opacity: 0;
transform: translateY(30px);
transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-on-scroll.is-visible {
opacity: 1;
transform: translateY(0);
}
/* Laser Button Effect */
.laser-btn {
position: relative;
overflow: hidden;
isolation: isolate;
}
.laser-btn::before {
content: '';
position: absolute;
inset: -2px;
background: conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 80%, #f97316 90%, transparent 100%);
border-radius: inherit;
animation: rotate-laser 4s linear infinite reverse;
z-index: -2;
opacity: 0;
transition: opacity 0.3s;
}
.laser-btn::after {
content: '';
position: absolute;
inset: 1px;
background: inherit;
border-radius: inherit;
z-index: -1;
}
.laser-btn:hover::before, .laser-btn:focus::before {
opacity: 1;
}
@keyframes rotate-laser {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
/* Ticker Animation */
@keyframes ticker {
0% { transform: translateX(0); }
100% { transform: translateX(-100%); }
}
.ticker-track {
animation: ticker 40s linear infinite;
width: max-content;
}
.ticker-track:hover {
animation-play-state: paused;
}
/* Zoho Form Error Styles */
.zf-errorMessage {
color: #ef4444;
font-size: 0.75rem;
margin-top: 0.25rem;
font-family: 'Inter', sans-serif;
}
</style>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75 hue-rotate-15" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="bg-gradient-to-br from-black via-blue-700 to-purple-600">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="BhoqrigscYbD7NN1fwcp"></div>

</div></div>

<div className="fixed top-0 w-full h-screen -z-10 hue-rotate-15 saturate-50 blur-[1px] opacity-40 pointer-events-none">
<div className="absolute inset-0" id="particles-js"><canvas className="particles-js-canvas-el" height="852" style={{width: '100%', height: '100%'}} width="393"></canvas></div>
</div>
<div className="fixed inset-0 bg-grid-slate pointer-events-none -z-20"></div>

<nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-2xl transition-all duration-300">
<div className="relative flex flex-col md:flex-row md:items-center justify-between px-4 py-3 md:px-2 md:py-2 rounded-2xl md:rounded-full border backdrop-blur-xl shadow-2xl ring-1 transition-all border-white/5 bg-black/50 ring-white/5 hover:border-white/10 group/nav">
<div className="flex items-center justify-between w-full md:w-auto md:pl-4">
<a className="flex items-center gap-3 cursor-pointer" href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;">
<div className="w-5 h-5 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-md flex items-center justify-center shadow-lg shadow-orange-500/20 group">
<div className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform bg-black"></div>
</div>
<span className="text-sm font-medium text-zinc-100 tracking-tighter font-sans">NXJ Automation</span>
</a>
<button aria-controls="mobile-menu" aria-expanded="false" className="md:hidden text-zinc-400 hover:text-white transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
<a className="transition-colors hover:text-orange-100 hover:bg-white/5 text-xs text-zinc-500 font-sans rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="#how-it-works">Watch Demo</a>
<a className="transition-colors hover:text-orange-100 hover:bg-white/5 text-xs text-zinc-500 font-sans rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="#packages">Packages</a>
<a className="transition-colors hover:text-orange-100 hover:bg-white/5 text-xs text-zinc-500 font-sans rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="#faq">FAQ</a>
</div>
<div className="hidden flex-col w-full pt-4 pb-2 space-y-2 md:hidden border-t border-white/5 mt-3" id="mobile-menu">
<a className="mobile-nav-link block w-full text-center py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#how-it-works">Watch Demo</a>
<a className="mobile-nav-link block w-full text-center py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#packages">Packages</a>
<a className="mobile-nav-link block w-full text-center py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" href="#faq">FAQ</a>
<a className="mobile-nav-link block w-full text-center py-3 text-sm font-semibold text-orange-400 bg-orange-950/20 rounded-xl transition-colors border border-orange-500/20" href="#get-started">Get Started</a>
</div>
<div className="hidden md:flex items-center pr-1 gap-2">
<a className="laser-btn relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-zinc-950" href="#get-started">
<span className="inline-flex cursor-pointer items-center justify-center transition-colors hover:bg-zinc-900 text-xs font-medium text-white font-sans w-full h-full rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-3xl bg-zinc-950 relative z-10">
                  Get Started
                </span>
</a>
</div>
</div>
</nav>

<main className="overflow-visible md:pt-40 md:pb-20 pt-28 pb-12 relative" id="hero-section">
<div className="z-10 sm:px-6 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="reveal-on-scroll is-visible">
<h1 className="md:text-7xl lg:text-8xl bg-clip-text leading-[1.1] text-4xl font-semibold text-transparent tracking-tighter font-sans bg-gradient-to-b from-white via-white to-zinc-500 max-w-5xl mr-auto mb-6 ml-auto pb-2">
<span className="text-slate-50 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Done For You</span>
<br className="block"/>
<span className="bg-clip-text font-semibold text-transparent tracking-tighter font-sans bg-gradient-to-t from-[#f98424] to-orange-600/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Amazon Stores</span>
</h1>
<p className="md:text-xl leading-relaxed md:mb-10 text-base font-light text-zinc-500 tracking-tighter font-sans max-w-2xl mr-auto mb-8 ml-auto">How we scale hundreds of <span className="text-zinc-200 tracking-tighter font-sans">Amazon Stores.</span></p>
<div className="flex flex-row items-center justify-center gap-4 mb-16 w-full md:w-auto">
<a className="flex-1 md:flex-none md:w-auto group flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] text-sm font-semibold text-white font-sans h-12 rounded-full pr-8 pl-8 relative" href="#get-started" style={{background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box', border: '1.5px solid transparent', boxShadow: '-15px 0 40px -5px rgba(249, 115, 22, 0.6), 15px 0 40px -5px rgba(255, 255, 255, 0.4)'}}>
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">Get Started</span>
</a>
<a className="flex-1 md:flex-none md:w-auto inline-flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 btn-magnetic h-12 rounded-full p-[1px] relative" href="#how-it-works">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-colors hover:bg-zinc-900 z-10 text-sm font-medium text-white font-sans bg-zinc-950 w-full h-full rounded-full pr-8 pl-8 relative backdrop-blur-3xl">
    Watch Demo
  </span>
</a>
</div>

<section className="mb-16 md:mb-24 relative opacity-60" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="max-w-7xl mx-auto px-4 overflow-hidden">
<div className="flex gap-12 items-center ticker-track">

<div className="flex gap-12 shrink-0 items-center text-zinc-400">
<iconify-icon height="34" icon="simple-icons:amazon" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:adidas" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:apple" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:dell" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:google" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:hp" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:nike" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:samsung" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:sony" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:lg" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
</div>

<div className="flex gap-12 shrink-0 items-center text-zinc-400">
<iconify-icon height="34" icon="simple-icons:amazon" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:adidas" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon className="" height="34" icon="simple-icons:apple" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:dell" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:google" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:hp" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:nike" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon className="" height="34" icon="simple-icons:samsung" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:sony" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
<iconify-icon height="34" icon="simple-icons:lg" style={{color: 'rgb(161, 161, 170)'}} width="34"></iconify-icon>
</div>
</div>
</div>
</section>
</div>

</div>
</main>

<section className="pt-12 md:pt-24 pb-12 md:pb-24 relative" id="how-it-works">
<div className="sm:px-6 reveal-on-scroll max-w-5xl mr-auto ml-auto pr-4 pl-4">
<div className="mb-8 md:mb-12 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-metallic font-sans mb-4 md:mb-6 pb-2">How it
      works.</h2>
</div>
<div className="relative group rounded-2xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl overflow-hidden">
<div className="-inset-1 group-hover:opacity-40 transition duration-1000 bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-20 absolute blur-xl">
</div>
<div className="relative rounded-xl overflow-hidden bg-black aspect-video video-container">
<div className="video-header absolute top-0 left-0 w-full z-10 p-4 md:p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
<h3>
<img alt="NXJ Automation" className="logo-accent h-6 md:h-8 w-auto object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</h3>
</div>
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1166881972?dnt=1&amp;app_id=122963" title="Amazon Automation Process"></iframe>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16 md:pt-32 md:pb-32 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 reveal-on-scroll">
<div className="lg:px-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 z-10 w-full relative gap-x-20 gap-y-20 items-center">

<div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none flex items-center justify-center">

<div className="relative w-64 h-64 sm:w-80 sm:h-80">

<div className="absolute inset-0 z-0 translate-y-24 transition-transform duration-700 hover:translate-y-28 group">
<div className="w-full h-full border border-white/10 bg-white/[0.02] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-orange-500/30">
</div>
<div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-300">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider font-sans">04. Scale</span>
<div className="w-8 h-4 bg-zinc-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-green-500 rounded-full"></div>
</div>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-left -rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-10 translate-y-12 transition-transform duration-700 hover:translate-y-14 group">
<div className="w-full h-full border border-white/10 bg-white/[0.04] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-orange-500/30">
</div>
<div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-200">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<div className="w-8 h-4 bg-zinc-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-white/20 rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider font-sans">03. Launch</span>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-right rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-20 translate-y-0 transition-transform duration-700 hover:-translate-y-2 group">
<div className="w-full h-full border border-white/10 bg-white/[0.06] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-orange-500/30">
</div>
<div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-100">
<div className="px-3 flex items-center gap-2 shadow-xl">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider font-sans">02. Source</span>
<div className="w-8 h-4 bg-orange-500/20 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-orange-500 rounded-full"></div>
</div>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-left -rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-30 -translate-y-12 transition-transform duration-700 hover:-translate-y-16 group">
<div className="w-full h-full border border-white/10 bg-white/[0.08] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-orange-500/50 hover:bg-white/5">
</div>
<div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<div className="w-8 h-4 bg-orange-500/20 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-orange-500 rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider font-sans">01. Research</span>
</div>
<div className="w-12 h-[1px] bg-white/10 origin-right rotate-[25deg]"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 font-sans">
                    From Setup
                    <span className="text-zinc-500">to Success</span>
</h2>
<p className="text-lg text-zinc-500 leading-relaxed mb-16 max-w-md font-light font-sans">
                    We strip away the complexity of Amazon, focusing on data-driven product selection and operational efficiency to deliver consistent returns.
                </p>

<div className="relative space-y-12 pl-2">
<div className="bg-gradient-to-b from-orange-500 via-white/10 to-transparent opacity-30 w-[1px] absolute top-4 bottom-4 left-[27px]"></div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300 text-zinc-500">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-orange-500 transition-colors font-sans">Market Research</h3>
<p className="text-zinc-500 font-light leading-relaxed font-sans text-sm">
                                We utilize proprietary Ai algorithms to identify high-demand, low-competition products within the Amazon marketplace.
                            </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300 text-zinc-500">
<iconify-icon height="20" icon="solar:box-linear" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-orange-500 transition-colors font-sans">Global Sourcing</h3>
<p className="text-zinc-500 font-light leading-relaxed font-sans text-sm">
                                Leveraging our network of 700+ authorized brands to secure inventory at competitive wholesale rates.
                            </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300 text-zinc-500">
<iconify-icon height="20" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-orange-500 transition-colors font-sans">Launch &amp; Optimization</h3>
<p className="text-zinc-500 font-light leading-relaxed font-sans text-sm">
                                Listings are crafted with SEO-optimized copy and professional imagery to maximize conversion rates from day one.
                            </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300 text-zinc-500">
<iconify-icon height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
</div>
<div className="pt-1">
<h3 className="text-xl text-white font-normal mb-2 group-hover:text-orange-500 transition-colors font-sans">Scale Management</h3>
<p className="text-zinc-500 font-light leading-relaxed font-sans text-sm">
                                Continuous monitoring of PPC campaigns and inventory levels to ensure sustainable month-over-month growth.
                            </p>
</div>
</div>
</div>

<div className="mt-16 pt-10 border-t border-white/5">
<p className="text-xs uppercase tracking-widest text-zinc-600 mb-6 font-sans">Powered by</p>
<div className="flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:amazon" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:googleanalytics" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:openai" width="24"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:shopify" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-16 pb-16 relative" id="packages">
<div className="max-w-7xl mx-auto px-4 sm:px-6 reveal-on-scroll">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl text-metallic font-semibold tracking-tighter font-sans mb-4 pb-2">Packages</h2>
<p className="text-zinc-500 font-light">Choose the automation level that fits your goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">

<div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 flex flex-col gap-6 hover:border-white/20 transition-colors relative h-full">
<div>
<h3 className="text-xl font-semibold text-white mb-2 font-sans">Bronze</h3>
<div className="text-3xl font-bold text-white font-sans">50% <span className="text-sm font-normal text-zinc-500">Profit Split</span></div>
</div>
<ul className="space-y-4 text-sm text-zinc-400 font-sans flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ai powered product research</li>
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Brand authorization (700+ Brands)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Same day pack, print, and ship</li>
</ul>
<a className="group flex w-full overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-sans rounded-xl py-3 px-4 relative items-center justify-center" href="#get-started">
<style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>

<div className="absolute inset-0 -z-20 rounded-xl overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-xl bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-xl absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-xl pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">Contact Sales</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex flex-col gap-6 hover:border-white/20 transition-colors bg-zinc-900/40 h-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative gap-x-6 gap-y-6">
<div className="">
<h3 className="text-xl font-semibold text-white mb-2 font-sans">Silver</h3>
<div className="text-3xl font-bold text-white font-sans">60% <span className="text-sm font-normal text-zinc-500">Profit Split</span></div>
</div>
<ul className="space-y-4 text-sm text-zinc-400 font-sans flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ai powered product research</li>
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Brand authorization (700+ Brands)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Same day pack, print, and ship</li>
</ul>
<a className="group flex w-full overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-sans rounded-xl py-3 px-4 relative items-center justify-center" href="#get-started">
<style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>

<div className="absolute inset-0 -z-20 rounded-xl overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-xl bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-xl absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-xl pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">Contact Sales</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex flex-col gap-6 bg-zinc-900/60 h-full border-orange-500/50 border rounded-3xl p-8 relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">Most Popular</div>
<div className="">
<h3 className="text-xl font-semibold text-white mb-2 font-sans">Gold</h3>
<div className="text-3xl font-bold text-white font-sans">70% <span className="text-sm font-normal text-zinc-500">Profit Split</span></div>
</div>
<ul className="space-y-4 text-sm text-zinc-300 font-sans flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Ai powered product research</li>
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Brand authorization (700+ Brands)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Same day pack, print, and ship</li>
</ul>
<a className="laser-btn w-full block text-center py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20 transition-colors font-sans text-sm font-medium" href="#get-started">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-32 overflow-hidden" id="get-started">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="z-10 max-w-2xl mx-auto px-4 sm:px-6 relative reveal-on-scroll">
<div className="text-center mb-8 md:mb-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter font-sans mb-4 pb-2">Get Started.</h2>
<p className="font-light text-zinc-500 font-sans">Ready to automate your business? Fill out the form below.</p>
</div>

<div className="zf-templateWidth">
<form accept-charset="UTF-8" action="https://forms.zohopublic.com/nxjmarketingllc/form/NXJAutomation/formperma/0UzweRQCw-_cducMqX30zMSCTlbPte6lL9s-zFuAmDw/htmlRecords/submit" className="space-y-4 md:space-y-6" enctype="multipart/form-data" id="form" method="POST" name="form" onsubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'>
<input name="zf_referrer_name" type="hidden" value=""/>
<input name="zf_redirect_url" type="hidden" value=""/>
<input name="zc_gad" type="hidden" value=""/>
<input name="utm_source" type="hidden" value=""/>
<input name="utm_medium" type="hidden" value=""/>
<input name="utm_campaign" type="hidden" value=""/>
<input name="utm_term" type="hidden" value=""/>
<input name="utm_content" type="hidden" value=""/>

<div className="zf-tempFrmWrapper zf-name zf-namelarge space-y-2">
<label className="text-xs font-medium text-zinc-400 font-sans ml-1"> Name <em className="text-orange-500">*</em> </label>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-700 font-sans" fieldtype="7" maxlength="255" name="Name_First" placeholder="First" type="text"/>
</div>
<div className="space-y-1">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-700 font-sans" fieldtype="7" maxlength="255" name="Name_Last" placeholder="Last" type="text"/>
</div>
</div>
<p className="zf-errorMessage" id="Name_error" style={{display: 'none'}}>Invalid value</p>
</div>

<div className="zf-tempFrmWrapper zf-large space-y-2">
<label className="text-xs font-medium text-zinc-400 font-sans ml-1"> Email <em className="text-orange-500">*</em> </label>
<div className="zf-tempContDiv">
<input checktype="c5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-700 font-sans" fieldtype="9" maxlength="255" name="Email" placeholder="" type="text" value=""/>
<p className="zf-errorMessage" id="Email_error" style={{display: 'none'}}>Invalid value</p>
</div>
</div>

<div className="zf-tempFrmWrapper zf-phone space-y-2">
<label className="text-xs font-medium text-zinc-400 font-sans ml-1"> Phone <em className="text-orange-500">*</em> </label>
<div className="zf-tempContDiv zf-phonefld">
<div className="zfPhoneUSA flex items-center gap-2">
<input checktype="c7" className="w-16 bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-sm text-center text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-700 font-sans" compname="PhoneNumber" fieldtype="11" id="PhoneNumber_countrycode" maxlength="3" name="PhoneNumber_countrycode" onkeyup="zf_FocusNext(this,event)" phoneformat="2" placeholder="###" type="text" value=""/>
<span className="text-zinc-500">-</span>
<input checktype="c7" className="w-16 bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-sm text-center text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-700 font-sans" compname="PhoneNumber" id="PhoneNumber_first" maxlength="3" name="PhoneNumber_first" onkeyup="zf_FocusNext(this,event)" phoneformat="2" placeholder="###" type="text" value=""/>
<span className="text-zinc-500">-</span>
<input checktype="c7" className="w-24 bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-sm text-center text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-700 font-sans" compname="PhoneNumber" id="PhoneNumber_second" maxlength="4" name="PhoneNumber_second" onkeyup="zf_FocusNext(this,event)" phoneformat="2" placeholder="####" type="text" value=""/>
</div>
<p className="zf-errorMessage" id="PhoneNumber_error" style={{display: 'none'}}>Invalid value</p>
</div>
</div>

<div className="zf-radio zf-tempFrmWrapper zf-sideBySide space-y-3 pt-2">
<label className="text-xs font-medium text-zinc-400 font-sans ml-1"> Time Zone <em className="text-orange-500">*</em> </label>
<div className="zf-tempContDiv">
<div className="zf-overflow grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio_1" name="Radio" type="radio" value="Hawaii"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">Hawaii</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio_2" name="Radio" type="radio" value="Pacific"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">Pacific</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio_3" name="Radio" type="radio" value="Arizona"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">Arizona</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio_4" name="Radio" type="radio" value="Mountain"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">Mountain</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio_5" name="Radio" type="radio" value="Central"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">Central</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio_6" name="Radio" type="radio" value="Eastern"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">Eastern</span>
</label>
</div>
<p className="zf-errorMessage" id="Radio_error" style={{display: 'none'}}>Invalid value</p>
</div>
</div>

<div className="zf-radio zf-tempFrmWrapper zf-oneColumns space-y-3 pt-2">
<label className="text-xs font-medium text-zinc-400 font-sans ml-1"> Liquid Funds (In The Bank) <em className="text-orange-500">*</em> </label>
<div className="zf-tempContDiv">
<div className="zf-overflow grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio3_1" name="Radio3" type="radio" value="$0 - $10K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$0 - $10K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio3_2" name="Radio3" type="radio" value="$10K - $20K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$10K - $20K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio3_3" name="Radio3" type="radio" value="$20K - $30K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$20K - $30K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio3_4" name="Radio3" type="radio" value="$30K - $40K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$30K - $40K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio3_5" name="Radio3" type="radio" value="$40K - $50K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$40K - $50K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio3_6" name="Radio3" type="radio" value="$50K+"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$50K+</span>
</label>
</div>
<p className="zf-errorMessage" id="Radio3_error" style={{display: 'none'}}>Invalid value</p>
</div>
</div>

<div className="zf-radio zf-tempFrmWrapper zf-oneColumns space-y-3 pt-2">
<label className="text-xs font-medium text-zinc-400 font-sans ml-1"> Available Credit <em className="text-orange-500">*</em> </label>
<div className="zf-tempContDiv">
<div className="zf-overflow grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio1_1" name="Radio1" type="radio" value="$0 - $10K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$0 - $10K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio1_2" name="Radio1" type="radio" value="$10K - $20K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$10K - $20K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio1_3" name="Radio1" type="radio" value="$20K - $30K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$20K - $30K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio1_4" name="Radio1" type="radio" value="$30K - $40K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$30K - $40K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio1_5" name="Radio1" type="radio" value="$40K - $50K"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$40K - $50K</span>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-white/10 bg-white/5 p-3 shadow-sm focus:outline-none transition-all hover:bg-white/10 has-[:checked]:ring-1 has-[:checked]:ring-orange-500 has-[:checked]:bg-orange-500/10 has-[:checked]:text-orange-400 group/radio">
<input checktype="c1" className="zf-radioBtnType sr-only" id="Radio1_6" name="Radio1" type="radio" value="$50K+"/>
<span className="flex items-center text-xs font-medium text-zinc-300 group-has-[:checked]/radio:text-white">$50K+</span>
</label>
</div>
<p className="zf-errorMessage" id="Radio1_error" style={{display: 'none'}}>Invalid value</p>
</div>
</div>
<div className="zf-tempFrmWrapper zf-note">
<label className="zf-descFld text-xs text-zinc-600 font-sans">* We will not share or sell your information.</label>
</div>
<div className="pt-4">
<button className="w-full group flex gap-2 text-lg transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold font-sans h-14 rounded-full relative items-center justify-center zf-submitColor" style={{background: 'linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #ffffff 100%) border-box', border: '1.5px solid transparent', boxShadow: '-15px 0 40px -5px rgba(249, 115, 22, 0.6), 15px 0 40px -5px rgba(255, 255, 255, 0.4)'}}>
<span className="flex items-center gap-2 leading-none z-10 relative drop-shadow-md">Submit</span>
</button>
</div>
</form>
</div>

</div>
</section>

<section className="md:py-24 pt-16 pb-16 relative" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-center text-white mb-10 md:mb-16 font-sans pb-2">Frequently Asked Questions</h2>
<div className="space-y-2">

<details className="group border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 open:bg-white/[0.04]">
<summary className="flex cursor-pointer items-center justify-between p-4 md:p-6 text-base md:text-lg font-medium text-zinc-200 transition-colors hover:text-orange-400 focus:outline-none [&amp;::-webkit-details-marker]:hidden">
<span className="">What Is NXJ Automation?</span>
<span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 text-zinc-500"><iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-4 md:px-6 pb-6 pt-0 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                    At NXJ Automation, we build and manage Amazon businesses for our clients. We handle everything from product sourcing to daily operations.
                </div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 open:bg-white/[0.04]">
<summary className="flex cursor-pointer items-center justify-between p-4 md:p-6 text-base md:text-lg font-medium text-zinc-200 transition-colors hover:text-orange-400 focus:outline-none [&amp;::-webkit-details-marker]:hidden">
<span className="">Do I Need Any Experience?</span>
<span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 text-zinc-500"><iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-4 md:px-6 pb-6 pt-0 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                    No prior experience is required! Our fully managed program is designed to support entrepreneurs at all levels.
                </div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 open:bg-white/[0.04]">
<div className="px-4 md:px-6 pb-6 pt-0 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                    Yes, we offer a money-back guarantee on all our packages if certain performance metrics aren't met.
                </div><summary className="flex cursor-pointer md:p-6 md:text-lg transition-colors hover:text-orange-400 focus:outline-none [&amp;::-webkit-details-marker]:hidden text-base font-medium text-zinc-200 pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<span className="">Is There A Refund If I Don't Make Money?</span>
<span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 text-zinc-500"><iconify-icon className="" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(113, 113, 122)'}} width="20"></iconify-icon></span>
</summary>
</details>
</div>
</div>
</section>

<footer className="pt-12 pr-6 pb-12 pl-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
<div className="col-span-2">
<div className="flex gap-2 font-medium text-white font-sans mb-4 gap-x-2 gap-y-2 items-center">NXJ Automation</div>
<p className="text-xs text-zinc-500 font-sans max-w-xs">Scottsdale, AZ<br/> Integrating Ai with Amazon.</p>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-white font-sans">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="cursor-pointer transition-colors hover:text-white font-sans">Features</li>
<li className="cursor-pointer transition-colors hover:text-white font-sans">Pricing</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold mb-4 text-white font-sans">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="cursor-pointer transition-colors hover:text-white font-sans">About</li>
<li className="cursor-pointer transition-colors hover:text-white font-sans">Contact</li>
</ul>
</div>
<div className="col-span-2 md:col-span-2">
<h4 className="text-xs font-semibold mb-4 text-white font-sans">Legal</h4>
<div className="text-[10px] text-zinc-600 font-sans leading-relaxed text-justify space-y-4">
<p>This site is not part of the Facebook™ website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way.</p>
<p>© 2026 NXJ Automation LLC. All rights reserved.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
