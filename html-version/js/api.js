// Mock API: data lives in localStorage, calls are async like real HTTP
const wait = (ms = 400) => new Promise((r) => setTimeout(r, ms));

const users = () =>
  JSON.parse(localStorage.getItem('ss_users') || 'null') || [
    { name: 'Mithra', studentId: 'PR2025001', email: 'mithra@example.com', phone: '9876543210',
      course: 'B.Sc. Computer Science', year: '2nd Year', password: '123456' },
  ];

const COURSES = [
  { id: 1, name: 'Web Development', category: 'Computer Science', status: 'In Progress', progress: 60, credits: 4 },
  { id: 2, name: 'Database Systems', category: 'Computer Science', status: 'In Progress', progress: 40, credits: 3 },
  { id: 3, name: 'Machine Learning', category: 'AI & Data Science', status: 'Not Started', progress: 0, credits: 3 },
  { id: 4, name: 'Design Thinking', category: 'General', status: 'Completed', progress: 100, credits: 2 },
];

export async function findUser(id, password) {
  await wait();
  const key = id.trim().toLowerCase();
  return users().find(
    (u) => (u.email.toLowerCase() === key || u.studentId.toLowerCase() === key) && u.password === password
  ) || null;
}

export async function createUser(data) {
  await wait();
  const list = users();
  if (list.some((u) => u.email.toLowerCase() === data.email.toLowerCase()))
    throw new Error('This email is already registered');
  const { confirm, ...user } = data;
  localStorage.setItem('ss_users', JSON.stringify([...list, user]));
  return user;
}

export async function fetchCourses() { await wait(500); return COURSES; }