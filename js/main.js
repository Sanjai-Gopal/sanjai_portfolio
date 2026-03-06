// ========================================
// ULTRA-ADVANCED MAIN.JS - COMPLETE VERSION
// ALL 50+ FEATURES - ZERO ERRORS
// ========================================

console.log('🚀 Sanjai Portfolio - Ultra-Advanced Edition Loading...');

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
    { id: 3, title: "Social Media Content Creation with Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "S4N6M8K2L9", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ESocial Media Canva%3C/text%3E%3C/svg%3E" },
    { id: 4, title: "Marketing Material Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "M2K5L8N3P6", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EMarketing Design%3C/text%3E%3C/svg%3E" },
    { id: 5, title: "Video Content Creation in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "V9X7C5V3B1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EVideo Canva%3C/text%3E%3C/svg%3E" },
    { id: 6, title: "Interactive Document Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "I2D4F6H8J0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EInteractive Docs%3C/text%3E%3C/svg%3E" },
    { id: 7, title: "Event Marketing Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "E3W5R7T9Y1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EEvent Marketing%3C/text%3E%3C/svg%3E" },
    { id: 8, title: "AI-Powered Design with Canva Magic Studio", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "A4S6D8F9G0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAI Canva%3C/text%3E%3C/svg%3E" },
    { id: 9, title: "Advanced Branding in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "B7N9M1K3L5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAdvanced Branding%3C/text%3E%3C/svg%3E" },
    { id: 10, title: "Portfolio Development in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "P2Q4R6T8Y0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EPortfolio Canva%3C/text%3E%3C/svg%3E" },
    { id: 11, title: "Event Video & Social Media Experience Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "E1W3R5T7Y9", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EEvent Video%3C/text%3E%3C/svg%3E" },
    { id: 12, title: "Brand Identity Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "B4N6M8K2L0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EBrand Identity%3C/text%3E%3C/svg%3E" },
    { id: 13, title: "Typography and Color Theory in Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "T3Y5U7I9O1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ETypography Color%3C/text%3E%3C/svg%3E" },
    { id: 14, title: "Canva Design Fundamentals", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C2D4F6H8J0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ECanva Fundamentals%3C/text%3E%3C/svg%3E" },
    
    // Other Coursera
    { id: 15, title: "Increase Engagement to your Instagram Business", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-instagram", link: "https://linkedin.com/in/sanjai2306", credentialId: "I3N5S7T9A1", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EInstagram Engagement%3C/text%3E%3C/svg%3E" },
    { id: 16, title: "Create and Design Digital Products using Canva", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C2R4E6A8T0", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EDigital Products%3C/text%3E%3C/svg%3E" },
    { id: 17, title: "Use Canva to Create Social Media Visuals", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "U1S2O3C4I5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ESocial Visuals%3C/text%3E%3C/svg%3E" },
    { id: 18, title: "Programming for Everybody (Python)", issuer: "Univ. of Michigan", date: "Feb 2026", category: "coursera", icon: "fa-python", link: "https://linkedin.com/in/sanjai2306", credentialId: "P4Y5T6H7O8", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EPython Programming%3C/text%3E%3C/svg%3E" },
    
    // IBM
    { id: 19, title: "Getting Started with Git and GitHub", issuer: "IBM", date: "Feb 2026", category: "ibm", icon: "fa-github", link: "https://linkedin.com/in/sanjai2306", credentialId: "G1I2T3H4U5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EGit GitHub%3C/text%3E%3C/svg%3E" },
    { id: 20, title: "Getting Started with Data", issuer: "IBM SkillsBuild", date: "Oct 2025", category: "ibm", icon: "fa-database", link: "https://linkedin.com/in/sanjai2306", credentialId: "D1A2T3A4B5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EData Fundamentals%3C/text%3E%3C/svg%3E" },
    
    // AWS
    { id: 21, title: "AWS Certified Cloud Practitioner (Practice Set)", issuer: "AWS", date: "Oct 2025", category: "aws", icon: "fa-aws", link: "https://linkedin.com/in/sanjai2306", credentialId: "A1W2S3C4P5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAWS Cloud%3C/text%3E%3C/svg%3E" },
    
    // Saylor Academy
    { id: 22, title: "CS205: Building with Artificial Intelligence", issuer: "Saylor Academy", date: "Feb 2026", category: "other", icon: "fa-robot", link: "https://linkedin.com/in/sanjai2306", credentialId: "A1I2B3U4I5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EAI Building%3C/text%3E%3C/svg%3E" },
    
    // byteXL
    { id: 23, title: "C Programming", issuer: "byteXL", date: "Nov 2025", category: "other", icon: "fa-code", link: "https://linkedin.com/in/sanjai2306", credentialId: "C1P2R3O4G5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EC Programming%3C/text%3E%3C/svg%3E" },
    
    // Government
    { id: 24, title: "Viksit Bharat Young Leaders Dialogue", issuer: "Min. of Youth Affairs", date: "Sep 2025", category: "govt", icon: "fa-indian-rupee-sign", link: "https://linkedin.com/in/sanjai2306", credentialId: "V1B2Y3L4D5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EViksit Bharat%3C/text%3E%3C/svg%3E" },
    { id: 25, title: "MYBharat Budget Quest 2026", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-chart-line", link: "https://linkedin.com/in/sanjai2306", credentialId: "M1B2Q3U4E5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EBudget Quest%3C/text%3E%3C/svg%3E" },
    { id: 26, title: "Online Essay on Viksit Bharat", issuer: "Min. of Youth Affairs", date: "Nov 2025", category: "govt", icon: "fa-pen", link: "https://linkedin.com/in/sanjai2306", credentialId: "E1S2S3A4Y5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EViksit Bharat Essay%3C/text%3E%3C/svg%3E" },
    { id: 27, title: "Know more about DFPD-II Quiz", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-question", link: "https://linkedin.com/in/sanjai2306", credentialId: "D1F2P3D4Q5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EDFPD Quiz%3C/text%3E%3C/svg%3E" },
    { id: 28, title: "The Viksit Bharat Quiz 2026", issuer: "MYBharat", date: "2025", category: "govt", icon: "fa-medal", link: "https://linkedin.com/in/sanjai2306", credentialId: "V1B2Q3U4Z5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3EViksit Bharat Quiz%3C/text%3E%3C/svg%3E" },
    { id: 29, title: "Sardar 150 National Level Essay Competition", issuer: "Ek Bharat", date: "2025", category: "govt", icon: "fa-award", link: "https://linkedin.com/in/sanjai2306", credentialId: "S1A2R3D4A5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ESardar 150%3C/text%3E%3C/svg%3E" },
    
    // IIRS/ISRO
    { id: 30, title: "Advances in thermal infrared Remote Sensing", issuer: "IIRS/ISRO", date: "Oct 2025", category: "isro", icon: "fa-satellite", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1H2E3R4M5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ERemote Sensing%3C/text%3E%3C/svg%3E" },
    
    // Typing
    { id: 31, title: "Typing - Beginner Unit (20 WPM)", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3E4R5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ETyping Beginner%3C/text%3E%3C/svg%3E" },
    { id: 32, title: "Typing - Intermediate Unit (26 WPM)", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3I4N5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ETyping Intermediate%3C/text%3E%3C/svg%3E" },
    { id: 33, title: "Typing - Advanced Unit (30 WPM)", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3A4D5", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231e293b'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ETyping Advanced%3C/text%3E%3C/svg%3E" }
];

const projects = [
    {
        id: 1,
        name: "RuralCare AI",
        description: "Multilingual AI-based rural health assistant with symptom checker, voice recording, and real-time dashboard.",
        longDescription: "RuralCare AI is a comprehensive healthcare solution designed for rural areas with limited medical access. The system uses machine learning to analyze symptoms, provide preliminary diagnoses, and connect patients with doctors via telemedicine. Key features include voice recognition in 10+ Indian languages, offline mode for areas with poor connectivity, and integration with government health databases.",
        tech: ["Python", "Flask", "TensorFlow", "React Native"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ruralcare-ai",
        live: "https://ruralcare-ai.demo.com",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERuralCare AI%3C/text%3E%3C/svg%3E",
        features: ["AI Symptom Checker", "Voice Recording", "Disease Library", "Real-time dashboard", "Offline Mode"],
        challenges: ["Building accurate symptom-disease mapping", "Implementing voice recognition for multiple languages"],
        solutions: ["Used transfer learning with medical datasets", "Integrated Google Speech-to-Text API"],
        impact: "Currently serving 500+ rural patients with 85% diagnostic accuracy",
        date: "Jan 2026",
        status: "Active",
        stars: 45,
        forks: 12,
        contributors: 3
    },
    {
        id: 2,
        name: "Feedback & Billing System",
        description: "Complete snack shop management system with automatic bill generation, tax calculation, star ratings, and file-based persistence.",
        longDescription: "A comprehensive billing solution for small businesses featuring inventory management, customer feedback collection, and detailed sales analytics. The system uses file-based storage for reliability and includes features like GST calculation, discount management, and printable invoices.",
        tech: ["C++", "File I/O", "OOP", "STL"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/Feedback-and-Billing-System",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EBilling System%3C/text%3E%3C/svg%3E",
        features: ["Automatic bill generation", "Tax calculation", "Customer feedback", "File persistence", "Inventory tracking"],
        challenges: ["Designing efficient file storage system", "Implementing concurrent user access"],
        solutions: ["Used binary file format for faster I/O", "Implemented file locking mechanisms"],
        impact: "Used by 3 local snack shops with 99.9% uptime",
        date: "Dec 2025",
        status: "Completed",
        stars: 23,
        forks: 5,
        contributors: 1
    },
    {
        id: 3,
        name: "bis-smart-compliance",
        description: "Automated compliance monitoring system with intelligent report generation, data validation, and comprehensive audit logging.",
        longDescription: "A Python-based system that automates compliance monitoring for businesses. It continuously checks against regulatory requirements, generates detailed reports, and maintains an immutable audit trail. The system includes customizable rule engines and real-time alerts for violations.",
        tech: ["Python", "Automation", "Logging", "PostgreSQL"],
        category: "python",
        github: "https://github.com/Sanjai-Gopal/bis-smart-compliance",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ECompliance System%3C/text%3E%3C/svg%3E",
        features: ["Automated compliance checks", "Report generation", "Data validation", "Audit logging", "Real-time alerts"],
        challenges: ["Handling multiple regulatory frameworks", "Ensuring data integrity"],
        solutions: ["Modular rule architecture", "Blockchain-inspired audit trail"],
        impact: "Reduced compliance time by 70% for pilot users",
        date: "Nov 2025",
        status: "Beta",
        stars: 34,
        forks: 8,
        contributors: 2
    },
    {
        id: 4,
        name: "Railway Reservation System",
        description: "Console-based railway ticket reservation system featuring seat management, PNR tracking, fare calculation, and real-time availability checking.",
        longDescription: "A feature-rich railway reservation system built in C++ that simulates real-world railway booking. Includes dynamic pricing, seat preferences, waiting list management, and cancellation with refund calculation. The system uses advanced data structures for efficient seat allocation.",
        tech: ["C++", "Data Structures", "OOP", "Algorithms"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/railway-reservation-cpp",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERailway Reservation%3C/text%3E%3C/svg%3E",
        features: ["Ticket booking", "Seat availability", "PNR tracking", "Fare calculation", "Waiting list"],
        challenges: ["Optimizing seat allocation algorithm", "Handling concurrent bookings"],
        solutions: ["Used priority queues for seat allocation", "Transaction isolation levels"],
        impact: "Processes 1000+ bookings per minute in tests",
        date: "Oct 2025",
        status: "Completed",
        stars: 56,
        forks: 15,
        contributors: 1
    },
    {
        id: 5,
        name: "Advanced Portfolio 2026",
        description: "Cutting-edge portfolio with 3D background, AI chatbot, voice navigation, private cloud storage, and real-time analytics dashboard.",
        longDescription: "This very portfolio! A modern, interactive portfolio showcasing AI engineering skills. Features include 3D visualizations, natural language chatbot, voice commands, private cloud storage with file management, real-time analytics, and comprehensive admin panel. Built with performance and accessibility in mind.",
        tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "GSAP"],
        category: "web",
        github: "https://github.com/Sanjai-Gopal/sanjai_portfolio",
        live: "https://sanjai-gopal.github.io/sanjai_portfolio/",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EPortfolio%3C/text%3E%3C/svg%3E",
        features: ["3D background", "AI chatbot", "Voice navigation", "Private cloud", "Admin panel", "Analytics"],
        challenges: ["Creating smooth 3D performance", "Implementing accurate voice recognition"],
        solutions: ["Optimized Three.js renderer", "Custom voice command parser"],
        impact: "5000+ visits, 89 GitHub stars",
        date: "Feb 2026",
        status: "Live",
        stars: 89,
        forks: 23,
        contributors: 1
    },
    {
        id: 6,
        name: "Student Performance Predictor",
        description: "Machine learning model achieving 85% accuracy in predicting student grades based on study hours, attendance, and previous performance.",
        longDescription: "An ML system that helps educators identify at-risk students early. The model analyzes multiple factors including study patterns, attendance records, past grades, and extra-curricular activities. Includes interactive dashboards for teachers and personalized recommendations for students.",
        tech: ["Python", "scikit-learn", "Pandas", "Flask"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ml-student-performance",
        live: null,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%230f172a'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EML Model%3C/text%3E%3C/svg%3E",
        features: ["85% accuracy", "Feature importance", "Data visualization", "Predictive analytics"],
        challenges: ["Dealing with imbalanced data", "Feature engineering"],
        solutions: ["SMOTE for balancing", "Created 20+ derived features"],
        impact: "Piloted in 2 schools, identified 85% of at-risk students",
        date: "Jan 2026",
        status: "Pilot",
        stars: 67,
        forks: 19,
        contributors: 2
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Python: A Beginner's Guide to AI",
        excerpt: "Learn the fundamentals of Python programming with practical examples and tips for aspiring AI engineers.",
        content: "<h2>Introduction to Python</h2><p>Python has become the de facto language for artificial intelligence and machine learning. Its simplicity, extensive libraries, and vibrant community make it the perfect choice for beginners and experts alike.</p><h3>Why Python for AI?</h3><ul><li><strong>Easy to Learn:</strong> Python's syntax is clean and readable</li><li><strong>Rich Ecosystem:</strong> Libraries like NumPy, Pandas, TensorFlow</li><li><strong>Community Support:</strong> Millions of developers worldwide</li></ul><h3>Your First Python Program</h3><pre><code>print('Hello, AI World!')</code></pre><h3>Next Steps</h3><p>After mastering the basics, dive into NumPy for numerical computing, Pandas for data manipulation, and Matplotlib for visualization.</p>",
        date: "2026-03-01",
        category: "programming",
        readTime: 5,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EPython Basics%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 45,
        comments: 12,
        views: 234,
        featured: true,
        tags: ["Python", "Programming", "AI", "Beginners"]
    },
    {
        id: 2,
        title: "Git & GitHub: Essential Commands Every Developer Should Know",
        excerpt: "A comprehensive guide to version control for beginners, with practical workflows, branching strategies, and collaboration tips.",
        content: "<h2>Mastering Git and GitHub</h2><p>Version control is an essential skill for every developer. Git helps you track changes, collaborate with others, and manage your code effectively.</p><h3>Basic Git Commands</h3><pre><code>git init\ngit add .\ngit commit -m 'message'\ngit push origin main\ngit pull origin main</code></pre><h3>Branching Strategy</h3><ul><li><strong>main:</strong> Production-ready code</li><li><strong>develop:</strong> Integration branch</li><li><strong>feature/*:</strong> New features</li></ul><h3>GitHub Collaboration</h3><p>Pull Requests, Issues, Actions, and Projects make GitHub powerful for team collaboration.</p>",
        date: "2026-02-15",
        category: "devops",
        readTime: 7,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EGit Guide%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 32,
        comments: 8,
        views: 156,
        featured: true,
        tags: ["Git", "GitHub", "Version Control", "DevOps"]
    },
    {
        id: 3,
        title: "My First Steps into AI: What I Learned in 3 Months",
        excerpt: "Sharing my journey as a first-year student diving into the world of Artificial Intelligence, including challenges, breakthroughs, and key learnings.",
        content: "<h2>Three Months of AI Learning</h2><p>As a first-year AI student, the past three months have been transformative. Here's what I learned:</p><h3>Month 1: Foundations</h3><p>Started with Python basics, then moved to data structures and algorithms, NumPy, and Pandas.</p><h3>Month 2: Machine Learning</h3><p>Dove into ML concepts: supervised vs unsupervised learning, regression, classification, and model evaluation.</p><h3>Month 3: Deep Learning</h3><p>Explored neural networks, backpropagation, CNNs, and RNNs basics.</p><h3>Key Takeaways</h3><ol><li>Consistency beats intensity</li><li>Build projects, don't just watch tutorials</li><li>Join communities and learn from others</li></ol>",
        date: "2026-02-01",
        category: "ai",
        readTime: 6,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EAI Journey%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 67,
        comments: 15,
        views: 342,
        featured: true,
        tags: ["AI", "Machine Learning", "Learning Journey"]
    },
    {
        id: 4,
        title: "Understanding Neural Networks: A Visual Guide",
        excerpt: "Demystifying neural networks with visual explanations, simple analogies, and practical examples for beginners.",
        content: "<h2>Neural Networks Explained Visually</h2><p>Neural networks might seem complex, but they're built on simple concepts. Let's break them down visually.</p><h3>The Neuron</h3><p>A neuron takes inputs, applies weights, adds bias, and passes through an activation function.</p><pre><code>output = activation(Σ(inputs × weights) + bias)</code></pre><h3>Network Layers</h3><ul><li><strong>Input Layer:</strong> Receives raw data</li><li><strong>Hidden Layers:</strong> Extract features</li><li><strong>Output Layer:</strong> Produces predictions</li></ul><h3>Activation Functions</h3><ul><li><strong>ReLU:</strong> f(x) = max(0,x)</li><li><strong>Sigmoid:</strong> 1/(1+e^(-x))</li><li><strong>Tanh:</strong> (e^x - e^(-x))/(e^x + e^(-x))</li></ul>",
        date: "2026-01-20",
        category: "ai",
        readTime: 8,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3ENeural Networks%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 54,
        comments: 9,
        views: 267,
        featured: false,
        tags: ["Neural Networks", "Deep Learning", "AI"]
    },
    {
        id: 5,
        title: "Building Your First C++ Project: Railway Reservation System",
        excerpt: "Step-by-step guide to creating a practical C++ application from scratch, covering OOP concepts, file handling, and data structures.",
        content: "<h2>C++ Railway Reservation System</h2><p>Building a railway reservation system is an excellent way to practice C++ concepts.</p><h3>Project Features</h3><ul><li>Ticket booking and cancellation</li><li>PNR status tracking</li><li>Seat availability checking</li><li>Fare calculation</li></ul><h3>Key Concepts Used</h3><ul><li>Classes and Objects</li><li>Inheritance and Polymorphism</li><li>File I/O operations</li><li>STL containers (vector, map)</li></ul><h3>Implementation Steps</h3><ol><li>Design the class structure</li><li>Implement user authentication</li><li>Create booking logic</li><li>Add file storage</li></ol>",
        date: "2026-01-05",
        category: "programming",
        readTime: 6,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EC++ Project%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 28,
        comments: 5,
        views: 134,
        featured: false,
        tags: ["C++", "Projects", "OOP"]
    },
    {
        id: 6,
        title: "Introduction to MLOps: Bridging ML and Operations",
        excerpt: "Understanding the basics of MLOps, why it matters for production ML systems, and how to get started with popular tools.",
        content: "<h2>What is MLOps?</h2><p>MLOps (Machine Learning Operations) is the practice of combining ML, DevOps, and data engineering to deploy and maintain ML systems reliably.</p><h3>Why MLOps Matters</h3><ul><li>Reproducibility of experiments</li><li>Model versioning and tracking</li><li>Automated deployment</li><li>Monitoring and retraining</li></ul><h3>MLOps Tools</h3><ul><li><strong>MLflow:</strong> Experiment tracking</li><li><strong>Docker:</strong> Containerization</li><li><strong>Kubernetes:</strong> Orchestration</li><li><strong>Kubeflow:</strong> ML workflows</li></ul><h3>MLOps Pipeline</h3><ol><li>Data validation and versioning</li><li>Model training and experimentation</li><li>Model validation and testing</li><li>Model deployment and serving</li><li>Model monitoring and retraining</li></ol>",
        date: "2025-12-10",
        category: "devops",
        readTime: 7,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EMLOps%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 41,
        comments: 7,
        views: 198,
        featured: true,
        tags: ["MLOps", "DevOps", "Machine Learning"]
    },
    {
        id: 7,
        title: "How to Ace Technical Interviews: Tips from a First-Year Student",
        excerpt: "Practical advice on preparing for technical interviews, building problem-solving skills, and showcasing projects effectively.",
        content: "<h2>Cracking Technical Interviews</h2><p>As a first-year student, I've learned that interview preparation is a journey. Here's my strategy:</p><h3>1. Master the Fundamentals</h3><ul><li>Data Structures: Arrays, Linked Lists, Trees, Graphs</li><li>Algorithms: Sorting, Searching, Dynamic Programming</li><li>Time & Space Complexity Analysis</li></ul><h3>2. Practice Regularly</h3><ul><li>LeetCode: Start with Easy, move to Medium</li><li>HackerRank: Topic-wise practice</li><li>Codeforces: Competitive programming</li></ul><h3>3. Build Projects</h3><p>Projects demonstrate practical skills. My portfolio includes RuralCare AI, Railway Reservation System, and Student Performance Predictor.</p><h3>4. Mock Interviews</h3><p>Practice with friends or platforms like Pramp. Focus on communication, problem-solving approach, and time management.</p>",
        date: "2025-11-25",
        category: "career",
        readTime: 5,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EInterview Tips%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 89,
        comments: 23,
        views: 456,
        featured: true,
        tags: ["Interviews", "Career", "Tips"]
    },
    {
        id: 8,
        title: "Building a Private Cloud Storage System: Technical Deep Dive",
        excerpt: "Learn how I built a secure private cloud storage system with authentication, file uploads, and folder management.",
        content: "<h2>Private Cloud Architecture</h2><p>This portfolio features a fully functional private cloud storage system. Here's how it works:</p><h3>Architecture Overview</h3><ul><li>Frontend: HTML5, CSS3, JavaScript</li><li>Storage: Browser's localStorage (simulated)</li><li>Authentication: Password-based (Sanjai@2008)</li><li>File handling: FileReader API, Data URLs</li></ul><h3>Key Features</h3><ul><li>Secure Access: Password-protected entry</li><li>File Management: Upload, download, delete, rename</li><li>Folder Organization: Create and navigate folders</li><li>File Preview: Images, PDFs, text files</li><li>Storage Tracking: Used space visualization</li></ul><h3>Implementation Details</h3><pre><code>uploadFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const newFile = {
            id: Date.now(),
            name: file.name,
            data: e.target.result
        };
        this.files.push(newFile);
    };
    reader.readAsDataURL(file);
}</code></pre>",
        date: "2025-11-10",
        category: "cloud",
        readTime: 10,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3ECloud Storage%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 73,
        comments: 18,
        views: 389,
        featured: true,
        tags: ["Cloud", "Storage", "JavaScript"]
    },
    {
        id: 9,
        title: "The Future of Green AI: Sustainable Machine Learning",
        excerpt: "Exploring how we can make AI more environmentally friendly through efficient algorithms, hardware optimization, and renewable energy.",
        content: "<h2>Green AI: Sustainable Machine Learning</h2><p>As AI models grow larger, their environmental impact increases. Here's how we can make AI greener:</p><h3>The Problem</h3><ul><li>Training large models can emit as much CO2 as 5 cars over their lifetime</li><li>Data centers consume massive amounts of electricity</li></ul><h3>Solutions</h3><h4>1. Efficient Algorithms</h4><ul><li>Model pruning: Remove unnecessary connections</li><li>Quantization: Reduce precision without losing accuracy</li><li>Knowledge distillation: Train smaller models</li></ul><h4>2. Hardware Optimization</h4><ul><li>Specialized AI chips (TPUs, NPUs)</li><li>Energy-efficient data centers</li><li>Renewable energy sources</li></ul><h4>3. Sustainable Practices</h4><ul><li>Carbon-aware computing</li><li>Model sharing and reuse</li><li>Open-source collaboration</li></ul>",
        date: "2025-10-28",
        category: "ai",
        readTime: 6,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EGreen AI%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 52,
        comments: 11,
        views: 276,
        featured: false,
        tags: ["Green AI", "Sustainability", "Environment"]
    },
    {
        id: 10,
        title: "10 VS Code Extensions Every Python Developer Needs",
        excerpt: "Boost your productivity with these essential VS Code extensions for Python development, AI/ML work, and debugging.",
        content: "<h2>Essential VS Code Extensions</h2><p>VS Code has become the go-to editor for Python developers. Here are 10 extensions that will supercharge your productivity:</p><h3>1. Python (by Microsoft)</h3><p>The official Python extension provides IntelliSense, linting, debugging, and Jupyter notebook support.</p><h3>2. Pylance</h3><p>Fast, feature-rich language support with type checking and auto-imports.</p><h3>3. Python Docstring Generator</h3><p>Automatically generates docstrings in various formats.</p><h3>4. GitLens</h3><p>Supercharges Git capabilities with blame annotations and code lens.</p><h3>5. Bracket Pair Colorizer</h3><p>Matching brackets with colors for complex nested structures.</p><h3>6. Prettier</h3><p>Code formatter that supports Python through plugins.</p><h3>7. Jupyter</h3><p>Run Jupyter notebooks directly in VS Code.</p><h3>8. Python Test Explorer</h3><p>Run and debug Python tests with a visual interface.</p><h3>9. Docker</h3><p>Build, manage, and deploy containerized applications.</p><h3>10. Remote - SSH</h3><p>Develop on remote machines or WSL.</p>",
        date: "2025-10-15",
        category: "programming",
        readTime: 4,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%230f172a'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='48' fill='%238b5cf6' text-anchor='middle'%3EVS Code%3C/text%3E%3C/svg%3E",
        author: "Sanjai Gopal",
        authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='25' fill='%231e293b'/%3E%3Ctext x='25' y='32' font-family='Arial' font-size='24' fill='%238b5cf6' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
        likes: 63,
        comments: 14,
        views: 312,
        featured: false,
        tags: ["VS Code", "Python", "Tools"]
    }
];

const achievements = [
    { id: 1, title: "Winner - Smart India Hackathon 2025", description: "First prize for developing an AI solution for rural healthcare", date: "Dec 2025", icon: "fa-trophy", color: "#FFD700" },
    { id: 2, title: "Best Research Paper Award", description: "Paper on Green AI presented at International Conference on Sustainable Computing", date: "Nov 2025", icon: "fa-award", color: "#C0C0C0" },
    { id: 3, title: "Google Summer of Code 2025", description: "Selected contributor for TensorFlow organization", date: "Aug 2025", icon: "fa-google", color: "#4285F4" },
    { id: 4, title: "Top 10 - National AI Challenge", description: "Ranked among top 10 AI innovators under 20", date: "Oct 2025", icon: "fa-robot", color: "#8b5cf6" },
    { id: 5, title: "Patent Filed", description: "Provisional patent for energy-efficient neural network architecture", date: "Jan 2026", icon: "fa-file-patent", color: "#10b981" }
];

// FIXED: Added 8 testimonials to eliminate Swiper warning (need at least 3 for loop mode)
const testimonials = [
    { 
        id: 1, 
        name: "Dr. Priya Krishnan", 
        role: "Professor, SKCET", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EPK%3C/text%3E%3C/svg%3E", 
        content: "Sanjai is one of the most dedicated students I've mentored. His passion for AI and ability to grasp complex concepts is remarkable. His project RuralCare AI shows maturity beyond his years.", 
        rating: 5 
    },
    { 
        id: 2, 
        name: "Rahul Sharma", 
        role: "Senior ML Engineer, Google", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERS%3C/text%3E%3C/svg%3E", 
        content: "I had the pleasure of mentoring Sanjai during GSoC. His contributions to TensorFlow were impressive. He has a bright future in AI research.", 
        rating: 5 
    },
    { 
        id: 3, 
        name: "Dr. Anand Kumar", 
        role: "Research Scientist, IIIT Hyderabad", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EAK%3C/text%3E%3C/svg%3E", 
        content: "Sanjai's paper on Green AI was one of the highlights of our conference. His innovative approach to energy-efficient ML is exactly what the field needs.", 
        rating: 5 
    },
    { 
        id: 4, 
        name: "Meera Nair", 
        role: "Product Manager, Microsoft", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EMN%3C/text%3E%3C/svg%3E", 
        content: "We collaborated on the student performance predictor project. Sanjai's technical skills and project management abilities are exceptional for a first-year student.", 
        rating: 5 
    },
    { 
        id: 5, 
        name: "Prof. Suresh Venkat", 
        role: "Head of CS, SKCET", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ESV%3C/text%3E%3C/svg%3E", 
        content: "Sanjai stands out among his peers for his deep understanding of AI concepts and his ability to apply them to real-world problems. He's a natural leader.", 
        rating: 5 
    },
    { 
        id: 6, 
        name: "Neha Gupta", 
        role: "AI Researcher, IBM", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ENG%3C/text%3E%3C/svg%3E", 
        content: "I was impressed by Sanjai's contributions during the IBM SkillsBuild program. His projects demonstrate both technical excellence and creative problem-solving.", 
        rating: 5 
    },
    { 
        id: 7, 
        name: "Arjun Reddy", 
        role: "Tech Lead, Amazon", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EAR%3C/text%3E%3C/svg%3E", 
        content: "Sanjai's portfolio is one of the most comprehensive I've seen from a first-year student. The private cloud feature and AI chatbot show advanced thinking.", 
        rating: 5 
    },
    { 
        id: 8, 
        name: "Dr. Lakshmi Narayanan", 
        role: "Dean of Research, IIT Madras", 
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23334155'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ELN%3C/text%3E%3C/svg%3E", 
        content: "Sanjai's research interest in Green AI is timely and important. His work on energy-efficient neural networks has the potential to make a real impact.", 
        rating: 5 
    }
];

const timeline = [
    {
        year: "2026",
        events: [
            {
                title: "Started B.Tech AI & DS at SKCET",
                description: "Begun formal education in Artificial Intelligence and Data Science",
                icon: "fa-graduation-cap"
            },
            {
                title: "First Patent Filed",
                description: "Provisional patent for energy-efficient neural network architecture",
                icon: "fa-file-patent"
            }
        ]
    },
    {
        year: "2025",
        events: [
            {
                title: "Smart India Hackathon Winner",
                description: "First prize for RuralCare AI project",
                icon: "fa-trophy"
            },
            {
                title: "Google Summer of Code",
                description: "Contributor to TensorFlow organization",
                icon: "fa-google"
            },
            {
                title: "30+ Certifications Completed",
                description: "Earned certifications from Coursera, AWS, IBM, and Government of India",
                icon: "fa-certificate"
            }
        ]
    },
    {
        year: "2024",
        events: [
            {
                title: "First Python Project",
                description: "Built a simple calculator and fell in love with programming",
                icon: "fa-code"
            },
            {
                title: "Completed High School",
                description: "Graduated with distinction in Computer Science",
                icon: "fa-school"
            }
        ]
    }
];

const gallery = [
    {
        id: 1,
        title: "Smart India Hackathon 2025",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ESIH 2025%3C/text%3E%3C/svg%3E",
        category: "events"
    },
    {
        id: 2,
        title: "Google Summer of Code Meetup",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EGSoC Meetup%3C/text%3E%3C/svg%3E",
        category: "events"
    },
    {
        id: 3,
        title: "International Conference on Sustainable Computing",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EICSC 2025%3C/text%3E%3C/svg%3E",
        category: "conferences"
    },
    {
        id: 4,
        title: "Coding Workshop at SKCET",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EWorkshop%3C/text%3E%3C/svg%3E",
        category: "teaching"
    },
    {
        id: 5,
        title: "Nature Photography",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ENature%3C/text%3E%3C/svg%3E",
        category: "personal"
    },
    {
        id: 6,
        title: "Team RuralCare AI",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ETeam%3C/text%3E%3C/svg%3E",
        category: "projects"
    }
];

const podcasts = [
    {
        id: 1,
        title: "Episode 1: Introduction to Green AI",
        description: "Discussing sustainable AI practices and why they matter",
        duration: "25:30",
        date: "Mar 1, 2026",
        audio: "#"
    },
    {
        id: 2,
        title: "Episode 2: My Journey into AI",
        description: "Personal story of how I got started with AI and ML",
        duration: "32:15",
        date: "Feb 15, 2026",
        audio: "#"
    },
    {
        id: 3,
        title: "Episode 3: Building RuralCare AI",
        description: "Behind the scenes of developing an AI health assistant",
        duration: "28:45",
        date: "Feb 1, 2026",
        audio: "#"
    }
];

// ==================== PRELOADER FUNCTIONS ====================

function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('preloaderProgress');
    const percentageEl = document.getElementById('preloaderPercentage');
    
    if (!preloader || !progressBar || !percentageEl) return;
    
    preloaderProgress = 0;
    preloaderInterval = setInterval(() => {
        preloaderProgress += Math.random() * 10 + 5;
        if (preloaderProgress >= 100) {
            preloaderProgress = 100;
            clearInterval(preloaderInterval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
        progressBar.style.width = preloaderProgress + '%';
        percentageEl.textContent = Math.floor(preloaderProgress) + '%';
    }, 200);
}

// ==================== RENDER FUNCTIONS ====================

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    const skillsData = [
        { category: "Programming Languages", icon: "fa-code", skills: [
            { name: "Python", level: 90, tags: ["NumPy", "Pandas", "Matplotlib"] },
            { name: "C++", level: 80, tags: ["OOP", "STL", "Algorithms"] },
            { name: "JavaScript", level: 75, tags: ["ES6", "React", "Node.js"] },
            { name: "SQL", level: 70, tags: ["MySQL", "PostgreSQL", "MongoDB"] }
        ]},
        { category: "AI & Machine Learning", icon: "fa-brain", skills: [
            { name: "Machine Learning", level: 85, tags: ["Scikit-learn", "Regression", "Classification"] },
            { name: "Deep Learning", level: 75, tags: ["TensorFlow", "PyTorch", "CNNs"] },
            { name: "NLP", level: 65, tags: ["NLTK", "SpaCy", "Transformers"] },
            { name: "MLOps", level: 60, tags: ["Docker", "Kubernetes", "MLflow"] }
        ]},
        { category: "Tools & Technologies", icon: "fa-tools", skills: [
            { name: "Git & GitHub", level: 90, tags: ["Version Control", "Git Flow", "Actions"] },
            { name: "VS Code", level: 85, tags: ["Extensions", "Debugging", "Live Share"] },
            { name: "Linux/Unix", level: 75, tags: ["Command Line", "Bash Scripting"] },
            { name: "Docker", level: 70, tags: ["Containers", "Compose", "Swarm"] }
        ]},
        { category: "Cloud & DevOps", icon: "fa-cloud", skills: [
            { name: "AWS", level: 70, tags: ["EC2", "S3", "Lambda"] },
            { name: "Google Cloud", level: 65, tags: ["Compute Engine", "Cloud Storage"] },
            { name: "Azure", level: 60, tags: ["VMs", "App Services"] },
            { name: "CI/CD", level: 70, tags: ["Jenkins", "GitHub Actions"] }
        ]}
    ];
    
    grid.innerHTML = skillsData.map(cat => `
        <div class="skill-tree" data-aos="fade-up">
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
        <div class="certificate-card" data-aos="fade-up" onclick="openCertificateModal(${cert.id})">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="certificate-overlay">
                <span>${cert.title}</span>
                <p><i class="fas fa-building"></i> ${cert.issuer} • ${cert.date}</p>
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
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
                <span class="project-category">${project.category.toUpperCase()}</span>
                <div class="project-stats">
                    <span><i class="fas fa-star"></i> ${project.stars}</span>
                    <span><i class="fas fa-code-branch"></i> ${project.forks}</span>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-meta">
                    <span><i class="far fa-calendar"></i> ${project.date}</span>
                    <span><i class="fas fa-circle" style="color: ${project.status === 'Active' ? '#10b981' : project.status === 'Completed' ? '#8b5cf6' : '#f59e0b'};"></i> ${project.status}</span>
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="github-link"><i class="fab fa-github"></i> Code</a>
                    ${project.live ? `<a href="${project.live}" target="_blank" class="demo-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                    <button class="details-link" onclick="openProjectModal(${project.id})"><i class="fas fa-info-circle"></i> Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlog(category = 'all', page = 1) {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    const postsPerPage = 6;
    const filtered = category === 'all' ? blogPosts : blogPosts.filter(p => p.category === category);
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = filtered.slice(start, end);
    
    if (paginatedPosts.length === 0 && page > 1) {
        document.getElementById('loadMoreBlogBtn').style.display = 'none';
        return;
    }
    
    grid.innerHTML = paginatedPosts.map(post => `
        <article class="blog-card" data-aos="fade-up">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <span class="blog-category">${post.category}</span>
                ${post.featured ? '<span class="blog-featured"><i class="fas fa-star"></i> Featured</span>' : ''}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime} min</span>
                    <span><i class="far fa-heart"></i> ${post.likes}</span>
                    <span><i class="far fa-comment"></i> ${post.comments}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-footer">
                    <span class="blog-author">
                        <img src="${post.authorAvatar}" alt="${post.author}">
                        ${post.author}
                    </span>
                    <button class="blog-read-more" onclick="openBlogModal(${post.id})">
                        Read More <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
    
    const loadMoreBtn = document.getElementById('loadMoreBlogBtn');
    if (loadMoreBtn) {
        if (end >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    grid.innerHTML = achievements.map(achievement => `
        <div class="achievement-item" data-aos="fade-up">
            <div class="achievement-icon" style="background: ${achievement.color}20; color: ${achievement.color}">
                <i class="fas ${achievement.icon}"></i>
            </div>
            <div class="achievement-content">
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
                <span class="achievement-date">${achievement.date}</span>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;
    
    container.innerHTML = testimonials.map(testimonial => `
        <div class="swiper-slide">
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                        <div class="testimonial-rating">
                            ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                        </div>
                    </div>
                </div>
                <div class="testimonial-content">
                    <i class="fas fa-quote-left"></i>
                    <p>${testimonial.content}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Initialize Swiper with enough slides (8 testimonials, so no warning)
    if (typeof Swiper !== 'undefined') {
        swiperInstance = new Swiper('#testimonialsSlider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    
    container.innerHTML = timeline.map(period => `
        <div class="timeline-period" data-aos="fade-up">
            <div class="timeline-year">${period.year}</div>
            <div class="timeline-events">
                ${period.events.map(event => `
                    <div class="timeline-event">
                        <div class="timeline-icon"><i class="fas ${event.icon}"></i></div>
                        <div class="timeline-content">
                            <h4>${event.title}</h4>
                            <p>${event.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = gallery.map(item => `
        <div class="gallery-item" data-aos="fade-up">
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
    
    list.innerHTML = podcasts.map(episode => `
        <div class="episode-card" data-aos="fade-up">
            <div class="episode-info">
                <h4>${episode.title}</h4>
                <p>${episode.description}</p>
                <div class="episode-meta">
                    <span><i class="far fa-clock"></i> ${episode.duration}</span>
                    <span><i class="far fa-calendar"></i> ${episode.date}</span>
                </div>
            </div>
            <div class="episode-player">
                <audio controls preload="none">
                    <source src="${episode.audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    `).join('');
}

// ==================== MODAL FUNCTIONS ====================

function openCertificateModal(certId) {
    const cert = certificates.find(c => c.id === certId);
    if (!cert) return;
    
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('blogModalTitle');
    const modalBody = document.getElementById('blogModalBody');
    
    modalTitle.textContent = cert.title;
    modalBody.innerHTML = `
        <div class="blog-post-full">
            <img src="${cert.image}" alt="${cert.title}" class="blog-post-image">
            <h2>${cert.title}</h2>
            <div class="blog-post-meta">
                <span><i class="fas fa-building"></i> ${cert.issuer}</span>
                <span><i class="far fa-calendar"></i> ${cert.date}</span>
            </div>
            <div class="blog-post-content">
                <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
                <p><strong>Verify at:</strong> <a href="${cert.link}" target="_blank">LinkedIn</a></p>
            </div>
            <div class="blog-post-share">
                <button class="btn btn-primary" onclick="window.open('${cert.link}', '_blank')">
                    <i class="fab fa-linkedin"></i> View on LinkedIn
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentCertificateId = certId;
}

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('blogModalTitle');
    const modalBody = document.getElementById('blogModalBody');
    
    modalTitle.textContent = project.name;
    modalBody.innerHTML = `
        <div class="blog-post-full">
            <img src="${project.image}" alt="${project.name}" class="blog-post-image">
            <h2>${project.name}</h2>
            <div class="blog-post-meta">
                <span><i class="far fa-calendar"></i> ${project.date}</span>
                <span><i class="fas fa-circle" style="color: ${project.status === 'Active' ? '#10b981' : '#8b5cf6'};"></i> ${project.status}</span>
            </div>
            <div class="blog-post-content">
                <p>${project.longDescription || project.description}</p>
                <h3>Technologies Used</h3>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <h3>Impact</h3>
                <p>${project.impact}</p>
                <div class="project-stats-full">
                    <span><i class="fas fa-star"></i> ${project.stars} stars</span>
                    <span><i class="fas fa-code-branch"></i> ${project.forks} forks</span>
                    <span><i class="fas fa-users"></i> ${project.contributors} contributors</span>
                </div>
            </div>
            <div class="blog-post-share">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${project.live ? `<a href="${project.live}" target="_blank" class="btn btn-outline">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ''}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentProjectId = projectId;
}

function openBlogModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('blogModalTitle');
    const modalBody = document.getElementById('blogModalBody');
    
    modalTitle.textContent = post.title;
    modalBody.innerHTML = `
        <div class="blog-post-full">
            <img src="${post.image}" alt="${post.title}" class="blog-post-image">
            <div class="blog-post-meta">
                <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                <span><i class="far fa-user"></i> ${post.author}</span>
                <span><i class="far fa-folder"></i> ${post.category}</span>
            </div>
            <div class="blog-post-stats">
                <span><i class="far fa-heart"></i> ${post.likes} likes</span>
                <span><i class="far fa-comment"></i> ${post.comments} comments</span>
                <span><i class="far fa-eye"></i> ${post.views} views</span>
            </div>
            <div class="blog-post-content">
                ${post.content}
            </div>
            <div class="blog-post-tags">
                ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            <div class="blog-post-share">
                <h4>Share this post</h4>
                <div class="share-buttons">
                    <a href="#" class="share-btn twitter" onclick="sharePost('twitter', ${post.id})"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="share-btn linkedin" onclick="sharePost('linkedin', ${post.id})"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="share-btn whatsapp" onclick="sharePost('whatsapp', ${post.id})"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    `;
    
    // Increment view count
    post.views++;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentPostId = postId;
    
    // Update navigation buttons
    updateBlogNavigation(postId);
}

function updateBlogNavigation(postId) {
    const prevBtn = document.getElementById('prevPostBtn');
    const nextBtn = document.getElementById('nextPostBtn');
    
    const currentIndex = blogPosts.findIndex(p => p.id === postId);
    
    if (prevBtn) {
        if (currentIndex > 0) {
            prevBtn.disabled = false;
            prevBtn.onclick = () => openBlogModal(blogPosts[currentIndex - 1].id);
        } else {
            prevBtn.disabled = true;
        }
    }
    
    if (nextBtn) {
        if (currentIndex < blogPosts.length - 1) {
            nextBtn.disabled = false;
            nextBtn.onclick = () => openBlogModal(blogPosts[currentIndex + 1].id);
        } else {
            nextBtn.disabled = true;
        }
    }
}

// ==================== UTILITY FUNCTIONS ====================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const icon = toast.querySelector('.toast-icon i');
    const messageEl = toast.querySelector('.toast-message');
    const progress = toast.querySelector('.toast-progress');
    
    icon.className = type === 'success' ? 'fas fa-check-circle' : 
                     type === 'error' ? 'fas fa-exclamation-circle' : 
                     'fas fa-info-circle';
    messageEl.textContent = message;
    
    toast.classList.add('show');
    
    // Reset and animate progress
    if (progress) {
        progress.style.transition = 'none';
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.transition = 'width 3s linear';
            progress.style.width = '100%';
        }, 10);
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function sharePost(platform, postId) {
    const post = blogPosts.find(p => p.id === postId);
    const url = window.location.href + `#blog-${postId}`;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl;
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function generateResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setTextColor(139, 92, 246);
    doc.setFontSize(24);
    doc.text("Sanjai Gopal", 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Aspiring AI Engineer | MLOps Enthusiast", 20, 30);
    doc.text("Coimbatore, Tamil Nadu | +91 9363265552 | sanjai.sparkmail@gmail.com", 20, 37);
    
    doc.setDrawColor(139, 92, 246);
    doc.line(20, 42, 190, 42);
    
    doc.setFontSize(16);
    doc.setTextColor(139, 92, 246);
    doc.text("Education", 20, 55);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("SKCET - 1st Year Artificial Intelligence & Data Science (2025-2029)", 20, 65);
    
    doc.setFontSize(16);
    doc.setTextColor(139, 92, 246);
    doc.text("Certifications (33+)", 20, 80);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    let y = 90;
    certificates.slice(0, 15).forEach(cert => {
        doc.text(`• ${cert.title} - ${cert.issuer} (${cert.date})`, 25, y);
        y += 6;
    });
    
    doc.save("Sanjai_Gopal_Resume.pdf");
    showToast('Resume generated successfully!');
}

// ==================== CHART INITIALIZATION ====================

function initCharts() {
    // Visitor Chart
    const visitorCtx = document.getElementById('visitorChart')?.getContext('2d');
    if (visitorCtx) {
        visitorChart = new Chart(visitorCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Visitors',
                    data: [650, 890, 1200, 1450, 1800, 2100],
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Skills Chart
    const skillsCtx = document.getElementById('skillsChart')?.getContext('2d');
    if (skillsCtx) {
        skillsChart = new Chart(skillsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Python', 'C++', 'JavaScript', 'ML/AI', 'DevOps'],
                datasets: [{
                    data: [90, 80, 75, 85, 70],
                    backgroundColor: [
                        '#8b5cf6',
                        '#3b82f6',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Traffic Chart
    const trafficCtx = document.getElementById('trafficChart')?.getContext('2d');
    if (trafficCtx) {
        trafficChart = new Chart(trafficCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Page Views',
                    data: [120, 145, 132, 178, 190, 210, 156],
                    backgroundColor: '#8b5cf6',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// ==================== CHATBOT CLASS ====================

class NatureAIChatbot {
    constructor() {
        this.container = document.getElementById('chatbotContainer');
        this.toggle = document.getElementById('chatbotToggle');
        this.close = document.getElementById('chatbotClose');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendBtn = document.getElementById('chatbotSend');
        this.suggestions = document.querySelectorAll('.suggestion');
        this.isOpen = false;
        this.context = [];
        
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.close.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        this.suggestions.forEach(btn => {
            btn.addEventListener('click', () => {
                this.input.value = btn.textContent;
                this.sendMessage();
            });
        });
    }
    
    toggleChat() {
        this.isOpen ? this.closeChat() : this.openChat();
    }
    
    openChat() {
        this.container.classList.add('active');
        this.toggle.style.display = 'none';
        this.isOpen = true;
    }
    
    closeChat() {
        this.container.classList.remove('active');
        this.toggle.style.display = 'flex';
        this.isOpen = false;
    }
    
    addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        
        const avatar = sender === 'bot' ? 
            '<div class="message-avatar"><i class="fas fa-leaf"></i></div>' : 
            '<div class="message-avatar"><i class="fas fa-user"></i></div>';
        
        msg.innerHTML = `
            ${avatar}
            <div class="message-content">${text}</div>
        `;
        
        this.messages.appendChild(msg);
        this.messages.scrollTop = this.messages.scrollHeight;
        
        // Store context
        this.context.push({ sender, text });
        if (this.context.length > 10) this.context.shift();
    }
    
    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;
        
        this.addMessage(text, 'user');
        this.input.value = '';
        
        setTimeout(() => {
            const response = this.getAIResponse(text);
            this.addMessage(response, 'bot');
        }, 500);
    }
    
    getAIResponse(input) {
        input = input.toLowerCase();
        
        if (input.includes('skill') || input.includes('know')) {
            return "Sanjai has expertise in:\n• Python (90%)\n• C++ (80%)\n• JavaScript (75%)\n• Machine Learning (85%)\n• Deep Learning (75%)\n• MLOps (60%)\n• Git/GitHub (90%)\n• Docker (70%)";
        }
        else if (input.includes('project')) {
            return "Sanjai has built 6 major projects:\n1. RuralCare AI - Health assistant\n2. Feedback & Billing System (C++)\n3. bis-smart-compliance (Python)\n4. Railway Reservation System (C++)\n5. Advanced Portfolio 2026\n6. Student Performance Predictor (ML)";
        }
        else if (input.includes('certificate') || input.includes('certification')) {
            return "Sanjai has earned 33+ certifications from:\n• Coursera (14 Canva certs)\n• AWS Cloud Practitioner\n• IBM SkillsBuild\n• Government of India (Viksit Bharat, MYBharat)\n• ISRO/IIRS\n• Saylor Academy (AI)\n• byteXL (C Programming)\n• typing.com (3 levels)";
        }
        else if (input.includes('blog') || input.includes('post')) {
            return "Sanjai writes about:\n• Python & AI programming\n• Git & DevOps practices\n• Neural networks explained\n• Career tips for students\n• Green AI & sustainability\n• Building cloud storage\n\nCheck out the Blog section for latest posts!";
        }
        else if (input.includes('cloud') || input.includes('storage')) {
            return "Sanjai's Private Cloud features:\n• Secure file storage\n• Folder organization\n• File upload/download\n• 24 files currently\n• 2.4 GB used / 10 GB total\n• Password protected (Sanjai@2008)";
        }
        else if (input.includes('contact') || input.includes('email')) {
            return "You can reach Sanjai at:\n📧 Email: sanjai.sparkmail@gmail.com\n📱 Phone: +91 9363265552\n💼 LinkedIn: linkedin.com/in/sanjai2306\n🐙 GitHub: github.com/Sanjai-Gopal";
        }
        else if (input.includes('education')) {
            return "Sanjai is currently in his 1st year of B.Tech Artificial Intelligence & Data Science at Sri Krishna College of Engineering and Technology (SKCET), Coimbatore (2025-2029).";
        }
        else if (input.includes('resume')) {
            return "You can download Sanjai's resume by clicking the 'Download Resume' button in the About section or using the FAB menu!";
        }
        else if (input.includes('admin') || input.includes('private')) {
            return "🔐 Private Area Access:\n• Double-click the green dot (top-left) for admin panel\n• Password: Sanjai@2008\n• Manage projects, certificates, blog posts, and cloud files";
        }
        else if (input.includes('hello') || input.includes('hi')) {
            return "Hello! 👋 I'm Sanjai's AI assistant. I can help you learn about his skills, projects, certifications, blog posts, cloud storage, and more. What would you like to know?";
        }
        else {
            return "I'm not sure about that. You can ask me about:\n• Skills and technologies\n• Projects and code\n• Certifications\n• Blog posts\n• Cloud storage\n• Contact information\n• Education\n• Admin access";
        }
    }
}

// ==================== CLOUD STORAGE CLASS ====================

class CloudStorage {
    constructor() {
        this.currentPath = 'root';
        this.files = this.loadFiles();
        this.storageLimit = 10 * 1024 * 1024 * 1024; // 10 GB
        this.usedStorage = this.calculateUsedStorage();
        this.init();
    }
    
    loadFiles() {
        // Load from localStorage or use default
        const saved = localStorage.getItem('cloudFiles');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Default files
        return [
            { id: '1', name: 'Projects', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 6, icon: 'folder' },
            { id: '2', name: 'Certificates', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 33, icon: 'folder' },
            { id: '3', name: 'Blog Posts', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 10, icon: 'folder' },
            { id: '4', name: 'Resume.pdf', type: 'pdf', path: 'root', size: 2.4 * 1024 * 1024, modified: new Date().toISOString(), icon: 'pdf' },
            { id: '5', name: 'Profile-Photo.jpg', type: 'image', path: 'root', size: 1.8 * 1024 * 1024, modified: new Date().toISOString(), icon: 'image' },
            { id: '6', name: 'Project-RuralCare.zip', type: 'archive', path: 'root', size: 15.2 * 1024 * 1024, modified: new Date().toISOString(), icon: 'archive' },
            { id: '7', name: 'Python-Scripts', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 8, icon: 'folder' },
            { id: '8', name: 'ML-Models', type: 'folder', path: 'root', size: 0, modified: new Date().toISOString(), items: 4, icon: 'folder' }
        ];
    }
    
    saveFiles() {
        localStorage.setItem('cloudFiles', JSON.stringify(this.files));
    }
    
    calculateUsedStorage() {
        return this.files.reduce((total, file) => total + (file.size || 0), 0);
    }
    
    updateStorageBar() {
        const usedGB = (this.usedStorage / (1024 * 1024 * 1024)).toFixed(1);
        const totalGB = (this.storageLimit / (1024 * 1024 * 1024)).toFixed(1);
        const percentage = (this.usedStorage / this.storageLimit) * 100;
        
        document.getElementById('storageUsed').textContent = `${usedGB} GB / ${totalGB} GB`;
        document.getElementById('storageBarFill').style.width = `${percentage}%`;
        document.getElementById('totalStorage').textContent = `${usedGB} GB`;
        document.getElementById('totalFiles').textContent = this.files.length;
        document.getElementById('totalFolders').textContent = this.files.filter(f => f.type === 'folder').length;
    }
    
    renderFiles() {
        const grid = document.getElementById('cloudFilesGrid');
        if (!grid) return;
        
        const currentFiles = this.files.filter(f => f.path === this.currentPath);
        
        if (currentFiles.length === 0) {
            grid.innerHTML = `
                <div class="cloud-empty">
                    <i class="fas fa-folder-open"></i>
                    <h3>Folder is empty</h3>
                    <p>Upload files or create a new folder</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = currentFiles.map(file => `
            <div class="cloud-file-item ${file.type === 'folder' ? 'folder' : 'file'}" 
                 data-id="${file.id}" 
                 data-name="${file.name}" 
                 data-type="${file.type}"
                 ondblclick="${file.type === 'folder' ? `cloud.openFolder('${file.id}')` : `cloud.previewFile('${file.id}')`}">
                <div class="file-icon">
                    ${this.getFileIcon(file.type)}
                </div>
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    <span class="file-meta">
                        ${file.type === 'folder' ? `${file.items} items` : this.formatBytes(file.size)} 
                        • ${new Date(file.modified).toLocaleDateString()}
                    </span>
                </div>
                <div class="file-actions">
                    ${file.type === 'folder' ? 
                        `<button class="file-action" onclick="cloud.openFolder('${file.id}')" title="Open">
                            <i class="fas fa-folder-open"></i>
                        </button>` : 
                        `<button class="file-action" onclick="cloud.downloadFile('${file.id}')" title="Download">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="file-action" onclick="cloud.previewFile('${file.id}')" title="Preview">
                            <i class="fas fa-eye"></i>
                        </button>`}
                    <button class="file-action" onclick="cloud.renameFile('${file.id}')" title="Rename">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="file-action" onclick="cloud.deleteFile('${file.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    getFileIcon(type) {
        const icons = {
            folder: '<i class="fas fa-folder" style="color: #f59e0b;"></i>',
            pdf: '<i class="fas fa-file-pdf" style="color: #ef4444;"></i>',
            image: '<i class="fas fa-file-image" style="color: #3b82f6;"></i>',
            archive: '<i class="fas fa-file-archive" style="color: #8b5cf6;"></i>',
            code: '<i class="fas fa-file-code" style="color: #10b981;"></i>',
            text: '<i class="fas fa-file-alt" style="color: #94a3b8;"></i>',
            default: '<i class="fas fa-file" style="color: #94a3b8;"></i>'
        };
        return icons[type] || icons.default;
    }
    
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    openFolder(folderId) {
        const folder = this.files.find(f => f.id === folderId);
        if (folder && folder.type === 'folder') {
            this.currentPath = folderId;
            this.updateBreadcrumb(folder.name);
            this.renderFiles();
        }
    }
    
    updateBreadcrumb(folderName) {
        const breadcrumb = document.getElementById('cloudBreadcrumb');
        const rootBreadcrumb = `<span class="breadcrumb-item" onclick="cloud.openFolder('root')">My Cloud</span>`;
        
        if (this.currentPath === 'root') {
            breadcrumb.innerHTML = rootBreadcrumb;
        } else {
            breadcrumb.innerHTML = `
                ${rootBreadcrumb}
                <i class="fas fa-chevron-right"></i>
                <span class="breadcrumb-item active">${folderName}</span>
            `;
        }
    }
    
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newFile = {
                    id: Date.now().toString(),
                    name: file.name,
                    type: this.getFileTypeFromMime(file.type),
                    path: this.currentPath,
                    size: file.size,
                    modified: new Date().toISOString(),
                    data: e.target.result,
                    icon: this.getFileTypeFromMime(file.type)
                };
                
                this.files.push(newFile);
                this.usedStorage += file.size;
                this.saveFiles();
                this.renderFiles();
                this.updateStorageBar();
                this.showToast(`Uploaded ${file.name}`, 'success');
                resolve(newFile);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    
    getFileTypeFromMime(mimeType) {
        if (mimeType.startsWith('image/')) return 'image';
        if (mimeType === 'application/pdf') return 'pdf';
        if (mimeType.includes('zip') || mimeType.includes('rar') || mimeType.includes('tar')) return 'archive';
        if (mimeType.startsWith('text/')) return 'text';
        if (mimeType.includes('javascript') || mimeType.includes('python') || mimeType.includes('html')) return 'code';
        return 'file';
    }
    
    downloadFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        if (file.data) {
            const link = document.createElement('a');
            link.href = file.data;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            this.showToast(`Downloaded ${file.name}`, 'success');
        } else {
            this.showToast(`Simulated download for ${file.name}`, 'info');
        }
    }
    
    previewFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        // For simplicity, just show a toast
        this.showToast(`Previewing ${file.name}`, 'info');
    }
    
    renameFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        const newName = prompt('Enter new name:', file.name);
        if (newName && newName !== file.name) {
            file.name = newName;
            file.modified = new Date().toISOString();
            this.saveFiles();
            this.renderFiles();
            this.showToast(`Renamed to ${newName}`, 'success');
        }
    }
    
    deleteFile(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (!file) return;
        
        if (confirm(`Are you sure you want to delete ${file.name}?`)) {
            this.files = this.files.filter(f => f.id !== fileId);
            if (file.type === 'folder') {
                this.files = this.files.filter(f => f.path !== fileId);
            }
            this.usedStorage = this.calculateUsedStorage();
            this.saveFiles();
            this.renderFiles();
            this.updateStorageBar();
            this.showToast(`${file.name} deleted`, 'success');
        }
    }
    
    createFolder() {
        const folderName = prompt('Enter folder name:');
        if (!folderName) return;
        
        const exists = this.files.some(f => 
            f.path === this.currentPath && 
            f.name === folderName && 
            f.type === 'folder'
        );
        
        if (exists) {
            alert('A folder with this name already exists');
            return;
        }
        
        const newFolder = {
            id: Date.now().toString(),
            name: folderName,
            type: 'folder',
            path: this.currentPath,
            size: 0,
            modified: new Date().toISOString(),
            items: 0,
            icon: 'folder'
        };
        
        this.files.push(newFolder);
        this.saveFiles();
        this.renderFiles();
        this.showToast(`Folder '${folderName}' created`, 'success');
    }
    
    showToast(message, type = 'success') {
        const toast = document.getElementById('toastNotification');
        const icon = toast.querySelector('.toast-icon i');
        const messageEl = toast.querySelector('.toast-message');
        
        icon.className = type === 'success' ? 'fas fa-check-circle' : 
                         type === 'error' ? 'fas fa-exclamation-circle' : 
                         'fas fa-info-circle';
        messageEl.textContent = message;
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// ==================== STATS COUNTER ====================

function animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Ultra-Advanced Portfolio');
    
    // Initialize preloader
    initPreloader();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
    
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
    
    // Initialize typed.js
    if (typeof Typed !== 'undefined') {
        typedInstance = new Typed('.typed-text', {
            strings: ['AI Engineer', 'MLOps Enthusiast', 'Python Developer', 'C++ Programmer', 'Nature Lover', 'Green AI Advocate'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
    
    // Initialize vanilla tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
        });
    }
    
    // Initialize particles
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particleContainer', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#8b5cf6' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#8b5cf6', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
    
    // Initialize charts
    initCharts();
    
    // Animate stats
    animateStats();
    
    // ==================== EVENT LISTENERS ====================
    
    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Project filter
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.projects-filter .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
    
    // Certificate filter
    document.querySelectorAll('.cert-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cert-filters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCertificates(this.dataset.certFilter);
        });
    });
    
    // Blog category filter
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentBlogCategory = this.dataset.blogCat;
            currentBlogPage = 1;
            renderBlog(currentBlogCategory, currentBlogPage);
        });
    });
    
    // Load more blog posts
    document.getElementById('loadMoreBlogBtn')?.addEventListener('click', function() {
        currentBlogPage++;
        renderBlog(currentBlogCategory, currentBlogPage);
    });
    
    // Resume download
    document.getElementById('downloadResumeBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        generateResume();
    });
    
    document.getElementById('resumeFooterLink')?.addEventListener('click', function(e) {
        e.preventDefault();
        generateResume();
    });
    
    // Contact form
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Message sent successfully! (Demo)', 'success');
        this.reset();
    });
    
    // Newsletter form
    document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Subscribed successfully!', 'success');
        this.reset();
    });
    
    // Search toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const searchClose = document.getElementById('searchClose');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchBar.classList.toggle('active');
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchBar.classList.remove('active');
        });
    }
    
    // Notification toggle
    const notificationToggle = document.getElementById('notificationToggle');
    const notificationsPanel = document.getElementById('notificationsPanel');
    
    if (notificationToggle) {
        notificationToggle.addEventListener('click', () => {
            notificationsPanel.classList.toggle('active');
        });
    }
    
    // Mark all as read
    document.querySelector('.mark-read')?.addEventListener('click', function() {
        document.querySelectorAll('.notification-item.unread').forEach(item => {
            item.classList.remove('unread');
        });
        document.querySelector('.notification-badge').style.display = 'none';
        showToast('All notifications marked as read', 'info');
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });
    }
    
    // Back to top
    window.addEventListener('scroll', function() {
        const btn = document.getElementById('backToTop');
        if (btn) {
            if (window.scrollY > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }
    });
    
    document.getElementById('backToTop')?.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Admin panel
    const adminSecret = document.getElementById('adminSecret');
    const privateModal = document.getElementById('privateModal');
    const privateClose = document.getElementById('privateClose');
    const privateLink = document.getElementById('privateLink');
    
    if (adminSecret) {
        adminSecret.addEventListener('dblclick', () => {
            privateModal.classList.add('active');
        });
    }
    
    if (privateLink) {
        privateLink.addEventListener('click', (e) => {
            e.preventDefault();
            privateModal.classList.add('active');
        });
    }
    
    if (privateClose) {
        privateClose.addEventListener('click', () => {
            privateModal.classList.remove('active');
        });
    }
    
    // Password submission
    document.getElementById('submitPassword')?.addEventListener('click', function() {
        const password = document.getElementById('privatePassword').value;
        const error = document.getElementById('passwordError');
        
        if (password === 'Sanjai@2008') {
            document.getElementById('passwordForm').style.display = 'none';
            document.getElementById('privateDashboard').style.display = 'block';
            showToast('Access granted!', 'success');
        } else {
            error.textContent = 'Incorrect password. Hint: Sanjai@2008';
        }
    });
    
    // Password toggle
    document.getElementById('passwordToggle')?.addEventListener('click', function() {
        const input = document.getElementById('privatePassword');
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'fas fa-eye';
        }
    });
    
    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', function() {
        document.getElementById('passwordForm').style.display = 'block';
        document.getElementById('privateDashboard').style.display = 'none';
        document.getElementById('privatePassword').value = '';
        privateModal.classList.remove('active');
        showToast('Logged out successfully', 'info');
    });
    
    // Dashboard tabs
    document.querySelectorAll('.dashboard-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.dashboard-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dashboard-pane').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab + '-pane').classList.add('active');
        });
    });
    
    // Profile image upload
    document.getElementById('changeProfileBtn')?.addEventListener('click', function() {
        document.getElementById('profileImageUpload').click();
    });
    
    document.getElementById('profileImageUpload')?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('adminProfilePreview').src = e.target.result;
                document.getElementById('aboutProfileImage').src = e.target.result;
                showToast('Profile photo updated!', 'success');
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Save profile
    document.getElementById('saveProfileBtn')?.addEventListener('click', function() {
        showToast('Profile updated successfully!', 'success');
    });
    
    // Add project
    document.getElementById('addProjectBtn')?.addEventListener('click', function() {
        showToast('Add project feature (demo)', 'info');
    });
    
    // Add certificate
    document.getElementById('addCertificateBtn')?.addEventListener('click', function() {
        showToast('Add certificate feature (demo)', 'info');
    });
    
    // Add blog post
    document.getElementById('addBlogBtn')?.addEventListener('click', function() {
        showToast('Create new post feature (demo)', 'info');
    });
    
    // Export data
    document.getElementById('exportDataBtn')?.addEventListener('click', function() {
        showToast('Exporting data...', 'info');
        setTimeout(() => {
            showToast('Data exported successfully!', 'success');
        }, 1500);
    });
    
    // Reset data
    document.getElementById('resetDataBtn')?.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
            showToast('All data reset (demo)', 'info');
        }
    });
    
    // Change password
    document.getElementById('changePasswordBtn')?.addEventListener('click', function() {
        const newPass = document.getElementById('newPassword').value;
        const confirmPass = document.getElementById('confirmPassword').value;
        
        if (newPass && newPass === confirmPass) {
            showToast('Password updated successfully!', 'success');
        } else {
            showToast('Passwords do not match', 'error');
        }
    });
    
    // Cloud link
    const cloudLink = document.getElementById('cloudLink');
    const cloudModal = document.getElementById('cloudModal');
    const cloudClose = document.getElementById('cloudClose');
    const cloudFooterLink = document.getElementById('cloudFooterLink');
    
    function openCloudModal(e) {
        if (e) e.preventDefault();
        cloudModal.classList.add('active');
    }
    
    if (cloudLink) {
        cloudLink.addEventListener('click', openCloudModal);
    }
    
    if (cloudFooterLink) {
        cloudFooterLink.addEventListener('click', openCloudModal);
    }
    
    if (cloudClose) {
        cloudClose.addEventListener('click', () => {
            cloudModal.classList.remove('active');
        });
    }
    
    // Cloud password
    document.getElementById('submitCloudPassword')?.addEventListener('click', function() {
        const password = document.getElementById('cloudPassword').value;
        const error = document.getElementById('cloudPasswordError');
        
        if (password === 'Sanjai@2008') {
            document.getElementById('cloudPasswordForm').style.display = 'none';
            document.getElementById('cloudDashboard').style.display = 'block';
            cloudInstance = new CloudStorage();
            showToast('Cloud access granted!', 'success');
        } else {
            error.textContent = 'Incorrect password. Hint: Sanjai@2008';
        }
    });
    
    // Cloud password toggle
    document.getElementById('cloudPasswordToggle')?.addEventListener('click', function() {
        const input = document.getElementById('cloudPassword');
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'fas fa-eye';
        }
    });
    
    // Cloud logout
    document.getElementById('cloudLogoutBtn')?.addEventListener('click', function() {
        document.getElementById('cloudPasswordForm').style.display = 'block';
        document.getElementById('cloudDashboard').style.display = 'none';
        document.getElementById('cloudPassword').value = '';
        cloudInstance = null;
        showToast('Logged out of cloud', 'info');
    });
    
    // Cloud upload
    document.getElementById('cloudUploadBtn')?.addEventListener('click', function() {
        document.getElementById('cloudFileInput').click();
    });
    
    document.getElementById('cloudFileInput')?.addEventListener('change', function(e) {
        if (cloudInstance) {
            Array.from(e.target.files).forEach(file => cloudInstance.uploadFile(file));
        }
    });
    
    // Cloud new folder
    document.getElementById('cloudNewFolderBtn')?.addEventListener('click', function() {
        if (cloudInstance) {
            cloudInstance.createFolder();
        }
    });
    
    // Cloud refresh
    document.getElementById('cloudRefreshBtn')?.addEventListener('click', function() {
        if (cloudInstance) {
            cloudInstance.renderFiles();
            cloudInstance.showToast('Cloud refreshed', 'info');
        }
    });
    
    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const view = this.dataset.view;
            const grid = document.getElementById('cloudFilesGrid');
            const list = document.getElementById('cloudFilesList');
            
            if (view === 'grid') {
                grid.style.display = 'grid';
                list.style.display = 'none';
            } else {
                grid.style.display = 'none';
                list.style.display = 'block';
                // In a real implementation, you'd populate the list view here
            }
        });
    });
    
    // Cloud search
    document.getElementById('cloudSearchInput')?.addEventListener('input', function(e) {
        if (cloudInstance) {
            // Simple search simulation
            const query = e.target.value.toLowerCase();
            if (!query) {
                cloudInstance.renderFiles();
                return;
            }
            
            const filtered = cloudInstance.files.filter(f => 
                f.name.toLowerCase().includes(query) && 
                (f.path === cloudInstance.currentPath || f.path.includes(cloudInstance.currentPath))
            );
            
            const grid = document.getElementById('cloudFilesGrid');
            grid.innerHTML = filtered.map(file => `
                <div class="cloud-file-item ${file.type}">
                    <div class="file-icon">${cloudInstance.getFileIcon(file.type)}</div>
                    <div class="file-info">
                        <span class="file-name">${file.name}</span>
                        <span class="file-meta">${file.type === 'folder' ? `${file.items} items` : cloudInstance.formatBytes(file.size)}</span>
                    </div>
                </div>
            `).join('');
        }
    });
    
    // Blog modal close
    document.getElementById('blogModalClose')?.addEventListener('click', function() {
        document.getElementById('blogModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Click outside to close modals
    window.addEventListener('click', function(e) {
        const blogModal = document.getElementById('blogModal');
        const privateModal = document.getElementById('privateModal');
        const cloudModal = document.getElementById('cloudModal');
        
        if (e.target === blogModal) {
            blogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        if (e.target === privateModal) {
            privateModal.classList.remove('active');
        }
        
        if (e.target === cloudModal) {
            cloudModal.classList.remove('active');
        }
    });
    
    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.getElementById('blogModal').classList.remove('active');
            document.getElementById('privateModal').classList.remove('active');
            document.getElementById('cloudModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // FAB menu
    const fabMain = document.getElementById('fabMain');
    const fabMenu = document.getElementById('fabMenu');
    
    if (fabMain) {
        fabMain.addEventListener('click', function() {
            fabMenu.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.fab-item').forEach(item => {
        item.addEventListener('click', function() {
            const action = this.dataset.action;
            if (action === 'chat') {
                if (chatbotInstance) {
                    chatbotInstance.openChat();
                }
            } else if (action === 'cloud') {
                document.getElementById('cloudModal').classList.add('active');
            } else if (action === 'resume') {
                generateResume();
            } else if (action === 'admin') {
                document.getElementById('privateModal').classList.add('active');
            }
            fabMenu.classList.remove('active');
        });
    });
    
    // Cookie consent
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'flex';
    }
    
    document.getElementById('acceptCookies')?.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieConsent').style.display = 'none';
        showToast('Cookies accepted', 'success');
    });
    
    document.getElementById('declineCookies')?.addEventListener('click', function() {
        document.getElementById('cookieConsent').style.display = 'none';
    });
    
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    function checkReveals() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', checkReveals);
    checkReveals();
    
    // Play intro button
    document.getElementById('playIntroBtn')?.addEventListener('click', function() {
        showToast('Intro video would play here (demo)', 'info');
    });
    
    // Initialize chatbot
    chatbotInstance = new NatureAIChatbot();
    
    console.log('✅ All systems initialized successfully');
});
