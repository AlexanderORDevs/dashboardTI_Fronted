const API_URL = import.meta.env.VITE_API_URL;

export const getAllRoles = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_URL}/roles/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error('Error function getAllRoles:', error);
    throw error;
  }
};
