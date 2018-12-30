import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { StarWarsService } from './star-wars.service';
import { HeaderComponent } from './header/header.component';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: ':side',
        component: ListComponent
      }
    ]
  },
  {
    path: 'new-character',
    component: AddCharacterComponent
  },
  {
    path: '**',
    redirectTo: '/characters/all'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ListItemComponent,
    AddCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
