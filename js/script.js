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
                <p>Welcome to the Medical Aid App! This app is designed to provide quick and reliable information during medical emergencies, especially panic attacks.</p>
            `
        },
        aids: {
            title: 'Aids',
            content: `
                <h1>Aids</h1>
                <p>Select an option below to get immediate help.</p>
                <div class="aid-buttons">
                    <button id="panic-attack-btn" class="aid-button">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Panic Attack</span>
                    </button>
                    <button id="medical-help-btn" class="aid-button">
                        <i class="fas fa-plus-circle"></i>
                        <span>Medical Help</span>
                    </button>
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
        
        // Add event listeners for the new aid buttons if we are on the 'aids' page
        if (pageName === 'aids') {
            const panicAttackBtn = document.getElementById('panic-attack-btn');
            const medicalHelpBtn = document.getElementById('medical-help-btn');

            if (panicAttackBtn) {
                panicAttackBtn.addEventListener('click', () => {
                    // Logic for panic attack help
                    contentArea.innerHTML = `
                        <h2>Panic Attack Aid</h2>
                        <p>1. Find a comfortable place to sit.</p>
                        <p>2. Focus on your breathing. Inhale for 4 seconds, hold for 7, exhale for 8.</p>
                        <p>3. Acknowledge your feelings and remind yourself that this will pass.</p>
                        <p>4. Listen to soothing music or a guided meditation.</p>
                        <button class="back-button" onclick="updatePageContent('aids')">Back</button>
                    `;
                });
            }

            if (medicalHelpBtn) {
                medicalHelpBtn.addEventListener('click', () => {
                    // Logic for general medical help
                    contentArea.innerHTML = `
                        <h2>Medical Help</h2>
                        <p>In case of a medical emergency, please:</p>
                        <p>1. Call your local emergency number (e.g., 911, 112).</p>
                        <p>2. Provide your location and a brief description of the situation.</p>
                        <p>3. Do not hang up until instructed by the dispatcher.</p>
                        <button class="back-button" onclick="updatePageContent('aids')">Back</button>
                    `;
                });
            }
        }
    }
    
    // Event listener for the top profile button
    profileButton.addEventListener('click', () => {
        updatePageContent('profile');
        navButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Event listener for the top search button
    searchButtonTop.addEventListener('click', () => {
        updatePageContent('search');
        navButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Add event listener to each navigation button
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const pageName = button.dataset.page;
            updatePageContent(pageName);
        });
    });

    // Initially load the home page
    updatePageContent('home');
});