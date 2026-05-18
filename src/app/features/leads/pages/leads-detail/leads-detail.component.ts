import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { DatePipe } from '@angular/common';

import { LeadsService } from '../../services/leads.service';

@Component({
  selector: 'app-leads-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './leads-detail.component.html'
})
export class LeadsDetailComponent {

  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  readonly leadsService = inject(LeadsService);

  readonly id =
    Number(this.route.snapshot.paramMap.get('id'));

  readonly lead =
    this.leadsService.getLeadById(this.id);

  editLead(): void {

    this.router.navigate([
      '/app/leads',
      this.id,
      'edit'
    ]);

  }

}