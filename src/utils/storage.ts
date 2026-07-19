export const getLocalStorage = <T>(key: string): T | null => {
  if (!key.trim()) {
    return null;
  }
  try {
    const storedItem = localStorage.getItem(key);
    if (!storedItem) {
      return null;
    }
    return JSON.parse(storedItem);
  } catch (error) {
    return null;
  }
};

export const setLocalStorage = <T>({ key, value }: { key: string; value: T }): void => {
  try {
    if (key.trim()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.log('setLocalStorage ~ error:', error);
  }
};
