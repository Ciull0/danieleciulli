import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  info = {
    'link': "link",
    'url': "url",
    'title': "title",
    'subTitle': "subTitle"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
