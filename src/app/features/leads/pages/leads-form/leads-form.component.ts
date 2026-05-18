import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';

import { LeadsService }
from '../../services/leads.service';

@Component({
  selector: 'app-leads-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './leads-form.component.html'
})
export class LeadsFormComponent
implements OnInit {

  private readonly fb =
    inject(FormBuilder);

  private readonly router =
    inject(Router);

  private readonly route =
    inject(ActivatedRoute);

  private readonly leadsService =
    inject(LeadsService);

  readonly id =
    this.route.snapshot.paramMap.get('id');

  readonly isEditMode =
    !!this.id;

  readonly leadForm =
    this.fb.group({

      fullName: [
        '',
        Validators.required
      ],

      company: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        Validators.required
      ],

      source: [
        ''
      ],

      status: [
        ''
      ],

      assignedTo: [
        ''
      ],

      budget: [
        0
      ],

      notes: [
        ''
      ],

      createdAt: [
        ''
      ]

    });

  ngOnInit(): void {

    if (this.isEditMode) {

      const lead =
        this.leadsService
          .getLeadById(Number(this.id));

      if (lead) {

        this.leadForm.patchValue({
          fullName: lead.fullName,
          company: lead.company,
          email: lead.email,
          phone: lead.phone,
          source: lead.source,
          status: lead.status,
          assignedTo: lead.assignedTo,
          budget: lead.budget,
          notes: lead.notes,
          createdAt: lead.createdAt
        });

      }

    }

  }

  submit(): void {

    if (this.leadForm.invalid) {

      this.leadForm.markAllAsTouched();

      return;

    }

    const payload =
      this.leadForm.getRawValue();

    console.log(payload);

    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    if (!this.isEditMode) {

      console.log('CREATE API');

    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    else {

      console.log('UPDATE API');

    }

    this.router.navigate([
      '/app/leads'
    ]);

  }

}