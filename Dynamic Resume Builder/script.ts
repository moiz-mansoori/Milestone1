const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values using a helper function
    const getInputValue = (id: string): string => {
        const element = document.getElementById(id) as HTMLInputElement;
        return element?.value.trim() || "N/A"; // Return "N/A" if input is empty
    };

    // Collect input values
    const name = getInputValue('name');
    const email = getInputValue('email');
    const phone = getInputValue('phone');
    const education = getInputValue('education');
    const experience = getInputValue('experience');
    const skills = getInputValue('skills');

    // Generate resume dynamically with unique styling and added content
    const resumeHTML = `
        <h2 style="color: #0073e6; text-align: center; font-family: 'Arial', sans-serif;"><b>Resume</b></h2>
        
        <div style="border-bottom: 2px solid #0073e6; margin-bottom: 10px;">
            <h3 style="color: #005580;">Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> <a href="mailto:${email}" style="color: #0059b3;">${email}</a></p>
            <p><b>Phone:</b> <a href="tel:${phone}" style="color: #0059b3;">${phone}</a></p>
        </div>

        <div style="border-bottom: 2px solid #0073e6; margin-bottom: 10px;">
            <h3 style="color: #005580;">Education</h3>
            <p>${education}</p>
        </div>

        <div style="border-bottom: 2px solid #0073e6; margin-bottom: 10px;">
            <h3 style="color: #005580;">Experience</h3>
            <p>${experience}</p>
        </div>

        <div style="border-bottom: 2px solid #0073e6; margin-bottom: 10px;">
            <h3 style="color: #005580;">Skills</h3>
            <ul style="list-style-type: circle; padding-left: 20px;">
                ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
        </div>

        <p style="text-align: center; color: #003366; font-style: italic;">Generated using a dynamic form</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The Resume Display Element is missing');
    }
});
