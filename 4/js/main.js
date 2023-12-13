const scrollContainer = document.getElementById('scrollContainer');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollContainer.addEventListener('scroll', function() {
    if (scrollContainer.scrollTop >= 100) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    scrollContainer.scrollTop = 0;
});
