// DATA STORES
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Fullstack",
        description: "A comprehensive online shopping platform featuring real-time product catalogs, user authentication, a shopping cart, and mock payment gateway integration.",
        details: "Built with React for the frontend and Node/Express for the backend. Uses Tailwind CSS for a custom design system. Features fully optimized image loading, dark mode, mock checkout with Stripe, and order history dashboard.",
        cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/alexdev/ecommerce",
        demo: "https://ecommerce-demo.alex.dev"
    },
    {
        id: 2,
        title: "Real-time Chat Application",
        category: "Frontend",
        description: "An interactive chat client enabling immediate peer-to-peer message exchanges, custom chat rooms, and user typing indicators.",
        details: "Leverages React and Tailwind for responsive design, combined with Socket.io for instantaneous message handling. Features emoji support, message history persistence via LocalStorage, and custom online user list.",
        cover: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=600&auto=format&fit=crop",
        tags: ["React", "Tailwind", "Socket.io", "JavaScript"],
        github: "https://github.com/alexdev/chat-app",
        demo: "https://chat-demo.alex.dev"
    },
    {
        id: 3,
        title: "Task Management Dashboard",
        category: "Frontend",
        description: "A beautiful productivity board containing columns for backlog, in-progress, and completed tasks with full drag and drop capabilities.",
        details: "Created with React, TypeScript, and Tailwind CSS. Employs advanced state management, features drag-and-drop mechanics via HTML5 Drag API, task search filter, dynamic tag attachments, and dark mode customization.",
        cover: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=600&auto=format&fit=crop",
        tags: ["React", "TypeScript", "Tailwind", "HTML5 Drag API"],
        github: "https://github.com/alexdev/kanban-dashboard",
        demo: "https://kanban-demo.alex.dev"
    }
];

const certificates = [
    {
        id: 1,
        title: "Advanced React & Redux Mastery",
        issuer: "Meta / Coursera",
        issueDate: "Jan 2026",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Modern TypeScript and Algorithms",
        issuer: "Udemy Professional",
        issueDate: "Nov 2025",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        issueDate: "Aug 2025",
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    }
];

const techStack = [
    { name: "HTML5", icon: "html5", desc: "Hypertext Markup Language for structure" },
    { name: "CSS3", icon: "css3", desc: "Cascading Style Sheets for layout and design" },
    { name: "JavaScript", icon: "braces", desc: "Dynamic scripting language for web pages" },
    { name: "TypeScript", icon: "code-2", desc: "Typed superset of JavaScript by Microsoft" },
    { name: "React.js", icon: "atom", desc: "Component-based UI rendering library" },
    { name: "Tailwind CSS", icon: "palette", desc: "Utility-first modern CSS framework" },
    { name: "Node.js", icon: "server", desc: "JS runtime built on Chrome's V8 engine" },
    { name: "MySQL", icon: "database", desc: "Relational database management system" },
    { name: "Git & GitHub", icon: "git-branch", desc: "Distributed version control system" },
    { name: "Vite", icon: "zap", desc: "Next generation extremely fast frontend tooling" },
    { name: "Framer Motion", icon: "sparkles", desc: "Production-ready animation engine for React" },
    { name: "Terminal / Bash", icon: "terminal", desc: "CLI operations and tooling automation" }
];

// DOM ELEMENTS SELECTORS
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

const tiltCard = document.getElementById('tilt-card');

const projectsTabBtn = document.querySelectorAll('.portfolio-tab-btn');
const portfolioTabContents = document.querySelectorAll('.portfolio-tab-content');

const projectsGrid = document.getElementById('projects-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const stackGrid = document.getElementById('stack-grid');

const projectModal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');

const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');

const contactForm = document.getElementById('contact-form');

const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');
const commentAuthor = document.getElementById('comment-author');
const commentText = document.getElementById('comment-text');
const commentImageInput = document.getElementById('comment-image');
const imagePreviewContainer = document.getElementById('image-preview-container');
const commentImagePreview = document.getElementById('comment-image-preview');
const removePreviewBtn = document.getElementById('remove-preview-btn');

let uploadedImageBase64 = "";

// INITIALIZATION
function init() {
    renderProjects();
    renderCertificates();
    renderTechStack();
    renderComments();
    setupIntersectionObserver();
    setupHeaderScroll();
}

// 1. HEADER SCROLL EFFECT
function setupHeaderScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2', 'shadow-lg');
            header.classList.remove('h-16');
        } else {
            header.classList.remove('py-2', 'shadow-lg');
            header.classList.add('h-16');
        }
    });
}

