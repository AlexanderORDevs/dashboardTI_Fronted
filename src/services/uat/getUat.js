const API_URL = import.meta.env.VITE_API_URL;

export const getUatRecords = async (type = 'landing', filters = {}) => {
  const token = localStorage.getItem('token');
  let endpoint = '/uat/landingGet';
  if (type === 'did') {
    endpoint = '/uat/didGet';
  }
  // Build query string if there are filters
  const query = Object.keys(filters).length
    ? '?' + new URLSearchParams(filters).toString()
    : '';

  const response = await fetch(`${API_URL}${endpoint}${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error function getUatRecords');
  }

  return response.json();
};
