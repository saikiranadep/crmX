import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent
  ],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  readonly sidebarOpen = signal(false);
  readonly sidebarCollapsed = signal(false);

  toggleSidebar(): void {

    this.sidebarOpen.update(value => !value);

  }

  closeSidebar(): void {

    this.sidebarOpen.set(false);

  }
  
  toggleCollapse(): void {

    this.sidebarCollapsed.update(value => !value);

  }

}