// 2. MOBILE MENU DRAWER
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// 3. INTERSECTION OBSERVER FOR NAV LINKS HIGHLIGHTING
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is in viewport center
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Update Desktop Nav
                navLinks.forEach(link => {
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active', 'text-white');
                        link.classList.remove('text-textSec');
                    } else {
                        link.classList.remove('active', 'text-white');
                        link.classList.add('text-textSec');
                    }
                });

                // Update Mobile Nav
                mobileNavLinks.forEach(link => {
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('text-accent');
                        link.classList.remove('text-textSec');
                    } else {
                        link.classList.remove('text-accent');
                        link.classList.add('text-textSec');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// 4. TILT CARD EFFECT
tiltCard.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Scale rotation bounds
    const rotateX = ((centerY - y) / centerY) * 12; // Max 12 degrees
    const rotateY = ((x - centerX) / centerX) * 12;

    tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});

tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

// 5. PORTFOLIO TABS NAVIGATION
projectsTabBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button UI switching
        projectsTabBtn.forEach(b => {
            b.classList.remove('active', 'border-accent', 'text-white');
            b.classList.add('border-transparent', 'text-textSec');
        });
        btn.classList.add('active', 'border-accent', 'text-white');
        btn.classList.remove('border-transparent', 'text-textSec');

        // Content Tab Switching
        const tabName = btn.getAttribute('data-tab');
        portfolioTabContents.forEach(content => {
            if (content.getAttribute('id') === `tab-${tabName}`) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
});

// 6. VIEW PROJECTS CTA LINK CLICK
document.getElementById('view-projects-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    // Switch portfolio tab directly to Projects
    document.querySelector('.portfolio-tab-btn[data-tab="projects"]').click();
});

// 7. RENDER PROJECTS
function renderProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = "bg-cardBg border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700/80 hover:shadow-lg transition-all group flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="h-44 w-full overflow-hidden relative">
                    <img src="${project.cover}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute top-3 right-3 px-2 py-0.5 bg-accent/20 border border-accent/30 rounded text-[10px] text-accent font-semibold tracking-wider uppercase">${project.category}</div>
                </div>
                <div class="p-5 space-y-3">
                    <h3 class="text-lg font-bold text-white group-hover:text-accent transition-colors">${project.title}</h3>
                    <p class="text-textSec text-xs line-clamp-2 leading-relaxed">${project.description}</p>
                </div>
            </div>
            <div class="p-5 pt-0 flex justify-between items-center mt-auto">
                <div class="flex gap-1.5 flex-wrap">
                    ${project.tags.slice(0, 2).map(tag => `<span class="px-2 py-0.5 bg-zinc-900 border border-zinc-800/80 rounded text-[10px] text-zinc-400">${tag}</span>`).join('')}
                    ${project.tags.length > 2 ? `<span class="px-2 py-0.5 bg-zinc-900 border border-zinc-800/80 rounded text-[10px] text-zinc-400">+${project.tags.length - 2}</span>` : ''}
                </div>
                <button onclick="openModal(${project.id})" class="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                    Details <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
    lucide.createIcons();
}

// 8. PROJECT MODAL FUNCTIONS
window.openModal = function(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    
    modalContent.innerHTML = `
        <div class="h-64 w-full rounded-lg overflow-hidden">
            <img src="${project.cover}" alt="${project.title}" class="w-full h-full object-cover">
        </div>
        <div class="space-y-4">
            <div class="flex justify-between items-center">
                <h3 class="text-2xl font-bold text-white">${project.title}</h3>
                <span class="px-2.5 py-1 bg-accent/20 border border-accent/30 rounded text-xs text-accent font-semibold">${project.category}</span>
            </div>
            <p class="text-sm text-textSec leading-relaxed">${project.details}</p>
            <div class="flex flex-wrap gap-2 py-1">
                ${project.tags.map(tag => `<span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-textSec">${tag}</span>`).join('')}
            </div>
            <div class="flex gap-4 pt-2 border-t border-zinc-800/80">
                <a href="${project.demo}" target="_blank" class="flex-1 py-2.5 bg-accent hover:bg-accentHover text-white text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-2">
                    <i data-lucide="external-link" class="w-4 h-4"></i> Live Demo
                </a>
                <a href="${project.github}" target="_blank" class="flex-1 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-2">
                    <i data-lucide="github" class="w-4 h-4"></i> GitHub Code
                </a>
            </div>
        </div>
    `;
    
    projectModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    lucide.createIcons();
};

modalClose.addEventListener('click', () => {
    projectModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
});

// 9. RENDER CERTIFICATES
function renderCertificates() {
    certificatesGrid.innerHTML = '';
    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = "bg-cardBg border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700/80 transition-all cursor-pointer group";
        card.innerHTML = `
            <div class="h-40 w-full overflow-hidden relative">
                <img src="${cert.img}" alt="${cert.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <i data-lucide="eye" class="w-8 h-8 text-white"></i>
                </div>
            </div>
            <div class="p-4 space-y-1 text-left">
                <h4 class="text-sm font-semibold text-white truncate">${cert.title}</h4>
                <p class="text-xs text-textSec">${cert.issuer} • ${cert.issueDate}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            openLightbox(cert.img);
        });
        certificatesGrid.appendChild(card);
    });
    lucide.createIcons();
}

