document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("loadingShown") !== "true") {
        const text = "Hello world, I'm Brett.";
        const loadingText = document.getElementById('loading-text');
        let index = 0;

        // Ensure the cursor element is created only once
        let cursor = document.querySelector('.cursor');
        if (!cursor) {
            cursor = document.createElement('span');
            cursor.classList.add('cursor');
            cursor.textContent = '|'; // Optional: adds a cursor character
            loadingText.appendChild(cursor);
        }

        function typeEffect() {
            if (index < text.length) {
                // Insert text before the cursor
                cursor.insertAdjacentHTML('beforebegin', text.charAt(index));
                index++;
                setTimeout(typeEffect, 150); // Adjust for typing speed
            } else {
                setTimeout(() => {
                    const loadingScreen = document.getElementById('loading-screen');
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.visibility = 'hidden';
                    sessionStorage.setItem("loadingShown", "true");
                }, 1500); // Wait 5 seconds before fading away
            }
        }

        typeEffect();
    } else {
        // Immediately hide the loading screen if it's already been shown
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }
});
