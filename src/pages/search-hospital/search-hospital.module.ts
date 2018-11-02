import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchHospitalPage } from './search-hospital';

@NgModule({
  declarations: [
    SearchHospitalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchHospitalPage),
  ],
})
export class SearchHospitalPageModule {}
