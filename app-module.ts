import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEventComponent } from './service-product-image-event-component/service-product-image-event-component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail-component/service-product-image-event-detail-component';
import { CatalogServiceComponent } from './catalog-service-component/catalog-service-component';
import { CustomerServiceComponent } from './customer-service-component/customer-service-component';
import { ServiceProductHttpHandleError } from './service-product-http-handle-error/service-product-http-handle-error';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    CatalogServiceComponent,
    CustomerServiceComponent,
    ServiceProductHttpHandleError,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
