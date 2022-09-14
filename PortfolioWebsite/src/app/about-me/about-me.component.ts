import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  statsChartLabels= ['Intellect','Strength','Vitality','Agility','Luck','Dexterity'];
  statsChartLegend = true;
  public statsChartType: ChartType = 'radar';
  statsChartPlugins = [pluginDataLabels];
  statsChartData: ChartData<'radar'> = {
    labels: this.statsChartLabels,
    datasets: [
    {data: [8,7,7,5,2,3], label: 'Statistics of My Genes', backgroundColor: "rgba(3, 117, 13, 0.5)", borderColor: "rgb(0, 187, 255,0.3)", pointBackgroundColor: "rgb(0, 187, 255,0.3)"}
  ]}
  statsChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14
          }
        }
      }
    }
  }

  interestsChartLabels= ['Swimming','Fantasy Stories','Gaming','Economy','Politics','History'];
  interestsChartLegend = true;
  public interestsChartType: ChartType = 'radar';
  interestsChartPlugins = [pluginDataLabels];
  interestsChartData: ChartData<'radar'> = {
    labels: this.interestsChartLabels,
    datasets: [
    {data: [10,9,9,7,3,6], label: 'My Interests/Hobbies', backgroundColor: "rgba(3, 117, 13, 0.5)", borderColor: "rgb(0, 187, 255,0.3)", pointBackgroundColor: "rgb(0, 187, 255,0.3)"}
  ]}
  interestsChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14
          }
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
