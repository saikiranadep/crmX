import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { LeadsService }
from '../../services/leads.service';

@Component({
  selector: 'app-lead-redirect',
  standalone: true,
  template: ''
})
export class LeadsRedirectComponent {

  private readonly router = inject(Router);

  private readonly leadsService =
    inject(LeadsService);

  constructor() {

    const leads =
      this.leadsService.leads();

    if (leads.length > 0) {

      const latestLead =
        leads[leads.length - 1];

      this.router.navigate([
        '/app/leads',
        latestLead.id,
        'detail'
      ]);

    }
    else {

      this.router.navigate([
        '/app/leads/create'
      ]);

    }

  }

}