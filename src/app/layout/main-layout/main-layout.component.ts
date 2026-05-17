import { Component, signal, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  private readonly router = inject(Router);
  readonly sidebarOpen = signal(false);
  readonly sidebarCollapsed = signal(false);
 
  constructor() {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.sidebarOpen.set(false);

      });

  }
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