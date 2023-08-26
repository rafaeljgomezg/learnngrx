import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {NgFor} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';
import { ErrorComponent } from './component/error/error.component';
import { FooterComponent } from './component/footer/footer.component';
import { blogReducer } from './shared/store/Blog/blog.reducer';
import { AppState } from './shared/store/Global/app.state';
import { AddblogComponent } from './component/addblog/addblog.component';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    NavbarComponent,
    HomeComponent,
    CounterComponent,
    BlogComponent,
    ErrorComponent,
    FooterComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState, {}),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatCardModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    NgFor,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
