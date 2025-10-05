import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HookPage } from './hook-page/hook-page';

const routes: Routes = [
  { path: '', redirectTo: 'hook-page', pathMatch: 'full' },
  { path: 'hook-page', component: HookPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleHooksRoutingModule { }
