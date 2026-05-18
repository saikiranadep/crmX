import {
  Component,
  signal,
  inject
} from '@angular/core';

import {
  Router,
  RouterOutlet,
  NavigationStart,
  NavigationEnd
} from '@angular/router';

import { LoaderService }
from './core/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title =
    signal('crmX');

  private readonly router =
    inject(Router);

  readonly loaderService =
    inject(LoaderService);

  constructor() {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        const url = event.url;
        /*
        |--------------------------------------------------------------------------
        | SHOW LOADER ONLY
        |--------------------------------------------------------------------------
        */

        const showLoader =
          url === '/login' ||
          url === '/app' ||
          url === '/app/home' ||
          url === '/app/dashboard';

        if (showLoader) {

          this.loaderService.show();

        }

      }

      if (event instanceof NavigationEnd) {

        setTimeout(() => {

          this.loaderService.hide();

        }, 200);

      }

    });

  }

}