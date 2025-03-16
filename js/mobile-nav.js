document.addEventListener('DOMContentLoaded', () => {
    const mobileNavButton = document.getElementById('mobile-nav');
    const mobileNavContainer = document.getElementById('mobile-navbar');
    const mobileBackButton = document.getElementById('mobile-back');
    
    mobileNavButton.addEventListener('click', () => {
        mobileNavContainer.style.transform = 'translateX(0)';
    });

    mobileBackButton.addEventListener('click', () => {
        mobileNavContainer.style.transform = 'translateX(-100vw)';
    });
})
