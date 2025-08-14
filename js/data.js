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

const deviceSettings = {
    mobile: `
        <div class="settings-group">
            <h3>Account</h3>
            <div class="list-item">
                <i class="fas fa-user"></i>
                <span class="item-label">Profile</span>
                <span class="item-value">John Doe</span>
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
        </div>

        <div class="settings-group">
            <h3>Privacy & Security</h3>
            <div class="list-item">
                <i class="fas fa-shield-alt"></i>
                <span class="item-label">Privacy Settings</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="list-item">
                <i class="fas fa-location-dot"></i>
                <span class="item-label">Location Services</span>
                <label class="toggle-switch">
                    <input type="checkbox">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>

        <div class="settings-group">
            <h3>Preferences</h3>
            <div class="list-item">
                <i class="fas fa-bell"></i>
                <span class="item-label">Notifications</span>
                <label class="toggle-switch">
                    <input type="checkbox" checked>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <div class="list-item">
                <i class="fas fa-moon"></i>
                <span class="item-label">Dark Mode</span>
                <label class="toggle-switch">
                    <input type="checkbox">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>

        <div class="settings-group">
            <h3>Connect</h3>
            <div class="list-item">
                <i class="fas fa-share-alt"></i>
                <span class="item-label">Social Accounts</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="list-item">
                <i class="fas fa-user-plus"></i>
                <span class="item-label">Invite Friends</span>
                <i class="fas fa-chevron-right"></i>
            }
        </div>

        <div class="settings-group">
            <h3>Support</h3>
            <div class="list-item">
                <i class="fas fa-headset"></i>
                <span class="item-label">Help Center</span>
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
        </div>
    `,
    laptop: `
        <div class="settings-group">
            <h3>Account</h3>
            <div class="list-item">
                <i class="fas fa-user"></i>
                <span class="item-label">Profile</span>
                <span class="item-value">John Doe</span>
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
        </div>

        <div class="settings-group">
            <h3>Privacy & Security</h3>
            <div class="list-item">
                <i class="fas fa-shield-alt"></i>
                <span class="item-label">Privacy Settings</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="list-item">
                <i class="fas fa-keyboard"></i>
                <span class="item-label">Keyboard Shortcuts</span>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>

        <div class="settings-group">
            <h3>Preferences</h3>
            <div class="list-item">
                <i class="fas fa-bell"></i>
                <span class="item-label">Notifications</span>
                <label class="toggle-switch">
                    <input type="checkbox" checked>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <div class="list-item">
                <i class="fas fa-moon"></i>
                <span class="item-label">Dark Mode</span>
                <label class="toggle-switch">
                    <input type="checkbox">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>

        <div class="settings-group">
            <h3>Connect</h3>
            <div class="list-item">
                <i class="fas fa-share-alt"></i>
                <span class="item-label">Social Accounts</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="list-item">
                <i class="fas fa-user-plus"></i>
                <span class="item-label">Invite Friends</span>
                <i class="fas fa-chevron-right"></i>
            }
        </div>

        <div class="settings-group">
            <h3>Support</h3>
            <div class="list-item">
                <i class="fas fa-headset"></i>
                <span class="item-label">Help Center</span>
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
        </div>
    `
};
