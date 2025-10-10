const API_URL = import.meta.env.VITE_API_URL;

export const deleteUsers = async (payload) => {
  try {
    const token = localStorage.getItem('token');
    const { id } = payload;
    const url = `${API_URL}/deleteUser/${id}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error while deleting the user');
    }
    console.log('User deleted successfully');
    return await response.json();
  } catch (error) {
    console.error('Error function deleteUsers:', error);
    throw error;
  }
};
