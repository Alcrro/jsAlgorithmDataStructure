class LocalStorage {
  constructor() {}

  setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStorage(key) {
    const data = localStorage.getItem(key);

    return JSON.parse(data);
  }
}

export default LocalStorage;
