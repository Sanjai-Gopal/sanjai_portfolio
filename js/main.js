document.addEventListener('DOMContentLoaded', function() {
    console.log('Site loaded successfully');
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });
    }
});
