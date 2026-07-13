// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = `© ${currentYear} Muhammad Yameen. All rights reserved..`;
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .achievement-card, .contact-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Download CV button functionality
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        // This would link to your CV file
        alert('CV download would go here. You can replace this with an actual link to your CV file.');
        // Example: window.location.href = '/cv/Muhammad_Yameen_CV.pdf';
    });
});

// Explore Work button scroll
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('Explore')) {
        button.addEventListener('click', function() {
            document.querySelector('.skills').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight - 200) {
            const id = section.id || section.className.split(' ')[0];
        }
    });
});

// Prevent default link behavior for demo links
document.addEventListener('click', function(e) {
    if (e.target.closest('a[href="https://github.com"]')) {
        e.preventDefault();
        alert('Update the GitHub URL in the HTML to your actual GitHub profile');
    }
});
console.log('Portfolio loaded successfully!');