const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

export const createUser = async (payload) => {
  try {
    const response = await fetch(`${API_URL}/users/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error while saving the user');
    }
    console.log('User saved successfully');
    return response.json();
  } catch (error) {
    console.error('Error function createUser:', error);
    throw error;
  }
};
