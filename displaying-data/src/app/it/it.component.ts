import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it',
  template: `
    <p>
      it works!
    </p>
  `,
  styleUrls: ['./it.component.css']
})
export class ItComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
