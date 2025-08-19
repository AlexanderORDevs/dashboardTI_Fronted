const API_URL = import.meta.env.VITE_API_URL;

export const saveRegister = async (payload) => {
  try {
    const token = localStorage.getItem('token');
    let endpoint = '/landingUatCreate';

    if (payload.uatType === 'did_select') {
      endpoint = '/didUatCreate';
    }
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error while saving the record');
    }
    console.log('Record saved successfully');
    return await response.json();
  } catch (error) {
    console.error('Error function saveRegister:', error);
    throw error;
  }
};
