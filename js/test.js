 // Smooth scrolling function
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            element.scrollIntoView({ behavior: 'smooth' });
        }

        // Update active navigation dot based on scroll position
        function updateActiveNav() {
            const sections = ['hero', 'overview', 'projects'];
            const navDots = document.querySelectorAll('.nav-dot');
            
            let currentSection = '';
            
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                const rect = element.getBoundingClientRect();
                
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = sectionId;
                }
            });
            
            // Update active dot
            navDots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (sections[index] === currentSection) {
                    dot.classList.add('active');
                }
            });
        }

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });

        // Listen for scroll events
        window.addEventListener('scroll', () => {
            updateActiveNav();
        });

        // Initialize
        updateActiveNav();

        // Add particle effect
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(212, 165, 116, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.zIndex = '1';
            particle.style.animation = `particleFloat ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 5000);
        }

        // Add particle animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                to {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Create particles periodically
        setInterval(createParticle, 2000);

        // Project card click interactions
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'translateY(-10px) scale(0.98)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-10px) scale(1)';
                }, 150);
            });
        });