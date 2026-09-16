/* ==========================================================================
   Data — services, projects, skills, process
   ========================================================================== */

const SERVICES = [
    { num: '01', title: 'Frontend Development', desc: 'Modern responsive interfaces using React and JavaScript.' },
    { num: '02', title: 'Backend Development', desc: 'Scalable APIs and backend systems using Node.js and Express.' },
    { num: '03', title: 'Full Stack Development', desc: 'Complete web applications connecting frontend, backend and database systems.' },
    { num: '04', title: 'Database & APIs', desc: 'MongoDB, Prisma, REST APIs and structured data systems.' },
    { num: '05', title: 'Admin Dashboards', desc: 'Powerful dashboards for managing products, employees, users and business operations.' },
    { num: '06', title: 'AI & Automation', desc: 'AI-powered features and automation integrated into modern applications.' },
];

const PROJECTS = [
    {
        index: '01',
        title: 'Ahmad Cloth House',
        description: 'A full-stack e-commerce platform designed for a modern clothing brand, including product management, authentication, shopping cart, checkout and admin functionality.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma', 'Cloudinary'],
        features: ['Premium storefront', 'Product management', 'Admin dashboard', 'Authentication', 'Shopping cart', 'Checkout', 'Cloud media management', 'Backend APIs'],
        view: 'test/projects.html',
        code: 'https://github.com/hussnain-codex',
    },
    {
        index: '02',
        title: 'HR Management Portal',
        description: 'A modern employee management platform designed to manage employees, attendance, leave requests, holidays, documents and administrative workflows.',
        tech: ['React', 'Node.js', 'MongoDB', 'Authentication', 'Cloudinary'],
        features: ['Employee management', 'Employee dashboard', 'Attendance', 'Leave requests', 'Holiday management', 'Admin dashboard', 'Employee documents', 'Role-based access'],
        view: '#',
        code: '#',
    },
];

const MORE_PROJECTS = [
    { title: 'Currency Converter', desc: 'A responsive currency converter with fast, accurate conversions and a clean interface.', tags: ['React', 'JavaScript'] },
    { title: 'Interactive JavaScript Demo', desc: 'A dynamic page featuring task management, theme switching and real-time updates.', tags: ['JavaScript', 'DOM'], link: 'index.html%20jawascirpt/index.html' },
    { title: 'Quiz App', desc: 'An interactive quiz app with multiple-choice questions, instant scoring and a polished interface.', tags: ['JavaScript', 'UI'] },
    { title: 'To-Do List App', desc: 'A task management app that lets users add, complete and remove tasks with a clean design.', tags: ['JavaScript', 'DOM'] },
    { title: 'Student Management System', desc: 'A console application using C++ and OOP to manage student records.', tags: ['C++', 'OOP'] },
    { title: 'Library Management System', desc: 'A C++ system to manage book records, issuing, returns and inventory.', tags: ['C++', 'File Handling'] },
];

const SKILLS = [
    { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
    { title: 'Database', items: ['MongoDB', 'Prisma', 'SQL'] },
    { title: 'Programming', items: ['C++', 'JavaScript'] },
    { title: 'Tools & Cloud', items: ['Git', 'GitHub', 'Cloudinary', 'Cloud Deployment', 'CI/CD'] },
    { title: 'AI', items: ['AI API Integration', 'AI Agents', 'Automation'] },
];

const PROCESS = [
    { num: '01', title: 'Understand', desc: 'Understand the business problem, users and requirements.' },
    { num: '02', title: 'Design', desc: 'Plan the experience, architecture and technical approach.' },
    { num: '03', title: 'Build', desc: 'Develop the frontend, backend, APIs and database systems.' },
    { num: '04', title: 'Improve', desc: 'Test, optimize, deploy and continuously improve.' },
];

/* ==========================================================================
   Render helpers
   ========================================================================== */

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = SERVICES.map((s) => `
        <article class="service-card" data-reveal="fade-up">
            <span class="service-num">${s.num}</span>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <span class="service-arrow" aria-hidden="true">→</span>
        </article>
    `).join('');
}

