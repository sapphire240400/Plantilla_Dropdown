const infoButtons = document.querySelectorAll('.dedie-info-button');
const infoContainer = document.getElementById('infoContainer');
const infoContent = document.getElementById('infoContent');
const closeBtn = document.getElementById('closeBtn');

// Function to show the information container
function showInfo(event) {
    const infoKey = event.target.getAttribute('data-info');
    const contentDiv = document.getElementById(infoKey);
    infoContent.innerHTML = contentDiv.innerHTML; // Set the content based on the button clicked
    infoContainer.style.display = 'flex';
}

// Function to hide the information container
function hideInfo() {
    infoContainer.style.display = 'none';
}

// Add event listeners to buttons for click
infoButtons.forEach(button => {
    button.addEventListener('click', showInfo);
});

// Close button functionality
closeBtn.addEventListener('click', hideInfo);

// Close the info container when clicking outside of it
infoContainer.addEventListener('click', function(event) {
    if (event.target === infoContainer) {
        hideInfo();
    }
});