import { Component, OnInit } from '@angular/core';
import { filterTypes } from 'src/app/constants/filters.constant';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    public filterTypes = Array.from(filterTypes.keys());

    constructor() { }

    ngOnInit(): void {
    }

}
