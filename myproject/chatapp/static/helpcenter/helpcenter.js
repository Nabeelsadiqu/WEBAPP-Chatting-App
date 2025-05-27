// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const answer = parent.querySelector('.faq-answer');

        parent.classList.toggle('active');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Smooth Scroll for Sidebar Links
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
