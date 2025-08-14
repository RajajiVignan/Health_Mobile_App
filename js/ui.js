function detectDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
    return isMobile ? 'mobile' : 'laptop';
}

function areTermsAccepted() {
    return localStorage.getItem('termsAccepted') === 'true';
}

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
    const contentArea = document.querySelector('.content');
    contentArea.innerHTML = pageData[pageName].content;
    
    if (pageName === 'profile') {
        const deviceType = detectDevice();
        const settingsContainer = document.getElementById('device-specific-settings');
        if (settingsContainer) {
            settingsContainer.innerHTML = deviceSettings[deviceType];
            
            if (areTermsAccepted()) {
                const termsContainer = document.getElementById('terms-container');
                if (termsContainer) {
                    termsContainer.style.display = 'none';
                }
            }

            settingsContainer.querySelectorAll('.list-item').forEach(item => {
                const label = item.querySelector('.item-label').textContent;
                const valueSpan = item.querySelector('.item-value');
                
                switch(label) {
                    case 'Profile':
                        item.addEventListener('click', () => {
                            const newName = prompt(`Enter new Profile Name:`, valueSpan.textContent);
                            if (newName && newName.trim()) {
                                valueSpan.textContent = newName;
                                document.querySelector('.profile-header h2').textContent = newName;
                            }
                        });
                        break;

                    case 'Email':
                        item.addEventListener('click', () => {
                            const newEmail = prompt(`Enter new Email:`, valueSpan.textContent);
                            if (newEmail && newEmail.trim()) valueSpan.textContent = newEmail;
                        });
                        break;

                    case 'Phone':
                        item.addEventListener('click', () => {
                            const newPhone = prompt(`Enter new Phone Number:`, valueSpan.textContent);
                            if (newPhone && newPhone.trim()) valueSpan.textContent = newPhone;
                        });
                        break;

                    case 'Notifications':
                        const notifToggle = item.querySelector('input[type="checkbox"]');
                        if (notifToggle) {
                            notifToggle.addEventListener('change', async (e) => {
                                const granted = await Notification.requestPermission();
                                notifToggle.checked = granted;
                            });
                        }
                        break;

                    case 'Location Services':
                        const locToggle = item.querySelector('input[type="checkbox"]');
                        if (locToggle) {
                            locToggle.addEventListener('change', async (e) => {
                                try {
                                    await navigator.geolocation.getCurrentPosition(() => {});
                                    locToggle.checked = true;
                                } catch (error) {
                                    locToggle.checked = false;
                                    alert('Location access denied.');
                                }
                            });
                        }
                        break;

                    case 'Dark Mode':
                        const darkModeToggle = item.querySelector('input[type="checkbox"]');
                        if (darkModeToggle) {
                            darkModeToggle.addEventListener('change', (e) => {
                                document.body.classList.toggle('dark-mode', e.target.checked);
                            });
                        }
                        break;

                    case 'Social Accounts':
                        item.addEventListener('click', () => {
                            alert('Connect to your social media accounts');
                        });
                        break;

                    case 'Invite Friends':
                        item.addEventListener('click', () => {
                            if (navigator.share) {
                                navigator.share({
                                    title: 'Medical Aid App',
                                    text: 'Join me on Medical Aid App!',
                                    url: window.location.href
                                }).catch(console.error);
                            } else {
                                alert('Share this link with your friends: ' + window.location.href);
                            }
                        });
                        break;

                    case 'Privacy Settings':
                        item.addEventListener('click', () => {
                            alert('Manage your privacy settings');
                        });
                        break;

                    case 'Help Center':
                        item.addEventListener('click', () => {
                            alert('Opening Help Center');
                        });
                        break;

                    case 'Terms & Conditions':
                        if (!areTermsAccepted()) {
                            item.addEventListener('click', showTermsModal);
                        }
                        break;
                }
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