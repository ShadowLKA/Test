const CONTENT = {
    navigation: [
        {id: "home", label: "Home"},
        {id: "about", label: "About"},
        {id: "services", label: "Services"},
        {id: "advisors", label: "Team"},
        {id: "contact", label: "Contact"}
    ],
    
    home: {
        tagline: "Independent. Expert-led. System-focused.",
        title: "Global Strategy for Health, Governance, and Innovation",
        subtitle: "We support public and private sector organizations as they navigate complex, interconnected challenges across healthcare, politics, and innovation with tailored strategic solutions grounded in systems thinking."
    },
    
    about: {
        title: "About Arcline Advisory",
        subtitle: "A global advisory firm built on a model of practice-led expertise, delivering strategic support grounded in real-world implementation",
        heading: "Transforming Complex Challenges into Strategic Solutions",
        text1: "Arcline is a global advisory firm supporting public and private sector organizations across healthcare, politics, and innovation. Each of our practice areas is led by experienced professionals with deep sector knowledge, global perspective, and a track record of driving measurable impact.",
        text2: "We deliver tailored strategic support that bridges high-level strategy with on-the-ground execution, bringing clarity, credibility, and momentum to even the most complex initiatives.",
        highlights: [
            {icon: "🌍", title: "Global Reach", text: "Cross-country expertise across diverse regulatory environments"},
            {icon: "🎯", title: "Systems Focus", text: "Holistic approach to interconnected challenges"},
            {icon: "⚡", title: "Impact Driven", text: "Measurable results from strategy to implementation"}
        ]
    },
    
    services: [
        {
            id: "strategic",
            icon: "🎯",
            title: "Strategic Advisory",
            description: "We support organizations in shaping clear, forward-looking strategies for national health system reform, multisectoral programming, public-private alignment, and advancement of new models of care.",
            learnMore: "Learn More"
        },
        {
            id: "program",
            icon: "🗏",
            title: "Program & Platform Design",
            description: "We help design scalable, equitable health programs and platforms, integrating innovation, delivery models, and systems thinking across diverse health areas and geographies.",
            learnMore: "Learn More"
        },
        {
            id: "execution",
            icon: "⚡",
            title: "Execution Support",
            description: "From piloting new approaches to scaling implementation, we provide hands-on support to translate strategy into action, ensuring operational readiness and real-world impact.",
            learnMore: "Learn More"
        }
    ],
    
    strategic: {
        icon: "🎯",
        title: "Strategic Advisory",
        subtitle: "We support organizations in shaping clear, forward-looking strategies for national health system reform, multisectoral programming, public-private alignment, and advancement of new models of care.",
        breadcrumb: "Home / Strategic Advisory",
        stats: [
            {number: "50+", label: "Global Markets"},
            {number: "15+", label: "Years Experience"},
            {number: "95%", label: "Success Rate"}
        ],
        intro: {
            title: "Operating at the Edge of Transformation",
            text: "Arcline Advisory works with clients who are not merely navigating complexity, but shaping the systems, alliances, and decisions that define it. We combine geopolitical fluency with operational clarity, providing integrated advisory services across the full arc of strategy.",
            features: [
                "Senior-led engagements with proven expertise",
                "Trusted networks across global institutions",
                "Discretion and precision in sensitive environments",
                "Context-sensitive strategies that deliver results"
            ]
        },
        cta: {
            title: "Ready to Shape What's Next?",
            text: "Partner with Arcline Advisory to navigate complex global challenges and convert strategic vision into measurable influence. Let's discuss how we can help you operate and lead at the edge of transformation."
        },
        tabs: [
            {
                id: "diplomacy",
                label: "Diplomacy",
                title: "Strategic Diplomacy & Engagement",
                description: "We help clients build meaningful relationships with key decision-makers and stakeholders across government, multilateral institutions, and private sector networks. Our approach goes beyond traditional lobbying to create lasting strategic partnerships.",
                features: [
                    "High-level stakeholder mapping and engagement strategies",
                    "Coalition building for policy and market objectives",
                    "Cross-border partnership facilitation",
                    "Crisis communication and reputation management"
                ],
                sidebarTitle: "Recent Success",
                sidebarItems: [
                    "Facilitated $2B infrastructure agreement",
                    "Opened 3 new regulatory pathways",
                    "Built coalition of 15+ stakeholders",
                    "Resolved cross-border disputes"
                ]
            },
            {
                id: "risk",
                label: "Risk Strategy",
                title: "Geopolitical Risk & Foresight",
                description: "We prepare clients for what others don't yet see. Our work enables organizations to anticipate disruptions, model geopolitical shifts, and develop risk strategies that are both scenario-proof and execution-ready.",
                features: [
                    "Scenario modeling and strategic planning",
                    "Political risk assessment and mitigation",
                    "Regulatory change anticipation",
                    "Crisis preparedness and response frameworks"
                ],
                sidebarTitle: "Risk Factors We Track",
                sidebarItems: [
                    "Political transition impacts",
                    "Regulatory environment shifts",
                    "Economic policy changes",
                    "Security and stability concerns"
                ]
            },
            {
                id: "market",
                label: "Market Expansion",
                title: "Market Positioning & Expansion",
                description: "We help clients translate ambition into foothold. From early assessments to launch strategies, we support successful market entry, adaptation, and scale—especially in complex or politically sensitive environments.",
                features: [
                    "Market opportunity assessment and validation",
                    "Regulatory pathway mapping and strategy",
                    "Local partner identification and due diligence",
                    "Go-to-market strategy and execution support"
                ],
                sidebarTitle: "Market Entry Support",
                sidebarItems: [
                    "Regulatory compliance roadmaps",
                    "Strategic partnership facilitation",
                    "Cultural adaptation strategies",
                    "Risk mitigation frameworks"
                ]
            }
        ],
        process: [
            {
                number: "1",
                title: "Strategic Assessment",
                description: "Deep-dive analysis of your objectives, challenges, and operating environment. We map stakeholder landscapes and identify critical success factors."
            },
            {
                number: "2",
                title: "Strategy Development",
                description: "Customized strategies that align with your goals while navigating complex political, regulatory, and cultural landscapes."
            },
            {
                number: "3",
                title: "Stakeholder Engagement",
                description: "Direct engagement with key decision-makers, building relationships and coalitions essential for success."
            },
            {
                number: "4",
                title: "Implementation Support",
                description: "Hands-on guidance throughout execution, ensuring strategies translate into measurable outcomes and sustainable impact."
            }
        ],
        sectors: [
            {
                icon: "⚕️",
                title: "Health & Life Sciences",
                description: "Global health initiatives, pharmaceutical market access, medical device regulatory pathways, and public health policy development.",
                large: true,
                features: [
                    "Regulatory pathway optimization",
                    "Market access strategies",
                    "Public-private partnerships",
                    "Health system integration",
                    "Crisis response coordination"
                ]
            },
            {
                icon: "⚡",
                title: "Energy & Climate",
                description: "Renewable energy projects, climate finance, and sustainability frameworks across emerging markets."
            },
            {
                icon: "💻",
                title: "Technology & Digital",
                description: "Digital transformation, data governance, cybersecurity policy, and technology regulation compliance."
            },
            {
                icon: "📈",
                title: "Trade & Finance",
                description: "International trade agreements, financial services regulation, and cross-border investment facilitation."
            },
            {
                icon: "🛡️",
                title: "Security & Governance",
                description: "Governance reform, anti-corruption initiatives, judicial strengthening, and security sector transformation."
            }
        ]
    },
    
    program: {
        icon: "🗏",
        title: "Program & Platform Design",
        subtitle: "We help design scalable, equitable health programs and platforms—integrating innovation, delivery models, and systems thinking across diverse health areas and geographies.",
        breadcrumb: "Home / Program & Platform Design",
        cta: {
            title: "Ready to Design Your Health Platform?",
            text: "Let's collaborate to create scalable, equitable health solutions that drive real-world impact."
        },
        solutions: [
            {
                icon: "🌍",
                title: "Global Health Platform Architecture",
                description: "Design and implement scalable platforms that operate across diverse regulatory environments, income settings, and health system contexts.",
                features: [
                    "Multi-country deployment strategies",
                    "Regulatory compliance frameworks",
                    "Local adaptation protocols",
                    "Cross-border data governance",
                    "Cultural integration planning"
                ]
            },
            {
                icon: "🔄",
                title: "Healthcare System Integration",
                description: "Build programs that seamlessly integrate with existing healthcare infrastructure while driving transformational change.",
                features: [
                    "EHR and health system integration",
                    "Workflow optimization design",
                    "Provider training frameworks",
                    "Quality assurance protocols",
                    "Performance monitoring systems"
                ]
            },
            {
                icon: "💡",
                title: "Innovation-Driven Program Design",
                description: "Create programs that leverage cutting-edge health technologies while ensuring practical implementation and sustainability.",
                features: [
                    "AI/ML integration strategies",
                    "Digital health platform development",
                    "Telemedicine program design",
                    "Mobile health solutions",
                    "IoT and remote monitoring"
                ]
            },
            {
                icon: "⚖️",
                title: "Equity & Access-Focused Design",
                description: "Ensure all programs are designed with equity at the core, addressing barriers to access and promoting inclusive health outcomes.",
                features: [
                    "Health equity assessment frameworks",
                    "Community engagement strategies",
                    "Accessibility compliance design",
                    "Vulnerable population focus",
                    "Social determinants integration"
                ]
            },
            {
                icon: "📊",
                title: "Data-Driven Platform Development",
                description: "Design platforms that harness health data for insights while maintaining privacy, security, and regulatory compliance.",
                features: [
                    "Health data analytics architecture",
                    "HIPAA/GDPR compliance design",
                    "Real-time monitoring dashboards",
                    "Predictive analytics integration",
                    "Evidence-based optimization"
                ]
            },
            {
                icon: "🤝",
                title: "Multi-Stakeholder Platform Design",
                description: "Create platforms that enable collaboration between governments, private sector, NGOs, and communities for maximum impact.",
                features: [
                    "Public-private partnership frameworks",
                    "Stakeholder engagement platforms",
                    "Collaborative governance models",
                    "Resource sharing mechanisms",
                    "Impact measurement systems"
                ]
            }
        ],
        methodology: [
            {
                number: "1",
                title: "Systems Analysis",
                description: "Deep dive into existing health ecosystems, stakeholder mapping, and identifying intervention points for maximum impact."
            },
            {
                number: "2",
                title: "Co-Design Process",
                description: "Collaborative design sessions with all stakeholders to ensure solutions meet real-world needs and constraints."
            },
            {
                number: "3",
                title: "Innovation Integration",
                description: "Incorporate cutting-edge health technologies and methodologies while ensuring practical implementation."
            },
            {
                number: "4",
                title: "Pilot & Iterate",
                description: "Rapid prototyping and testing in controlled environments with continuous feedback and improvement cycles."
            },
            {
                number: "5",
                title: "Scale Planning",
                description: "Design scalability frameworks from day one, ensuring programs can grow across geographies and populations."
            },
            {
                number: "6",
                title: "Impact Measurement",
                description: "Build comprehensive monitoring and evaluation systems to track outcomes and enable data-driven optimization."
            }
        ],
        stats: [
            {number: "50+", label: "Countries Deployed"},
            {number: "10M+", label: "Lives Impacted"},
            {number: "95%", label: "Implementation Success Rate"},
            {number: "40%", label: "Average Efficiency Improvement"}
        ]
    },
    
    execution: {
        icon: "⚡",
        title: "Execution Support",
        subtitle: "From piloting new approaches to scaling implementation, we provide hands-on support to translate health strategy into action—ensuring operational readiness, stakeholder coordination, and real-world impact.",
        breadcrumb: "Home / Execution Support",
        heroStats: [
            {number: "85%", label: "Success Rate"},
            {number: "30%", label: "Faster Deployment"},
            {number: "40%", label: "Risk Reduction"},
            {number: "95%", label: "Stakeholder Satisfaction"}
        ],
        cta: {
            title: "Ready to Execute Your Health Strategy?",
            text: "Transform your health initiatives from strategy to successful implementation with proven execution support that delivers real-world impact."
        },
        timeline: [
            {
                icon: "🎯",
                title: "Pilot Program Implementation",
                description: "Launch and refine health initiatives through systematic piloting and rapid iteration cycles.",
                features: [
                    "Pilot design and setup",
                    "Real-time monitoring and adjustment",
                    "Stakeholder engagement and training",
                    "Risk mitigation and contingency planning"
                ]
            },
            {
                icon: "🔧",
                title: "Operational Readiness",
                description: "Ensure your health systems and teams are fully prepared for successful implementation.",
                features: [
                    "Workflow integration and optimization",
                    "Staff training and capacity building",
                    "Technology deployment and support",
                    "Change management facilitation"
                ]
            },
            {
                icon: "🤝",
                title: "Stakeholder Coordination",
                description: "Align diverse stakeholders and ensure seamless collaboration throughout implementation.",
                features: [
                    "Cross-sector partnership management",
                    "Communication strategy execution",
                    "Conflict resolution and alignment",
                    "Governance structure implementation"
                ]
            },
            {
                icon: "📈",
                title: "Scale-Up and Expansion",
                description: "Successfully scale proven health interventions across multiple sites and populations.",
                features: [
                    "Multi-site rollout strategies",
                    "Resource allocation and management",
                    "Quality assurance during scaling",
                    "Performance standardization"
                ]
            }
        ],
        stats: [
            {number: "200+", label: "Programs Implemented", detail: "Across 50+ countries and diverse health systems"},
            {number: "15M+", label: "Lives Impacted", detail: "Through successful program implementations"},
            {number: "6 Months", label: "Average Time to Scale", detail: "From pilot to full implementation"},
            {number: "98%", label: "On-Time Delivery", detail: "Projects completed within timeline and scope"}
        ]
    },
    
    advisors: [
        {
            name: "Dr. Rupa Patel",
            title: "Strategic Advisor, HIV Prevention & Health Equity",
            bio: "Internationally recognized infectious disease physician and former CDC PrEP lead, advising on prevention strategy, access equity, and the integration of biomedical prevention into public health systems."
        },
        {
            name: "Dr. Rashad Massoud",
            title: "Strategic Advisor, Health Systems & Quality Improvement",
            bio: "Global health systems expert and former Vice President at URC and AmeriCares, advising on large-scale implementation, health system strengthening, and quality improvement in low- and middle-income countries."
        },
        {
            name: "Dr. Judy Kuriansky",
            title: "Strategic Advisor, Mental Health & Global Resilience",
            bio: "Internationally recognized clinical psychologist and UN NGO representative, advising on trauma-informed care, mental health integration, and global policy advocacy."
        },
        {
            name: "Dr. Tamar Tchelidze",
            title: "Strategic Advisor, Global Health Strategy & Public Health Systems",
            bio: "Global health leader with experience across diplomacy, diagnostics, and policy, advising on public-private partnerships, health system transformation, and infectious disease strategy worldwide."
        }
    ],
    
    contact: {
        title: "Get In Touch",
        heading: "Ready to Transform Your Health Initiative?",
        text: "Let's discuss how we can help you navigate complex health challenges and drive strategic impact. Reach out today for a confidential consultation.",
        email: "contact@arclineadvisory.com",
        focusAreas: "Global Health Strategy, Systems Strengthening, Innovation Implementation",
        sectors: "Public Health, Healthcare Innovation, Policy & Governance"
    }
};

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
    // Clear all observers
    observers.forEach(observer => observer.disconnect());
    observers = [];
    
    // Clear all counter intervals
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
                    // Optional: unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        },
        { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );
}

