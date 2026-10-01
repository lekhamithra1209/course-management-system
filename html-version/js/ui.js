import { state, setCourse } from './state.js';
import { logout } from './auth.js';

export function setFieldMsg(input, msg) {
  const el = input.closest('.field').querySelector('.msg');
  input.classList.toggle('invalid', !!msg);
  el.className = 'msg ' + (msg ? 'err' : 'ok');
  el.textContent = msg || (input.value ? '✓ Looks good' : '');
}

export function validateForm(form, rules) {
  const all = Object.fromEntries(new FormData(form));
  let valid = true;
  form.querySelectorAll('[data-rule]').forEach((i) => {
    const msg = rules[i.dataset.rule](i.value, all);
    if (msg) valid = false;
    setFieldMsg(i, msg);
  });
  return valid;
}

export function showAlert(type, text) {
  document.getElementById('formMsg').innerHTML = `<div class="alert ${type}">${text}</div>`;
}

// Dynamic navigation based on login status (Task 4)
export function renderNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-auth]').forEach((el) => {
    el.hidden = el.dataset.auth === (state.user ? 'out' : 'in');
  });
  document.querySelector(`.nav [data-p="${page}"]`)?.classList.add('active');
  document.getElementById('logoutBtn').onclick = logout;
  document.getElementById('menuBtn').onclick = () => document.getElementById('nav').classList.toggle('open');
}

const badge = { 'In Progress': 'b-prog', 'Not Started': 'b-none', Completed: 'b-done' };

export function renderDashboard(courses) {
  const u = state.user;
  const set = (id, v) => (document.getElementById(id).textContent = v);

  set('uName', u.name); set('pName', u.name);
  set('pId', 'Student ID: ' + u.studentId);
  set('pEmail', 'Email: ' + u.email);
  set('pCourse', 'Course: ' + u.course);
  set('pYear', 'Year: ' + u.year);
  set('today', 'Today is ' + new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }));

  set('sEnrolled', courses.length);
  set('sDone', courses.filter((c) => c.status === 'Completed').length);
  set('sProg', courses.filter((c) => c.status === 'In Progress').length);
  set('sCredits', courses.reduce((n, c) => n + c.credits, 0));

  const body = document.getElementById('courseRows');
  body.innerHTML = courses.map((c) => `
    <tr data-id="${c.id}" class="${state.selectedCourse === c.id ? 'sel' : ''}">
      <td>${c.name}</td><td>${c.category}</td>
      <td><span class="badge ${badge[c.status]}">${c.status}</span></td>
      <td><div class="bar"><i style="width:${c.progress}%"></i></div> ${c.progress}%</td>
    </tr>`).join('');

  body.onclick = (e) => {
    const row = e.target.closest('tr'); if (!row) return;
    setCourse(+row.dataset.id);
    body.querySelectorAll('tr').forEach((r) => r.classList.toggle('sel', r === row));
  };
}