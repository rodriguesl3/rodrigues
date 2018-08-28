import { Component, OnInit, HostListener } from '@angular/core';
import { Chart } from 'chart.js';
import { MainServiceService } from './service/main-service.service';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    chart = [];
    experiencesList = [];
    mugCoffe = 0;
    projects = 0;
    frameworks = 0;
    frameWorksExperience = [];
    constructor(private _mainService: MainServiceService) { }
    @HostListener('window:scroll', []) onWindowScroll() {
        // do some stuff here when the window is scrolled

        const verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;

        if (verticalOffset >= 300) {
            this.mugCoffe = 2 * ((22 * 12) * 5);
            this.projects = 12 * 7;
            this.projects = 25;
        }
    }


    ngOnInit() {

        this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
                labels: ['.Net', 'SQL', 'Angular', 'JQuery', 'Archtecture', 'Automation'],
                datasets: [{
                    label: 'Experience Value',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        this._mainService.getFrameworksExperience().subscribe(response => {
            this.chart.data.datasets[0].data = response;
            this.chart.update();
        });


        this._mainService.getExperiences().subscribe(exp => {
            this.experiencesList = exp;
        });
    }

}
