import {Component, Input, OnInit} from '@angular/core';
import {Answer} from 'src/app/question/answer';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    @Input() question: any;
    anwsers: Answer[];
    solution = false;

    constructor() {
    }

    ngOnInit(): void {
        const correctAnswer = new Answer(this.question.correct_answer.entityLabel.value, true);
        this.anwsers = [];
        this.anwsers.push(correctAnswer);
        for (const distractor of this.question.distractors) {
            this.anwsers.push(new Answer(distractor.entityLabel.value, false));
        }
        this.shuffle(this.anwsers);
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}
