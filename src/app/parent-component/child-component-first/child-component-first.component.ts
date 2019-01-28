import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-child-component-first',
    templateUrl: './child-component-first.component.html',
    styleUrls: ['./child-component-first.component.css']
})
export class ChildComponentFirstComponent implements OnInit {
    sizeArray: object[] = [
        {
            title: 'маленький шрифт',
            value: 'sizeSmall'
        },
        {
            title: 'средний шрифт',
            value: 'sizeMedium'
        },
        {
            title: 'большой шрифт',
            value: 'sizeLarge'
        }
    ];

    constructor() {
    }

    ngOnInit() {

    }

}
