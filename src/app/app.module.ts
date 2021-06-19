import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './compents/nav/nav.component';
import { ContentComponent } from './compents/content/content.component';
import { FooterComponent } from './compents/footer/footer.component';
import { HomeComponent } from './compents/home/home.component';
import { ProductsComponent } from './compents/products/products.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { UsdtoEgpPipe } from './pipes/usdto-egp.pipe';
import { ParentComponent } from './compents/order/parent/parent.component';
import { ChildComponent } from './compents/order/child/child.component';
import { Allprods2Component } from './compents/day5/allprods2/allprods2.component';
import { AddnewProdComponent } from './compents/day5/addnew-prod/addnew-prod.component';
import { Details2Component } from './compents/day5/details2/details2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    HighlightDirective,
    UsdtoEgpPipe,
    ParentComponent,
    ChildComponent,
    Allprods2Component,
    AddnewProdComponent,
    Details2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
