import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { StarWarsService } from './star-wars.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ListItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
