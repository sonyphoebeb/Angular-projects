import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-page',
  imports: [],
  templateUrl: './hook-page.html',
  styleUrl: './hook-page.css'
})
export class HookPage implements 
OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy 
{
  ngOnInit() {
    console.log('HookPage: ngOnInit');
  }

  ngOnChanges(changes: any) {
    console.log('HookPage: ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('HookPage: ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('HookPage: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('HookPage: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('HookPage: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('HookPage: ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('HookPage: ngOnDestroy');
  }

}
