import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  customerList: Array <Customer> = [] ;
  objectArray = [{ name: '', surname: '' }];
   temp = new Customer() ;
  // customer = ['ahmet', 'mehmet', ' rustem'];
  constructor() {}
  // temp = new Customer('mName', 'mSurname ');
  customers: Customer[] = [];
  userTestStatus: { id: number; name: string }[] = [ // 2 parametreli  object array
    { id: 0, name: 'Available' },
    { id: 1, name: 'Ready' },
    { id: 2, name: 'Started' }
  ];

  secondTestStatus = [   // 2 parametreli  object array
    { id: 0, name: 'Available' },
    { id: 1, name: 'Ready' },
    { id: 2, name: 'Started' }
  ];

  nextStatus: { id: number; name: string } = { id: null, name: '' }; // 2 parametreli obje
  ngOnInit() {
    this.nextStatus.id = 30;
    this.nextStatus.name = ' nextStatus ';
    this.userTestStatus.push({ id: 100, name: 'test-name' });
    this.objectArray.push({ name: 'objectname', surname: 'objectsurname' });
    this.objectArray.push({
      name: this.nextStatus.name,
      surname: this.nextStatus.name
    });
   // this.customer.push('salih');
    // console.log(this.customers);
/*
    console.log(this.nextStatus.name, this.nextStatus.id);
       this.temp =  new Customer('mName', 'mSurname ');
       console.log(this.temp); */
  }
}
