const API_URL = import.meta.env.VITE_API_URL;

export const updatedRegister = async (payload) => {
  try {
    const token = localStorage.getItem('token');
    let endpoint = '/uatLandingUpdate';
    if (payload.uatType === 'did_select') {
      endpoint = '/uatDidUpdate';
    }
    const { id, ...dataToUpdate } = payload;
    const url = `${API_URL}${endpoint}/${id}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToUpdate),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error while updating the record');
    }
    console.log('Record updated successfully');
    return await response.json();
  } catch (error) {
    console.error('Error function updatedRegister:', error);
    throw error;
  }
};
