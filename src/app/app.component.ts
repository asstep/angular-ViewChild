import {Component, ViewChild} from '@angular/core';
import {ParentComponentComponent} from "./parent-component/parent-component.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'session5';
    color = 'black';

    @ViewChild(ParentComponentComponent)
    changeFontSize: ParentComponentComponent;

    isChangeSize(event) {
        console.log('parent Size: ' + event.target.value);
        this.changeFontSize.changeSizeFromParent(event.target.value);
    }

    isChangeColor(event) {
        console.log('parent Color: ' + event.target.value);
        this.color = event.target.value;
    }

}
