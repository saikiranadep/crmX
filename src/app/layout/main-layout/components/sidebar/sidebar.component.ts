import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  private readonly router = inject(Router);

  @Input()
  collapsed = false;

  @Output()
  readonly toggleCollapse = new EventEmitter<void>();

  @Output()
  readonly closeSidebar = new EventEmitter<void>();

  logout(): void {

    localStorage.clear();

    this.router.navigate(['/login']);

  }

}