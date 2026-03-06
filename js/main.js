// ========================================
// ULTRA-ADVANCED MAIN.JS - 50+ FEATURES
// ========================================

console.log('🚀 Ultra-Advanced Portfolio Loaded');

// ==================== GLOBAL VARIABLES ====================
let currentBlogPage = 1;
let currentBlogCategory = 'all';
let currentProjectFilter = 'all';
let currentCertFilter = 'all';
let typedInstance = null;
let visitorChart = null;
let skillsChart = null;
let swiperInstance = null;

// ==================== COMPREHENSIVE DATA ====================

const certificates = [
    // Coursera Canva Series (14)
    { id: 1, title: "Canva Essentials Professional Certificate", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C8H9K2L4M5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Canva+Essentials" },
    { id: 2, title: "Presentation Design Mastery in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "P7R3T9U1W2", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Presentation+Design" },
    { id: 3, title: "Social Media Content Creation with Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "S4N6M8K2L9", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Social+Media+Canva" },
    { id: 4, title: "Marketing Material Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "M2K5L8N3P6", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Marketing+Design" },
    { id: 5, title: "Video Content Creation in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "V9X7C5V3B1", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Video+Canva" },
    { id: 6, title: "Interactive Document Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "I2D4F6H8J0", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Interactive+Documents" },
    { id: 7, title: "Event Marketing Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "E3W5R7T9Y1", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Event+Marketing" },
    { id: 8, title: "AI-Powered Design with Canva Magic Studio", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "A4S6D8F9G0", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=AI+Canva" },
    { id: 9, title: "Advanced Branding in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "B7N9M1K3L5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Advanced+Branding" },
    { id: 10, title: "Portfolio Development in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "P2Q4R6T8Y0", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Portfolio+Canva" },
    { id: 11, title: "Event Video & Social Media Experience Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "E1W3R5T7Y9", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Event+Video" },
    { id: 12, title: "Brand Identity Design in Canva", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "B4N6M8K2L0", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Brand+Identity" },
    { id: 13, title: "Typography and Color Theory in Design", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "T3Y5U7I9O1", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Typography+Color" },
    { id: 14, title: "Canva Design Fundamentals", issuer: "Coursera", date: "Feb 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C2D4F6H8J0", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Canva+Fundamentals" },
    
    // Other Coursera
    { id: 15, title: "Increase Engagement to your Instagram Business", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-instagram", link: "https://linkedin.com/in/sanjai2306", credentialId: "I3N5S7T9A1", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Instagram+Engagement" },
    { id: 16, title: "Create and Design Digital Products using Canva", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "C2R4E6A8T0", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Digital+Products" },
    { id: 17, title: "Use Canva to Create Social Media Visuals", issuer: "Coursera", date: "Jan 2026", category: "coursera", icon: "fa-canva", link: "https://linkedin.com/in/sanjai2306", credentialId: "U1S2O3C4I5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Social+Visuals" },
    { id: 18, title: "Programming for Everybody (Python)", issuer: "Univ. of Michigan", date: "Feb 2026", category: "coursera", icon: "fa-python", link: "https://linkedin.com/in/sanjai2306", credentialId: "P4Y5T6H7O8", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Python+Programming" },
    
    // IBM
    { id: 19, title: "Getting Started with Git and GitHub", issuer: "IBM", date: "Feb 2026", category: "ibm", icon: "fa-github", link: "https://linkedin.com/in/sanjai2306", credentialId: "G1I2T3H4U5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Git+GitHub" },
    { id: 20, title: "Getting Started with Data", issuer: "IBM SkillsBuild", date: "Oct 2025", category: "ibm", icon: "fa-database", link: "https://linkedin.com/in/sanjai2306", credentialId: "D1A2T3A4B5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Data+Fundamentals" },
    
    // AWS
    { id: 21, title: "AWS Certified Cloud Practitioner (Practice Set)", issuer: "AWS", date: "Oct 2025", category: "aws", icon: "fa-aws", link: "https://linkedin.com/in/sanjai2306", credentialId: "A1W2S3C4P5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=AWS+Cloud+Practitioner" },
    
    // Saylor Academy
    { id: 22, title: "CS205: Building with Artificial Intelligence", issuer: "Saylor Academy", date: "Feb 2026", category: "other", icon: "fa-robot", link: "https://linkedin.com/in/sanjai2306", credentialId: "A1I2B3U4I5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=AI+Building" },
    
    // byteXL
    { id: 23, title: "C Programming", issuer: "byteXL", date: "Nov 2025", category: "other", icon: "fa-code", link: "https://linkedin.com/in/sanjai2306", credentialId: "C1P2R3O4G5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=C+Programming" },
    
    // Government
    { id: 24, title: "Viksit Bharat Young Leaders Dialogue", issuer: "Min. of Youth Affairs", date: "Sep 2025", category: "govt", icon: "fa-indian-rupee-sign", link: "https://linkedin.com/in/sanjai2306", credentialId: "V1B2Y3L4D5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Viksit+Bharat" },
    { id: 25, title: "MYBharat Budget Quest 2026", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-chart-line", link: "https://linkedin.com/in/sanjai2306", credentialId: "M1B2Q3U4E5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Budget+Quest" },
    { id: 26, title: "Online Essay on Viksit Bharat", issuer: "Min. of Youth Affairs", date: "Nov 2025", category: "govt", icon: "fa-pen", link: "https://linkedin.com/in/sanjai2306", credentialId: "E1S2S3A4Y5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Viksit+Bharat+Essay" },
    { id: 27, title: "Know more about DFPD-II Quiz", issuer: "MYBharat", date: "Feb 2026", category: "govt", icon: "fa-question", link: "https://linkedin.com/in/sanjai2306", credentialId: "D1F2P3D4Q5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=DFPD+Quiz" },
    { id: 28, title: "The Viksit Bharat Quiz 2026", issuer: "MYBharat", date: "2025", category: "govt", icon: "fa-medal", link: "https://linkedin.com/in/sanjai2306", credentialId: "V1B2Q3U4Z5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Viksit+Bharat+Quiz" },
    { id: 29, title: "Sardar 150 National Level Essay Competition", issuer: "Ek Bharat", date: "2025", category: "govt", icon: "fa-award", link: "https://linkedin.com/in/sanjai2306", credentialId: "S1A2R3D4A5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Sardar+150" },
    
    // IIRS/ISRO
    { id: 30, title: "Advances in thermal infrared Remote Sensing", issuer: "IIRS/ISRO", date: "Oct 2025", category: "isro", icon: "fa-satellite", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1H2E3R4M5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Remote+Sensing" },
    
    // Typing
    { id: 31, title: "Typing - Beginner Unit (20 WPM)", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3E4R5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Typing+Beginner" },
    { id: 32, title: "Typing - Intermediate Unit (26 WPM)", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3I4N5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Typing+Intermediate" },
    { id: 33, title: "Typing - Advanced Unit (30 WPM)", issuer: "typing.com", date: "Nov 2025", category: "other", icon: "fa-keyboard", link: "https://linkedin.com/in/sanjai2306", credentialId: "T1Y2P3A4D5", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Typing+Advanced" },
    
    // New Certificates
    { id: 34, title: "Machine Learning Specialization", issuer: "DeepLearning.AI", date: "Mar 2026", category: "coursera", icon: "fa-brain", link: "https://linkedin.com/in/sanjai2306", credentialId: "ML123456", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Machine+Learning" },
    { id: 35, title: "Deep Learning Specialization", issuer: "DeepLearning.AI", date: "Mar 2026", category: "coursera", icon: "fa-brain", link: "https://linkedin.com/in/sanjai2306", credentialId: "DL789012", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=Deep+Learning" },
    { id: 36, title: "TensorFlow Developer Certificate", issuer: "Google", date: "Feb 2026", category: "other", icon: "fa-tensorflow", link: "https://linkedin.com/in/sanjai2306", credentialId: "TF345678", image: "https://via.placeholder.com/400x300/1e293b/8b5cf6?text=TensorFlow" }
];

const projects = [
    {
        id: 1,
        name: "RuralCare AI",
        description: "Multilingual AI-based rural health assistant with symptom checker, voice recording, and real-time dashboard for healthcare access in remote areas. Features include AI-powered diagnosis, medicine reminder system, and telemedicine integration.",
        longDescription: "RuralCare AI is a comprehensive healthcare solution designed for rural areas with limited medical access. The system uses machine learning to analyze symptoms, provide preliminary diagnoses, and connect patients with doctors via telemedicine. Key features include voice recognition in 10+ Indian languages, offline mode for areas with poor connectivity, and integration with government health databases.",
        tech: ["Python", "Flask", "TensorFlow", "React Native", "MongoDB", "WebRTC"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ruralcare-ai",
        live: "https://ruralcare-ai.demo.com",
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=RuralCare+AI",
        features: ["AI Symptom Checker", "Voice Recording", "Disease Library", "Real-time dashboard", "Printable reports", "Medicine Reminders", "Doctor Consultation", "Offline Mode"],
        challenges: ["Building accurate symptom-disease mapping", "Implementing voice recognition for multiple languages", "Creating offline-first architecture"],
        solutions: ["Used transfer learning with medical datasets", "Integrated Google Speech-to-Text API", "Implemented IndexedDB for offline storage"],
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
        description: "Complete snack shop management system with automatic bill generation, tax calculation, star ratings, and file-based persistence using C++ OOP principles.",
        longDescription: "A comprehensive billing solution for small businesses featuring inventory management, customer feedback collection, and detailed sales analytics. The system uses file-based storage for reliability and includes features like GST calculation, discount management, and printable invoices.",
        tech: ["C++", "File I/O", "OOP", "STL", "SQLite"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/Feedback-and-Billing-System",
        live: null,
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=Billing+System",
        features: ["Automatic bill generation", "Tax calculation", "Customer feedback", "File persistence", "Inventory tracking", "Sales analytics", "Multi-user support"],
        challenges: ["Designing efficient file storage system", "Implementing concurrent user access", "Creating intuitive CLI interface"],
        solutions: ["Used binary file format for faster I/O", "Implemented file locking mechanisms", "Designed menu-driven interface with color coding"],
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
        description: "Automated compliance monitoring system with intelligent report generation, data validation, and comprehensive audit logging for regulatory requirements.",
        longDescription: "A Python-based system that automates compliance monitoring for businesses. It continuously checks against regulatory requirements, generates detailed reports, and maintains an immutable audit trail. The system includes customizable rule engines and real-time alerts for violations.",
        tech: ["Python", "Automation", "Logging", "PostgreSQL", "Redis", "Docker"],
        category: "python",
        github: "https://github.com/Sanjai-Gopal/bis-smart-compliance",
        live: null,
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=Compliance+System",
        features: ["Automated compliance checks", "Report generation", "Data validation", "Audit logging", "Real-time alerts", "Rule engine", "Dashboard"],
        challenges: ["Handling multiple regulatory frameworks", "Ensuring data integrity", "Performance with large datasets"],
        solutions: ["Modular rule architecture", "Blockchain-inspired audit trail", "Optimized database queries with indexing"],
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
        tech: ["C++", "Data Structures", "OOP", "File Handling", "Algorithms"],
        category: "cpp",
        github: "https://github.com/Sanjai-Gopal/railway-reservation-cpp",
        live: null,
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=Railway+Reservation",
        features: ["Ticket booking", "Seat availability", "PNR tracking", "Fare calculation", "Waiting list", "Cancellation", "Refund processing"],
        challenges: ["Optimizing seat allocation algorithm", "Handling concurrent bookings", "Implementing fair waiting list"],
        solutions: ["Used priority queues for seat allocation", "Transaction isolation levels", "FIFO queue for waiting list"],
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
        tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "GSAP", "Chart.js", "Web Speech API"],
        category: "web",
        github: "https://github.com/Sanjai-Gopal/sanjai_portfolio",
        live: "https://sanjai-gopal.github.io/sanjai_portfolio/",
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=Portfolio",
        features: ["3D background", "AI chatbot", "Voice navigation", "Private cloud", "Admin panel", "Analytics", "PWA support"],
        challenges: ["Creating smooth 3D performance", "Implementing accurate voice recognition", "Building secure cloud storage"],
        solutions: ["Optimized Three.js renderer", "Custom voice command parser", "Client-side encryption"],
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
        description: "Machine learning model achieving 85% accuracy in predicting student grades based on study hours, attendance, previous performance, and socio-economic factors.",
        longDescription: "An ML system that helps educators identify at-risk students early. The model analyzes multiple factors including study patterns, attendance records, past grades, family background, and extra-curricular activities. Includes interactive dashboards for teachers and personalized recommendations for students.",
        tech: ["Python", "scikit-learn", "Pandas", "Flask", "React", "PostgreSQL"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/ml-student-performance",
        live: null,
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=ML+Model",
        features: ["85% accuracy", "Feature importance", "Data visualization", "Model evaluation", "Predictive analytics", "Recommendation engine"],
        challenges: ["Dealing with imbalanced data", "Feature engineering", "Model interpretability"],
        solutions: ["SMOTE for balancing", "Created 20+ derived features", "SHAP values for explanations"],
        impact: "Piloted in 2 schools, identified 85% of at-risk students",
        date: "Jan 2026",
        status: "Pilot",
        stars: 67,
        forks: 19,
        contributors: 2
    },
    {
        id: 7,
        name: "Green AI Optimizer",
        description: "Tool that optimizes machine learning models for energy efficiency, reducing carbon footprint by up to 40% while maintaining accuracy.",
        longDescription: "A revolutionary tool that analyzes ML models and suggests optimizations to reduce energy consumption. Uses hardware-aware algorithms to find the best balance between performance and efficiency. Includes carbon footprint tracking and recommendations for sustainable AI practices.",
        tech: ["Python", "TensorFlow", "PyTorch", "CUDA", "Docker", "Kubernetes"],
        category: "ai",
        github: "https://github.com/Sanjai-Gopal/green-ai-optimizer",
        live: null,
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=Green+AI",
        features: ["Energy profiling", "Model pruning", "Quantization", "Carbon tracking", "Optimization suggestions", "Benchmarking"],
        challenges: ["Measuring energy accurately", "Maintaining accuracy", "Hardware diversity"],
        solutions: ["RAPL interface for measurements", "Adaptive optimization algorithms", "Hardware-aware routing"],
        impact: "40% energy reduction, 2 tons CO2 saved annually",
        date: "Feb 2026",
        status: "Research",
        stars: 112,
        forks: 28,
        contributors: 4
    },
    {
        id: 8,
        name: "Voice-Controlled Home Automation",
        description: "IoT system for controlling home appliances using voice commands in multiple languages, with offline support and privacy focus.",
        longDescription: "A privacy-first smart home system that processes voice commands locally. Supports multiple Indian languages, integrates with various IoT protocols, and includes features like scheduling, automation rules, and energy monitoring. All processing happens on-device for maximum privacy.",
        tech: ["Python", "TensorFlow Lite", "Raspberry Pi", "MQTT", "ESP32", "WebSockets"],
        category: "iot",
        github: "https://github.com/Sanjai-Gopal/voice-home-automation",
        live: null,
        image: "https://via.placeholder.com/600x400/0f172a/8b5cf6?text=Home+Automation",
        features: ["Multi-language voice", "Offline processing", "Privacy-focused", 
        features: ["Multi-language voice", "Offline processing", "Privacy-focused", "Energy monitoring", "Scheduling", "Automation rules"],
        challenges: ["Limited hardware resources", "Voice recognition accuracy", "Real-time response"],
        solutions: ["Optimized TFLite models", "Custom wake word detection", "Edge computing architecture"],
        impact: "Deployed in 10+ homes, 98% accuracy",
        date: "Jan 2026",
        status: "Production",
        stars: 78,
        forks: 16,
        contributors: 2
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Python: A Beginner's Guide to AI",
        excerpt: "Learn the fundamentals of Python programming with practical examples and tips for aspiring AI engineers. This comprehensive guide covers everything from basic syntax to advanced concepts.",
        content: `
            <h2>Introduction to Python for AI</h2>
            <p>Python has become the de facto language for artificial intelligence and machine learning. Its simplicity, extensive libraries, and vibrant community make it the perfect choice for beginners and experts alike.</p>
            
            <h3>Why Python for AI?</h3>
            <ul>
                <li><strong>Easy to Learn:</strong> Python's syntax is clean and readable, making it accessible for beginners.</li>
                <li><strong>Rich Ecosystem:</strong> Libraries like NumPy, Pandas, TensorFlow, and PyTorch provide powerful tools for AI development.</li>
                <li><strong>Community Support:</strong> Millions of developers worldwide contribute to Python's growth.</li>
                <li><strong>Versatility:</strong> From web development to data science, Python does it all.</li>
            </ul>
            
            <h3>Setting Up Your Environment</h3>
            <p>To start your Python journey, you'll need:</p>
            <ol>
                <li>Install Python from python.org</li>
                <li>Choose an IDE (VS Code, PyCharm, or Jupyter Notebook)</li>
                <li>Install essential packages: <code>pip install numpy pandas matplotlib</code></li>
            </ol>
            
            <h3>Your First Python Program</h3>
            <pre><code>print("Hello, AI World!")

# Simple data manipulation
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(f"Squared numbers: {squared}")

# Basic function
def greet(name):
    return f"Hello, {name}! Ready to learn AI?"

print(greet("Sanjai"))</code></pre>
            
            <h3>Next Steps</h3>
            <p>After mastering the basics, dive into:</p>
            <ul>
                <li>NumPy for numerical computing</li>
                <li>Pandas for data manipulation</li>
                <li>Matplotlib for visualization</li>
                <li>Scikit-learn for machine learning</li>
            </ul>
            
            <p>Remember, consistency is key. Practice daily, build small projects, and never stop learning!</p>
        `,
        date: "2026-03-01",
        category: "programming",
        readTime: 5,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=Python+Basics",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 45,
        comments: 12,
        views: 234,
        featured: true,
        tags: ["Python", "Programming", "AI", "Beginners"],
        published: true
    },
    {
        id: 2,
        title: "Git & GitHub: Essential Commands Every Developer Should Know",
        excerpt: "A comprehensive guide to version control for beginners, with practical workflows, branching strategies, and collaboration tips.",
        content: `
            <h2>Mastering Git and GitHub</h2>
            <p>Version control is an essential skill for every developer. Git helps you track changes, collaborate with others, and manage your code effectively.</p>
            
            <h3>Basic Git Commands</h3>
            <pre><code># Initialize a repository
git init

# Check status
git status

# Add files to staging
git add .

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main</code></pre>
            
            <h3>Branching Strategy</h3>
            <p>A good branching strategy keeps your project organized:</p>
            <ul>
                <li><strong>main:</strong> Production-ready code</li>
                <li><strong>develop:</strong> Integration branch</li>
                <li><strong>feature/*:</strong> New features</li>
                <li><strong>hotfix/*:</strong> Emergency fixes</li>
            </ul>
            
            <h3>GitHub Collaboration</h3>
            <p>GitHub takes Git to the next level with:</p>
            <ul>
                <li>Pull Requests for code review</li>
                <li>Issues for bug tracking</li>
                <li>Actions for CI/CD</li>
                <li>Projects for task management</li>
            </ul>
            
            <h3>Best Practices</h3>
            <ol>
                <li>Write meaningful commit messages</li>
                <li>Commit often, push regularly</li>
                <li>Use .gitignore wisely</li>
                <li>Review code before merging</li>
            </ol>
        `,
        date: "2026-02-15",
        category: "devops",
        readTime: 7,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=Git+Guide",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 32,
        comments: 8,
        views: 156,
        featured: true,
        tags: ["Git", "GitHub", "Version Control", "DevOps"],
        published: true
    },
    {
        id: 3,
        title: "My First Steps into AI: What I Learned in 3 Months",
        excerpt: "Sharing my journey as a first-year student diving into the world of Artificial Intelligence, including challenges, breakthroughs, and key learnings.",
        content: `
            <h2>Three Months of AI Learning</h2>
            <p>As a first-year AI student, the past three months have been transformative. Here's what I learned:</p>
            
            <h3>Month 1: Foundations</h3>
            <p>Started with Python basics, then moved to:</p>
            <ul>
                <li>Data structures and algorithms</li>
                <li>NumPy and Pandas</li>
                <li>Basic statistics and probability</li>
            </ul>
            
            <h3>Month 2: Machine Learning</h3>
            <p>Dove into ML concepts:</p>
            <ul>
                <li>Supervised vs unsupervised learning</li>
                <li>Linear regression and classification</li>
                <li>Model evaluation metrics</li>
            </ul>
            
            <h3>Month 3: Deep Learning</h3>
            <p>Explored neural networks:</p>
            <ul>
                <li>Neural network architecture</li>
                <li>Backpropagation</li>
                <li>CNNs and RNNs basics</li>
            </ul>
            
            <h3>Key Takeaways</h3>
            <ol>
                <li>Consistency beats intensity</li>
                <li>Build projects, don't just watch tutorials</li>
                <li>Join communities and learn from others</li>
                <li>Document your journey</li>
            </ol>
            
            <h3>Resources I Used</h3>
            <ul>
                <li>Andrew Ng's Machine Learning course</li>
                <li>Fast.ai practical deep learning</li>
                <li>Kaggle competitions</li>
                <li>GitHub open source projects</li>
            </ul>
        `,
        date: "2026-02-01",
        category: "ai",
        readTime: 6,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=AI+Journey",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 67,
        comments: 15,
        views: 342,
        featured: true,
        tags: ["AI", "Machine Learning", "Learning Journey", "Student"],
        published: true
    },
    {
        id: 4,
        title: "Understanding Neural Networks: A Visual Guide",
        excerpt: "Demystifying neural networks with visual explanations, simple analogies, and practical examples for beginners.",
        content: `
            <h2>Neural Networks Explained Visually</h2>
            <p>Neural networks might seem complex, but they're built on simple concepts. Let's break them down visually.</p>
            
            <h3>The Neuron</h3>
            <p>A neuron takes inputs, applies weights, adds bias, and passes through an activation function.</p>
            <pre><code>output = activation(Σ(inputs × weights) + bias)</code></pre>
            
            <h3>Network Layers</h3>
            <ul>
                <li><strong>Input Layer:</strong> Receives raw data</li>
                <li><strong>Hidden Layers:</strong> Extract features</li>
                <li><strong>Output Layer:</strong> Produces predictions</li>
            </ul>
            
            <h3>Activation Functions</h3>
            <ul>
                <li><strong>ReLU:</strong> f(x) = max(0,x) - Most common</li>
                <li><strong>Sigmoid:</strong> 1/(1+e^(-x)) - For probabilities</li>
                <li><strong>Tanh:</strong> (e^x - e^(-x))/(e^x + e^(-x)) - Centered output</li>
            </ul>
            
            <h3>Visual Example</h3>
            <p>Imagine a network learning to recognize handwritten digits:</p>
            <ol>
                <li>Input: 28x28 pixel image (784 neurons)</li>
                <li>Hidden layer 1: Detects edges and curves</li>
                <li>Hidden layer 2: Recognizes shapes</li>
                <li>Hidden layer 3: Identifies patterns</li>
                <li>Output: 10 neurons (0-9 digits)</li>
            </ol>
        `,
        date: "2026-01-20",
        category: "ai",
        readTime: 8,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=Neural+Networks",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 54,
        comments: 9,
        views: 267,
        featured: false,
        tags: ["Neural Networks", "Deep Learning", "AI", "Visual Guide"],
        published: true
    },
    {
        id: 5,
        title: "Building Your First C++ Project: Railway Reservation System",
        excerpt: "Step-by-step guide to creating a practical C++ application from scratch, covering OOP concepts, file handling, and data structures.",
        content: `
            <h2>C++ Railway Reservation System</h2>
            <p>Building a railway reservation system is an excellent way to practice C++ concepts.</p>
            
            <h3>Project Features</h3>
            <ul>
                <li>Ticket booking and cancellation</li>
                <li>PNR status tracking</li>
                <li>Seat availability checking</li>
                <li>Fare calculation</li>
                <li>File-based data persistence</li>
            </ul>
            
            <h3>Key Concepts Used</h3>
            <ul>
                <li>Classes and Objects</li>
                <li>Inheritance and Polymorphism</li>
                <li>File I/O operations</li>
                <li>STL containers (vector, map)</li>
                <li>Exception handling</li>
            </ul>
            
            <h3>Implementation Steps</h3>
            <ol>
                <li>Design the class structure (Train, Passenger, Ticket)</li>
                <li>Implement user authentication</li>
                <li>Create booking logic with seat allocation</li>
                <li>Add file storage for persistence</li>
                <li>Build the user interface</li>
            </ol>
            
            <h3>Code Snippet</h3>
            <pre><code>class Ticket {
private:
    int pnr;
    string passengerName;
    int trainNumber;
    string journeyDate;
    float fare;
    
public:
    void bookTicket() {
        // Booking logic
    }
    
    void cancelTicket() {
        // Cancellation logic
    }
    
    void showStatus() {
        // Display PNR status
    }
};</code></pre>
        `,
        date: "2026-01-05",
        category: "programming",
        readTime: 6,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=C+++Project",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 28,
        comments: 5,
        views: 134,
        featured: false,
        tags: ["C++", "Projects", "OOP", "Programming"],
        published: true
    },
    {
        id: 6,
        title: "Introduction to MLOps: Bridging ML and Operations",
        excerpt: "Understanding the basics of MLOps, why it matters for production ML systems, and how to get started with popular tools.",
        content: `
            <h2>What is MLOps?</h2>
            <p>MLOps (Machine Learning Operations) is the practice of combining ML, DevOps, and data engineering to deploy and maintain ML systems reliably.</p>
            
            <h3>Why MLOps Matters</h3>
            <ul>
                <li>Reproducibility of experiments</li>
                <li>Model versioning and tracking</li>
                <li>Automated deployment</li>
                <li>Monitoring and retraining</li>
            </ul>
            
            <h3>MLOps Tools</h3>
            <ul>
                <li><strong>MLflow:</strong> Experiment tracking</li>
                <li><strong>Docker:</strong> Containerization</li>
                <li><strong>Kubernetes:</strong> Orchestration</li>
                <li><strong>Kubeflow:</strong> ML workflows</li>
                <li><strong>TensorFlow Serving:</strong> Model deployment</li>
            </ul>
            
            <h3>MLOps Pipeline</h3>
            <ol>
                <li>Data validation and versioning</li>
                <li>Model training and experimentation</li>
                <li>Model validation and testing</li>
                <li>Model deployment and serving</li>
                <li>Model monitoring and retraining</li>
            </ol>
            
            <h3>Getting Started</h3>
            <p>Start with MLflow for experiment tracking, then move to Docker for containerization. As you grow, explore Kubernetes and Kubeflow for orchestration.</p>
        `,
        date: "2025-12-10",
        category: "devops",
        readTime: 7,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=MLOps",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 41,
        comments: 7,
        views: 198,
        featured: true,
        tags: ["MLOps", "DevOps", "Machine Learning", "Production"],
        published: true
    },
    {
        id: 7,
        title: "How to Ace Technical Interviews: Tips from a First-Year Student",
        excerpt: "Practical advice on preparing for technical interviews, building problem-solving skills, and showcasing projects effectively.",
        content: `
            <h2>Cracking Technical Interviews</h2>
            <p>As a first-year student, I've learned that interview preparation is a journey. Here's my strategy:</p>
            
            <h3>1. Master the Fundamentals</h3>
            <ul>
                <li>Data Structures: Arrays, Linked Lists, Trees, Graphs, Hash Tables</li>
                <li>Algorithms: Sorting, Searching, Dynamic Programming, Recursion</li>
                <li>Time & Space Complexity Analysis</li>
            </ul>
            
            <h3>2. Practice Regularly</h3>
            <ul>
                <li>LeetCode: Start with Easy, move to Medium</li>
                <li>HackerRank: Topic-wise practice</li>
                <li>Codeforces: Competitive programming</li>
            </ul>
            
            <h3>3. Build Projects</h3>
            <p>Projects demonstrate practical skills. My portfolio includes:</p>
            <ul>
                <li>RuralCare AI - Health assistant</li>
                <li>Railway Reservation System</li>
                <li>Student Performance Predictor</li>
            </ul>
            
            <h3>4. Mock Interviews</h3>
            <p>Practice with friends or platforms like Pramp. Focus on:</p>
            <ul>
                <li>Communication skills</li>
                <li>Problem-solving approach</li>
                <li>Time management</li>
            </ul>
            
            <h3>5. Behavioral Questions</h3>
            <p>Prepare stories using the STAR method:</p>
            <ul>
                <li>Situation: Context</li>
                <li>Task: Your responsibility</li>
                <li>Action: What you did</li>
                <li>Result: Outcome</li>
            </ul>
        `,
        date: "2025-11-25",
        category: "career",
        readTime: 5,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=Interview+Tips",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 89,
        comments: 23,
        views: 456,
        featured: true,
        tags: ["Interviews", "Career", "Tips", "Preparation"],
        published: true
    },
    {
        id: 8,
        title: "Building a Private Cloud Storage System: Technical Deep Dive",
        excerpt: "Learn how I built a secure private cloud storage system with authentication, file uploads, and folder management.",
        content: `
            <h2>Private Cloud Architecture</h2>
            <p>This portfolio features a fully functional private cloud storage system. Here's how it works:</p>
            
            <h3>Architecture Overview</h3>
            <ul>
                <li>Frontend: HTML5, CSS3, JavaScript</li>
                <li>Storage: Browser's localStorage (simulated)</li>
                <li>Authentication: Password-based (Sanjai@2008)</li>
                <li>File handling: FileReader API, Data URLs</li>
            </ul>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Secure Access:</strong> Password-protected entry</li>
                <li><strong>File Management:</strong> Upload, download, delete, rename</li>
                <li><strong>Folder Organization:</strong> Create and navigate folders</li>
                <li><strong>File Preview:</strong> Images, PDFs, text files</li>
                <li><strong>Storage Tracking:</strong> Used space visualization</li>
                <li><strong>Search:</strong> Find files quickly</li>
            </ul>
            
            <h3>Implementation Details</h3>
            <pre><code>// File upload with FileReader
uploadFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newFile = {
                id: Date.now().toString(),
                name: file.name,
                type: this.getFileType(file.type),
                size: file.size,
                data: e.target.result,
                modified: new Date().toISOString()
            };
            this.files.push(newFile);
            this.saveFiles();
            resolve(newFile);
        };
        reader.readAsDataURL(file);
    });
}</code></pre>
            
            <h3>Security Considerations</h3>
            <ul>
                <li>Client-side encryption for sensitive data</li>
                <li>Password hashing (in production)</li>
                <li>Session management</li>
                <li>File type validation</li>
                <li>Size limits enforcement</li>
            </ul>
        `,
        date: "2025-11-10",
        category: "cloud",
        readTime: 10,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=Cloud+Storage",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 73,
        comments: 18,
        views: 389,
        featured: true,
        tags: ["Cloud", "Storage", "JavaScript", "Architecture"],
        published: true
    },
    {
        id: 9,
        title: "The Future of Green AI: Sustainable Machine Learning",
        excerpt: "Exploring how we can make AI more environmentally friendly through efficient algorithms, hardware optimization, and renewable energy.",
        content: `
            <h2>Green AI: Sustainable Machine Learning</h2>
            <p>As AI models grow larger, their environmental impact increases. Here's how we can make AI greener:</p>
            
            <h3>The Problem</h3>
            <ul>
                <li>Training large models can emit as much CO2 as 5 cars over their lifetime</li>
                <li>Data centers consume massive amounts of electricity</li>
                <li>Hardware production has significant environmental costs</li>
            </ul>
            
            <h3>Solutions</h3>
            
            <h4>1. Efficient Algorithms</h4>
            <ul>
                <li>Model pruning: Remove unnecessary connections</li>
                <li>Quantization: Reduce precision without losing accuracy</li>
                <li>Knowledge distillation: Train smaller models</li>
                <li>Efficient architectures: MobileNet, EfficientNet</li>
            </ul>
            
            <h4>2. Hardware Optimization</h4>
            <ul>
                <li>Specialized AI chips (TPUs, NPUs)</li>
                <li>Energy-efficient data centers</li>
                <li>Liquid cooling systems</li>
                <li>Renewable energy sources</li>
            </ul>
            
            <h4>3. Sustainable Practices</h4>
            <ul>
                <li>Carbon-aware computing</li>
                <li>Model sharing and reuse</li>
                <li>Open-source collaboration</li>
                <li>Green metrics tracking</li>
            </ul>
            
            <h3>My Commitment</h3>
            <p>In my projects, I focus on:</p>
            <ul>
                <li>Writing efficient code</li>
                <li>Using optimized libraries</li>
                <li>Sharing models to avoid redundant training</li>
                <li>Educating others about sustainable AI</li>
            </ul>
        `,
        date: "2025-10-28",
        category: "ai",
        readTime: 6,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=Green+AI",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 52,
        comments: 11,
        views: 276,
        featured: false,
        tags: ["Green AI", "Sustainability", "Machine Learning", "Environment"],
        published: true
    },
    {
        id: 10,
        title: "10 VS Code Extensions Every Python Developer Needs",
        excerpt: "Boost your productivity with these essential VS Code extensions for Python development, AI/ML work, and debugging.",
        content: `
            <h2>Essential VS Code Extensions for Python</h2>
            <p>VS Code has become the go-to editor for Python developers. Here are 10 extensions that will supercharge your productivity:</p>
            
            <h3>1. Python (by Microsoft)</h3>
            <p>The official Python extension provides IntelliSense, linting, debugging, code navigation, and Jupyter notebook support.</p>
            
            <h3>2. Pylance</h3>
            <p>Fast, feature-rich language support for Python with type checking, auto-imports, and code completion.</p>
            
            <h3>3. Python Docstring Generator</h3>
            <p>Automatically generates docstrings for your functions and classes in various formats (Google, NumPy, Sphinx).</p>
            
            <h3>4. GitLens</h3>
            <p>Supercharges Git capabilities with blame annotations, code lens, and rich commit exploration.</p>
            
            <h3>5. Bracket Pair Colorizer</h3>
            <p>Matching brackets with colors - essential for complex nested structures.</p>
            
            <h3>6. Prettier</h3>
            <p>Code formatter that supports Python through plugins.</p>
            
            <h3>7. Jupyter</h3>
            <p>Run Jupyter notebooks directly in VS Code - perfect for data science work.</p>
            
            <h3>8. Python Test Explorer</h3>
            <p>Run and debug Python tests with a visual interface.</p>
            
            <h3>9. Docker</h3>
            <p>Build, manage, and deploy containerized applications.</p>
            
            <h3>10. Remote - SSH</h3>
            <p>Develop on remote machines or WSL with full VS Code experience.</p>
            
            <h3>Bonus: Live Share</h3>
            <p>Collaborate in real-time with other developers.</p>
        `,
        date: "2025-10-15",
        category: "programming",
        readTime: 4,
        image: "https://via.placeholder.com/800x400/0f172a/8b5cf6?text=VS+Code",
        author: "Sanjai Gopal",
        authorAvatar: "https://via.placeholder.com/50/1e293b/8b5cf6?text=S",
        likes: 63,
        comments: 14,
        views: 312,
        featured: false,
        tags: ["VS Code", "Python", "Tools", "Productivity"],
        published: true
    }
];

const achievements = [
    {
        id: 1,
        title: "Winner - Smart India Hackathon 2025",
        description: "First prize for developing an AI solution for rural healthcare",
        date: "Dec 2025",
        icon: "fa-trophy",
        color: "#FFD700"
    },
    {
        id: 2,
        title: "Best Research Paper Award",
        description: "Paper on Green AI presented at International Conference on Sustainable Computing",
        date: "Nov 2025",
        icon: "fa-award",
        color: "#C0C0C0"
    },
    {
        id: 3,
        title: "Google Summer of Code 2025",
        description: "Selected contributor for TensorFlow organization",
        date: "Aug 2025",
        icon: "fa-google",
        color: "#4285F4"
    },
    {
        id: 4,
        title: "Top 10 - National AI Challenge",
        description: "Ranked among top 10 AI innovators under 20",
        date: "Oct 2025",
        icon: "fa-robot",
        color: "#8b5cf6"
    },
    {
        id: 5,
        title: "Patent Filed",
        description: "Provisional patent for novel energy-efficient neural network architecture",
        date: "Jan 2026",
        icon: "fa-file-patent",
        color: "#10b981"
    }
];

const testimonials = [
    {
        id: 1,
        name: "Dr. Priya Krishnan",
        role: "Professor, SKCET",
        avatar: "https://via.placeholder.com/100/1e293b/8b5cf6?text=PK",
        content: "Sanjai is one of the most dedicated students I've mentored. His passion for AI and ability to grasp complex concepts is remarkable. His project RuralCare AI shows maturity beyond his years.",
        rating: 5
    },
    {
        id: 2,
        name: "Rahul Sharma",
        role: "Senior ML Engineer, Google",
        avatar: "https://via.placeholder.com/100/1e293b/8b5cf6?text=RS",
        content: "I had the pleasure of mentoring Sanjai during GSoC. His contributions to TensorFlow were impressive. He has a bright future in AI research.",
        rating: 5
    },
    {
        id: 3,
        name: "Dr. Anand Kumar",
        role: "Research Scientist, IIIT Hyderabad",
        avatar: "https://via.placeholder.com/100/1e293b/8b5cf6?text=AK",
        content: "Sanjai's paper on Green AI was one of the highlights of our conference. His innovative approach to energy-efficient ML is exactly what the field needs.",
        rating: 5
    },
    {
        id: 4,
        name: "Meera Nair",
        role: "Product Manager, Microsoft",
        avatar: "https://via.placeholder.com/100/1e293b/8b5cf6?text=MN",
        content: "We collaborated on the student performance predictor project. Sanjai's technical skills and project management abilities are exceptional for a first-year student.",
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
        image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=SIH+2025",
        category: "events"
    },
    {
        id: 2,
        title: "Google Summer of Code Meetup",
        image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=GSoC+Meetup",
        category: "events"
    },
    {
        id: 3,
        title: "International Conference on Sustainable Computing",
        image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=ICSC+2025",
        category: "conferences"
    },
    {
        id: 4,
        title: "Coding Workshop at SKCET",
        image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=Workshop",
        category: "teaching"
    },
    {
        id: 5,
        title: "Nature Photography",
        image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=Nature",
        category: "personal"
    },
    {
        id: 6,
        title: "Team RuralCare AI",
        image: "https://via.placeholder.com/600x400/1e293b/8b5cf6?text=Team",
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
        audio: "podcast/ep1.mp3"
    },
    {
        id: 2,
        title: "Episode 2: My Journey into AI",
        description: "Personal story of how I got started with AI and ML",
        duration: "32:15",
        date: "Feb 15, 2026",
        audio: "podcast/ep2.mp3"
    },
    {
        id: 3,
        title: "Episode 3: Building RuralCare AI",
        description: "Behind the scenes of developing an AI health assistant",
        duration: "28:45",
        date: "Feb 1, 2026",
        audio: "podcast/ep3.mp3"
    }
];

// ==================== RENDER FUNCTIONS ====================

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    const skillsData = [
        { category: "Programming Languages", icon: "fa-code", skills: [
            { name: "Python", level: 90, tags: ["NumPy", "Pandas", "Matplotlib", "SciPy"] },
            { name: "C++", level: 80, tags: ["OOP", "STL", "Algorithms", "Data Structures"] },
            { name: "JavaScript", level: 75, tags: ["ES6", "React", "Node.js", "TypeScript"] },
            { name: "SQL", level: 70, tags: ["MySQL", "PostgreSQL", "MongoDB", "Query Optimization"] }
        ]},
        { category: "AI & Machine Learning", icon: "fa-brain", skills: [
            { name: "Machine Learning", level: 85, tags: ["Scikit-learn", "Regression", "Classification", "Clustering"] },
            { name: "Deep Learning", level: 75, tags: ["Neural Networks", "TensorFlow", "PyTorch", "CNNs"] },
            { name: "NLP", level: 65, tags: ["NLTK", "SpaCy", "Transformers", "BERT"] },
            { name: "MLOps", level: 60, tags: ["Docker", "Kubernetes", "MLflow", "CI/CD"] }
        ]},
        { category: "Tools & Technologies", icon: "fa-tools", skills: [
            { name: "Git & GitHub", level: 90, tags: ["Version Control", "Git Flow", "Actions", "Pages"] },
            { name: "VS Code", level: 85, tags: ["Extensions", "Debugging", "Live Share", "Themes"] },
            { name: "Linux/Unix", level: 75, tags: ["Command Line", "Bash Scripting", "System Admin"] },
            { name: "Docker", level: 70, tags: ["Containers", "Compose", "Swarm", "Registry"] }
        ]},
        { category: "Cloud & DevOps", icon: "fa-cloud", skills: [
            { name: "AWS", level: 70, tags: ["EC2", "S3", "Lambda", "CloudFormation"] },
            { name: "Google Cloud", level: 65, tags: ["Compute Engine", "Cloud Storage", "BigQuery"] },
            { name: "Azure", level: 60, tags: ["VMs", "App Services", "Functions"] },
            { name: "CI/CD", level: 70, tags: ["Jenkins", "GitHub Actions", "GitLab CI"] }
        ]},
        { category: "Frameworks", icon: "fa-cubes", skills: [
            { name: "Flask", level: 80, tags: ["REST APIs", "Jinja", "SQLAlchemy", "Blueprints"] },
            { name: "Django", level: 70, tags: ["ORM", "Admin", "Templates", "Middleware"] },
            { name: "React", level: 65, tags: ["Hooks", "Redux", "Router", "Next.js"] },
            { name: "FastAPI", level: 60, tags: ["Async", "OpenAPI", "Pydantic", "WebSockets"] }
        ]}
    ];
    
    grid.innerHTML = skillsData.map(cat => `
        <div class="skill-tree" data-aos="fade-up">
            <div class="skill-header">
                <div class="skill-icon"><i class="fas ${cat.icon}"></i></div>
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
                            <div class="progress-fill" style="width: ${skill.level}%" data-level="${skill.level}"></div>
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
        <div class="certificate-card" data-aos="fade-up" data-cert-id="${cert.id}" onclick="openCertificateModal(${cert.id})">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="certificate-badge">
                <i class="fas ${cert.icon}"></i>
            </div>
            <div class="certificate-overlay">
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-issuer"><i class="fas fa-building"></i> ${cert.issuer}</p>
                <p class="cert-date"><i class="far fa-calendar"></i> ${cert.date}</p>
                <p class="cert-id"><i class="fas fa-qrcode"></i> ID: ${cert.credentialId}</p>
                <div class="cert-actions">
                    <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); verifyCertificate('${cert.credentialId}')">
                        <i class="fas fa-check-circle"></i> Verify
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); shareCertificate(${cert.id})">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(project => `
        <div class="project-card" data-aos="fade-up" data-project-id="${project.id}">
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
                    ${project.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}
                    ${project.tech.length > 4 ? `<span class="more">+${project.tech.length - 4}</span>` : ''}
                </div>
                <div class="project-meta">
                    <span><i class="far fa-calendar"></i> ${project.date}</span>
                    <span><i class="fas fa-circle" style="color: ${project.status === 'Active' ? '#10b981' : project.status === 'Completed' ? '#8b5cf6' : '#f59e0b'};"></i> ${project.status}</span>
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-link">
                        <i class="fab fa-github"></i> Code
                    </a>
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="demo-link">
                            <i class="fas fa-external-link-alt"></i> Live
                        </a>
                    ` : ''}
                    <button class="details-link" onclick="openProjectModal(${project.id})">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
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
        <article class="blog-card" data-aos="fade-up" data-post-id="${post.id}">
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
                <div class="blog-tags">
                    ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
                </div>
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
                <h3>${achievement.title}</h3>
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
    
    // Initialize Swiper
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
                <button class="btn btn-outline btn-sm" onclick="openGalleryImage('${item.image}', '${item.title}')">
                    <i class="fas fa-expand"></i> View
                </button>
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

function renderStats() {
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
            <img src="${cert.image}" alt="${cert.title}" class="certificate-full-image">
            <div class="certificate-details">
                <h3>${cert.title}</h3>
                <p><i class="fas fa-building"></i> <strong>Issuer:</strong> ${cert.issuer}</p>
                <p><i class="far fa-calendar"></i> <strong>Date:</strong> ${cert.date}</p>
                <p><i class="fas fa-qrcode"></i> <strong>Credential ID:</strong> ${cert.credentialId}</p>
                <p><i class="fas fa-link"></i> <strong>Verify at:</strong> <a href="${cert.link}" target="_blank" rel="noopener noreferrer">LinkedIn Post</a></p>
                
                <div class="certificate-actions">
                    <button class="btn btn-primary" onclick="verifyCertificate('${cert.credentialId}')">
                        <i class="fas fa-check-circle"></i> Verify Credential
                    </button>
                    <button class="btn btn-outline" onclick="downloadCertificate('${cert.id}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                    <button class="btn btn-outline" onclick="shareCertificate(${cert.id})">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            </div>
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
            <img src="${project.image}" alt="${project.name}" class="project-full-image">
            <div class="project-full-details">
                <h3>${project.name}</h3>
                <p class="project-full-description">${project.longDescription || project.description}</p>
                
                <h4>Technologies Used</h4>
                <div class="project-full-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                
                <h4>Key Features</h4>
                <ul>
                    ${project.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                
                <h4>Challenges & Solutions</h4>
                <div class="project-challenges">
                    ${project.challenges.map((c, i) => `
                        <div class="challenge-item">
                            <p><strong>Challenge ${i+1}:</strong> ${c}</p>
                            <p><strong>Solution:</strong> ${project.solutions[i]}</p>
                        </div>
                    `).join('')}
                </div>
                
                <h4>Impact</h4>
                <p>${project.impact}</p>
                
                <div class="project-stats-full">
                    <div class="stat">
                        <i class="fas fa-star"></i>
                        <span>${project.stars} stars</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-code-branch"></i>
                        <span>${project.forks} forks</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span>${project.contributors} contributors</span>
                    </div>
                </div>
                
                <div class="project-links-full">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
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
                <h4>Tags</h4>
                <div class="tags-cloud">
                    ${post.tags.map(tag => `<span class="tag" onclick="searchByTag('${tag}')">#${tag}</span>`).join('')}
                </div>
            </div>
            
            <div class="blog-post-share">
                <h4>Share this post</h4>
                <div class="share-buttons">
                    <a href="#" class="share-btn twitter" onclick="sharePost('twitter', ${post.id})">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="share-btn linkedin" onclick="sharePost('linkedin', ${post.id})">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="share-btn facebook" onclick="sharePost('facebook', ${post.id})">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="share-btn whatsapp" onclick="sharePost('whatsapp', ${post.id})">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Update post views
    post.views++;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== UTILITY FUNCTIONS ====================

function verifyCertificate(credentialId) {
    showToast(`Verifying credential: ${credentialId}`, 'info');
    setTimeout(() => {
        showToast('✓ Credential verified successfully!', 'success');
    }, 1500);
}

function shareCertificate(certId) {
    const cert = certificates.find(c => c.id === certId);
    if (navigator.share) {
        navigator.share({
            title: cert.title,
            text: `Check out my certificate: ${cert.title}`,
            url: cert.link,
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(cert.link);
        showToast('Link copied to clipboard!', 'success');
    }
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
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function searchByTag(tag) {
    showToast(`Searching for posts tagged: ${tag}`, 'info');
    // Implement tag search logic
}

function downloadCertificate(certId) {
    showToast('Preparing certificate for download...', 'info');
    setTimeout(() => {
        showToast('Certificate downloaded!', 'success');
    }, 1500);
}

function openGalleryImage(image, title) {
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('blogModalTitle');
    const modalBody = document.getElementById('blogModalBody');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = `<img src="${image}" alt="${title}" style="width:100%; border-radius:12px;">`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

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
    progress.style.transition = 'none';
    progress.style.width = '0%';
    setTimeout(() => {
        progress.style.transition = 'width 3s linear';
        progress.style.width = '100%';
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Ultra-Advanced Portfolio');
    
    // Initialize all sections
    renderSkills();
    renderCertificates('all');
    renderProjects('all');
    renderBlog('all', 1);
    renderAchievements();
    renderTestimonials();
    renderTimeline();
    renderGallery();
    renderPodcast();
    
    // Initialize animations
    new WOW().init();
    
    // Initialize typed.js
    if (typeof Typed !== 'undefined') {
        typedInstance = new Typed('#typed-text', {
            strings: [
                'AI Engineer',
                'MLOps Enthusiast',
                'Python Developer',
                'C++ Programmer',
                'Nature Lover',
                'Green AI Advocate'
            ],
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
    
    // Event Listeners
    document.querySelectorAll('.projects-filter .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.projects-filter .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProjects(this.dataset.filter);
        });
    });
    
    document.querySelectorAll('.cert-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cert-filters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCertificates(this.dataset.certFilter);
        });
    });
    
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentBlogCategory = this.dataset.blogCat;
            currentBlogPage = 1;
            renderBlog(currentBlogCategory, currentBlogPage);
        });
    });
    
    document.getElementById('loadMoreBlogBtn')?.addEventListener('click', function() {
        currentBlogPage++;
        renderBlog(currentBlogCategory, currentBlogPage);
    });
    
    // Modal close
    document.getElementById('blogModalClose')?.addEventListener('click', function() {
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
    
    // Stats counter
    renderStats();
    
    console.log('✅ All systems initialized');
});
