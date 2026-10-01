import { findUser, createUser } from './api.js';
import { setUser } from './state.js';

export async function login(id, password) {
  const user = await findUser(id, password);
  if (!user) throw new Error('Incorrect email/ID or password');
  const { password: _, ...safe } = user;
  setUser(safe);
  return safe;
}
export const register = (data) => createUser(data);
export function logout() { setUser(null); location.href = 'login.html'; }