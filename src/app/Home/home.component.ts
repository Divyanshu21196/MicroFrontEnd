import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl:'./home.component.html', 
  styles: [`
    .home-container {
      max-width: 700px;
      margin: 48px auto;
      padding: 36px 32px;
      background: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 16px rgba(25, 118, 210, 0.08);
      text-align: center;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    h1 {
      color: #1976d2;
      font-size: 2.8em;
      margin-bottom: 18px;
      font-weight: 700;
      letter-spacing: 1px;
      background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      color: #1565c0;
      font-size: 2em;
      margin-bottom: 24px;
      font-weight: 500;
    }
    h3 {
      color: #424242;
      font-size: 1.5em;
      margin-bottom: 16px;
      font-weight: 400;
    }
    .feature-btn {
      background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
      color: #fff;
      border: none;
      padding: 12px 32px;
      border-radius: 6px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      margin-top: 28px;
      box-shadow: 0 2px 8px rgba(25, 118, 210, 0.12);
      transition: background 0.2s, box-shadow 0.2s;
    }
    .feature-btn:hover {
      background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
      box-shadow: 0 4px 16px rgba(25, 118, 210, 0.18);
    }
    p {
      color: #333;
      font-size: 1.15em;
      margin-bottom: 18px;
    }
    a {
      color: #1976d2;
      text-decoration: underline;
      transition: color 0.2s;
    }
    a:hover {
      color: #1565c0;
    }
  `]
})
export class HomeComponent {}