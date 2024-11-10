// Selecting toggle button and skills section
var toggleButton = document.querySelector('#toggle-skills');
var skills = document.querySelector('#skills');
// Initial state for skills visibility
var isVisible = false;
// Add event listener for button click with animation effect
toggleButton.addEventListener('click', function () {
    isVisible = !isVisible;
    // Toggle visibility with smooth transition
    skills.style.display = isVisible ? 'block' : 'none';
    skills.style.opacity = isVisible ? '1' : '0';
    skills.style.transition = 'opacity 0.5s ease-in-out';
    // Change button text based on visibility
    toggleButton.textContent = isVisible ? 'Hide Skills' : 'Show Skills';
});
