import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureDetectionComponent } from './feature-detection.component';

const routes: Routes = [
  { path: '', component: FeatureDetectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDetectionRoutingModule { }
