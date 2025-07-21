import { useState } from 'react';

// API base URL - in development, Vite proxy will handle /api routes
const API_BASE_URL = '/api';

/**
 * Custom hook for making API calls
 */
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    makeRequest,
    // Convenience methods
    get: (endpoint) => makeRequest(endpoint),
    post: (endpoint, data) => makeRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    put: (endpoint, data) => makeRequest(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    delete: (endpoint) => makeRequest(endpoint, {
      method: 'DELETE',
    }),
  };
};

/**
 * Hook specifically for contact form submissions
 */
export const useContactForm = () => {
  const api = useApi();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitContact = async (formData) => {
    try {
      const response = await api.post('/contact', formData);
      setIsSubmitted(true);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return {
    ...api,
    submitContact,
    isSubmitted,
    resetForm,
  };
};

/**
 * Hook for fetching portfolio data
 */
export const usePortfolioData = () => {
  const api = useApi();

  const getProjects = () => api.get('/projects');
  const getExperience = () => api.get('/experience');
  const getSkills = () => api.get('/skills');
  const getContactInfo = () => api.get('/contact');

  return {
    ...api,
    getProjects,
    getExperience,
    getSkills,
    getContactInfo,
  };
};
