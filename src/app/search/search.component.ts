import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/api.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchLabel: string;
    loading = false;
    entities;
    error = undefined;
    categories = [
        {
            label: 'Geography',
            id: 'Q52511956'
        },
        {
            label: 'Companies',
            id: 'Q18608993'
        },

    ];
    selectedEntity;
    selectedCategory: any;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
    }

    searchWithLabel() {
        this.loading = true;
        this.error = undefined;
        this.entities = [];
        this.api.searchEntitiesByLabel(this.searchLabel).subscribe((res) => {
                console.log(res);
                this.loading = false;
                this.entities = res;
            },
            (err) => {
                this.loading = false;
                this.error = err.error.message;
            }
        )
        ;
    }

    generateQuestions() {
        console.log(this.selectedEntity);
        console.log(this.selectedCategory);
    }
}
