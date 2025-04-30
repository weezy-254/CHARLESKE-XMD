// Toggle Menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Typewriter Effect
const typewriterText = "Deploy your bot with ease!";
let i = 0;
function typeWriter() {
    if (i < typewriterText.length) {
        document.getElementById('typewriter').innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Glitch Effect
document.querySelector('.glitch').classList.add('glitch-animation');

// Fetch GitHub Stats
async function fetchGitHubStats() {
    const statsContainer = document.getElementById('repoStats');
    try {
        const response = await fetch('https://github.com/Charleskenya1/CHARLESKE');
        const data = await response.json();
        statsContainer.innerHTML = `⭐ Stars: ${data.stargazers_count} | 🍴 Forks: ${data.forks_count}`;
    } catch (error) {
        statsContainer.innerHTML = 'Failed to load repo stats.';
    }
}
fetchGitHubStats();

// QR Code Generator
document.getElementById('generateQR').addEventListener('click', () => {
    const text = document.getElementById('qrInput').value.trim();
    if (text) {
        document.getElementById('qrCode').innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=150x150">`;
    }
});
