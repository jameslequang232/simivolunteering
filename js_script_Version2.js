// Basic client-side behavior for SimiVolunteering

// Set the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form validation and fake submit handler
(function () {
  const form = document.getElementById('contactForm');
  const alertEl = document.getElementById('formAlert');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alertEl.textContent = '';

    // HTML5 constraint validation API
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Simulate sending (replace with real API call if you add one)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple visual feedback
    alertEl.className = 'alert alert-info';
    alertEl.textContent = 'Sending message...';

    // Simulate network delay
    setTimeout(() => {
      alertEl.className = 'alert alert-success';
      alertEl.textContent = `Thanks ${name || 'there'}! Your message was sent (simulated).`;
      form.reset();
      form.classList.remove('was-validated');
    }, 900);
  });
})();