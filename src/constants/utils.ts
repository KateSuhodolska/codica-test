export const getItem = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const setItem = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

export const temperatureFormat = (value: number) => {
  const result = Math.round(value) - 273;
  return result > 0 ? `+${result}°` : `${result}°`;
};
