import { apiClient } from "./instance";

export function createCrudApi<T>(resourse: string) {
  async function getAll(): Promise<T[]> {
    const { data } = await apiClient.get(`${resourse}`);
    return data;
  }

  async function getById(id: string): Promise<T> {
    const { data } = await apiClient.get(`/${resourse}/${id}`);
    return data;
  }

  async function create(payload: Partial<T>): Promise<T> {
    const { data } = await apiClient.post(`/${resourse}`, payload);
    return data;
  }

  async function update(id: string, payload: Partial<T>): Promise<T> {
    const { data } = await apiClient.put(`${resourse}/${id}`, payload);
    return data;
  }

  async function remove(id: string): Promise<void> {
    const { data } = await apiClient.delete(`/${resourse}/${id}`);
    return data;
  }

  return { getAll, getById, create, update, remove };
}
