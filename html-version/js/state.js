// Centralised state (Task 5), persisted in localStorage
const read = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };

export const state = { user: read('ss_user'), selectedCourse: read('ss_course') };

export function setUser(u) {
  state.user = u;
  u ? localStorage.setItem('ss_user', JSON.stringify(u)) : localStorage.removeItem('ss_user');
}
export function setCourse(id) {
  state.selectedCourse = id;
  localStorage.setItem('ss_course', JSON.stringify(id));
}