document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value;

      if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // Generate certificate content dynamically
      certificateContent.innerHTML = `
          <div>
              <h2 style="margin-bottom: 20px;">Certificate of Achievement</h2>
              <p>This is to certify that</p>
              <h3 style="font-size: 1.8em; margin: 10px 0;">${studentName}</h3>
              <p>has almost completed the</p>
              <h4 style="font-size: 1.5em; margin: 10px 0;">${courseName}</h4>
              <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
              <img src="logo.png" alt="Certificate Logo" style="width: 200px; height: auto; margin: 20px 0;" ${Image}>
              <p style="font-style: italic;">${personalMessage}</p>
          </div>
      `;

      // Display the modal with certificate content
      modal.style.display = 'block';
      modal.style.position = 'absolute';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.zIndex = '1000'; // Ensure it's above other content
      modal.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Slight transparency for background
      modal.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.2)'; // Add a shadow to elevate the modal
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });
});