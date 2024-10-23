// Toggle theme between light and dark
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});

// Cookie consent logic
const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = document.getElementById('accept-cookies');
window.addEventListener('load', () => {
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieConsent.style.display = 'block';
  }
});

acceptCookies.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookieConsent.style.display = 'none';
});
