import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationList = ["About", "Work Experience", "Education", "Skills", "Certificates", "Projects", "Contact"]

  constructor() { }

  ngOnInit(): void {
  }

}
