import './index.css';

console.log("Hello! main.js is connected successfully.");

const contactButton = document.getElementById('contact-btn');

if (contactButton) {
    contactButton.addEventListener('click', function() {
        console.log("Button was clicked!");
        alert('Thank you for your interest in Knot!');
    });
} else {
    console.log("Oops! Could not find the button ID 'contact-btn'.");
}

