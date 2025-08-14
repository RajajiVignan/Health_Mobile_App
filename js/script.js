document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentArea = document.querySelector('.content');
    const profileButton = document.getElementById('profile-btn');
    const searchButtonTop = document.getElementById('search-btn-top');
    
    // Define the content for each page
    const pageData = {
        home: {
            title: 'Home',
            content: `
                <h1>Home</h1>
                <p>Welcome to the Home page! This is the main landing area of the app.</p>
            `
        },
        search: {
            title: 'Search',
            content: `
                <div class="search-container">
                    <h1>Search</h1>
                    <div class="search-input-group">
                        <input type="text" id="search-input" placeholder="Type to search...">
                        <button class="search-submit-btn"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            `
        },
        community: {
            title: 'Community',
            content: `
                <h1>Community</h1>
                <p>Connect with others in the Community section.</p>
            `
        },
        profile: {
            title: 'Profile',
            content: `
                <h1>Profile</h1>
                <p>This is your Profile page. You can view and edit your personal details here.</p>
            `
        }
    };

    // Function to update the page content
    function updatePageContent(pageName) {
        contentArea.innerHTML = pageData[pageName].content;
    }
    
    // Event listener for the top profile button
    profileButton.addEventListener('click', () => {
        // Change page to profile without changing the navigation bar's active state
        updatePageContent('profile');
        // You might also want to visually deselect the nav buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Event listener for the top search button
    searchButtonTop.addEventListener('click', () => {
        // Change page to search without changing the navigation bar's active state
        updatePageContent('search');
        // You might also want to visually deselect the nav buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Add event listener to each navigation button
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');
            
            // Get the page name from the data attribute and update content
            const pageName = button.dataset.page;
            updatePageContent(pageName);
        });
    });

    // Initially load the home page
    updatePageContent('home');
});
