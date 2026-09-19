import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event-component/service-product-image-event-component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail-component/service-product-image-event-detail-component';
import { ServiceProductHttpHandleError } from './service-product-http-handle-error/service-product-http-handle-error';

const routes: Routes = [
  {path:'service-product-image-event', component:ServiceProductImageEventComponent},
  {path:'service-product-image-event/:id', component:ServiceProductImageEventDetailComponent},
  {path: 'service-product-http-handle-error', component:ServiceProductHttpHandleError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
