const API_URL = import.meta.env.VITE_API_URL;

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  console.log('successful login');
  const data = await res.json();
  localStorage.setItem('token', data.token);
  if (!res.ok)
    throw new Error(data.message || 'Email and password are required');
  return data;
};
