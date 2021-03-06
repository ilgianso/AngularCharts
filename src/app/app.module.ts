import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DoughnutsDataService } from './doughnuts-data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DoughnutComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
