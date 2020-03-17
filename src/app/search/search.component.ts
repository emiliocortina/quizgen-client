import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/api.service';
import {Router} from '@angular/router';

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
    selectedCategory;

    languages = [
        {
            label: 'English',
            id: 'en'
        },
        {
            label: 'Español',
            id: 'es'
        }
    ];
    selectedLanguage = this.languages[0];

    constructor(private api: ApiService, private router: Router) {
    }

    ngOnInit() {
    }

    searchWithLabel() {
        this.loading = true;
        this.error = undefined;
        this.entities = [];
        this.api.searchEntitiesByLabel(this.searchLabel, this.selectedLanguage.id).subscribe((res) => {
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
        console.log(this.selectedCategory.label);
        this.router.navigate(['/generate', this.selectedEntity, this.selectedCategory.id, this.selectedLanguage.id]);
    }
}
