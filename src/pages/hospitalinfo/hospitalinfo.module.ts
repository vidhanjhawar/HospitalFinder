import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalinfoPage } from './hospitalinfo';

@NgModule({
  declarations: [
    HospitalinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalinfoPage),
  ],
})
export class HospitalinfoPageModule {}
