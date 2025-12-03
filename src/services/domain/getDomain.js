const API_URL = import.meta.env.VITE_API_URL;

export const getAllDomains = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_URL}/domains/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error('Error function getAllDomains:', error);
    throw error;
  }
};
