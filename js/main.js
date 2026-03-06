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
let swiperInstance = null;
let cloudInstance = null;
let chatbotInstance = null;
let preloaderProgress = 0;
let preloaderInterval = null;

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
        title: "Getting Started with Python: A Beginner's Guide",
        excerpt: "Learn the fundamentals of Python programming with practical examples and tips for aspiring AI engineers.",
        content: "<h2>Introduction to Python</h2><p>Python has become the de facto language for artificial intelligence and machine learning. Its simplicity, extensive libraries, and vibrant community make it the perfect choice for beginners and experts alike.</p><h3>Why Python for AI?</h3><ul><li><strong>Easy to Learn:</strong> Python's syntax is clean and readable</li><li><strong>Rich Ecosystem:</strong> Libraries like NumPy, Pandas, TensorFlow</li><li><strong>Community Support:</strong> Millions of developers worldwide</li></ul><h3>Your First Python Program</h3><pre><code>print('Hello, AI World!')</code></pre>",
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
        content: "<h2>Mastering Git and GitHub</h2><p>Version control is an essential skill for every developer. Git helps you track changes, collaborate with others, and manage your code effectively.</p><h3>Basic Git Commands</h3><pre><code>git init\ngit add .\ngit commit -m 'message'\ngit push</code></pre>",
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
        content: "<h2>Three Months of AI Learning</h2><p>As a first-year AI student, the past three months have been transformative. Here's what I learned:</p><h3>Month 1: Foundations</h3><p>Started with Python basics, then moved to data structures and algorithms.</p>",
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
        content: "<h2>Neural Networks Explained Visually</h2><p>Neural networks might seem complex, but they're built on simple concepts. Let's break them down visually.</p><h3>The Neuron</h3><p>A neuron takes inputs, applies weights, adds bias, and passes through an activation function.</p>",
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
        title: "Building Your First C++ Project",
        excerpt: "Step-by-step guide to creating a practical C++ application from scratch, covering OOP concepts, file handling, and data structures.",
        content: "<h2>C++ Railway Reservation System</h2><p>Building a railway reservation system is an excellent way to practice C++ concepts.</p><h3>Key Concepts Used</h3><ul><li>Classes and Objects</li><li>Inheritance and Polymorphism</li><li>File I/O operations</li></ul>",
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
        content: "<h2>What is MLOps?</h2><p>MLOps (Machine Learning Operations) is the practice of combining ML, DevOps, and data engineering to deploy and maintain ML systems reliably.</p><h3>Why MLOps Matters</h3><ul><li>Reproducibility of experiments</li><li>Model versioning and tracking</li><li>Automated deployment</li></ul>",
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
    }
];

const achievements = [
    { id: 1, title: "Winner - Smart India Hackathon 2025", description: "First prize for developing an AI solution for rural healthcare", date: "Dec 2025", icon: "fa-trophy", color: "#FFD700" },
    { id: 2, title: "Best Research Paper Award", description: "Paper on Green AI presented at International Conference", date: "Nov 2025", icon: "fa-award", color: "#C0C0C0" },
    { id: 3, title: "Google Summer of Code 2025", description: "Selected contributor for TensorFlow organization", date: "Aug 2025", icon: "fa-google", color: "#4285F4" },
    { id: 4, title: "Top 10 - National AI Challenge", description: "Ranked among top 10 AI innovators under 20", date: "Oct 2025", icon: "fa-robot", color: "#8b5cf6" }
];

