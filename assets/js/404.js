// assets/js/404.js
"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const bounceLogo = document.getElementById('bounce-logo');
    const container = document.getElementById('bounce-container');
    const contentElement = document.querySelector('.error-404__content');

    let x = 0;
    let y = 0;
    let dirX = 1;
    let dirY = 1;
    const speed = 2;

    const palette = [
        "linear-gradient(45deg, #e124ff, #a01bb6)",
        "linear-gradient(45deg, #ff8800, #e67300)",
        "linear-gradient(45deg, #6a19ff, #4c12b3)",
        "linear-gradient(45deg, #ff2188, #cc1a6d)",
        "linear-gradient(45deg, #00b0ff, #0081cb)",
        "linear-gradient(45deg, #00ff7f, #00cc66)",
        "linear-gradient(45deg, #ffeb3b, #fdd835)",
        "linear-gradient(45deg, #009688, #00796b)"
    ];

    // Previous color index to avoid repeating the same color
    let prevColorChoiceIndex = 0;

    // Initial dimensions
    let logoWidth = bounceLogo.offsetWidth;
    let logoHeight = bounceLogo.offsetHeight;

    // Function to get a new random color
    function getNewRandomColor() {
        const currentPalette = [...palette];
        currentPalette.splice(prevColorChoiceIndex, 1);
        const colorChoiceIndex = Math.floor(Math.random() * currentPalette.length);
        prevColorChoiceIndex = colorChoiceIndex < prevColorChoiceIndex ? colorChoiceIndex : colorChoiceIndex + 1;
        const colorChoice = currentPalette[colorChoiceIndex];
        return colorChoice;
    }

    // Set the initial color
    bounceLogo.style.background = palette[0];
    bounceLogo.style.webkitBackgroundClip = "text";
    bounceLogo.style.backgroundClip = "text";
    bounceLogo.style.webkitTextFillColor = "transparent";

    // Calculate how much the logo overlaps with the central content (0-1)
    function getOverlapPercentage() {
        if (!contentElement) return 0;
        
        const contentRect = contentElement.getBoundingClientRect();
        const logoRect = bounceLogo.getBoundingClientRect();
        
        // Find the overlap area
        const overlapLeft = Math.max(contentRect.left, logoRect.left);
        const overlapRight = Math.min(contentRect.right, logoRect.right);
        const overlapTop = Math.max(contentRect.top, logoRect.top);
        const overlapBottom = Math.min(contentRect.bottom, logoRect.bottom);
        
        // If there's no overlap, return 0
        if (overlapLeft > overlapRight || overlapTop > overlapBottom) {
            return 0;
        }
        
        // Calculate the overlap area
        const overlapArea = (overlapRight - overlapLeft) * (overlapBottom - overlapTop);
        const logoArea = logoRect.width * logoRect.height;
        
        // Return the overlap percentage (capped at 1)
        return Math.min(overlapArea / logoArea, 1);
    }

    // Animation function
    function animate() {
        // Get updated dimensions of the container and logo
        const screenHeight = container.clientHeight;
        const screenWidth = container.clientWidth;
        logoWidth = bounceLogo.offsetWidth;
        logoHeight = bounceLogo.offsetHeight;

        // Check overlap with central content and apply fade effect
        const overlapPercentage = getOverlapPercentage();
        if (overlapPercentage > 0) {
            // Calculate opacity based on overlap - minimum 0.25
            const opacity = Math.max(0.25, 1 - (overlapPercentage * 0.95));
            
            // Apply fade effect
            bounceLogo.style.opacity = opacity.toString();
            
            // Add blur filter
            if (overlapPercentage > 0.2) {
                bounceLogo.style.filter = `blur(${overlapPercentage * 4}px)`;
            } else {
                bounceLogo.style.filter = 'none';
            }
        } else {
            // Restore maximum opacity when there's no overlap
            bounceLogo.style.opacity = "1";
            bounceLogo.style.filter = 'none';
        }

        // Vertical bounce
        if (y + logoHeight >= screenHeight || y < 0) {
            dirY *= -1;
            bounceLogo.style.background = getNewRandomColor();
            bounceLogo.style.webkitBackgroundClip = "text";
            bounceLogo.style.backgroundClip = "text";
        }

        // Horizontal bounce
        if (x + logoWidth >= screenWidth || x < 0) {
            dirX *= -1;
            bounceLogo.style.background = getNewRandomColor();
            bounceLogo.style.webkitBackgroundClip = "text";
            bounceLogo.style.backgroundClip = "text";
        }

        // Update position
        x += dirX * speed;
        y += dirY * speed;

        // Apply new position
        bounceLogo.style.left = x + "px";
        bounceLogo.style.top = y + "px";

        // Continue animation
        window.requestAnimationFrame(animate);
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        // Ensure the logo stays within the container
        const screenHeight = container.clientHeight;
        const screenWidth = container.clientWidth;

        // Correct position if necessary
        if (x + logoWidth > screenWidth) {
            x = screenWidth - logoWidth;
        }

        if (y + logoHeight > screenHeight) {
            y = screenHeight - logoHeight;
        }
    });

    // Start animation
    window.requestAnimationFrame(animate);
});