import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { CommonModule,DatePipe } from '@angular/common';

import { LeadsService } from '../../services/leads.service';

@Component({
  selector: 'app-leads-detail',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './leads-detail.component.html'
})
export class LeadsDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  readonly leadsService = inject(LeadsService);

  // readonly id =
  // Number(this.route.snapshot.paramMap.get('id'));

  // lead: any;

  // ngOnInit(): void {

  //   this.lead =
  //     this.leadsService.getLeadById(this.id);
  //     console.log("DeatilLead",this.lead);

  // }
  // readonly lead =
  //   this.leadsService.getLeadById(this.id);

  lead: any;
  leadId = 0;
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.leadId =
        Number(params.get('id'));

      this.lead =
        this.leadsService.getLeadById(this.leadId);

      // console.log('DetailLead', this.lead);

    });

  }
  editLead(): void {

    this.router.navigate([
      '/app/leads',
      this.leadId,
      'edit'
    ]);

  }
  deleteLead() {
    console.log('Delete clicked');
  }

}