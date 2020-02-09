import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {

    this.getHome().subscribe((res) => console.log(res));
  }


  public getHome() {
    return this.http.get('http://localhost:5000/search/entities.json?label=Madrid');
  }
}
