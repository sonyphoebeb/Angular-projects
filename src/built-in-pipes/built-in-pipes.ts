import { Component } from '@angular/core';
import { 
  UpperCasePipe, 
  LowerCasePipe, 
  TitleCasePipe, 
  DatePipe, 
  CurrencyPipe, 
  DecimalPipe, 
  PercentPipe, 
  SlicePipe, 
  JsonPipe 
} from '@angular/common';

@Component({
  selector: 'app-built-in-pipes',
  imports: [
    UpperCasePipe, 
    LowerCasePipe, 
    TitleCasePipe, 
    DatePipe, 
    CurrencyPipe, 
    DecimalPipe, 
    PercentPipe, 
    SlicePipe, 
    JsonPipe
  ],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css'
})
export class BuiltInPipes {

  name = 'sony phoebe';
  today = new Date();
  price = 2999.99;
  value = 12345.6789;
  score = 0.875;
  items = ['Angular', 'React', 'Vue', 'Svelte'];
  user = { name: 'Sony', role: 'FullStack Developer', location: 'India' };

}