// LIGHTBOX FUNCTIONS
function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
});

// 10. RENDER TECH STACK
function renderTechStack() {
    stackGrid.innerHTML = '';
    techStack.forEach(tech => {
        const div = document.createElement('div');
        div.className = "tooltip-trigger relative bg-cardBg border border-zinc-800/80 hover:border-accent hover:-translate-y-1 p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-all cursor-help";
        div.innerHTML = `
            <i data-lucide="${tech.icon}" class="w-8 h-8 text-accent"></i>
            <span class="text-xs font-semibold text-white">${tech.name}</span>
            
            <!-- Tooltip -->
            <div class="tooltip-content absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-40 p-2 bg-zinc-950 border border-zinc-800 text-center text-[10px] text-textSec rounded-md opacity-0 visibility-hidden pointer-events-none transition-all duration-200 shadow-xl z-20 scale-95 translate-y-2">
                ${tech.desc}
                <!-- Arrow -->
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-800"></div>
            </div>
        `;
        stackGrid.appendChild(div);
    });
    lucide.createIcons();
}

// 11. CONTACT FORM HANDLING (MOCK SUBMIT)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    }
});

// 12. PUBLIC GUESTBOOK (COMMENTS)
commentImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedImageBase64 = event.target.result;
            commentImagePreview.src = uploadedImageBase64;
            imagePreviewContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});

removePreviewBtn.addEventListener('click', () => {
    commentImageInput.value = "";
    uploadedImageBase64 = "";
    imagePreviewContainer.classList.add('hidden');
    commentImagePreview.src = "";
});

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = commentAuthor.value.trim();
    const text = commentText.value.trim();

    if(author && text) {
        const comments = JSON.parse(localStorage.getItem('guestbook_comments') || '[]');
        const newComment = {
            id: Date.now(),
            author: author,
            text: text,
            image: uploadedImageBase64,
            timestamp: new Date().toLocaleDateString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        };

        comments.unshift(newComment); // Add to beginning
        localStorage.setItem('guestbook_comments', JSON.stringify(comments));

        // Reset
        commentText.value = "";
        commentImageInput.value = "";
        uploadedImageBase64 = "";
        imagePreviewContainer.classList.add('hidden');
        commentImagePreview.src = "";

        renderComments();
    }
});

function renderComments() {
    const comments = JSON.parse(localStorage.getItem('guestbook_comments') || '[]');
    commentsContainer.innerHTML = '';

    if(comments.length === 0) {
        commentsContainer.innerHTML = '<p class="text-zinc-600 text-sm italic text-center py-8">Be the first to leave a message!</p>';
        return;
    }

    comments.forEach(comment => {
        const div = document.createElement('div');
        div.className = "bg-zinc-950 border border-zinc-900 p-4 rounded-xl space-y-3 text-left transition-all hover:border-zinc-800";
        div.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-accent">${escapeHtml(comment.author)}</span>
                <span class="text-[10px] text-zinc-600">${comment.timestamp}</span>
            </div>
            <p class="text-xs text-textSec leading-relaxed">${escapeHtml(comment.text)}</p>
            ${comment.image ? `
                <div class="mt-2 rounded overflow-hidden max-h-40 border border-zinc-900 cursor-zoom-in" onclick="openLightbox('${comment.image}')">
                    <img src="${comment.image}" class="w-full h-full object-cover">
                </div>
            ` : ''}
        `;
        commentsContainer.appendChild(div);
    });
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

// RUN INITIALIZATION
init();
