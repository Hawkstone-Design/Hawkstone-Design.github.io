import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { AboutComponent } from './components/about/about.component';
import { BoxContentComponent } from './components/box-content/box-content.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  
  { path: 'home', component:  HomePageComponent},
  { path: '', component:  HomePageComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'test', component:  TestComponent},
  { path: 'box', component:  BoxContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
