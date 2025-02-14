// Basic contact form submission handling

document.getElementById('closePopup').addEventListener('click', function () {
  document.getElementById('popup').classList.add('hidden');
});

// Reusable function to show the popup
function showPopup(title, message) {
  const popup = document.getElementById('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h3>${title}</h3>
      <br>
      <p>${message}</p>
      <br>
      <button id="closePopup" class="btn">Close</button>
    </div>
  `;
  popup.classList.remove('hidden');

  document.getElementById('closePopup').addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

// Contact form submission handler showing the custom popup
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    showPopup(
      'Message Received',
      'Your message has been received, we will get back to you.'
    );
    this.reset();
  });

// Download buttons click handler remains the same using the reusable popup
document.querySelectorAll('.download-btn').forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    showPopup(
      'App Under Development',
      'The app will be released in coming months.'
    );
  });
});

// Toggle navigation on small screen
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
}
