import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { highlightPipe } from './pipes/highlight.pipe';
import { HighlightComponent } from './components/highlight/highlight.component';
import { InitialsComponent } from './components/initials/initials.component';
import { initialsPipe } from './pipes/initials.pipe';
import { dateComponent } from './components/date/data.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { NumberComponent } from './components/number/number.component';

const routes: Routes = [
  {path:'', redirectTo:'/highlight', pathMatch: 'full'},
  {path:'highlight', component:HighlightComponent},
  {path:'initials', component:InitialsComponent},
  {path: 'date', component: dateComponent},
  {path: 'currency', component: CurrencyComponent},
  {path: 'number', component: NumberComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    highlightPipe,
    HighlightComponent,
    InitialsComponent,
    initialsPipe, 
    dateComponent, CurrencyComponent, NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
