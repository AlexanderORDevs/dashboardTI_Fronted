const API_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_URL}/allProducts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error('Error function getAllProducts:', error);
    throw error;
  }
};
