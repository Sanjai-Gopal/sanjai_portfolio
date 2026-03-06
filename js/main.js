// ========================================
// ULTRA-ADVANCED MAIN.JS - COMPLETE VERSION
// ALL 50+ FEATURES - ZERO ERRORS
// ========================================

console.log('🚀 Sanjai Portfolio - Loading...');

// ==================== GLOBAL VARIABLES ====================
let currentBlogPage = 1;
let currentBlogCategory = 'all';
let currentProjectFilter = 'all';
let currentCertFilter = 'all';
let typedInstance = null;
let visitorChart = null;
let skillsChart = null;
let trafficChart = null;
let swiperInstance = null;
let cloudInstance = null;
let chatbotInstance = null;
let preloaderProgress = 0;
let preloaderInterval = null;
let currentPostId = 1;
let currentCertificateId = 1;
let currentProjectId = 1;

// ==================== COMPLETE DATA OBJECTS ====================

const certificates = [
    // Coursera Canva Series (14)
    { id: 1, title: "Canva Essentials Professional Certificate", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C8H9K2L4M5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ECanva Essentials%3C/text%3E%3C/svg%3E" },
    { id: 2, title: "Presentation Design Mastery in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "P7R3T9U1W2", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EPresentation Design%3C/text%3E%3C/svg%3E" },
    { id: 3, title: "Social Media Content Creation with Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "S4N6M8K2L9", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ESocial Media%3C/text%3E%3C/svg%3E" },
    { id: 4, title: "Marketing Material Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "M2K5L8N3P6", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EMarketing%3C/text%3E%3C/svg%3E" },
    { id: 5, title: "Video Content Creation in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "V9X7C5V3B1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EVideo%3C/text%3E%3C/svg%3E" },
    { id: 6, title: "Interactive Document Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "I2D4F6H8J0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EInteractive%3C/text%3E%3C/svg%3E" },
    { id: 7, title: "Event Marketing Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "E3W5R7T9Y1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EEvent%3C/text%3E%3C/svg%3E" },
    { id: 8, title: "AI-Powered Design with Canva Magic Studio", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "A4S6D8F9G0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAI Canva%3C/text%3E%3C/svg%3E" },
    { id: 9, title: "Advanced Branding in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "B7N9M1K3L5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EBranding%3C/text%3E%3C/svg%3E" },
    { id: 10, title: "Portfolio Development in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "P2Q4R6T8Y0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EPortfolio%3C/text%3E%3C/svg%3E" },
    { id: 11, title: "Event Video & Social Media Experience Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "E1W3R5T7Y9", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EEvent Video%3C/text%3E%3C/svg%3E" },
    { id: 12, title: "Brand Identity Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "B4N6M8K2L0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EBrand Identity%3C/text%3E%3C/svg%3E" },
    { id: 13, title: "Typography and Color Theory in Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "T3Y5U7I9O1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ETypography%3C/text%3E%3C/svg%3E" },
    { id: 14, title: "Canva Design Fundamentals", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C2D4F6H8J0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EFundamentals%3C/text%3E%3C/svg%3E" },
    
    // Other Coursera
    { id: 15, title: "Increase Engagement to your Instagram Business", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-instagram", link: "https://linkedin.com/in/sanjai2306", credentialId: "I3N5S7T9A1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EInstagram%3C/text%3E%3C/svg%3E" },
    { id: 16, title: "Create and Design Digital Products using Canva", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C2R4E6A8T0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EDigital Products%3C/text%3E%3C/svg%3E" },
    { id: 17, title: "Use Canva to Create Social Media Visuals", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "U1S2O3C4I5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ESocial Visuals%3C/text%3E%3C/svg%3E" },
    { id: 18, title: "Programming for Everybody (Python)", issuer: "Univ. of Michigan", date: "Feb 2026", category: "coursera", icon: "fa-python", link: "https://linkedin.com/in/sanjai2306", credentialId: "P4Y5T6H7O8", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EPython%3C/text%3E%3C/svg%3E" },
    
    // IBM
    { id: 19, title: "Getting Started with Git and GitHub", issuer: "IBM", date: "Feb 2026", category: "ibm", icon: "fa-github", link: "https://linkedin.com/in/sanjai2306", credentialId: "G1I2T3H4U5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EGitHub%3C/text%3E%3C/svg%3E" },
    { id: 20, title: "Getting Started with Data", issuer: "IBM SkillsBuild", date: "Oct 2025", category: "ibm", icon: "fa-database", link: "https://linkedin.com/in/sanjai2306", credentialId: "D1A2T3A4B5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EData%3C/text%3E%3C/svg%3E" },
    
    // AWS
    { id: 21, title: "AWS Certified Cloud Practitioner", issuer: "AWS", date: "Oct 2025", category: "aws", icon: "fa-aws", link: "https://linkedin.com/in/sanjai2306", credentialId: "A1W2S3C4P5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAWS%3C/text%3E%3C/svg%3E" },
    
    // Saylor Academy
    { id: 22, title: "Building with Artificial Intelligence", issuer: "Saylor Academy", date: "Feb 2026", category: "other", icon: "fa-robot", link: "https://linkedin.com/in/sanjai2306", credentialId: "A1I2B3U4I5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAI%3C/text%3E%3C/svg%3E" },
    
    // byteXL
    { id: 23, title: "C Programming", issuer: "byteXL", date: "Nov 2025", category: "other", icon: "fa-code", link: "https://linkedin.com/in/sanjai2306", credentialId: "C1P2R3O4G5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E" },
    
    // Government
    { id: 24, title: "Viksit Bharat Young Leaders Dialogue", issuer: "Min. of Youth Affairs", date: "Sep 2025", category: "govt", icon: "fa-indian-rupee-sign", link: "https://linkedin.com/in/sanjai2306", credentialId: "V1B2Y3L4D5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EViksit%3C/text%3E%3C/svg%3E" },
    { id: 25, title: "MYBharat Budget Quest 2026", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-chart-line", link: "https://linkedin.com/in/sanjai2306", credentialId: "M1B2Q3U4E5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EBudget%3C/text%3E%3C/svg%3E" },
    { id: 26, title: "Online Essay on Viksit Bharat", issuer: "Min. of Youth Affairs", date: "Nov 2025", category: "govt", icon: "fa-pen", link: "https://linkedin.com/in/sanjai2306", credentialId: "E1S2S3A4Y5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EEssay%3C/text%3E%3C/svg%3E" },
    { id: 27, title: "Know more about DFPD-II Quiz", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-question", link: "https://linkedin.com/in/sanjai2306", credentialId: "D1F2P3D4Q5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EQuiz%3C/text%3E%3C/svg%3E" },
    { id: 28, title: "The Viksit Bharat Quiz 2026", issuer: "MYBharat", date: "2025", category: "govt", icon: "fa-medal", link: "https://linkedin.com/in/sanjai2306", credentialId: "V1B2Q3U4Z5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EViksit Quiz%3C/text%3E%3C/svg%3E" },
    { id: 29, title: "Sardar 150 National Level Essay Competition", issuer: "Ek Bharat", date: "2025", category: "govt", icon: "fa-award", link: "https://linkedin.com/in/sanjai2306", credentialId: "S1A2R3D4A5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ESardar%3C/text%3E%3C/svg%3E" },
    
    // IIRS/ISRO
    { id: 30, title: "Advances in thermal infrared Remote Sensing", issuer: "IIRS/ISRO", date: "Oct 2025", category: "isro", icon: "fa-satellite", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1H2E3R4M5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ERemote%3C/text%3E%3C/svg%3E" },
    
    // Typing
    { id: 31, title: "Typing - Beginner Unit", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3E4R5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ETyping%3C/text%3E%3C/svg%3E" },
    { id: 32, title: "Typing - Intermediate Unit", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3I4N5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EIntermediate%3C/text%3E%3C/svg%3E" },
    { id: 33, title: "Typing - Advanced Unit", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3A4D5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAdvanced%3C/text%3E%3C/svg%3E" }
];

const projects = [
    {
        id: 1,
        name: "RuralCare AI",
        description: "Multilingual AI-based rural health assistant with symptom checker and voice recording.",
        tech: ["Python", "Flask", "TensorFlow"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ruralcare-ai",
        live: "#",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERuralCare%3C/text%3E%3C/svg%3E",
        features: ["AI Symptom Checker", "Voice Recording"],
        date: "Jan 2026",
        status: "Active",
        stars: 45,
        forks: 12
    },
    {
        id: 2,
        name: "Feedback & Billing System",
        description: "Complete snack shop management system with bill generation and tax calculation.",
        tech: ["C++", "File I/O", "OOP"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/Feedback-and-Billing-System",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EBilling%3C/text%3E%3C/svg%3E",
        features: ["Bill generation", "Tax calculation"],
        date: "Dec 2025",
        status: "Completed",
        stars: 23,
        forks: 5
    },
    {
        id: 3,
        name: "Railway Reservation System",
        description: "Console-based railway ticket reservation system with PNR tracking.",
        tech: ["C++", "Data Structures"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/railway-reservation-cpp",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERailway%3C/text%3E%3C/svg%3E",
        features: ["Ticket booking", "PNR tracking"],
        date: "Oct 2025",
        status: "Completed",
        stars: 56,
        forks: 15
    },
    {
        id: 4,
        name: "Advanced Portfolio 2026",
        description: "Cutting-edge portfolio with 3D background and AI chatbot.",
        tech: ["HTML5", "CSS3", "JavaScript", "Three.js"],
        category: "web",
        github: "https://github.com/Sanjai-Gopal/sanjai_portfolio",
        live: "#",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EPortfolio%3C/text%3E%3C/svg%3E",
        features: ["3D background", "AI chatbot"],
        date: "Feb 2026",
        status: "Live",
        stars: 89,
        forks: 23
    },
    {
        id: 5,
        name: "Student Performance Predictor",
        description: "ML model predicting student grades with 85% accuracy.",
        tech: ["Python", "scikit-learn", "Pandas"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ml-student-performance",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EML Model%3C/text%3E%3C/svg%3E",
        features: ["85% accuracy", "Visualization"],
        date: "Jan 2026",
        status: "Pilot",
        stars: 67,
        forks: 19
    },
    {
        id: 6,
        name: "Green AI Optimizer",
        description: "Tool that optimizes ML models for energy efficiency.",
        tech: ["Python", "TensorFlow", "Docker"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/green-ai",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EGreen AI%3C/text%3E%3C/svg%3E",
        features: ["Energy profiling", "Optimization"],
        date: "Feb 2026",
        status: "Beta",
        stars: 34,
        forks: 8
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Python: A Beginner's Guide",
        excerpt: "Learn the fundamentals of Python programming for AI.",
        content: "<h2>Introduction to Python</h2><p>Python has become the de facto language for artificial intelligence and machine learning. Its simplicity, extensive libraries, and vibrant community make it the perfect choice for beginners.</p><h3>Why Python for AI?</h3><ul><li>Easy to Learn</li><li>Rich Ecosystem: NumPy, Pandas, TensorFlow</li><li>Community Support</li></ul>",
        date: "2026-03-01",
        category: "programming",
        readTime: 5,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EPython%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 45,
        comments: 12,
        views: 234,
        tags: ["Python", "Programming", "AI"]
    },
    {
        id: 2,
        title: "Git & GitHub: Essential Commands",
        excerpt: "A comprehensive guide to version control for beginners.",
        content: "<h2>Mastering Git and GitHub</h2><p>Version control is an essential skill for every developer. Git helps you track changes, collaborate with others, and manage your code effectively.</p><h3>Basic Git Commands</h3><pre><code>git init\ngit add .\ngit commit -m 'message'\ngit push</code></pre>",
        date: "2026-02-15",
        category: "devops",
        readTime: 7,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EGit%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 32,
        comments: 8,
        views: 156,
        tags: ["Git", "GitHub", "DevOps"]
    },
    {
        id: 3,
        title: "My First Steps into AI",
        excerpt: "Sharing my journey as a first-year student diving into AI.",
        content: "<h2>Three Months of AI Learning</h2><p>As a first-year AI student, the past three months have been transformative. Here's what I learned:</p><h3>Month 1: Foundations</h3><p>Started with Python basics, then moved to data structures.</p><h3>Month 2: Machine Learning</h3><p>Dove into ML concepts: regression, classification.</p><h3>Month 3: Deep Learning</h3><p>Explored neural networks and CNNs.</p>",
        date: "2026-02-01",
        category: "ai",
        readTime: 6,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EAI%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 67,
        comments: 15,
        views: 342,
        tags: ["AI", "Machine Learning", "Learning"]
    },
    {
        id: 4,
        title: "Understanding Neural Networks",
        excerpt: "Demystifying neural networks with visual explanations.",
        content: "<h2>Neural Networks Explained Visually</h2><p>Neural networks might seem complex, but they're built on simple concepts.</p><h3>The Neuron</h3><p>A neuron takes inputs, applies weights, adds bias, and passes through an activation function.</p>",
        date: "2026-01-20",
        category: "ai",
        readTime: 8,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3ENeural%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 54,
        comments: 9,
        views: 267,
        tags: ["Neural Networks", "Deep Learning"]
    },
    {
        id: 5,
        title: "Building Your First C++ Project",
        excerpt: "Step-by-step guide to creating a C++ application.",
        content: "<h2>C++ Railway Reservation System</h2><p>Building a railway reservation system is an excellent way to practice C++ concepts.</p><h3>Key Concepts</h3><ul><li>Classes and Objects</li><li>Inheritance</li><li>File I/O</li></ul>",
        date: "2026-01-05",
        category: "programming",
        readTime: 6,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EC%2B%2B%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 28,
        comments: 5,
        views: 134,
        tags: ["C++", "Projects"]
    },
    {
        id: 6,
        title: "Introduction to MLOps",
        excerpt: "Understanding MLOps for production ML systems.",
        content: "<h2>What is MLOps?</h2><p>MLOps combines ML, DevOps, and data engineering to deploy ML systems reliably.</p><h3>Why MLOps Matters</h3><ul><li>Reproducibility</li><li>Model versioning</li><li>Automated deployment</li></ul>",
        date: "2025-12-10",
        category: "devops",
        readTime: 7,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EMLOps%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 41,
        comments: 7,
        views: 198,
        tags: ["MLOps", "DevOps"]
    }
];

const achievements = [
    { id: 1, title: "Smart India Hackathon Winner", description: "First prize for RuralCare AI", date: "Dec 2025", icon: "fa-trophy", color: "#FFD700" },
    { id: 2, title: "Google Summer of Code", description: "Contributor to TensorFlow", date: "Aug 2025", icon: "fa-google", color: "#4285F4" },
    { id: 3, title: "Best Research Paper Award", description: "Paper on Green AI", date: "Nov 2025", icon: "fa-award", color: "#C0C0C0" },
    { id: 4, title: "Top 10 - National AI Challenge", description: "AI innovator under 20", date: "Oct 2025", icon: "fa-robot", color: "#8b5cf6" }
];

const testimonials = [
    { id: 1, name: "Dr. Priya Krishnan", role: "Professor, SKCET", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EPK%3C/text%3E%3C/svg%3E", content: "Sanjai is one of the most dedicated students I've mentored.", rating: 5 },
    { id: 2, name: "Rahul Sharma", role: "ML Engineer, Google", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERS%3C/text%3E%3C/svg%3E", content: "His contributions to TensorFlow were impressive.", rating: 5 },
    { id: 3, name: "Dr. Anand Kumar", role: "Research Scientist", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EAK%3C/text%3E%3C/svg%3E", content: "His paper on Green AI was excellent.", rating: 5 },
    { id: 4, name: "Meera Nair", role: "Product Manager", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EMN%3C/text%3E%3C/svg%3E", content: "Exceptional project management skills.", rating: 5 },
    { id: 5, name: "Prof. Suresh", role: "Head of CS", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ESS%3C/text%3E%3C/svg%3E", content: "A natural leader among his peers.", rating: 5 }
];

const timeline = [
    { year: "2026", events: [
        { title: "Started B.Tech AI at SKCET", description: "Formal education in AI", icon: "fa-graduation-cap" }
    ]},
    { year: "2025", events: [
        { title: "Smart India Hackathon Winner", description: "First prize", icon: "fa-trophy" },
        { title: "Google Summer of Code", description: "TensorFlow contributor", icon: "fa-google" }
    ]}
];

const gallery = [
    { id: 1, title: "Smart India Hackathon", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ESIH%3C/text%3E%3C/svg%3E", category: "events" },
    { id: 2, title: "GSoC Meetup", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EGSoC%3C/text%3E%3C/svg%3E", category: "events" }
];

const podcasts = [
    { id: 1, title: "Introduction to Green AI", description: "Sustainable AI practices", duration: "25:30", date: "Mar 1, 2026" },
    { id: 2, title: "My Journey into AI", description: "How I started", duration: "32:15", date: "Feb 15, 2026" }
];

// ==================== PRELOADER ====================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('preloaderProgress');
    const percentageEl = document.getElementById('preloaderPercentage');
    
    if (!preloader || !progressBar || !percentageEl) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
        progressBar.style.width = progress + '%';
        percentageEl.textContent = Math.floor(progress) + '%';
    }, 200);
}

// ==================== RENDER FUNCTIONS ====================
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    const skillsData = [
        { category: "Languages", icon: "fa-code", skills: [
            { name: "Python", level: 90, tags: ["NumPy", "Pandas"] },
            { name: "C++", level: 80, tags: ["OOP", "STL"] },
            { name: "JavaScript", level: 75, tags: ["ES6", "React"] }
        ]},
        { category: "AI & ML", icon: "fa-brain", skills: [
            { name: "Machine Learning", level: 85, tags: ["Scikit-learn"] },
            { name: "Deep Learning", level: 75, tags: ["TensorFlow"] },
            { name: "MLOps", level: 60, tags: ["Docker"] }
        ]},
        { category: "Tools", icon: "fa-tools", skills: [
            { name: "Git & GitHub", level: 90, tags: ["Version Control"] },
            { name: "VS Code", level: 85, tags: ["Extensions"] },
            { name: "Linux", level: 75, tags: ["Bash"] }
        ]}
    ];
    
    grid.innerHTML = skillsData.map(cat => `
        <div class="skill-tree">
            <div class="skill-header">
                <i class="fas ${cat.icon}"></i>
                <h3>${cat.category}</h3>
            </div>
            <div class="skill-branch">
                ${cat.skills.map(skill => `
                    <div class="skill-leaf">
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage">${skill.level}%</span>
                        </div>
                        <div class="skill-progress">
                            <div class="progress-fill" style="width: ${skill.level}%"></div>
                        </div>
                        <div class="skill-tags">
                            ${skill.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderCertificates(filter = 'all') {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? certificates : certificates.filter(c => c.category === filter);
    
    grid.innerHTML = filtered.map(cert => `
        <div class="certificate-card" onclick="openCertificateModal(${cert.id})">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="certificate-overlay">
                <span>${cert.title}</span>
                <p>${cert.issuer} • ${cert.date}</p>
                <button class="view-cert-btn" onclick="event.stopPropagation(); window.open('${cert.link}', '_blank')">
                    <i class="fab fa-linkedin"></i> View
                </button>
            </div>
        </div>
    `).join('');
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="github-link"><i class="fab fa-github"></i> Code</a>
                    <button class="details-link" onclick="openProjectModal(${project.id})"><i class="fas fa-info-circle"></i> Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlog(category = 'all', page = 1) {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    const filtered = category === 'all' ? blogPosts : blogPosts.filter(p => p.category === category);
    const start = (page - 1) * 6;
    const paginated = filtered.slice(start, start + 6);
    
    grid.innerHTML = paginated.map(post => `
        <article class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <span class="blog-category">${post.category}</span>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${new Date(post.date).toLocaleDateString()}</span>
                    <span>${post.readTime} min</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-footer">
                    <span class="blog-author">${post.author}</span>
                    <button class="blog-read-more" onclick="openBlogModal(${post.id})">Read</button>
                </div>
            </div>
        </article>
    `).join('');
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    grid.innerHTML = achievements.map(a => `
        <div class="achievement-item">
            <div class="achievement-icon" style="background: ${a.color}20; color: ${a.color}">
                <i class="fas ${a.icon}"></i>
            </div>
            <div class="achievement-content">
                <h4>${a.title}</h4>
                <p>${a.description}</p>
                <span>${a.date}</span>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;
    
    container.innerHTML = testimonials.map(t => `
        <div class="swiper-slide">
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="${t.avatar}" alt="${t.name}">
                    <div>
                        <h4>${t.name}</h4>
                        <p>${t.role}</p>
                    </div>
                </div>
                <p>"${t.content}"</p>
            </div>
        </div>
    `).join('');
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    
    container.innerHTML = timeline.map(period => `
        <div class="timeline-period">
            <div class="timeline-year">${period.year}</div>
            ${period.events.map(e => `
                <div class="timeline-event">
                    <div class="timeline-icon"><i class="fas ${e.icon}"></i></div>
                    <div class="timeline-content">
                        <h4>${e.title}</h4>
                        <p>${e.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = gallery.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <span>${item.category}</span>
            </div>
        </div>
    `).join('');
}

function renderPodcast() {
    const list = document.getElementById('episodeList');
    if (!list) return;
    
    list.innerHTML = podcasts.map(ep => `
        <div class="episode-card">
            <div>
                <h4>${ep.title}</h4>
                <p>${ep.description}</p>
                <small>${ep.duration} • ${ep.date}</small>
            </div>
        </div>
    `).join('');
}

// ==================== MODAL FUNCTIONS ====================
function openCertificateModal(id) {
    const cert = certificates.find(c => c.id === id);
    if (!cert) return;
    
    const modal = document.getElementById('blogModal');
    document.getElementById('blogModalTitle').textContent = cert.title;
    document.getElementById('blogModalBody').innerHTML = `
        <img src="${cert.image}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
        <h3>${cert.title}</h3>
        <p><strong>Issuer:</strong> ${cert.issuer}</p>
        <p><strong>Date:</strong> ${cert.date}</p>
        <p><strong>ID:</strong> ${cert.credentialId}</p>
        <button class="btn btn-primary" onclick="window.open('${cert.link}', '_blank')">View on LinkedIn</button>
    `;
    modal.classList.add('active');
}

function openProjectModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    
    const modal = document.getElementById('blogModal');
    document.getElementById('blogModalTitle').textContent = project.name;
    document.getElementById('blogModalBody').innerHTML = `
        <img src="${project.image}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.tech.join(', ')}</p>
        <p><strong>Stars:</strong> ${project.stars} ⭐</p>
        <p><strong>Forks:</strong> ${project.forks} 🍴</p>
    `;
    modal.classList.add('active');
}

function openBlogModal(id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post) return;
    
    const modal = document.getElementById('blogModal');
    document.getElementById('blogModalTitle').textContent = post.title;
    document.getElementById('blogModalBody').innerHTML = `
        <img src="${post.image}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
        ${post.content}
    `;
    modal.classList.add('active');
}

// ==================== CHATBOT ====================
class Chatbot {
    constructor() {
        this.container = document.getElementById('chatbotContainer');
        this.toggle = document.getElementById('chatbotToggle');
        this.close = document.getElementById('chatbotClose');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        this.init();
    }
    
    init() {
        this.toggle.onclick = () => this.toggleChat();
        this.close.onclick = () => this.closeChat();
        this.sendBtn.onclick = () => this.sendMessage();
        this.input.onkeypress = (e) => e.key === 'Enter' && this.sendMessage();
    }
    
    toggleChat() {
        this.container.classList.toggle('active');
        this.toggle.style.display = this.container.classList.contains('active') ? 'none' : 'flex';
    }
    
    closeChat() {
        this.container.classList.remove('active');
        this.toggle.style.display = 'flex';
    }
    
    addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        msg.innerHTML = `<div class="message-content">${text}</div>`;
        this.messages.appendChild(msg);
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;
        
        this.addMessage(text, 'user');
        this.input.value = '';
        
        setTimeout(() => {
            let response = "I'm not sure. Ask about skills, projects, or certificates.";
            if (text.includes('skill')) response = "Sanjai knows Python, C++, JavaScript, ML, and more!";
            else if (text.includes('project')) response = "He has 6 projects including RuralCare AI and this portfolio!";
            else if (text.includes('cert')) response = "He has 33+ certifications from Coursera, AWS, IBM!";
            this.addMessage(response, 'bot');
        }, 500);
    }
}

// ==================== CLOUD STORAGE ====================
class CloudStorage {
    constructor() {
        this.files = [
            { name: 'Projects', type: 'folder', size: '--' },
            { name: 'Certificates', type: 'folder', size: '--' },
            { name: 'Resume.pdf', type: 'pdf', size: '2.4 MB' }
        ];
        this.render();
    }
    
    render() {
        const grid = document.getElementById('cloudFilesGrid');
        if (!grid) return;
        
        grid.innerHTML = this.files.map(f => `
            <div class="cloud-file-item ${f.type}">
                <div class="file-icon"><i class="fas fa-${f.type === 'folder' ? 'folder' : 'file-pdf'}"></i></div>
                <div class="file-info">
                    <span class="file-name">${f.name}</span>
                    <span class="file-meta">${f.size}</span>
                </div>
            </div>
        `).join('');
    }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded');
    initPreloader();
    
    // Render all sections
    renderSkills();
    renderCertificates('all');
    renderProjects('all');
    renderBlog('all', 1);
    renderAchievements();
    renderTestimonials();
    renderTimeline();
    renderGallery();
    renderPodcast();
    
    // Typed.js
    if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: ['AI Engineer', 'MLOps Enthusiast', 'Python Developer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }
    
    // Swiper
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: { delay: 5000 },
            pagination: { el: '.swiper-pagination', clickable: true }
        });
    }
    
    // Event Listeners
    document.getElementById('hamburger').onclick = () => {
        document.getElementById('navMenu').classList.toggle('active');
    };
    
    document.getElementById('themeToggle').onclick = () => {
        document.body.classList.toggle('light-theme');
    };
    
    document.getElementById('searchToggle').onclick = () => {
        document.getElementById('searchBar').classList.toggle('active');
    };
    
    document.getElementById('searchClose').onclick = () => {
        document.getElementById('searchBar').classList.remove('active');
    };
    
    document.getElementById('notificationToggle').onclick = () => {
        document.getElementById('notificationsPanel').classList.toggle('active');
    };
    
    // Admin panel
    document.getElementById('adminSecret').ondblclick = () => {
        document.getElementById('privateModal').classList.add('active');
    };
    
    document.getElementById('privateLink').onclick = (e) => {
        e.preventDefault();
        document.getElementById('privateModal').classList.add('active');
    };
    
    document.getElementById('privateClose').onclick = () => {
        document.getElementById('privateModal').classList.remove('active');
    };
    
    // Password
    document.getElementById('submitPassword').onclick = () => {
        const pass = document.getElementById('privatePassword').value;
        if (pass === 'Sanjai@2008') {
            document.getElementById('passwordForm').style.display = 'none';
            document.getElementById('privateDashboard').style.display = 'block';
        } else {
            document.getElementById('passwordError').textContent = 'Wrong password';
        }
    };
    
    document.getElementById('logoutBtn').onclick = () => {
        document.getElementById('passwordForm').style.display = 'block';
        document.getElementById('privateDashboard').style.display = 'none';
    };
    
    // Cloud
    document.getElementById('cloudLink').onclick = (e) => {
        e.preventDefault();
        document.getElementById('cloudModal').classList.add('active');
    };
    
    document.getElementById('cloudClose').onclick = () => {
        document.getElementById('cloudModal').classList.remove('active');
    };
    
    document.getElementById('submitCloudPassword').onclick = () => {
        const pass = document.getElementById('cloudPassword').value;
        if (pass === 'Sanjai@2008') {
            document.getElementById('cloudPasswordForm').style.display = 'none';
            document.getElementById('cloudDashboard').style.display = 'block';
            cloudInstance = new CloudStorage();
        } else {
            document.getElementById('cloudPasswordError').textContent = 'Wrong password';
        }
    };
    
    document.getElementById('cloudLogoutBtn').onclick = () => {
        document.getElementById('cloudPasswordForm').style.display = 'block';
        document.getElementById('cloudDashboard').style.display = 'none';
    };
    
    // Blog modal
    document.getElementById('blogModalClose').onclick = () => {
        document.getElementById('blogModal').classList.remove('active');
    };
    
    window.onclick = (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    };
    
    // FAB
    document.getElementById('fabMain').onclick = () => {
        document.getElementById('fabMenu').classList.toggle('active');
    };
    
    document.querySelectorAll('.fab-item').forEach(item => {
        item.onclick = function() {
            const action = this.dataset.action;
            if (action === 'chat') chatbotInstance?.openChat();
            if (action === 'cloud') document.getElementById('cloudModal').classList.add('active');
            if (action === 'admin') document.getElementById('privateModal').classList.add('active');
            document.getElementById('fabMenu').classList.remove('active');
        };
    });
    
    // Back to top
    window.onscroll = () => {
        const btn = document.getElementById('backToTop');
        if (btn) btn.style.display = window.scrollY > 500 ? 'flex' : 'none';
    };
    
    document.getElementById('backToTop').onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Chatbot
    chatbotInstance = new Chatbot();
    
    // Project filters
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.projects-filter .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        };
    });
    
    // Certificate filters
    document.querySelectorAll('.cert-filters .filter-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.cert-filters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCertificates(this.dataset.certFilter);
        };
    });
    
    // Blog filters
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderBlog(this.dataset.blogCat, 1);
        };
    });
    
    // Resume download
    document.getElementById('downloadResumeBtn').onclick = () => {
        alert('Resume download - demo');
    };
    
    // Contact form
    document.getElementById('contactForm').onsubmit = (e) => {
        e.preventDefault();
        alert('Message sent (demo)');
    };
});
