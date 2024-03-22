import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { APP_STATE_NAME } from './state/state.interface';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state';
import { TestComponent } from './components/test/test.component';
import { AboutComponent } from './components/about/about.component';
import { BoxContentComponent } from './components/box-content/box-content.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OurSoftwareComponent } from './components/our-software/our-software.component';
import { ShellComponent } from './components/shell/shell.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { WebOrderingComponent } from './components/web-ordering/web-ordering.component';
import { OrderProcessingComponent } from './components/order-processing/order-processing.component';
import { WholesaleOrderingComponent } from './components/wholesale-ordering/wholesale-ordering.component';
import { LensDesignComponent } from './components/lens-design/lens-design.component';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { FrameOrderingComponent } from './components/frame-ordering/frame-ordering.component';
import { DigitalTwinComponent } from './components/digital-twin/digital-twin.component';
import { WhatWeDoLinksComponent } from './components/what-we-do-links/what-we-do-links.component';
import { WhatWeDoLinksSmallComponent } from './components/what-we-do-links-small/what-we-do-links-small.component';
import { WhatWeDoLinksLargeComponent } from './components/what-we-do-links-large/what-we-do-links-large.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: [APP_STATE_NAME], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CarouselComponent,
    ShellComponent,
    AboutComponent,
    TestComponent,
    OurSoftwareComponent,
    WhatWeDoComponent,
    FooterComponent,
    BoxContentComponent,
    CaseStudiesComponent,
    ContactUsComponent,
    WebOrderingComponent,
    OrderProcessingComponent,
    WholesaleOrderingComponent,
    LensDesignComponent,
    ManufacturingComponent,
    FrameOrderingComponent,
    DigitalTwinComponent,
    WhatWeDoLinksComponent,
    WhatWeDoLinksSmallComponent,
    WhatWeDoLinksLargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
