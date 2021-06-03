import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { WarningAlert2Component } from './warning-alert2/warning-alert2.component';
import { ChallangeComponent } from './challange/challange.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { ParentComponent } from './output-and-input/parent/parent.component';
import { ChildComponent } from './output-and-input/child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooComponent } from './boo/boo.component';
import { WaldComponent } from './wald/wald.component';

const appRoutes: Routes = [
  { path: '', component: ChallangeComponent },
  { path: 'warnnig', component: WarningAlertComponent },
  { path: 'parent', component: ParentComponent },
  // { path: '*', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    WarningAlert2Component,
    ChallangeComponent,
    Exercice3Component,
    ParentComponent,
    ChildComponent,
    NotFoundComponent,
    BooComponent,
    WaldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
