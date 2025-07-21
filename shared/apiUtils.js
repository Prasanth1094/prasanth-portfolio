import { API_BASE_URL, ERROR_MESSAGES, HTTP_STATUS } from './constants.js';

/**
 * API utility functions for making HTTP requests
 */

class APIError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Generic fetch wrapper with error handling
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new APIError(
        data.message || ERROR_MESSAGES.SERVER_ERROR,
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    
    // Network or other errors
    throw new APIError(
      ERROR_MESSAGES.NETWORK_ERROR,
      0,
      { originalError: error.message }
    );
  }
};

/**
 * API methods
 */
export const api = {
  // GET request
  get: (endpoint, params = {}) => {
    const searchParams = new URLSearchParams(params);
    const url = searchParams.toString() ? `${endpoint}?${searchParams}` : endpoint;
    return apiRequest(url, { method: 'GET' });
  },

  // POST request
  post: (endpoint, data) => {
    return apiRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // PUT request
  put: (endpoint, data) => {
    return apiRequest(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // DELETE request
  delete: (endpoint) => {
    return apiRequest(endpoint, { method: 'DELETE' });
  },

  // PATCH request
  patch: (endpoint, data) => {
    return apiRequest(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },
};

/**
 * Specific API functions
 */

// Contact API
export const contactAPI = {
  submit: (contactData) => api.post('/api/contact', contactData),
  getAll: (params = {}) => api.get('/api/contact', params),
};

// Projects API
export const projectsAPI = {
  getAll: (params = {}) => api.get('/api/projects', params),
  getById: (id) => api.get(`/api/projects/${id}`),
  getFeatured: () => api.get('/api/projects', { featured: 'true' }),
  getByCategory: (category) => api.get('/api/projects', { category }),
};

// Skills API
export const skillsAPI = {
  getAll: () => api.get('/api/skills'),
};

// Experience API
export const experienceAPI = {
  getAll: () => api.get('/api/experience'),
  getById: (id) => api.get(`/api/experience/${id}`),
};

// Admin API
export const adminAPI = {
  getDashboard: () => api.get('/api/admin/dashboard'),
};

export { APIError };
