// Initialize particles.js
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#523D35" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#959D90",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    }
                },
                retina_detect: true
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll progress bar
        window.onscroll = function() { updateProgressBar() };

        function updateProgressBar() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        }

        // Toggle menu
        const menuIcon = document.querySelector(".menu-icon");
        const navlist = document.querySelector(".navlist");
        
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("active");
            navlist.classList.toggle("active");
        });

        // Remove navlist when clicking on a link
        document.querySelectorAll('.navlist a').forEach(link => {
            link.addEventListener('click', () => {
                navlist.classList.remove("active");
                menuIcon.classList.remove("active");
            });
        });

        // About section tabs
        const buttons = document.querySelectorAll('.about-btn button');
        const contents = document.querySelectorAll('.content-btn .content');
        
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                contents.forEach(content => content.style.display = 'none');
                contents[index].style.display = 'block';
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // File preview functionality
        const modal = document.getElementById("previewModal");
        const previewFrame = document.getElementById("previewFrame");
        const previewBtns = document.querySelectorAll(".preview-btn");
        const closeModal = document.querySelector(".close-modal");
        
        previewBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const filePath = btn.getAttribute("data-file");
                previewFrame.src = filePath;
                modal.style.display = "block";
            });
        });
        
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
            previewFrame.src = "";
        });
        
        window.addEventListener("click", (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
                previewFrame.src = "";
            }
        });

        // Scroll reveal animation
        function reveal() {
            var reveals = document.querySelectorAll(".skill-category, .portfolio-box, .download-card, .timeline-item, .education-content, .detail-box");
            
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
            reveal();
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Initialize reveal on page load
        reveal();

        // Animate skill bars on scroll
        function animateSkillBars() {
            const skillLevels = document.querySelectorAll('.skill-level');
            skillLevels.forEach(level => {
                const width = level.style.width;
                level.style.width = '0';
                setTimeout(() => {
                    level.style.width = width;
                }, 200);
            });
        }

        // Intersection Observer for skill bars animation
        const skillsSection = document.getElementById('skills');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (skillsSection) {
            observer.observe(skillsSection);
        }

        // Add smooth scrolling to all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });