import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HiringFormPage } from './hiring-form-page/hiring-form-page';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', component: HiringFormPage  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
