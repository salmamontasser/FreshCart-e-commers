import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmoodService {

  constructor() { }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  // Optionally, save the user's preference in localStorage
  setDarkMode(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('user-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('user-theme', 'light');
    }
  }

  // Load the theme preference when the service initializes
  loadThemePreference(): void {
    const theme = localStorage.getItem('user-theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
