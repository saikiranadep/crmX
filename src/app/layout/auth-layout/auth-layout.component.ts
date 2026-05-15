import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-slate-950">
      <router-outlet />
    </div>
  `
  // templateUrl: './auth-layout.component.html',
  // styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