function renderWork() {
    const list = document.getElementById('workList');
    if (!list) return;
    list.innerHTML = PROJECTS.map((p, i) => `
        <article class="work-item ${i % 2 === 1 ? 'is-reverse' : ''}">
            <div class="work-preview" data-reveal="fade-in">
                <div class="work-preview-chrome"><span></span><span></span><span></span></div>
                <div class="work-preview-body">
                    <div class="work-preview-glow"></div>
                    <span class="work-preview-mark">${p.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                </div>
            </div>
            <div class="work-body" data-reveal="fade-up">
                <span class="work-index">${p.index}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="work-tags">${p.tech.map((t) => `<span>${t}</span>`).join('')}</div>
                <ul class="work-features">${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>
                <div class="work-links">
                    <a class="work-link" href="${p.view}">View Project <span aria-hidden="true">→</span></a>
                    <a class="work-link" href="${p.code}" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">→</span></a>
                </div>
            </div>
        </article>
    `).join('');

    const more = document.getElementById('moreWorkGrid');
    if (more) {
        more.innerHTML = MORE_PROJECTS.map((p) => `
            <a class="more-card" href="${p.link || 'test/projects.html'}" data-reveal="fade-up">
                <h4>${p.title}</h4>
                <p>${p.desc}</p>
                <div class="work-tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
            </a>
        `).join('');
    }
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    grid.innerHTML = SKILLS.map((cat) => `
        <div data-reveal="fade-up">
            <p class="skill-col-title">${cat.title}</p>
            <ul class="skill-items">${cat.items.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
    `).join('');
}

function renderProcess() {
    const grid = document.getElementById('processGrid');
    if (!grid) return;
    grid.innerHTML = PROCESS.map((step) => `
        <div class="process-step" data-reveal="fade-up">
            <span class="process-num">${step.num}</span>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
        </div>
    `).join('');
}

/* ==========================================================================
   Theme
   ========================================================================== */

function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    const apply = (theme) => {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            if (toggle) toggle.textContent = '☀️';
        } else {
            root.removeAttribute('data-theme');
            if (toggle) toggle.textContent = '🌙';
        }
    };

    let stored = 'light';
    try {
        stored = localStorage.getItem('theme') || 'light';
    } catch (e) { /* storage unavailable */ }
    apply(stored);

    if (toggle) {
        toggle.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            apply(next);
            try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
        });
    }
}

/* ==========================================================================
   Navigation
   ========================================================================== */

function initNav() {
    const nav = document.getElementById('siteNav');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const backToTop = document.getElementById('backToTop');

    const onScroll = () => {
        if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 40);
        if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 400);
        updateActiveLink();
    };

    const updateActiveLink = () => {
        const scrollPos = window.scrollY + 140;
        const sections = document.querySelectorAll('main section[id]');
        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`);
                });
            }
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/* ==========================================================================
   Scroll reveal
   ========================================================================== */

function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || prefersReduced) {
        targets.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Hero visual — subtle pointer tilt (desktop only)
   ========================================================================== */

function initHeroTilt() {
    const visual = document.getElementById('heroVisual');
    if (!visual) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = null;
    visual.addEventListener('mousemove', (event) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
            const rect = visual.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            visual.style.transform = `perspective(1200px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
        });
    });

    visual.addEventListener('mouseleave', () => {
        if (frame) cancelAnimationFrame(frame);
        visual.style.transform = 'none';
    });
}

/* ==========================================================================
   Contact form
   ========================================================================== */

function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form || !status) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            status.textContent = 'Please fill out every field before sending your message.';
            status.classList.add('error');
            return;
        }

        try {
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            submissions.push({ name, email, subject, message, date: new Date().toLocaleString() });
            localStorage.setItem('formSubmissions', JSON.stringify(submissions));
        } catch (e) { /* storage unavailable */ }

        status.textContent = `Thanks ${name}! Your message has been received.`;
        status.classList.remove('error');
        form.reset();
    });
}

/* ==========================================================================
   Init
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderWork();
    renderSkills();
    renderProcess();
    initTheme();
    initNav();
    initReveal();
    initHeroTilt();
    initContactForm();

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
