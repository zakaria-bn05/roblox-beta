// Smooth scroll functionality
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

// Download button click animation and tracking
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function(e) {
    // Add a click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
    
    // You can add analytics or tracking here
    console.log('Download initiated');
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe testimonial cards for animation on scroll
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add parallax effect to hero cover
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const coverImage = document.querySelector('.cover-image');
    if (coverImage && scrolled < 500) {
        coverImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Social icons hover effect enhancement
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading state to download button
downloadBtn.addEventListener('click', function(e) {
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';
    this.style.pointerEvents = 'none';
    
    // Simulate loading (remove this in production)
    setTimeout(() => {
        this.innerHTML = originalText;
        this.style.pointerEvents = 'auto';
    }, 2000);
});

console.log('Roblox Beta Landing Page Loaded Successfully!');
