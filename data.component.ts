import { Component } from "@angular/core";

@Component({
    selector: 'data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css'],
})export class dateComponent {
    date = new Date();
}