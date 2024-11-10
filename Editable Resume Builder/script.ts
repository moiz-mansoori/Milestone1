const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Form submit handler
form?.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values with default values for better error handling
    const name = (document.getElementById('name') as HTMLInputElement)?.value.trim() || "Not Provided";
    const email = (document.getElementById('email') as HTMLInputElement)?.value.trim() || "Not Provided";
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value.trim() || "Not Provided";
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value.trim() || "Not Provided";
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value.trim() || "Not Provided";
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value.trim() || "Not Provided";

    // Generate dynamic resume content with enhanced structure
    const resumeHTML = `
        <div style="border-bottom: 2px solid #00796b; margin-bottom: 20px;">
            <h2 style="color: #004d40; text-align: center; margin-bottom: 10px;"><b>My Editable Resume</b></h2>
        </div>
        
        <div style="padding: 10px; background-color: #e0f2f1; border-radius: 8px;">
            <h3 style="color: #006064;">Personal Information</h3>
            <p><b>Name:</b> <span contenteditable="true" style="color: #004d40;">${name}</span></p>
            <p><b>Email:</b> <span contenteditable="true" style="color: #004d40;">${email}</span></p>
            <p><b>Phone:</b> <span contenteditable="true" style="color: #004d40;">${phone}</span></p>
        </div>

        <div style="padding: 10px; background-color: #e1f5fe; margin-top: 15px; border-radius: 8px;">
            <h3 style="color: #0277bd;">Education</h3>
            <p contenteditable="true" style="color: #01579b;">${education}</p>
        </div>

        <div style="padding: 10px; background-color: #fff3e0; margin-top: 15px; border-radius: 8px;">
            <h3 style="color: #fb8c00;">Experience</h3>
            <p contenteditable="true" style="color: #e65100;">${experience}</p>
        </div>

        <div style="padding: 10px; background-color: #f1f8e9; margin-top: 15px; border-radius: 8px;">
            <h3 style="color: #558b2f;">Skills</h3>
            <p contenteditable="true" style="color: #33691e;">${skills}</p>
        </div>
        
        <button id="print-btn" style="margin-top: 20px; padding: 10px; width: 100%; background-color: #00796b; color: #ffffff; border: none; border-radius: 8px; cursor: pointer;">
            Print Resume
        </button>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;

        // Add Print functionality
        const printButton = document.getElementById('print-btn');
        printButton?.addEventListener('click', () => {
            window.print();
        });
    } else {
        console.error('The Resume Display Element is missing');
        alert('Error: Unable to display the resume. Please check your form.');
    }
});
