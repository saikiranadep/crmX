import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { Router }
from '@angular/router';

import { LeadsService }
from '../../services/leads.service';

@Component({
  selector: 'app-lead-redirect',
  standalone: true,
  template: ''
})
export class LeadsRedirectComponent
implements OnInit {

  private readonly router =
    inject(Router);

  private readonly leadsService =
    inject(LeadsService);

  ngOnInit(): void {

    const leads =
      this.leadsService.leads();

    if (leads.length > 0) {

      const latestLead =
        leads[leads.length - 1];

      // setTimeout(() => {

        this.router.navigate([
          '/app/leads',
          latestLead.id,
          'detail'
        ]);

      // });

    }

    else {

      // setTimeout(() => {

        this.router.navigate([
          '/app/leads/create'
        ]);

      // });

    }

  }

}