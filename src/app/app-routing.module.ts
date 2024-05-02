import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'parent',component:ParentComponentComponent},
  {path:'about',component:AboutComponent},
  {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
