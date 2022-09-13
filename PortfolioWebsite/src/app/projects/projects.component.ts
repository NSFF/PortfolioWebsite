import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../../assets/data/projectData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  projects = new ProjectData();

  filters = {
    languages: '',
    frameworks: '',
  }

  constructor() { }
  
  
  ngOnInit(): void {
  }
}
