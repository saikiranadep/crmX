import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LeadsService } from '../../services/leads.service';

@Component({
  selector: 'app-leads-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './leads-list.component.html'
})
export class LeadsListComponent {

  private readonly router = inject(Router);

  readonly leadsService = inject(LeadsService);

  openLead(id: number): void {

    this.router.navigate(['/app/leads', id, 'detail']);

  }

  createLead(): void {

    this.router.navigate(['/app/leads/create']);

  }

}