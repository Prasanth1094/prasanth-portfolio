// API endpoint constants
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  PROJECTS: '/api/projects',
  EXPERIENCE: '/api/experience',
  SKILLS: '/api/skills',
  ADMIN: '/api/admin'
};

// API base URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Common validation patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s\-\(\)]{10,}$/,
  URL: /^https?:\/\/.+/
};

// Common error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Resource not found.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.'
};

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

// Project categories
export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'react', label: 'React' },
  { key: 'angular', label: 'Angular' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'python', label: 'Python' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'nodejs', label: 'Node.js' }
];

// Contact form status
export const CONTACT_STATUS = {
  UNREAD: 'unread',
  READ: 'read',
  REPLIED: 'replied'
};
