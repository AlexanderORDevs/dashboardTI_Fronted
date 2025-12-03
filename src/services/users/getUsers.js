const API_URL = import.meta.env.VITE_API_URL;

export const getAllUsers = async (token) => {
  try {
    const res = await fetch(`${API_URL}/users/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error('Error function getAllUsers:', error);
    throw error;
  }
};
