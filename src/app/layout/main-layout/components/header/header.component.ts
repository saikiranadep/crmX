import {
  Component,
  EventEmitter,
  Output,
  inject,
  signal
} from '@angular/core';

import { 
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  private readonly router = inject(Router);

  readonly profileMenuOpen = signal(false);

  private activatedRoute = inject(ActivatedRoute);

  currentPage = 'Home';

  breadcrumbs: string[] = [];

  @Output()
  readonly menuClick = new EventEmitter<void>();

  ngOnInit(): void {

    this.buildBreadcrumb();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.buildBreadcrumb();
        // let route = this.activatedRoute;

        // while (route.firstChild) {
        //   route = route.firstChild;
        // }

        // route.data.subscribe(data => {
        //   // this.currentPage = data['breadcrumb'] || 'Home';
        // });

      });

  }
  private buildBreadcrumb(): void {

    const breadcrumbs: string[] = ['Home'];

    let route = this.activatedRoute.root;

    while (route.firstChild) {

      route = route.firstChild;

      const breadcrumb =
        route.snapshot.data['breadcrumb'];

      if (breadcrumb) {

        breadcrumbs.push(breadcrumb);

      }

    }

    this.breadcrumbs = breadcrumbs;

    this.currentPage =
      breadcrumbs[breadcrumbs.length - 1];

  }

  private updateBreadcrumb(): void {

    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;
    }

    route.data.subscribe(data => {

      this.currentPage =
        data['breadcrumb'] || 'Home';

    });

  }

  toggleProfileMenu(): void {

    this.profileMenuOpen.update(value => !value);

  }

  logout(): void {

    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/login']);

  }

}