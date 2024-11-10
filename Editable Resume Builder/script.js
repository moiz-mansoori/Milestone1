var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Form submit handler
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault(); // Prevent page reload
    // Collect input values with default values for better error handling
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim()) || "Not Provided";
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim()) || "Not Provided";
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value.trim()) || "Not Provided";
    var education = ((_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value.trim()) || "Not Provided";
    var experience = ((_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value.trim()) || "Not Provided";
    var skills = ((_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value.trim()) || "Not Provided";
    // Generate dynamic resume content with enhanced structure
    var resumeHTML = "\n        <div style=\"border-bottom: 2px solid #00796b; margin-bottom: 20px;\">\n            <h2 style=\"color: #004d40; text-align: center; margin-bottom: 10px;\"><b>My Editable Resume</b></h2>\n        </div>\n        \n        <div style=\"padding: 10px; background-color: #e0f2f1; border-radius: 8px;\">\n            <h3 style=\"color: #006064;\">Personal Information</h3>\n            <p><b>Name:</b> <span contenteditable=\"true\" style=\"color: #004d40;\">".concat(name, "</span></p>\n            <p><b>Email:</b> <span contenteditable=\"true\" style=\"color: #004d40;\">").concat(email, "</span></p>\n            <p><b>Phone:</b> <span contenteditable=\"true\" style=\"color: #004d40;\">").concat(phone, "</span></p>\n        </div>\n\n        <div style=\"padding: 10px; background-color: #e1f5fe; margin-top: 15px; border-radius: 8px;\">\n            <h3 style=\"color: #0277bd;\">Education</h3>\n            <p contenteditable=\"true\" style=\"color: #01579b;\">").concat(education, "</p>\n        </div>\n\n        <div style=\"padding: 10px; background-color: #fff3e0; margin-top: 15px; border-radius: 8px;\">\n            <h3 style=\"color: #fb8c00;\">Experience</h3>\n            <p contenteditable=\"true\" style=\"color: #e65100;\">").concat(experience, "</p>\n        </div>\n\n        <div style=\"padding: 10px; background-color: #f1f8e9; margin-top: 15px; border-radius: 8px;\">\n            <h3 style=\"color: #558b2f;\">Skills</h3>\n            <p contenteditable=\"true\" style=\"color: #33691e;\">").concat(skills, "</p>\n        </div>\n        \n        <button id=\"print-btn\" style=\"margin-top: 20px; padding: 10px; width: 100%; background-color: #00796b; color: #ffffff; border: none; border-radius: 8px; cursor: pointer;\">\n            Print Resume\n        </button>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        // Add Print functionality
        var printButton = document.getElementById('print-btn');
        printButton === null || printButton === void 0 ? void 0 : printButton.addEventListener('click', function () {
            window.print();
        });
    }
    else {
        console.error('The Resume Display Element is missing');
        alert('Error: Unable to display the resume. Please check your form.');
    }
});
