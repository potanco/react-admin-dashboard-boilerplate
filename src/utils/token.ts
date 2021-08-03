export const setToken = (): void => localStorage.setItem('token', '12444');
export const getToken = (): string | null => localStorage.getItem('token');
export const clearToken = (): void => localStorage.removeItem('token');