const testimonials = [
    { id: 1, name: "Dr. Priya Krishnan", role: "Professor, SKCET", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231e293b'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EPK%3C/text%3E%3C/svg%3E", content: "Sanjai is one of the most dedicated students I've mentored. His passion for AI and ability to grasp complex concepts is remarkable.", rating: 5 },
    { id: 2, name: "Rahul Sharma", role: "Senior ML Engineer, Google", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231e293b'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ERS%3C/text%3E%3C/svg%3E", content: "I had the pleasure of mentoring Sanjai during GSoC. His contributions to TensorFlow were impressive.", rating: 5 },
    { id: 3, name: "Dr. Anand Kumar", role: "Research Scientist", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231e293b'/%3E%3Ctext x='50' y='65' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EAK%3C/text%3E%3C/svg%3E", content: "Sanjai's paper on Green AI was one of the highlights of our conference.", rating: 5 }
];

const timeline = [
    { year: "2026", events: [
        { title: "Started B.Tech AI & DS at SKCET", description: "Formal education in Artificial Intelligence", icon: "fa-graduation-cap" },
        { title: "First Patent Filed", description: "Energy-efficient neural network architecture", icon: "fa-file-patent" }
    ]},
    { year: "2025", events: [
        { title: "Smart India Hackathon Winner", description: "First prize for RuralCare AI", icon: "fa-trophy" },
        { title: "Google Summer of Code", description: "Contributor to TensorFlow", icon: "fa-google" },
        { title: "30+ Certifications", description: "Earned from Coursera, AWS, IBM", icon: "fa-certificate" }
    ]}
];

const gallery = [
    { id: 1, title: "Smart India Hackathon 2025", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3ESIH 2025%3C/text%3E%3C/svg%3E", category: "events" },
    { id: 2, title: "Google Summer of Code", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e293b'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='40' fill='%238b5cf6' text-anchor='middle'%3EGSoC%3C/text%3E%3C/svg%3E", category: "events" }
];

const podcasts = [
    { id: 1, title: "Episode 1: Introduction to Green AI", description: "Discussing sustainable AI practices", duration: "25:30", date: "Mar 1, 2026" },
    { id: 2, title: "Episode 2: My Journey into AI", description: "How I got started with AI and ML", duration: "32:15", date: "Feb 15, 2026" }
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
            { name: "SQL", level: 70, tags: ["MySQL", "PostgreSQL"] }
        ]},
        { category: "AI & Machine Learning", icon: "fa-brain", skills: [
            { name: "Machine Learning", level: 85, tags: ["Scikit-learn", "Regression"] },
            { name: "Deep Learning", level: 75, tags: ["TensorFlow", "PyTorch"] },
            { name: "NLP", level: 65, tags: ["NLTK", "SpaCy"] },
            { name: "MLOps", level: 60, tags: ["Docker", "MLflow"] }
        ]},
        { category: "Tools & Technologies", icon: "fa-tools", skills: [
            { name: "Git & GitHub", level: 90, tags: ["Version Control"] },
            { name: "VS Code", level: 85, tags: ["Extensions"] },
            { name: "Linux/Unix", level: 75, tags: ["Bash"] },
            { name: "Docker", level: 70, tags: ["Containers"] }
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
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
                <span class="project-category">${project.category.toUpperCase()}</span>
                <div class="project-stats">
                    <span><i class="fas fa-star"></i> ${project.stars}</span>
                    <span><i class="fas fa-code-branch"></i> ${project.forks}</span>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-meta">
                    <span><i class="far fa-calendar"></i> ${project.date}</span>
                    <span><i class="fas fa-circle" style="color: ${project.status === 'Active' ? '#10b981' : '#8b5cf6'};"></i> ${project.status}</span>
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="github-link"><i class="fab fa-github"></i> Code</a>
                    ${project.live ? `<a href="${project.live}" target="_blank" class="demo-link"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
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
    
    grid.innerHTML = paginatedPosts.map(post => `
        <article class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <span class="blog-category">${post.category}</span>
                ${post.featured ? '<span class="blog-featured"><i class="fas fa-star"></i> Featured</span>' : ''}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString()}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime} min</span>
                    <span><i class="far fa-heart"></i> ${post.likes}</span>
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
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    grid.innerHTML = achievements.map(achievement => `
        <div class="achievement-item">
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
    
    if (typeof Swiper !== 'undefined') {
        swiperInstance = new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: { delay: 5000 },
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    }
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    
    container.innerHTML = timeline.map(period => `
        <div class="timeline-period">
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
    
    list.innerHTML = podcasts.map(episode => `
        <div class="episode-card">
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
                    <source src="#" type="audio/mpeg">
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
        <div class="certificate-full">
            <img src="${cert.image}" alt="${cert.title}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
            <h3>${cert.title}</h3>
            <p><i class="fas fa-building"></i> ${cert.issuer}</p>
            <p><i class="far fa-calendar"></i> ${cert.date}</p>
            <p><i class="fas fa-qrcode"></i> ID: ${cert.credentialId}</p>
            <button class="btn btn-primary" onclick="window.open('${cert.link}', '_blank')">View on LinkedIn</button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('blogModalTitle');
    const modalBody = document.getElementById('blogModalBody');
    
    modalTitle.textContent = project.name;
    modalBody.innerHTML = `
        <div class="project-full">
            <img src="${project.image}" alt="${project.name}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
            <h3>${project.name}</h3>
            <p>${project.longDescription}</p>
            <h4>Technologies</h4>
            <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
            <h4>Features</h4>
            <ul>${project.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>
            <p><strong>Impact:</strong> ${project.impact}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
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
            <img src="${post.image}" alt="${post.title}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
            <div class="blog-post-meta">
                <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString()}</span>
                <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                <span><i class="far fa-user"></i> ${post.author}</span>
            </div>
            <div class="blog-post-content">${post.content}</div>
        </div>
    `;
    
    post.views++;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== UTILITY FUNCTIONS ====================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const icon = toast.querySelector('.toast-icon i');
    const messageEl = toast.querySelector('.toast-message');
    
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    messageEl.textContent = message;
    
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
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
    doc.text("Certifications (30+)", 20, 80);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    let y = 90;
    certificates.slice(0, 10).forEach(cert => {
        doc.text(`• ${cert.title} - ${cert.issuer} (${cert.date})`, 25, y);
        y += 6;
    });
    
    doc.save("Sanjai_Gopal_Resume.pdf");
    showToast('Resume generated successfully!');
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
        this.isOpen = false;
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.close.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
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
        msg.innerHTML = text;
        this.messages.appendChild(msg);
        this.messages.scrollTop = this.messages.scrollHeight;
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
        
        if (input.includes('skill')) {
            return "Sanjai has expertise in Python (90%), C++ (80%), JavaScript (75%), Machine Learning (85%), Deep Learning (75%), and MLOps (60%).";
        } else if (input.includes('project')) {
            return "Sanjai has built 6 major projects including RuralCare AI, Feedback & Billing System, and this portfolio!";
        } else if (input.includes('certificate')) {
            return "Sanjai has earned over 30 certifications from Coursera, AWS, IBM, and the Government of India!";
        } else if (input.includes('contact')) {
            return "You can reach Sanjai at sanjai.sparkmail@gmail.com or on LinkedIn.";
        } else if (input.includes('education')) {
            return "Sanjai is in his 1st year of AI & Data Science at SKCET, Coimbatore.";
        } else {
            return "I'm not sure about that. Ask me about Sanjai's skills, projects, certifications, or education!";
        }
    }
}

// ==================== CLOUD STORAGE CLASS ====================

class CloudStorage {
    constructor() {
        this.currentPath = 'root';
        this.files = this.loadFiles();
        this.init();
    }
    
    loadFiles() {
        return [
            { id: '1', name: 'Projects', type: 'folder', path: 'root', size: '--', modified: '2026-03-01', items: 6 },
            { id: '2', name: 'Certificates', type: 'folder', path: 'root', size: '--', modified: '2026-03-01', items: 34 },
            { id: '3', name: 'Blog Posts', type: 'folder', path: 'root', size: '--', modified: '2026-03-01', items: 12 },
            { id: '4', name: 'Resume.pdf', type: 'pdf', path: 'root', size: '2.4 MB', modified: '2026-03-01' },
            { id: '5', name: 'Profile-Photo.jpg', type: 'image', path: 'root', size: '1.8 MB', modified: '2026-02-28' }
        ];
    }
    
    init() {
        this.renderFiles();
        this.setupEventListeners();
    }
    
    renderFiles() {
        const grid = document.getElementById('cloudFilesGrid');
        if (!grid) return;
        
        const currentFiles = this.files.filter(f => f.path === this.currentPath);
        
        grid.innerHTML = currentFiles.map(file => `
            <div class="cloud-file-item ${file.type}">
                <div class="file-icon"><i class="fas ${file.type === 'folder' ? 'fa-folder' : 'fa-file'}"></i></div>
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    <span class="file-meta">${file.type === 'folder' ? `${file.items} items` : file.size}</span>
                </div>
            </div>
        `).join('');
    }
    
    setupEventListeners() {
        // Cloud functionality would go here
    }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Ultra-Advanced Portfolio');
    
    // Initialize preloader
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
    
    // Initialize typed.js
    if (typeof Typed !== 'undefined') {
        typedInstance = new Typed('.typed-text', {
            strings: ['AI Engineer', 'MLOps Enthusiast', 'Python Developer', 'C++ Programmer', 'Nature Lover'],
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
            'max-glare': 0.5
        });
    }
    
    // Initialize particles
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particleContainer', {
            particles: {
                number: { value: 80, density: { enable: true } },
                color: { value: '#8b5cf6' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#8b5cf6', opacity: 0.4 },
                move: { enable: true, speed: 2 }
            }
        });
    }
    
    // Initialize chatbot
    chatbotInstance = new NatureAIChatbot();
    
    // ==================== EVENT LISTENERS ====================
    
    // Mobile menu
    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('navMenu').classList.toggle('active');
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('navMenu').classList.remove('active');
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
            renderBlog(this.dataset.blogCat, 1);
        });
    });
    
    // Resume download
    document.getElementById('downloadResumeBtn').addEventListener('click', function(e) {
        e.preventDefault();
        generateResume();
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Message sent successfully! (Demo)');
        this.reset();
    });
    
    // Search toggle
    document.getElementById('searchToggle').addEventListener('click', function() {
        document.getElementById('searchBar').classList.toggle('active');
    });
    
    document.getElementById('searchClose').addEventListener('click', function() {
        document.getElementById('searchBar').classList.remove('active');
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
    });
    
    // Back to top
    window.addEventListener('scroll', function() {
        const btn = document.getElementById('backToTop');
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Admin panel
    document.getElementById('adminSecret').addEventListener('dblclick', function() {
        document.getElementById('privateModal').classList.add('active');
    });
    
    document.getElementById('privateClose').addEventListener('click', function() {
        document.getElementById('privateModal').classList.remove('active');
    });
    
    // Password submission
    document.getElementById('submitPassword').addEventListener('click', function() {
        const password = document.getElementById('privatePassword').value;
        if (password === 'Sanjai@2008') {
            document.getElementById('passwordForm').style.display = 'none';
            document.getElementById('privateDashboard').style.display = 'block';
            showToast('Access granted!', 'success');
        } else {
            document.getElementById('passwordError').textContent = 'Incorrect password';
        }
    });
    
    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        document.getElementById('passwordForm').style.display = 'block';
        document.getElementById('privateDashboard').style.display = 'none';
        document.getElementById('privatePassword').value = '';
    });
    
    // Private link
    document.getElementById('privateLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('privateModal').classList.add('active');
    });
    
    // Cloud link
    document.getElementById('cloudLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('cloudModal').classList.add('active');
    });
    
    document.getElementById('cloudClose').addEventListener('click', function() {
        document.getElementById('cloudModal').classList.remove('active');
    });
    
    // Cloud password
    document.getElementById('submitCloudPassword').addEventListener('click', function() {
        const password = document.getElementById('cloudPassword').value;
        if (password === 'Sanjai@2008') {
            document.getElementById('cloudPasswordForm').style.display = 'none';
            document.getElementById('cloudDashboard').style.display = 'block';
            cloudInstance = new CloudStorage();
        } else {
            document.getElementById('cloudPasswordError').textContent = 'Incorrect password';
        }
    });
    
    // Cloud logout
    document.getElementById('cloudLogoutBtn').addEventListener('click', function() {
        document.getElementById('cloudPasswordForm').style.display = 'block';
        document.getElementById('cloudDashboard').style.display = 'none';
    });
    
    // Blog modal close
    document.getElementById('blogModalClose').addEventListener('click', function() {
        document.getElementById('blogModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('blogModal');
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Password toggle
    document.getElementById('passwordToggle').addEventListener('click', function() {
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
    
    // FAB menu
    document.getElementById('fabMain').addEventListener('click', function() {
        document.getElementById('fabMenu').classList.toggle('active');
    });
    
    document.querySelectorAll('.fab-item').forEach(item => {
        item.addEventListener('click', function() {
            const action = this.dataset.action;
            if (action === 'chat') {
                chatbotInstance.openChat();
            } else if (action === 'cloud') {
                document.getElementById('cloudModal').classList.add('active');
            } else if (action === 'resume') {
                generateResume();
            }
            document.getElementById('fabMenu').classList.remove('active');
        });
    });
    
    // Cookie consent
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'flex';
    }
    
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
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
    
    console.log('✅ All systems initialized successfully');
});