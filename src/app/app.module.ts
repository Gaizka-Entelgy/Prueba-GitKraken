import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { TapComponent } from './tap/tap.component';
import { HeaderComponent } from './header/header.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { FooterComponent } from './footer/footer.component';
import { ArrayMapComponent } from './array-map/array-map.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { ForeachComponent } from './foreach/foreach.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerIntervalComponent,
    FromEventComponent,
    MapFilterComponent,
    TapComponent,
    HeaderComponent,
    BehaviorSubjectComponent,
    FooterComponent,
    ArrayMapComponent,
    FilterComponent,
    ForeachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
