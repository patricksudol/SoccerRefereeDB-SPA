import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-landing',
  templateUrl: './referee-landing.component.html',
  styleUrls: ['./referee-landing.component.scss']
})
export class RefereeLandingComponent implements OnInit {

  referees: string[];
  constructor() { 
    this.referees.push('cookie');
    this.referees.push('monkey');
  }

  ngOnInit(): void {
  }

}
