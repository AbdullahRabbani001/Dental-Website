



// ==========================================
// DENTADS - JAVASCRIPT FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignore empty hash or just '#'
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // FORM SUBMISSION HANDLER
    // ==========================================
   // ==========================================
// CONTACT FORM SUBMISSION (MAILTO METHOD)
// ==========================================
// ==========================================
// CONTACT FORM - GMAIL WEB LINK METHOD
// ==========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const clinic = document.getElementById('clinic').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        // Validation
        if (!name || !clinic || !email || !phone) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '✗ Please fill in all required fields.';
            formMessage.style.display = 'block';
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '✗ Please enter a valid email address.';
            formMessage.style.display = 'block';
            return;
        }
        
        // Create email content
        const toEmail = 'contact@dentadsagency.com';
        const subject = 'New Lead from DentAds Website';
        const body = `
New Inquiry Details:
━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Clinic Name: ${clinic}
Email: ${email}
Phone: ${phone}

━━━━━━━━━━━━━━━━━━━━
Submitted from: DentAds Website
Date: ${new Date().toLocaleString()}
        `.trim();
        
        // Create Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open Gmail in new tab
        window.open(gmailUrl, '_blank');
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.innerHTML = '✓ <strong>Gmail opened in new tab!</strong><br>Please click "Send" in Gmail to complete your inquiry.';
        formMessage.style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
        }, 3000);
    });
}
    
    // ==========================================
    // FADE-IN ANIMATION ON SCROLL
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections for fade-in effect
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .value-card, .step-card, .case-study-card, .why-card, .testimonial-card, .faq-item'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // ==========================================
    // EXTERNAL LINKS - OPEN IN NEW TAB
    // ==========================================
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
});



const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.setAttribute('id', 'scrollToTop');
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #00BCD4;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ADD THIS CODE AT THE END OF script.js FILE

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target) || mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}













 