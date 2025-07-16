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
            if (targetId != '#') {
                
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
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
    const modal = document.getElementById('projectModal');
    
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');
    
    // Project data (replace with your actual projects)
    const projectsData = {
        "erp-system": {
            title: "Enterprise ERP System for Trading & Inventory",
            description: "Contributed to the development of a full-featured ERP system using Laravel and Yii frameworks, tailored for inventory-heavy trading businesses. The platform includes modules for purchases, sales, warehouse management, and accounting. Developed secure API integrations with Amazon , eBay , Back Market and QuickBooks for real-time synchronization. Focused on performance enhancements, database optimization, and user role management.",
            technologies: ["PHP", "Yii", "MySQL", "JavaScript", "API Integration"],
            image: "erp-project.jpg",
            demoUrl: "https://newgsolution.com/",
            codeUrl: "",
            videoUrl: "<iframe width='744' height='419' src='https://www.youtube.com/embed/9j4mt3PC3ec' title='New G Solution Overview' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
            position:'40%',
        },
        "b2b-store": {
            title: "B2B eCommerce Platform (ERP-Integrated)",
            description: "Developed a B2B eCommerce platform using Laravel and MySQL, tightly integrated with an internal ERP system. The platform supports product browsing, order management, real-time inventory sync, and separate dashboards for customers and admins. It also includes secure payment processing through PayPal and MX Merchant.",
            technologies: ["Laravel", "MySQL", "JavaScript", "Ajax", "PayPal", "MX Merchant"],
            image: "b2b-project.jpg",
            demoUrl: "https://humamdo.newgsolution.online/public/",
            codeUrl: "",
            position:'40%',
        },
        "course-system": {
            title: "Course Store & Student Evaluation System",
            description: "Built a full-featured Laravel platform that allows users to browse, purchase, and enroll in online courses. The system includes a dynamic student evaluation engine. Includes per-course progress tracking, user dashboards, and admin analytics.",
            technologies: ["Laravel", "Blade", "MySQL", "Tailwind CSS", "JavaScript"],
            image: "course-project.jpg",
            demoUrl: "http://benimturkcemkw.com:8000/",
            codeUrl: "",
            position:'40%',
        },
        "clinic-desktop": {
            title: "Clinic Management Desktop Application",
            description: "Built a desktop application for a dermatology and laser clinic using C# and MySQL. The software supports patient archiving, treatment history logging, appointment scheduling, and basic accounting. Designed to run locally on Windows systems with a focus on usability for clinic staff.",
            technologies: ["C#", ".NET", "MySQL", "Windows Forms"],
            image: "clinic-app.jpg",
            demoUrl: "",
            codeUrl: "",
            position:'80%',
        },
        "hematology-system": {
            title: "Hematology Lab Management System",
            description: "Developed a C# desktop application for receiving and managing hematology test results, linked directly to patient medical files. The system includes patient archiving, test result entry, search functionality, and print-ready reports generated via Crystal Reports. Built for offline use with a MySQL backend.",
            technologies: ["C#", ".NET", "MySQL", "Crystal Reports"],
            image: "hematology-app.jpg",
            demoUrl: "",
            codeUrl: "",
            position:'80%',
        }

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

            more_link = '';
            if (project.demoUrl) {
                more_link += `<a href="${project.demoUrl}" target="_blank">View Project</a>`;
            }
            if (project.codeUrl) {
                more_link += `<a href="${project.codeUrl}" target="_blank">View Code</a>`;
            }
            
            modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="modal-links">
                        ${more_link}
                    </div>
                </div>
            `;
            
            modal.style.display = "flex";
            modal.style.top = project.position;
            modal.scroll(0,0);
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
