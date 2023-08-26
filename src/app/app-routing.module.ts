import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'counter', component:CounterComponent},
  {path: 'blog', component: BlogComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
