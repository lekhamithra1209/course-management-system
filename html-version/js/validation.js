// Each rule returns an error message, or '' when valid
export const rules = {
  required: (v) => (v.trim() ? '' : 'This field is required'),
  name: (v) => (v.trim().length >= 3 ? '' : 'Enter your full name (min 3 characters)'),
  studentId: (v) => (/^[A-Za-z]{2}\d{4,}$/.test(v.trim()) ? '' : 'Use the format PR2025001'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email address'),
  phone: (v) => (/^[6-9]\d{9}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit phone number'),
  password: (v) => (v.length >= 6 ? '' : 'Password must be at least 6 characters'),
  confirm: (v, all) => (v && v === all.password ? '' : 'Passwords do not match'),
};