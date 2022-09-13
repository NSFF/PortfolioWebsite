import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  barChartLabels= ['Python','C', 'JS/TS', 'Scala', 'Java', 'Assembly', 'Racket', 'Matlab', 'HTML', 'CSS', 'PHP','ASP.Net', '.Net','C#','SQL', 'XML', 'JSON', 'Swift'];
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];
  barChartData = [
    {data: [4,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2], label: ['Programming Languages'], backgroundColor: ["rgba(3, 117, 13, 0.5)","rgb(0, 187, 255,0.5)"], hoverBackgroundColor: ["rgba(3, 117, 13)", "rgb(0, 187, 255)"]},
  ]
  barChartOptions = {
    responsive: true,
  }

  frameworkChartLabels= ['Keras', 'Scikit-learn', 'Seaborn', 'NumPy', 'Pandas','Laravel', 'PyTorch', 'MySQL', 'TensorFlow', 'NN4j', 'Angular', 'AWS', 'Git', 'Docker', 'SPSS'];
  frameworkChartLegend = true;
  frameworkChartPlugins = [pluginDataLabels];
  frameworkChartData = [
    {data: [4,3,3,3,3,3,2,2,2,2,2,2,2,2,2], label: ['Frameworks and Software'], backgroundColor: ["rgba(3, 117, 13, 0.5)","rgb(0, 187, 255,0.5)"], hoverBackgroundColor: ["rgba(3, 117, 13)", "rgb(0, 187, 255)"]},
  ]
  frameworkChartOptions = {
    responsive: true,
  }

  knowledgeChartLabels= ['ML','NN','DNN','CNN','Statistics','Math','NLP','Data Engineering','RL'];
  knowledgeChartLegend = true;
  public knowledgeChartType: ChartType = 'radar';
  knowledgeChartPlugins = [pluginDataLabels];
  knowledgeChartData: ChartData<'radar'> = {
    labels: this.knowledgeChartLabels,
    datasets: [
    {data: [4,3,3,3,3,3,2,2,1], label: 'Data Science/Machine learning Knowledge', backgroundColor: "rgba(3, 117, 13, 0.5)", borderColor: "rgb(0, 187, 255,0.3)", pointBackgroundColor: "rgb(0, 187, 255,0.3)"}
  ]}
  knowledgeChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  }


  constructor() { }

  ngOnInit(): void {
  }

}
