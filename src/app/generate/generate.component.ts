import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-generate',
    templateUrl: './generate.component.html',
    styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

    questions;
    loading = true;

    constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        const category = this.route.snapshot.paramMap.get('category');
        const language = this.route.snapshot.paramMap.get('language');

        if (id && category) {
            this.api.generateQuestions(id, category, 10, language).subscribe((res) => {
                this.questions = res;
                this.loading = false;
                console.log(this.questions[0]);
            });
        } else {
            this.router.navigate(['']);
        }
    }

}
