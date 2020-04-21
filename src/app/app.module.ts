import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChipsComponent} from './chips/chips.component';

import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ChipComponent} from './chip/chip.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {NameService} from './services/name.service';
import {TextFieldModule} from '@angular/cdk/text-field';
import {FormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , MatButtonModule
    , MatChipsModule
    , MatFormFieldModule, MatIconModule, MatDatepickerModule, MatMomentDateModule, TextFieldModule, FormsModule
  ],
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
