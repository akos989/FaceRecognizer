import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeatureDetectionRoutingModule} from './feature-detection-routing.module';
import {FeatureDetectionComponent} from './feature-detection.component';
import {ChooseMethodComponent} from '../../components/choose-method/choose-method.component';
import {FromUrlComponent} from '../../components/from-url/from-url.component';
import {WebcameraComponent} from '../../components/webcamera/webcamera.component';
import {UploadPhotoComponent} from '../../components/upload-photo/upload-photo.component';
import {FormsModule} from '@angular/forms';
import {DetectionResultComponent} from '../../components/detection-result/detection-result.component';


@NgModule({
  declarations: [
    FeatureDetectionComponent,
    ChooseMethodComponent,
    FromUrlComponent,
    WebcameraComponent,
    UploadPhotoComponent,
    DetectionResultComponent
  ],
  imports: [
    CommonModule,
    FeatureDetectionRoutingModule,
    FormsModule
  ],
})
export class FeatureDetectionModule {
}
