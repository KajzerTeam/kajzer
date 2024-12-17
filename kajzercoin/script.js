const scrollItems = document.querySelectorAll('.scroll-item');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    return visibleHeight / elementHeight >= 0.75; // Co najmniej 75% elementu widoczne
}

function handleScroll() {
    scrollItems.forEach((item, index) => {
        if (!item.classList.contains('in-view') && isInViewport(item)) {
            item.style.transitionDelay = `${index * 0.2}s`; // Opcjonalne opóźnienie
            item.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();


function toggleSidebar() {
    const sidebar = document.querySelector('.how-to-buy-section');
    sidebar.classList.toggle('active');
}

// Zamykanie sidebaru, gdy klikniesz poza nim
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.how-to-buy-section');
    const button = document.querySelector('.sidebar-toggle');
    
    // Sprawdzamy, czy kliknięcie było poza sidebar i przyciskiem
    if (!sidebar.contains(event.target) && !button.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});