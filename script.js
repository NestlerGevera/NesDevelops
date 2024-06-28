document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.style.backgroundColor = '#252525';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});