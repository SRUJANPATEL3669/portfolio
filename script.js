// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Apply animation when the contact section comes into view
window.addEventListener('scroll', function() {
    const formElements = document.querySelectorAll('form input, form textarea, form button');
    formElements.forEach((element) => {
        if (isInViewport(element)) {
            element.style.animationPlayState = 'running';
        }
    });
});
