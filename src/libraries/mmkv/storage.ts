import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'MOOD-TRACKER',
  encryptionKey: 'Mood123!@#',
});

export const storeDataStorage = (storageKey: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  storage.set(storageKey, jsonValue);
};

export const getDataStorage = (storageKey: string) => {
  const jsonValue = storage.getString(storageKey);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const removeKeyStorage = (storageKey: string) => {
  storage.delete(storageKey);
};

export const clearStorage = () => {
  storage.clearAll();
};
