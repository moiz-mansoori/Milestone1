var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values using a helper function
    var getInputValue = function (id) {
        var element = document.getElementById(id);
        return (element === null || element === void 0 ? void 0 : element.value.trim()) || "N/A"; // Return "N/A" if input is empty
    };
    // Collect input values
    var name = getInputValue('name');
    var email = getInputValue('email');
    var phone = getInputValue('phone');
    var education = getInputValue('education');
    var experience = getInputValue('experience');
    var skills = getInputValue('skills');
    // Generate resume dynamically with unique styling and added content
    var resumeHTML = "\n        <h2 style=\"color: #0073e6; text-align: center; font-family: 'Arial', sans-serif;\"><b>Resume</b></h2>\n        \n        <div style=\"border-bottom: 2px solid #0073e6; margin-bottom: 10px;\">\n            <h3 style=\"color: #005580;\">Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> <a href=\"mailto:").concat(email, "\" style=\"color: #0059b3;\">").concat(email, "</a></p>\n            <p><b>Phone:</b> <a href=\"tel:").concat(phone, "\" style=\"color: #0059b3;\">").concat(phone, "</a></p>\n        </div>\n\n        <div style=\"border-bottom: 2px solid #0073e6; margin-bottom: 10px;\">\n            <h3 style=\"color: #005580;\">Education</h3>\n            <p>").concat(education, "</p>\n        </div>\n\n        <div style=\"border-bottom: 2px solid #0073e6; margin-bottom: 10px;\">\n            <h3 style=\"color: #005580;\">Experience</h3>\n            <p>").concat(experience, "</p>\n        </div>\n\n        <div style=\"border-bottom: 2px solid #0073e6; margin-bottom: 10px;\">\n            <h3 style=\"color: #005580;\">Skills</h3>\n            <ul style=\"list-style-type: circle; padding-left: 20px;\">\n                ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n        </div>\n\n        <p style=\"text-align: center; color: #003366; font-style: italic;\">Generated using a dynamic form</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is missing');
    }
});
