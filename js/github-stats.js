/* ========================================
   GITHUB-STATS.JS - Live GitHub Statistics
   ======================================== */

class GitHubStats {
    constructor() {
        this.username = 'Sanjai-Gopal';
        this.apiBase = 'https://api.github.com';
        this.cacheKey = 'githubStats';
        this.cacheTime = 3600000; // 1 hour
        
        this.init();
    }

    async init() {
        try {
            const stats = await this.fetchStats();
            this.updateUI(stats);
        } catch (error) {
            console.error('Failed to fetch GitHub stats:', error);
            this.useFallbackData();
        }
    }

    async fetchStats() {
        // Check cache first
        const cached = this.getCachedData();
        if (cached) return cached;

        try {
            // Fetch user data
            const userResponse = await fetch(`${this.apiBase}/users/${this.username}`);
            const userData = await userResponse.json();

            // Fetch repos
            const reposResponse = await fetch(`${this.apiBase}/users/${this.username}/repos?per_page=100`);
            const reposData = await reposResponse.json();

            // Fetch contributions (using GitHub's graphql API would be better but requires auth)
            const eventsResponse = await fetch(`${this.apiBase}/users/${this.username}/events/public?per_page=100`);
            const eventsData = await eventsResponse.json();

            // Calculate stats
            const stats = {
                publicRepos: userData.public_repos,
                followers: userData.followers,
                following: userData.following,
                totalStars: reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0),
                totalForks: reposData.reduce((sum, repo) => sum + repo.forks_count, 0),
                totalWatchers: reposData.reduce((sum, repo) => sum + repo.watchers_count, 0),
                totalCommits: this.calculateCommits(eventsData),
                languages: this.extractLanguages(reposData),
                topRepos: this.getTopRepos(reposData),
                contributionCount: this.calculateContributions(eventsData)
            };

            // Cache the data
            this.cacheData(stats);

            return stats;
        } catch (error) {
            console.error('GitHub API error:', error);
            throw error;
        }
    }

    calculateCommits(events) {
        const pushEvents = events.filter(e => e.type === 'PushEvent');
        return pushEvents.reduce((sum, e) => sum + (e.payload?.size || 0), 0);
    }

    calculateContributions(events) {
        const uniqueDays = new Set();
        events.forEach(e => {
            const date = new Date(e.created_at).toDateString();
            uniqueDays.add(date);
        });
        return uniqueDays.size;
    }

    extractLanguages(repos) {
        const languages = {};
        repos.forEach(repo => {
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
        });
        
        return Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([lang, count]) => ({ name: lang, count }));
    }

    getTopRepos(repos) {
        return repos
            .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
            .slice(0, 3)
            .map(repo => ({
                name: repo.name,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                description: repo.description,
                url: repo.html_url,
                language: repo.language
            }));
    }

    updateUI(stats) {
        // Update stats numbers
        this.updateStat('repoCount', stats.publicRepos);
        this.updateStat('commitCount', stats.contributionCount);
        this.updateStat('starCount', stats.totalStars);
        this.updateStat('followerCount', stats.followers);

        // Update languages chart
        this.updateLanguagesChart(stats.languages);

        // Update top repos
        this.updateTopRepos(stats.topRepos);

        // Update contribution calendar
        this.updateContributionCalendar();
    }

    updateStat(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    updateLanguagesChart(languages) {
        const container = document.querySelector('.languages-chart');
        if (!container || !languages.length) return;

        const maxCount = Math.max(...languages.map(l => l.count));
        
        container.innerHTML = languages.map(lang => `
            <div class="language-item">
                <span class="lang-name">${lang.name}</span>
                <div class="lang-bar">
                    <div class="lang-fill" style="width: ${(lang.count / maxCount) * 100}%"></div>
                </div>
                <span class="lang-count">${lang.count} repos</span>
            </div>
        `).join('');
    }

    updateTopRepos(repos) {
        const container = document.querySelector('.top-repos');
        if (!container || !repos.length) return;

        container.innerHTML = repos.map(repo => `
            <a href="${repo.url}" target="_blank" class="repo-card">
                <h4>${repo.name}</h4>
                <p>${repo.description || 'No description'}</p>
                <div class="repo-meta">
                    <span><i class="fas fa-star"></i> ${repo.stars}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks}</span>
                    <span class="repo-lang">${repo.language || 'Unknown'}</span>
                </div>
            </a>
        `).join('');
    }

    async updateContributionCalendar() {
        const container = document.querySelector('.contribution-chart');
        if (!container) return;

        try {
            // Using GitHub's image-based chart as fallback
            const img = document.createElement('img');
            img.src = `https://ghchart.rshah.org/${this.username}`;
            img.alt = `${this.username}'s GitHub contribution chart`;
            img.className = 'github-chart';
            container.innerHTML = '';
            container.appendChild(img);
        } catch (error) {
            console.error('Failed to load contribution chart:', error);
        }
    }

    getCachedData() {
        const cached = localStorage.getItem(this.cacheKey);
        if (!cached) return null;

        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp > this.cacheTime) {
            localStorage.removeItem(this.cacheKey);
            return null;
        }

        return data;
    }

    cacheData(data) {
        const cacheData = {
            timestamp: Date.now(),
            data: data
        };
        localStorage.setItem(this.cacheKey, JSON.stringify(cacheData));
    }

    useFallbackData() {
        // Use static fallback data if API fails
        const fallbackStats = {
            publicRepos: 4,
            followers: 0,
            following: 0,
            totalStars: 0,
            totalForks: 0,
            totalWatchers: 0,
            contributionCount: 89,
            languages: [
                { name: 'C++', count: 2 },
                { name: 'Python', count: 1 },
                { name: 'JavaScript', count: 1 }
            ],
            topRepos: [
                {
                    name: 'Feedback-and-Billing-System',
                    description: 'C++ billing system with tax calculation',
                    stars: 0,
                    forks: 0,
                    language: 'C++',
                    url: 'https://github.com/Sanjai-Gopal/Feedback-and-Billing-System'
                },
                {
                    name: 'sanjai_portfolio',
                    description: 'Advanced portfolio website',
                    stars: 0,
                    forks: 0,
                    language: 'JavaScript',
                    url: 'https://github.com/Sanjai-Gopal/sanjai_portfolio'
                },
                {
                    name: 'railway-reservation-cpp',
                    description: 'Railway reservation system in C++',
                    stars: 0,
                    forks: 0,
                    language: 'C++',
                    url: 'https://github.com/Sanjai-Gopal/railway-reservation-cpp'
                }
            ]
        };

        this.updateUI(fallbackStats);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.githubStats = new GitHubStats();
});
