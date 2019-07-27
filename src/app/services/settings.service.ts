import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  setttings : Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }
  constructor() { 
    if(localStorage.getItem('settings')!=null){
      this.setttings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.setttings;
  }

  changeSettings(settings: Settings){
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
