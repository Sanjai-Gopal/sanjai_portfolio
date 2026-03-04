/* ========================================
   BLOG.JS - Blog System with Markdown Support
   ======================================== */

class BlogSystem {
    constructor() {
        this.posts = [];
        this.currentPage = 1;
        this.postsPerPage = 6;
        this.searchTerm = '';
        this.activeCategory = 'all';
        
        this.init();
    }

    async init() {
        await this.loadPosts();
        this.renderPosts();
        this.initSearch();
        this.initCategories();
        this.initPagination();
        this.initNewsletter();
    }

    async loadPosts() {
        // Simulated blog posts (can be fetched from JSON API)
        this.posts = [
            {
                id: 1,
                title: 'Getting Started with Python: A Beginner\'s Guide',
                slug: 'python-basics',
                excerpt: 'Learn the fundamentals of Python programming with practical examples and tips for aspiring AI engineers.',
                content: `
# Getting Started with Python

Python is one of the most versatile and beginner-friendly programming languages. As an aspiring AI engineer, mastering Python is your first step into the world of artificial intelligence.

## Why Python?

- **Easy to Learn**: Python's syntax is clean and readable
- **Rich Ecosystem**: Extensive libraries for AI/ML (NumPy, Pandas, TensorFlow)
- **Community Support**: Large community means plenty of resources
- **Versatility**: Web development, data science, automation, and more

## Setting Up Python

1. Download Python from python.org
2. Install an IDE (VS Code recommended)
3. Set up virtual environments
4. Install essential packages: \`pip install numpy pandas matplotlib\`

## Your First Python Program

\`\`\`python
print("Hello, World!")

# Simple data structures
name = "Sanjai"
age = 19
skills = ["Python", "C++", "JavaScript"]

print(f"My name is {name} and I'm {age} years old")
print(f"I know: {', '.join(skills)}")
\`\`\`

## Next Steps

- Practice coding daily
- Build small projects
- Join coding communities
- Contribute to open source

Remember, consistency is key. Happy coding! 🐍
                `,
                author: 'Sanjai Gopal',
                date: '2026-03-01',
                category: 'Programming',
                tags: ['Python', 'Beginners', 'Tutorial'],
                image: 'assets/images/blog/python-basics.jpg',
                readTime: 5,
                featured: true,
                comments: []
            },
            {
                id: 2,
                title: 'Git & GitHub: Essential Commands Every Developer Should Know',
                slug: 'git-guide',
                excerpt: 'A comprehensive guide to version control for beginners, with practical workflows and tips.',
                content: `
# Git & GitHub Guide

Version control is an essential skill for every developer. Git helps you track changes, collaborate with others, and manage your code effectively.

## Essential Git Commands

### Configuration
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

### Basic Workflow
\`\`\`bash
# Initialize repository
git init

# Add files to staging
git add .

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main
\`\`\`

### Branching
\`\`\`bash
# Create branch
git branch feature

# Switch branch
git checkout feature

# Merge branch
git merge feature
\`\`\`

## GitHub Best Practices

1. Write meaningful commit messages
2. Use .gitignore properly
3. Create detailed README files
4. Use branches for features
5. Review code before merging

## Pro Tips

- Use \`git status\` frequently
- Learn to resolve merge conflicts
- Use \`git stash\` to save temporary changes
- Write good commit messages

Start using Git today and never lose your code again! 🚀
                `,
                author: 'Sanjai Gopal',
                date: '2026-02-15',
                category: 'DevOps',
                tags: ['Git', 'GitHub', 'Version Control'],
                image: 'assets/images/blog/git-guide.jpg',
                readTime: 7,
                featured: true,
                comments: []
            },
            {
                id: 3,
                title: 'My First Steps into AI: What I Learned in 3 Months',
                slug: 'ai-journey',
                excerpt: 'Sharing my journey as a first-year student diving into the world of Artificial Intelligence.',
                content: `
# My AI Journey

Three months ago, I started my journey into Artificial Intelligence with zero knowledge. Here's what I learned along the way.

## Month 1: Foundations

I began with the basics:
- Python programming fundamentals
- Mathematics (linear algebra, calculus)
- Data structures and algorithms

## Month 2: Machine Learning

Dove into machine learning concepts:
- Supervised vs unsupervised learning
- Linear and logistic regression
- Decision trees and random forests
- Model evaluation metrics

## Month 3: Deep Learning

Explored neural networks:
- Perceptrons and activation functions
- Backpropagation
- CNN basics
- TensorFlow playground

## Key Takeaways

1. **Start with fundamentals** - Don't rush into advanced topics
2. **Practice daily** - Code every day, even if it's small
3. **Build projects** - Apply what you learn
4. **Join communities** - Learn from others
5. **Stay curious** - AI is constantly evolving

## Resources I Found Helpful

- Coursera's ML course by Andrew Ng
- Fast.ai practical deep learning
- Kaggle competitions
- YouTube tutorials

The journey is just beginning! 🌟
                `,
                author: 'Sanjai Gopal',
                date: '2026-02-01',
                category: 'AI/ML',
                tags: ['AI', 'Machine Learning', 'Journey'],
                image: 'assets/images/blog/ai-journey.jpg',
                readTime: 6,
                featured: true,
                comments: []
            },
            {
                id: 4,
                title: 'Understanding Neural Networks: A Visual Guide',
                slug: 'neural-networks',
                excerpt: 'Demystifying neural networks with visual explanations and simple analogies.',
                content: `
# Understanding Neural Networks

Neural networks might sound complicated, but they're actually quite intuitive. Let's break them down with visual examples.

## What is a Neural Network?

Think of it as a digital brain:
- **Neurons** = Processing units
- **Connections** = Pathways for information
- **Weights** = Importance of connections
- **Activation** = Decision making

## Basic Architecture

\`\`\`
Input Layer → Hidden Layers → Output Layer
    [x1] → [h1] → [h1] → [y1]
    [x2] → [h2] → [h2] → [y2]
    [x3] → [h3] → [h3]
\`\`\`

## How Learning Works

1. **Forward Propagation**: Input flows through network
2. **Calculate Error**: Compare output with expected
3. **Backpropagation**: Error flows backwards
4. **Update Weights**: Adjust connections

## Simple Example

\`\`\`python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

class SimpleNeuron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias
    
    def forward(self, inputs):
        return sigmoid(np.dot(inputs, self.weights) + self.bias)
\`\`\`

## Visual Learning Tips

- Draw diagrams
- Use interactive tools (TensorFlow Playground)
- Start with simple problems
- Visualize with Matplotlib

Neural networks are just math with style! 🎨
                `,
                author: 'Sanjai Gopal',
                date: '2026-01-20',
                category: 'AI/ML',
                tags: ['Neural Networks', 'Deep Learning', 'Tutorial'],
                image: 'assets/images/blog/neural-networks.jpg',
                readTime: 8,
                featured: false,
                comments: []
            },
            {
                id: 5,
                title: 'Building Your First C++ Project',
                slug: 'cpp-project',
                excerpt: 'Step-by-step guide to creating a practical C++ application from scratch.',
                content: `
# Building Your First C++ Project

C++ is powerful but can be intimidating. Let's build a practical project to learn the ropes.

## Project: Student Management System

We'll build a system that:
- Stores student records
- Calculates grades
- Generates reports

## Project Structure

\`\`\`
student-management/
├── src/
│   ├── main.cpp
│   ├── student.cpp
│   └── grade.cpp
├── include/
│   ├── student.h
│   └── grade.h
├── data/
└── Makefile
\`\`\`

## Key Concepts Covered

### Classes and Objects
\`\`\`cpp
class Student {
private:
    string name;
    int rollNumber;
    vector<float> grades;
    
public:
    Student(string n, int roll) {
        name = n;
        rollNumber = roll;
    }
    
    void addGrade(float grade) {
        grades.push_back(grade);
    }
};
\`\`\`

### File I/O
\`\`\`cpp
#include <fstream>

void saveToFile(Student s) {
    ofstream file("students.txt", ios::app);
    file << s.getName() << "," << s.getAverage() << endl;
    file.close();
}
\`\`\`

## Building and Running

\`\`\`bash
# Compile
g++ src/*.cpp -o student-system

# Run
./student-system
\`\`\`

## Tips for Success

1. Start with a simple design
2. Use header files properly
3. Learn to use make
4. Debug with GDB
5. Write comments

C++ rewards practice and patience! 💪
                `,
                author: 'Sanjai Gopal',
                date: '2026-01-05',
                category: 'Programming',
                tags: ['C++', 'Project', 'Tutorial'],
                image: 'assets/images/blog/cpp-project.jpg',
                readTime: 6,
                featured: false,
                comments: []
            },
            {
                id: 6,
                title: 'Introduction to MLOps: Bridging ML and Operations',
                slug: 'mlops-intro',
                excerpt: 'Understanding the basics of MLOps and why it matters for production ML systems.',
                content: `
# Introduction to MLOps

MLOps is the intersection of Machine Learning, DevOps, and Data Engineering. It's crucial for deploying and maintaining ML systems in production.

## What is MLOps?

MLOps (Machine Learning Operations) is a set of practices that aims to:
- Deploy ML models reliably
- Monitor model performance
- Maintain ML systems
- Automate the ML lifecycle

## Key Components

### 1. Version Control
- Code versioning (Git)
- Data versioning (DVC)
- Model versioning

### 2. CI/CD for ML
\`\`\`yaml
# Example GitHub Actions workflow
name: ML Pipeline
on: [push]
jobs:
  train:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout
      - name: Train model
        run: python train.py
      - name: Test model
        run: python test.py
\`\`\`

### 3. Model Registry
Track model versions, metadata, and performance

### 4. Monitoring
- Data drift detection
- Model performance decay
- System health checks

## MLOps Tools

- **Experiment Tracking**: MLflow, Weights & Biases
- **Orchestration**: Kubeflow, Airflow
- **Deployment**: TensorFlow Serving, TorchServe
- **Monitoring**: Prometheus, Grafana

## Getting Started

1. Version your code and data
2. Automate training pipeline
3. Implement model validation
4. Set up monitoring
5. Create feedback loops

MLOps is the future of ML engineering! 🚀
                `,
                author: 'Sanjai Gopal',
                date: '2025-12-10',
                category: 'MLOps',
                tags: ['MLOps', 'DevOps', 'Machine Learning'],
                image: 'assets/images/blog/mlops-intro.jpg',
                readTime: 7,
                featured: true,
                comments: []
            }
        ];
    }

    renderPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        const filteredPosts = this.filterPosts();
        const paginatedPosts = this.paginatePosts(filteredPosts);

        if (paginatedPosts.length === 0) {
            blogGrid.innerHTML = '<div class="no-posts"><i class="fas fa-search"></i><p>No posts found</p></div>';
            return;
        }

        blogGrid.innerHTML = paginatedPosts.map(post => `
            <article class="blog-card" data-aos="fade-up">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                    <div class="blog-category">${post.category}</div>
                    ${post.featured ? '<div class="blog-featured"><i class="fas fa-star"></i> Featured</div>' : ''}
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime} min read</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="blog/${post.slug}.html" class="blog-read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `).join('');

        this.renderPagination(filteredPosts.length);
    }

    filterPosts() {
        return this.posts.filter(post => {
            // Filter by search term
            if (this.searchTerm && !post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) && 
                !post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
                !post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))) {
                return false;
            }

            // Filter by category
            if (this.activeCategory !== 'all' && post.category !== this.activeCategory) {
                return false;
            }

            return true;
        });
    }

    paginatePosts(posts) {
        const start = (this.currentPage - 1) * this.postsPerPage;
        return posts.slice(start, start + this.postsPerPage);
    }

    initSearch() {
        const searchInput = document.querySelector('.blog-search');
        if (!searchInput) return;

        let timeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.searchTerm = e.target.value;
                this.currentPage = 1;
                this.renderPosts();
            }, 300);
        });
    }

    initCategories() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.activeCategory = btn.dataset.category;
                this.currentPage = 1;
                this.renderPosts();
            });
        });
    }

    initPagination() {
        const paginationContainer = document.querySelector('.blog-pagination');
        if (!paginationContainer) return;
    }

    renderPagination(totalPosts) {
        const paginationContainer = document.querySelector('.blog-pagination');
        if (!paginationContainer) return;

        const totalPages = Math.ceil(totalPosts / this.postsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let paginationHTML = '<div class="pagination">';
        
        // Previous button
        paginationHTML += `
            <button class="page-btn ${this.currentPage === 1 ? 'disabled' : ''}" 
                    ${this.currentPage === 1 ? 'disabled' : ''} 
                    data-page="${this.currentPage - 1}">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                    <button class="page-btn ${i === this.currentPage ? 'active' : ''}" data-page="${i}">
                        ${i}
                    </button>
                `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<span class="page-dots">...</span>';
            }
        }

        // Next button
        paginationHTML += `
            <button class="page-btn ${this.currentPage === totalPages ? 'disabled' : ''}" 
                    ${this.currentPage === totalPages ? 'disabled' : ''} 
                    data-page="${this.currentPage + 1}">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

        paginationHTML += '</div>';
        paginationContainer.innerHTML = paginationHTML;

        // Add event listeners
        paginationContainer.querySelectorAll('.page-btn:not(.disabled)').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentPage = parseInt(btn.dataset.page);
                this.renderPosts();
                window.scrollTo({ top: document.querySelector('.blog').offsetTop - 100, behavior: 'smooth' });
            });
        });
    }

    initNewsletter() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;

            // Validate email
            if (!this.isValidEmail(email)) {
                this.showNotification('Please enter a valid email', 'error');
                return;
            }

            // Simulate subscription
            this.showNotification('Successfully subscribed to newsletter!', 'success');
            newsletterForm.reset();
        });
    }

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.blogSystem = new BlogSystem();
});
