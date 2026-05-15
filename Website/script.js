document.addEventListener('DOMContentLoaded', () => {
    console.log("StreamVault Loaded");

    // Example: Simple alert on registration
    const regForm = document.getElementById('regForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Welcome to the platform!');
        });
    }
});