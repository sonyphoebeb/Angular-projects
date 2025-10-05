import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing-module';
import { HookPage } from './hook-page/hook-page';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule,
    HookPage
  ]
})
export class LifecycleHooksModule { }
