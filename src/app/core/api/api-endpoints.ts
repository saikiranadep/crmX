import { environment } from '../../environments/environment';

const API = environment.apiBaseUrl;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API}/auth/login`,

    LOGOUT: `${API}/auth/logout`,

    PROFILE: `${API}/auth/profile`,
  },

  LEADS: {
    LIST: `${API}/leads`,

    DETAIL: (id: number) => `${API}/leads/${id}`,

    CREATE: `${API}/leads`,

    UPDATE: (id: number) => `${API}/leads/${id}`,

    DELETE: (id: number) => `${API}/leads/${id}`,
  },
};
