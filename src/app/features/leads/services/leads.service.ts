import { Injectable, signal } from '@angular/core';
import { Lead } from '../models/leads.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  readonly leads = signal<Lead[]>([
    {
      id: 1,
      fullName: 'John Doe',
      company: 'Google',
      email: 'john@google.com',
      phone: '+91 9876543210',
      source: 'Website, It shoulkd be from import section via only need it in websrite the data is migrated from database to crm ',
      status: 'New',
      assignedTo: 'Admin',
      budget: 15000,
      notes: 'Interested in CRM solution.',
      createdAt: '2026-05-17'
    },
    {
      id: 2,
      fullName: 'Sarah Smith',
      company: 'Amazon',
      email: 'sarah@amazon.com',
      phone: '+91 9988776655',
      source: 'LinkedIn',
      status: 'Qualified',
      assignedTo: 'Admin',
      budget: 30000,
      notes: 'Needs enterprise onboarding.',
      createdAt: '2026-05-16'
    },
    {
    id: 3,
    fullName: 'Daniel Brown',
    company: 'Tesla',
    email: 'daniel@tesla.com',
    phone: '+91 9123456780',
    source: 'Referral',
    status: 'Contacted',
    assignedTo: 'Rahul',
    budget: 18000,
    notes: 'Requested product demo.',
    createdAt: '2026-05-16'
  },
  {
    id: 4,
    fullName: 'Sophia Wilson',
    company: 'Meta',
    email: 'sophia@meta.com',
    phone: '+91 9876123490',
    source: 'Website',
    status: 'Proposal Sent',
    assignedTo: 'Admin',
    budget: 60000,
    notes: 'Waiting for management approval.',
    createdAt: '2026-05-15'
  },
  {
    id: 5,
    fullName: 'James Taylor',
    company: 'Adobe',
    email: 'james@adobe.com',
    phone: '+91 9765432109',
    source: 'Email Campaign',
    status: 'New',
    assignedTo: 'Priya',
    budget: 12000,
    notes: 'Interested in marketing tools.',
    createdAt: '2026-05-14'
  },
  {
    id: 6,
    fullName: 'Olivia Martinez',
    company: 'Spotify',
    email: 'olivia@spotify.com',
    phone: '+91 9988123456',
    source: 'LinkedIn',
    status: 'Qualified',
    assignedTo: 'Rahul',
    budget: 35000,
    notes: 'Needs onboarding support.',
    createdAt: '2026-05-13'
  },
  {
    id: 7,
    fullName: 'William Anderson',
    company: 'Intel',
    email: 'william@intel.com',
    phone: '+91 9898989898',
    source: 'Website',
    status: 'Closed',
    assignedTo: 'Admin',
    budget: 80000,
    notes: 'Deal successfully closed.',
    createdAt: '2026-05-12'
  },
  {
    id: 8,
    fullName: 'Ava Thomas',
    company: 'Oracle',
    email: 'ava@oracle.com',
    phone: '+91 9001122334',
    source: 'Referral',
    status: 'Contacted',
    assignedTo: 'Priya',
    budget: 27000,
    notes: 'Asked for pricing details.',
    createdAt: '2026-05-11'
  },
  {
    id: 9,
    fullName: 'Benjamin Harris',
    company: 'IBM',
    email: 'benjamin@ibm.com',
    phone: '+91 9345678901',
    source: 'Website',
    status: 'Proposal Sent',
    assignedTo: 'Rahul',
    budget: 50000,
    notes: 'Proposal shared via email.',
    createdAt: '2026-05-10'
  },
  {
    id: 10,
    fullName: 'Charlotte Clark',
    company: 'Salesforce',
    email: 'charlotte@salesforce.com',
    phone: '+91 9877001122',
    source: 'LinkedIn',
    status: 'Qualified',
    assignedTo: 'Admin',
    budget: 41000,
    notes: 'Needs CRM customization.',
    createdAt: '2026-05-09'
  },
  {
    id: 11,
    fullName: 'Ethan Lewis',
    company: 'Uber',
    email: 'ethan@uber.com',
    phone: '+91 9234567810',
    source: 'Cold Call',
    status: 'New',
    assignedTo: 'Priya',
    budget: 15000,
    notes: 'Requested follow-up next week.',
    createdAt: '2026-05-08'
  },
  {
    id: 12,
    fullName: 'Mia Walker',
    company: 'Airbnb',
    email: 'mia@airbnb.com',
    phone: '+91 9012345678',
    source: 'Website',
    status: 'Contacted',
    assignedTo: 'Rahul',
    budget: 22000,
    notes: 'Interested in analytics dashboard.',
    createdAt: '2026-05-07'
  },
  {
    id: 13,
    fullName: 'Alexander Hall',
    company: 'Samsung',
    email: 'alex@samsung.com',
    phone: '+91 9887766554',
    source: 'Referral',
    status: 'Closed',
    assignedTo: 'Admin',
    budget: 95000,
    notes: 'Annual contract signed.',
    createdAt: '2026-05-06'
  },
  {
    id: 14,
    fullName: 'Isabella Allen',
    company: 'Cisco',
    email: 'isabella@cisco.com',
    phone: '+91 9876541122',
    source: 'LinkedIn',
    status: 'Proposal Sent',
    assignedTo: 'Priya',
    budget: 37000,
    notes: 'Awaiting technical discussion.',
    createdAt: '2026-05-05'
  },
  {
    id: 15,
    fullName: 'Liam Young',
    company: 'Dell',
    email: 'liam@dell.com',
    phone: '+91 9765123489',
    source: 'Website',
    status: 'Qualified',
    assignedTo: 'Admin',
    budget: 29000,
    notes: 'Interested in long-term partnership.',
    createdAt: '2026-05-04'
  }

  ]);

  getLeadById(id: number): Lead | undefined {

    return this.leads()
      .find(lead => lead.id === id);

  }

}