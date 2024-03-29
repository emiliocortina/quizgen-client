import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from 'src/app/search/search.component';
import {GenerateComponent} from 'src/app/generate/generate.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'generate/:id/:category/:language', component: GenerateComponent},
  {path: '**', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
