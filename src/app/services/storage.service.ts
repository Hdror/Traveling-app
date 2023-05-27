import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  loadFromStorage(key: string) {
    var val = localStorage.getItem(key)
    return val ? JSON.parse(val) : null
  }

  saveToStorage(key: string, val: any) {
    localStorage[key] = JSON.stringify(val)
  }
}
