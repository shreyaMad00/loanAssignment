import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-loan-component',
  templateUrl: './personal-loan-component.component.html',
  styleUrls: ['./personal-loan-component.component.css']
})
export class PersonalLoanComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amount:number=0;
  interest:number=0;
  principal:number=0;
  time=0;
  final=0;

  personalloanamount(){
    this.final = this.amount + (8/100) * this.amount;
  }


}
