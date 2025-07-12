// Activate mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Add scroll effects
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Change navbar color on scroll
        if (scrollPosition > 100) {
            document.querySelector('nav').style.background = 'rgba(255, 255, 255, 0.95)';
            document.querySelector('nav').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            document.querySelector('nav').style.background = 'white';
            document.querySelector('nav').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // Show elements when scrolling to them
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition > sectionTop - window.innerHeight + 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize elements for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Show elements on load
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 300);
    
    // Handle contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you can add form submission code
            alert('Thank you for your message! I will get back to you as soon as possible.');
            this.reset();
        });
    }
    
    // Project Modal (optional)
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.createElement('div');
    modal.id = 'projectModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');
    
    // Project data (replace with your actual projects)
    const projectsData = {
        "erp-system": {
            title: "Comprehensive ERP System",
            description: "Developed a comprehensive ERP system using Yii and Laravel frameworks with MariaDB as the database management system. The system includes modules for sales, purchases, inventory, and accounting. Also developed integrations with platforms like Amazon and QuickBooks for automatic data exchange.",
            technologies: ["PHP", "Yii", "Laravel", "MariaDB", "JavaScript", "API Integration"],
            image: "erp-project.jpg",
            demoUrl: "#",
            codeUrl: "#"
        },
        // Add other projects in the same format
    };
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.closest('.project-item').querySelector('img').alt.replace(/\s+/g, '-').toLowerCase();
            
            // Fill modal with project data
            const project = projectsData[projectId] || {
                title: "Project",
                description: "Project description",
                technologies: ["Tech 1", "Tech 2"],
                image: "project-placeholder.jpg"
            };
            
            modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="modal-info">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="modal-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="modal-links">
                        <a href="${project.demoUrl || '#'}" target="_blank">View Project</a>
                        <a href="${project.codeUrl || '#'}" target="_blank">View Code</a>
                    </div>
                </div>
            `;
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