function animateCounter(element, target, suffix = '', duration = 1500) {
    const startTime = Date.now();
    const start = 0;
    
    const counter = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current + suffix;
        
        if (progress === 1) {
            clearInterval(counter);
        }
    }, 16); // ~60fps
    
    counters.push(counter);
}

function initScrollAnimations() {
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length) {
        applyInitialAnimation(serviceCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        serviceCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    // About highlights
    const highlights = document.querySelectorAll('.highlight');
    if (highlights.length) {
        applyInitialAnimation(highlights, ANIMATIONS.scaleIn);
        const observer = createIntersectionObserver(ANIMATIONS.scaleIn);
        highlights.forEach(highlight => observer.observe(highlight));
        observers.push(observer);
    }
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length) {
        timelineItems.forEach((item, index) => {
            const animation = index % 2 === 0 ? ANIMATIONS.slideInLeft : ANIMATIONS.slideInRight;
            Object.assign(item.style, animation.initial);
            item.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
        });
        
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry, index) => {
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
    
    // Design cards
    const designCards = document.querySelectorAll('.design-card');
    if (designCards.length) {
        applyInitialAnimation(designCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        designCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    // Approach steps
    const approachSteps = document.querySelectorAll('.approach-step');
    if (approachSteps.length) {
        applyInitialAnimation(approachSteps, ANIMATIONS.scaleIn, 0.2);
        const observer = createIntersectionObserver(ANIMATIONS.scaleIn);
        approachSteps.forEach(step => observer.observe(step));
        observers.push(observer);
    }
    
    // Sector cards
    const sectorCards = document.querySelectorAll('.sector-card');
    if (sectorCards.length) {
        applyInitialAnimation(sectorCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        sectorCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    // Advisor cards
    const advisorCards = document.querySelectorAll('.advisor-card');
    if (advisorCards.length) {
        applyInitialAnimation(advisorCards, ANIMATIONS.fadeInUp);
        const observer = createIntersectionObserver(ANIMATIONS.fadeInUp);
        advisorCards.forEach(card => observer.observe(card));
        observers.push(observer);
    }
    
    // Impact stats
    const impactStats = document.querySelectorAll('.impact-stat');
    if (impactStats.length) {
        applyInitialAnimation(impactStats, ANIMATIONS.scaleIn);
        const observer = createIntersectionObserver(ANIMATIONS.scaleIn);
        impactStats.forEach(stat => observer.observe(stat));
        observers.push(observer);
    }
}

function initCounterAnimations() {
    // Hero stats counters
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
    
    // Impact numbers
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
    // Enhanced hover for service cards
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
    
    // Sector card hover with tilt effect
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

// Main initialization functions
function initAllAnimations() {
    cleanupAnimations();
    
    // Wait for DOM to be fully rendered
    setTimeout(() => {
        initScrollAnimations();
        initCounterAnimations();
        initHoverAnimations();
    }, 100);
}

// Page rendering functions
function renderNav() {
    const html = CONTENT.navigation.map(i => 
        `<li><a onclick="loadPage('${i.id}')">${i.label}</a></li>`
    ).join('');
    document.getElementById('navLinks').innerHTML = html;
    document.getElementById('mobileNavLinks').innerHTML = html;
}

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
        
        // Page-specific initializations
        if (page === 'strategic') initTabs();
        if (page === 'contact') initContactForm();
        
        // Initialize animations for the new content
        initAllAnimations();
        
        // Update active nav state
        updateActiveNav(page);
    }
    
    closeMobileMenu();
    window.scrollTo(0, 0);
}

function updateActiveNav(currentPage) {
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        const linkPage = link.getAttribute('onclick')?.match(/loadPage\('(.+?)'\)/)?.[1];
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

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
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label>Organization</label>
                            <input type="text" name="organization">
                        </div>
                        <div class="form-group">
                            <label>How can we help you?</label>
                            <textarea name="message" placeholder="Tell us about your health strategy challenge..." required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

// Page-specific initialization functions
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(this.dataset.tab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message
            alert('Thank you for your message! We\'ll get back to you soon to discuss your health strategy needs.');
            this.reset();
        });
    }
}

function closeMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Global event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Navbar scroll effect
    let ticking = false;
    function updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
        ticking = false;
    }

    function requestNavbarUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestNavbarUpdate, { passive: true });

    // Initialize navigation
    renderNav();
    
    // Load initial page
    loadPage('home');
});

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.loadPage = loadPage;
    window.renderNav = renderNav;
}