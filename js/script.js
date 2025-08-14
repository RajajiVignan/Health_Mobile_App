document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentArea = document.querySelector('.content');
    const profileButton = document.getElementById('profile-btn');
    const searchButtonTop = document.getElementById('search-btn-top');

    const cardData = [
        {
            id: 1,
            category: 'Doctors',
            title: 'Dr. John Doe',
            imageUrl: 'doctor1.jpg'
        },
        {
            id: 2,
            category: 'Hospitals',
            title: 'City General Hospital',
            imageUrl: 'hospital1.jpg'
        },
        {
            id: 3,
            category: 'Insurers',
            title: 'HealthGuard Insurance',
            imageUrl: 'insurer1.png'
        },
        {
            id: 4,
            category: 'Well being',
            title: 'Mindful Moments',
            imageUrl: 'hospital2.jpg' // Using hospital2.jpg as a placeholder for Well being
        },
        {
            id: 5,
            category: 'Doctors',
            title: 'Dr. Jane Smith',
            imageUrl: 'doctor2.jpg'
        },
        {
            id: 6,
            category: 'Hospitals',
            title: 'Sunset Valley Hospital',
            imageUrl: 'hospital2.jpg'
        },
        {
            id: 7,
            category: 'Insurers',
            title: 'SecureLife Insurance',
            imageUrl: 'insurer2.jpg'
        }
    ];

    const pageData = {
        home: {
            title: 'Home',
            content: `
                <h1>Home</h1>
                <p>Welcome to the Medical Aid App! This app is designed to provide quick and reliable information during medical emergencies, especially panic attacks.</p>
            `
        },
        search: {
            title: 'Search',
            content: `
                <div class="search-container">
                    <div class="search-input-group">
                        <input type="text" id="search-input" placeholder="Type to search...">
                        <button class="search-submit-btn"><i class="fas fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="Doctors">Doctors</button>
                        <button class="filter-btn" data-filter="Hospitals">Hospitals</button>
                        <button class="filter-btn" data-filter="Insurers">Insurers</button>
                        <button class="filter-btn" data-filter="Well being">Well being</button>
                    </div>
                    <div id="card-container" class="card-container"></div>
                </div>
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

    function renderCards(filter = 'all') {
        const cardContainer = document.getElementById('card-container');
        if (!cardContainer) return;

        const filteredCards = cardData.filter(card => filter === 'all' || card.category === filter);

        cardContainer.innerHTML = filteredCards.map(card => `
            <div class="card" style="background-image: url('images/${card.imageUrl}')">
                <h3>${card.title}</h3>
            </div>
        `).join('');
    }

    function updatePageContent(pageName) {
        contentArea.innerHTML = pageData[pageName].content;

        if (pageName === 'aids') {
            const panicAttackBtn = document.getElementById('panic-attack-btn');
            const medicalHelpBtn = document.getElementById('medical-help-btn');

            if (panicAttackBtn) {
                panicAttackBtn.addEventListener('click', () => {
                    contentArea.innerHTML = `
                        <h2>Panic Attack Aid</h2>
                        <p>1. Find a comfortable place to sit.</p>
                        <p>2. Focus on your breathing. Inhale for 4 seconds, hold for 7, exhale for 8.</p>
                        <p>3. Acknowledge your feelings and remind yourself that this will pass.</p>
                        <p>4. Listen to soothing music or a guided meditation.</p>
                        <button class="back-button">Back</button>
                    `;
                });
            }

            if (medicalHelpBtn) {
                medicalHelpBtn.addEventListener('click', () => {
                    contentArea.innerHTML = `
                        <h2>Medical Help</h2>
                        <p>In case of a medical emergency, please:</p>
                        <p>1. Call your local emergency number (e.g., 911, 112).</p>
                        <p>2. Provide your location and a brief description of the situation.</p>
                        <p>3. Do not hang up until instructed by the dispatcher.</p>
                        <button class="back-button">Back</button>
                    `;
                });
            }
        } else if (pageName === 'search') {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
            }
            renderCards();

            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    const filter = button.dataset.filter;
                    renderCards(filter);
                });
            });
        }
    }

    profileButton.addEventListener('click', () => {
        updatePageContent('profile');
        navButtons.forEach(btn => btn.classList.remove('active'));
    });

    searchButtonTop.addEventListener('click', () => {
        updatePageContent('search');
        navButtons.forEach(btn => btn.classList.remove('active'));
    });

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const pageName = button.dataset.page;
            updatePageContent(pageName);
        });
    });

    contentArea.addEventListener('click', (event) => {
        if (event.target.classList.contains('back-button')) {
            updatePageContent('aids');
        }
    });

    updatePageContent('home');
});
