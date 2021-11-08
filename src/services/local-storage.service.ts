import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  setItem = (key: string, item: object | string) => {
    if (typeof item === 'object') {
      localStorage.setItem(key, JSON.stringify(item));
    } else {
      localStorage.setItem(key, item);
    }
  };

  removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  clear = () => {
    localStorage.clear();
  };

}