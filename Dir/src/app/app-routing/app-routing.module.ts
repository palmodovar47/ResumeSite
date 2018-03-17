import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MyResumeComponent } from '../my-resume/my-resume.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { JobComponent } from '../job/job.component';
import { ProductComponent } from '../product/product.component';
import { TechComponent } from 'app/tech/tech.component';
import { RefComponent } from 'app/ref/ref.component';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'myResume', component: MyResumeComponent, children: [
    { path: 'job/:id', component: JobComponent },
  ] },
  { path: 'portfolio', component: PortfolioComponent, children: [
    { path: 'portfolioItem/:id', component: PortfolioItemComponent },
  ] },
  { path: 'product/:id', component: ProductComponent },
  { path: 'tech', component: TechComponent },
  { path: 'ref', component: RefComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
