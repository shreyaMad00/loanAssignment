import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-loan-component',
  templateUrl: './house-loan-component.component.html',
  styleUrls: ['./house-loan-component.component.css']
})
export class HouseLoanComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amount:number=0;
  interest:number=0;
  principal:number=0;
  time=0;
  final=0;

  houseloanamount(){
    this.final = this.amount + (10/100) * this.amount;
  }

}
