import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'app-parent-component',
    templateUrl: './parent-component.component.html',
    styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
    title: String = 'Hello World';
    size: String = 'normal';

    @Input() color: string;

    changeSizeFromParent(fontSize: String) {
        this.size = fontSize;
    }

    constructor() {
    }

    ngOnInit() {
        console.log(this.color);
    }

}
