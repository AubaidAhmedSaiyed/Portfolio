import { useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: { 'Content-Type': 'application/json' },
});

const useContactForm = () => {
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const submit = async (payload) => {
    setStatus({ loading: true, success: false, error: '' });
    try {
      const response = await api.post('/api/contact', payload);
      setStatus({ loading: false, success: true, error: '' });
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || 'Unable to submit message';
      setStatus({ loading: false, success: false, error: message });
      throw new Error(message);
    }
  };

  return { status, submit };
};

export default useContactForm;
