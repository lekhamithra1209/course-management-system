import { state } from './state.js';
import { rules } from './validation.js';
import { login, register, logout } from './auth.js';
import { fetchCourses } from './api.js';
import { renderNav, validateForm, setFieldMsg, showAlert, renderDashboard } from './ui.js';

const page = document.body.dataset.page;
renderNav();

// live validation when leaving a field
document.querySelectorAll('[data-rule]').forEach((i) =>
  i.addEventListener('blur', () =>
    setFieldMsg(i, rules[i.dataset.rule](i.value, Object.fromEntries(new FormData(i.form))))
  )
);

const submit = (id, handler) =>
  document.getElementById(id)?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(e.target, rules)) return showAlert('err', 'Please fix the highlighted fields.');
    try { await handler(Object.fromEntries(new FormData(e.target))); }
    catch (err) { showAlert('err', err.message); }
  });

// logged-in users don't need login/register
if (state.user && (page === 'login' || page === 'register')) location.href = 'dashboard.html';

submit('loginForm', async (d) => {
  await login(d.identifier, d.password);
  showAlert('ok', 'Login successful! Redirecting…');
  setTimeout(() => (location.href = 'dashboard.html'), 600);
});

submit('registerForm', async (d) => {
  await register(d);
  showAlert('ok', 'Registered successfully! Redirecting to login…');
  setTimeout(() => (location.href = 'login.html'), 900);
});

if (page === 'dashboard') {
  if (!state.user) location.href = 'login.html';
  else {
    document.getElementById('sideLogout').onclick = logout;
    fetchCourses()
      .then((c) => { document.getElementById('courseState').hidden = true; renderDashboard(c); })
      .catch(() => (document.getElementById('courseState').textContent = 'Could not load courses. Try again.'));
  }
}