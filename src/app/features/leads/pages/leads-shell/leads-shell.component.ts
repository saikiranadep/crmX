import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule } from '@angular/router';

import { LeadsListComponent }
from '../../components/leads-list/leads-list.component';

@Component({
  selector: 'app-leads-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    LeadsListComponent
  ],
  templateUrl: './leads-shell.component.html'
})
export class LeadsShellComponent {
  private readonly router = inject(Router);

  createLead(): void {
      this.router.navigate(['/app/leads/create']);
  }

}