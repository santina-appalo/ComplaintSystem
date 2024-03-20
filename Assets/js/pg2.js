function fetchStudentDetails() {
    var regNumber = document.getElementById('regNumber').value;
    // Perform AJAX request to fetch student details from server
    // For simplicity, I'm assuming a function fetchStudentDetailsFromServer() which returns student details JSON
    var studentDetails = fetchStudentDetailsFromServer(regNumber);
    if (studentDetails) {
      document.getElementById('name').value = studentDetails.name;
      document.getElementById('class').value = studentDetails.class;
    } else {
      alert('Student not found');
    }
  }