import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { HouseLoanComponentComponent } from './house-loan-component/house-loan-component.component';
import { PersonalLoanComponentComponent } from './personal-loan-component/personal-loan-component.component';
import { DefaultcomponentComponent } from './defaultcomponent/defaultcomponent.component';


const routes: Routes = [
  {path:"bloan" , component: BusinessLoanComponent},
{path:"ploan" , component: PersonalLoanComponentComponent},
{path:"hloan" , component: HouseLoanComponentComponent},
{path:"" , component: DefaultcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
