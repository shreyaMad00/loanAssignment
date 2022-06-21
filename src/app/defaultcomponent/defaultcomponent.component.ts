import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultcomponent',
  templateUrl: './defaultcomponent.component.html',
  styleUrls: ['./defaultcomponent.component.css']
})
export class DefaultcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amount:number=0;
  interest:number=0;
  principal:number=0;
  salary=0;
  final=0;

  businessloaninterest(){

    this.interest = (this.amount * (14/100) * this.salary) / 100 ;

  }

  businessloanamount(){
    this.amount = this.amount + this.interest;
  }


}
