// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close menu when clicking a nav link (mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animation
    const scrollReveal = () => {
        const elements = document.querySelectorAll('.reveal');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Add reveal class to elements
    const addRevealClass = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            section.classList.add('reveal');
        });
        
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(item => {
            item.classList.add('reveal');
        });
        
        const skillItems = document.querySelectorAll('.skill');
        skillItems.forEach(item => {
            item.classList.add('reveal');
        });
    };
    
    addRevealClass();
    scrollReveal();
    
    window.addEventListener('scroll', scrollReveal);

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);
            
            // Reset form after submission
            contactForm.reset();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Typing animation for home section
    const typeAnimation = () => {
        const text = document.querySelector('.home-content .text h2');
        if (text) {
            const roles = ['Web Developer', 'Frontend Developer', 'UI/UX Designer', 'Freelancer'];
            let roleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            const type = () => {
                const currentRole = roles[roleIndex];
                
                if (isDeleting) {
                    text.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    text.textContent = currentRole.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 200;
                }
                
                if (!isDeleting && charIndex === currentRole.length) {
                    isDeleting = true;
                    typingSpeed = 2000; // Pause before deleting
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
                
                setTimeout(type, typingSpeed);
            };
            
            setTimeout(type, 1000);
        }
    };
    
    // Enable typing animation
    typeAnimation();

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
