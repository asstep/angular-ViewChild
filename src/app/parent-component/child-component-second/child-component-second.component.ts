import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-child-component-second',
    templateUrl: './child-component-second.component.html',
    styleUrls: ['./child-component-second.component.css']
})
export class ChildComponentSecondComponent implements OnInit {
    colorArray: object[] = [
        {
            title: 'красный',
            value: 'red'
        },
        {
            title: 'синий',
            value: 'blue'
        },
        {
            title: 'зеленый',
            value: 'green'
        }
    ];

    @Output() onChanged = new EventEmitter();
    changeColor(value) {
        this.onChanged.emit(value);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
