import { Component } from '@angular/core';
import { 
  DatePipe, 
  UpperCasePipe, 
  LowerCasePipe, 
  TitleCasePipe, 
  CurrencyPipe, 
  DecimalPipe, 
  PercentPipe, 
  JsonPipe, 
  SlicePipe, 
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-pipes-assignment',
  imports: [
    DatePipe, 
    UpperCasePipe, 
    LowerCasePipe, 
    TitleCasePipe, 
    CurrencyPipe, 
    DecimalPipe, 
    PercentPipe, 
    JsonPipe, 
    SlicePipe,
    CommonModule
  ],
  templateUrl: './pipes-assignment.html',
  styleUrl: './pipes-assignment.css'
})
export class PipesAssignment {

  // String
  userName: string = 'Sony Phoebe';

  // Number
  userAge: number = 23;
  amount: number = 12345.6789;

  // Date
  currentDate: Date = new Date();

  // JSON object
  user = {
    name: 'Sony',
    age: 23,
    country: 'India'
  };

  // Boolean
  isLoggedIn: boolean = true;

  // Array
  movies: string[] = ['Kantara', 'Idly Kottu', 'Mirai', 'Og'];

}
