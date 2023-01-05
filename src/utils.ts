export const getItem = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const setItem = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
