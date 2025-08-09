export async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const apiUrl = import.meta.env.VITE_API_URL;

  const res = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    }
  });

  const text = await res.text();

  const data = text ? JSON.parse(text) : text;

  if (!res.ok) {
    const message = data?.message || 'Unknown error';
    throw new Error(message);
  }

  return data;
}
