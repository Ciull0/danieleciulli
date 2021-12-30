import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  textTest: string = 'Hello World';
  content: Array<string> = [];

  ngOnInit(): void {
    for(let i=0; i<200; i++){
      this.content.push(this.textTest);
    }
  }

}
