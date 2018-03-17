import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { JobComponent } from './job/job.component';
import { ProductComponent } from './product/product.component';
import { TechComponent } from './tech/tech.component';
import { RefComponent } from './ref/ref.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyResumeComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    JobComponent,
    ProductComponent,
    TechComponent,
    RefComponent,
    PortfolioItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
