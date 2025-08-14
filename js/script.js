// Function to detect device type
function detectDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
    return isMobile ? 'mobile' : 'laptop';
}

// Device-specific settings content
const deviceSettings = {
    mobile: `
        <div class="list-item">
            <i class="fas fa-bell"></i>
            <span class="item-label">Notifications</span>
            <label class="toggle-switch">
                <input type="checkbox" checked>
                <span class="toggle-slider"></span>
            </label>
        </div>
        <div class="list-item">
            <i class="fas fa-location-dot"></i>
            <span class="item-label">Location Services</span>
            <label class="toggle-switch">
                <input type="checkbox">
                <span class="toggle-slider"></span>
            </label>
        </div>
        <div class="list-item">
            <i class="fas fa-envelope"></i>
            <span class="item-label">Email</span>
            <span class="item-value">john@example.com</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-phone"></i>
            <span class="item-label">Phone</span>
            <span class="item-value">+91 XXXXXXXXXX</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item" id="terms-container">
            <i class="fas fa-file-contract"></i>
            <span class="item-label">Terms & Conditions</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-circle-info"></i>
            <span class="item-label">About</span>
            <span class="item-value">Version 1.0.0</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-headset"></i>
            <span class="item-label">Support</span>
            <i class="fas fa-chevron-right"></i>
        </div>
    `,
    laptop: `
        <div class="list-item">
            <i class="fas fa-moon"></i>
            <span class="item-label">Dark Mode</span>
            <label class="toggle-switch">
                <input type="checkbox">
                <span class="toggle-slider"></span>
            </label>
        </div>
        <div class="list-item">
            <i class="fas fa-keyboard"></i>
            <span class="item-label">Keyboard Shortcuts</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-envelope"></i>
            <span class="item-label">Email</span>
            <span class="item-value">john@example.com</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-phone"></i>
            <span class="item-label">Phone</span>
            <span class="item-value">+91 XXXXXXXXXX</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item" id="terms-container">
            <i class="fas fa-file-contract"></i>
            <span class="item-label">Terms & Conditions</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-circle-info"></i>
            <span class="item-label">About</span>
            <span class="item-value">Version 1.0.0</span>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="list-item">
            <i class="fas fa-headset"></i>
            <span class="item-label">Support</span>
            <i class="fas fa-chevron-right"></i>
        </div>
    `
};

// Function to check if terms are accepted
function areTermsAccepted() {
    return localStorage.getItem('termsAccepted') === 'true';
}

// Function to show terms modal
function showTermsModal() {
    const modal = document.createElement('div');
    modal.className = 'terms-modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="terms-content">
            <h2>Terms & Conditions</h2>
            <div class="terms-text">
                <p>Welcome to our Medical Aid App. By using this application, you agree to:</p>
                <ul>
                    <li>Use the app responsibly and follow medical advice</li>
                    <li>Protect your personal information</li>
                    <li>Respect community guidelines</li>
                    <li>Understand this is not a substitute for professional medical care</li>
                </ul>
            </div>
            <div class="terms-buttons">
                <button class="terms-btn decline">Decline</button>
                <button class="terms-btn accept">Accept</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.accept').addEventListener('click', () => {
        localStorage.setItem('termsAccepted', 'true');
        modal.remove();
        const termsContainer = document.getElementById('terms-container');
        if (termsContainer) {
            termsContainer.style.display = 'none';
        }
    });

    modal.querySelector('.decline').addEventListener('click', () => {
        modal.remove();
    });
}

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
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <h2>John Doe</h2>
                        <p>Edit Profile</p>
                    </div>
                    <div class="profile-list" id="device-specific-settings"></div>
                    <div class="made-in-india">Made with <i class="fas fa-heart"></i> in India</div>
                </div>
            `
        },
        settings: {
            title: 'Settings',
            content: `
                <h1>Settings</h1>
                <div class="settings-container">
                    <div class="settings-section">
                        <h2>Mobile Settings</h2>
                        <p>Terms and Conditions for mobile users.</p>
                        <p>Profile-related settings for mobile users.</p>
                    </div>
                    <div class="settings-section">
                        <h2>Laptop Settings</h2>
                        <p>Terms and Conditions for laptop users.</p>
                        <p>Profile-related settings for laptop users.</p>
                    </div>
                </div>
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
        
        // Load device-specific settings if on profile page
        if (pageName === 'profile') {
            const deviceType = detectDevice();
            const settingsContainer = document.getElementById('device-specific-settings');
            if (settingsContainer) {
                settingsContainer.innerHTML = deviceSettings[deviceType];
                
                // Hide terms and conditions if already accepted
                if (areTermsAccepted()) {
                    const termsContainer = document.getElementById('terms-container');
                    if (termsContainer) {
                        termsContainer.style.display = 'none';
                    }
                }

                // Add click handlers for settings items
                document.querySelectorAll('.setting-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const label = this.querySelector('.setting-label').textContent;
                        if (label === 'Terms & Conditions' && !areTermsAccepted()) {
                            showTermsModal();
                        }
                    });
                });
            }
        }

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

    // Function to handle settings button clicks
    function handleSettingClick(settingType, deviceType) {
        // Here you can implement specific actions for each setting
        switch(settingType) {
            case 'App Permissions':
            case 'Display Preferences':
                alert(`Configuring ${settingType} for ${deviceType}`);
                break;
            case 'Data Usage':
            case 'Keyboard Shortcuts':
                alert(`Managing ${settingType} for ${deviceType}`);
                break;
            case 'Terms & Conditions':
                alert(`Viewing Terms & Conditions for ${deviceType}`);
                break;
        }
    }

    updatePageContent('home');
});
