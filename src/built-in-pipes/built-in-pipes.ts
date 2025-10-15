import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css'
})
export class BuiltInPipes {

  name = 'sony selvaraj';
  today = new Date();
  price = 2999.99;
  value = 12345.6789;
  score = 0.875;
  items = ['Angular', 'React', 'Vue', 'Svelte'];
  user = { name: 'Sony', role: 'Developer', location: 'India' };

}
