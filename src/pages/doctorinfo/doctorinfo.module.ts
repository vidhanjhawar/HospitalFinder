import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorinfoPage } from './doctorinfo';

@NgModule({
  declarations: [
    DoctorinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorinfoPage),
  ],
})
export class DoctorinfoPageModule {}
