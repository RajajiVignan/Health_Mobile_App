document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentArea = document.querySelector('.content');
    const profileButton = document.getElementById('profile-btn');
    const searchButtonTop = document.getElementById('search-btn-top');

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

    function handleSettingClick(settingType, deviceType) {
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