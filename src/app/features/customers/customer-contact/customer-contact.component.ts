import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../../../models/customers.model';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.scss']
})
export class CustomerContactComponent implements OnInit {

  @Input() contacts!: IContact[];
  constructor() { }

  ngOnInit(): void {
  }
  updteContact(id: number): void {

  }
}
