export function setLocalStorageData(key, value) {
    if (localStorage) {
      const jsonStr = JSON.stringify(value);
      localStorage.setItem(key, jsonStr);
      return true;
    }
    return false;
  }
  