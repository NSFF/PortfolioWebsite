import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationList = ["Work Experience", "Education", "Skills", "Certificates", "Projects", "About Me", "Contact"]

  constructor() { }

  ngOnInit(): void {
  }

}
