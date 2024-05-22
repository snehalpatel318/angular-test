import { Component } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,NgClass,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = '1.introduction';
  myBtn:string = 'My Button';
  counter:number = 0;

  // attribute binding 
  isDisabled:boolean = true;
  angularImage:string = '/assets/Angular.png';

  // style binding
  bgColor:string = 'green';
  titleColor:string = 'white';
  description:string = 'font-size:50px; color:red';

  // Class binding
  redText:string = 'abcd';

  incrementCounter(){
    this.counter++;
  }

  inputText:string="Initial Value";

  // ngClass
  message:string ="This is a dangerous message";
  classes:string="danger text-size";

  //ngStryle
  selectedColor:string = 'red';
  
}
