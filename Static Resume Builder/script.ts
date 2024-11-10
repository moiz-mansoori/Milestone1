// Selecting toggle button and skills section
const toggleButton = document.querySelector('#toggle-skills') as HTMLButtonElement;
const skills = document.querySelector('#skills') as HTMLElement;

// Initial state for skills visibility
let isVisible = false;

// Add event listener for button click with animation effect
toggleButton.addEventListener('click', () => {
    isVisible = !isVisible;

    // Toggle visibility with smooth transition
    skills.style.display = isVisible ? 'block' : 'none';
    skills.style.opacity = isVisible ? '1' : '0';
    skills.style.transition = 'opacity 0.5s ease-in-out';

    // Change button text based on visibility
    toggleButton.textContent = isVisible ? 'Hide Skills' : 'Show Skills';
});
