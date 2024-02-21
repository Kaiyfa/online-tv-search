function navigateTo(page) {
    window.location.href = page;
}

// Function to handle search
function search() {
    const searchInput = document.getElementById('searchInput').value;
    const searchCategory = document.getElementById('searchCategory').value;

    // Depending on the selected category, navigate to the appropriate search page
    if (searchCategory === 'shows') {
        navigateTo('show.html?q=' + searchInput);
    } else if (searchCategory === 'people') {
        navigateTo('artist.html?q=' + searchInput);
    }
}

// Event listener for search button click
document.getElementById('searchButton').addEventListener('click', search);