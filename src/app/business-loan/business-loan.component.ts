import { Component } from '@angular/core';

@Component({
  selector: 'app-business-loan',
  templateUrl: './business-loan.component.html',
  styleUrls: ['./business-loan.component.css']
})
export class BusinessLoanComponent {

  amount:number=0;
  interest:number=0;
  principal:number=0;
  time=0;
  final=0;

  // businessloaninterest(){

  //   this.interest = (this.amount * (14/100) * this.time) / 100 ;

  // }

  businessloanamount(){
    this.final = this.amount + (14/100) * this.amount;
  }


}

