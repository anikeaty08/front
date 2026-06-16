import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#0c0c0e',
},
brand: {
navy: '#123063',
navyDark: '#0a1d3d',
teal: '#08756E',
tealLight: '#effcfb'
}
},
boxShadow: {
'soft-xl': '0 20px 40px -10px rgba(18, 48, 99, 0.08)',
'glow': '0 0 40px -10px rgba(8, 117, 110, 0.15)',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'draw': 'draw 1.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
draw: {
'0%': { strokeDasharray: 100, strokeDashoffset: 100 },
'100%': { strokeDasharray: 100, strokeDashoffset: 0 }
}
}
}
}
}



        // Language Data
        const translations = {
            el: {
                // nav_home removed
                nav_products: "Προϊόντα",
                nav_about: "Σχετικά",
                nav_faq: "FAQ",
                nav_contact: "Επικοινωνία",
                btn_start: "Ξεκίνα τώρα",
                hero_title_static: "Το Έγγραφό σου.",
                hero_subtitle: 'Δημιούργησε εξατομικευμένα, έγκυρα νομικά έγγραφα μέσα σε λίγα λεπτά <span class="italic font-medium text-brand-navy dark:text-white">με την ακρίβεια του Ysona AI</span>.',
                btn_create_lease: 'Δημιούργησε το έγγραφο <span class="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="18"></span>',
                btn_how_it_works: "Πώς λειτουργεί",
                features_title: "Γιατί να επιλέξεις το Ysona;",
                feat_speed_title: "Ταχύτητα",
                feat_speed_desc: "Ολοκλήρωση της διαδικασίας σε λεπτά, 24/7.",
                feat_quality_title: "Νομική Ποιότητα",
                feat_quality_desc: "Έγγραφα βασισμένα στη νομοθεσία, ελεγμένα από νομικούς.",
                feat_cost_title: "Διαφάνεια Κόστους",
                feat_cost_desc: "Ξεκάθαρη, προσιτή τιμολόγηση χωρίς επιπλέον ή κρυφές χρεώσεις.",
                feat_premium_title: "Έλεγχος από Δικηγόρο",
                feat_premium_desc: "Δυνατότητα ελέγχου από δικηγόρο για μέγιστη εξασφάλιση και ειδικούς όρους.",
                process_title: "Η Διαδικασία",
                process_subtitle: "Αρχιτεκτονική ακρίβεια. Νομική ασφάλεια.",
                step1_title: "Εισαγωγή Δεδομένων",
                step1_desc: "Αλληλεπίδρασε με τον βοηθό του Ysona ΑΙ — οι απαντήσεις σου οδηγούν στη δημιουργία του εγγράφου σου.",
                step2_title: "AI Επεξεργασία",
                step2_desc: "Το Ysona AI συνθέτει το έγγραφο με βάση τις απαντήσείς σου και την βιβλιοθήκη νομικών εγγράφων που διαθέτει.",
                step3_title: "Παράδοση PDF",
                step3_desc: "Λαμβάνεις PDF, έτοιμο για ψηφιακή ή φυσική υπογραφή.",
                cta_ready: "Έτοιμοι να ξεκινήσετε;",
                cta_desc: "Δημιούργησε το νομικό έγγραφο που χρειάζεσαι σήμερα.",
                btn_create_doc: "Δημιουργία εγγράφου",
                prod_title: "Μισθωτήριο<br>Κατοικίας",
                prod_subtitle: "Μία πλήρης, νομικά έγκυρη σύμβαση μίσθωσης που προστατεύει ιδιοκτήτες και ενοικιαστές.",
                prod_lease: "Μισθωτήριο Κατοικίας",
                prod_lease_desc: "Άμεση δημιουργία PDF",
                prod_sublease: "Σύμβαση Υπομίσθωσης (SOON)",
                prod_extension: "Παράταση Μίσθωσης (SOON)",
                prod_termination: "Καταγγελία Μίσθωσης (SOON)",
                prod_bullet_1: "Σύμβαση σύμφωνα με το ελληνικό δίκαιο.",
                prod_bullet_2: "Ενημερωμένο κείμενο με βάση τις τελευταίες αναθεωρήσεις του νόμου και πρόσφατη νομολογία.",
                prod_bullet_3: "Εξατομικευμένοι όροι σύμφωνα με τις προτιμήσεις των μερών.",
                per_doc: "/ έγγραφο",
                btn_choose_basic: "Επιλογή Basic",
                pricing_full_contract: "Πλήρης σύμβαση, νομικά ελεγμένη",
                pricing_auto_pdf: "Αυτόματη δημιουργία εγγράφου σε PDF",
                pricing_instant: "Άμεση παράδοση",
                pricing_lawyer: "Έλεγχος από δικηγόρο",
                pricing_terms: "Ειδικοί όροι και ρήτρες",
                pricing_24h: "Παράδοση εντός 24 ωρών",
                about_title: "Σχετικά με εμάς",
                about_subtitle: "Εκδημοκρατίζουμε τη νομική ασφάλεια μέσω της τεχνολογίας.",
                about_text_1: "Το Ysona AI γεννήθηκε από μια απλή αλλά ουσιαστική ανάγκη: να μπορεί κάθε άνθρωπος να έχει άμεση, οικονομική και αξιόπιστη πρόσβαση σε έγκυρα νομικά έγγραφα.",
                about_text_2: "Συνδυάζουμε την εμπειρία εξειδικευμένων νομικών με την ακρίβεια της τεχνητής νοημοσύνης, προσφέροντας λύσεις που μέχρι σήμερα ήταν προνόμιο λίγων. Αφαιρούμε την πολυπλοκότητα, μειώνουμε το κόστος και διατηρούμε στο ακέραιο τη νομική ποιότητα.",
                about_text_3: "Ο στόχος μας είναι ξεκάθαρος: Να κάνουμε τη δημιουργία νομικών εγγράφων απλή, γρήγορη και προσιτή σε όλους.",
                stat_1_title: "100% Online",
                stat_1_sub: "Ολοκληρώνεις όλη τη διαδικασία σε λίγα λεπτά.",
                stat_2_title: "24/7 Διαθεσιμότητα",
                stat_2_sub: "Το σύστημα λειτουργεί οποιαδήποτε στιγμή.",
                stat_3_title: "Ξεκάθαρη Τιμολόγηση",
                stat_3_sub: "Σταθερή τιμή. Χωρίς εκπλήξεις.",
                faq_title: "Συχνές Ερωτήσεις",
                faq_subtitle: "Απαντήσεις στα πιο συνηθισμένα ερωτήματα.",
                faq_q1: "Μπορώ να χρησιμοποιήσω το έγγραφο όπως είναι;",
                faq_a1: "Ναι. Τα έγγραφα που παράγει η Ysona είναι τελικά κείμενα έτοιμα προς υπογραφή.",
                faq_q2: "Χρειάζεται να ξέρω νομικά για να χρησιμοποιήσω την Ysona;",
                faq_a2: "Όχι. Η Ysona έχει δημιουργηθεί για μη δικηγόρους και μη νομικούς. Οι καθοδηγούμενες ερωτήσεις είναι σχεδιασμένες με τέτοιο τρόπο ώστε να μπορούν να απαντηθούν από ανθρώπους χωρίς νομικές γνώσεις.",
                faq_q3: "Όταν χρησιμοποιώ την Ysona λαμβάνω νομικές συμβουλές;",
                faq_a3: "Όχι. Η Ysona δεν παρέχει νομικές συμβουλές. Η πλατφόρμα δημιουργεί αυτόματα προσωποποιημένα νομικά έγγραφα βασισμένα σε προκαθορισμένα πρότυπα και τις απαντήσεις σου. Αν χρειάζεσαι νομική καθοδήγηση για κάποια ειδική περίπτωση μπορείς να ζητήσεις προαιρετικό έλεγχο από δικηγόρο.",
                faq_q4: "Τι έγγραφα μπορεί να δημιουργήσει η Ysona;",
                faq_a4: "Προς το παρόν η Ysona δημιουργεί μισθωτικές συμβάσεις κατοικίας. Ήδη εκπαιδεύεται και σε άλλα νομικά έγγραφα και σύντομα θα τα κάνει διαθέσιμα στους χρήστες.",
                faq_q5: "Για ποια χώρα είναι κατάλληλα τα έγγραφα της Ysona;",
                faq_a5: "Η Ysona είναι εκπαιδευμένη στο ελληνικό δίκαιο και τα έγγραφα της είναι προσαρμοσμένα στις απαιτήσεις της ελληνικής νομοθεσίας.",
                faq_q6: "Πώς προστατεύονται τα προσωπικά μου δεδομένα;",
                faq_a6: "Τα δεδομένα σου χρησιμοποιούνται μόνο για την δημιουργία του εγγράφου και δεν αποθηκεύονται μόνιμα ούτε κοινοποιούνται σε τρίτους. Η επεξεργασία γίνεται σύμφωνα με τους κανόνες προστασίας προσωπικών δεδομένων που επιβάλλει ο κανονισμός GDPR.",
                contact_title: "Επικοινωνία",
                contact_desc: "Είμαστε εδώ για να λύσουμε κάθε απορία σας. Συμπληρώστε τη φόρμα και θα σας απαντήσουμε άμεσα.",
                contact_name: "Ονομα",
                contact_email: "Email",
                contact_subject: "Θεμα",
                contact_message: "Μηνυμα",
                btn_send: "Αποστολή μηνύματος",
                footer_products: "Προιοντα",
                footer_company: "Εταιρεια",
                footer_legal: "Legal",
                footer_terms: "Όροι Χρήσης",
                footer_privacy: "Πολιτική Απορρήτου",
                footer_rights: "© 2023 Ysona AI. All rights reserved.",
                footer_disclaimer: "Disclaimer: Το Ysona AI παρέχει αυτοματοποιημένα έγγραφα. Δεν παρέχει νομικές συμβουλές και δεν υποκαθιστά δικηγόρο."
            },
            en: {
                // nav_home removed
                nav_products: "Products",
                nav_about: "About",
                nav_faq: "FAQ",
                nav_contact: "Contact",
                btn_start: "Start Now",
                hero_title_static: "Your Document.",
                hero_subtitle: 'Create custom, valid legal documents in minutes <span class="italic font-medium text-brand-navy dark:text-white">with the precision of Ysona AI</span>.',
                btn_create_lease: 'Create Document <span class="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="18"></span>',
                btn_how_it_works: "How it works",
                features_title: "Why choose Ysona?",
                feat_speed_title: "Speed",
                feat_speed_desc: "Completion in minutes, 24/7.",
                feat_quality_title: "Legal Quality",
                feat_quality_desc: "Documents based on legislation, vetted by lawyers.",
                feat_cost_title: "Cost Transparency",
                feat_cost_desc: "Clear, affordable pricing with no extra or hidden fees.",
                feat_premium_title: "Lawyer Review",
                feat_premium_desc: "Option for lawyer review for maximum assurance and special terms.",
                process_title: "The Process",
                process_subtitle: "Architectural precision. Legal security.",
                step1_title: "Data Entry",
                step1_desc: "Interact with the Ysona AI assistant — your answers lead to the creation of your document.",
                step2_title: "AI Processing",
                step2_desc: "Ysona AI synthesizes the document based on your answers and its legal document library.",
                step3_title: "PDF Delivery",
                step3_desc: "Receive PDF, ready for digital or physical signature.",
                cta_ready: "Ready to start?",
                cta_desc: "Create the legal document you need today.",
                btn_create_doc: "Create document",
                prod_title: "Residential<br>Lease",
                prod_subtitle: "A complete, legally valid lease agreement that protects landlords and tenants.",
                prod_lease: "Residential Lease",
                prod_lease_desc: "Instant PDF creation",
                prod_sublease: "Sublease Agreement (SOON)",
                prod_extension: "Lease Extension (SOON)",
                prod_termination: "Lease Termination (SOON)",
                prod_bullet_1: "Contract in accordance with Greek law.",
                prod_bullet_2: "Updated text based on the latest law revisions and recent case law.",
                prod_bullet_3: "Personalized terms according to the parties' preferences.",
                per_doc: "/ document",
                btn_choose_basic: "Select Basic",
                pricing_full_contract: "Complete contract, legally checked",
                pricing_auto_pdf: "Automatic PDF document creation",
                pricing_instant: "Instant delivery",
                pricing_lawyer: "Lawyer Review",
                pricing_terms: "Special terms and clauses",
                pricing_24h: "Delivery within 24 hours",
                about_title: "About Us",
                about_subtitle: "Democratizing legal security through technology.",
                about_text_1: "Ysona AI was born from a simple yet essential need: for every person to have immediate, affordable, and reliable access to valid legal documents.",
                about_text_2: "We combine the experience of specialized lawyers with the precision of artificial intelligence, offering solutions that were previously a privilege for few. We remove complexity, reduce costs, and maintain legal quality in its entirety.",
                about_text_3: "Our goal is clear: To make the creation of legal documents simple, fast, and accessible to everyone.",
                stat_1_title: "100% Online",
                stat_1_sub: "Complete the entire process in a few minutes.",
                stat_2_title: "24/7 Availability",
                stat_2_sub: "The system works at any time.",
                stat_3_title: "Clear Pricing",
                stat_3_sub: "Fixed price. No surprises.",
                faq_title: "Frequently Asked Questions",
                faq_subtitle: "Answers to common questions.",
                faq_q1: "Can I use the document as is?",
                faq_a1: "Yes. The documents produced by Ysona are final texts ready for signature.",
                faq_q2: "Do I need legal knowledge to use Ysona?",
                faq_a2: "No. Ysona has been created for non-lawyers. The guided questions are designed to be answered by people without legal knowledge.",
                faq_q3: "Do I receive legal advice when using Ysona?",
                faq_a3: "No. Ysona does not provide legal advice. The platform automatically creates personalized legal documents based on predefined templates and your answers. If you need legal guidance for a specific case, you can request an optional attorney review.",
                faq_q4: "What documents can Ysona create?",
                faq_a4: "Currently, Ysona creates residential lease agreements. It is already being trained on other legal documents which will be available soon.",
                faq_q5: "For which country are Ysona documents suitable?",
                faq_a5: "Ysona is trained on Greek law and its documents are adapted to the requirements of Greek legislation.",
                faq_q6: "How is my personal data protected?",
                faq_a6: "Your data is used only for the creation of the document and is not permanently stored or shared with third parties. Processing is done in accordance with GDPR data protection rules.",
                contact_title: "Contact",
                contact_desc: "We are here to answer any questions. Fill out the form and we will respond immediately.",
                contact_name: "Name",
                contact_email: "Email",
                contact_subject: "Subject",
                contact_message: "Message",
                btn_send: "Send Message",
                footer_products: "Products",
                footer_company: "Company",
                footer_legal: "Legal",
                footer_terms: "Terms of Use",
                footer_privacy: "Privacy Policy",
                footer_rights: "© 2023 Ysona AI. All rights reserved.",
                footer_disclaimer: "Disclaimer: Ysona AI provides automated documents. It does not provide legal advice and does not substitute a lawyer."
            }
        };

        // Navigation & UI Logic
        function navigateTo(pageId) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            window.scrollTo(0, 0);
            
            // Re-trigger typewriter if navigating home
            if(pageId === 'home') {
                resetTypewriter();
            }
        }

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function changeLang(lang) {
            document.getElementById('current-lang').innerText = lang.toUpperCase();
            
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang][key]) {
                    if (key === 'hero_subtitle' || key === 'btn_create_lease') {
                        el.innerHTML = translations[lang][key];
                    } else {
                        el.innerText = translations[lang][key];
                    }
                }
            });
            
            // Update Typewriter Text for Language (With dots)
            rotatingWords = lang === 'el' ? 
                ["Απλά.", "Γρήγορα.", "Αξιόπιστα."] : 
                ["Simple.", "Fast.", "Reliable."];
            resetTypewriter();
        }

        // --- Typewriter Logic ---
        let rotatingWords = ["Απλά.", "Γρήγορα.", "Αξιόπιστα."];
        let wordIndex = 0;
        let charIndex = 0;let isDeleting = false;
        let typeTimeout;

        function type() {
            const currentWord = rotatingWords[wordIndex];
            const element = document.getElementById('typewriter-text');
            
            // Safety check
            if (!element) return;

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            element.textContent = currentWord.substring(0, charIndex);

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentWord.length) {
                // Word complete, pause before deleting
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Word deleted, switch to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % rotatingWords.length;
                typeSpeed = 500;
            }

            typeTimeout = setTimeout(type, typeSpeed);
        }

        function resetTypewriter() {
            clearTimeout(typeTimeout);
            const element = document.getElementById('typewriter-text');
            if (element) element.textContent = '';
            charIndex = 0;
            isDeleting = false;
            // Reset to first word of the new language array
            wordIndex = 0; 
            type();
        }

        // Initialize Application
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Start Typewriter Effect
            type();

            // 2. Handle URL Hash Navigation
            const hash = window.location.hash.substring(1);
            const validPages = ['home', 'product', 'about', 'faq', 'contact'];
            
            if (hash && validPages.includes(hash)) {
                navigateTo(hash);
            }

            // 3. Preloader Logic
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.style.opacity = '1';
                preloader.style.display = 'flex';
                
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 600);
                }, 800);
            }
        });

        // Handle Browser Back/Forward Buttons
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                navigateTo(hash);
            } else {
                navigateTo('home');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="dark:bg-zinc-950 bg-white" id="preloader" style={{opacity: '0', display: 'none'}}>
<div className="w-12 h-12 relative">
<svg className="w-12 h-12 text-brand-navy dark:text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 20V4" strokeLinecap="round"></path>
<path d="M6 9l6-5 6 5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 cursor-pointer flex items-center gap-3 group" onclick="navigateTo('home')">

<div className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 group-hover:border-brand-teal/50 transition-colors">
<svg className="w-5 h-5 text-brand-navy dark:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 20V12" strokeLinecap="round"></path>
<path className="animate-draw" d="M7 6L12 12L17 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-brand-navy dark:text-white group-hover:text-brand-teal transition-colors text-lg font-semibold tracking-tight">Ysona AI</span>
</div>

<div className="hidden lg:flex space-x-8 items-center">

<div className="dropdown group flex h-20 relative items-center">
<button className="uppercase hover:text-brand-navy dark:text-zinc-400 dark:hover:text-white transition-colors text-xs font-medium text-zinc-600 tracking-wider flex items-center gap-1">
<span className="" data-i18n="nav_products">Έγγραφα</span>
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu absolute top-full left-0 w-64 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-xl opacity-0 invisible transition-all duration-200 transform translate-y-2 p-2">
<button className="block w-full text-left px-4 py-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 group/item" onclick="navigateTo('product')">
<span className="block text-sm font-semibold text-brand-navy dark:text-white mb-0.5" data-i18n="prod_lease">Μισθωτήριο Κατοικίας</span>
<span className="block text-[10px] text-zinc-400" data-i18n="prod_lease_desc">Άμεση δημιουργία PDF</span>
</button>

<div className="px-4 py-2 opacity-40 cursor-not-allowed">
<span className="flex justify-between items-center mb-0.5">
<span className="text-sm font-semibold text-zinc-500" data-i18n="prod_sublease">Σύμβαση Υπομίσθωσης</span>
</span>
</div>
<div className="px-4 py-2 opacity-40 cursor-not-allowed">
<span className="flex justify-between items-center mb-0.5">
<span className="text-sm font-semibold text-zinc-500" data-i18n="prod_extension">Παράταση Μίσθωσης</span>
</span>
</div>
<div className="px-4 py-2 opacity-40 cursor-not-allowed">
<span className="flex justify-between items-center mb-0.5">
<span className="text-sm font-semibold text-zinc-500" data-i18n="prod_termination">Καταγγελία Μίσθωσης</span>
</span>
</div>
</div>
</div>
<button className="text-xs font-medium uppercase tracking-wider text-zinc-600 hover:text-brand-navy dark:text-zinc-400 dark:hover:text-white transition-colors" data-i18n="nav_about" onclick="navigateTo('about')">Σχετικά</button>
<button className="text-xs font-medium uppercase tracking-wider text-zinc-600 hover:text-brand-navy dark:text-zinc-400 dark:hover:text-white transition-colors" data-i18n="nav_faq" onclick="navigateTo('faq')">FAQ</button>
<button className="text-xs font-medium uppercase tracking-wider text-zinc-600 hover:text-brand-navy dark:text-zinc-400 dark:hover:text-white transition-colors" data-i18n="nav_contact" onclick="navigateTo('contact')">Επικοινωνία</button>
</div>

<div className="hidden lg:flex items-center space-x-4">
<div className="relative group">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-brand-navy dark:text-zinc-400 dark:hover:text-white transition-colors px-2 py-1">
<svg aria-hidden="true" data-icon="lucide:globe" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span id="current-lang">EL</span>
</button>
<div className="absolute right-0 mt-2 w-24 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
<button className="block w-full text-left px-4 py-2 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300" onclick="changeLang('el')">Ελληνικά</button>
<button className="block w-full text-left px-4 py-2 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300" onclick="changeLang('en')">English</button>
</div>
</div>
<button className="p-2 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-500" onclick="toggleTheme()">
<svg aria-hidden="true" className="" data-icon="lucide:moon" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-icon="lucide:sun" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</button>
<button className="bg-brand-navy hover:bg-brand-navyDark text-white dark:bg-white dark:text-brand-navy dark:hover:bg-zinc-200 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all shadow-lg shadow-brand-navy/20 dark:shadow-none" data-i18n="btn_start" onclick="navigateTo('product')">
                        Ξεκίνα τώρα
                    </button>
</div>

<div className="lg:hidden flex items-center space-x-4">
<button className="text-zinc-600 hover:text-brand-navy dark:text-zinc-400 dark:hover:text-white" onclick="toggleMobileMenu()">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl absolute w-full left-0" id="mobile-menu">
<div className="px-6 py-6 space-y-4 flex flex-col">
<button className="text-left text-sm font-medium text-brand-navy dark:text-white py-2" data-i18n="nav_products" onclick="navigateTo('product'); toggleMobileMenu()">Προϊόντα</button>
<button className="text-left text-sm font-medium text-brand-navy dark:text-white py-2" data-i18n="nav_about" onclick="navigateTo('about'); toggleMobileMenu()">Σχετικά</button>
<button className="text-left text-sm font-medium text-brand-navy dark:text-white py-2" data-i18n="nav_faq" onclick="navigateTo('faq'); toggleMobileMenu()">FAQ</button>
<button className="text-left text-sm font-medium text-brand-navy dark:text-white py-2" data-i18n="nav_contact" onclick="navigateTo('contact'); toggleMobileMenu()">Επικοινωνία</button>
<div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex gap-4">
<button className="text-xs font-bold text-zinc-500" onclick="changeLang('el')">EL</button>
<button className="text-xs font-bold text-zinc-500" onclick="changeLang('en')">EN</button>
</div>
</div>
</div>
</nav>

<div className="page-section active" id="home">


<section className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden py-32">

<div className="absolute inset-0 bg-white dark:bg-zinc-950">
<div className="absolute inset-0 bg-tech-lines opacity-100"></div>
<div className="absolute inset-0 bg-mesh-gradient"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center space-y-12">

<div className="animate-fade-in flex justify-center">
<div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-tealLight/50 px-3 py-1.5 text-xs font-semibold text-brand-teal dark:border-brand-teal/30 dark:bg-brand-teal/10 dark:text-brand-teal shadow-sm hover:shadow-md transition-shadow cursor-default backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
</span>
<span>AI-Powered Legal Documents</span>
</div>
</div>

<div className="space-y-6">
<h1 className="md:text-7xl lg:text-8xl text-brand-navy dark:text-white leading-[1.05] animate-slide-up text-5xl font-semibold tracking-tighter" data-i18n="hero_title_static">
                        Το Έγγραφό σου.
                    </h1>

<div className="h-20 flex items-center justify-center animate-slide-up" style={{animationDelay: '0.1s'}}>
<span className="md:text-7xl lg:text-8xl text-5xl font-semibold tracking-tighter pb-2 flex items-center">
<span className="typewriter-text min-w-[1ch] text-center" id="typewriter-text">Απλά.</span><span className="cursor-blink"></span>
</span>
</div>
</div>

<p className="md:text-2xl dark:text-zinc-400 leading-relaxed animate-slide-up text-lg font-light text-zinc-500 max-w-2xl mx-auto" data-i18n="hero_subtitle" style={{animationDelay: '0.2s'}}>
                    Δημιούργησε εξατομικευμένα, έγκυρα νομικά έγγραφα μέσα σε λίγα λεπτά <span className="italic font-medium text-brand-navy dark:text-white">με την ακρίβεια του Ysona AI</span>.
                </p>

<div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up pt-4" style={{animationDelay: '0.3s'}}>
<button className="group bg-brand-navy text-white hover:bg-brand-navyDark dark:bg-white dark:text-brand-navy dark:hover:bg-zinc-200 h-14 px-10 rounded-full text-sm font-semibold transition-all shadow-xl shadow-brand-navy/15 dark:shadow-none flex items-center justify-center gap-2 transform hover:-translate-y-0.5" data-i18n="btn_create_lease" onclick="navigateTo('product')">
                        Δημιούργησε το έγγραφο
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="bg-white/80 backdrop-blur-sm text-zinc-600 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 dark:bg-zinc-900/80 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800 h-14 px-10 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md" data-i18n="btn_how_it_works" onclick="document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'})">
                        Πώς λειτουργεί
                    </button>
</div>
</div>
</section>


<section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
<h2 className="md:text-4xl text-brand-navy dark:text-white text-3xl font-semibold tracking-tight mb-16 text-center" data-i18n="features_title">Γιατί να επιλέξεις το Ysona ΑΙ;</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

<div className="p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white/50 backdrop-blur-sm dark:bg-zinc-900/50 hover:shadow-soft-xl transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group">
<div className="w-12 h-12 rounded-2xl bg-brand-tealLight dark:bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-3" data-i18n="feat_speed_title">Ταχύτητα</h3>
<p className="dark:text-zinc-400 leading-relaxed text-sm text-zinc-500 font-light" data-i18n="feat_speed_desc">Ολοκλήρωση της διαδικασίας σε λεπτά, 24/7.</p>
</div>

<div className="p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white/50 backdrop-blur-sm dark:bg-zinc-900/50 hover:shadow-soft-xl transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group">
<div className="w-12 h-12 rounded-2xl bg-brand-tealLight dark:bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-3" data-i18n="feat_quality_title">Νομική Ποιότητα</h3>
<p className="dark:text-zinc-400 leading-relaxed text-sm text-zinc-500 font-light" data-i18n="feat_quality_desc">Έγγραφα βασισμένα στη νομοθεσία, ελεγμένα από νομικούς.</p>
</div>

<div className="p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white/50 backdrop-blur-sm dark:bg-zinc-900/50 hover:shadow-soft-xl transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group">
<div className="w-12 h-12 rounded-2xl bg-brand-tealLight dark:bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<h3 className="text-brand-navy dark:text-white text-xl font-semibold mb-3" data-i18n="feat_cost_title">Διαφάνεια Κόστους</h3>
<p className="dark:text-zinc-400 leading-relaxed text-sm text-zinc-500 font-light" data-i18n="feat_cost_desc">Ξεκάθαρη, προσιτή τιμολόγηση χωρίς επιπλέον ή κρυφές χρεώσεις.</p>
</div>
</div>

<div className="relative w-full rounded-3xl bg-gradient-to-r from-brand-navy to-brand-navyDark dark:from-zinc-900 dark:to-zinc-950 p-12 overflow-hidden shadow-2xl flex items-center justify-between group">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left w-full">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 backdrop-blur-md">
<svg aria-hidden="true" data-icon="lucide:diamond" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold text-white mb-3" data-i18n="feat_premium_title">Έλεγχος από Δικηγόρο</h3>
<p className="text-zinc-300 text-sm leading-relaxed max-w-2xl" data-i18n="feat_premium_desc">Δυνατότητα ελέγχου από δικηγόρο για μέγιστη εξασφάλιση και ειδικούς όρους.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white dark:bg-zinc-950 relative" id="how-it-works">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-brand-navy dark:text-white mb-4" data-i18n="process_title">Η Διαδικασία</h2>
<p className="text-zinc-500 dark:text-zinc-400 font-light" data-i18n="process_subtitle">Αρχιτεκτονική ακρίβεια. Νομική ασφάλεια.</p>
</div>
<div className="relative mb-20">

<div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-zinc-200 dark:bg-zinc-800 transform md:-translate-x-1/2 border-l border-dashed border-zinc-300 dark:border-zinc-700 bg-transparent"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="order-2 md:order-1 md:w-5/12 text-left md:text-right pl-20 md:pl-0 md:pr-16">
<h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2" data-i18n="step1_title">Εισαγωγή Δεδομένων</h3>
<p className="leading-relaxed text-sm text-zinc-500" data-i18n="step1_desc">Αλληλεπίδρασε με τον βοηθό του Ysona ΑΙ — οι απαντήσεις σου οδηγούν στη δημιουργία του εγγράφου σου.</p>
</div>
<div className="order-1 md:order-2 absolute left-0 md:relative md:left-auto w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 bg-brand-teal text-white flex items-center justify-center z-10 shadow-lg shadow-brand-teal/20">
<svg aria-hidden="true" data-icon="lucide:pen-tool" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<div className="order-3 md:w-5/12 pl-20 md:pl-16 hidden md:block opacity-30 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100">
<div className="w-32 h-20 border border-zinc-200 dark:border-zinc-800 rounded-lg flex flex-col gap-2 p-2">
<div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
<div className="w-2/3 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="order-3 md:order-1 md:w-5/12 pr-16 hidden md:block text-right opacity-30 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100">
<div className="w-32 h-20 border border-zinc-200 dark:border-zinc-800 rounded-lg ml-auto flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-brand-navy/5"></div>
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
</div>
<div className="order-1 md:order-2 absolute left-0 md:relative md:left-auto w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-brand-navy dark:text-white flex items-center justify-center z-10">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="order-2 md:order-3 md:w-5/12 text-left pl-20 md:pl-16">
<h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2" data-i18n="step2_title">AI Επεξεργασία</h3>

<p className="leading-relaxed text-sm text-zinc-500" data-i18n="step2_desc">Το Ysona AI συνθέτει το έγγραφο με βάση τις απαντήσείς σου και την βιβλιοθήκη νομικών εγγράφων που διαθέτει.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="order-2 md:order-1 md:w-5/12 text-left md:text-right pl-20 md:pl-0 md:pr-16">
<h3 className="text-brand-navy dark:text-white text-xl font-semibold mb-2" data-i18n="step3_title">Παράδοση PDF</h3>
<p className="leading-relaxed text-sm text-zinc-500" data-i18n="step3_desc">Λαμβάνεις PDF, έτοιμο για ψηφιακή ή φυσική υπογραφή.</p>
</div>
<div className="order-1 md:order-2 absolute left-0 md:relative md:left-auto w-16 h-16 rounded-full border-4 border-white dark:border-zinc-950 bg-brand-navy text-white flex items-center justify-center z-10 shadow-lg shadow-brand-navy/20">
<svg aria-hidden="true" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="order-3 md:w-5/12 pl-20 md:pl-16 hidden md:block opacity-30 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100">
<div className="w-20 h-24 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded flex items-center justify-center">
<span className="text-[10px] font-bold text-red-500">PDF</span>
</div>
</div>
</div>
</div>

<div className="relative w-full px-4 sm:px-6 lg:px-8 mt-10">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy opacity-[0.1] blur-2xl rounded-[30px] dark:opacity-20"></div>
<div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 p-2 shadow-soft-xl backdrop-blur-md">
<div className="rounded-xl border border-zinc-100 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 overflow-hidden relative aspect-video flex items-center justify-center">

<div className="absolute top-0 left-0 w-full h-1 bg-zinc-100 dark:bg-zinc-800">
<div className="h-full bg-brand-teal video-progress"></div>
</div>

<div className="anim-stage-1 absolute inset-0 flex flex-col items-center justify-center space-y-4">
<div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
<svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
</div>
<div className="w-64 space-y-3 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg border border-zinc-100 dark:border-zinc-800">
<div className="h-2 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"></div>
<div className="h-8 w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded"></div>
<div className="h-2 w-1/4 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse mt-4"></div>
<div className="h-8 w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded"></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-zinc-400 pt-4">Input Data</span>
</div>

<div className="anim-stage-2 absolute inset-0 flex flex-col items-center justify-center">
<div className="relative">
<div className="absolute inset-0 bg-brand-teal blur-3xl opacity-20 animate-pulse"></div>
<div className="w-24 h-24 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center relative z-10 shadow-2xl shadow-brand-teal/20">
<svg className="w-10 h-10 text-brand-teal animate-spin-slow" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-teal/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-zinc-400 pt-8">AI Processing</span>
</div>

<div className="anim-stage-3 absolute inset-0 flex flex-col items-center justify-center">
<div className="relative bg-white dark:bg-zinc-900 w-48 aspect-[3/4] shadow-2xl rounded border border-zinc-200 dark:border-zinc-700 p-6 flex flex-col items-center transform transition-transform">
<div className="w-full flex justify-between items-center mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">
<div className="w-8 h-8 rounded bg-brand-navy/10 flex items-center justify-center">
<span className="text-[10px] font-bold text-brand-navy">PDF</span>
</div>
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</div>
<div className="w-full space-y-2">
<div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-full"></div>
<div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-full"></div>
<div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-2/3"></div>
<div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-full mt-4"></div>
<div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded w-5/6"></div>
</div>
<div className="mt-auto w-full pt-4 border-t border-zinc-100 dark:border-zinc-800">
<div className="flex justify-between items-end">
<div className="h-8 w-16 bg-brand-navy rounded-sm opacity-10"></div>
<span className="text-[8px] font-mono text-zinc-400">SIGNED</span>
</div>
</div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-brand-teal pt-6 flex items-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Ready to Sign
                                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:globe" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-navy dark:text-white" data-i18n="stat_1_title">100% Online</h3>
<p className="text-sm text-zinc-500 mt-2" data-i18n="stat_1_sub">Ολοκληρώνεις όλη τη διαδικασία σε λίγα λεπτά.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-navy dark:text-white" data-i18n="stat_2_title">24/7 Διαθεσιμότητα</h3>
<p className="text-sm text-zinc-500 mt-2" data-i18n="stat_2_sub">Το σύστημα λειτουργεί οποιαδήποτε στιγμή.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:tag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-navy dark:text-white" data-i18n="stat_3_title">Ξεκάθαρη Τιμολόγηση</h3>
<p className="text-sm text-zinc-500 mt-2" data-i18n="stat_3_sub">Σταθερή τιμή. Χωρίς εκπλήξεις.</p>
</div>
</div>
</div>
</div>

<section className="py-20 px-4">
<div className="max-w-4xl mx-auto bg-brand-navy dark:bg-zinc-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-brand-navy/20">
<div className="-ml-20 -mt-20 bg-white/5 w-64 h-64 rounded-full absolute top-0 left-0 blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -mr-20 -mb-20"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6" data-i18n="cta_ready">Έτοιμοι να ξεκινήσετε;</h2>
<p className="text-zinc-300 mb-8 max-w-xl mx-auto text-lg" data-i18n="cta_desc">Δημιούργησε το νομικό έγγραφο που χρειάζεσαι σήμερα.</p>
<button className="bg-white text-brand-navy hover:bg-zinc-100 px-10 py-4 rounded-full text-sm font-bold transition-colors shadow-lg" data-i18n="btn_create_doc" onclick="navigateTo('product')">
                        Δημιουργία εγγράφου
                    </button>
</div>
</div>
</section>
</div>

<div className="page-section pt-20 pb-12" id="product">
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">

<div className="animate-slide-up">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-brand-navy dark:text-white mb-6" data-i18n="prod_title">Μισθωτήριο<br/>Κατοικίας</h1>
<p className="text-xl text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed font-light" data-i18n="prod_subtitle">
                        Μία πλήρης, νομικά έγκυρη σύμβαση μίσθωσης που προστατεύει ιδιοκτήτες και ενοικιαστές.
                    </p>

<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-brand-teal/10 p-1 rounded text-brand-teal shrink-0">
<span className="text-xs font-bold leading-none">1.</span>
</div>
<div>
<h3 className="font-medium text-brand-navy dark:text-white text-base leading-snug" data-i18n="prod_bullet_1">Σύμβαση σύμφωνα με το ελληνικό δίκαιο.</h3>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-brand-teal/10 p-1 rounded text-brand-teal shrink-0">
<span className="text-xs font-bold leading-none">2.</span>
</div>
<div>
<h3 className="font-medium text-brand-navy dark:text-white text-base leading-snug" data-i18n="prod_bullet_2">Ενημερωμένο κείμενο με βάση τις τελευταίες αναθεωρήσεις του νόμου και πρόσφατη νομολογία.</h3>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-brand-teal/10 p-1 rounded text-brand-teal shrink-0">
<span className="text-xs font-bold leading-none">3.</span>
</div>
<div>
<h3 className="font-medium text-brand-navy dark:text-white text-base leading-snug" data-i18n="prod_bullet_3">Εξατομικευμένοι όροι σύμφωνα με τις προτιμήσεις των μερών.</h3>
</div>
</div>
</div>
</div>

<div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-3xl border-2 border-brand-navy dark:border-zinc-700 bg-white dark:bg-zinc-950 relative hover:border-brand-navy/80 transition-all shadow-xl shadow-brand-navy/5">
<h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-2">Basic</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">€29</span>
<span className="text-zinc-500 text-sm font-medium" data-i18n="per_doc">/ έγγραφο</span>
</div>
<button className="w-full bg-brand-navy hover:bg-brand-navyDark text-white dark:bg-white dark:text-brand-navy dark:hover:bg-zinc-200 py-4 rounded-xl text-sm font-semibold transition-colors mb-10 shadow-lg shadow-brand-navy/20" data-i18n="btn_choose_basic">Επιλογή Basic</button>
<ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-3 items-center"><svg aria-hidden="true" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span data-i18n="pricing_full_contract">Πλήρης σύμβαση, νομικά ελεγμένη</span></li>
<li className="flex gap-3 items-center"><svg aria-hidden="true" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span data-i18n="pricing_auto_pdf">Αυτόματη δημιουργία εγγράφου σε PDF</span></li>
<li className="flex gap-3 items-center"><svg aria-hidden="true" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span data-i18n="pricing_instant">Άμεση παράδοση</span></li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 relative text-zinc-400 select-none">
<div className="absolute top-6 right-6 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 text-[10px] uppercase font-bold px-2 py-1 rounded tracking-widest">Coming Soon</div>
<h3 className="text-xl font-semibold mb-2 text-zinc-400">Premium</h3>
<div className="flex items-baseline gap-1 mb-6 opacity-50">
<span className="text-4xl font-bold tracking-tight">€49</span>
<span className="text-sm font-medium" data-i18n="per_doc">/ έγγραφο</span>
</div>
<button className="w-full bg-zinc-200 text-zinc-400 py-4 rounded-xl text-sm font-semibold cursor-not-allowed mb-10 dark:bg-zinc-800 dark:text-zinc-600" disabled="">Coming Soon</button>
<ul className="space-y-4 text-sm opacity-60">
<li className="flex gap-3 items-center"><svg aria-hidden="true" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span data-i18n="pricing_lawyer">Έλεγχος από δικηγόρο</span></li>
<li className="flex gap-3 items-center"><svg aria-hidden="true" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span data-i18n="pricing_terms">Ειδικοί όροι και ρήτρες</span></li>
<li className="flex gap-3 items-center"><svg aria-hidden="true" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> <span data-i18n="pricing_24h">Παράδοση εντός 24 ωρών</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="relative bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-inner animate-slide-up flex justify-center items-center h-full min-h-[500px] max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
<div className="relative w-full max-w-sm bg-white dark:bg-zinc-950 rounded-lg shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-transform hover:-translate-y-2 duration-500">

<div className="h-8 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
</div>

<div className="p-8 space-y-4 opacity-70 scale-90 origin-top">
<div className="flex justify-between items-end border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
<div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
<div className="text-[8px] uppercase tracking-widest text-zinc-400">PDF Document</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded"></div>
<div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded"></div>
<div className="h-2 w-5/6 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
</div>
<div className="space-y-2 pt-4">
<div className="h-2 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded"></div>
<div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded"></div>
</div>
<div className="space-y-2 pt-4">
<div className="h-2 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded mb-2"></div>
<div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded"></div>
<div className="h-2 w-4/6 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
</div>

<div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-brand-teal/30 rounded-full flex items-center justify-center -rotate-12">
<span className="text-[8px] font-bold text-brand-teal uppercase tracking-widest">Ysona AIVerified</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section pt-32 pb-12" id="about">
<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[calc(100vh-120px)] flex flex-col justify-start">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-navy dark:text-white mb-8" data-i18n="about_title">Σχετικά με εμάς</h1>
<p className="text-xl text-zinc-500 dark:text-zinc-400 font-light" data-i18n="about_subtitle">Εκδημοκρατίζουμε τη νομική ασφάλεια μέσω της τεχνολογίας.</p>
</div>
<div className="prose prose-lg dark:prose-invert mx-auto text-zinc-600 dark:text-zinc-400 space-y-6 leading-relaxed mb-12">
<p data-i18n="about_text_1">
                    Το Ysona AI γεννήθηκε από μια απλή αλλά ουσιαστική ανάγκη: να μπορεί κάθε άνθρωπος να έχει άμεση, οικονομική και αξιόπιστη πρόσβαση σε έγκυρα νομικά έγγραφα.
                </p>
<p data-i18n="about_text_2">
                    Συνδυάζουμε την εμπειρία εξειδικευμένων νομικών με την ακρίβεια της τεχνητής νοημοσύνης, προσφέροντας λύσεις που μέχρι σήμερα ήταν προνόμιο λίγων. Αφαιρούμε την πολυπλοκότητα, μειώνουμε το κόστος και διατηρούμε στο ακέραιο τη νομική ποιότητα.
                </p>
<p className="font-medium text-brand-navy dark:text-white" data-i18n="about_text_3">
                    Ο στόχος μας είναι ξεκάθαρος: Να κάνουμε τη δημιουργία νομικών εγγράφων απλή, γρήγορη και προσιτή σε όλους.
                </p>
</div>
</section>
</div>

<div className="page-section pt-20 pb-12" id="faq">
<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-navy dark:text-white mb-4 text-center" data-i18n="faq_title">Συχνές Ερωτήσεις</h1>
<p className="text-center text-zinc-500 mb-16" data-i18n="faq_subtitle">Απαντήσεις στα πιο συνηθισμένα ερωτήματα.</p>
<div className="space-y-4">

<details className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-brand-navy dark:text-white">
<span data-i18n="faq_q1">Μπορώ να χρησιμοποιήσω το έγγραφο όπως είναι;</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-4 leading-relaxed group-open:animate-fade-in" data-i18n="faq_a1">
                        Ναι. Τα έγγραφα που παράγει η Ysona είναι τελικά κείμενα έτοιμα προς υπογραφή.
                    </div>
</details>

<details className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-brand-navy dark:text-white">
<span data-i18n="faq_q2">Χρειάζεται να ξέρω νομικά για να χρησιμοποιήσω το Ysona ΑΙ;</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-4 leading-relaxed group-open:animate-fade-in" data-i18n="faq_a2">
                        Όχι. Το Ysona ΑΙ έχει δημιουργηθεί για ανθρώπους χωρίς νομικές γνώσεις.
                    </div>
</details>

<details className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-brand-navy dark:text-white">
<span data-i18n="faq_q3">Όταν χρησιμοποιώ το Ysona ΑΙ λαμβάνω νομικές συμβουλές;</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-4 leading-relaxed group-open:animate-fade-in" data-i18n="faq_a3">
                        Όχι. Το Ysona ΑΙ δεν παρέχει νομικές συμβουλές. Η πλατφόρμα δημιουργεί αυτόματα προσωποποιημένα νομικά έγγραφα βασισμένα σε προκαθορισμένα πρότυπα και τις απαντήσεις σου. Αν χρειάζεσαι νομική καθοδήγηση για κάποια ειδική περίπτωση μπορείς να ζητήσεις προαιρετικό έλεγχο από δικηγόρο.
                    </div>
</details>

<details className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-brand-navy dark:text-white">
<span data-i18n="faq_q4">Τι έγγραφα μπορεί να δημιουργήσει το Ysona ΑΙ;</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-4 leading-relaxed group-open:animate-fade-in" data-i18n="faq_a4">
                        Προς το παρόν το Ysona ΑΙ δημιουργεί συμβόλαια μίσθωσης κατοικίας. Ήδη εκπαιδεύεται και σε άλλα νομικά έγγραφα και σύντομα θα τα κάνει διαθέσιμα στους χρήστες.
                    </div>
</details>

<details className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-brand-navy dark:text-white">
<span data-i18n="faq_q5">Για ποια χώρα είναι κατάλληλα τα έγγραφα του Ysona ΑΙ;</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-4 leading-relaxed group-open:animate-fade-in" data-i18n="faq_a5">
                        Το Ysona είναι εκπαιδευμένο στο ελληνικό δίκαιο και τα έγγραφα του είναι προσαρμοσμένα στις απαιτήσεις της ελληνικής νομοθεσίας.
                    </div>
</details>

<details className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-brand-navy dark:text-white">
<span data-i18n="faq_q6">Πώς προστατεύονται τα προσωπικά μου δεδομένα;</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-4 leading-relaxed group-open:animate-fade-in" data-i18n="faq_a6">
                        Τα δεδομένα σου χρησιμοποιούνται μόνο για την δημιουργία του εγγράφου και δεν αποθηκεύονται μόνιμα ούτε κοινοποιούνται σε τρίτους. Η επεξεργασία γίνεται σύμφωνα με τους κανόνες προστασίας προσωπικών δεδομένων που επιβάλλει ο κανονισμός GDPR.
                    </div>
</details>
</div>
</section>
</div>

<div className="page-section pt-20 pb-12" id="contact">
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-navy dark:text-white mb-6" data-i18n="contact_title">Επικοινωνία</h1>
<p className="text-zinc-500 mb-10 leading-relaxed max-w-sm" data-i18n="contact_desc">
                        Είμαστε εδώ για να λύσουμε κάθε απορία σας. Συμπληρώστε τη φόρμα και θα σας απαντήσουμε άμεσα.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span>services.ysona@outlook.com</span>
</div>
<div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>Athens, Greece</span>
</div>
</div>
</div>
<div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
<form action="mailto:services.ysona@outlook.com" className="space-y-6" enctype="text/plain" method="post">
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2" data-i18n="contact_name">Ονομα</label>
<input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-brand-navy dark:text-white" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2" data-i18n="contact_email">Email</label>
<input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-brand-navy dark:text-white" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2" data-i18n="contact_subject">Θεμα</label>
<input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-brand-navy dark:text-white" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2" data-i18n="contact_message">Μηνυμα</label>
<textarea className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-brand-navy dark:text-white" required="" rows="4"></textarea>
</div>
<button className="w-full bg-brand-navy text-white hover:bg-brand-navyDark py-4 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-brand-navy/20" data-i18n="btn_send" type="submit">
                            Αποστολή μηνύματος
                        </button>
</form>
</div>
</div>
</section>
</div>

<footer className="dark:bg-zinc-950 dark:border-zinc-800 bg-white z-10 border-zinc-100 border-t mt-auto pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">

<div className="w-6 h-6 rounded border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
<svg className="w-3 h-3 text-brand-navy dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M7 6L12 12L17 6" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 20V12" strokeLinecap="round"></path>
</svg>
</div>
<span className="text-sm font-bold tracking-tight text-brand-navy dark:text-white">Ysona AI</span>
</div>
<p className="text-xs text-zinc-500">AI-Driven Legal Precision.</p>
</div>
<div className="">
<h4 className="font-bold text-xs text-brand-navy dark:text-white mb-6 uppercase tracking-wider" data-i18n="footer_products">Έγγραφα</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className=""><a className="hover:text-brand-navy dark:hover:text-white transition-colors" data-i18n="prod_lease" href="#" onclick="navigateTo('product')">Μισθωτήριο Κατοικίας</a></li>
<li className="opacity-50 cursor-not-allowed" data-i18n="prod_sublease">Σύμβαση Υπομίσθωσης (SOON)</li>
<li className="opacity-50 cursor-not-allowed" data-i18n="prod_extension">Παράταση Μίσθωσης (SOON)</li>
<li className="opacity-50 cursor-not-allowed" data-i18n="prod_termination">Καταγγελία Μίσθωσης (SOON)</li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-xs text-brand-navy dark:text-white mb-6 uppercase tracking-wider" data-i18n="footer_company">Εταιρεια</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className=""><a className="hover:text-brand-navy dark:hover:text-white transition-colors" data-i18n="nav_about" href="#" onclick="navigateTo('about')">Σχετικά</a></li>
<li className=""><a className="hover:text-brand-navy dark:hover:text-white transition-colors" data-i18n="nav_contact" href="#" onclick="navigateTo('contact')">Επικοινωνία</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-xs text-brand-navy dark:text-white mb-6 uppercase tracking-wider" data-i18n="footer_legal">Legal</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className=""><a className="hover:text-brand-navy dark:hover:text-white transition-colors" data-i18n="footer_terms" href="#">Όροι Χρήσης</a></li>
<li><a className="hover:text-brand-navy dark:hover:text-white transition-colors" data-i18n="footer_privacy" href="#">Πολιτική Απορρήτου</a></li>
</ul>
</div>
</div>
<div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400" data-i18n="footer_rights">© 2025 Ysona AI. All rights reserved.</p>
<p className="md:text-right text-xs text-zinc-400 text-center max-w-md" data-i18n="footer_disclaimer">
                    Disclaimer: Το Ysona AI παρέχει αυτοματοποιημένα έγγραφα. Δεν παρέχει νομικές συμβουλές και δεν υποκαθιστά δικηγόρο.
                </p>
</div>
</div>
</footer>



    </>
  );
}
