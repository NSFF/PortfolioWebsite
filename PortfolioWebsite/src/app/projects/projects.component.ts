import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../../assets/data/projectData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  projects = new ProjectData();

  filterargs = {title: 'MySQL'};
  /*filters = {
    MySQL: false,
    JSTS: false,
  };*/
  filters = {
    languages: '',
    frameworks: '',
  }

  constructor() { }
  
  
  ngOnInit(): void {
  }
}
