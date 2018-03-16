import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookSerService } from './book-ser.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [BookSerService],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
