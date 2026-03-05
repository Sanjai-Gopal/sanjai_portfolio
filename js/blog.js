// ========================================
// ADVANCED BLOG SYSTEM
// ========================================

class BlogSystem {
    constructor() {
        this.posts = this.loadPosts();
        this.categories = ['all', 'ai', 'programming', 'devops', 'career', 'cloud'];
        this.currentCategory = 'all';
        this.currentPage = 1;
        this.postsPerPage = 6;
        this.totalPosts = this.posts.length;
        this.init();
    }
    
    loadPosts() {
        // Try to load from localStorage first
        const saved = localStorage.getItem('blogPosts');
        if (saved) {
            return JSON.parse(saved);
        }
        
        // Default blog posts
        return [
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
                        <li>Install essential packages: pip install numpy pandas matplotlib</li>
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
                image: "assets/images/blog/python-basics.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                `,
                date: "2026-02-15",
                category: "devops",
                readTime: 7,
                image: "assets/images/blog/git-guide.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                `,
                date: "2026-02-01",
                category: "ai",
                readTime: 6,
                image: "assets/images/blog/ai-journey.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                `,
                date: "2026-01-20",
                category: "ai",
                readTime: 8,
                image: "assets/images/blog/neural-networks.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                `,
                date: "2026-01-05",
                category: "programming",
                readTime: 6,
                image: "assets/images/blog/cpp-project.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                        <li><strong>Kub                         <li><strong>Kubeflow:</strong> ML workflows on Kubernetes</li>
                        <li><strong>TensorFlow Serving:</strong> Model deployment</li>
                        <li><strong>Prometheus + Grafana:</strong> Monitoring</li>
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
                image: "assets/images/blog/mlops-intro.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                image: "assets/images/blog/interview-tips.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                    
                    <h3>Future Enhancements</h3>
                    <ul>
                        <li>Server backend with Node.js</li>
                        <li>Database storage (MongoDB/PostgreSQL)</li>
                        <li>File sharing with links</li>
                        <li>Real-time collaboration</li>
                        <li>Mobile app integration</li>
                    </ul>
                `,
                date: "2025-11-10",
                category: "cloud",
                readTime: 10,
                image: "assets/images/blog/cloud-storage.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
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
                image: "assets/images/blog/green-ai.jpg",
                author: "Sanjai Gopal",
                authorAvatar: "assets/images/profile/avatar.jpg",
                likes: 52,
                comments: 11,
                views: 276,
                featured: false,
                tags: ["Green AI", "Sustainability", "Machine Learning", "Environment"],
                published: true
            }
        ];
    }
    
    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
    }
    
    init() {
        this.renderCategories();
        this.renderPosts();
        this.setupEventListeners();
        this.updateStats();
    }
    
    renderCategories() {
        const container = document.querySelector('.blog-categories');
        if (!container) return;
        
        // Get unique categories from posts
        const categories = ['all', ...new Set(this.posts.map(p => p.category))];
        
        container.innerHTML = categories.map(cat => `
            <button class="blog-cat-btn ${cat === this.currentCategory ? 'active' : ''}" 
                    data-category="${cat}">
                ${cat.charAt(0).toUpperCase() + cat.slice(1)}
                <span class="cat-count">(${this.getCategoryCount(cat)})</span>
            </button>
        `).join('');
    }
    
    getCategoryCount(category) {
        if (category === 'all') return this.posts.length;
        return this.posts.filter(p => p.category === category).length;
    }
    
    renderPosts() {
        const grid = document.getElementById('blogGrid');
        if (!grid) return;
        
        const filtered = this.currentCategory === 'all' 
            ? this.posts 
            : this.posts.filter(p => p.category === this.currentCategory);
        
        const start = (this.currentPage - 1) * this.postsPerPage;
        const end = start + this.postsPerPage;
        const paginated = filtered.slice(start, end);
        
        if (paginated.length === 0 && this.currentPage > 1) {
            this.currentPage--;
            this.renderPosts();
            return;
        }
        
        grid.innerHTML = paginated.map(post => `
            <article class="blog-card" data-aos="fade-up" data-post-id="${post.id}">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}" onerror="this.src='assets/images/blog/placeholder.jpg'">
                    <span class="blog-category">${post.category.toUpperCase()}</span>
                    ${post.featured ? '<span class="blog-featured"><i class="fas fa-star"></i> Featured</span>' : ''}
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                        <span><i class="far fa-heart"></i> ${post.likes}</span>
                        <span><i class="far fa-comment"></i> ${post.comments}</span>
                        <span><i class="far fa-eye"></i> ${post.views}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
                    </div>
                    <div class="blog-footer">
                        <span class="blog-author">
                            <img src="${post.authorAvatar}" alt="${post.author}" onerror="this.src='assets/images/profile/avatar.jpg'">
                            ${post.author}
                        </span>
                        <button class="blog-read-more" onclick="blog.openPost(${post.id})">
                            Read More <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
        
        // Show/hide load more button
        const loadMoreBtn = document.getElementById('loadMoreBlogBtn');
        if (loadMoreBtn) {
            if (end >= filtered.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }
    }
    
    openPost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;
        
        // Increment view count
        post.views++;
        this.savePosts();
        
        const modal = document.getElementById('blogModal');
        const modalTitle = document.getElementById('blogModalTitle');
        const modalBody = document.getElementById('blogModalBody');
        
        modalTitle.textContent = post.title;
        modalBody.innerHTML = `
            <div class="blog-post-full">
                <img src="${post.image}" alt="${post.title}" class="blog-post-image" onerror="this.src='assets/images/blog/placeholder.jpg'">
                
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
                        ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="blog-post-share">
                    <h4>Share this post</h4>
                    <div class="share-buttons">
                        <a href="#" class="share-btn twitter" onclick="blog.share('twitter', ${post.id})">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="share-btn linkedin" onclick="blog.share('linkedin', ${post.id})">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="share-btn facebook" onclick="blog.share('facebook', ${post.id})">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="share-btn whatsapp" onclick="blog.share('whatsapp', ${post.id})">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="#" class="share-btn copy" onclick="blog.copyLink(${post.id})">
                            <i class="fas fa-link"></i>
                        </a>
                    </div>
                </div>
                
                <div class="blog-post-author">
                    <div class="author-card">
                        <img src="${post.authorAvatar}" alt="${post.author}">
                        <div class="author-info">
                            <h4>${post.author}</h4>
                            <p>AI Engineering student at SKCET. Passionate about sustainable AI and nature-inspired technology.</p>
                            <div class="author-social">
                                <a href="#"><i class="fab fa-github"></i></a>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="blog-post-comments">
                    <h4>Comments (${post.comments})</h4>
                    
                    <div class="comments-list" id="commentsList-${post.id}">
                        ${this.renderComments(post.id)}
                    </div>
                    
                    <div class="comment-form">
                        <h5>Leave a comment</h5>
                        <textarea id="commentContent-${post.id}" placeholder="Share your thoughts..."></textarea>
                        <button class="btn btn-primary" onclick="blog.addComment(${post.id})">
                            Post Comment
                        </button>
                    </div>
                </div>
                
                <div class="blog-related-posts">
                    <h4>Related Posts</h4>
                    <div class="related-grid">
                        ${this.getRelatedPosts(post).map(related => `
                            <div class="related-card" onclick="blog.openPost(${related.id})">
                                <img src="${related.image}" alt="${related.title}">
                                <h5>${related.title}</h5>
                                <span>${related.readTime} min read</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    renderComments(postId) {
        // Simulated comments
        const comments = [
            {
                id: 1,
                author: "Priya K.",
                avatar: "assets/images/profile/avatar2.jpg",
                date: "2026-03-02",
                content: "Great article! Really helpful for beginners.",
                likes: 5
            },
            {
                id: 2,
                author: "Rahul M.",
                avatar: "assets/images/profile/avatar3.jpg",
                date: "2026-03-01",
                content: "Thanks for sharing your experience. Looking forward to more content!",
                likes: 3
            }
        ];
        
        return comments.map(comment => `
            <div class="comment">
                <img src="${comment.avatar}" alt="${comment.author}" class="comment-avatar">
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-date">${new Date(comment.date).toLocaleDateString()}</span>
                    </div>
                    <p class="comment-text">${comment.content}</p>
                    <div class="comment-actions">
                        <button class="comment-like"><i class="far fa-heart"></i> ${comment.likes}</button>
                        <button class="comment-reply"><i class="far fa-comment"></i> Reply</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    addComment(postId) {
        const textarea = document.getElementById(`commentContent-${postId}`);
        const content = textarea.value.trim();
        
        if (!content) {
            alert('Please enter a comment');
            return;
        }
        
        // In a real app, this would send to backend
        const post = this.posts.find(p => p.id === postId);
        post.comments++;
        this.savePosts();
        
        this.showToast('Comment posted successfully!', 'success');
        textarea.value = '';
        
        // Refresh comments (simulated)
        setTimeout(() => {
            if (document.getElementById(`commentsList-${postId}`)) {
                this.openPost(postId); // Refresh modal
            }
        }, 500);
    }
    
    getRelatedPosts(currentPost) {
        return this.posts
            .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
            .slice(0, 3);
    }
    
    share(platform, postId) {
        const post = this.posts.find(p => p.id === postId);
        const url = window.location.href + '#blog';
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
    
    copyLink(postId) {
        const url = window.location.href + '#blog';
        navigator.clipboard.writeText(url).then(() => {
            this.showToast('Link copied to clipboard!', 'success');
        });
    }
    
    loadMore() {
        this.currentPage++;
        this.renderPosts();
    }
    
    filterByCategory(category) {
        this.currentCategory = category;
        this.currentPage = 1;
        this.renderCategories();
        this.renderPosts();
        
        // Update URL hash for sharing
        window.location.hash = `blog-${category}`;
    }
    
    search(query) {
        if (!query) {
            this.filterByCategory('all');
            return;
        }
        
        const searchResults = this.posts.filter(post => 
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            post.content.toLowerCase().includes(query.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        
        const grid = document.getElementById('blogGrid');
        if (searchResults.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try different keywords or browse all posts</p>
                    <button class="btn btn-outline" onclick="blog.filterByCategory('all')">
                        View All Posts
                    </button>
                </div>
            `;
        } else {
            this.currentCategory = 'search';
            this.currentPage = 1;
            this.renderSearchResults(searchResults);
        }
    }
    
    renderSearchResults(results) {
        const grid = document.getElementById('blogGrid');
        
        grid.innerHTML = results.map(post => `
            <article class="blog-card" data-post-id="${post.id}">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="blog-category">${post.category.toUpperCase()}</span>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString()}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <button class="blog-read-more" onclick="blog.openPost(${post.id})">
                        Read More <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </article>
        `).join('');
    }
    
    updateStats() {
        const footerBlogs = document.getElementById('footerBlogs');
        if (footerBlogs) {
            footerBlogs.textContent = this.posts.length;
        }
        
        const statBlogs = document.getElementById('statBlogs');
        if (statBlogs) {
            statBlogs.textContent = this.posts.length;
        }
    }
    
    setupEventListeners() {
        // Category filter
        document.querySelectorAll('.blog-cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.closest('.blog-cat-btn').dataset.category;
                this.filterByCategory(category);
            });
        });
        
        // Load more button
        document.getElementById('loadMoreBlogBtn')?.addEventListener('click', () => {
            this.loadMore();
        });
        
        // Search input (if exists)
        const searchInput = document.getElementById('blogSearchInput');
        if (searchInput) {
            let timeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    this.search(e.target.value);
                }, 300);
            });
        }
        
        // Modal close
        document.getElementById('blogModalClose')?.addEventListener('click', () => {
            document.getElementById('blogModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Click outside modal to close
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('blogModal');
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Handle URL hash for deep linking
        if (window.location.hash.startsWith('#blog-')) {
            const category = window.location.hash.replace('#blog-', '');
            if (this.categories.includes(category)) {
                setTimeout(() => {
                    this.filterByCategory(category);
                }, 500);
            }
        }
    }
    
    showToast(message, type = 'success') {
        const toast = document.getElementById('toastNotification');
        const icon = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        icon.className = `toast-icon ${type}`;
        icon.innerHTML = type === 'success' ? '<i class="fas fa-check-circle"></i>' :
                         type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' :
                         '<i class="fas fa-info-circle"></i>';
        
        messageEl.textContent = message;
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// Initialize blog
let blog;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    blog = new BlogSystem();
    
    // Make blog globally accessible
    window.blog = blog;
});
