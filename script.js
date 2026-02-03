/**
 * Valentine's Day Website - Interactive Behavior
 * Handles button clicks, confetti animation, floating emojis, and accessibility
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const message = document.getElementById('message');
    const buttonsContainer = document.getElementById('buttons');
    const helperText = document.getElementById('helper-text');

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize floating emojis
    if (!prefersReducedMotion) {
        createFloatingEmojis();
    }

    // Track state for "No" button dodging
    let isDodging = false;
    let buttonScale = 1.0; // Track cumulative scale

    // Array of helper messages that cycle through
    const helperMessages = [
       "Pretty pretty pretty please!",
        "Click yes and I'll buy you more Callico Critters!",
        "I know you want to say yes! 😄",
        "Baby please......",
        "Oops, try again! 😄"
    ];
    let currentMessageIndex = 0;

    /**
     * Handle "No" button dodge behavior
     * Move button to a random position that stays fully inside the viewport
     * and make it 10% smaller.
     */
function dodgeNoButton(event) {
    // Prevent default behavior on touch/click
    if (event && (event.type === 'touchstart' || event.type === 'click')) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Skip if reduced motion is preferred
    if (prefersReducedMotion) {
        return;
    }

    // Use the Visual Viewport API when available (mobile address bar / safe area)
    const vv = window.visualViewport;
    const viewportWidth = vv ? vv.width : window.innerWidth;
    const viewportHeight = vv ? vv.height : window.innerHeight;
    const viewportOffsetLeft = vv ? vv.offsetLeft : 0;
    const viewportOffsetTop = vv ? vv.offsetTop : 0;

    const margin = 16; // safe padding from edges

    // First time: enable dodging mode and move the button to <body>
    // This avoids the "position: fixed inside a transformed parent" bug.
    if (!isDodging) {
        const currentRect = noButton.getBoundingClientRect();

        noButton.classList.add('dodging');
        isDodging = true;

        // Ensure fixed positioning is relative to the viewport
        document.body.appendChild(noButton);

        // Clear any previously set constraints that could fight left/top
        noButton.style.right = 'auto';
        noButton.style.bottom = 'auto';

        // Keep it where it was visually before we start moving it
        noButton.style.left = `${Math.round(currentRect.left)}px`;
        noButton.style.top = `${Math.round(currentRect.top)}px`;
    }

    // Make it 10% smaller each time (multiply by 0.9)
    buttonScale *= 0.9;
    
    // Don't let it get too small (minimum 50% of original size)
    if (buttonScale < 0.5) {
        buttonScale = 0.5;
    }
    
    noButton.style.transformOrigin = 'center';
    noButton.style.transform = `scale(${buttonScale})`;

    // Measure AFTER scaling so bounds are correct
    const rect = noButton.getBoundingClientRect();

    // Compute safe ranges so the entire button stays visible
    const minX = viewportOffsetLeft + margin;
    const minY = viewportOffsetTop + margin;
    const maxX = Math.max(minX, viewportOffsetLeft + viewportWidth - rect.width - margin);
    const maxY = Math.max(minY, viewportOffsetTop + viewportHeight - rect.height - margin);

    const x = (maxX === minX) ? minX : (minX + Math.random() * (maxX - minX));
    const y = (maxY === minY) ? minY : (minY + Math.random() * (maxY - minY));

    noButton.style.left = `${Math.round(x)}px`;
    noButton.style.top = `${Math.round(y)}px`;
}

    /**
     * Show the next helper message from the array
     */
    function showNextHelperMessage() {
        helperText.textContent = helperMessages[currentMessageIndex];
        helperText.classList.add('visible');
        // Move to next message for next time
        currentMessageIndex = (currentMessageIndex + 1) % helperMessages.length;
    }

    // Desktop: dodge on hover (only if the device actually supports hover)
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (canHover) {
        noButton.addEventListener('mouseenter', function(event) {
            dodgeNoButton(event);
            // Show next helper message on hover
            showNextHelperMessage();
        });
    }

    // Mobile / touch: dodge on tap/click
    // Avoid touchstart + click double-firing by using only click here.
    noButton.addEventListener('click', function(event) {
        // Show next helper message on click
        showNextHelperMessage();
        
        if (!prefersReducedMotion) {
            dodgeNoButton(event);
        }
    });

    // Keep the "No" button on-screen if the user resizes/rotates
    window.addEventListener('resize', function() {
        if (!isDodging) return;

        const rect = noButton.getBoundingClientRect();
        const vv = window.visualViewport;
        const vw = vv ? vv.width : window.innerWidth;
        const vh = vv ? vv.height : window.innerHeight;
        const offsetLeft = vv ? vv.offsetLeft : 0;
        const offsetTop = vv ? vv.offsetTop : 0;
        const margin = 16;

        const maxX = Math.max(offsetLeft + margin, offsetLeft + vw - rect.width - margin);
        const maxY = Math.max(offsetTop + margin, offsetTop + vh - rect.height - margin);

        // Current values might be empty on first dodge, so fall back to rect
        const currentLeft = parseFloat(noButton.style.left || rect.left);
        const currentTop = parseFloat(noButton.style.top || rect.top);

        // Clamp between offsetLeft+margin and maxX/maxY
        noButton.style.left = `${Math.round(Math.min(Math.max(currentLeft, offsetLeft + margin), maxX))}px`;
        noButton.style.top = `${Math.round(Math.min(Math.max(currentTop, offsetTop + margin), maxY))}px`;
    });

    /**
     * Handle "Yes" button click
     * Triggers confetti, updates message, and hides buttons
     */
    yesButton.addEventListener('click', function() {
        // Trigger confetti animation
        triggerConfetti();

        // Get intro text elements
        const introText = document.querySelector('.intro-text');
        
        // Update intro text to show couple photo and success message
        if (introText) {
            introText.innerHTML = `
                <img src="images/couple-photo.png" alt="Us" class="couple-photo">
                <h1 class="success-heading">Yay! You said Yes!<span class="emoji-celebration"></span></h1>
            `;
            
            // Add emoji for reduced-motion users
            if (prefersReducedMotion) {
                const emojiSpan = introText.querySelector('.emoji-celebration');
                if (emojiSpan) {
                    emojiSpan.textContent = ' 🎉';
                }
            }
        }

        // Update card message to show message
        message.innerHTML = '<h1>See you on February 14th! 💖</h1>';
        message.classList.add('success');

        // Change Kuromi image and animation
        const kuromiImg = document.querySelector('.kuromi-decoration');
        if (kuromiImg) {
            kuromiImg.src = 'images/kuromi-head-2.png';
            kuromiImg.classList.add('kuromi-celebrate');
        }

        // Change Pug image and animation
        const pugImg = document.querySelector('.pug-decoration');
        if (pugImg) {
            pugImg.src = 'images/pug-head-2.png';
            pugImg.classList.add('pug-celebrate');
        }

        // Hide buttons container completely
        buttonsContainer.classList.add('hidden');
        
        // Explicitly hide the "No" button (it may have been moved out of container during dodging)
        noButton.style.display = 'none';

        // Clear any helper text
        helperText.textContent = '';
        helperText.classList.remove('visible');

        // Optional: Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.textContent = 'Yay! You said Yes!';
        document.body.appendChild(announcement);
    });


    /**
     * Trigger confetti animation
     * Uses canvas-confetti library with custom configuration
     */
    function triggerConfetti() {
        // Skip confetti if user prefers reduced motion
        if (prefersReducedMotion) {
            return;
        }

        // Check if confetti library is loaded
        if (typeof confetti === 'undefined') {
            console.warn('Confetti library not loaded');
            return;
        }

        // First burst - left side
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.3, y: 0.6 },
            colors: ['#ff4d6d', '#ff758f', '#ffa6c1', '#ffd1e3', '#ffffff']
        });

        // Second burst - right side (slight delay)
        setTimeout(function() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 0.7, y: 0.6 },
                colors: ['#ff4d6d', '#ff758f', '#ffa6c1', '#ffd1e3', '#ffffff']
            });
        }, 150);

        // Third burst - center (more particles)
        setTimeout(function() {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { x: 0.5, y: 0.5 },
                colors: ['#ff4d6d', '#ff758f', '#ffa6c1', '#ffd1e3', '#ffffff']
            });
        }, 300);
    }

    /**
     * Optional: Add keyboard support for better accessibility
     * Allow Enter key to trigger button clicks
     */
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (document.activeElement === yesButton) {
                yesButton.click();
            } else if (document.activeElement === noButton) {
                noButton.click();
            }
        }
    });

    /**
     * Create floating emojis animation in the background
     * Emojis float up from bottom to top and fade out
     */
    function createFloatingEmojis() {
        // List of love-themed emojis to animate
        const emojis = ['❤️‍🔥', '❤️', '😍', '💘', '💖', '💝', '🫶', '💕', '🌹'];
        
        // Create container for floating emojis
        const container = document.createElement('div');
        container.className = 'floating-emojis';
        document.body.insertBefore(container, document.body.firstChild);

        // Function to create a single floating emoji
        function createEmoji() {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random horizontal position (0-100%)
            const leftPosition = Math.random() * 100;
            emoji.style.left = leftPosition + '%';
            
            // Start from bottom of screen
            emoji.style.bottom = '-50px';
            
            // Random animation duration between 8-15 seconds
            const duration = 8 + Math.random() * 7;
            emoji.style.animationDuration = duration + 's';
            
            // Random delay between 0-5 seconds
            const delay = Math.random() * 5;
            emoji.style.animationDelay = delay + 's';
            
            // Random font size variation (24-40px on desktop)
            const fontSize = 24 + Math.random() * 16;
            emoji.style.fontSize = fontSize + 'px';
            
            // Add to container
            container.appendChild(emoji);
            
            // Remove emoji after animation completes to prevent DOM bloat
            setTimeout(function() {
                if (emoji.parentNode) {
                    emoji.parentNode.removeChild(emoji);
                }
            }, (duration + delay) * 1000);
        }

        // Create initial batch of emojis (15 emojis)
        for (let i = 0; i < 15; i++) {
            createEmoji();
        }

        // Continuously create new emojis every 2 seconds
        setInterval(function() {
            createEmoji();
        }, 2000);
    }
});
