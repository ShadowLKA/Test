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
