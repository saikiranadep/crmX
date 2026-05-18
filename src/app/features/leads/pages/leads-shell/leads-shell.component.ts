import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeadsListComponent }
from '../../components/leads-list/leads-list.component';

@Component({
  selector: 'app-leads-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    LeadsListComponent
  ],
  templateUrl: './leads-shell.component.html'
})
export class LeadsShellComponent {

}