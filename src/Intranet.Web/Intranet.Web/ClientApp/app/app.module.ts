﻿import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UniversalModule } from 'angular2-universal'
import { HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component'
import { HomeComponent } from './components/home/home.component'
import { FetchDataComponent } from './components/fetchdata/fetchdata.component'
import { CounterComponent } from './components/counter/counter.component'
import { NewsComponent } from './components/news/news.component'
import { NewsNewComponent } from './components/news/news-new.component'
import { NewsDetailComponent } from './components/news/news-detail.component'
import { NewAtCertComponent } from './components/newatcert/newatcert.component'

// Services
import { DataService } from './shared/data_services/data.service'
import { ConfigService } from './shared/api_settings/config.service'
import { TokenService } from './shared/data_services/jwt-token.service'


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        NewsComponent,NewsNewComponent,NewsDetailComponent,
        NewAtCertComponent
    ],
    providers: [
        DataService,
        ConfigService,
        TokenService,
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'news', component: NewsComponent },
            { path: 'news-new', component: NewsNewComponent },
            { path: 'news-detail/:id', component: NewsDetailComponent },
            { path: 'newatcert', component: NewAtCertComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}