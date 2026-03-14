// Simple form handling and UX improvements

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.style.color = 'crimson';
      feedback.textContent = 'Please complete all fields before sending.';
      return;
    }

    // Disable button to prevent multiple submits
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate sending (replace with real request if needed)
    setTimeout(function () {
      // Show confirmation
      feedback.style.color = 'green';
      feedback.textContent = 'Thank you — we have received your message. We will be in touch shortly.';

      // Reset form
      form.reset();

      // Re-enable button after short delay
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }, 900);
  });

  // Optional: keyboard accessibility for flip boxes (toggle on Enter)
  const flipBoxes = document.querySelectorAll('.flip-box');
  flipBoxes.forEach(box => {
    box.setAttribute('tabindex', '0');
    box.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        box.querySelector('.flip-box-inner').classList.toggle('flipped');
      }
    });
  });
});
