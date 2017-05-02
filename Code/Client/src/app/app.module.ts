import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteheaderComponent } from './shared/siteheader/siteheader.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { TitleComponent } from './shared/library/title/title.component';
import { MaincontentComponent } from './moq/home/maincontent/maincontent.component';
import { RightsideComponent } from './moq/home/rightside/rightside.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { OfficebearersComponent } from './officebearers/officebearers.component';
import { FamilytreeComponent } from './familytree/familytree.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'bearers', component: OfficebearersComponent },
  { path: 'family', component: FamilytreeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SiteheaderComponent,
    NavigationComponent,
    TitleComponent,
    MaincontentComponent,
    RightsideComponent,
    HomeComponent,
    HistoryComponent,
    ContactComponent,
    FormComponent,
    OfficebearersComponent,
    FamilytreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
