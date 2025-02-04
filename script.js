// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Sub-Menu Toggle
const roomsLink = document.getElementById('roomsLink');
const roomsSubMenu = document.getElementById('roomsSubMenu');

roomsLink.addEventListener('click', (e) => {
    e.preventDefault();
    roomsSubMenu.classList.toggle('hide');
    const icon = roomsLink.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
});

// Navigation Links
const homeLink = document.getElementById('homeLink');
const amenitiesLink = document.getElementById('amenitiesLink');
const offersLink = document.getElementById('offersLink');
const contactLink = document.getElementById('contactLink');
const aboutLink = document.getElementById('aboutLink');

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('homePage');
});

amenitiesLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('amenitiesPage');
});

offersLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('offersPage');
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('contactPage');
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('aboutPage');
});

// Room Options Click
const roomOptions = document.querySelectorAll('.roomOption');
roomOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('roomsPage');
    });
});

// Headline Clicks
const headlines = document.querySelectorAll('.headline');
headlines.forEach(headline => {
    headline.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('dynamicPage');
    });
});

// Form Submissions
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking functionality not implemented yet.');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
});

// Show Page Function
function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });
    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');
    // Close the mobile menu if open
    navMenu.classList.remove('show');
    roomsSubMenu.classList.add('hide');
    const icon = roomsLink.querySelector('i');
    icon.classList.add('fa-chevron-down');
    icon.classList.remove('fa-chevron-up');
}

// Initialize to show Home Page
showPage('homePage');
