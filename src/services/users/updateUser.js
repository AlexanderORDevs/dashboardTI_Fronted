const API_URL = import.meta.env.VITE_API_URL;

export const updateUsers = async (payload) => {
  try {
    const token = localStorage.getItem('token');
    const { id, ...dataToUpdateUser } = payload;
    const url = `${API_URL}/updateUser/${id}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToUpdateUser),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error while updating the record');
    }
    console.log('Record updated successfully');
    return await response.json();
  } catch (error) {
    console.error('Error function updateUsers:', error);
    throw error;
  }
};
