document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const studentAge = document.getElementById('studentAge').value;
    const studentCourse = document.getElementById('studentCourse').value;

    if (studentName && studentAge && studentCourse) {
        const studentList = document.getElementById('students');

        // Create new list item
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>Name:</strong> ${studentName} | <strong>Age:</strong> ${studentAge} | <strong>Course:</strong> ${studentCourse}</span>
            <button class="delete">Delete</button>
        `;

        // Delete button functionality
        li.querySelector('.delete').addEventListener('click', function() {
            studentList.removeChild(li);
        });

        // Add to list
        studentList.appendChild(li);

        // Clear the form fields
        document.getElementById('studentName').value = '';
        document.getElementById('studentAge').value = '';
        document.getElementById('studentCourse').value = '';
    } else {
        alert("All fields are required.");
    }
});
