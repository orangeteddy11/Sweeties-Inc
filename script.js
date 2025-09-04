// This JavaScript handles the search functionality.
document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    alert('Searching for: ' + searchTerm);
    // You would add more complex search logic here,
    // like redirecting to a search results page.
});

/*
    -------------------------------------------------------------------------
    IMPORTANT NOTE ON RESPONSIVE DESIGN AND JAVASCRIPT
    -------------------------------------------------------------------------

    While you asked to reference responsive changes in a JavaScript file,
    it is considered a **best practice** to use CSS Media Queries for
    responsive design. The primary reason is performance and maintainability.
    
    The CSS above handles the mobile-first approach efficiently and correctly.
    The code below is a demonstration of how you *could* use JavaScript, but
    it is generally **not recommended** for a production website. It can be
    slow, clunky, and hard to manage as the website grows.
*/

// Example of a responsive function in JavaScript (not recommended for production)
function handleResponsiveLayout() {
    const width = window.innerWidth;
    const header = document.querySelector('.header');
    const navMenu = document.querySelector('.nav-menu ul');
    const zRows = document.querySelectorAll('.z-row-1, .z-row-2, .z-row-3');

    // Remove old classes to prevent conflicts
    header.classList.remove('mobile-header', 'desktop-header');
    navMenu.classList.remove('mobile-nav-menu', 'desktop-nav-menu');

    if (width < 768) {
        // Apply mobile styles via class
        header.classList.add('mobile-header');
        navMenu.classList.add('mobile-nav-menu');
        zRows.forEach(row => row.style.flexDirection = 'column');
    } else {
        // Apply desktop styles via class
        header.classList.add('desktop-header');
        navMenu.classList.add('desktop-nav-menu');
        
        // This is a simplified example of how you'd handle the Z-pattern
        // with JS, which is much more complex than with CSS.
        zRows[0].style.flexDirection = 'row';
        zRows[1].style.flexDirection = 'row-reverse';
        zRows[2].style.flexDirection = 'row';
    }
}

// Attach the function to the window resize event (very inefficient)
// window.addEventListener('resize', handleResponsiveLayout);
// window.addEventListener('load', handleResponsiveLayout);
// You would uncomment these lines to run the demonstration.