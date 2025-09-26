// Animation configurations
const ANIMATIONS = {
    fadeInUp: {
        initial: { opacity: '0', transform: 'translateY(30px)' },
        final: { opacity: '1', transform: 'translateY(0)' }
    },
    scaleIn: {
        initial: { transform: 'scale(0.9)', opacity: '0' },
        final: { transform: 'scale(1)', opacity: '1' }
    },
    slideInLeft: {
        initial: { opacity: '0', transform: 'translateX(-50px)' },
        final: { opacity: '1', transform: 'translateX(0)' }
    },
    slideInRight: {
        initial: { opacity: '0', transform: 'translateX(50px)' },
        final: { opacity: '1', transform: 'translateX(0)' }
    }
};

// Global animation state
let observers = [];
let counters = [];

// Utility functions
function cleanupAnimations() {
    observers.forEach(observer => observer.disconnect());
    observers = [];
    counters.forEach(counter => clearInterval(counter));
    counters = [];
}

function applyInitialAnimation(elements, animation, baseDelay = 0) {
    elements.forEach((el, index) => {
        Object.assign(el.style, animation.initial);
        el.style.transition = `opacity 0.6s ease ${baseDelay + index * 0.1}s, transform 0.6s ease ${baseDelay + index * 0.1}s`;
    });
}

function createIntersectionObserver(animation) {
    return new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Object.assign(entry.target.style, animation.final);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
}

function animateCounter(element, target, suffix = '', duration = 1500) {
    const startTime = Date.now();
    const start = 0;
    
    const counter = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current + suffix;
        
        if (progress === 1) {
            clearInterval(counter);
        }
    }, 16);
    
    counters.push(counter);
}

function initScrollAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length) {
        applyInitialAnimation(serviceCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        serviceCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    const highlights = document.querySelectorAll('.highlight');
    if (highlights.length) {
        applyInitialAnimation(highlights, ANIMATIONS.scaleIn);
        const observer = createIntersectionObserver(ANIMATIONS.scaleIn);
        highlights.forEach(highlight => observer.observe(highlight));
        observers.push(observer);
    }
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length) {
        timelineItems.forEach((item, index) => {
            const animation = index % 2 === 0 ? ANIMATIONS.slideInLeft : ANIMATIONS.slideInRight;
            Object.assign(item.style, animation.initial);
            item.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
        });
        
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animation = Array.from(timelineItems).indexOf(entry.target) % 2 === 0 
                            ? ANIMATIONS.slideInLeft 
                            : ANIMATIONS.slideInRight;
                        Object.assign(entry.target.style, animation.final);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        
        timelineItems.forEach(item => observer.observe(item));
        observers.push(observer);
    }
    
    const designCards = document.querySelectorAll('.design-card');
    if (designCards.length) {
        applyInitialAnimation(designCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        designCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    const approachSteps = document.querySelectorAll('.approach-step');
    if (approachSteps.length) {
        applyInitialAnimation(approachSteps, ANIMATIONS.scaleIn, 0.2);
        const observer = createIntersectionObserver(ANIMATIONS.scaleIn);
        approachSteps.forEach(step => observer.observe(step));
        observers.push(observer);
    }
    
    const sectorCards = document.querySelectorAll('.sector-card');
    if (sectorCards.length) {
        applyInitialAnimation(sectorCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        sectorCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    const advisorCards = document.querySelectorAll('.advisor-card');
    if (advisorCards.length) {
        applyInitialAnimation(advisorCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        advisorCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    const impactStats = document.querySelectorAll('.impact-stat');
    if (impactStats.length) {
        applyInitialAnimation(impactStats, ANIMATIONS.scaleIn);
        const observer = createIntersectionObserver(ANIMATIONS.scaleIn);
        impactStats.forEach(stat => observer.observe(stat));
        observers.push(observer);
    }
}

function initCounterAnimations() {
    const heroStats = document.querySelectorAll('.hero-stat h3');
    if (heroStats.length) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.dataset.animated) {
                        entry.target.dataset.animated = 'true';
                        const text = entry.target.textContent;
                        const match = text.match(/(\d+)(.*)/);
                        if (match) {
                            const [, number, suffix] = match;
                            animateCounter(entry.target, parseInt(number), suffix);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        heroStats.forEach(stat => observer.observe(stat));
        observers.push(observer);
    }
    
    const impactNumbers = document.querySelectorAll('.impact-number');
    if (impactNumbers.length) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.dataset.animated) {
                        entry.target.dataset.animated = 'true';
                        const text = entry.target.textContent;
                        const match = text.match(/(\d+)(.*)/);
                        if (match) {
                            const [, number, suffix] = match;
                            animateCounter(entry.target, parseInt(number), suffix);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        impactNumbers.forEach(num => observer.observe(num));
        observers.push(observer);
    }
}

function initHoverAnimations() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) icon.style.transform = 'scale(1) rotate(0)';
        });
    });
    
    document.querySelectorAll('.sector-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

function initAllAnimations() {
    cleanupAnimations();
    setTimeout(() => {
        initScrollAnimations();
        initCounterAnimations();
        initHoverAnimations();
    }, 100);
}

// Navigation rendering
function renderNav() {
    const html = CONTENT.navigation.map(i => 
        `<li><a onclick="loadPage('${i.id}')">${i.label}</a></li>`
    ).join('');
    document.getElementById('navLinks').innerHTML = html;
    document.getElementById('mobileNavLinks').innerHTML = html;
}

// Mobile menu control
function closeMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Page loading
function loadPage(page) {
    const pages = {
        home: renderHome,
        about: renderAbout,
        services: renderServices,
        strategic: renderStrategic,
        program: renderProgram,
        execution: renderExecution,
        advisors: renderAdvisors,
        contact: renderContact
    };
    
    if (pages[page]) {
        document.getElementById('app').innerHTML = pages[page]();
        if (page === 'strategic') initTabs();
        if (page === 'contact') initContactForm();
        initAllAnimations();
    }
    
    closeMobileMenu();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Page renderers
function renderHome() {
    return `
        <section class="hero" id="home">
            <div class="container">
                <div class="hero-content">
                    <div class="tagline">${CONTENT.home.tagline}</div>
                    <h1>${CONTENT.home.title}</h1>
                    <p>${CONTENT.home.subtitle}</p>
                    <div class="hero-buttons">
                        <a onclick="loadPage('services')" class="btn-primary">Our Services</a>
                        <a onclick="loadPage('about')" class="btn-secondary">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderAbout() {
    return `
        <section class="about" style="padding-top:8rem">
            <div class="container">
                <h2 class="section-title">${CONTENT.about.title}</h2>
                <p class="section-subtitle">${CONTENT.about.subtitle}</p>
                <div class="about-content">
                    <div class="about-text">
                        <h3>${CONTENT.about.heading}</h3>
                        <p>${CONTENT.about.text1}</p>
                        <p>${CONTENT.about.text2}</p>
                        <a onclick="loadPage('contact')" class="cta-button">Partner With Us</a>
                    </div>
                    <div class="about-highlights">
                        ${CONTENT.about.highlights.map(h => `
                            <div class="highlight">
                                <div class="highlight-icon">${h.icon}</div>
                                <h4>${h.title}</h4>
                                <p>${h.text}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderServices() {
    return `
        <section class="services" style="padding-top:8rem">
            <div class="container">
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">Comprehensive health advisory solutions across the entire lifecycle from strategy to execution</p>
                <div class="services-grid">
                    ${CONTENT.services.map(s => `
                        <div class="service-card" onclick="loadPage('${s.id}')">
                            <div class="service-icon">${s.icon}</div>
                            <h3>${s.title}</h3>
                            <p>${s.description}</p>
                            <span class="learn-more">${s.learnMore}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderStrategic() {
    return `
        <section class="hero short">
            <div class="container-wide">
                <div class="hero-grid">
                    <div class="hero-content" style="text-align:left">
                        <div class="breadcrumb">
                            <a onclick="loadPage('home')">Home</a> / <span>${CONTENT.strategic.title}</span>
                        </div>
                        <h1>${CONTENT.strategic.icon} ${CONTENT.strategic.title}</h1>
                        <p>${CONTENT.strategic.subtitle}</p>
                    </div>
                    <div class="hero-stats">
                        ${CONTENT.strategic.stats.map(s => `
                            <div class="hero-stat">
                                <h3>${s.number}</h3>
                                <p>${s.label}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
        <section style="background:#f8f9fa">
            <div class="container-wide">
                <div class="intro-zigzag">
                    <div class="intro-content">
                        <h2>${CONTENT.strategic.intro.title}</h2>
                        <p>${CONTENT.strategic.intro.text}</p>
                        <ul class="intro-features">
                            ${CONTENT.strategic.intro.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="intro-visual"></div>
                </div>
            </div>
        </section>
        <section style="background:white">
            <div class="container">
                <div class="tabs-header">
                    ${CONTENT.strategic.tabs.map((t,i) => `
                        <button class="tab-btn ${i===0?'active':''}" data-tab="${t.id}">${t.label}</button>
                    `).join('')}
                </div>
                ${CONTENT.strategic.tabs.map((t,i) => `
                    <div class="tab-content ${i===0?'active':''}" id="${t.id}">
                        <div class="tab-text">
                            <h3>${t.title}</h3>
                            <p>${t.description}</p>
                            <ul class="tab-list">
                                ${t.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="tab-sidebar">
                            <h4>${t.sidebarTitle}</h4>
                            <ul>
                                ${t.sidebarItems.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        <section class="process-timeline">
            <div class="container">
                <h2 style="text-align:center;font-size:2.8rem;margin-bottom:1rem">Our Strategic Process</h2>
                <p style="text-align:center;font-size:1.1rem;opacity:0.9;max-width:600px;margin:0 auto 4rem">We follow a structured approach designed for precision, discretion, and measurable impact in complex global environments.</p>
                <div class="timeline">
                    ${CONTENT.strategic.process.map(p => `
                        <div class="timeline-item">
                            <div class="timeline-number">${p.number}</div>
                            <div class="timeline-content">
                                <h4>${p.title}</h4>
                                <p>${p.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section style="background:white">
            <div class="container">
                <h2 class="section-title">Sectors of Focus</h2>
                <p class="section-subtitle">We focus on sectors where innovation, governance, and global transformation intersect</p>
                <div class="masonry-grid">
                    ${CONTENT.strategic.sectors.map(s => `
                        <div class="sector-card ${s.large?'large':''}">
                            <div class="sector-header">
                                <div class="sector-icon">${s.icon}</div>
                                <h3>${s.title}</h3>
                            </div>
                            <div class="sector-body">
                                <p>${s.description}</p>
                                ${s.features ? `
                                    <ul class="sector-features">
                                        ${s.features.map(f => `<li>${f}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section class="cta-split">
            <div class="container">
                <h2>${CONTENT.strategic.cta.title}</h2>
                <p>${CONTENT.strategic.cta.text}</p>
                <div class="cta-buttons">
                    <a onclick="loadPage('contact')" class="btn-primary">Schedule Consultation</a>
                    <a onclick="loadPage('about')" class="btn-secondary">Learn More</a>
                </div>
            </div>
        </section>
    `;
}

function renderProgram() {
    return `
        <section class="hero short">
            <div class="container">
                <div class="hero-content">
                    <div class="breadcrumb">
                        <a onclick="loadPage('home')">Home</a> / <span>${CONTENT.program.title}</span>
                    </div>
                    <h1>${CONTENT.program.icon} ${CONTENT.program.title}</h1>
                    <p>${CONTENT.program.subtitle}</p>
                </div>
            </div>
        </section>
        <section style="background:#f8f9fa">
            <div class="container">
                <h2 class="section-title">Comprehensive Design Solutions</h2>
                <p class="section-subtitle">From concept to implementation, we create health programs that deliver measurable impact</p>
                <div class="design-grid">
                    ${CONTENT.program.solutions.map(s => `
                        <div class="design-card">
                            <div class="card-icon">${s.icon}</div>
                            <h3>${s.title}</h3>
                            <p>${s.description}</p>
                            <ul class="feature-list">
                                ${s.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section style="background:white">
            <div class="container">
                <h2 class="section-title">Our Design Methodology</h2>
                <p class="section-subtitle">A proven approach ensuring programs are built for scale, sustainability, and impact</p>
                <div class="approach-grid">
                    ${CONTENT.program.methodology.map(m => `
                        <div class="approach-step">
                            <div class="step-number">${m.number}</div>
                            <h4>${m.title}</h4>
                            <p>${m.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section class="impact-section">
            <div class="container">
                <h2 style="text-align:center;color:white;margin-bottom:1rem">Platform Impact</h2>
                <p style="text-align:center;color:rgba(255,255,255,0.9);margin-bottom:3rem">Our designed platforms deliver measurable results across global health initiatives</p>
                <div class="impact-grid">
                    ${CONTENT.program.stats.map(s => `
                        <div class="impact-stat">
                            <div class="impact-number">${s.number}</div>
                            <div class="impact-label">${s.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section class="cta-split">
            <div class="container">
                <h2>${CONTENT.program.cta.title}</h2>
                <p>${CONTENT.program.cta.text}</p>
                <div class="cta-buttons">
                    <a onclick="loadPage('contact')" class="btn-primary">Start Your Design Journey</a>
                </div>
            </div>
        </section>
    `;
}

function renderExecution() {
    return `
        <section class="hero short">
            <div class="container">
                <div class="hero-content">
                    <div class="breadcrumb">
                        <a onclick="loadPage('home')">Home</a> / <span>${CONTENT.execution.title}</span>
                    </div>
                    <h1>${CONTENT.execution.icon} ${CONTENT.execution.title}</h1>
                    <p>${CONTENT.execution.subtitle}</p>
                    <div class="hero-buttons">
                        <a onclick="loadPage('contact')" class="btn-primary">Start Implementation</a>
                    </div>
                </div>
            </div>
        </section>
        <section style="background:#f8f9fa">
            <div class="container">
                <h2 class="section-title">Implementation Excellence</h2>
                <p class="section-subtitle">Our execution methodology transforms health strategies into successful implementation</p>
                <div class="execution-timeline">
                    ${CONTENT.execution.timeline.map(t => `
                        <div class="timeline-item">
                            <div class="service-icon" style="margin:0 2rem">${t.icon}</div>
                            <div style="background:white;padding:2rem;border-radius:15px;box-shadow:0 8px 25px rgba(0,0,0,0.1);flex:1">
                                <h3 style="color:#667eea;margin-bottom:1rem">${t.title}</h3>
                                <p style="color:#666;margin-bottom:1rem">${t.description}</p>
                                <ul class="feature-list">
                                    ${t.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section class="impact-section">
            <div class="container">
                <h2 style="text-align:center;color:white;margin-bottom:3rem">Implementation Impact</h2>
                <div class="impact-grid">
                    ${CONTENT.execution.stats.map(s => `
                        <div class="impact-stat">
                            <div class="impact-number">${s.number}</div>
                            <div class="impact-label">${s.label}</div>
                            ${s.detail ? `<div style="font-size:0.85rem;opacity:0.9;margin-top:0.5rem">${s.detail}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        <section class="cta-split">
            <div class="container">
                <h2>${CONTENT.execution.cta.title}</h2>
                <p>${CONTENT.execution.cta.text}</p>
                <div class="cta-buttons">
                    <a onclick="loadPage('contact')" class="btn-primary">Schedule Implementation Consultation</a>
                    <a onclick="loadPage('about')" class="btn-secondary">Learn More About Our Process</a>
                </div>
            </div>
        </section>
    `;
}

function renderAdvisors() {
    return `
        <section class="advisors" style="padding-top:8rem">
            <div class="container">
                <h2 class="section-title">Strategic Advisors</h2>
                <p class="section-subtitle">World-class expertise across health systems, innovation, and global strategy</p>
                <div class="advisors-grid">
                    ${CONTENT.advisors.map(a => `
                        <div class="advisor-card">
                            <h4>${a.name}</h4>
                            <div class="title">${a.title}</div>
                            <p>${a.bio}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderContact() {
    return `
        <section class="contact" style="padding-top:8rem">
            <div class="container">
                <h2 class="section-title" style="color:white">${CONTENT.contact.title}</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>${CONTENT.contact.heading}</h3>
                        <p>${CONTENT.contact.text}</p>
                        <p><strong>Email:</strong> ${CONTENT.contact.email}</p>
                        <p><strong>Focus Areas:</strong> ${CONTENT.contact.focusAreas}</p>
                        <p><strong>Sectors:</strong> ${CONTENT.contact.sectors}</p>
                    </div>
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" required>
                        </div>
                        <div class="form-group">
                            <label>Organization</label>
                            <input type="text">
                        </div>
                        <div class="form-group">
                            <label>How can we help you?</label>
                            <textarea required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

// Tab functionality
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });
}

// Contact form
function initContactForm() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            document.getElementById('mobileMenu').classList.toggle('active');
            document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            nav.style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
        }
    });

    // Initialize
    renderNav();
    loadPage('home');
});