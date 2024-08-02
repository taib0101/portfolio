// Initialize the typing animation
const typingAnimationElement = document.getElementById('typingAnimation');

// Create an array of typing text
const typingTexts = [
    'Software Engineer  ',
    'and  ',
    'Full Stack Developer '

];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
// Loop through each character and add it to the element
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => { typingAnimationElement.textContent += text[i];}, i * 200); // Increase the delay to slow down the typing animation
    }

// Once the animation is complete, reset the text and start over
    setTimeout(() => {typingAnimationElement.textContent = '';
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);}, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);