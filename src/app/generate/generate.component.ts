import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from 'src/app/api.service';

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

        if (id && category) {
            this.api.generateQuestions(id, category, 5).subscribe((res) => {
                this.questions = res;
                this.loading = false;
            });
        } else {
            this.router.navigate(['']);
        }
    }

}
