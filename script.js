document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    alert('Searching for: ' + searchTerm);
    // You would add more complex search logic here.
    // For example, redirecting to a search results page or filtering products on the current page.
});